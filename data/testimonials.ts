export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'sarah-cohen',
    name: 'Sarah Cohen',
    role: 'Directrice Marketing',
    company: 'TechNova Ltd',
    content: 'Web Yarden a transformé notre présence digitale. Leur expertise technique et leur compréhension du marché israélien nous ont permis d\'augmenter nos ventes de 120% en 6 mois.',
    rating: 5,
    image: '/images/testimonials/sarah-cohen.jpg',
    featured: true
  },
  {
    id: 'david-levy',
    name: 'David Levy',
    role: 'Fondateur',
    company: 'Startup Innovation',
    content: 'Shay a créé notre identité visuelle et notre site web de A à Z. Le résultat dépasse nos attentes. Professionnel, créatif et à l\'écoute.',
    rating: 5,
    image: '/images/testimonials/david-levy.jpg',
    featured: true
  },
  {
    id: 'rachel-mizrahi',
    name: 'Rachel Mizrahi',
    role: 'Propriétaire',
    company: 'Restaurant Galil',
    content: 'Grâce à Web Yarden, nos réservations en ligne ont augmenté de 80%. Le site est magnifique et parfaitement adapté à nos besoins.',
    rating: 5,
    image: '/images/testimonials/rachel-mizrahi.jpg',
    featured: true
  },
  {
    id: 'michael-ben-david',
    name: 'Michael Ben-David',
    role: 'CEO',
    company: 'E-commerce Fashion',
    content: 'L\'équipe Web Yarden a développé notre boutique en ligne avec un professionnalisme exemplaire. ROI exceptionnel !',
    rating: 5,
    image: '/images/testimonials/michael-ben-david.jpg',
    featured: false
  },
  {
    id: 'anna-goldstein',
    name: 'Anna Goldstein',
    role: 'Directrice',
    company: 'Clinique MediCare',
    content: 'La plateforme de rendez-vous développée par Web Yarden a révolutionné notre organisation. Nos patients sont ravis.',
    rating: 5,
    image: '/images/testimonials/anna-goldstein.jpg',
    featured: false
  },
  {
    id: 'yossi-abraham',
    name: 'Yossi Abraham',
    role: 'Agent Immobilier',
    company: 'PropTech Realty',
    content: 'L\'application mobile créée par Shay nous a donné un avantage concurrentiel énorme. Interface intuitive et fonctionnalités innovantes.',
    rating: 5,
    image: '/images/testimonials/yossi-abraham.jpg',
    featured: false
  }
];
