# 🚀 Guide de Déploiement - Web Yarden

## 📋 Prérequis de Production

### Variables d'Environnement
Créez un fichier `.env.local` basé sur `.env.local.example` :

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-VOTRE_ID_ANALYTICS

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_webyarden
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_quote
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_clé_publique_emailjs

# Site URL
NEXT_PUBLIC_SITE_URL=https://webyarden.co.il

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=webyarden@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+972533700551

# Réseaux Sociaux
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/webyarden
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/webyarden
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/webyarden
NEXT_PUBLIC_WHATSAPP_NUMBER=972533700551
```

## 🔧 Commandes de Déploiement

### Build de Production
```bash
npm run build
```

### Test Local de Production
```bash
npm run start
```

### Vérification Lint
```bash
npm run lint
```

## 📊 Métriques de Performance

### Tailles des Bundles
- **Page d'accueil** : 5.07 kB (163 kB First Load)
- **Services** : 2.34 kB (160 kB First Load)
- **Devis** : 434 kB (581 kB First Load) - PDF Generator
- **Blog** : 4.08 kB (143 kB First Load)

### Optimisations Activées
- ✅ Compression gzip
- ✅ Optimisation CSS expérimentale
- ✅ Images WebP/AVIF
- ✅ Génération d'ETags désactivée
- ✅ Headers de sécurité configurés

## 🌐 Plateformes de Déploiement Recommandées

### 1. Vercel (Recommandé)
```bash
npx vercel --prod
```

### 2. Netlify
```bash
npm run build
# Upload du dossier .next/
```

### 3. Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔍 Checklist Pré-Déploiement

- [ ] Variables d'environnement configurées
- [ ] Google Analytics ID configuré
- [ ] EmailJS configuré et testé
- [ ] Build réussi sans erreurs
- [ ] Tests de performance validés
- [ ] Sitemap.xml à jour
- [ ] Robots.txt configuré
- [ ] Manifest PWA fonctionnel
- [ ] Apple touch icons présents

## 📈 Post-Déploiement

### Vérifications
1. **SEO** : Tester avec Google Search Console
2. **Performance** : Analyser avec Lighthouse
3. **Analytics** : Vérifier le tracking Google Analytics
4. **Formulaires** : Tester l'envoi d'emails via EmailJS
5. **PWA** : Vérifier l'installation sur mobile

### Monitoring
- Google Analytics pour le trafic
- Google Search Console pour le SEO
- Vercel Analytics (si déployé sur Vercel)

## 🛠️ Maintenance

### Mises à jour
```bash
# Dépendances
npm update

# Next.js
npm install next@latest

# Rebuild
npm run build
```

### Sauvegarde
- Code source : Repository Git
- Configuration : Variables d'environnement
- Analytics : Export des données GA

---

**🎯 Le site Web Yarden est optimisé pour la production avec 19 pages générées, PWA activée et performances maximisées !**
