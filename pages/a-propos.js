import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  CheckCircle2, Target, Heart, Award, MapPin, ArrowRight,
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Expertise professionnelle',
    description: 'Une maîtrise approfondie de l\'aménagement paysager, des végétaux et des techniques de construction extérieure.',
  },
  {
    icon: Heart,
    title: 'Approche personnalisée',
    description: 'Chaque projet est unique. Nous prenons le temps d\'écouter vos besoins pour créer l\'espace qui vous ressemble.',
  },
  {
    icon: Award,
    title: 'Qualité garantie',
    description: 'Des matériaux de qualité sélectionnés avec soin, des finitions soignées et un travail réalisé dans les règles de l\'art.',
  },
];

const commitments = [
  'Respect de l\'environnement et approche durable',
  'Utilisation de plantes locales et adaptées au climat',
  'Techniques économes en eau et en ressources',
  'Conseils personnalisés pour l\'entretien',
  'Disponibilité et écoute tout au long du projet',
  'Respect des délais et du budget',
  'Devis gratuit et transparent, sans surprise',
];

const cities = [
  'Valenciennes', 'Anzin', 'Saint-Saulve', 'Marly',
  'Denain', 'Condé-sur-l\'Escaut', 'Onnaing', 'Fresnes-sur-Escaut',
  'Escaudain', 'Bruay-sur-l\'Escaut', 'Beuvrages', 'Et alentours',
];

export default function AProposPage() {
  return (
    <>
      <Head>
        <title>À propos — Terrasses & Paysages Valenciennes</title>
        <meta name="description" content="Découvrez Terrasses & Paysages, entreprise spécialisée dans l'aménagement extérieur à Valenciennes. Expertise, valeurs et zone d'intervention." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://terrasses-paysages.com/a-propos" />

        <meta property="og:title" content="À propos — Terrasses & Paysages Valenciennes" />
        <meta property="og:description" content="Entreprise spécialisée dans l'aménagement extérieur à Valenciennes : création de jardins, terrasses, clôtures et entretien paysager." />
        <meta property="og:url" content="https://terrasses-paysages.com/a-propos" />
        <meta property="og:image" content="https://terrasses-paysages.com/og/home.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Terrasses & Paysages" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À propos — Terrasses & Paysages Valenciennes" />
        <meta name="twitter:description" content="Entreprise d'aménagement extérieur à Valenciennes. Expertise, valeurs et zone d'intervention." />
        <meta name="twitter:image" content="https://terrasses-paysages.com/og/home.jpg" />
      </Head>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-cream to-warm-100" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-script text-coral text-2xl mb-3">Notre histoire</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">À propos</h1>
            <p className="text-xl text-khaki font-body max-w-3xl mx-auto leading-relaxed">
              Découvrez l&apos;histoire, les valeurs et les engagements de Terrasses & Paysages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-56 h-24 mb-8">
                <Image
                  src="/Logo principal bleu.png"
                  alt="Terrasses & Paysages"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left center"
                />
              </div>
              <div className="space-y-5 text-primary/80 font-body leading-relaxed text-lg">
                <p>
                  Terrasses & Paysages est une entreprise spécialisée dans l&apos;aménagement extérieur et la création de jardins, basée dans la région de Valenciennes.
                </p>
                <p>
                  Nous accompagnons particuliers et professionnels dans la conception et la réalisation de leurs projets extérieurs : terrasses, aménagements de jardins, clôtures, plantations, maçonnerie paysagère et entretien d&apos;espaces verts.
                </p>
                <p>
                  Chaque projet est pensé sur mesure afin de créer des espaces extérieurs esthétiques, durables et adaptés à votre mode de vie. Nous sélectionnons des matériaux de qualité et apportons un soin particulier aux détails afin de garantir des réalisations à la fois fonctionnelles et harmonieuses.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative">
                <Image
                  src="/IMG_5201.jpg"
                  alt="Équipe Terrasses & Paysages"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Liane décorative */}
              <div className="absolute -top-8 -right-8 w-32 opacity-20 pointer-events-none select-none">
                <Image src="/Éléments graphiques/Liane orange 1.png" alt="" width={128} height={180} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-warm-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-script text-coral text-2xl mb-2">Ce qui nous guide</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Nos valeurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-warm-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <value.icon size={30} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-khaki font-body leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative"
            >
              <Image
                src="/IMG_5198.jpg"
                alt="Qualité des réalisations"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-script text-coral text-2xl mb-2">Notre promesse</p>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">Nos engagements</h2>
              <p className="text-khaki font-body leading-relaxed mb-8 text-lg">
                Nous nous engageons à offrir des services de qualité tout en respectant l&apos;environnement et vos besoins.
              </p>
              <ul className="space-y-4">
                {commitments.map((commitment, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-coral flex-shrink-0" size={20} />
                    <span className="text-primary font-body">{commitment}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-coral text-white px-5 py-2 rounded-full text-sm font-body font-medium mb-5">
              <MapPin size={15} />
              Zone d&apos;intervention
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">
              ~30 km autour de Valenciennes
            </h2>
            <p className="text-cream/70 font-body text-lg max-w-2xl mx-auto">
              Nous intervenons principalement à Valenciennes et dans les communes environnantes de la région Hauts-de-France.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white/10 hover:bg-coral/20 p-4 rounded-2xl text-center transition-all duration-300"
              >
                <span className="text-cream font-body text-sm font-medium">{city}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-cream/40 font-body text-sm mt-8">
            Vous n&apos;êtes pas sûr d&apos;être dans notre zone ? Contactez-nous !
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-khaki font-body text-lg mb-10 leading-relaxed">
              Contactez-nous pour discuter de votre projet d&apos;aménagement paysager.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center justify-center bg-coral text-white px-12 py-5 rounded-full hover:bg-coral-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-body font-medium text-lg">
                Nous contacter
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
