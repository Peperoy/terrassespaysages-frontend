/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL && String(process.env.NEXT_PUBLIC_SITE_URL).replace(/\/$/, '')) ||
  'https://www.terrasses-paysages.com';

module.exports = {
  siteUrl,
  /** Un seul fichier sitemap.xml (pas d'index + sitemap-0.xml) — suffisant tant que < 50 000 URLs. */
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
  exclude: [
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/gestion-cookies',
    '/404',
  ],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      '/': 1,
      '/services': 0.9,
      '/realisations': 0.8,
      '/contact': 0.8,
      '/a-propos': 0.6,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
