import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Yarden - Agence Digitale Israël',
  description: 'Votre partenaire digital en Israël pour booster votre présence en ligne et développer votre business.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://webyarden.co.il'),
  openGraph: {
    title: 'Web Yarden - Agence Digitale Israël',
    description: 'Votre partenaire digital en Israël pour booster votre présence en ligne et développer votre business.',
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
    description: 'Votre partenaire digital en Israël pour booster votre présence en ligne et développer votre business.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="antialiased">
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <ChatWidget />
      </body>
    </html>
  )
}
