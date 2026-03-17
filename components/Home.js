import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, Sprout, Hammer, TreePine,
  Fence, Star, Phone, ChevronLeft, ChevronRight,
  Flower2, Layers, Home as HomeIcon,
} from 'lucide-react';

const services = [
  {
    icon: Sprout,
    title: 'Création de jardins',
    description: 'Conception et aménagement d\'espaces verts sur mesure, massifs paysagers et remise en état.',
    href: '/services#creation-jardins',
    tag: 'Paysagisme',
  },
  {
    icon: Hammer,
    title: 'Terrasses & Patios',
    description: 'Terrasses bois, composite, carrelage, pierre bleue, pavé. Pergolas et structures extérieures.',
    href: '/services#terrasses',
    tag: 'Structures',
  },
  {
    icon: Layers,
    title: 'Maçonnerie paysagère',
    description: 'Allées, accès véhicules, murs de soutènement, dalles béton et pavés sur mesure.',
    href: '/services#maconnerie',
    tag: 'Maçonnerie',
  },
  {
    icon: Fence,
    title: 'Clôtures & Délimitations',
    description: 'Pose de clôtures rigides, bois ou composite, portillons et brise-vues.',
    href: '/services#clotures',
    tag: 'Clôtures',
  },
  {
    icon: Flower2,
    title: 'Plantation & Végétalisation',
    description: 'Arbres, arbustes, haies, massifs fleuris et plantes vivaces pour habiller vos espaces.',
    href: '/services#plantation',
    tag: 'Plantation',
  },
  {
    icon: Sprout,
    title: 'Gazon',
    description: 'Semis, gazon en rouleau ou réfection de pelouse — nous créons le tapis vert dont vous rêvez.',
    href: '/services#gazon',
    tag: 'Gazon',
  },
  {
    icon: TreePine,
    title: 'Entretien de jardins',
    description: 'Taille de haies, tonte, désherbage, entretien régulier. Crédit d\'impôt 50% pour particuliers.',
    href: '/services#entretien',
    tag: 'Entretien',
  },
  {
    icon: HomeIcon,
    title: 'Espace bien-être',
    description: 'Installation de jacuzzi extérieur ou bain nordique pour des moments de détente uniques.',
    href: '/services#bien-etre',
    tag: 'Bien-être',
  },
];

const values = [
  'Expertise locale à Valenciennes',
  'Approche durable et éco-responsable',
  'Accompagnement personnalisé sur mesure',
  'Matériaux de qualité sélectionnés',
  'Devis gratuit et sans engagement',
];

const stats = [
  { value: '30 km', label: 'Zone d\'intervention' },
  { value: '100%', label: 'Sur mesure' },
  { value: '50%', label: 'Crédit d\'impôt*' },
  { value: '48h', label: 'Réponse devis' },
];

