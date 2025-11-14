'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Service } from '@/data/services'
import { useCartStore } from '@/store/cartStore'
import { useTranslations } from '@/components/LocalizedText'

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const { t } = useTranslations()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: service.id,
      title: service.title,
      price: service.price,
      category: service.category,
      description: service.description,
      delivery: service.delivery,
      image: service.image
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200"
    >
      <Link href={`/services/${service.slug}`} className="block">
        {/* Service Image */}
        <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          
          {/* Badge */}
          {service.badge && (
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              {service.badge}
            </div>
          )}
          
          {/* Category Icon */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/20 backdrop-blur-sm text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Service Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {service.title}
            </h3>
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-3 mb-6">
            {service.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center group/feature">
                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mr-3 group-hover/feature:from-green-200 group-hover/feature:to-emerald-200 transition-all duration-200">
                  <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-medium group-hover/feature:text-gray-900 transition-colors duration-200">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Price and Duration */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">{t('services.price')}</p>
                <p className="text-xl font-bold text-indigo-600">
                  ₪ {service.price.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('services.delivery')}</p>
                <p className="text-lg font-semibold text-gray-900">
                  {service.delivery}
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
              >
                {t('simulator.addToCart')}
              </button>
              <button className="px-4 py-3 border border-indigo-200 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-sm">
                {t('simulator.simulate')}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}