import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Layout from '@/components/layout/Layout'
import ChatWidget from '@/components/ChatWidget'
import StickySimulator from '@/components/StickySimulator'
import CartDrawer from '@/components/CartDrawer'
import { getSupportedLocales } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  params: { locale: string }
}

export async function generateStaticParams() {
  const locales = getSupportedLocales()
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  
  const titles = {
    fr: 'Web Yarden - Agence Digitale Israël | Développement Web & E-commerce',
    en: 'Web Yarden - Digital Agency Israel | Web Development & E-commerce',
    he: 'ווב יארדן - סוכנות דיגיטלית ישראל | פיתוח אתרים ומסחר אלקטרוני'
  }
  
  const descriptions = {
    fr: 'Agence digitale leader en Israël spécialisée en développement web, e-commerce, applications mobiles et marketing digital. +50 projets réalisés, support 24/7.',
    en: 'Leading digital agency in Israel specialized in web development, e-commerce, mobile apps and digital marketing. +50 completed projects, 24/7 support.',
    he: 'סוכנות דיגיטלית מובילה בישראל המתמחה בפיתוח אתרים, מסחר אלקטרוני, אפליקציות ניידות ושיווק דיגיטלי. +50 פרויקטים, תמיכה 24/7.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.fr,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.fr,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://webyarden.co.il'),
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.fr,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.fr,
      url: '/',
      siteName: 'Web Yarden',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: titles[locale as keyof typeof titles] || titles.fr,
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'he_IL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles] || titles.fr,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.fr,
      images: ['/og-image.jpg'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'fr': '/fr',
        'en': '/en',
        'he': '/he',
      },
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
    keywords: locale === 'fr' ? 
      'agence digitale israël, développement web, e-commerce, applications mobiles, marketing digital, SEO, Tel Aviv' :
      locale === 'en' ?
      'digital agency israel, web development, e-commerce, mobile apps, digital marketing, SEO, Tel Aviv' :
      'סוכנות דיגיטלית ישראל, פיתוח אתרים, מסחר אלקטרוני, אפליקציות ניידות, שיווק דיגיטלי, קידום אתרים, תל אביב',
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params
  const direction = locale === 'he' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={direction} className="antialiased">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        <ChatWidget />
        <StickySimulator />
        <CartDrawer />
      </body>
    </html>
  )
}
