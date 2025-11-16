import { getItemBySlug, getFeaturedItems, getItemsByCategory } from '../lib/utils/data-helpers';

export interface Service {
  id: string;
  titleKey: string;
  price: number;
  category: string;
  descriptionKey: string;
  delivery: string;
  image: string;
  featuresKey: string;
  badgeKey?: string;
  popular?: boolean;
  slug: string;
}

export const services: Service[] = [
  // Web Development
  {
    id: 'website-vitrine',
    titleKey: 'services.catalog.webDevelopment.websiteVitrine.title',
    price: 2500,
    category: 'web-development',
    descriptionKey: 'services.catalog.webDevelopment.websiteVitrine.description',
    delivery: '2-3 semaines',
    image: '/images/services/website-vitrine.svg',
    featuresKey: 'services.catalog.webDevelopment.websiteVitrine.features',
    badgeKey: 'services.catalog.webDevelopment.websiteVitrine.badge',
    popular: true,
    slug: 'site-vitrine-professionnel'
  },
  {
    id: 'website-corporate',
    titleKey: 'services.catalog.webDevelopment.websiteCorporate.title',
    price: 8000,
    category: 'web-development',
    descriptionKey: 'services.catalog.webDevelopment.websiteCorporate.description',
    delivery: '4-6 semaines',
    image: '/images/services/website-corporate.svg',
    featuresKey: 'services.catalog.webDevelopment.websiteCorporate.features',
    badgeKey: 'services.catalog.webDevelopment.websiteCorporate.badge',
    slug: 'site-corporate-premium'
  },
  {
    id: 'web-app-custom',
    titleKey: 'services.catalog.webDevelopment.webAppCustom.title',
    price: 15000,
    category: 'web-development',
    descriptionKey: 'services.catalog.webDevelopment.webAppCustom.description',
    delivery: '6-10 semaines',
    image: '/images/services/web-app.svg',
    featuresKey: 'services.catalog.webDevelopment.webAppCustom.features',
    badgeKey: 'services.catalog.webDevelopment.webAppCustom.badge',
    slug: 'application-web-sur-mesure'
  },
  {
    id: 'landing-page-conversion',
    titleKey: 'services.catalog.webDevelopment.landingPageConversion.title',
    price: 1800,
    category: 'web-development',
    descriptionKey: 'services.catalog.webDevelopment.landingPageConversion.description',
    delivery: '1-2 semaines',
    image: '/images/services/landing-page.svg',
    featuresKey: 'services.catalog.webDevelopment.landingPageConversion.features',
    badgeKey: 'services.catalog.webDevelopment.landingPageConversion.badge',
    slug: 'landing-page-conversion'
  },
  {
    id: 'portfolio-showcase',
    titleKey: 'services.catalog.webDevelopment.portfolioShowcase.title',
    price: 3500,
    category: 'web-development',
    descriptionKey: 'services.catalog.webDevelopment.portfolioShowcase.description',
    delivery: '3-4 semaines',
    image: '/images/services/portfolio.svg',
    featuresKey: 'services.catalog.webDevelopment.portfolioShowcase.features',
    badgeKey: 'services.catalog.webDevelopment.portfolioShowcase.badge',
    slug: 'portfolio-showcase-premium'
  },
  {
    id: 'blog-cms-premium',
    titleKey: 'services.catalog.webDevelopment.blogCmsPremium.title',
    price: 4500,
    category: 'web-development',
    descriptionKey: 'services.catalog.webDevelopment.blogCmsPremium.description',
    delivery: '3-5 semaines',
    image: '/images/services/blog-cms.svg',
    featuresKey: 'services.catalog.webDevelopment.blogCmsPremium.features',
    badgeKey: 'services.catalog.webDevelopment.blogCmsPremium.badge',
    slug: 'blog-cms-premium'
  },

  // E-commerce
  {
    id: 'ecommerce-basic',
    titleKey: 'services.catalog.ecommerce.ecommerceBasic.title',
    price: 12000,
    category: 'ecommerce',
    descriptionKey: 'services.catalog.ecommerce.ecommerceBasic.description',
    delivery: '4-6 semaines',
    image: '/images/services/ecommerce-basic.svg',
    featuresKey: 'services.catalog.ecommerce.ecommerceBasic.features',
    popular: true,
    badgeKey: 'services.catalog.ecommerce.ecommerceBasic.badge',
    slug: 'boutique-ecommerce-basique'
  },
  {
    id: 'ecommerce-premium',
    titleKey: 'services.catalog.ecommerce.ecommercePremium.title',
    price: 20000,
    category: 'ecommerce',
    descriptionKey: 'services.catalog.ecommerce.ecommercePremium.description',
    delivery: '6-8 semaines',
    image: '/images/services/ecommerce-advanced.svg',
    featuresKey: 'services.catalog.ecommerce.ecommercePremium.features',
    badgeKey: 'services.catalog.ecommerce.ecommercePremium.badge',
    slug: 'ecommerce-premium'
  },
  {
    id: 'ecommerce-mobile',
    titleKey: 'services.catalog.ecommerce.ecommerceMobile.title',
    price: 18000,
    category: 'ecommerce',
    descriptionKey: 'services.catalog.ecommerce.ecommerceMobile.description',
    delivery: '6-8 semaines',
    image: '/images/services/mobile-ecommerce.svg',
    featuresKey: 'services.catalog.ecommerce.ecommerceMobile.features',
    badgeKey: 'services.catalog.ecommerce.ecommerceMobile.badge',
    slug: 'ecommerce-mobile'
  },
  {
    id: 'marketplace-integration',
    titleKey: 'services.catalog.ecommerce.marketplaceIntegration.title',
    price: 8000,
    category: 'ecommerce',
    descriptionKey: 'services.catalog.ecommerce.marketplaceIntegration.description',
    delivery: '3-4 semaines',
    image: '/images/services/marketplace.svg',
    featuresKey: 'services.catalog.ecommerce.marketplaceIntegration.features',
    badgeKey: 'services.catalog.ecommerce.marketplaceIntegration.badge',
    slug: 'integration-marketplace'
  },
  {
    id: 'subscription-ecommerce',
    titleKey: 'services.catalog.ecommerce.subscriptionEcommerce.title',
    price: 18000,
    category: 'ecommerce',
    descriptionKey: 'services.catalog.ecommerce.subscriptionEcommerce.description',
    delivery: '5-7 semaines',
    image: '/images/services/subscription.svg',
    featuresKey: 'services.catalog.ecommerce.subscriptionEcommerce.features',
    badgeKey: 'services.catalog.ecommerce.subscriptionEcommerce.badge',
    slug: 'ecommerce-par-abonnement'
  },

  // Marketing
  {
    id: 'google-ads',
    titleKey: 'services.catalog.marketing.googleAds.title',
    price: 2500,
    category: 'marketing',
    descriptionKey: 'services.catalog.marketing.googleAds.description',
    delivery: 'Setup + Mensuel',
    image: '/images/services/google-ads.svg',
    featuresKey: 'services.catalog.marketing.googleAds.features',
    badgeKey: 'services.catalog.marketing.googleAds.badge',
    popular: true,
    slug: 'campagne-google-ads'
  },
  {
    id: 'social-media-management',
    titleKey: 'services.catalog.marketing.socialMediaManagement.title',
    price: 1800,
    category: 'marketing',
    descriptionKey: 'services.catalog.marketing.socialMediaManagement.description',
    delivery: 'Mensuel',
    image: '/images/services/social-media.svg',
    featuresKey: 'services.catalog.marketing.socialMediaManagement.features',
    badgeKey: 'services.catalog.marketing.socialMediaManagement.badge',
    slug: 'gestion-reseaux-sociaux'
  },
  {
    id: 'content-marketing',
    titleKey: 'services.catalog.marketing.contentMarketing.title',
    price: 3000,
    category: 'marketing',
    descriptionKey: 'services.catalog.marketing.contentMarketing.description',
    delivery: 'Mensuel',
    image: '/images/services/content-marketing.svg',
    featuresKey: 'services.catalog.marketing.contentMarketing.features',
    badgeKey: 'services.catalog.marketing.contentMarketing.badge',
    slug: 'marketing-contenu-premium'
  },
  {
    id: 'email-marketing-automation',
    titleKey: 'services.catalog.marketing.emailMarketingAutomation.title',
    price: 2200,
    category: 'marketing',
    descriptionKey: 'services.catalog.marketing.emailMarketingAutomation.description',
    delivery: '2-3 semaines',
    image: '/images/services/email-marketing.svg',
    featuresKey: 'services.catalog.marketing.emailMarketingAutomation.features',
    badgeKey: 'services.catalog.marketing.emailMarketingAutomation.badge',
    slug: 'email-marketing-automation'
  },

  // Mobile
  {
    id: 'mobile-app-ios',
    titleKey: 'services.catalog.mobile.mobileAppIos.title',
    price: 25000,
    category: 'mobile',
    descriptionKey: 'services.catalog.mobile.mobileAppIos.description',
    delivery: '8-12 semaines',
    image: '/images/services/ios-app.svg',
    featuresKey: 'services.catalog.mobile.mobileAppIos.features',
    badgeKey: 'services.catalog.mobile.mobileAppIos.badge',
    slug: 'application-ios-native'
  },
  {
    id: 'mobile-app-android',
    titleKey: 'services.catalog.mobile.mobileAppAndroid.title',
    price: 23000,
    category: 'mobile',
    descriptionKey: 'services.catalog.mobile.mobileAppAndroid.description',
    delivery: '8-12 semaines',
    image: '/images/services/android-app.svg',
    featuresKey: 'services.catalog.mobile.mobileAppAndroid.features',
    badgeKey: 'services.catalog.mobile.mobileAppAndroid.badge',
    slug: 'application-android-native'
  },
  {
    id: 'cross-platform-app',
    titleKey: 'services.catalog.mobile.crossPlatformApp.title',
    price: 35000,
    category: 'mobile',
    descriptionKey: 'services.catalog.mobile.crossPlatformApp.description',
    delivery: '10-14 semaines',
    image: '/images/services/cross-platform.svg',
    featuresKey: 'services.catalog.mobile.crossPlatformApp.features',
    badgeKey: 'services.catalog.mobile.crossPlatformApp.badge',
    slug: 'application-cross-platform'
  },

  // Consulting
  {
    id: 'strategic-consulting',
    titleKey: 'services.catalog.consulting.strategicConsulting.title',
    price: 5000,
    category: 'consulting',
    descriptionKey: 'services.catalog.consulting.strategicConsulting.description',
    delivery: '2-4 semaines',
    image: '/images/services/consulting.svg',
    featuresKey: 'services.catalog.consulting.strategicConsulting.features',
    badgeKey: 'services.catalog.consulting.strategicConsulting.badge',
    slug: 'conseil-strategique-digital'
  },
  {
    id: 'technical-audit',
    titleKey: 'services.catalog.consulting.technicalAudit.title',
    price: 2500,
    category: 'consulting',
    descriptionKey: 'services.catalog.consulting.technicalAudit.description',
    delivery: '1-2 semaines',
    image: '/images/services/technical-audit.svg',
    featuresKey: 'services.catalog.consulting.technicalAudit.features',
    badgeKey: 'services.catalog.consulting.technicalAudit.badge',
    slug: 'audit-technique-complet'
  },

  // Maintenance
  {
    id: 'website-maintenance',
    titleKey: 'services.catalog.maintenance.websiteMaintenance.title',
    price: 500,
    category: 'maintenance',
    descriptionKey: 'services.catalog.maintenance.websiteMaintenance.description',
    delivery: 'Mensuel',
    image: '/images/services/maintenance.svg',
    featuresKey: 'services.catalog.maintenance.websiteMaintenance.features',
    badgeKey: 'services.catalog.maintenance.websiteMaintenance.badge',
    slug: 'maintenance-site-web'
  },
  {
    id: 'performance-optimization',
    titleKey: 'services.catalog.maintenance.performanceOptimization.title',
    price: 1800,
    category: 'maintenance',
    descriptionKey: 'services.catalog.maintenance.performanceOptimization.description',
    delivery: '1-2 semaines',
    image: '/images/services/performance.svg',
    featuresKey: 'services.catalog.maintenance.performanceOptimization.features',
    badgeKey: 'services.catalog.maintenance.performanceOptimization.badge',
    slug: 'optimisation-performance'
  },

  // Specialized
  {
    id: 'accessibility-optimization',
    titleKey: 'services.catalog.specialized.accessibilityOptimization.title',
    price: 3500,
    category: 'specialized',
    descriptionKey: 'services.catalog.specialized.accessibilityOptimization.description',
    delivery: '2-3 semaines',
    image: '/images/services/accessibility.svg',
    featuresKey: 'services.catalog.specialized.accessibilityOptimization.features',
    badgeKey: 'services.catalog.specialized.accessibilityOptimization.badge',
    slug: 'optimisation-accessibilite'
  }
];

// Service categories
export const serviceCategories = [
  { id: 'web-development', name: 'Développement Web', icon: '🌐' },
  { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
  { id: 'marketing', name: 'Marketing Digital', icon: '📈' },
  { id: 'mobile', name: 'Applications Mobiles', icon: '📱' },
  { id: 'consulting', name: 'Conseil', icon: '💡' },
  { id: 'maintenance', name: 'Maintenance', icon: '🔧' },
  { id: 'specialized', name: 'Spécialisé', icon: '⭐' }
];

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return getItemBySlug(services, slug);
}

export function getFeaturedServices(): Service[] {
  return getFeaturedItems(services);
}

export function getServicesByCategory(category: string): Service[] {
  return getItemsByCategory(services, category);
}

export default services;
