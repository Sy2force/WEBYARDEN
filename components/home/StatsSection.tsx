'use client'

import React from 'react'
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
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('stats.title') || 'Nos Résultats Parlent d\'Eux-Mêmes'}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('stats.subtitle') || 'Des chiffres qui témoignent de notre expertise et de notre engagement envers nos clients'}
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl lg:text-3xl mb-4 mx-auto backdrop-blur-sm">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-lg text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
            <span className="text-white font-medium">
              🎯 {t('stats.goal') || 'Objectif : Votre succès digital'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}