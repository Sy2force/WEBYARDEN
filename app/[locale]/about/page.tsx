import { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'À Propos de Web Yarden | Agence Digitale Experte',
  description: 'Découvrez l\'histoire, les valeurs et l\'équipe de Web Yarden. 5+ ans d\'expérience, 150+ projets réalisés, équipe passionnée et expertise technique reconnue.',
  keywords: 'à propos web yarden, équipe développement, agence digitale, expertise web, histoire entreprise, valeurs'
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      <AboutPageClient />
    </main>
  )
}
