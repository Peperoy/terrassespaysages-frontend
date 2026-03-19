import { useState } from 'react';
import Head from 'next/head';
import { SITE_URL } from '../lib/siteConfig';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['195 bis rue de Famars', '59300 Valenciennes'],
  },
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['07 83 27 69 67'],
    href: 'tel:0783276967',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contactterrassespaysages@gmail.com'],
    href: 'mailto:contactterrassespaysages@gmail.com',
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: ['Lundi — Vendredi : 8h — 18h', 'Samedi : Fermé', 'Dimanche : Fermé'],
  },
];

const faqItems = [
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer: 'Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons pour étudier votre projet sur site.',
  },
  {
    question: 'Quelle est votre zone d\'intervention ?',
    answer: 'Nous intervenons dans un rayon d\'environ 30 km autour de Valenciennes. N\'hésitez pas à nous contacter pour vérifier.',
  },
  {
    question: 'Intervenez-vous chez les particuliers et les professionnels ?',
    answer: 'Oui, nous accompagnons aussi bien les particuliers que les professionnels (entreprises, collectivités, copropriétés).',
  },
  {
    question: 'Proposez-vous des contrats d\'entretien régulier ?',
    answer: 'Oui, nous proposons des contrats d\'entretien annuels adaptés à vos besoins avec des passages réguliers programmés.',
  },
  {
    question: 'Puis-je bénéficier du crédit d\'impôt ?',
    answer: 'Les travaux d\'entretien de jardin pour les particuliers ouvrent droit à un crédit d\'impôt immédiat de 50% dans le cadre des services à la personne.',
  },
];

