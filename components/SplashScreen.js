import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen({ onComplete }) {
  const [logoVisible, setLogoVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Légère temporisation pour déclencher la transition CSS
    const showTimer = setTimeout(() => setLogoVisible(true), 80);
    // Début du fade out du splash
    const exitTimer = setTimeout(() => setFadeOut(true), 1900);
    // Fin complète — on rend la main au site
    const doneTimer = setTimeout(() => onComplete?.(), 2700);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDFCF3',
        transition: 'opacity 0.8s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Halo décoratif */}
      <div
        style={{
          position: 'absolute',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #EDE8D8 0%, transparent 70%)',
          opacity: 0.8,
        }}
      />

      {/* Logo + barre */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          position: 'relative',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(12px)',
        }}
      >
        {/* Logo */}
        <div style={{
          position: 'relative',
          width: 'min(480px, 85vw)',
          height: 'min(480px, 85vw)',
        }}>
          <Image
            src="/Logo secondaire bleu.png"
            alt="Terrasses & Paysages"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Barre de progression */}
        <div
          style={{
            width: '120px',
            height: '2px',
            backgroundColor: '#EDE8D8',
            borderRadius: '99px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              backgroundColor: '#FF784F',
              borderRadius: '99px',
              width: logoVisible ? '100%' : '0%',
              transition: 'width 1.4s ease',
            }}
          />
        </div>
      </div>
    </div>
  );
}
