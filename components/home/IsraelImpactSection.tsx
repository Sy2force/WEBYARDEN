'use client'


import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from '@/components/LocalizedText'

export default function IsraelImpactSection() {
  const { t } = useTranslations()

  const achievements = [
    {
      iconKey: 'home.israel.achievements.startups.icon',
      titleKey: 'home.israel.achievements.startups.title',
      descriptionKey: 'home.israel.achievements.startups.description',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      iconKey: 'home.israel.achievements.ecommerce.icon',
      titleKey: 'home.israel.achievements.ecommerce.title',
      descriptionKey: 'home.israel.achievements.ecommerce.description',
      color: 'from-purple-500 to-pink-500'
    },
    {
      iconKey: 'home.israel.achievements.growth.icon',
      titleKey: 'home.israel.achievements.growth.title',
      descriptionKey: 'home.israel.achievements.growth.description',
      color: 'from-green-500 to-emerald-500'
    },
    {
      iconKey: 'home.israel.achievements.tech.icon',
      titleKey: 'home.israel.achievements.tech.title',
      descriptionKey: 'home.israel.achievements.tech.description',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('home.israel.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('home.israel.subtitle')}
          </motion.p>
          <motion.div 
            className="flex items-center justify-center space-x-2 text-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl">🇮🇱</span>
            <span className="font-bold text-blue-100">Nation Startup</span>
            <span className="text-4xl">🚀</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`israel-impact-${index}`}
            >
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-110`}>
                <span className="text-3xl">{t(achievement.iconKey)}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t(achievement.titleKey)}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {t(achievement.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Local Market Focus */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                {t('home.israel.localFocus.title')}
              </h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                {t('home.israel.localFocus.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">{t('home.israel.localFocus.feature1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">{t('home.israel.localFocus.feature2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">{t('home.israel.localFocus.feature3')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">{t('home.israel.localFocus.feature4')}</span>
                </div>
              </div>
              {/* CTA optimisés pour l'impact israélien */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/packs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 font-bold rounded-xl shadow-2xl hover:shadow-green-400/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span className="mr-2">🚀</span>
                  {t('home.features.viewPacks')}
                  <span className="ml-2 text-xs bg-gray-900/20 px-2 py-1 rounded-full">
                    {t('home.mission.cta.priceFrom')}
                  </span>
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  <span className="mr-2">💬</span>
                  {t('home.israel.localFocus.cta')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              
              <div className="mt-4 text-sm text-blue-100/80">
                🏆 500+ startups israéliennes nous font confiance • ⚡ Support en hébreu
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-8xl">🇮🇱</span>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
