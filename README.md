# 🌟 Web Yarden - Agence Digitale Israël

[![Next.js](https://img.shields.io/badge/Next.js-14.2.33-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)](https://github.com/shayacoca/AGENCE)

> Site vitrine professionnel pour agence digitale spécialisée en marketing digital en Israël. Interface moderne, simulateur de devis interactif et dashboard administrateur.

## ✨ Fonctionnalités

### 🎯 **Core Features**
- **Site vitrine** responsive avec design moderne Matrix-inspired
- **Simulateur de devis** interactif avec génération PDF automatique
- **Dashboard admin** sécurisé avec authentification
- **Système multilingue** (Français, Anglais, Hébreu)
- **SEO optimisé** avec sitemap dynamique et metadata complètes
- **Analytics Google** avec tracking des conversions
- **Formulaires intelligents** avec validation et envoi EmailJS

### 🚀 **Advanced Features**
- **PWA Ready** avec manifest et service workers
- **Animations fluides** avec Framer Motion
- **State management** centralisé avec Zustand
- **Cache optimisé** pour performances maximales
- **Headers de sécurité** complets (CSP, HSTS, etc.)
- **Images optimisées** WebP/AVIF avec Next.js Image

## 🛠 Stack Technique

### **Frontend**
- **Next.js 14** - App Router, Server Components, Streaming
- **TypeScript 5.6** - Type safety complète
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion** - Animations et transitions

### **State & Forms**
- **Zustand** - State management léger
- **React Hook Form** - Gestion des formulaires
- **React PDF** - Génération de documents PDF

### **Services & APIs**
- **EmailJS** - Service d'envoi d'emails
- **Google Analytics** - Tracking et analytics
- **API Routes** - Endpoints backend Next.js

### **Deployment & DevOps**
- **Vercel** - Hébergement principal (recommandé)
- **Docker** - Containerisation
- **GitHub Actions** - CI/CD automatisé
- **ESLint & Prettier** - Qualité de code

## 📦 Installation Rapide

```bash
# 1. Cloner le repository
git clone https://github.com/shayacoca/AGENCE.git
cd AGENCE

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés API

# 4. Lancer le serveur de développement
npm run dev
```

🌐 **Accès local** : [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Variables d'environnement requises

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=contact@webyarden.co.il
NEXT_PUBLIC_CONTACT_PHONE=+972-XX-XXX-XXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=972XXXXXXXXX

# Admin Access
ADMIN_PASSWORD=your_secure_password
```

## 🌐 Pages & Routes

### **Pages Publiques**

- `/` - Page d'accueil avec hero section et services
- `/services` - Catalogue complet des services
- `/services/[category]` - Services par catégorie
- `/devis` - Simulateur de devis interactif
- `/contact` - Formulaire de contact multi-services
- `/about` - À propos de l'agence
- `/tarifs` - Grille tarifaire et packs
- `/projets` - Portfolio des réalisations
- `/blog` - Articles et actualités
- `/temoignages` - Témoignages clients

### **Pages Légales**

- `/privacy` - Politique de confidentialité
- `/cgv` - Conditions générales de vente
- `/mentions-legales` - Mentions légales

### **Administration**

- `/admin` - Dashboard administrateur sécurisé

### **API Endpoints**

- `/api/health` - Health check pour monitoring

## 📁 Architecture du Projet

```
AGENCE/
├── 📁 app/                     # Next.js 14 App Router
│   ├── 📁 (pages)/            # Pages groupées
│   ├── 📁 api/                # API Routes
│   ├── 📄 layout.tsx          # Layout racine
│   ├── 📄 page.tsx            # Page d'accueil
│   └── 📄 globals.css         # Styles globaux
├── 📁 components/             # Composants React
│   ├── 📁 ui/                 # Composants UI de base
│   ├── 📁 layout/             # Composants de layout
│   ├── 📁 forms/              # Composants de formulaires
│   ├── 📁 animations/         # Composants d'animation
│   └── 📁 admin/              # Composants admin
├── 📁 lib/                    # Utilitaires et services
│   ├── 📄 utils.ts            # Fonctions utilitaires
│   ├── 📄 emailService.ts     # Service d'email
│   └── 📄 i18n.ts             # Internationalisation
├── 📁 data/                   # Données statiques
│   ├── 📄 services.ts         # Catalogue des services
│   ├── 📄 projects.ts         # Portfolio projets
│   ├── 📄 blog.ts             # Articles de blog
│   └── 📄 packs.ts            # Packs tarifaires
├── 📁 types/                  # Types TypeScript
│   └── 📄 interfaces.ts       # Interfaces globales
├── 📁 public/                 # Assets statiques
│   ├── 📁 images/             # Images optimisées
│   ├── 📄 sitemap.xml         # Plan du site
│   ├── 📄 robots.txt          # Instructions robots
│   └── 📄 manifest.json       # PWA manifest
├── 📁 store/                  # State management
│   └── 📄 quoteStore.ts       # Store pour devis
└── 📁 .github/                # GitHub workflows
    ├── 📁 workflows/          # Actions CI/CD
    └── 📁 ISSUE_TEMPLATE/     # Templates d'issues
```

## 🚀 Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint
npm run lint:fix     # Correction automatique

# Tests
npm run test         # Tests Jest
npm run test:watch   # Tests en mode watch
npm run test:e2e     # Tests Cypress E2E

# Déploiement
npm run deploy:vercel    # Déploiement Vercel
npm run deploy:netlify   # Déploiement Netlify
npm run docker:build    # Build Docker
npm run docker:run      # Run container Docker
```

## 🌍 Déploiement Multi-Plateforme

### **Vercel (Recommandé)**

```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### **Netlify**

Configuration automatique via `netlify.toml`

### **Docker**

```bash
# Build et run
docker-compose up --build

# Production
docker build -t web-yarden .
docker run -p 3000:3000 web-yarden
```

### **Render.com**

Configuration automatique via `render.yaml`

## 📊 Métriques de Performance

- ⚡ **Page d'accueil** : 145 B (87.3 kB First Load)
- 🎯 **Score Lighthouse** : 95+ (Performance, SEO, Accessibility)
- 📱 **Responsive** : Mobile-first design
- 🔒 **Sécurité** : Headers complets, CSP configuré
- 🌐 **SEO** : Sitemap, metadata, structured data

## 🤝 Contribution

1. **Fork** le projet
2. **Créer** une branche feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrir** une Pull Request

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails.

## 📄 Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus d'informations.

## 📞 Contact & Support

- **Email** : [contact@webyarden.co.il](mailto:contact@webyarden.co.il)
- **Website** : [webyarden.co.il](https://webyarden.co.il)
- **LinkedIn** : [Shay Acoca](https://linkedin.com/in/shayacoca)
- **GitHub** : [@shayacoca](https://github.com/shayacoca)

---

<div align="center">
  <strong>Développé avec ❤️ par l'équipe Web Yarden</strong><br>
  <em>Votre partenaire digital en Israël</em>
</div>
- **Accent** : #00FFAA (Vert)

### Composants
- **Boutons** : `.btn-primary`, `.btn-secondary`
- **Cards** : `.card` avec hover effects
- **Gradients** : `.gradient-bg`, `.text-gradient`

## 📱 Services disponibles

Le catalogue comprend 25+ services répartis en 8 catégories :
- 🎨 Design & Identité visuelle
- 📱 Réseaux sociaux
- 🔍 Référencement SEO
- ✍️ Création de contenu
- 📢 Publicité digitale
- 🛒 E-commerce
- 💻 Développement web
- 📊 Analytics

## 🔧 Configuration

### Variables d'environnement
```env
NEXT_PUBLIC_SITE_URL=https://webyarden.co.il
NEXT_PUBLIC_WHATSAPP_NUMBER=+972501234567
NEXT_PUBLIC_EMAIL=contact@webyarden.co.il
```

### Tailwind CSS
Configuration personnalisée dans `tailwind.config.js` avec :
- Couleurs de marque
- Animations personnalisées
- Typographies (Inter, Satoshi)

## 📈 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisé
- **Bundle Size** : Optimisé avec tree-shaking
- **Images** : Format WebP/AVIF supporté
- **Caching** : Headers de cache configurés

## 🌍 SEO & Accessibilité

- **Métadonnées** : Open Graph, Twitter Cards
- **Schema.org** : Données structurées
- **Sitemap** : Génération automatique
- **Robots.txt** : Configuration SEO
- **Accessibilité** : WCAG 2.1 AA compliant

## 📧 Contact & Support

- **Email** : contact@webyarden.co.il
- **WhatsApp** : +972 50 123 4567
- **Site web** : https://webyarden.co.il

## 📄 Licence

© 2024 Web Yarden. Tous droits réservés.

---

**Développé avec ❤️ pour le marché israélien**
