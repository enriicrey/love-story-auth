import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WebhookPayload {
  event_type: string;
  data: any;
  user_id?: string;
  notification?: {
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    action_url?: string;
    action_label?: string;
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

    const payload: WebhookPayload = await req.json();
    console.log('Received webhook:', payload);

    // Log the webhook event
    await supabase.from('webhook_logs').insert({
      event_type: payload.event_type,
      webhook_url: req.url,
      payload: payload,
      user_id: payload.user_id,
    });

    // Handle different webhook types
    switch (payload.event_type) {
      case 'notification':
        if (payload.notification && payload.user_id) {
          await supabase.from('notifications').insert({
            user_id: payload.user_id,
            title: payload.notification.title,
            message: payload.notification.message,
            type: payload.notification.type,
            action_url: payload.notification.action_url,
            action_label: payload.notification.action_label,
          });
        }
        break;

      case 'payment-status':
        if (payload.data.contract_id && payload.data.status) {
          await supabase
            .from('service_contracts')
            .update({ 
              status: payload.data.status === 'paid' ? 'accepted' : 'pending'
            })
            .eq('id', payload.data.contract_id);
        }
        break;

      case 'provider-response':
        if (payload.data.contract_id && payload.data.response) {
          await supabase
            .from('service_contracts')
            .update({ 
              status: payload.data.response,
              notes: payload.data.notes || null
            })
            .eq('id', payload.data.contract_id);
        }
        break;

      case 'reminder':
        if (payload.notification && payload.user_id) {
          await supabase.from('notifications').insert({
            user_id: payload.user_id,
            title: payload.notification.title,
            message: payload.notification.message,
            type: payload.notification.type,
            action_url: payload.notification.action_url,
            action_label: payload.notification.action_label,
          });
        }
        break;
    }

    return new Response(
      JSON.stringify({ success: true, event_type: payload.event_type }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});