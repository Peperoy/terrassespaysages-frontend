import { useEffect, useState } from 'react';
import Router from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { CONSENT_KEY } from '../lib/cookieConsent';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Charge Google Analytics 4 et Vercel Analytics uniquement si l'utilisateur a accepté les cookies (mesure d'audience).
 */
export default function AnalyticsLoader() {
  const [audienceAllowed, setAudienceAllowed] = useState(false);

  useEffect(() => {
    const sync = () => {
      setAudienceAllowed(localStorage.getItem(CONSENT_KEY) === 'accepted');
    };
    sync();
    window.addEventListener('cookie-consent-changed', sync);
    return () => window.removeEventListener('cookie-consent-changed', sync);
  }, []);

  useEffect(() => {
    if (!audienceAllowed || !GA_ID) return;
    if (document.getElementById('ga4-gtag-js')) return;

    const gtagScript = document.createElement('script');
    gtagScript.id = 'ga4-gtag-js';
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(gtagScript);

    const inline = document.createElement('script');
    inline.id = 'ga4-config';
    // Équivalent à la balise officielle gtag.js (chargée ici seulement après consentement cookies — EEE / CNIL).
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(inline);
  }, [audienceAllowed]);

  // Pages vues sur navigation client (Next.js), après chargement initial gtag
  useEffect(() => {
    if (!audienceAllowed || !GA_ID) return;

    const onRoute = (url) => {
      if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
      window.gtag('config', GA_ID, { page_path: url });
    };

    Router.events.on('routeChangeComplete', onRoute);
    return () => Router.events.off('routeChangeComplete', onRoute);
  }, [audienceAllowed]);

  if (!audienceAllowed) return null;

  return <Analytics />;
}
