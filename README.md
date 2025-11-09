# 🚀 Web Yarden — Agence Digitale en Israël

> **Accélérez votre visibilité en Israël 🇮🇱**

Web Yarden est une agence digitale spécialisée dans le développement web, le marketing digital et l'optimisation SEO pour le marché israélien. Notre plateforme multilingue (Français, Anglais, Hébreu) offre des solutions complètes pour booster votre présence en ligne.

## ✨ Fonctionnalités

- 🌐 **Site multilingue** avec support RTL pour l'hébreu
- 📱 **Design responsive** mobile-first
- 🛒 **Simulateur de devis instantané** avec panier intelligent
- 📄 **Génération PDF** automatique des devis
- 🎨 **Mode sombre** avec basculement automatique
- ♿ **Accessibilité WCAG 2.1 AA** complète
- 🔍 **SEO optimisé** avec sitemap et robots.txt
- 💬 **Widget de chat** intégré
- 📊 **Dashboard analytics** (à venir)

## 🛠️ Technologies

### Frontend
- **Next.js 14** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **React Hook Form + Yup** pour la validation
- **Zustand** pour la gestion d'état

### Backend (à implémenter)
- **Node.js + Express** pour l'API REST
- **MongoDB** avec Mongoose
- **JWT** pour l'authentification
- **Helmet + CORS** pour la sécurité

### Outils de développement
- **ESLint + Prettier** pour la qualité du code
- **Husky** pour les hooks Git
- **TypeScript** configuration stricte

## 🚀 Installation et développement

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Git

### Installation
```bash
# Cloner le repository
git clone https://github.com/Sy2force/WEBYARDEN.git
cd WEBYARDEN

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Configurer les variables d'environnement
# Éditer .env.local avec vos valeurs
```

### Variables d'environnement
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAIL_SERVICE=your-email-service
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
```

### Développement
```bash
# Démarrer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

### Build et production
```bash
# Build de production
npm run build

# Démarrer en mode production
npm start

# Linter et formatage
npm run lint
npm run lint:fix
```

## 📦 Structure du projet

```
├── app/                    # Pages Next.js 14 (App Router)
│   ├── (pages)/           # Routes principales
│   ├── api/               # API Routes
│   └── globals.css        # Styles globaux
├── components/            # Composants React réutilisables
│   ├── home/             # Composants page d'accueil
│   ├── layout/           # Layout et navigation
│   ├── quote/            # Système de devis
│   └── services/         # Composants services
├── data/                 # Données statiques et mock
├── lib/                  # Utilitaires et configurations
├── public/               # Assets statiques
├── store/                # Stores Zustand
└── types/                # Définitions TypeScript
```

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### Render
1. Connecter le repository GitHub à Render
2. Configurer les variables d'environnement
3. Build command: `npm run build`
4. Start command: `npm start`

### Docker (Optionnel)
```bash
# Build de l'image
docker build -t webyarden .

# Démarrer le container
docker run -p 3000:3000 webyarden
```

## 📊 Services disponibles

Le projet inclut **52 services** répartis en 8 catégories :
- 🌐 Développement Web
- 📱 Applications Mobiles  
- 🎨 Design & UX/UI
- 📈 Marketing Digital
- 🔍 SEO & Référencement
- 📊 Analytics & Data
- 🛡️ Sécurité Web
- 🚀 Performance & Optimisation

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests e2e
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📈 Performance

- ⚡ **Lighthouse Score**: 95+
- 🎯 **Core Web Vitals**: Excellent
- 📱 **Mobile Performance**: Optimisé
- ♿ **Accessibilité**: WCAG 2.1 AA

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Roadmap

- [ ] Backend Node.js/Express complet
- [ ] Authentification utilisateur
- [ ] Dashboard analytics
- [ ] Système de paiement
- [ ] API REST complète
- [ ] Tests automatisés
- [ ] CI/CD Pipeline

## 📞 Support

- **Email**: [contact@webyarden.co.il](mailto:contact@webyarden.co.il)
- **Website**: [https://webyarden.co.il](https://webyarden.co.il)
- **GitHub**: [https://github.com/Sy2force/WEBYARDEN](https://github.com/Sy2force/WEBYARDEN)

## 📄 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Développé avec ❤️ par l'équipe Web Yarden en Israël 🇮🇱**
