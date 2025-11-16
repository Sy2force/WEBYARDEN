import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'techstart-platform',
    title: 'TechStart Platform',
    description: 'Plateforme SaaS pour startups technologiques avec dashboard analytique avancé',
    category: 'saas',
    sector: 'technology',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    url: 'https://techstart-demo.com',
    image: '/images/projects/techstart.jpg',
    featured: true,
    year: 2024,
    client: 'TechStart Incubator',
    results: [
      { metric: 'Performance', value: '95/100', improvement: '+40%' },
      { metric: 'Utilisateurs actifs', value: '12k+', improvement: '+300%' },
      { metric: 'Conversions', value: '8.5%', improvement: '+150%' }
    ]
  },
  {
    id: 'luxury-ecommerce',
    title: 'Boutique Luxe',
    description: 'E-commerce haut de gamme avec expérience d\'achat premium',
    category: 'ecommerce',
    sector: 'retail',
    technologies: ['Next.js', 'Shopify', 'Stripe', 'Framer Motion'],
    image: '/images/projects/luxury-store.jpg',
    featured: true,
    year: 2024,
    client: 'Maison Élégante',
    results: [
      { metric: 'Chiffre d\'affaires', value: '€2.4M', improvement: '+180%' },
      { metric: 'Taux de conversion', value: '4.2%', improvement: '+220%' },
      { metric: 'Panier moyen', value: '€350', improvement: '+65%' }
    ]
  },
  {
    id: 'health-app',
    title: 'HealthTracker Pro',
    description: 'Application mobile de suivi santé avec IA prédictive',
    category: 'mobile',
    sector: 'healthcare',
    technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
    image: '/images/projects/health-app.jpg',
    year: 2023,
    client: 'MedTech Solutions',
    results: [
      { metric: 'Téléchargements', value: '250k+', improvement: '+400%' },
      { metric: 'Engagement', value: '85%', improvement: '+120%' },
      { metric: 'Satisfaction', value: '4.8/5', improvement: '+30%' }
    ]
  },
  {
    id: 'fintech-dashboard',
    title: 'FinanceFlow Dashboard',
    description: 'Dashboard financier temps réel pour gestionnaires d\'actifs',
    category: 'fintech',
    sector: 'finance',
    technologies: ['Vue.js', 'D3.js', 'WebSocket', 'Redis'],
    image: '/images/projects/fintech-dashboard.jpg',
    featured: true,
    year: 2023,
    client: 'InvestPro Capital',
    results: [
      { metric: 'Vitesse traitement', value: '< 100ms', improvement: '+500%' },
      { metric: 'Précision', value: '99.9%', improvement: '+25%' },
      { metric: 'Satisfaction client', value: '4.9/5', improvement: '+40%' }
    ]
  },
  {
    id: 'edu-platform',
    title: 'EduLearn Platform',
    description: 'Plateforme e-learning avec classes virtuelles interactives',
    category: 'education',
    sector: 'education',
    technologies: ['React', 'WebRTC', 'Socket.io', 'MongoDB'],
    image: '/images/projects/edu-platform.jpg',
    year: 2023,
    client: 'Digital Academy',
    results: [
      { metric: 'Étudiants actifs', value: '15k+', improvement: '+600%' },
      { metric: 'Taux de réussite', value: '92%', improvement: '+45%' },
      { metric: 'Engagement', value: '78%', improvement: '+80%' }
    ]
  },
  {
    id: 'smart-logistics',
    title: 'SmartLogistics Hub',
    description: 'Système de gestion logistique avec IoT et optimisation IA',
    category: 'logistics',
    sector: 'transport',
    technologies: ['Angular', 'microservices', 'IoT', 'Machine Learning'],
    image: '/images/projects/logistics.jpg',
    year: 2022,
    client: 'TransGlobal Ltd',
    results: [
      { metric: 'Efficacité', value: '94%', improvement: '+35%' },
      { metric: 'Coûts réduits', value: '28%', improvement: '+28%' },
      { metric: 'Livraisons à temps', value: '96%', improvement: '+22%' }
    ]
  }
]

export const projectCategories = [
  { id: 'all', name: 'Tous les projets', icon: '🚀' },
  { id: 'saas', name: 'SaaS', icon: '☁️' },
  { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
  { id: 'mobile', name: 'Mobile', icon: '📱' },
  { id: 'fintech', name: 'FinTech', icon: '💰' },
  { id: 'education', name: 'Education', icon: '🎓' },
  { id: 'logistics', name: 'Logistique', icon: '📦' }
]

export const projectSectors = [
  { id: 'all', name: 'Tous les secteurs' },
  { id: 'technology', name: 'Technologie' },
  { id: 'retail', name: 'Commerce' },
  { id: 'healthcare', name: 'Santé' },
  { id: 'finance', name: 'Finance' },
  { id: 'education', name: 'Éducation' },
  { id: 'transport', name: 'Transport' }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export function getProjectsBySector(sector: string): Project[] {
  if (sector === 'all') return projects
  return projects.filter(project => project.sector === sector)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}
