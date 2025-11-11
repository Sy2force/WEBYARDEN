'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { useTranslations } from '@/components/LocalizedText'

interface Pack {
  id: string
  name: string
  slogan: string
  price: number
  originalPrice?: number
  currency: string
  services: string[]
  icon: string
  badge?: string
  badgeColor?: string
  popular?: boolean
  color: string
  category: 'starter' | 'pro' | 'premium' | 'enterprise'
  delivery: string
  guarantee: string
}

interface PackCardProps {
  pack: Pack
  index?: number
  isHorizontal?: boolean
  isCube?: boolean
}

export default function PackCard({ pack, index = 0, isHorizontal = false, isCube = false }: PackCardProps) {
  const { addItem } = useCartStore()
  const { t } = useTranslations()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToPack = () => {
    addItem({
      id: pack.id,
      image: pack.icon,
      title: pack.name,
      price: pack.price,
      category: 'Pack',
      description: pack.slogan,
      delivery: pack.delivery,
    })
    
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 3000)
  }

  const discountPercentage = pack.originalPrice 
    ? Math.round(((pack.originalPrice - pack.price) / pack.originalPrice) * 100)
    : 0

  // Cube styling for compact grid layout
  if (isCube) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className={`relative group h-72 sm:h-80 lg:h-84 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden cursor-pointer ${
          pack.popular 
            ? 'border-2 border-indigo-500 ring-2 ring-indigo-500/30' 
            : 'border border-gray-200 dark:border-gray-700 hover:border-indigo-300'
        }`}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 opacity-10 ${pack.color}`}></div>
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute -top-1 -right-1 z-10">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              -{discountPercentage}%
            </div>
          </div>
        )}

        {/* Badge */}
        {(pack.badge || pack.popular) && (
          <div className="absolute top-2 left-2 z-10">
            <span className={`${pack.popular ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : pack.color} text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg`}>
              {pack.popular ? `⭐ ${t('packs.popular')}` : pack.badge}
            </span>
          </div>
        )}

        <div className="relative p-4 h-full flex flex-col">
          {/* Icon */}
          <div className="flex justify-center mb-3">
            <div className={`w-12 h-12 rounded-xl ${pack.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <div className="text-2xl">📦</div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center line-clamp-2">
            {pack.name}
          </h3>

          {/* Price */}
          <div className="text-center mb-3">
            {pack.originalPrice && (
              <div className="text-xs text-gray-400 line-through mb-1">
                ₪{pack.originalPrice.toLocaleString()}
              </div>
            )}
            <div className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {pack.price > 0 ? `₪${pack.price.toLocaleString()}` : t('packs.onQuote')}
            </div>
          </div>

          {/* Services (limited) */}
          <div className="flex-1 mb-3">
            <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
              {pack.services && pack.services.slice(0, 3).map((service: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="line-clamp-1">{service}</span>
                </li>
              ))}
              {pack.services && pack.services.length > 3 && (
                <li className="text-indigo-600 font-medium">+{pack.services.length - 3} {t('packs.otherServices')}</li>
              )}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleAddToPack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isAdded}
            className={`w-full font-bold py-2 px-4 rounded-xl text-sm shadow-lg transition-all duration-300 ${
              isAdded
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
            }`}
          >
            {isAdded ? `✓ ${t('packs.added')}` : `🚀 ${t('packs.choose')}`}
          </motion.button>
        </div>
      </motion.div>
    )
  }

  // Horizontal styling for scroll layout
  if (isHorizontal) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative group w-80 h-96 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 overflow-hidden flex-shrink-0 ${
          pack.popular 
            ? 'border-2 border-indigo-500 ring-4 ring-indigo-500/20 scale-105' 
            : 'border border-gray-200 dark:border-gray-700 hover:border-indigo-300'
        }`}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 opacity-5 ${pack.color}`}></div>
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
              -{discountPercentage}%
            </div>
          </div>
        )}

        {/* Popular Badge */}
        {pack.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
              ⭐ {t('packs.popular')}
            </div>
          </div>
        )}

        {/* Custom Badge */}
        {pack.badge && !pack.popular && (
          <div className="absolute -top-3 -right-3 z-10">
            <span className={`${pack.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl transform rotate-12`}>
              {pack.badge}
            </span>
          </div>
        )}

        <div className="relative p-6 h-full flex flex-col">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 rounded-2xl ${pack.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
              <div className="text-3xl">📦</div>
            </div>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {pack.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {pack.slogan}
          </p>

          {/* Pricing */}
          <div className="text-center mb-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            {pack.originalPrice && (
              <div className="text-sm text-gray-400 line-through mb-1">
                ₪{pack.originalPrice.toLocaleString()}
              </div>
            )}
            <div className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ₪{pack.price.toLocaleString()}
            </div>
          </div>

          {/* Services (limited) */}
          <div className="flex-1 mb-4">
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {pack.services && pack.services.slice(0, 4).map((service: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="line-clamp-1">{service}</span>
                </li>
              ))}
              {pack.services && pack.services.length > 4 && (
                <li className="text-indigo-600 font-medium text-center mt-2">
                  +{pack.services.length - 4} {t('packs.otherServices')}
                </li>
              )}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleAddToPack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isAdded}
            className={`w-full font-bold py-3 px-6 rounded-xl shadow-xl transition-all duration-300 ${
              isAdded
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
            }`}
          >
            {isAdded ? `✓ ${t('packs.addedToCart')}` : `🚀 ${t('packs.choosePack')}`}
          </motion.button>
        </div>
      </motion.div>
    )
  }

  // Default vertical layout
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 overflow-hidden ${
        pack.popular 
          ? 'border-2 border-gradient-to-r from-indigo-500 to-purple-500 ring-4 ring-indigo-500/20 scale-105' 
          : 'border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600'
      }`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 opacity-5 ${pack.color}`}></div>
      
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
            -{discountPercentage}%
          </div>
        </div>
      )}

      {/* Popular Badge */}
      {pack.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
            <span className="flex items-center gap-1">
              ⭐ {t('packs.popular')}
            </span>
          </div>
        </div>
      )}

      {/* Custom Badge */}
      {pack.badge && !pack.popular && (
        <div className="absolute -top-3 -right-3 z-10">
          <span className={`${pack.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl transform rotate-12`}>
            {pack.badge}
          </span>
        </div>
      )}

      <div className="relative p-8 h-full flex flex-col">
        {/* Pack Header */}
        <div className="text-center mb-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className={`w-24 h-24 rounded-3xl ${pack.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
              <div className="relative w-14 h-14">
                <Image 
                  src={pack.icon} 
                  alt={pack.name}
                  width={56}
                  height={56}
                  className="object-contain filter brightness-0 invert"
                  onError={() => {
                    // Fallback handled by Next.js Image component
                  }}
                />
              </div>
            </div>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {pack.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {pack.slogan}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-8 bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
          {pack.originalPrice && (
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-lg text-gray-400 line-through font-medium">
                ₪{pack.originalPrice.toLocaleString()}
              </span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold">
                {t('packs.save')} ₪{(pack.originalPrice - pack.price).toLocaleString()}
              </span>
            </div>
          )}
          
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">₪</span>
            <span className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {pack.price.toLocaleString()}
            </span>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {t('packs.pricing.oneTime')}
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="flex-1 mb-8">
          <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-center border-b border-gray-200 dark:border-gray-600 pb-2">
            {t('packs.servicesIncluded')}
          </h4>
          <ul className="space-y-3">
            {pack.services.map((service: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 group/item">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed group-hover/item:text-indigo-600 transition-colors">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <motion.button
            onClick={handleAddToPack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isAdded}
            className={`w-full font-bold py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 transform ${
              isAdded
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:shadow-2xl'
            }`}
          >
            {isAdded ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('packs.added')}
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                🚀 {t('packs.cta')}
              </span>
            )}
          </motion.button>
          
          <button className="w-full text-indigo-600 dark:text-indigo-400 font-semibold py-3 px-6 border-2 border-indigo-200 dark:border-indigo-800 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            📞 {t('packs.consultation')}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              ⚡ {t('packs.delivery')}
            </span>
            <span className="flex items-center gap-1">
              🛡️ {t('packs.guarantee')}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
