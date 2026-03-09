import Head from 'next/head';
import Home from '../components/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Terrasses & Paysages — Aménagement extérieur à Valenciennes</title>
        <meta name="description" content="Terrasses & Paysages : création de jardins, terrasses, clôtures, maçonnerie paysagère et entretien à Valenciennes et alentours. Devis gratuit — 07 83 27 69 67" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
