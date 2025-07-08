import { supabase } from "@/integrations/supabase/client";

interface AnalyticsEvent {
  event_name: string;
  event_data?: any;
  user_id?: string;
}

export const useAnalytics = () => {
  const trackEvent = async ({ event_name, event_data, user_id }: AnalyticsEvent) => {
    try {
      const session_id = sessionStorage.getItem('analytics_session') || crypto.randomUUID();
      sessionStorage.setItem('analytics_session', session_id);

      await supabase.functions.invoke('analytics-tracker', {
        body: {
          event_name,
          event_data: {
            ...event_data,
            url: window.location.href,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
          },
          user_id,
          session_id,
        },
      });
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  };

  const trackPageView = (page: string, user_id?: string) => {
    trackEvent({
      event_name: 'page_view',
      event_data: { page },
      user_id,
    });
  };

  const trackUserAction = (action: string, data?: any, user_id?: string) => {
    trackEvent({
      event_name: 'user_action',
      event_data: { action, ...data },
      user_id,
    });
  };

  const trackFormSubmission = (form_name: string, success: boolean, user_id?: string) => {
    trackEvent({
      event_name: 'form_submission',
      event_data: { form_name, success },
      user_id,
    });
  };

  const trackConversion = (type: string, value?: number, user_id?: string) => {
    trackEvent({
      event_name: 'conversion',
      event_data: { type, value },
      user_id,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackUserAction,
    trackFormSubmission,
    trackConversion,
  };
};