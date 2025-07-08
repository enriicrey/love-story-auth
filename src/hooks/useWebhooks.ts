import { supabase } from "@/integrations/supabase/client";

interface WebhookData {
  event_type: string;
  data: any;
  user_id?: string;
  enrichment?: {
    source?: string;
    device_info?: any;
    geolocation?: any;
  };
}

const WEBHOOK_URLS = {
  'servicio-contratado': 'https://hook.eu2.make.com/servicio-contratado',
  'pago-procesado': 'https://hook.eu2.make.com/pago-procesado',
  'mensaje-enviado': 'https://hook.eu2.make.com/mensaje-enviado',
  'evento-creado': 'https://hook.eu2.make.com/evento-creado',
  'resena-publicada': 'https://hook.eu2.make.com/resena-publicada',
  'pareja-webhook': 'https://hook.eu2.make.com/pareja-webhook',
  'proveedor-webhook': 'https://hook.eu2.make.com/proveedor-webhook',
};

export const useWebhooks = () => {
  const sendToMake = async (webhook_type: keyof typeof WEBHOOK_URLS, data: WebhookData) => {
    try {
      const webhook_url = WEBHOOK_URLS[webhook_type];
      
      // Add device and location info
      const enrichment = {
        ...data.enrichment,
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
      };

      // Get geolocation if available
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
        });
        enrichment.geolocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      } catch (geoError) {
        console.log('Geolocation not available:', geoError);
      }

      const response = await supabase.functions.invoke('make-webhook', {
        body: {
          webhook_url,
          event_type: data.event_type,
          data: data.data,
          user_id: data.user_id,
          enrichment,
        },
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response.data;
    } catch (error) {
      console.error('Webhook failed:', error);
      throw error;
    }
  };

  const sendServiceContracted = (contractData: any, user_id?: string) => {
    return sendToMake('servicio-contratado', {
      event_type: 'service_contracted',
      data: contractData,
      user_id,
    });
  };

  const sendPaymentProcessed = (paymentData: any, user_id?: string) => {
    return sendToMake('pago-procesado', {
      event_type: 'payment_processed',
      data: paymentData,
      user_id,
    });
  };

  const sendMessageSent = (messageData: any, user_id?: string) => {
    return sendToMake('mensaje-enviado', {
      event_type: 'message_sent',
      data: messageData,
      user_id,
    });
  };

  const sendEventCreated = (eventData: any, user_id?: string) => {
    return sendToMake('evento-creado', {
      event_type: 'event_created',
      data: eventData,
      user_id,
    });
  };

  const sendReviewPublished = (reviewData: any, user_id?: string) => {
    return sendToMake('resena-publicada', {
      event_type: 'review_published',
      data: reviewData,
      user_id,
    });
  };

  const sendCoupleRegistration = (coupleData: any) => {
    return sendToMake('pareja-webhook', {
      event_type: 'couple_registration',
      data: coupleData,
      enrichment: { source: 'landing_form' },
    });
  };

  const sendProviderRegistration = (providerData: any) => {
    return sendToMake('proveedor-webhook', {
      event_type: 'provider_registration',
      data: providerData,
      enrichment: { source: 'landing_form' },
    });
  };

  return {
    sendToMake,
    sendServiceContracted,
    sendPaymentProcessed,
    sendMessageSent,
    sendEventCreated,
    sendReviewPublished,
    sendCoupleRegistration,
    sendProviderRegistration,
  };
};