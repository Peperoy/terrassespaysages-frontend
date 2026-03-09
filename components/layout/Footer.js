import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

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
              <a className="relative block w-44 h-20 mb-5">
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
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-coral w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-coral w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
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
                    <a className="text-sm text-cream/70 hover:text-coral font-body transition-colors inline-flex items-center group">
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
            © {new Date().getFullYear()} Terrasses & Paysages. Tous droits réservés.
          </p>
          <p className="text-xs text-cream/30 font-body">
            Aménagement extérieur · Valenciennes
          </p>
        </div>
      </div>
    </footer>
  );
}
