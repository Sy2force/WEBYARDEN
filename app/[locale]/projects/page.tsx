import { Metadata } from 'next'
import ProjectsPageClient from './ProjectsPageClient'

export const metadata: Metadata = {
  title: 'Portfolio Digital Premium | Projets Web Yarden Agency',
  description: 'Découvrez notre portfolio de projets réalisés : SaaS, e-commerce, applications mobiles, fintech. Résultats mesurés et clients satisfaits.',
  keywords: 'portfolio web, projets digitaux, saas, ecommerce, applications mobiles, développement web, agence digitale'
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      <ProjectsPageClient />
    </main>
  )
}
