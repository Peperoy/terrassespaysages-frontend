import { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'terrasses', label: 'Terrasses' },
  { id: 'jardins', label: 'Jardins' },
  { id: 'clotures', label: 'Clôtures' },
  { id: 'structures', label: 'Structures' },
  { id: 'amenagements', label: 'Aménagements' },
];

const projects = [
  // Pergolas
  {
    id: 1,
    title: 'Pergola bois',
    category: 'structures',
    location: 'Valenciennes',
    description: 'Installation d\'une pergola en bois avec traitement et finitions soignées',
    image: '/webp/pergola.webp',
  },
  {
    id: 2,
    title: 'Pergola sur mesure',
    category: 'structures',
    location: 'Valenciennes',
    description: 'Conception et pose d\'une pergola bois sur mesure pour espace de vie extérieur',
    image: '/webp/pergola-1.webp',
  },
  {
    id: 3,
    title: 'Terrasse couverte',
    category: 'structures',
    location: 'Région Nord',
    description: 'Création d\'une terrasse couverte par pergola avec traitement UV',
    image: '/webp/pergola-2.webp',
  },
  {
    id: 4,
    title: 'Pergola contemporaine',
    category: 'structures',
    location: 'Valenciennes',
    description: 'Pergola au design épuré intégrée dans un jardin moderne',
    image: '/webp/pergola-3.webp',
  },
  {
    id: 5,
    title: 'Espace ombragé',
    category: 'structures',
    location: 'Valenciennes',
    description: 'Création d\'un espace de détente ombragé avec pergola bois',
    image: '/webp/pergola-4.webp',
  },
  {
    id: 6,
    title: 'Pergola avec finitions',
    category: 'structures',
    location: 'Région Nord',
    description: 'Pergola en bois massif avec finitions soignées et lasure de protection',
    image: '/webp/pergola-5.webp',
  },
  // Structures extérieures
  {
    id: 7,
    title: 'Terrasse extérieure',
    category: 'terrasses',
    location: 'Valenciennes',
    description: 'Réalisation d\'une terrasse extérieure sur mesure avec finitions soignées',
    image: '/webp/structures-exterieures.webp',
  },
  {
    id: 8,
    title: 'Terrasse bois',
    category: 'terrasses',
    location: 'Valenciennes',
    description: 'Pose d\'une terrasse en bois traité avec dalles et bordures',
    image: '/webp/structures-exterieures-1.webp',
  },
  {
    id: 9,
    title: 'Terrasse dallée',
    category: 'terrasses',
    location: 'Région Nord',
    description: 'Création d\'une terrasse dallée avec finitions de qualité',
    image: '/webp/structures-exterieures-2.webp',
  },
  {
    id: 10,
    title: 'Terrasse de jardin',
    category: 'terrasses',
    location: 'Valenciennes',
    description: 'Aménagement d\'une terrasse de jardin conviviale et durable',
    image: '/webp/structures-exterieures-3.webp',
  },
  {
    id: 11,
    title: 'Terrasse sur mesure',
    category: 'terrasses',
    location: 'Valenciennes',
    description: 'Terrasse sur mesure conçue pour s\'intégrer à l\'architecture de la maison',
    image: '/webp/structures-exterieures-4.webp',
  },
  {
    id: 12,
    title: 'Espace terrasse',
    category: 'terrasses',
    location: 'Région Nord',
    description: 'Création d\'un espace terrasse avec revêtement et aménagement paysager',
    image: '/webp/structures-exterieures-5.webp',
  },
  {
    id: 13,
    title: 'Terrasse pavée',
    category: 'terrasses',
    location: 'Valenciennes',
    description: 'Réalisation d\'une terrasse pavée avec joints soignés et finitions premium',
    image: '/webp/structures-exterieures-6.webp',
  },
  {
    id: 14,
    title: 'Terrasse aménagée',
    category: 'terrasses',
    location: 'Région Nord',
    description: 'Terrasse aménagée avec revêtement composite et éclairage intégré',
    image: '/webp/structures-exterieures-7.webp',
  },
  // Clôtures
  {
    id: 15,
    title: 'Clôture rigide',
    category: 'clotures',
    location: 'Valenciennes',
    description: 'Pose de clôtures rigides avec occultants pour une délimitation nette et esthétique',
    image: '/webp/cloture-rigide.webp',
  },
  {
    id: 16,
    title: 'Clôture rigide avec portail',
    category: 'clotures',
    location: 'Valenciennes',
    description: 'Installation d\'une clôture rigide avec portail assorti pour sécuriser le terrain',
    image: '/webp/cloture-rigide-1.webp',
  },
  {
    id: 17,
    title: 'Délimitation extérieure',
    category: 'clotures',
    location: 'Région Nord',
    description: 'Clôture rigide gris anthracite sur muret pour une délimitation durable',
    image: '/webp/cloture-rigide-2.webp',
  },
  // Jardins
  {
    id: 18,
    title: 'Potager aménagé',
    category: 'jardins',
    location: 'Région Nord',
    description: 'Création d\'un potager structuré avec carrés de culture sur mesure',
    image: '/webp/potager.webp',
  },
  {
    id: 19,
    title: 'Plantation paysagère',
    category: 'jardins',
    location: 'Valenciennes',
    description: 'Sélection et plantation de végétaux adaptés au sol et à l\'exposition',
    image: '/webp/plantation.webp',
  },
  {
    id: 20,
    title: 'Gazon et massifs',
    category: 'jardins',
    location: 'Valenciennes',
    description: 'Engazonnement et création de massifs floraux pour un jardin verdoyant',
    image: '/webp/gazon.webp',
  },
  {
    id: 21,
    title: 'Jardin paysagé',
    category: 'jardins',
    location: 'Région Nord',
    description: 'Création complète d\'un jardin avec gazon, haies et espaces de détente',
    image: '/webp/gazon-2.webp',
  },
  {
    id: 22,
    title: 'Espace bien-être',
    category: 'jardins',
    location: 'Valenciennes',
    description: 'Aménagement d\'un coin bien-être extérieur avec végétaux et revêtement soigné',
    image: '/webp/bien-etre.webp',
  },
  {
    id: 23,
    title: 'Espace détente',
    category: 'jardins',
    location: 'Valenciennes',
    description: 'Création d\'un espace de détente extérieur alliant verdure et confort',
    image: '/webp/bien-etre-2.webp',
  },
  // Maçonnerie
  {
    id: 24,
    title: 'Maçonnerie paysagère',
    category: 'amenagements',
    location: 'Région Nord',
    description: 'Travaux de maçonnerie paysagère — murets, allées et bordures en pierre',
    image: '/webp/maconnerie-paysagere.webp',
  },
  {
    id: 25,
    title: 'Allées et murets',
    category: 'amenagements',
    location: 'Valenciennes',
    description: 'Réalisation d\'allées pavées et murets de soutènement en maçonnerie',
    image: '/webp/maconnerie-paysagere-2.webp',
  },
];

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filterRef = useRef(null);

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
    if (id !== selectedCategory && filterRef.current) {
      const top = filterRef.current.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const filtered = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Réalisations paysagiste Valenciennes — Jardins, Terrasses & Clôtures | Terrasses & Paysages</title>
        <meta name="description" content="Galerie de réalisations de votre paysagiste à Valenciennes : jardins aménagés, terrasses bois & carrelage, clôtures, pergolas et maçonnerie paysagère." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://terrasses-paysages.com/realisations" />

        <meta property="og:title" content="Réalisations paysagiste Valenciennes — Jardins, Terrasses & Clôtures" />
        <meta property="og:description" content="Galerie de réalisations : jardins, terrasses, clôtures et aménagements extérieurs à Valenciennes." />
        <meta property="og:url" content="https://terrasses-paysages.com/realisations" />
        <meta property="og:image" content="https://terrasses-paysages.com/og/home.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Terrasses & Paysages" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Réalisations — Terrasses & Paysages Valenciennes" />
        <meta name="twitter:description" content="Galerie de réalisations : terrasses, jardins, clôtures et aménagements extérieurs à Valenciennes." />
        <meta name="twitter:image" content="https://terrasses-paysages.com/og/home.jpg" />
      </Head>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-cream to-warm-100" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-script text-coral text-2xl mb-3">Notre portfolio</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">Nos réalisations</h1>
            <p className="text-xl text-khaki font-body max-w-3xl mx-auto leading-relaxed">
              Découvrez quelques-uns de nos projets d&apos;aménagement paysager réalisés à Valenciennes et dans la région.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ancre de scroll — juste avant les filtres */}
      <div ref={filterRef} />

      {/* Filtres */}
      <section className="py-6 bg-white/80 backdrop-blur-md border-b border-warm-200 sticky top-[76px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-cream shadow-lg'
                    : 'bg-warm-100 text-primary hover:bg-warm-200'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-coral text-white text-xs font-body font-medium px-3 py-1 rounded-full shadow-md capitalize">
                        {categories.find(c => c.id === project.category)?.label.replace('Tous les projets', project.category)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-khaki font-body uppercase tracking-wide mb-2">{project.location}</p>
                    <h3 className="text-xl font-display font-semibold text-primary mb-2">{project.title}</h3>
                    <p className="text-sm text-khaki font-body leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-khaki font-body">Aucune réalisation dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-coral text-2xl mb-3">Votre projet</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Votre projet sera notre prochaine réalisation
            </h2>
            <p className="text-khaki font-body text-lg mb-10 leading-relaxed">
              Parlons de votre projet et transformons vos idées en réalité.
            </p>
            <Link href="/contact">
              <a href="/contact" className="inline-flex items-center justify-center bg-primary text-cream px-12 py-5 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-body font-medium text-lg">
                Démarrer mon projet
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
