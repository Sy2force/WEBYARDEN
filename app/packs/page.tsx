'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PackCard from '@/components/PackCard'
import { useCartStore } from '@/store/cartStore'
import { useTranslations } from '@/components/LocalizedText'

const packs = [
  {
    id: 'starter',
    title: 'Pack Starter',
    subtitle: 'Pour une présence simple mais efficace',
    price: 2500,
    originalPrice: 3200,
    servicesIncluded: [
      'Création de logo professionnel',
      'Page Instagram optimisée',
      'QR Code Menu interactif',
      'Hébergement 3 mois offert',
      'Formation réseaux sociaux',
      'Support technique 30 jours'
    ],
    image: '/images/packs/starter.svg',
    badge: 'NOUVEAU',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    id: 'pro',
    title: 'Pack Pro',
    subtitle: 'Solution complète pour entrepreneurs ambitieux',
    price: 5800,
    originalPrice: 7500,
    servicesIncluded: [
      'Site web responsive (5 pages)',
      'SEO optimisation complète',
      'Stratégie réseaux sociaux',
      'Google Ads setup (300₪ offerts)',
      'Analytics & tracking',
      'Logo + charte graphique',
      'Hébergement 6 mois offert',
      'Support prioritaire 60 jours'
    ],
    image: '/images/packs/pro.svg',
    popular: true,
    color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
  },
  {
    id: 'premium',
    title: 'Pack Premium',
    subtitle: 'Transformation digitale complète',
    price: 12500,
    originalPrice: 16000,
    servicesIncluded: [
      'Site web avancé (10+ pages)',
      'E-commerce intégré',
      'App mobile (iOS/Android)',
      'CRM personnalisé',
      'Marketing automation',
      'Formation équipe complète',
      'Hébergement 12 mois offert',
      'Support dédié 6 mois'
    ],
    image: '/images/packs/premium.svg',
    badge: 'BEST VALUE',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    id: 'ultimate',
    title: 'Pack Ultimate',
    subtitle: 'Solution enterprise sur-mesure',
    price: 25000,
    servicesIncluded: [
      'Écosystème digital complet',
      'Intelligence artificielle intégrée',
      'Développement sur-mesure',
      'Infrastructure cloud dédiée',
      'Équipe dédiée 24/7',
      'Consulting stratégique mensuel',
      'Maintenance illimitée',
      'Garantie performance'
    ],
    image: '/images/packs/ultimate.svg',
    badge: 'ENTERPRISE',
    color: 'bg-gradient-to-br from-orange-500 to-red-500'
  }
]

const comparisonFeatures = [
  'Logo professionnel',
  'Site web responsive',
  'SEO optimisation',
  'Réseaux sociaux',
  'E-commerce',
  'App mobile',
  'Support technique',
  'Formation incluse'
]

export default function PacksPage() {
  const { t } = useTranslations()
  const [showComparison, setShowComparison] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { items, getTotalPrice } = useCartStore()

  const categories = [
    { id: 'all', label: t('packs.categories.all'), icon: '🎯' },
    { id: 'startup', label: t('packs.categories.startup'), icon: '🚀' },
    { id: 'business', label: t('packs.categories.business'), icon: '💼' },
    { id: 'enterprise', label: t('packs.categories.enterprise'), icon: '🏢' }
  ]

  const filteredPacks = selectedCategory === 'all' ? packs : packs.filter(pack => {
    if (selectedCategory === 'startup') return ['starter', 'pro'].includes(pack.id)
    if (selectedCategory === 'business') return ['pro', 'premium'].includes(pack.id)
    if (selectedCategory === 'enterprise') return ['premium', 'ultimate'].includes(pack.id)
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('packs.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('packs.subtitle')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">48h</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Démarrage moyen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Taux de satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <motion.button
            onClick={() => setShowComparison(!showComparison)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold"
          >
            📊 {t('packs.comparison.button')}
          </motion.button>
          
          {items.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg"
            >
              🛒 Panier: ₪ {getTotalPrice().toLocaleString()} ({items.length} item{items.length > 1 ? 's' : ''})
            </motion.div>
          )}
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {t('packs.comparison.title')}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                        Fonctionnalités
                      </th>
                      {packs.map((pack) => (
                        <th key={pack.id} className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">
                          {pack.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, idx) => (
                      <tr key={idx} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{feature}</td>
                        {packs.map((pack) => (
                          <td key={pack.id} className="text-center py-3 px-4">
                            <span className="text-green-500 text-xl">
                              {pack.servicesIncluded.some(service => 
                                service.toLowerCase().includes(feature.toLowerCase().split(' ')[0])
                              ) ? '✓' : '—'}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredPacks.map((pack, index) => (
            <PackCard key={pack.id} pack={pack} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Pourquoi choisir Web Yarden ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Livraison Express</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Démarrage sous 48h, livraison en 2-4 semaines maximum
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expertise Locale</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Spécialistes du marché israélien et de la culture locale
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Garantie Résultats</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Satisfaction garantie ou remboursement intégral
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pas sûr de votre choix ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Discutons de vos besoins pour trouver la solution parfaite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                📞 Consultation gratuite
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-colors"
              >
                💬 Chat en direct
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
