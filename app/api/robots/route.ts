import { NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webyarden.vercel.app'

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Main sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Disallow admin and private areas
Disallow: /api/
Disallow: /dashboard/
Disallow: /_next/
Disallow: /.well-known/

# Allow important pages
Allow: /fr/
Allow: /en/
Allow: /he/
Allow: /fr/services
Allow: /en/services
Allow: /he/services
Allow: /fr/packs
Allow: /en/packs
Allow: /he/packs
Allow: /fr/projects
Allow: /en/projects
Allow: /he/projects
Allow: /fr/contact
Allow: /en/contact
Allow: /he/contact

# Crawl delay
Crawl-delay: 1`

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
