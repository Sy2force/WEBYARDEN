export interface Pack {
  id: string
  name: string
  slogan: string
  price: number
  originalPrice?: number
  currency: string
  services: string[]
  icon: string
  badge?: string
  badgeColor?: string
  popular?: boolean
  color: string
  category: 'starter' | 'pro' | 'premium' | 'enterprise'
  delivery: string
  guarantee: string
}

export const ecommercePacks: Pack[] = [
  {
    id: 'starter-web',
    name: 'Web Starter',
    slogan: 'Votre première boutique en ligne à petit prix',
    price: 1490,
    originalPrice: 1990,
    currency: '₪',
    services: [
      'Site e-commerce WordPress/WooCommerce',
      'Design responsive moderne',
      'Configuration paiements de base',
      'SEO initial + Google Analytics',
      'Formation administration (2h)',
      'Support email 30 jours'
    ],
    icon: '🌟',
    badge: '-25%',
    badgeColor: 'bg-gradient-to-r from-emerald-400 to-teal-500',
    color: 'bg-gradient-to-br from-emerald-400 to-cyan-500',
    category: 'starter',
    delivery: '3-5 jours',
    guarantee: '30 jours satisfait ou remboursé'
  },
  {
    id: 'business-boost',
    name: 'Business Boost',
    slogan: 'Boostez vos ventes avec des fonctionnalités essentielles',
    price: 2990,
    originalPrice: 3990,
    currency: '₪',
    services: [
      'Boutique Shopify complète',
      'Design premium personnalisé',
      'Intégrations paiements avancées (Stripe, PayPal)',
      'SEO optimisé + Schema markup',
      'Email marketing setup (Mailchimp)',
      'Analytics et pixels de tracking',
      'Formation complète (4h)',
      'Support prioritaire 60 jours'
    ],
    icon: '🚀',
    badge: 'POPULAIRE',
    badgeColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    popular: true,
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
    category: 'starter',
    delivery: '5-7 jours',
    guarantee: '60 jours satisfait ou remboursé'
  },
  {
    id: 'pro-commerce',
    name: 'Pro Commerce',
    slogan: 'Solution professionnelle pour entrepreneurs sérieux',
    price: 4990,
    originalPrice: 6990,
    currency: '₪',
    services: [
      'Plateforme e-commerce avancée',
      'Design sur-mesure + branding',
      'Tunnel de vente optimisé',
      'Marketing automation (abandon panier)',
      'Intégration réseaux sociaux',
      'Apps premium incluses',
      'Formation équipe (6h)',
      'Support dédié 90 jours',
      'Maintenance 3 mois incluse'
    ],
    icon: '💼',
    badge: '-29%',
    badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
    color: 'bg-gradient-to-br from-orange-500 to-pink-600',
    category: 'pro',
    delivery: '7-10 jours',
    guarantee: '90 jours satisfait ou remboursé'
  },
  {
    id: 'premium-elite',
    name: 'Premium Elite',
    slogan: 'Excellence e-commerce pour leaders du marché',
    price: 7990,
    originalPrice: 10990,
    currency: '₪',
    services: [
      'Écosystème e-commerce complet',
      'Design premium + identité visuelle',
      'Multi-devises et multi-langues',
      'Stratégie marketing omnicanal',
      'Intégrations CRM et ERP',
      'Applications mobiles (PWA)',
      'Analytics avancés + BI dashboard',
      'Formation management (8h)',
      'Account manager dédié 6 mois'
    ],
    icon: '👑',
    badge: 'BEST VALUE',
    badgeColor: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    color: 'bg-gradient-to-br from-yellow-500 to-red-600',
    category: 'premium',
    delivery: '10-14 jours',
    guarantee: '6 mois satisfait ou remboursé'
  },
  {
    id: 'enterprise-master',
    name: 'Enterprise Master',
    slogan: 'Solution enterprise pour conquérir votre marché',
    price: 12990,
    originalPrice: 17990,
    currency: '₪',
    services: [
      'Plateforme enterprise sur-mesure',
      'Architecture cloud scalable (AWS)',
      'IA et machine learning intégrés',
      'API et intégrations illimitées',
      'Équipe dédiée (dev + marketing)',
      'Stratégie digitale complète',
      'SLA 99.9% + support 24/7',
      'Formation équipe illimitée',
      'Consulting mensuel inclus',
      'ROI garanti contractuel'
    ],
    icon: '⚡',
    badge: 'ENTERPRISE',
    badgeColor: 'bg-gradient-to-r from-purple-600 to-indigo-700',
    color: 'bg-gradient-to-br from-purple-600 to-indigo-700',
    category: 'enterprise',
    delivery: '14-21 jours',
    guarantee: 'ROI garanti 12 mois'
  }
]

export const getPacksByCategory = (category?: string) => {
  if (!category) return ecommercePacks
  return ecommercePacks.filter(pack => pack.category === category)
}

export const getPopularPacks = () => {
  return ecommercePacks.filter(pack => pack.popular)
}

export const getPackById = (id: string) => {
  return ecommercePacks.find(pack => pack.id === id)
}
