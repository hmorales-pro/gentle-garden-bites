import { useEffect } from 'react';

export const GoogleAnalytics = () => {
  useEffect(() => {
    const loadGoogleAnalytics = async () => {
      // Fetch the GA ID from environment
      const response = await fetch('https://covontuisogmogvhqmku.supabase.co/functions/v1/get-ga-id');
      const { gaId } = await response.json();

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
        gtag('config', '${gaId}');
      `;
      document.head.appendChild(script2);
    };

    loadGoogleAnalytics();
  }, []);

  return null;
};