import { Service } from '../types'

export const services: Service[] = [
  {
    id: 'website-creation',
    name: 'Création Site Web',
    description: 'Sites web modernes, responsive et optimisés SEO',
    icon: '🌐',
    category: 'development',
    price: {
      min: 1500,
      max: 8000,
      currency: 'EUR'
    },
    features: [
      'Design responsive mobile-first',
      'Optimisation SEO avancée',
      'Performance ultra-rapide',
      'Sécurité renforcée',
      'Support technique 1 an'
    ],
    popular: true,
    delivery: '2-4 semaines',
    image: '/images/services/website.jpg'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Boutiques en ligne complètes avec paiement intégré',
    icon: '🛒',
    category: 'ecommerce',
    price: {
      min: 3000,
      max: 15000,
      currency: 'EUR'
    },
    features: [
      'Catalogue produits illimité',
      'Paiement sécurisé Stripe/PayPal',
      'Gestion stocks automatique',
      'Analytics e-commerce',
      'Support client 24/7'
    ],
    delivery: '4-8 semaines',
    image: '/images/services/ecommerce.jpg'
  },
  {
    id: 'mobile-app',
    name: 'Application Mobile',
    description: 'Applications iOS & Android natives et cross-platform',
    icon: '📱',
    category: 'mobile',
    price: {
      min: 5000,
      max: 25000,
      currency: 'EUR'
    },
    features: [
      'Développement iOS & Android',
      'UI/UX design professionnel',
      'Intégrations API',
      'Tests automatisés',
      'Publication sur stores'
    ],
    delivery: '6-12 semaines',
    image: '/images/services/mobile.jpg'
  },
  {
    id: 'digital-marketing',
    name: 'Marketing Digital',
    description: 'Stratégies SEO, SEM et réseaux sociaux pour booster votre visibilité',
    icon: '📈',
    category: 'marketing',
    price: {
      min: 800,
      max: 3000,
      currency: 'EUR'
    },
    features: [
      'Audit SEO complet',
      'Campagnes Google Ads',
      'Gestion réseaux sociaux',
      'Content marketing',
      'Analytics & reporting'
    ],
    delivery: 'Mensuel',
    image: '/images/services/marketing.jpg'
  },
  {
    id: 'branding',
    name: 'Identité Visuelle',
    description: 'Création de logos et charte graphique complète',
    icon: '🎨',
    category: 'design',
    price: {
      min: 800,
      max: 3000,
      currency: 'EUR'
    },
    features: [
      'Logo professionnel unique',
      'Charte graphique complète',
      'Déclinaisons tous supports',
      'Fichiers source fournis',
      'Révisions illimitées'
    ],
    delivery: '1-3 semaines',
    image: '/images/services/branding.jpg'
  },
  {
    id: 'consulting',
    name: 'Conseil Digital',
    description: 'Audit et stratégie digitale pour optimiser votre présence en ligne',
    icon: '🎯',
    category: 'consulting',
    price: {
      min: 500,
      max: 2000,
      currency: 'EUR'
    },
    features: [
      'Audit digital complet',
      'Stratégie personnalisée',
      'Recommandations techniques',
      'Roadmap détaillée',
      'Suivi mensuel'
    ],
    delivery: '1-2 semaines',
    image: '/images/services/consulting.jpg'
  }
]

export const serviceCategories = [
  { id: 'all', name: 'Tous les services', icon: '🎯' },
  { id: 'development', name: 'Développement', icon: '⚡' },
  { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
  { id: 'mobile', name: 'Mobile', icon: '📱' },
  { id: 'marketing', name: 'Marketing', icon: '📈' },
  { id: 'design', name: 'Design', icon: '🎨' },
  { id: 'consulting', name: 'Conseil', icon: '🎯' }
]

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id)
}

export function getServicesByCategory(category: string): Service[] {
  if (category === 'all') return services
  return services.filter(service => service.category === category)
}

export function getPopularServices(): Service[] {
  return services.filter(service => service.popular)
}
