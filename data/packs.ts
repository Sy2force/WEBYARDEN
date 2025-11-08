export interface Pack {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  popular: boolean;
  category: 'starter' | 'pro' | 'premium';
  duration: string;
  support: string;
  revisions: number;
}

export const packs: Pack[] = [
  {
    id: 'starter',
    name: 'Pack Starter',
    price: 2500,
    description: 'Parfait pour débuter votre présence digitale',
    features: [
      'Site vitrine 5 pages',
      'Design responsive mobile',
      'Optimisation SEO de base',
      'Formulaire de contact',
      'Hébergement 1 an inclus',
      'Formation à la gestion',
      'Support email 3 mois'
    ],
    popular: false,
    category: 'starter',
    duration: '2-3 semaines',
    support: 'Email',
    revisions: 3
  },
  {
    id: 'pro',
    name: 'Pack Pro',
    price: 4500,
    originalPrice: 5500,
    description: 'La solution complète pour votre business',
    features: [
      'Site web 10 pages',
      'Design sur-mesure premium',
      'SEO avancé + Google Analytics',
      'Blog intégré',
      'Système de réservation/contact',
      'Optimisation vitesse',
      'Hébergement 1 an inclus',
      'Formation complète',
      'Support prioritaire 6 mois',
      'Maintenance 3 mois'
    ],
    popular: true,
    category: 'pro',
    duration: '3-4 semaines',
    support: 'Email + Téléphone',
    revisions: 5
  },
  {
    id: 'premium',
    name: 'Pack Premium',
    price: 7500,
    originalPrice: 9000,
    description: 'Solution enterprise avec fonctionnalités avancées',
    features: [
      'Site web illimité',
      'E-commerce complet',
      'Design ultra-premium',
      'SEO expert + campagnes',
      'Intégrations API avancées',
      'Système de paiement',
      'Dashboard admin',
      'Analytics avancés',
      'Hébergement premium 1 an',
      'Formation personnalisée',
      'Support dédié 12 mois',
      'Maintenance 6 mois',
      'Évolutions incluses'
    ],
    popular: false,
    category: 'premium',
    duration: '4-6 semaines',
    support: 'Dédié + WhatsApp',
    revisions: 10
  }
];
