# Guide de Déploiement - Web Yarden

Ce guide vous explique comment déployer votre site Web Yarden sur Vercel et Render.

## 🚀 Déploiement Vercel (Recommandé)

### Méthode 1: Via l'interface web Vercel

1. **Connectez-vous à [vercel.com](https://vercel.com)**
2. **Cliquez sur "New Project"**
3. **Importez votre repository GitHub/GitLab**
4. **Vérifiez la configuration automatique:**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. **Variables d'environnement (optionnelles):**
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

6. **Cliquez sur "Deploy"**

### Méthode 2: Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer le projet
vercel

# Pour un déploiement en production
vercel --prod
```

### Configuration du domaine personnalisé

1. Dans le dashboard Vercel, allez dans "Settings" > "Domains"
2. Ajoutez votre domaine: `webyarden.co.il`
3. Configurez les DNS selon les instructions Vercel

## 🔧 Déploiement Render

### Via l'interface web Render

1. **Connectez-vous à [render.com](https://render.com)**
2. **Cliquez sur "New Web Service"**
3. **Connectez votre repository**
4. **Configuration automatique via render.yaml:**
   - Name: web-yarden
   - Environment: Node
   - Region: Frankfurt (proche d'Israël)
   - Plan: Free (pour commencer)

5. **Variables d'environnement configurées automatiquement:**
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_SITE_URL=https://web-yarden.onrender.com`

6. **Cliquez sur "Create Web Service"**

### Configuration du domaine personnalisé

1. Dans le dashboard Render, allez dans "Settings" > "Custom Domains"
2. Ajoutez votre domaine: `webyarden.co.il`
3. Configurez les DNS selon les instructions Render

## 📋 Checklist Pre-Déploiement

- [x] ✅ Configuration Vercel (`vercel.json`)
- [x] ✅ Configuration Render (`render.yaml`)
- [x] ✅ Variables d'environnement (`.env.example`)
- [x] ✅ Optimisation des images (base64/gradients)
- [x] ✅ Tests de build local
- [ ] 🔄 Tests de responsive design
- [ ] 🔄 Vérification des traductions
- [ ] 🔄 Tests de performance

## 🔍 Vérification Post-Déploiement

Après le déploiement, vérifiez:

1. **Pages fonctionnelles:**
   - ✅ Page d'accueil (`/`)
   - ✅ Services (`/services`)
   - ✅ Projets (`/projects`)
   - ✅ À propos (`/about`)
   - ✅ Contact (`/contact`)
   - ✅ Devis (`/devis`)

2. **Fonctionnalités:**
   - ✅ Simulateur de devis
   - ✅ Chat widget
   - ✅ FAQ interactive
   - ✅ Formulaires de contact

3. **Performance:**
   - Temps de chargement < 3s
   - Images optimisées
   - Core Web Vitals

## 🌐 Domaines Recommandés

### Pour Vercel:
- Production: `https://webyarden.co.il`
- Preview: `https://web-yarden.vercel.app`

### Pour Render:
- Production: `https://webyarden.co.il`
- Staging: `https://web-yarden.onrender.com`

## 📧 Configuration Email (Optionnelle)

Pour activer les formulaires de contact:

1. **Configurez un service SMTP:**
   - Gmail SMTP
   - SendGrid
   - Resend

2. **Ajoutez les variables d'environnement:**
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=noreply@webyarden.co.il
   EMAIL_TO=contact@webyarden.co.il
   ```

## 🚨 Dépannage

### Build Errors
```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

### Variables d'environnement manquantes
- Vérifiez que `NEXT_PUBLIC_SITE_URL` est définie
- Redéployez après avoir ajouté des variables

### Images non affichées
- Toutes les images sont en base64 ou gradients
- Pas de dépendances externes requises

## 📞 Support

En cas de problème:
1. Vérifiez les logs de build
2. Testez en local: `npm run build && npm start`
3. Consultez la documentation Vercel/Render
