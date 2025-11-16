'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import { packs, packCategories, getPacksByCategory } from '@/lib/data/packs'
import HeroSection from '@/components/sections/HeroSection'
import CTASection from '@/components/sections/CTASection'
import StatsSection from '@/components/sections/StatsSection'
import PackCard from '@/components/sections/PackCard'
import Button from '@/components/ui/Button'

export default function PacksPageClient() {
  const { t } = useTranslations()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showComparison, setShowComparison] = useState(false)

  // Filter packs by selected category
  const filteredPacks = getPacksByCategory(selectedCategory)

  // Popular packs for highlighting
  const popularPacks = packs.filter(pack => pack.popular || pack.bestValue || pack.recommended)

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={t('packs.hero.title')}
        subtitle={t('packs.hero.subtitle')}
        badge={t('packs.hero.badge')}
        backgroundGradient={true}
      />

      {/* Stats Section */}
      <StatsSection 
        stats={[
          { icon: '📦', value: '6+', label: t('packs.stats.offerings'), description: t('packs.stats.offeringsDesc') },
          { icon: '⭐', value: '98%', label: t('packs.stats.satisfaction'), description: t('packs.stats.satisfactionDesc') },
          { icon: '⚡', value: '1-16', label: t('packs.stats.delivery'), description: t('packs.stats.deliveryDesc') },
          { icon: '🛠️', value: '24/7', label: t('packs.stats.support'), description: t('packs.stats.supportDesc') }
        ]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Category Filters - Mobile First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {packCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2 text-sm"
            >
              <span className="text-base">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
            </Button>
          ))}
        </motion.div>

        {/* Comparison Toggle */}
        <div className="text-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center gap-2 mx-auto"
          >
            <span>📊</span>
            {t('packs.comparison.toggle')}
          </Button>
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {t('packs.comparison.title')}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {t('packs.comparison.featuresLabel')}
                      </th>
                      {popularPacks.slice(0, 3).map((pack) => (
                        <th key={pack.id} className="text-center py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {pack.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      t('packs.comparison.features.responsive'),
                      t('packs.comparison.features.seo'), 
                      t('packs.comparison.features.support'),
                      t('packs.comparison.features.ecommerce'),
                      t('packs.comparison.features.mobile'),
                      t('packs.comparison.features.analytics')
                    ].map((feature, idx) => (
                      <tr key={idx} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-2 px-2 sm:py-3 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{feature}</td>
                        {popularPacks.slice(0, 3).map((pack) => (
                          <td key={pack.id} className="text-center py-2 px-2 sm:py-3 sm:px-4">
                            <span className="text-green-500 text-lg sm:text-xl">✓</span>
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

        {/* Packs Grid - Mobile-first responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredPacks.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1
              }}
              className="h-full"
              data-testid={`pack-card-${pack.id}`}
            >
              <PackCard pack={pack} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPacks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('packs.empty.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('packs.empty.description')}
            </p>
            <Button
              variant="primary"
              onClick={() => setSelectedCategory('all')}
            >
              {t('packs.empty.viewAll')}
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <CTASection
        title={t('packs.cta.title')}
        subtitle={t('packs.cta.subtitle')}
        primaryCta={{
          text: t('packs.cta.primary'),
          href: '/contact'
        }}
        secondaryCta={{
          text: t('packs.cta.secondary'),
          href: '/services'
        }}
      />
    </>
  )
}
