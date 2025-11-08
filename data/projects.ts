export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'ecommerce' | 'mobile' | 'design';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  results: {
    metric: string;
    value: string;
  }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'cardify-app',
    title: 'Cardify - App Mobile',
    description: 'Application mobile de gestion de cartes de visite digitales',
    longDescription: 'Développement complet d\'une application mobile permettant aux professionnels de créer, gérer et partager leurs cartes de visite digitales. Interface intuitive avec système de QR codes pour un networking moderne.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
    category: 'mobile',
    image: '/images/projects/cardify.jpg',
    demoUrl: 'https://cardify-demo.com',
    results: [
      { metric: 'Téléchargements', value: '2,500+' },
      { metric: 'Note App Store', value: '4.8/5' },
      { metric: 'Temps de développement', value: '3 mois' }
    ],
    featured: true
  },
  {
    id: 'ecommerce-fashion',
    title: 'Boutique Mode - E-commerce',
    description: 'Site e-commerce complet pour une marque de mode israélienne',
    longDescription: 'Création d\'une boutique en ligne moderne avec système de paiement intégré, gestion des stocks, interface multilingue (hébreu/anglais) et optimisation mobile-first.',
    technologies: ['Next.js', 'Shopify', 'Tailwind CSS', 'Stripe'],
    category: 'ecommerce',
    image: '/images/projects/fashion-store.jpg',
    demoUrl: 'https://fashion-demo.com',
    results: [
      { metric: 'Conversion', value: '+45%' },
      { metric: 'Chiffre d\'affaires', value: '+120%' },
      { metric: 'Temps de chargement', value: '1.2s' }
    ],
    featured: true
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Galil - Site Vitrine',
    description: 'Site vitrine élégant pour un restaurant gastronomique',
    longDescription: 'Développement d\'un site vitrine premium avec système de réservation en ligne, galerie photos interactive, menu dynamique et intégration Google Maps.',
    technologies: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Vercel'],
    category: 'web',
    image: '/images/projects/restaurant.jpg',
    demoUrl: 'https://restaurant-demo.com',
    results: [
      { metric: 'Réservations en ligne', value: '+80%' },
      { metric: 'Trafic web', value: '+200%' },
      { metric: 'Score Lighthouse', value: '98/100' }
    ],
    featured: false
  },
  {
    id: 'startup-branding',
    title: 'TechStart - Identité Visuelle',
    description: 'Création complète d\'identité visuelle pour une startup tech',
    longDescription: 'Développement de l\'identité visuelle complète : logo, charte graphique, site web, supports marketing. Approche moderne et tech-oriented pour une startup en intelligence artificielle.',
    technologies: ['Figma', 'Adobe Creative Suite', 'Next.js', 'TypeScript'],
    category: 'design',
    image: '/images/projects/startup-branding.jpg',
    results: [
      { metric: 'Reconnaissance de marque', value: '+300%' },
      { metric: 'Leads qualifiés', value: '+150%' },
      { metric: 'Engagement social', value: '+250%' }
    ],
    featured: true
  },
  {
    id: 'medical-platform',
    title: 'MediCare - Plateforme Médicale',
    description: 'Plateforme de prise de rendez-vous médicaux en ligne',
    longDescription: 'Développement d\'une plateforme complète permettant aux patients de prendre rendez-vous en ligne, consulter leur dossier médical et communiquer avec leur médecin. Conformité RGPD et sécurité renforcée.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    category: 'web',
    image: '/images/projects/medical-platform.jpg',
    demoUrl: 'https://medicare-demo.com',
    results: [
      { metric: 'Patients actifs', value: '5,000+' },
      { metric: 'Réduction temps d\'attente', value: '-60%' },
      { metric: 'Satisfaction patients', value: '4.9/5' }
    ],
    featured: false
  },
  {
    id: 'real-estate-app',
    title: 'PropTech - App Immobilier',
    description: 'Application de recherche immobilière avec réalité augmentée',
    longDescription: 'Application mobile innovante permettant de rechercher des biens immobiliers avec fonctionnalités de réalité augmentée, visite virtuelle 360° et estimation automatique des prix.',
    technologies: ['React Native', 'AR Kit', 'Firebase', 'Google Maps API'],
    category: 'mobile',
    image: '/images/projects/proptech.jpg',
    results: [
      { metric: 'Utilisateurs actifs', value: '10,000+' },
      { metric: 'Visites virtuelles', value: '25,000+' },
      { metric: 'Précision estimations', value: '92%' }
    ],
    featured: false
  }
];
