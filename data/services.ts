export interface Service {
  id: string
  title: string
  price: number
  category: string
  description: string
  delivery: string
  image: string
  features: string[]
  popular?: boolean
  badge?: string
  slug: string
}

export const serviceCategories = [
  { id: 'web-development', name: 'services.categories.webDevelopment', icon: '💻' },
  { id: 'design', name: 'services.categories.design', icon: '🎨' },
  { id: 'marketing', name: 'services.categories.marketing', icon: '📈' },
  { id: 'ecommerce', name: 'services.categories.ecommerce', icon: '🛒' },
  { id: 'mobile', name: 'services.categories.mobile', icon: '📱' },
  { id: 'consulting', name: 'services.categories.consulting', icon: '🧠' },
  { id: 'maintenance', name: 'services.categories.maintenance', icon: '🔧' },
  { id: 'seo', name: 'services.categories.seo', icon: '🚀' }
]

export const services: Service[] = [
  // Web Development
  {
    id: 'website-vitrine',
    title: 'Site Vitrine Professionnel',
    price: 8000,
    category: 'web-development',
    description: 'Site web moderne et responsive pour présenter votre entreprise',
    delivery: '3-4 semaines',
    image: '/images/services/website-vitrine.svg',
    features: ['Design responsive', 'SEO optimisé', 'Hébergement 1 an', 'Support technique'],
    popular: true,
    badge: '⭐ Populaire',
    slug: 'site-vitrine-professionnel'
  },
  {
    id: 'website-corporate',
    title: 'Site Corporate Premium',
    price: 15000,
    category: 'web-development',
    description: 'Site web corporate avec fonctionnalités avancées',
    delivery: '4-6 semaines',
    image: '/images/services/website-corporate.svg',
    features: ['Multi-pages', 'CMS intégré', 'Formulaires avancés', 'Analytics'],
    slug: 'site-corporate-premium'
  },
  {
    id: 'landing-page',
    title: 'Landing Page Conversion',
    price: 3500,
    category: 'web-development',
    description: 'Page d\'atterrissage optimisée pour la conversion',
    delivery: '1-2 semaines',
    image: '/images/services/landing-page.svg',
    features: ['Design conversion', 'A/B Testing', 'Intégration CRM', 'Analytics'],
    slug: 'landing-page-conversion'
  },
  {
    id: 'web-app-custom',
    title: 'Application Web Sur Mesure',
    price: 25000,
    category: 'web-development',
    description: 'Application web personnalisée selon vos besoins',
    delivery: '8-12 semaines',
    image: '/images/services/web-app.svg',
    features: ['Architecture scalable', 'Base de données', 'API REST', 'Dashboard admin'],
    badge: '🚀 Premium',
    slug: 'application-web-sur-mesure'
  },
  {
    id: 'portfolio-website',
    title: 'Site Portfolio Créatif',
    price: 5500,
    category: 'web-development',
    description: 'Portfolio moderne pour artistes et créatifs',
    delivery: '2-3 semaines',
    image: '/images/services/portfolio.svg',
    features: ['Galerie interactive', 'Animations CSS', 'Blog intégré', 'Contact form'],
    slug: 'site-portfolio-creatif'
  },
  {
    id: 'blog-website',
    title: 'Site Blog Professionnel',
    price: 4500,
    category: 'web-development',
    description: 'Blog optimisé pour le content marketing',
    delivery: '2-3 semaines',
    image: '/images/services/blog.svg',
    features: ['CMS WordPress', 'SEO optimisé', 'Newsletter', 'Réseaux sociaux'],
    slug: 'site-blog-professionnel'
  },

  // E-commerce
  {
    id: 'ecommerce-basic',
    title: 'Boutique E-commerce Basique',
    price: 12000,
    category: 'ecommerce',
    description: 'Boutique en ligne complète avec paiements sécurisés',
    delivery: '4-6 semaines',
    image: '/images/services/ecommerce-basic.svg',
    features: ['Catalogue produits', 'Panier d\'achat', 'Paiement sécurisé', 'Gestion commandes'],
    popular: true,
    slug: 'boutique-ecommerce-basique'
  },
  {
    id: 'ecommerce-premium',
    title: 'E-commerce Premium Multi-vendeurs',
    price: 35000,
    category: 'ecommerce',
    description: 'Marketplace complète avec gestion multi-vendeurs',
    delivery: '8-12 semaines',
    image: '/images/services/ecommerce-premium.svg',
    features: ['Multi-vendeurs', 'Commission system', 'Analytics avancées', 'Mobile app'],
    badge: '💎 Premium',
    slug: 'ecommerce-premium-multi-vendeurs'
  },
  {
    id: 'ecommerce-mobile',
    title: 'App E-commerce Mobile',
    price: 20000,
    category: 'ecommerce',
    description: 'Application mobile native pour votre boutique',
    delivery: '6-8 semaines',
    image: '/images/services/ecommerce-mobile.svg',
    features: ['iOS & Android', 'Push notifications', 'Paiement mobile', 'Géolocalisation'],
    slug: 'app-ecommerce-mobile'
  },
  {
    id: 'marketplace-integration',
    title: 'Intégration Marketplace',
    price: 8000,
    category: 'ecommerce',
    description: 'Intégration avec Amazon, eBay, Etsy',
    delivery: '3-4 semaines',
    image: '/images/services/marketplace.svg',
    features: ['Sync produits', 'Gestion stock', 'Prix dynamiques', 'Reporting'],
    slug: 'integration-marketplace'
  },
  {
    id: 'subscription-ecommerce',
    title: 'E-commerce par Abonnement',
    price: 18000,
    category: 'ecommerce',
    description: 'Boutique avec système d\'abonnement récurrent',
    delivery: '5-7 semaines',
    image: '/images/services/subscription.svg',
    features: ['Abonnements récurrents', 'Gestion facturation', 'Customer portal', 'Analytics'],
    slug: 'ecommerce-par-abonnement'
  },

  // Design & UX
  {
    id: 'logo-design',
    title: 'Création de Logo Professionnel',
    price: 1500,
    category: 'design',
    description: 'Logo unique et mémorable pour votre marque',
    delivery: '1-2 semaines',
    image: '/images/services/logo-design.svg',
    features: ['3 concepts', 'Révisions illimitées', 'Fichiers vectoriels', 'Guide d\'utilisation'],
    slug: 'creation-logo-professionnel'
  },
  {
    id: 'brand-identity',
    title: 'Identité Visuelle Complète',
    price: 4500,
    category: 'design',
    description: 'Charte graphique complète pour votre entreprise',
    delivery: '3-4 semaines',
    image: '/images/services/brand-identity.svg',
    features: ['Logo + déclinaisons', 'Palette couleurs', 'Typographie', 'Guidelines'],
    popular: true,
    slug: 'identite-visuelle-complete'
  },
  {
    id: 'ui-ux-design',
    title: 'Design UI/UX d\'Application',
    price: 8500,
    category: 'design',
    description: 'Interface utilisateur moderne et intuitive',
    delivery: '4-5 semaines',
    image: '/images/services/ui-ux.svg',
    features: ['Wireframes', 'Prototypes interactifs', 'Design system', 'Tests utilisateurs'],
    slug: 'design-ui-ux-application'
  },
  {
    id: 'print-design',
    title: 'Supports Print & Communication',
    price: 2500,
    category: 'design',
    description: 'Cartes de visite, flyers, brochures professionnelles',
    delivery: '1-3 semaines',
    image: '/images/services/print-design.svg',
    features: ['Cartes de visite', 'Flyers', 'Brochures', 'Fichiers print-ready'],
    slug: 'supports-print-communication'
  },
  {
    id: 'packaging-design',
    title: 'Design Packaging Produit',
    price: 3500,
    category: 'design',
    description: 'Emballage attractif pour vos produits',
    delivery: '2-4 semaines',
    image: '/images/services/packaging.svg',
    features: ['Design créatif', 'Maquette 3D', 'Fichiers production', 'Conseils impression'],
    slug: 'design-packaging-produit'
  },

  // Marketing Digital
  {
    id: 'seo-audit',
    title: 'Audit SEO Complet',
    price: 2500,
    category: 'seo',
    description: 'Analyse complète de votre référencement naturel',
    delivery: '1-2 semaines',
    image: '/images/services/seo-audit.svg',
    features: ['Audit technique', 'Analyse concurrence', 'Mots-clés', 'Plan d\'action'],
    slug: 'audit-seo-complet'
  },
  {
    id: 'seo-optimization',
    title: 'Optimisation SEO Mensuelle',
    price: 1800,
    category: 'seo',
    description: 'Amélioration continue de votre positionnement',
    delivery: 'Mensuel',
    image: '/images/services/seo-optimization.svg',
    features: ['Optimisation technique', 'Création contenu', 'Link building', 'Reporting'],
    popular: true,
    slug: 'optimisation-seo-mensuelle'
  },
  {
    id: 'google-ads',
    title: 'Campagne Google Ads',
    price: 2200,
    category: 'marketing',
    description: 'Campagnes publicitaires Google optimisées',
    delivery: '1 semaine',
    image: '/images/services/google-ads.svg',
    features: ['Setup campagne', 'Mots-clés', 'Landing pages', 'Optimisation ROI'],
    slug: 'campagne-google-ads'
  },
  {
    id: 'social-media',
    title: 'Gestion Réseaux Sociaux',
    price: 1500,
    category: 'marketing',
    description: 'Animation de vos réseaux sociaux professionnels',
    delivery: 'Mensuel',
    image: '/images/services/social-media.svg',
    features: ['Stratégie contenu', 'Publications régulières', 'Community management', 'Analytics'],
    slug: 'gestion-reseaux-sociaux'
  },
  {
    id: 'email-marketing',
    title: 'Campagne Email Marketing',
    price: 1200,
    category: 'marketing',
    description: 'Newsletters et campagnes email automatisées',
    delivery: '2-3 semaines',
    image: '/images/services/email-marketing.svg',
    features: ['Templates design', 'Segmentation', 'Automation', 'A/B testing'],
    slug: 'campagne-email-marketing'
  },
  {
    id: 'content-marketing',
    title: 'Stratégie Content Marketing',
    price: 3000,
    category: 'marketing',
    description: 'Création de contenu pour attirer vos prospects',
    delivery: '4-6 semaines',
    image: '/images/services/content-marketing.svg',
    features: ['Stratégie éditoriale', 'Création articles', 'Calendrier éditorial', 'Distribution'],
    slug: 'strategie-content-marketing'
  },

  // Mobile
  {
    id: 'mobile-app-ios',
    title: 'Application iOS Native',
    price: 22000,
    category: 'mobile',
    description: 'App iOS native avec design sur mesure',
    delivery: '8-12 semaines',
    image: '/images/services/ios-app.svg',
    features: ['Swift/SwiftUI', 'App Store ready', 'Push notifications', 'Analytics'],
    badge: '📱 Native',
    slug: 'application-ios-native'
  },
  {
    id: 'mobile-app-android',
    title: 'Application Android Native',
    price: 20000,
    category: 'mobile',
    description: 'App Android native optimisée',
    delivery: '8-12 semaines',
    image: '/images/services/android-app.svg',
    features: ['Kotlin/Java', 'Google Play ready', 'Material Design', 'Firebase'],
    slug: 'application-android-native'
  },
  {
    id: 'mobile-app-hybrid',
    title: 'App Mobile Hybride',
    price: 15000,
    category: 'mobile',
    description: 'Application cross-platform React Native',
    delivery: '6-10 semaines',
    image: '/images/services/hybrid-app.svg',
    features: ['iOS + Android', 'React Native', 'Code partagé', 'Performance native'],
    popular: true,
    slug: 'app-mobile-hybride'
  },
  {
    id: 'pwa-app',
    title: 'Progressive Web App (PWA)',
    price: 12000,
    category: 'mobile',
    description: 'App web progressive avec expérience native',
    delivery: '4-6 semaines',
    image: '/images/services/pwa.svg',
    features: ['Offline mode', 'Push notifications', 'Installation', 'Performance'],
    slug: 'progressive-web-app'
  },

  // Consulting
  {
    id: 'digital-audit',
    title: 'Audit Digital Complet',
    price: 3500,
    category: 'consulting',
    description: 'Analyse complète de votre présence digitale',
    delivery: '2-3 semaines',
    image: '/images/services/digital-audit.svg',
    features: ['Audit site web', 'Analyse concurrence', 'Recommandations', 'Roadmap'],
    slug: 'audit-digital-complet'
  },
  {
    id: 'digital-strategy',
    title: 'Stratégie Digitale Personnalisée',
    price: 5000,
    category: 'consulting',
    description: 'Plan stratégique pour votre transformation digitale',
    delivery: '3-4 semaines',
    image: '/images/services/digital-strategy.svg',
    features: ['Analyse besoins', 'Stratégie sur mesure', 'Plan d\'action', 'KPIs'],
    popular: true,
    slug: 'strategie-digitale-personnalisee'
  },
  {
    id: 'tech-consulting',
    title: 'Conseil Technique & Architecture',
    price: 4000,
    category: 'consulting',
    description: 'Expertise technique pour vos projets complexes',
    delivery: '2-4 semaines',
    image: '/images/services/tech-consulting.svg',
    features: ['Architecture système', 'Choix technologies', 'Scalabilité', 'Sécurité'],
    slug: 'conseil-technique-architecture'
  },
  {
    id: 'formation-digital',
    title: 'Formation Équipe Digitale',
    price: 2800,
    category: 'consulting',
    description: 'Formation de vos équipes aux outils digitaux',
    delivery: '1-2 semaines',
    image: '/images/services/formation.svg',
    features: ['Formation sur mesure', 'Supports pédagogiques', 'Pratique', 'Suivi post-formation'],
    slug: 'formation-equipe-digitale'
  },

  // Maintenance & Support
  {
    id: 'maintenance-basic',
    title: 'Maintenance Site Web Basique',
    price: 800,
    category: 'maintenance',
    description: 'Maintenance mensuelle de votre site web',
    delivery: 'Mensuel',
    image: '/images/services/maintenance-basic.svg',
    features: ['Mises à jour sécurité', 'Sauvegardes', 'Monitoring', 'Support email'],
    slug: 'maintenance-site-web-basique'
  },
  {
    id: 'maintenance-premium',
    title: 'Maintenance Premium 24/7',
    price: 2500,
    category: 'maintenance',
    description: 'Support technique complet avec monitoring 24/7',
    delivery: 'Mensuel',
    image: '/images/services/maintenance-premium.svg',
    features: ['Support 24/7', 'Monitoring avancé', 'Optimisations', 'Hotline prioritaire'],
    badge: '🛡️ Premium',
    slug: 'maintenance-premium-24-7'
  },
  {
    id: 'hosting-managed',
    title: 'Hébergement Web Managé',
    price: 450,
    category: 'maintenance',
    description: 'Hébergement haute performance avec support',
    delivery: 'Mensuel',
    image: '/images/services/hosting.svg',
    features: ['SSD haute vitesse', 'SSL inclus', 'CDN global', 'Support technique'],
    slug: 'hebergement-web-manage'
  },
  {
    id: 'security-audit',
    title: 'Audit Sécurité Web',
    price: 1800,
    category: 'maintenance',
    description: 'Analyse complète de la sécurité de votre site',
    delivery: '1-2 semaines',
    image: '/images/services/security.svg',
    features: ['Scan vulnérabilités', 'Test pénétration', 'Rapport détaillé', 'Recommandations'],
    slug: 'audit-securite-web'
  },

  // Services spécialisés
  {
    id: 'api-development',
    title: 'Développement API REST',
    price: 6500,
    category: 'web-development',
    description: 'API robuste pour vos applications',
    delivery: '3-5 semaines',
    image: '/images/services/api.svg',
    features: ['API REST/GraphQL', 'Documentation', 'Tests automatisés', 'Authentification'],
    slug: 'developpement-api-rest'
  },
  {
    id: 'chatbot-ai',
    title: 'Chatbot IA Personnalisé',
    price: 8500,
    category: 'web-development',
    description: 'Assistant virtuel intelligent pour votre site',
    delivery: '4-6 semaines',
    image: '/images/services/chatbot.svg',
    features: ['IA conversationnelle', 'Intégration site', 'Formation données', 'Analytics'],
    badge: '🤖 IA',
    slug: 'chatbot-ia-personnalise'
  },
  {
    id: 'automation-workflow',
    title: 'Automatisation Workflow',
    price: 5500,
    category: 'consulting',
    description: 'Automatisation de vos processus métier',
    delivery: '3-4 semaines',
    image: '/images/services/automation.svg',
    features: ['Analyse processus', 'Outils automation', 'Intégrations', 'Formation équipe'],
    slug: 'automatisation-workflow'
  },
  {
    id: 'data-analytics',
    title: 'Dashboard Analytics Avancé',
    price: 7500,
    category: 'consulting',
    description: 'Tableau de bord avec métriques personnalisées',
    delivery: '4-5 semaines',
    image: '/images/services/analytics.svg',
    features: ['KPIs personnalisés', 'Visualisations', 'Rapports automatiques', 'Intégrations'],
    slug: 'dashboard-analytics-avance'
  },
  {
    id: 'migration-website',
    title: 'Migration Site Web',
    price: 4500,
    category: 'maintenance',
    description: 'Migration sécurisée vers nouvelle plateforme',
    delivery: '2-4 semaines',
    image: '/images/services/migration.svg',
    features: ['Sauvegarde complète', 'Migration données', 'Tests complets', 'Support post-migration'],
    slug: 'migration-site-web'
  },
  {
    id: 'performance-optimization',
    title: 'Optimisation Performance Web',
    price: 3200,
    category: 'maintenance',
    description: 'Amélioration vitesse et performance de votre site',
    delivery: '2-3 semaines',
    image: '/images/services/performance.svg',
    features: ['Audit performance', 'Optimisation code', 'CDN setup', 'Monitoring continu'],
    slug: 'optimisation-performance-web'
  },
  {
    id: 'accessibility-audit',
    title: 'Audit Accessibilité WCAG',
    price: 2800,
    category: 'consulting',
    description: 'Conformité accessibilité pour tous les utilisateurs',
    delivery: '2-3 semaines',
    image: '/images/services/accessibility.svg',
    features: ['Audit WCAG 2.1', 'Tests utilisateurs', 'Recommandations', 'Implémentation'],
    slug: 'audit-accessibilite-wcag'
  },
  {
    id: 'gdpr-compliance',
    title: 'Mise en Conformité RGPD',
    price: 3800,
    category: 'consulting',
    description: 'Conformité complète aux réglementations RGPD',
    delivery: '3-4 semaines',
    image: '/images/services/gdpr.svg',
    features: ['Audit RGPD', 'Politique confidentialité', 'Cookies consent', 'Documentation'],
    slug: 'mise-en-conformite-rgpd'
  }
]

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id)
}

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug)
}

export const getServicesByCategory = (categoryId: string): Service[] => {
  return services.filter(service => service.category === categoryId)
}

export const getPopularServices = (): Service[] => {
  return services.filter(service => service.popular)
}

export const getFeaturedServices = (): Service[] => {
  return services.slice(0, 6)
}