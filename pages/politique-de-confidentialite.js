import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LegalSection from '../components/LegalSection';

const Section = LegalSection;

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité — Terrasses & Paysages Valenciennes</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles de Terrasses & Paysages, conformément au RGPD." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-cream to-warm-100" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-script text-coral text-2xl mb-3">Protection des données</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-base text-khaki font-body">
              Conformément au Règlement Général sur la Protection des Données (RGPD) — en vigueur depuis le 25 mai 2018
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Section title="1. Responsable du traitement">
            <p>
              Le responsable du traitement des données personnelles collectées sur ce site est :
            </p>
            <p><strong className="text-primary">Nom :</strong> Maxime Lefebvre</p>
            <p><strong className="text-primary">Nom commercial :</strong> Terrasses &amp; Paysages</p>
            <p><strong className="text-primary">SIREN :</strong> 924 931 801</p>
            <p><strong className="text-primary">Adresse :</strong> 195 bis rue de Famars, 59300 Valenciennes</p>
            <p><strong className="text-primary">Email :</strong>{' '}
              <a href="mailto:contactterrassespaysages@gmail.com" className="hover:text-coral transition-colors">
                contactterrassespaysages@gmail.com
              </a>
            </p>
            <p><strong className="text-primary">Téléphone :</strong>{' '}
              <a href="tel:0783276967" className="hover:text-coral transition-colors">07 83 27 69 67</a>
            </p>
          </Section>

          <Section title="2. Données collectées">
            <p>
              Dans le cadre de la navigation sur ce site et de l&apos;utilisation du formulaire de contact,
              nous sommes amenés à collecter les données personnelles suivantes :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-primary">Prénom et nom</strong></li>
              <li><strong className="text-primary">Adresse email</strong></li>
              <li><strong className="text-primary">Numéro de téléphone</strong> (facultatif)</li>
              <li><strong className="text-primary">Contenu du message</strong> transmis via le formulaire de contact</li>
              <li><strong className="text-primary">Données de navigation</strong> : adresse IP, type de navigateur, pages visitées, date et heure de connexion (données techniques collectées automatiquement par l&apos;hébergeur)</li>
            </ul>
            <p>
              Aucune donnée sensible au sens de l&apos;article 9 du RGPD n&apos;est collectée.
            </p>
          </Section>

          <Section title="3. Finalités du traitement">
            <p>Les données collectées sont utilisées aux fins suivantes :</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Répondre à vos demandes de contact ou de devis</li>
              <li>Assurer le suivi de la relation commerciale</li>
              <li>Améliorer nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </Section>

          <Section title="4. Base légale du traitement">
            <p>Le traitement de vos données repose sur les bases légales suivantes :</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-primary">Votre consentement</strong> (article 6.1.a du RGPD) :
                lorsque vous remplissez et soumettez le formulaire de contact
              </li>
              <li>
                <strong className="text-primary">L&apos;intérêt légitime</strong> (article 6.1.f du RGPD) :
                pour la gestion des données de navigation à des fins de sécurité
              </li>
              <li>
                <strong className="text-primary">L&apos;exécution d&apos;un contrat</strong> (article 6.1.b du RGPD) :
                pour le traitement des demandes de devis et suivi commercial
              </li>
            </ul>
          </Section>

          <Section title="5. Durée de conservation">
            <p>Vos données personnelles sont conservées pendant les durées suivantes :</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-primary">Données de contact / devis :</strong> 3 ans à compter du dernier contact
              </li>
              <li>
                <strong className="text-primary">Données contractuelles :</strong> 10 ans (obligation légale de conservation comptable)
              </li>
              <li>
                <strong className="text-primary">Données de navigation :</strong> 13 mois maximum
              </li>
            </ul>
            <p>
              Au-delà de ces durées, vos données sont supprimées ou anonymisées.
            </p>
          </Section>

          <Section title="6. Destinataires des données">
            <p>
              Vos données personnelles sont destinées exclusivement à Terrasses &amp; Paysages.
              Elles ne sont ni vendues, ni cédées à des tiers à des fins commerciales.
            </p>
            <p>Elles peuvent être communiquées à :</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-primary">Resend Inc.</strong> (prestataire d&apos;envoi d&apos;emails, États-Unis) — aux fins
                de transmission des messages du formulaire de contact. Resend est certifié conforme au RGPD.
              </li>
              <li>
                <strong className="text-primary">Vercel Inc.</strong> (hébergeur du site, États-Unis) — aux fins d&apos;hébergement
                et de fonctionnement technique du site. Vercel est soumis aux clauses contractuelles types de l&apos;UE.
              </li>
              <li>
                Les autorités compétentes, en cas d&apos;obligation légale.
              </li>
            </ul>
          </Section>

          <Section title="7. Transferts hors Union Européenne">
            <p>
              Certains prestataires mentionnés ci-dessus (Vercel, Resend) sont établis aux États-Unis.
              Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types de la Commission européenne)
              conformément à l&apos;article 46 du RGPD.
            </p>
          </Section>

          <Section title="8. Vos droits">
            <p>
              Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-primary">Droit d&apos;accès</strong> : obtenir la confirmation que vos données sont traitées</li>
              <li><strong className="text-primary">Droit de rectification</strong> : faire corriger des données inexactes</li>
              <li><strong className="text-primary">Droit à l&apos;effacement</strong> (droit à l&apos;oubli)</li>
              <li><strong className="text-primary">Droit à la limitation du traitement</strong></li>
              <li><strong className="text-primary">Droit à la portabilité</strong> de vos données</li>
              <li><strong className="text-primary">Droit d&apos;opposition</strong> au traitement</li>
              <li><strong className="text-primary">Droit de retirer votre consentement</strong> à tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits, adressez votre demande par email à{' '}
              <a href="mailto:contactterrassespaysages@gmail.com" className="text-coral hover:underline">
                contactterrassespaysages@gmail.com
              </a>{' '}
              ou par courrier à l&apos;adresse du siège social.
              Nous nous engageons à vous répondre dans un délai d&apos;un mois.
            </p>
          </Section>

          <Section title="9. Droit de réclamation auprès de la CNIL">
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous avez la possibilité de déposer une réclamation
              auprès de la <strong className="text-primary">Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong> :
            </p>
            <p>
              CNIL — 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
              <br />
              Site web :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
                www.cnil.fr
              </a>
            </p>
          </Section>

          <Section title="10. Sécurité des données">
            <p>
              Terrasses &amp; Paysages met en œuvre les mesures techniques et organisationnelles appropriées
              pour garantir la sécurité de vos données personnelles et les protéger contre toute perte, accès non autorisé,
              divulgation, altération ou destruction. Le site utilise le protocole HTTPS pour sécuriser les communications.
            </p>
          </Section>

          <Section title="11. Cookies">
            <p>
              Ce site utilise des cookies strictement nécessaires (par exemple pour mémoriser votre choix concernant les cookies).
              Sous réserve de votre consentement, des outils de <strong className="text-primary">mesure d&apos;audience</strong>{' '}
              (Google Analytics 4, Vercel Web Analytics) peuvent être chargés ; ils ne le sont qu&apos;après acceptation via la bannière
              ou la page dédiée. Pour le détail des finalités et la gestion de vos préférences, consultez notre{' '}
              <Link href="/gestion-cookies">
                <a href="/gestion-cookies" className="text-coral hover:underline">politique de gestion des cookies</a>
              </Link>.
            </p>
          </Section>

          <Section title="12. Mise à jour de cette politique">
            <p>
              Cette politique de confidentialité est susceptible d&apos;être modifiée à tout moment.
              Nous vous invitons à la consulter régulièrement.
            </p>
            <p><strong className="text-primary">Dernière mise à jour :</strong> mars 2025</p>
          </Section>

          <div className="mt-10 pt-8 border-t border-warm-200 flex flex-col sm:flex-row gap-4 text-sm font-body">
            <Link href="/mentions-legales">
              <a href="/mentions-legales" className="text-coral hover:underline">→ Mentions légales</a>
            </Link>
            <Link href="/gestion-cookies">
              <a href="/gestion-cookies" className="text-coral hover:underline">→ Gestion des cookies</a>
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
