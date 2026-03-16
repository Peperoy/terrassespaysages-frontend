import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sprout, Hammer, TreePine, Fence, Flower2,
  Home, Layers, CheckCircle2, ArrowRight, Phone,
} from 'lucide-react';

const services = [
  {
    id: 'creation-jardins',
    icon: Sprout,
    title: 'Création et aménagement de jardins',
    description: 'Conception et réalisation d\'espaces verts personnalisés, adaptés à vos envies et à votre environnement.',
    features: [
      'Conception et aménagement de jardins',
      'Aménagement d\'espaces extérieurs sur mesure',
      'Création de massifs paysagers',
      'Remise en état de jardins abandonnés',
      'Aménagement de cours et patios',
    ],
    image: '/potager.JPG',
  },
  {
    id: 'terrasses',
    icon: Hammer,
    title: 'Terrasses & Structures extérieures',
    description: 'Du bois au composite en passant par la pierre bleue, nous créons la terrasse qui correspond à votre style et votre budget.',
    features: [
      'Terrasses bois et composite',
      'Terrasse carrelage, pierre bleue, pavé',
      'Terrasse surélevée et extension de terrasse',
      'Pergola bois et bioclimatique',
      'Carport bois et bardage extérieur',
    ],
    image: '/pergola.jpg',
  },
  {
    id: 'clotures',
    icon: Fence,
    title: 'Clôtures & Délimitations',
    description: 'Sécurisez et délimitez votre propriété avec nos solutions de clôtures sur mesure en bois, composite ou rigide.',
    features: [
      'Pose de clôtures rigides avec ou sans occultants',
      'Pose de clôtures bois et composite',
      'Pose de portillons',
      'Installation de brise-vues',
    ],
    image: '/cloture rigide.jpg',
  },
  {
    id: 'maconnerie',
    icon: Layers,
    title: 'Maçonnerie paysagère',
    description: 'Allées, accès, murs de soutènement : nos travaux de maçonnerie paysagère valorisent votre espace et facilitent votre quotidien.',
    features: [
      'Création de murs de soutènement',
      'Pose de traverses paysagères (chêne, azobé...)',
      'Création dalle béton et pose de pavés',
      'Création d\'allées et accès maison',
      'Aménagement d\'entrées et parkings véhicules',
    ],
    image: '/IMG_4106.jpg',
  },
  {
    id: 'plantation',
    icon: Flower2,
    title: 'Plantation & Végétalisation',
    description: 'Nous sélectionnons et plantons arbres, arbustes, haies et massifs pour habiller vos espaces de verdure.',
    features: [
      'Plantation d\'arbres et arbustes',
      'Plantation et création de haies',
      'Création de massifs fleuris',
      'Plantation de plantes vivaces et graminées',
      'Aménagement de jardinières',
    ],
    image: '/manon.png',
  },
  {
    id: 'gazon',
    icon: Sprout,
    title: 'Gazon',
    description: 'Semis, gazon en rouleau ou réfection de pelouse — nous créons le tapis vert dont vous rêvez.',
    features: [
      'Semis de gazon',
      'Réfection de pelouse',
      'Préparation de terrain pour gazon',
      'Pose de gazon en rouleau',
    ],
    image: '/IMG_4072.jpg',
  },
  {
    id: 'entretien',
    icon: TreePine,
    title: 'Entretien de jardins',
    description: 'Maintenance régulière et professionnelle de vos espaces verts. Ouvert aux particuliers et professionnels.',
    features: [
      'Taille de haies et arbustes',
      'Tonte de pelouse et débroussaillage',
      'Entretien de massifs',
      'Remise en état de jardin',
      'Contrats d\'entretien pour entreprises et copropriétés',
    ],
    image: '/antho.png',
    badge: '50% crédit d\'impôt pour particuliers',
  },
  {
    id: 'bien-etre',
    icon: Home,
    title: 'Espace bien-être extérieur',
    description: 'Complétez votre extérieur avec l\'installation de jacuzzi ou bain nordique pour des moments de détente uniques.',
    features: [
      'Installation de jacuzzi extérieur',
      'Installation de bain nordique',
    ],
    image: '/IMG_2813.jpg',
  },
];