const subjects = [
  { value: 'devis', label: 'Demande de devis' },
  { value: 'creation', label: 'Création de jardin' },
  { value: 'terrasse', label: 'Terrasse / Patio' },
  { value: 'cloture', label: 'Clôture / Maçonnerie' },
  { value: 'entretien', label: 'Entretien paysager' },
  { value: 'autre', label: 'Autre' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Contact form submission failed');

      setSubmitted(true);
      setFormData({ prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact — Terrasses & Paysages Valenciennes</title>
        <meta name="description" content="Contactez Terrasses & Paysages à Valenciennes. Devis gratuit pour aménagement extérieur, terrasse, jardin, clôture. Tél : 07 83 27 69 67" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/contact`} />

        <meta property="og:title" content="Contact — Terrasses & Paysages Valenciennes" />
        <meta property="og:description" content="Contactez-nous pour un devis gratuit. Aménagement extérieur, terrasse, jardin, clôture à Valenciennes. Tél : 07 83 27 69 67" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:image" content={`${SITE_URL}/og/home.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Terrasses & Paysages" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact — Terrasses & Paysages Valenciennes" />
        <meta name="twitter:description" content="Contactez-nous pour un devis gratuit. Tél : 07 83 27 69 67" />
        <meta name="twitter:image" content={`${SITE_URL}/og/home.jpg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqItems.map((q) => ({
                '@type': 'Question',
                name: q.question,
                acceptedAnswer: { '@type': 'Answer', text: q.answer },
              })),
            }),
          }}
        />
      </Head>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-cream to-warm-100" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-script text-coral text-2xl mb-3">Parlons de votre projet</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">Contactez-nous</h1>
            <p className="text-xl text-khaki font-body max-w-3xl mx-auto leading-relaxed">
              Une question ? Un projet ? N&apos;hésitez pas à nous contacter pour un devis gratuit et sans engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact principal */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Infos + badge */}
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-primary">Nos coordonnées</h2>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-warm-200 p-3.5 rounded-2xl flex-shrink-0 group-hover:bg-coral group-hover:scale-110 transition-all duration-300">
                      <info.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-primary mb-1">{info.title}</h3>
                      {info.href ? (
                        <a href={info.href} className="text-khaki hover:text-coral font-body transition-colors">
                          {info.lines[0]}
                        </a>
                      ) : (
                        info.lines.map((line) => (
                          <p key={line} className="text-khaki font-body text-sm">{line}</p>
                        ))
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Badge devis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-warm-200 p-7 rounded-3xl shadow-md"
              >
                <h3 className="text-xl font-display font-semibold text-primary mb-3">Demande de devis</h3>
                <p className="text-primary/70 font-body text-sm leading-relaxed mb-5">
                  Tous nos devis sont gratuits et sans engagement. Nous vous répondons sous 48h.
                </p>
                <ul className="space-y-2.5">
                  {['Visite sur site gratuite', 'Étude personnalisée', 'Conseils d\'experts'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-primary font-body">
                      <CheckCircle size={16} className="text-coral flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border-2 border-warm-200 rounded-3xl p-8 md:p-10 shadow-xl"
              >
                <h2 className="text-3xl font-display font-bold text-primary mb-8">Envoyez-nous un message</h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-2xl"
                  >
                    <p className="font-display font-semibold text-lg mb-1">Message envoyé avec succès !</p>
                    <p className="text-sm font-body">Nous vous répondrons dans les plus brefs délais.</p>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-2xl"
                  >
                    <p className="text-sm font-body">{error}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-body font-medium text-primary mb-1.5">
                        Prénom *
                      </label>
                      <input
                        type="text" id="prenom" name="prenom"
                        value={formData.prenom} onChange={handleChange} required
                        className="w-full px-5 py-3.5 border-2 border-warm-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body text-primary bg-cream"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="nom" className="block text-sm font-body font-medium text-primary mb-1.5">
                        Nom *
                      </label>
                      <input
                        type="text" id="nom" name="nom"
                        value={formData.nom} onChange={handleChange} required
                        className="w-full px-5 py-3.5 border-2 border-warm-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body text-primary bg-cream"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-body font-medium text-primary mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange} required
                        className="w-full px-5 py-3.5 border-2 border-warm-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body text-primary bg-cream"
                        placeholder="votre@email.fr"
                      />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-body font-medium text-primary mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel" id="telephone" name="telephone"
                        value={formData.telephone} onChange={handleChange}
                        className="w-full px-5 py-3.5 border-2 border-warm-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body text-primary bg-cream"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-sm font-body font-medium text-primary mb-1.5">
                      Sujet *
                    </label>
                    <select
                      id="sujet" name="sujet"
                      value={formData.sujet} onChange={handleChange} required
                      className="w-full px-5 py-3.5 border-2 border-warm-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body text-primary bg-cream appearance-none"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-body font-medium text-primary mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange} required rows={6}
                      className="w-full px-5 py-3.5 border-2 border-warm-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all font-body text-primary bg-cream"
                      placeholder="Décrivez votre projet en quelques mots..."
                    />
                  </div>

                  <p className="text-xs text-khaki font-body">* Champs obligatoires</p>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-coral text-white px-8 py-4 rounded-full hover:bg-coral-dark transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-body font-medium text-lg disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      <>Envoyer le message <Send size={20} /></>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte zone */}
      <section className="py-0">
        <div className="w-full h-72 bg-gradient-to-br from-warm-200 to-warm-300 flex items-center justify-center relative overflow-hidden">
          <div className="text-center relative z-10">
            <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
              <MapPin size={36} className="text-coral" />
            </div>
            <p className="text-2xl font-display font-semibold text-primary">
              Zone d&apos;intervention : Valenciennes et ~30 km alentours
            </p>
            <p className="text-khaki font-body mt-2">195 bis rue de Famars, 59300 Valenciennes</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-script text-coral text-2xl mb-2">On répond à vos questions</p>
            <h2 className="text-4xl font-display font-bold text-primary">Questions fréquentes</h2>
          </div>
          <div className="space-y-5">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-7 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-display font-semibold text-primary mb-2">{item.question}</h3>
                <p className="text-khaki font-body leading-relaxed text-sm">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
