import Head from 'next/head';
import Home from '../components/Home';

const SITE_URL = 'https://terrasses-paysages.com';

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
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 50.3557, longitude: 3.5234 },
    geoRadius: '30000',
  },
  priceRange: '€€',
  sameAs: [],
};

export default function Index() {
  return (
    <>
      <Head>
        <title>Terrasses & Paysages — Aménagement extérieur à Valenciennes</title>
        <meta name="description" content="Terrasses & Paysages : création de jardins, terrasses, clôtures, maçonnerie paysagère et entretien à Valenciennes et alentours. Devis gratuit — 07 83 27 69 67" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

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
