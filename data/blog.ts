export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: 'seo' | 'marketing' | 'design' | 'tech' | 'business';
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'seo-israel-2024',
    title: 'SEO en Israël : Guide Complet 2024',
    excerpt: 'Découvrez les meilleures pratiques SEO adaptées au marché israélien. De Google.co.il aux recherches en hébreu, optimisez votre visibilité.',
    content: `Le référencement en Israël présente des défis uniques. Entre les recherches en hébreu, anglais et russe, l'optimisation nécessite une approche multilingue sophistiquée.

## 1. Comprendre le marché israélien
- 90% utilisent Google.co.il
- Recherches bilingues fréquentes
- Mobile-first essentiel

## 2. Optimisation technique
- Support RTL (Right-to-Left) pour l'hébreu
- Schema markup multilingue
- Vitesse de chargement cruciale

## 3. Contenu localisé
- Mots-clés en hébreu et translittération
- Références culturelles locales
- Calendrier des fêtes juives

## 4. Link building local
- Annuaires israéliens
- Partenariats locaux
- PR digital en Israël`,
    author: 'Shay Acoca',
    date: '2024-11-01',
    readTime: 5,
    category: 'seo',
    tags: ['SEO', 'Israël', 'Google', 'Hébreu'],
    image: '/images/blog/seo-israel.jpg',
    featured: true
  },
  {
    id: 'reseaux-sociaux-israel',
    title: 'Réseaux Sociaux en Israël : Stratégies Gagnantes',
    excerpt: 'Facebook, Instagram, TikTok... Découvrez comment les israéliens utilisent les réseaux sociaux et comment adapter votre stratégie.',
    content: `Israël a l'un des taux d'utilisation des réseaux sociaux les plus élevés au monde. Voici comment en tirer parti.

## Plateformes populaires
- Facebook : 70% de la population
- Instagram : 60% (surtout 18-34 ans)
- LinkedIn : 40% des professionnels
- TikTok : En forte croissance

## Meilleures pratiques
- Publier en hébreu et anglais
- Horaires optimaux : 20h-22h
- Contenu visuel performant
- Stories et Reels prioritaires`,
    author: 'Shay Acoca',
    date: '2024-10-28',
    readTime: 4,
    category: 'marketing',
    tags: ['Social Media', 'Facebook', 'Instagram', 'Marketing'],
    image: '/images/blog/social-israel.jpg',
    featured: true
  },
  {
    id: 'google-ads-israel',
    title: 'Google Ads en Israël : Maximisez votre ROI',
    excerpt: 'Coûts, stratégies et optimisations spécifiques pour vos campagnes Google Ads sur le marché israélien.',
    content: `Optimisez vos campagnes Google Ads pour le marché israélien avec ces stratégies éprouvées.

## Coûts moyens
- CPC moyen : 5-15 NIS
- Secteurs compétitifs : 20-50 NIS
- ROI moyen : 300-500%

## Optimisations clés
- Campagnes en hébreu + anglais
- Géolocalisation précise
- Extensions d'appel essentielles
- Ajustements horaires`,
    author: 'Shay Acoca',
    date: '2024-10-25',
    readTime: 6,
    category: 'marketing',
    tags: ['Google Ads', 'PPC', 'Marketing', 'ROI'],
    image: '/images/blog/google-ads.jpg',
    featured: false
  },
  {
    id: 'design-trends-2024',
    title: 'Tendances Design Web 2024',
    excerpt: 'Minimalisme, animations micro, dark mode... Les tendances qui dominent le web design moderne.',
    content: `Les tendances design qui marquent 2024 et comment les implémenter dans vos projets.

## Tendances majeures
- Design minimaliste épuré
- Micro-animations subtiles
- Glassmorphism moderne
- Typographie bold

## Couleurs 2024
- Palettes monochromes
- Dégradés subtils
- Accents néon
- Mode sombre adaptatif`,
    author: 'Shay Acoca',
    date: '2024-10-20',
    readTime: 3,
    category: 'design',
    tags: ['Design', 'UX', 'UI', 'Trends'],
    image: '/images/blog/design-trends.jpg',
    featured: false
  },
  {
    id: 'ecommerce-israel',
    title: 'E-commerce en Israël : Guide Complet',
    excerpt: 'Tout ce qu\'il faut savoir pour lancer et développer votre boutique en ligne en Israël.',
    content: `Le e-commerce israélien connaît une croissance explosive. Voici comment en profiter.

## Marché israélien
- Croissance annuelle : 15%
- Panier moyen : 350 NIS
- Mobile commerce : 60%

## Solutions techniques
- WooCommerce
- Shopify
- Solutions locales

## Logistique
- Livraison jour même
- Points relais
- Retours gratuits essentiels`,
    author: 'Shay Acoca',
    date: '2024-10-15',
    readTime: 7,
    category: 'business',
    tags: ['E-commerce', 'Shopify', 'Business', 'Vente'],
    image: '/images/blog/ecommerce.jpg',
    featured: false
  },
  {
    id: 'nextjs-react-2024',
    title: 'Next.js 14 : Le Framework React Ultime',
    excerpt: 'App Router, Server Components, performances... Pourquoi Next.js domine le développement web moderne.',
    content: `Next.js 14 révolutionne le développement React avec des performances et une DX exceptionnelles.

## Nouvelles fonctionnalités
- App Router stable
- Server Components
- Streaming SSR
- Image optimization

## Performances
- Score Lighthouse 100/100
- Time to Interactive réduit
- Bundle size optimisé

## Cas d'usage
- Sites vitrines
- E-commerce
- Applications SaaS
- Blogs performants`,
    author: 'Shay Acoca',
    date: '2024-10-10',
    readTime: 5,
    category: 'tech',
    tags: ['Next.js', 'React', 'JavaScript', 'Performance'],
    image: '/images/blog/nextjs.jpg',
    featured: false
  }
];
