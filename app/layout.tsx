import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Yarden - Agence Digitale Israël | Marketing Digital, Visibilité, Réseaux',
  description: 'Web Yarden vous aide à booster votre présence numérique en Israël : explorez nos services, composez votre devis personnalisé et propulsez votre visibilité.',
  keywords: 'agence digitale israël, marketing digital tel aviv, création site web israël, réseaux sociaux, SEO, publicité facebook instagram',
  authors: [{ name: 'Web Yarden' }],
  creator: 'Web Yarden',
  publisher: 'Web Yarden',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://webyarden.co.il'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: []
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Web Yarden - Agence Digitale #1 en Israël',
    description: 'Accélérez votre visibilité en Israël avec nos solutions digitales créatives et performantes.',
    url: 'https://webyarden.co.il',
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
    description: 'Accélérez votre visibilité en Israël avec nos solutions digitales créatives et performantes.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#3A86FF" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