const realisations = [
  { src: '/webp/pergola.webp', title: 'Pergola bois', label: 'Structures' },
  { src: '/webp/structures-exterieures-5.webp', title: 'Aménagement extérieur', label: 'Paysagisme' },
  { src: '/webp/cloture-rigide.webp', title: 'Clôture rigide', label: 'Clôtures' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('[data-card]');
      const cardWidth = card ? card.offsetWidth + 24 : 360;
      scrollRef.current.scrollBy({ left: dir === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/webp/maconnerie-paysagere.webp"
            alt="Aménagement extérieur Terrasses & Paysages"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        </div>

        <div className="absolute bottom-0 right-0 w-72 opacity-10 pointer-events-none select-none">
          <Image src="/Éléments graphiques/Liane blanche 1.png" alt="Élément végétal décoratif" width={300} height={95} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-coral text-white px-4 py-1.5 rounded-full text-sm font-body font-medium mb-6 shadow-lg">
              <Star size={14} className="fill-white" />
              Paysagiste professionnel — Valenciennes
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-cream leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              Créons ensemble votre{' '}
              <span className="text-coral italic">espace extérieur</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-cream/80 text-lg md:text-xl font-body font-light leading-relaxed mb-8">
              Votre espace extérieur mérite d&apos;être unique. Ensemble, nous concevons et réalisons
              votre aménagement paysager sur mesure — jardin, terrasse ou clôture — à Valenciennes et alentours.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <a href="/contact" className="group inline-flex items-center justify-center bg-coral text-white px-8 py-4 rounded-full hover:bg-coral-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-body font-medium">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Link>
              <Link href="/realisations">
                <a href="/realisations" className="group inline-flex items-center justify-center border-2 border-cream/60 text-cream px-8 py-4 rounded-full hover:border-cream hover:bg-cream/10 transition-all duration-300 font-body font-medium">
                  Voir nos réalisations
                </a>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="tel:0783276967"
                className="inline-flex items-center gap-2 text-cream/70 hover:text-coral font-body text-sm mt-6 transition-colors"
              >
                <Phone size={15} />
                07 83 27 69 67 — Réponse rapide
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-coral mb-1">{stat.value}</div>
                <div className="text-sm text-cream/60 font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-cream/50 font-body text-center mt-4 max-w-2xl mx-auto">
            * Crédit d&apos;impôt 50 % (services à la personne). Possibilité de déduction directe sur la facture.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warm-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Header + flèches */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-script text-coral text-2xl mb-2">Ce que nous faisons</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
                Nos services
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3"
            >
              <button
                onClick={() => scroll('prev')}
                aria-label="Service précédent"
                className="w-12 h-12 rounded-full border-2 border-primary/20 text-primary flex items-center justify-center hover:bg-coral hover:border-coral hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('next')}
                aria-label="Service suivant"
                className="w-12 h-12 rounded-full border-2 border-primary/20 text-primary flex items-center justify-center hover:bg-coral hover:border-coral hover:text-white transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                data-card
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group snap-start flex-shrink-0 w-[78vw] sm:w-[260px] lg:w-[280px] min-h-[520px] flex flex-col py-2"
              >
                <div className="p-6 flex flex-col flex-1 min-h-[520px] items-center text-center border border-warm-200 rounded-2xl hover:border-coral/50 hover:shadow-lg transition-all duration-300">
                  <div className="bg-warm-200/40 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 group-hover:bg-coral transition-all duration-300">
                    <service.icon size={36} className="text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-5 leading-tight uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-khaki font-body leading-relaxed flex-1 mb-8">
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <a
                      href={service.href}
                      className="inline-flex items-center justify-center gap-2 w-full bg-primary text-cream px-6 py-4 rounded-2xl hover:bg-coral transition-colors duration-300 font-body font-semibold text-base"
                    >
                      À découvrir !
                    </a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA bas */}
          <div className="text-center mt-12">
            <Link href="/services">
              <a href="/services" className="inline-flex items-center justify-center bg-primary text-cream px-10 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-body font-medium">
                Voir tous nos services
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-24 bg-warm-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-5 pointer-events-none select-none w-64">
          <Image src="/Éléments graphiques/Liane bleu 2.png" alt="Élément végétal décoratif" width={256} height={350} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-script text-coral text-2xl mb-2">Pourquoi nous ?</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
                Terrasses & Paysages, votre partenaire de confiance
              </h2>
              <p className="text-khaki font-body leading-relaxed mb-8 text-lg">
                Basés à Valenciennes, nous nous engageons à créer des espaces extérieurs
                qui correspondent à vos besoins et reflètent votre personnalité, avec un soin
                particulier pour les détails.
              </p>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <motion.li
                    key={value}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-coral flex-shrink-0" size={22} />
                    <span className="text-primary font-body font-medium">{value}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/a-propos">
                  <a href="/a-propos" className="inline-flex items-center text-primary font-body font-medium hover:text-coral transition-colors group">
                    En savoir plus sur nous
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                </Link>
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
                  src="/webp/gazon-2.webp"
                  alt="Aménagement paysager professionnel"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-coral text-white p-5 rounded-2xl shadow-xl">
                <div className="font-display font-bold text-2xl">50%</div>
                <div className="text-xs font-body text-white/80">Crédit d&apos;impôt</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Réalisations aperçu */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-script text-coral text-2xl mb-2">Notre travail</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                Nos dernières réalisations
              </h2>
              <p className="text-khaki font-body text-lg">
                Découvrez quelques-uns de nos projets récents
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realisations.map((real, index) => (
              <motion.div
                key={real.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={real.src}
                  alt={real.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <span className="bg-coral text-white text-xs font-body font-medium px-3 py-1 rounded-full mb-2 inline-block">
                      {real.label}
                    </span>
                    <h3 className="text-xl text-cream font-display font-semibold">{real.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/realisations">
              <a href="/realisations" className="inline-flex items-center justify-center border-2 border-primary text-primary px-10 py-4 rounded-full hover:bg-primary hover:text-cream transition-all duration-300 font-body font-medium">
                Voir toutes nos réalisations
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-coral text-2xl mb-3">Parlons de votre projet</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">
              Prêt à transformer votre espace extérieur ?
            </h2>
            <p className="text-cream/70 font-body text-lg mb-10 leading-relaxed">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a href="/contact" className="inline-flex items-center justify-center bg-coral text-white px-12 py-5 rounded-full hover:bg-coral-dark transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 font-body font-medium text-lg">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Link>
              <a
                href="tel:0783276967"
                className="inline-flex items-center justify-center border-2 border-cream/30 text-cream px-8 py-5 rounded-full hover:border-cream hover:bg-cream/10 transition-all duration-300 font-body font-medium"
              >
                <Phone size={18} className="mr-2" />
                07 83 27 69 67
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
