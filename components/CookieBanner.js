import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { CONSENT_KEY, notifyCookieConsentChanged } from '../lib/cookieConsent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    notifyCookieConsentChanged();
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    notifyCookieConsentChanged();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          role="dialog"
          aria-modal="true"
          aria-label="Gestion des cookies"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50"
        >
          <div className="bg-white border-2 border-warm-200 rounded-3xl shadow-2xl p-6 relative">
            <button
              onClick={refuse}
              aria-label="Fermer"
              className="absolute top-4 right-4 text-primary/30 hover:text-primary transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-4 mb-4">
              <div className="bg-warm-200 p-3 rounded-2xl flex-shrink-0">
                <Cookie size={22} className="text-primary" />
              </div>
              <div>
                <h2 className="font-display font-bold text-primary text-base mb-1">
                  Ce site utilise des cookies
                </h2>
                <p className="text-xs text-primary/60 font-body leading-relaxed">
                  Cookies nécessaires au fonctionnement du site. Si vous acceptez, nous utilisons également
                  Google Analytics et Vercel Analytics pour mesurer l&apos;audience (pages vues, performances),
                  sans publicité ciblée.
                </p>
              </div>
            </div>

            <p className="text-xs text-primary/50 font-body mb-4">
              En cliquant sur &laquo; Accepter &raquo;, vous consentez à leur utilisation.
              Vous pouvez à tout moment modifier votre choix via notre{' '}
              <Link href="/gestion-cookies">
                <a href="/gestion-cookies" className="text-coral hover:underline" onClick={refuse}>page de gestion des cookies</a>
              </Link>.
            </p>

            <div className="flex gap-3">
              <button
                onClick={refuse}
                className="flex-1 bg-warm-200 text-primary px-4 py-2.5 rounded-full text-sm font-body font-medium hover:bg-warm-300 transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="flex-1 bg-coral text-white px-4 py-2.5 rounded-full text-sm font-body font-medium hover:bg-coral-dark transition-colors"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