const processSteps = [
  { number: '01', title: 'Contact', description: 'Échange initial pour comprendre vos besoins et votre vision.' },
  { number: '02', title: 'Visite & Étude', description: 'Déplacement gratuit sur site et élaboration d\'un projet personnalisé.' },
  { number: '03', title: 'Devis gratuit', description: 'Proposition détaillée et transparente, sans engagement.' },
  { number: '04', title: 'Réalisation', description: 'Mise en œuvre des travaux avec des matériaux de qualité.' },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services — Terrasses & Paysages Valenciennes</title>
        <meta name="description" content="Création de jardins, terrasses, clôtures, maçonnerie paysagère, plantation et entretien à Valenciennes. Devis gratuit." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://terrasses-paysages.com/services" />

        <meta property="og:title" content="Services — Terrasses & Paysages Valenciennes" />
        <meta property="og:description" content="Création de jardins, terrasses, clôtures, maçonnerie paysagère, plantation et entretien à Valenciennes. Devis gratuit." />
        <meta property="og:url" content="https://terrasses-paysages.com/services" />
        <meta property="og:image" content="https://terrasses-paysages.com/og/home.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Terrasses & Paysages" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services — Terrasses & Paysages Valenciennes" />
        <meta name="twitter:description" content="Création de jardins, terrasses, clôtures et entretien paysager à Valenciennes. Devis gratuit." />
        <meta name="twitter:image" content="https://terrasses-paysages.com/og/home.jpg" />
      </Head>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-cream to-warm-100" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-script text-coral text-2xl mb-3">Ce que nous proposons</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">Nos services</h1>
            <p className="text-xl text-khaki font-body max-w-3xl mx-auto leading-relaxed">
              Des prestations complètes pour tous vos projets d&apos;aménagement et d&apos;entretien d&apos;espaces extérieurs à Valenciennes et dans un rayon de 30 km.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-warm-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <service.icon size={30} className="text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  {service.badge && (
                    <span className="inline-block bg-coral text-white text-sm font-body font-medium px-4 py-1.5 rounded-full mb-4 shadow">
                      {service.badge}
                    </span>
                  )}
                  <p className="text-khaki font-body leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-coral flex-shrink-0" />
                        <span className="text-primary/80 font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <a href="/contact" className="inline-flex items-center gap-2 mt-8 bg-primary text-cream px-8 py-3.5 rounded-full hover:bg-primary-dark transition-all font-body font-medium hover:scale-105 shadow-lg">
                      Demander un devis <ArrowRight size={18} />
                    </a>
                  </Link>
                </div>

                <div className={`rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 bg-warm-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <p className="font-script text-coral text-2xl mb-2">Comment ça marche ?</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Notre processus</h2>
            <p className="text-khaki font-body text-lg">Un accompagnement personnalisé du début à la fin de votre projet</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-6xl font-display font-bold text-coral/20 mb-4 group-hover:text-coral/30 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-khaki font-body leading-relaxed text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-coral/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">Un projet en tête ?</h2>
            <p className="text-cream/70 font-body text-lg mb-10 leading-relaxed">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a href="/contact" className="inline-flex items-center justify-center bg-coral text-white px-12 py-4 rounded-full hover:bg-coral-dark transition-all duration-300 shadow-2xl hover:scale-105 font-body font-medium text-lg">
                  Demander un devis gratuit
                </a>
              </Link>
              <a
                href="tel:0783276967"
                className="inline-flex items-center justify-center gap-2 border-2 border-cream/30 text-cream px-8 py-4 rounded-full hover:border-cream hover:bg-cream/10 transition-all duration-300 font-body font-medium"
              >
                <Phone size={18} />
                07 83 27 69 67
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
