import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Yarden - Agence Digitale Israël | Développement Web & Marketing Digital',
  description: 'Agence digitale spécialisée en développement web, e-commerce, SEO et marketing digital en Israël. Solutions sur mesure pour PME et startups. Devis gratuit.',
  keywords: ['agence digitale israël', 'développement web', 'e-commerce', 'SEO', 'marketing digital', 'site web israël', 'création site internet'],
  authors: [{ name: 'Web Yarden', url: 'https://webyarden.vercel.app' }],
  creator: 'Web Yarden',
  publisher: 'Web Yarden',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://webyarden.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/fr',
      'en': '/en',
      'he': '/he',
    },
  },
  openGraph: {
    title: 'Web Yarden - Agence Digitale Israël | Développement Web & Marketing Digital',
    description: 'Agence digitale spécialisée en développement web, e-commerce, SEO et marketing digital en Israël. Solutions sur mesure pour PME et startups.',
    url: '/',
    siteName: 'Web Yarden',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Yarden - Agence Digitale Israël',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Yarden - Agence Digitale Israël',
    description: 'Agence digitale spécialisée en développement web, e-commerce, SEO et marketing digital en Israël.',
    images: ['/og-image.jpg'],
    creator: '@webyarden',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="antialiased">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
