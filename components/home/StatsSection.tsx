'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'

interface Stat {
  number: string
  label: string
  icon: string
}

const getStats = (t: any): Stat[] => [
  {
    number: '150+',
    label: t('stats.projects'),
    icon: '🚀'
  },
  {
    number: '98%',
    label: t('stats.clients'),
    icon: '⭐'
  },
  {
    number: '5+',
    label: t('stats.experience'),
    icon: '🏆'
  },
  {
    number: '24/7',
    label: t('stats.support'),
    icon: '🛡️'
  }
]

export default function StatsSection() {
  const { t } = useTranslations()
  const stats = getStats(t)
  
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {t('stats.title') || 'Nos Résultats Parlent d\'Eux-Mêmes'}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {t('stats.subtitle') || 'Des chiffres qui témoignent de notre expertise et de notre engagement envers nos clients'}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 rounded-2xl flex items-center justify-center text-3xl lg:text-4xl mb-6 mx-auto backdrop-blur-sm border border-white/20 group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-3">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-base lg:text-xl text-blue-100 font-semibold group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <span className="text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">
              🎯 {t('stats.goal') || 'Objectif : Votre succès digital'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}