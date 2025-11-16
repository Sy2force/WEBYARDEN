'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from '@/components/LocalizedText'
import { getFeaturedServices } from '@/data/services'
import Button from '@/components/ui/Button'

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

                  {/* CTA optimisé */}
                  <div className="text-center">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block bg-white hover:bg-primary-50 border-2 border-transparent hover:border-primary-200 rounded-xl p-4 transition-all duration-200"
                      data-testid={`featured-service-link-${service.id}`}
                    >
                      <span className="text-primary-600 group-hover:text-primary-700 font-semibold">
                        {t('home.features.serviceDetails')}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* CTA Section finale optimisée */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.features.ctaTitle')}
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-300 text-indigo-700 dark:text-indigo-300 dark:border-indigo-600 font-bold rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all duration-300"
              data-testid="featured-services-contact-cta"
            >
              <span className="mr-2">💬</span>
              {t('home.features.freeConsultation')}
            </Link>
            
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {t('home.features.responseTime')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}