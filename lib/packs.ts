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
    id: 'ecom-essentiel',
    name: 'Pack Essentiel',
    slogan: 'Lancez votre boutique en ligne rapidement',
    price: 2990,
    originalPrice: 3990,
    currency: '₪',
    services: [
      'Création boutique Shopify/WooCommerce',
      'Design responsive mobile-first',
      'Configuration paiements (Stripe/PayPal)',
      'SEO de base + Google Analytics',
      'Formation gestion boutique (2h)',
      'Support technique 30 jours'
    ],
    icon: '🚀',
    badge: 'NOUVEAU',
    badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    category: 'starter',
    delivery: '5-7 jours',
    guarantee: '30 jours satisfait ou remboursé'
  },
  {
    id: 'shopify-starter',
    name: 'Shopify Starter',
    slogan: 'Votre première boutique Shopify clé en main',
    price: 4990,
    originalPrice: 6990,
    currency: '₪',
    services: [
      'Boutique Shopify complète (10 produits)',
      'Thème premium personnalisé',
      'Intégration Stripe + PayPal + Apple Pay',
      'SEO optimisé + Rich Snippets',
      'Email marketing (Klaviyo setup)',
      'Pixels Facebook + Google Analytics 4',
      'Formation complète (4h)',
      'Support prioritaire 60 jours'
    ],
    icon: '🛍️',
    badge: '-29%',
    badgeColor: 'bg-gradient-to-r from-red-500 to-pink-500',
    color: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    category: 'starter',
    delivery: '7-10 jours',
    guarantee: '60 jours satisfait ou remboursé'
  },
  {
    id: 'ecom-pro',
    name: 'E-commerce Pro',
    slogan: 'Boostez vos ventes avec des outils avancés',
    price: 8990,
    originalPrice: 12990,
    currency: '₪',
    services: [
      'Boutique multi-plateforme (Shopify + WooCommerce)',
      'Tunnel de conversion optimisé',
      'Fiches produits SEO (jusqu\'à 50 produits)',
      'Campagnes Meta Ads + Google Shopping',
      'Automation email avancée (abandon panier)',
      'Intégration CRM (HubSpot/Salesforce)',
      'QR Codes produits + Social Selling',
      'Analytics avancés + reporting mensuel',
      'Support dédié 90 jours'
    ],
    icon: '📈',
    badge: 'POPULAIRE',
    badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
    popular: true,
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    category: 'pro',
    delivery: '10-14 jours',
    guarantee: '90 jours satisfait ou remboursé'
  },
  {
    id: 'shopify-premium',
    name: 'Shopify Premium',
    slogan: 'L\'excellence Shopify pour entrepreneurs ambitieux',
    price: 15990,
    originalPrice: 21990,
    currency: '₪',
    services: [
      'Boutique Shopify Plus enterprise',
      'Design sur-mesure + branding complet',
      'Catalogue produits illimité + import automatique',
      'Multi-devises + multi-langues',
      'Apps premium (reviews, upsell, inventory)',
      'Stratégie marketing omnicanal complète',
      'Intégrations avancées (ERP, 3PL, dropshipping)',
      'Formation équipe complète (8h)',
      'Account manager dédié 6 mois',
      'Maintenance et mises à jour incluses'
    ],
    icon: '👑',
    badge: 'BEST VALUE',
    badgeColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    color: 'bg-gradient-to-br from-yellow-500 to-red-500',
    category: 'premium',
    delivery: '14-21 jours',
    guarantee: '6 mois satisfait ou remboursé'
  },
  {
    id: 'ecom-ultra',
    name: 'E-com Ultra',
    slogan: 'Solution enterprise pour grandes ambitions',
    price: 24990,
    originalPrice: 34990,
    currency: '₪',
    services: [
      'Écosystème e-commerce complet multi-plateformes',
      'IA personnalisée (recommandations, chatbot)',
      'Applications mobiles natives iOS/Android',
      'Infrastructure cloud dédiée (AWS/GCP)',
      'Marketing automation IA (prédictif)',
      'Intégrations API sur-mesure',
      'Équipe dédiée (dev, design, marketing)',
      'Consulting stratégique mensuel',
      'SLA 99.9% + support 24/7',
      'ROI garanti ou remboursement'
    ],
    icon: '🚀',
    badge: 'ENTERPRISE',
    badgeColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    color: 'bg-gradient-to-br from-indigo-600 to-purple-600',
    category: 'enterprise',
    delivery: '21-30 jours',
    guarantee: 'ROI garanti 12 mois'
  },
  {
    id: 'marketplace-master',
    name: 'Marketplace Master',
    slogan: 'Dominez Amazon, eBay et les marketplaces',
    price: 12990,
    originalPrice: 17990,
    currency: '₪',
    services: [
      'Optimisation Amazon FBA complète',
      'Gestion multi-marketplaces (eBay, Etsy, Cdiscount)',
      'Création listings optimisés SEO',
      'Stratégie PPC Amazon + eBay Ads',
      'Gestion stocks automatisée',
      'Analyse concurrentielle approfondie',
      'Brand Registry + protection marque',
      'Reporting performance détaillé',
      'Support marketplace expert 120 jours'
    ],
    icon: '🏪',
    badge: '-28%',
    badgeColor: 'bg-gradient-to-r from-teal-500 to-green-500',
    color: 'bg-gradient-to-br from-teal-500 to-green-500',
    category: 'pro',
    delivery: '12-18 jours',
    guarantee: '120 jours satisfait ou remboursé'
  },
  {
    id: 'social-commerce',
    name: 'Social Commerce',
    slogan: 'Vendez sur TikTok, Instagram et Facebook',
    price: 6990,
    originalPrice: 9490,
    currency: '₪',
    services: [
      'Boutiques Instagram + Facebook Shop',
      'TikTok Shop setup + optimisation',
      'Stratégie Social Selling complète',
      'Création contenu produits (photos/vidéos)',
      'Campagnes influenceurs micro/macro',
      'Live shopping automation',
      'Pixels tracking cross-platform',
      'Formation réseaux sociaux (6h)',
      'Community management 60 jours'
    ],
    icon: '📱',
    badge: '-26%',
    badgeColor: 'bg-gradient-to-r from-pink-500 to-rose-500',
    color: 'bg-gradient-to-br from-pink-500 to-rose-500',
    category: 'pro',
    delivery: '8-12 jours',
    guarantee: '60 jours satisfait ou remboursé'
  },
  {
    id: 'sur-mesure',
    name: 'Pack Sur-Mesure',
    slogan: 'Solution 100% personnalisée selon vos besoins',
    price: 0,
    currency: '₪',
    services: [
      'Audit complet de vos besoins',
      'Développement solution unique',
      'Architecture technique sur-mesure',
      'Intégrations spécifiques métier',
      'Formation équipe personnalisée',
      'Support premium illimité',
      'Évolutions et maintenance continues',
      'Garantie résultats contractuelle'
    ],
    icon: '⚡',
    badge: 'SUR-MESURE',
    badgeColor: 'bg-gradient-to-r from-gray-600 to-gray-800',
    color: 'bg-gradient-to-br from-gray-600 to-gray-800',
    category: 'enterprise',
    delivery: 'Sur devis',
    guarantee: 'Garantie résultats'
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
