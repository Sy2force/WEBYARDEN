import { Metadata } from 'next'
import PacksPageClient from './PacksPageClient'

export const metadata: Metadata = {
  title: 'Nos Packs Digitaux Premium | Web Yarden Agency',
  description: 'Découvrez nos packs digitaux sur-mesure : sites web, e-commerce, applications mobiles. Solutions clé en main pour votre succès digital.',
  keywords: 'packs digitaux, site web, e-commerce, application mobile, développement web, agence digitale'
}

export default function PacksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      <PacksPageClient />
    </main>
  )
}

