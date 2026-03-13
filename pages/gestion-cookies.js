import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Cookie } from 'lucide-react';

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-10"
  >
    <h2 className="text-xl font-display font-bold text-primary mb-4 pb-2 border-b-2 border-warm-200">
      {title}
    </h2>
    <div className="text-sm text-primary/70 font-body space-y-3 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

const cookiesList = [
  {
    name: 'cookie_consent',
    type: 'Nécessaire',
    purpose: 'Mémoriser votre choix concernant l\'acceptation ou le refus des cookies',
    duration: '6 mois',
    obligatoire: true,
  },
  {
    name: 'Session (next-auth, _session)',
    type: 'Nécessaire',
    purpose: 'Assurer le bon fonctionnement technique du site (navigation, sécurité)',
    duration: 'Session (supprimé à la fermeture du navigateur)',
    obligatoire: true,
  },
];

export default function GestionCookies() {
  const handleReset = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cookie_consent');
      window.location.reload();
    }
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
              Le site <strong className="text-primary">terrasses-paysages.com</strong> n&apos;utilise
              <strong className="text-primary"> aucun cookie publicitaire ou de traçage</strong>.
              Seuls des cookies <strong className="text-primary">strictement nécessaires</strong> au fonctionnement
              du site sont déposés, sans nécessiter votre consentement préalable (article 82 de la loi Informatique et Libertés).
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
                  {cookiesList.map((cookie, i) => (
                    <tr key={i} className="border-t border-warm-200">
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

          <Section title="3. Absence de cookies tiers">
            <p>Ce site ne fait appel à aucun service tiers susceptible de déposer des cookies, notamment :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                'Google Analytics / Google Tag Manager',
                'Meta Pixel (Facebook)',
                'Publicités Google Ads',
                'Réseaux sociaux (boutons de partage)',
                'Outils de chat en direct',
                'Services de cartographie embarquée',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <XCircle size={15} className="text-red-400 flex-shrink-0" />
                  <span className="text-primary/60">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-khaki italic">
              Si des services tiers venaient à être intégrés (ex : statistiques, carte), cette politique sera mise à jour.
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

            <div className="mt-4 bg-white border-2 border-warm-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Cookie size={32} className="text-coral flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-primary text-sm mb-1">Réinitialiser mes préférences de cookies</p>
                <p className="text-xs text-primary/60">
                  Cliquez sur ce bouton pour effacer votre choix enregistré et afficher à nouveau la bannière de consentement.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="bg-coral text-white px-5 py-2.5 rounded-full text-sm font-body font-medium hover:bg-coral-dark transition-colors flex-shrink-0"
              >
                Réinitialiser
              </button>
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
              <a className="text-coral hover:underline">→ Mentions légales</a>
            </Link>
            <Link href="/politique-de-confidentialite">
              <a className="text-coral hover:underline">→ Politique de confidentialité</a>
            </Link>
            <Link href="/">
              <a className="text-khaki hover:text-primary transition-colors ml-auto">← Retour à l&apos;accueil</a>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
