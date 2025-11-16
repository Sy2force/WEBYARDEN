#!/bin/bash

# 🧹 Script de nettoyage complet pour Next.js 14 + TypeScript + i18n
# Usage: ./scripts/clean-cache.sh

echo "🚀 Démarrage du nettoyage complet..."

# 1. Arrêter tous les processus Node.js
echo "⏹️  Arrêt des processus Node.js..."
pkill -f "next" 2>/dev/null || true
pkill -f "node" 2>/dev/null || true

# 2. Supprimer le cache Next.js
echo "🗑️  Suppression du cache Next.js..."
rm -rf .next
rm -rf out

# 3. Supprimer le cache TypeScript
echo "📝 Suppression du cache TypeScript..."
rm -f tsconfig.tsbuildinfo
rm -rf .tscache

# 4. Supprimer les caches Node.js
echo "📦 Suppression des caches Node.js..."
rm -rf node_modules/.cache
rm -rf .cache

# 5. Supprimer les caches ESLint
echo "🔍 Suppression du cache ESLint..."
rm -rf .eslintcache

# 6. Supprimer les caches Tailwind CSS
echo "🎨 Suppression du cache Tailwind..."
rm -rf .postcss
rm -rf .tailwindcss

# 7. Optionnel : Réinstaller les dépendances (décommentez si nécessaire)
# echo "📥 Réinstallation des dépendances..."
# rm -rf node_modules
# rm -rf package-lock.json
# npm install

# 8. Nettoyer le registre npm local
echo "🔧 Nettoyage du cache npm..."
npm cache clean --force 2>/dev/null || true

# 9. Reconstruire le projet
echo "🏗️  Reconstruction du projet..."
npm run build

echo "✅ Nettoyage terminé ! Vous pouvez maintenant:"
echo "   1. Redémarrer VS Code"
echo "   2. Recharger la fenêtre TypeScript (Cmd+Shift+P > TypeScript: Reload Projects)"
echo "   3. Lancer 'npm run dev'"

# Optionnel : démarrer automatiquement le serveur de dev
read -p "🚀 Voulez-vous démarrer le serveur de développement maintenant ? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌟 Démarrage du serveur..."
    npm run dev
fi
