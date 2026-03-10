import { useState } from 'react';
import Layout from '../components/layout/Layout';
import SplashScreen from '../components/SplashScreen';
import CookieBanner from '../components/CookieBanner';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <div
        style={{
          transition: 'opacity 0.6s ease',
          opacity: splashDone ? 1 : 0,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
      <CookieBanner />
    </>
  );
}
