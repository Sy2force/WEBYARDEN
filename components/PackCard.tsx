'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'

interface Pack {
  id: string
  title: string
  subtitle: string
  price: number
  originalPrice?: number
  servicesIncluded: string[]
  image: string
  badge?: string
  popular?: boolean
  color: string
}

interface PackCardProps {
  pack: Pack
  index: number
}

export default function PackCard({ pack, index }: PackCardProps) {
  const { addItem } = useCartStore()

  const handleAddToPack = () => {
    addItem({
      id: pack.id,
      title: pack.title,
      price: pack.price,
      category: 'Pack',
      description: pack.subtitle,
      delivery: '2-4 semaines',
      image: pack.image
    })
    
    // Show success feedback
    const button = document.getElementById(`pack-btn-${pack.id}`)
    if (button) {
      const originalText = button.textContent
      button.textContent = '✓ Ajouté !'
      button.classList.add('bg-green-600', 'hover:bg-green-700')
      button.classList.remove('bg-gradient-to-r', 'from-indigo-600', 'to-purple-600', 'hover:from-indigo-700', 'hover:to-purple-700')
      
      setTimeout(() => {
        button.textContent = originalText
        button.classList.remove('bg-green-600', 'hover:bg-green-700')
        button.classList.add('bg-gradient-to-r', 'from-indigo-600', 'to-purple-600', 'hover:from-indigo-700', 'hover:to-purple-700')
      }, 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
        pack.popular 
          ? 'border-gradient-to-r from-indigo-500 to-purple-500 ring-2 ring-indigo-500 ring-opacity-50' 
          : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600'
      }`}
    >
      {/* Popular Badge */}
      {pack.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            ⭐ Plus Populaire
          </span>
        </div>
      )}

      {/* Custom Badge */}
      {pack.badge && !pack.popular && (
        <div className="absolute -top-3 -right-3">
          <span className={`${pack.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12`}>
            {pack.badge}
          </span>
        </div>
      )}

      <div className="p-8">
        {/* Pack Image/Icon */}
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 rounded-2xl ${pack.color} flex items-center justify-center shadow-lg`}>
            <img 
              src={pack.image} 
              alt={pack.title}
              className="w-12 h-12 object-contain filter brightness-0 invert"
              onError={(e) => {
                // Fallback to emoji if image fails
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.parentElement!.innerHTML = `<span class="text-3xl">🚀</span>`
              }}
            />
          </div>
        </div>

        {/* Pack Title & Subtitle */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {pack.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {pack.subtitle}
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2">
            {pack.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ₪ {pack.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              ₪ {pack.price.toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Prix tout compris
          </p>
        </div>

        {/* Services Included */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Services inclus :
          </h4>
          <ul className="space-y-3">
            {pack.servicesIncluded.map((service, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.button
          id={`pack-btn-${pack.id}`}
          onClick={handleAddToPack}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-200 transform hover:shadow-xl"
        >
          🚀 Essayer ce pack
        </motion.button>

        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            ✨ Livraison sous 2-4 semaines • Support inclus
          </p>
        </div>
      </div>
    </motion.div>
  )
}
