import { useState } from 'react';
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
  {
    id: 1,
    title: 'Pergola bois',
    category: 'structures',
    location: 'Valenciennes',
    description: 'Installation d\'une pergola en bois avec traitement et finitions soignées',
    image: '/pergola.jpg',
  },
  {
    id: 2,
    title: 'Clôture rigide',
    category: 'clotures',
    location: 'Valenciennes',
    description: 'Pose de clôtures rigides avec occultants pour une délimitation nette et esthétique',
    image: '/cloture rigide.jpg',
  },
  {
    id: 3,
    title: 'Potager aménagé',
    category: 'jardins',
    location: 'Région Nord',
    description: 'Création d\'un potager structuré avec carrés de culture sur mesure',
    image: '/potager.JPG',
  },
  {
    id: 4,
    title: 'Aménagement extérieur',
    category: 'amenagements',
    location: 'Valenciennes',
    description: 'Conception complète d\'un espace extérieur fonctionnel et esthétique',
    image: '/IMG_4691.jpg',
  },
  {
    id: 5,
    title: 'Jardin paysagé',
    category: 'jardins',
    location: 'Valenciennes',
    description: 'Création d\'un jardin avec massifs floraux, gazon et allées',
    image: '/IMG_2291.jpg',
  },
  {
    id: 6,
    title: 'Réalisation maçonnerie',
    category: 'amenagements',
    location: 'Région Nord',
    description: 'Travaux de maçonnerie paysagère — allées et bordures',
    image: '/IMG_4106.jpg',
  },
  {
    id: 7,
    title: 'Espace vert entretenu',
    category: 'jardins',
    location: 'Valenciennes',
    description: 'Entretien régulier : tonte, taille, désherbage et soin des massifs',
    image: '/IMG_3826.jpg',
  },
  {
    id: 8,
    title: 'Aménagement paysager',
    category: 'amenagements',
    location: 'Valenciennes',
    description: 'Aménagement complet avec plantation et structures décoratives',
    image: '/IMG_4072.jpg',
  },
  {
    id: 9,
    title: 'Travaux extérieurs',
    category: 'amenagements',
    location: 'Région Nord',
    description: 'Terrassement et création d\'un espace carrossable',
    image: '/IMG_3150.jpg',
  },
  {
    id: 10,
    title: 'Jardin créé',
    category: 'jardins',
    location: 'Valenciennes',
    description: 'Création d\'un espace vert sur mesure pour particulier',
    image: '/IMG_3151.jpg',
  },
  {
    id: 11,
    title: 'Réalisation terrasse',
    category: 'terrasses',
    location: 'Valenciennes',
    description: 'Terrasse dalles posée avec finitions de qualité',
    image: '/IMG_5379.JPG',
  },
  {
    id: 12,
    title: 'Aménagement complet',
    category: 'amenagements',
    location: 'Région Nord',
    description: 'Projet d\'aménagement extérieur complet clé en main',
    image: '/IMG_6126.jpg',
  },
];

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Réalisations — Terrasses & Paysages Valenciennes</title>
        <meta name="description" content="Galerie de réalisations Terrasses & Paysages : terrasses, jardins, clôtures, aménagements extérieurs à Valenciennes." />
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

      {/* Filtres */}
      <section className="py-6 bg-white/80 backdrop-blur-md border-b border-warm-200 sticky top-[76px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
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
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
              <a className="inline-flex items-center justify-center bg-primary text-cream px-12 py-5 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-body font-medium text-lg">
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
