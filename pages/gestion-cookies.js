import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cookie } from 'lucide-react';
import LegalSection from '../components/LegalSection';
import { CONSENT_KEY, notifyCookieConsentChanged } from '../lib/cookieConsent';
import { SITE_HOST } from '../lib/siteConfig';

const Section = LegalSection;

const cookiesList = [
  {
    name: 'cookie_consent',
    type: 'Nécessaire',
    purpose: 'Mémoriser votre choix concernant l\'acceptation ou le refus des cookies (y compris mesure d\'audience)',
    duration: '6 mois',
    obligatoire: true,
  },
  {
    name: '_ga, _ga_*, _gid',
    type: 'Audience (consentement)',
    purpose: 'Google Analytics 4 : statistiques de fréquentation (pages vues, origine du trafic). Chargé uniquement si vous acceptez.',
    duration: 'Jusqu\'à 13 mois (selon paramètres GA)',
    obligatoire: false,
  },
  {
    name: 'Vercel Web Analytics',
    type: 'Audience (consentement)',
    purpose: 'Mesure d\'audience et performances du site via Vercel. Service orienté confidentialité ; chargé uniquement si vous acceptez.',
    duration: 'Selon la politique Vercel',
    obligatoire: false,
  },
];

export default function GestionCookies() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    setConsent(localStorage.getItem(CONSENT_KEY));
  }, []);

  const handleReset = () => {
    if (globalThis.window !== undefined) {
      localStorage.removeItem(CONSENT_KEY);
      notifyCookieConsentChanged();
      globalThis.window.location.reload();
    }
  };

  const allowAnalytics = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    notifyCookieConsentChanged();
    window.location.reload();
  };

  const denyAnalytics = () => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    notifyCookieConsentChanged();
    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>Gestion des cookies — Terrasses & Paysages Valenciennes</title>
        <meta name="description" content="Politique de gestion des cookies du site Terrasses & Paysages, conformément aux recommandations CNIL." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-cream to-warm-100" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-script text-coral text-2xl mb-3">Transparence</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Gestion des cookies</h1>
            <p className="text-base text-khaki font-body">
              Conformément aux recommandations de la CNIL et à la directive ePrivacy
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Section title="1. Qu'est-ce qu'un cookie ?">
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette)
              lors de la visite d&apos;un site internet. Il permet au site de mémoriser certaines informations
              relatives à votre navigation afin d&apos;améliorer votre expérience.
            </p>
            <p>
              Les cookies peuvent être déposés par le site que vous visitez (cookies first-party) ou par
              des services tiers intégrés à ce site (cookies third-party).
            </p>
          </Section>

          <Section title="2. Cookies utilisés sur ce site">
            <p>
              Le site <strong className="text-primary">{SITE_HOST}</strong> utilise des cookies{' '}
              <strong className="text-primary">strictement nécessaires</strong> (mémorisation de votre choix de cookies)
              sans consentement préalable, conformément à l&apos;article 82 de la loi Informatique et Libertés.
            </p>
            <p className="mt-3">
              Sous réserve de votre <strong className="text-primary">consentement</strong> via la bannière ou les boutons
              ci-dessous, nous chargeons également <strong className="text-primary">Google Analytics 4</strong> et{' '}
              <strong className="text-primary">Vercel Web Analytics</strong> pour la mesure d&apos;audience et l&apos;amélioration
              du site. Nous n&apos;utilisons pas de cookies publicitaires ni de pixel de reciblage.
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-warm-200">
                    <th className="text-left p-3 font-semibold text-primary rounded-tl-xl">Nom</th>
                    <th className="text-left p-3 font-semibold text-primary">Type</th>
                    <th className="text-left p-3 font-semibold text-primary">Finalité</th>
                    <th className="text-left p-3 font-semibold text-primary rounded-tr-xl">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  {cookiesList.map((cookie) => (
                    <tr key={cookie.name} className="border-t border-warm-200">
                      <td className="p-3 font-mono font-medium text-primary">{cookie.name}</td>
                      <td className="p-3">
                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                          {cookie.type}
                        </span>
                      </td>
                      <td className="p-3 text-primary/60">{cookie.purpose}</td>
                      <td className="p-3 text-primary/60">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="3. Services tiers et mesure d'audience">
            <p>
              Avec votre accord, les services suivants peuvent être activés (voir tableau section 2) :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 mt-2">
              <li>
                <strong className="text-primary">Google Analytics 4</strong> (Google Ireland Limited) — statistiques agrégées
                de fréquentation. Vous pouvez en savoir plus sur{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
                  la politique de confidentialité de Google
                </a>.
              </li>
              <li>
                <strong className="text-primary">Vercel Web Analytics</strong> (Vercel Inc.) — mesure d&apos;audience hébergée
                sur l&apos;infrastructure du site.{' '}
                <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
                  Politique associée (Vercel)
                </a>.
              </li>
            </ul>
            <p className="mt-3 text-sm text-primary/70">
              Nous n&apos;utilisons pas : publicité programmatique, Meta Pixel, chat tiers embarqué sur toutes les pages,
              ni cartes interactives avec traçage par défaut.
            </p>
          </Section>

          <Section title="4. Gérer vos préférences">
            <p>
              Vous pouvez à tout moment modifier vos préférences de cookies :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-primary">Via votre navigateur</strong> : la plupart des navigateurs vous permettent
                de refuser ou de supprimer les cookies dans leurs paramètres (Paramètres → Confidentialité → Cookies).
              </li>
              <li>
                <strong className="text-primary">Via le bouton ci-dessous</strong> : réinitialiser votre choix de consentement
                et voir à nouveau la bannière de cookies.
              </li>
            </ul>

            <div className="mt-4 space-y-4">
              <div className="bg-white border-2 border-warm-200 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 size={24} className="text-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">État actuel (mesure d&apos;audience)</p>
                    <p className="text-xs text-primary/60">
                      {consent === 'accepted' && 'Vous avez accepté Google Analytics et Vercel Analytics.'}
                      {consent === 'refused' && 'Vous avez refusé la mesure d’audience ; seuls les cookies nécessaires sont utilisés.'}
                      {consent !== 'accepted' && consent !== 'refused' && 'Aucun choix enregistré — la bannière s’affichera sur votre prochaine visite si nécessaire.'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={allowAnalytics}
                    className="bg-primary text-cream px-5 py-2.5 rounded-full text-sm font-body font-medium hover:bg-primary-dark transition-colors"
                  >
                    Autoriser la mesure d&apos;audience
                  </button>
                  <button
                    type="button"
                    onClick={denyAnalytics}
                    className="bg-warm-200 text-primary px-5 py-2.5 rounded-full text-sm font-body font-medium hover:bg-warm-300 transition-colors"
                  >
                    Refuser la mesure d&apos;audience
                  </button>
                </div>
              </div>

              <div className="bg-white border-2 border-warm-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Cookie size={32} className="text-coral flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-primary text-sm mb-1">Réinitialiser mes préférences</p>
                  <p className="text-xs text-primary/60">
                    Efface votre choix enregistré et recharge la page : la bannière de cookies réapparaîtra.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-coral text-white px-5 py-2.5 rounded-full text-sm font-body font-medium hover:bg-coral-dark transition-colors flex-shrink-0"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </Section>

          <Section title="5. Comment refuser les cookies via votre navigateur">
            <p>Instructions par navigateur :</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-primary">Chrome</strong> : Paramètres → Confidentialité et sécurité → Cookies et autres données de site
              </li>
              <li>
                <strong className="text-primary">Firefox</strong> : Options → Vie privée et sécurité → Cookies et données du site
              </li>
              <li>
                <strong className="text-primary">Safari</strong> : Préférences → Confidentialité → Cookies et données du site Web
              </li>
              <li>
                <strong className="text-primary">Edge</strong> : Paramètres → Cookies et autorisations du site
              </li>
            </ul>
            <p className="text-xs text-khaki">
              Attention : la désactivation de certains cookies peut altérer le fonctionnement du site.
            </p>
          </Section>

          <Section title="6. En savoir plus">
            <p>
              Pour en savoir plus sur les cookies et la protection de votre vie privée, vous pouvez consulter :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <a
                  href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline"
                >
                  CNIL — Cookies et traceurs : que dit la loi ?
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline"
                >
                  CNIL — Vos droits sur vos données personnelles
                </a>
              </li>
            </ul>
          </Section>

          <div className="mt-10 pt-8 border-t border-warm-200 flex flex-col sm:flex-row gap-4 text-sm font-body">
            <Link href="/mentions-legales">
              <a href="/mentions-legales" className="text-coral hover:underline">→ Mentions légales</a>
            </Link>
            <Link href="/politique-de-confidentialite">
              <a href="/politique-de-confidentialite" className="text-coral hover:underline">→ Politique de confidentialité</a>
            </Link>
            <Link href="/">
              <a href="/" className="text-khaki hover:text-primary transition-colors ml-auto">← Retour à l&apos;accueil</a>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
