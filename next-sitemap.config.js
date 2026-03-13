/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://terrasses-paysages.com',
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
      '/': 1.0,
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
