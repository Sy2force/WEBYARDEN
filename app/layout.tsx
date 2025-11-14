import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Yarden',
  description: 'Solutions digitales premium en Israël. Développement web, e-commerce, SEO et marketing digital sur-mesure. Transformez votre vision en succès digital.',
  keywords: ['web yarden', 'développement web israël', 'e-commerce premium', 'SEO israël', 'marketing digital', 'solutions digitales', 'création site web'],
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
    title: 'Web Yarden',
    description: 'Solutions digitales premium en Israël. Développement web, e-commerce, SEO et marketing digital sur-mesure.',
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
    title: 'Web Yarden',
    description: 'Solutions digitales premium en Israël. Développement web, e-commerce, SEO et marketing digital sur-mesure.',
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
