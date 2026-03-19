/**
 * URL publique canonique du site — doit être identique à la propriété Google Search Console
 * (même schéma, même hôte : avec ou sans www, bon domaine).
 *
 * Définir dans .env / Vercel : NEXT_PUBLIC_SITE_URL=https://www.exemple.com
 */
function normalizeSiteUrl() {
  const fromEnv = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL;
  const fallback = 'https://www.terrassespaysages.com';
  const base = (fromEnv && String(fromEnv).trim()) || fallback;
  return base.replace(/\/$/, '');
}

export const SITE_URL = normalizeSiteUrl();

/** Hôte seul, pour affichage (ex. www.terrassespaysages.com) */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '');
