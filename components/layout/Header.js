import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  { path: '/realisations', label: 'Réalisations' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-lg'
          : 'bg-cream shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/">
            <a className="relative block w-48 h-14 flex-shrink-0 group">
              <Image
                src="/Logo principal bleu.png"
                alt="Terrasses & Paysages"
                layout="fill"
                objectFit="contain"
                objectPosition="left center"
                priority
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={`relative px-4 py-2 text-sm font-body font-medium transition-colors rounded-full ${
                  router.pathname === item.path
                    ? 'text-primary bg-warm-100'
                    : 'text-primary/60 hover:text-primary hover:bg-warm-100/60'
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0783276967"
              className="hidden md:inline-flex items-center gap-2 bg-coral text-white px-5 py-2.5 rounded-full text-sm font-body font-medium hover:bg-coral-dark transition-colors shadow-md hover:shadow-lg"
            >
              <Phone size={15} />
              <span>07 83 27 69 67</span>
            </a>
            <button
              className="md:hidden text-primary p-2 hover:bg-warm-100 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

          {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 space-y-1 border-t border-warm-200">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`flex py-3 px-4 rounded-xl font-body font-medium transition-all ${
                    router.pathname === item.path
                      ? 'bg-primary text-cream shadow-md'
                      : 'text-primary/70 hover:bg-warm-100 hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <a
              href="tel:0783276967"
              className="flex items-center gap-2 bg-coral text-white px-4 py-3 rounded-xl font-body font-medium mt-2"
            >
              <Phone size={16} />
              <span>07 83 27 69 67</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
