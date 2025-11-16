'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import Button from '@/components/ui/Button'

export default function MissionSection() {
  const { t } = useTranslations()

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('home.mission.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('home.mission.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Vision */}
          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.mission.vision.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('home.mission.vision.description')}
            </p>
          </motion.div>

          {/* Values */}
          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-3xl">💎</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.mission.values.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('home.mission.values.description')}
            </p>
          </motion.div>

          {/* Promise */}
          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-accent-400 to-secondary-400 hover:from-accent-500 hover:to-secondary-500 shadow-booking hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="mission-start-project"
            >
              <span className="text-3xl">🎯</span>
            </Button>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.mission.promise.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('home.mission.promise.description')}
            </p>
          </motion.div>
        </div>

        {/* CTA Section dans Mission */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('home.mission.cta.title')}
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              {t('home.mission.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/packs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span className="mr-2">🚀</span>
                {t('home.mission.cta.packsButton')}
                <span className="ml-2 text-sm bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                  {t('home.mission.cta.priceFrom')}
                </span>
              </motion.a>
              
              <Button
                href="/about"
                variant="outline"
                size="lg"
                className="group border-2 border-white text-white hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
                data-testid="mission-learn-more"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0021.485 3.188"/>
                </svg>
                {t('home.mission.cta.whatsappButton')}
              </Button>
            </div>
            
            <div className="mt-6 text-sm opacity-75">
              {t('home.mission.cta.trustSignals')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
