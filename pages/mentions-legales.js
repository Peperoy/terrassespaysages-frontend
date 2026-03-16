import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LegalSection from '../components/LegalSection';

const Section = LegalSection;

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales — Terrasses & Paysages Valenciennes</title>
        <meta name="description" content="Mentions légales de Terrasses & Paysages, entreprise d'aménagement extérieur à Valenciennes." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-cream to-warm-100" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-script text-coral text-2xl mb-3">Informations légales</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Mentions légales</h1>
            <p className="text-base text-khaki font-body">
              Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique (LCEN)
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Section title="1. Éditeur du site">
            <p><strong className="text-primary">Nom commercial :</strong> Terrasses &amp; Paysages</p>
            <p><strong className="text-primary">Exploitant :</strong> Maxime Lefebvre (Entrepreneur individuel)</p>
            <p><strong className="text-primary">Forme juridique :</strong> Entrepreneur individuel</p>
            <p><strong className="text-primary">Adresse :</strong> 195 bis rue de Famars, 59300 Valenciennes</p>
            <p><strong className="text-primary">Téléphone :</strong>{' '}
              <a href="tel:0783276967" className="hover:text-coral transition-colors">07 83 27 69 67</a>
            </p>
            <p><strong className="text-primary">Email :</strong>{' '}
              <a href="mailto:contactterrassespaysages@gmail.com" className="hover:text-coral transition-colors">
                contactterrassespaysages@gmail.com
              </a>
            </p>
            <p><strong className="text-primary">SIREN :</strong> 924 931 801</p>
            <p><strong className="text-primary">SIRET (siège social) :</strong> 924 931 801 00022</p>
            <p><strong className="text-primary">N° TVA intracommunautaire :</strong> FR29924931801</p>
            <p><strong className="text-primary">Code APE / NAF :</strong> 8130Z — Services d&apos;aménagement paysager</p>
            <p><strong className="text-primary">Immatriculation RNE :</strong> inscrit le 28 mars 2024</p>
          </Section>

          <Section title="2. Directeur de publication">
            <p>
              Le directeur de la publication est le représentant légal de l&apos;entreprise Terrasses &amp; Paysages.
            </p>
            <p><strong className="text-primary">Nom :</strong> Maxime Lefebvre</p>
            <p><strong className="text-primary">Email :</strong>{' '}
              <a href="mailto:contactterrassespaysages@gmail.com" className="hover:text-coral transition-colors">
                contactterrassespaysages@gmail.com
              </a>
            </p>
          </Section>

          <Section title="3. Hébergeur du site">
            <p><strong className="text-primary">Société :</strong> Vercel Inc.</p>
            <p><strong className="text-primary">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
            <p><strong className="text-primary">Site web :</strong>{' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">
                vercel.com
              </a>
            </p>
          </Section>

          <Section title="4. Propriété intellectuelle">
            <p>
              L&apos;ensemble de ce site, notamment sa structure, son design, ses textes, ses photographies et ses éléments graphiques,
              est la propriété exclusive de Terrasses &amp; Paysages, sauf mentions contraires.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site,
              quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Terrasses &amp; Paysages.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée
              comme constitutive d&apos;une contrefaçon et poursuivie conformément aux articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </Section>

          <Section title="5. Responsabilité">
            <p>
              Terrasses &amp; Paysages s&apos;efforce de maintenir les informations publiées sur ce site aussi précises et à jour que possible.
              Cependant, l&apos;entreprise ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées.
            </p>
            <p>
              L&apos;utilisateur est seul responsable de l&apos;utilisation qu&apos;il fait de ces informations. Terrasses &amp; Paysages
              se réserve le droit de modifier le contenu du site à tout moment et sans préavis.
            </p>
          </Section>

          <Section title="6. Liens hypertextes">
            <p>
              Ce site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif.
              Terrasses &amp; Paysages n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité
              quant à leur contenu ou leur politique de confidentialité.
            </p>
          </Section>

          <Section title="7. Droit applicable et juridiction">
            <p>
              Les présentes mentions légales sont soumises au droit français.
              En cas de litige, les tribunaux compétents sont ceux du ressort du siège social de la société,
              sauf dispositions légales impératives contraires.
            </p>
          </Section>

          <div className="mt-10 pt-8 border-t border-warm-200 flex flex-col sm:flex-row gap-4 text-sm font-body">
            <Link href="/politique-de-confidentialite">
              <a href="/politique-de-confidentialite" className="text-coral hover:underline">→ Politique de confidentialité</a>
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
