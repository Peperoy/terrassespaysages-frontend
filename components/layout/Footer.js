import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <a href="/" className="relative block w-44 h-20 mb-5">
                <Image
                  src="/Logo principal blanc.png"
                  alt="Terrasses & Paysages"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left center"
                />
              </a>
            </Link>
            <p className="text-sm text-cream/70 font-body leading-relaxed mb-5">
              Création et entretien d&apos;espaces extérieurs durables et fonctionnels à Valenciennes et alentours.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/maxime.lefebvre.144"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-coral w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/terrasses_et_paysages/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-coral w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/maxime-lefebvre-terrasses-et-paysages-aa56b9100/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-coral w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-5 text-cream">Liens rapides</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a href={link.href} className="text-sm text-cream/70 hover:text-coral font-body transition-colors inline-flex items-center group">
                      <span className="w-0 group-hover:w-2 h-px bg-coral transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-5 text-cream">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-coral mt-0.5 flex-shrink-0" />
                <span className="text-sm text-cream/70 font-body">
                  195 bis rue de Famars<br />59300 Valenciennes
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-coral flex-shrink-0" />
                <a href="tel:0783276967" className="text-sm text-cream/70 hover:text-cream font-body transition-colors">
                  07 83 27 69 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-coral flex-shrink-0" />
                <a href="mailto:contactterrassespaysages@gmail.com" className="text-sm text-cream/70 hover:text-cream font-body transition-colors break-all">
                  contactterrassespaysages@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-5 bg-white/5 rounded-2xl p-4">
              <p className="text-xs text-cream/50 font-body">
                Zone d&apos;intervention : ~30 km autour de Valenciennes
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/40 font-body">
            © {new Date().getFullYear()} Terrasses &amp; Paysages. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/mentions-legales">
              <a href="/mentions-legales" className="text-xs text-cream/30 hover:text-cream/60 font-body transition-colors">
                Mentions légales
              </a>
            </Link>
            <Link href="/politique-de-confidentialite">
              <a href="/politique-de-confidentialite" className="text-xs text-cream/30 hover:text-cream/60 font-body transition-colors">
                Confidentialité
              </a>
            </Link>
            <Link href="/gestion-cookies">
              <a href="/gestion-cookies" className="text-xs text-cream/30 hover:text-cream/60 font-body transition-colors">
                Cookies
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
