import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://breteuil-demenagement.fr'

  const staticPages = [
    '', '/formules', '/a-propos', '/contact', '/devis', '/payer',
    '/mentions-legales', '/politique-confidentialite', '/cgv',
  ]

  const services = [
    'demenagement-residentiel', 'demenagement-professionnel',
    'demenagement-international', 'emballage', 'monte-meuble', 'garde-meuble',
  ]

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...services.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
