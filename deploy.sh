#!/bin/bash

# 🚀 Script de Déploiement Vercel - Web Yarden
# Usage: ./deploy.sh [production|preview]

set -e

echo "🚀 Déploiement Web Yarden sur Vercel"
echo "======================================"

# Vérifier les arguments
ENVIRONMENT=${1:-preview}

if [ "$ENVIRONMENT" != "production" ] && [ "$ENVIRONMENT" != "preview" ]; then
    echo "❌ Environnement invalide. Utilisez 'production' ou 'preview'"
    exit 1
fi

echo "📋 Environnement: $ENVIRONMENT"

# Vérifier que Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    echo "📦 Installation de Vercel CLI..."
    npm install -g vercel
fi

# Nettoyer les builds précédents
echo "🧹 Nettoyage des builds précédents..."
rm -rf .next
rm -rf out

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm ci

# Linter le code
echo "🔍 Vérification du code..."
npm run lint

# Build local pour vérifier
echo "🔨 Build de vérification..."
npm run build

# Déploiement selon l'environnement
if [ "$ENVIRONMENT" = "production" ]; then
    echo "🌟 Déploiement en PRODUCTION..."
    vercel --prod --yes
else
    echo "🔍 Déploiement en PREVIEW..."
    vercel --yes
fi

echo "✅ Déploiement terminé avec succès!"
echo ""
echo "📋 Prochaines étapes:"
echo "1. Configurer les variables d'environnement dans Vercel Dashboard"
echo "2. Configurer le domaine personnalisé (webyarden.co.il)"
echo "3. Tester toutes les fonctionnalités"
echo "4. Configurer Google Analytics"
echo "5. Tester EmailJS"
echo ""
echo "🔗 Accédez à votre projet: https://vercel.com/dashboard"
