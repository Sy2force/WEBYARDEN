import { MetadataRoute } from 'next'
import { getSupportedLocales } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webyarden.co.il'
  const locales = getSupportedLocales()
  const routes = ['', '/about', '/services', '/packs', '/contact', '/devis', '/dashboard', '/projects', '/support']
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Add routes for each locale
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/services' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route === '/services' || route === '/packs' ? 0.9 : route === '/contact' || route === '/devis' ? 0.8 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [loc, `${baseUrl}/${loc}${route}`])
          )
        }
      })
    })
  })
  
  return sitemap
}
