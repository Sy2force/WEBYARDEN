'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from '@/components/LocalizedText'
import { getFeaturedServices } from '@/data/services'

export default function FeaturedServices() {
  const { t } = useTranslations()
  const featuredServices = getFeaturedServices()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('home.features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => {
            const gradients = [
              'from-blue-500 to-purple-600',
              'from-green-500 to-teal-600',
              'from-pink-500 to-rose-600',
              'from-orange-500 to-red-600',
              'from-indigo-500 to-blue-600',
              'from-purple-500 to-pink-600'
            ]
            
            const icons = ['💻', '🛒', '🎨', '📱', '🚀', '🧠']
            
            return (
              <div key={service.id} className="group bg-white p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-indigo-200">
                {/* Service Image/Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-2xl flex items-center justify-center text-white text-3xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {icons[index % icons.length]}
                  </div>
                  {service.popular && (
                    <div className="absolute -top-2 -right-2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        🔥 HOT
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>
                  
                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="text-2xl lg:text-3xl font-black text-indigo-600 mb-1">
                      ₪{service.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t('services.startingFrom')}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="mr-2">🚀</span>
                    {t('buttons.learnMore')}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {t('buttons.viewAll')} {t('common.services')}
          </Link>
        </div>
      </div>
    </section>
  )
}