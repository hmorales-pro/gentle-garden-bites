import { useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { CookieConsent } from './CookieConsent';

export const GoogleAnalytics = () => {
  useEffect(() => {
    const loadGoogleAnalytics = async () => {
      const consent = localStorage.getItem("ga-consent");
      if (consent !== "accepted") return;

      // Fetch the GA ID using Supabase client
      const { data, error } = await supabase.functions.invoke('get-ga-id');
      
      if (error) {
        console.error('Error fetching GA ID:', error);
        return;
      }

      const { gaId } = data;
      if (!gaId) return;

      // Create and append the first script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      // Create and append the second script
      const script2 = document.createElement('script');
      script2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', {
          'cookie_flags': 'SameSite=None;Secure'
        });
      `;
      document.head.appendChild(script2);
    };

    loadGoogleAnalytics();
  }, []);

  return <CookieConsent />;
};