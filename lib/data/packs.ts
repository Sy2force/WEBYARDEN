export interface Pack {
  id: string
  name: string
  slogan: string
  description: string
  price: number
  originalPrice?: number
  currency: string
  category: string
  services: string[]
  features: string[]
  icon: string
  badge?: string
  badgeColor?: string
  popular?: boolean
  bestValue?: boolean
  recommended?: boolean
  color: string
  delivery: string
  support?: string
  guarantee: string
  includes?: string[]
}

export const packs: Pack[] = [
  {
    id: 'starter',
    name: 'Pack Starter',
    description: 'Parfait pour débuter votre présence en ligne',
    price: 1999,
    originalPrice: 2499,
    currency: 'EUR',
    category: 'website',
    icon: '🌐',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    slogan: 'Parfait pour débuter votre présence en ligne',
    services: [
      'Site vitrine 5 pages',
      'Design responsive mobile',
      'Optimisation SEO de base',
      'Formulaire de contact',
      'Hébergement 1 an inclus'
    ],
    guarantee: '30 jours satisfait ou remboursé',
    features: [
      'Responsive design',
      'SEO optimized',
      'Contact form',
      'Hosting included'
    ],
    delivery: '2-3 semaines',
    support: '6 mois',
    includes: [
      'Nom de domaine .com',
      'SSL gratuit',
      'Formation WordPress'
    ]
  },
  {
    id: 'business',
    name: 'Pack Business',
    description: 'Solution complète pour développer votre activité',
    price: 3999,
    originalPrice: 4999,
    currency: 'EUR',
    category: 'business',
    icon: '💼',
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
    slogan: 'Solution complète pour développer votre activité',
    services: [
      'Site web 10 pages sur mesure',
      'E-commerce jusqu\'à 50 produits',
      'SEO avancé + Google Analytics',
      'Intégration réseaux sociaux',
      'Chat en direct'
    ],
    guarantee: '60 jours satisfait ou remboursé',
    popular: true,
    features: [
      'Custom 10-page website',
      'E-commerce up to 50 products',
      'Advanced SEO + Analytics',
      'Social media integration',
      'Live chat'
    ],
    delivery: '4-6 semaines',
    support: '12 mois',
    includes: [
      'Logo + identité visuelle',
      'Carte de visite digitale',
      'Formation complète'
    ]
  },
  {
    id: 'premium',
    name: 'Pack Premium',
    description: 'Excellence digitale pour entreprises ambitieuses',
    price: 7999,
    originalPrice: 9999,
    currency: 'EUR',
    category: 'premium',
    icon: '⭐',
    color: 'bg-gradient-to-br from-yellow-500 to-red-600',
    slogan: 'Excellence digitale pour entreprises ambitieuses',
    services: [
      'Site web illimité + blog',
      'E-commerce catalogue complet',
      'Application mobile iOS/Android',
      'Marketing automation',
      'Analytics avancés'
    ],
    guarantee: '90 jours satisfait ou remboursé',
    bestValue: true,
    features: [
      'Unlimited website + blog',
      'Full e-commerce catalog',
      'iOS/Android mobile app',
      'Marketing automation',
      'Advanced analytics'
    ],
    delivery: '6-10 semaines',
    support: '24 mois',
    includes: [
      'Branding complet',
      'Photoshoot produits',
      'Stratégie marketing'
    ]
  },
  {
    id: 'enterprise',
    name: 'Pack Enterprise',
    description: 'Solution sur mesure pour grandes entreprises',
    price: 15999,
    currency: 'EUR',
    category: 'enterprise',
    icon: '🏢',
    color: 'bg-gradient-to-br from-purple-600 to-indigo-700',
    slogan: 'Solution sur mesure pour grandes entreprises',
    services: [
      'Plateforme web complexe',
      'Applications métier sur mesure',
      'Intégrations systèmes existants',
      'Support dédié 24/7',
      'Sécurité renforcée'
    ],
    guarantee: 'ROI garanti 12 mois',
    features: [
      'Complex web platform',
      'Custom business applications',
      'System integrations',
      'Dedicated 24/7 support',
      'Enhanced security'
    ],
    delivery: '10-16 semaines',
    support: 'Illimité',
    includes: [
      'Audit technique complet',
      'Formation équipes',
      'Maintenance préventive'
    ]
  },
  {
    id: 'ecommerce-starter',
    name: 'E-commerce Starter',
    description: 'Lancez votre boutique en ligne rapidement',
    price: 2999,
    originalPrice: 3499,
    currency: 'EUR',
    category: 'ecommerce',
    icon: '🛒',
    color: 'bg-gradient-to-br from-green-500 to-blue-600',
    slogan: 'Lancez votre boutique en ligne rapidement',
    services: [
      'Boutique jusqu\'à 100 produits',
      'Paiement Stripe + PayPal',
      'Gestion stocks automatique',
      'Livraison et taxes',
      'Tableau de bord vendeur'
    ],
    guarantee: '60 jours satisfait ou remboursé',
    features: [
      'Store up to 100 products',
      'Stripe + PayPal payments',
      'Automatic inventory',
      'Shipping and taxes',
      'Seller dashboard'
    ],
    delivery: '3-5 semaines',
    support: '12 mois',
    includes: [
      'Import produits inclus',
      'Design mobile optimisé',
      'Formation e-commerce'
    ]
  },
  {
    id: 'marketing-boost',
    name: 'Marketing Boost',
    description: 'Boostez votre visibilité et vos ventes',
    price: 1499,
    currency: 'EUR',
    category: 'marketing',
    icon: '📈',
    color: 'bg-gradient-to-br from-pink-500 to-orange-600',
    slogan: 'Boostez votre visibilité et vos ventes',
    services: [
      'Audit SEO complet',
      'Campagne Google Ads 3 mois',
      'Gestion réseaux sociaux',
      'Content creation',
      'Reporting mensuel'
    ],
    guarantee: '3 mois satisfait ou remboursé',
    recommended: true,
    features: [
      'Complete SEO audit',
      '3-month Google Ads campaign',
      'Social media management',
      'Content creation',
      'Monthly reporting'
    ],
    delivery: '1 semaine',
    support: '3 mois',
    includes: [
      'Budget publicité 500€',
      'Créations graphiques',
      'Optimisations continues'
    ]
  }
]

export const packCategories = [
  { id: 'all', name: 'Tous les packs', icon: '📦' },
  { id: 'website', name: 'Sites Web', icon: '🌐' },
  { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'premium', name: 'Premium', icon: '⭐' },
  { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
  { id: 'marketing', name: 'Marketing', icon: '📈' }
]

export function getPackById(id: string): Pack | undefined {
  return packs.find(pack => pack.id === id)
}

export function getPacksByCategory(category: string): Pack[] {
  if (category === 'all') return packs
  return packs.filter(pack => pack.category === category)
}

export function getPopularPacks(): Pack[] {
  return packs.filter(pack => pack.popular || pack.bestValue || pack.recommended)
}

export function getPackComparison(): Pack[] {
  return packs.filter(pack => ['starter', 'business', 'premium'].includes(pack.id))
}
