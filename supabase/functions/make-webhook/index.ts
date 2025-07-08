import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MakeWebhookData {
  webhook_url: string;
  event_type: string;
  data: any;
  user_id?: string;
  enrichment?: {
    user_agent?: string;
    timestamp?: string;
    source?: string;
    device_info?: any;
    geolocation?: any;
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { webhook_url, event_type, data, user_id, enrichment }: MakeWebhookData = await req.json();

    // Prepare enriched payload
    const enrichedPayload = {
      event_type,
      data: {
        ...data,
        timestamp: new Date().toISOString(),
        user_agent: req.headers.get('user-agent') || enrichment?.user_agent,
        source: enrichment?.source || 'webapp',
        ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip'),
        ...enrichment,
      },
      user_id,
    };

    console.log(`Sending webhook to Make.com: ${webhook_url}`, enrichedPayload);

    // Send to Make.com
    const response = await fetch(webhook_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrichedPayload),
    });

    const responseText = await response.text();

    // Log the webhook attempt
    await supabase.from('webhook_logs').insert({
      event_type,
      webhook_url,
      payload: enrichedPayload,
      response_status: response.status,
      response_body: responseText,
      user_id,
    });

    if (!response.ok) {
      throw new Error(`Make.com webhook failed: ${response.status} ${responseText}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        webhook_url, 
        status: response.status,
        event_type 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Make webhook error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});