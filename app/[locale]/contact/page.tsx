import { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Web Yarden | Agence Digitale à Tel Aviv',
  description: 'Contactez Web Yarden pour vos projets digitaux. Équipe experte à Tel Aviv, consultation gratuite, réponse rapide par email ou WhatsApp. Démarrons votre projet ensemble.',
  keywords: 'contact web yarden, agence digitale tel aviv, consultation gratuite, whatsapp, devis projet digital'
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      <ContactPageClient />
    </main>
  )
}
