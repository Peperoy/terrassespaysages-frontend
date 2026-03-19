import Head from 'next/head';
import Home from '../components/Home';
import { SITE_URL } from '../lib/siteConfig';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Terrasses & Paysages',
  description: 'Entreprise spécialisée dans l\'aménagement extérieur, création de jardins, terrasses, clôtures et entretien paysager à Valenciennes.',
  url: SITE_URL,
  logo: `${SITE_URL}/Logo principal bleu.png`,
  image: `${SITE_URL}/og/home.jpg`,
  telephone: '+33783276967',
  email: 'contactterrassespaysages@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '195 bis rue de Famars',
    addressLocality: 'Valenciennes',
    postalCode: '59300',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.3557,
    longitude: 3.5234,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 50.3557, longitude: 3.5234 },
    geoRadius: '30000',
  },
  priceRange: '€€',
  sameAs: [
     'https://www.google.com/maps/place/Terrasses+%26+Paysages/@50.3767065,3.4030893,10z/data=!3m1!4b1!4m6!3m5!1s0xad964cec52fb3e09:0x4d51d63bca804300!8m2!3d50.3771723!4d3.7327254!16s%2Fg%2F11wqrg7hmx?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D',
     'https://www.facebook.com/maxime.lefebvre.144',
     'https://www.instagram.com/terrasses_et_paysages/',
     'https://www.linkedin.com/in/maxime-lefebvre-terrasses-et-paysages-aa56b9100/',
  ],
};

export default function Index() {
  return (
    <>
      <Head>
        <title>Terrasses & Paysages — Aménagement extérieur à Valenciennes</title>
        <meta name="description" content="Terrasses & Paysages : création de jardins, terrasses, clôtures, maçonnerie paysagère et entretien à Valenciennes et alentours. Devis gratuit — 07 83 27 69 67" />
        <meta name="robots" content="index, follow" />
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        ) : null}
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:title" content="Terrasses & Paysages — Aménagement extérieur à Valenciennes" />
        <meta property="og:description" content="Création de jardins, terrasses, clôtures et entretien paysager à Valenciennes. Devis gratuit — 07 83 27 69 67" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og/home.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Terrasses & Paysages" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terrasses & Paysages — Aménagement extérieur à Valenciennes" />
        <meta name="twitter:description" content="Création de jardins, terrasses, clôtures et entretien paysager à Valenciennes. Devis gratuit." />
        <meta name="twitter:image" content={`${SITE_URL}/og/home.jpg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      <Home />
    </>
  );
}
