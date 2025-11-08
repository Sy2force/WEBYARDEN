# 🚀 Configuration Vercel - Web Yarden

## 🎯 Déploiement Rapide

### 1. Installation et Connexion
```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer (depuis le dossier du projet)
vercel --prod
```

### 2. Variables d'Environnement Vercel

Dans le dashboard Vercel (Settings > Environment Variables), ajouter :

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_webyarden
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_quote
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_clé_publique_emailjs
NEXT_PUBLIC_SITE_URL=https://webyarden.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=webyarden@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+972533700551
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/webyarden
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/webyarden
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/webyarden
NEXT_PUBLIC_WHATSAPP_NUMBER=972533700551
```

### 3. Configuration Domaine Personnalisé

1. Dans Vercel Dashboard > Settings > Domains
2. Ajouter `webyarden.co.il`
3. Configurer les DNS chez votre registrar :
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

### 4. Optimisations Vercel Activées

✅ **Performance**
- Compression automatique
- Edge caching optimisé
- Images WebP/AVIF
- Bundle splitting intelligent

✅ **Sécurité**
- Headers de sécurité configurés
- HTTPS automatique
- Protection DDoS

✅ **SEO**
- Génération statique optimisée
- Sitemap.xml accessible
- Meta tags optimisés

### 5. Métriques de Build

```
Route (app)                    Size     First Load JS
┌ ○ /                         5.07 kB         163 kB
├ ○ /services                 2.34 kB         160 kB
├ ○ /devis                    434 kB          580 kB
├ ○ /blog                     4.08 kB         143 kB
└ ○ /contact                  2.98 kB         150 kB

Total: 19 pages générées
Middleware: 26.5 kB
```

### 6. Script de Déploiement Automatique

```bash
# Déploiement preview
./deploy.sh preview

# Déploiement production
./deploy.sh production
```

### 7. Post-Déploiement Checklist

- [ ] Variables d'environnement configurées
- [ ] Domaine personnalisé configuré
- [ ] Google Analytics fonctionnel
- [ ] EmailJS testé
- [ ] Formulaires opérationnels
- [ ] PWA installable
- [ ] Performance Lighthouse > 90

### 8. Monitoring et Analytics

**Vercel Analytics** (optionnel)
```bash
npm install @vercel/analytics
```

**Google Analytics**
- Configuré via `NEXT_PUBLIC_GA_ID`
- Tracking automatique des pages

### 9. Support et Maintenance

**Mises à jour automatiques**
- Déploiement automatique sur push Git
- Preview deployments sur PR
- Rollback en un clic

**Monitoring**
- Vercel Dashboard pour les métriques
- Google Search Console pour SEO
- Google Analytics pour le trafic

---

**🎉 Votre site Web Yarden est maintenant prêt pour un déploiement Vercel optimal !**
