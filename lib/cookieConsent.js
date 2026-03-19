/**
 * Clé localStorage pour le choix bannière cookies (nécessaire + mesure d'audience si accepté).
 */
export const CONSENT_KEY = 'cookie_consent';

/** @returns {'accepted' | 'refused' | null} */
export function getStoredConsent() {
  if (typeof window === 'undefined') return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === 'accepted' || v === 'refused') return v;
  return null;
}

export function notifyCookieConsentChanged() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('cookie-consent-changed'));
}
