'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { services } from '@/data/services'
import { useTranslations } from '@/components/LocalizedText'

export default function StickySimulator() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [budget, setBudget] = useState('')
  const [timeline, setTimeline] = useState('')
  const [estimatedPrice, setEstimatedPrice] = useState(0)
  const { addItem } = useCartStore()
  const { t } = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 300) // Show after scrolling 300px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (selectedService && budget && timeline) {
      const service = services.find(s => s.id === selectedService)
      if (service) {
        const budgetMultiplier = {
          '5000-10000': 0.8,
          '10000-25000': 1.0,
          '25000-50000': 1.3,
          '50000+': 1.6
        }[budget] || 1.0

        const timelineMultiplier = {
          'urgent': 1.4,
          'normal': 1.0,
          'flexible': 0.9
        }[timeline] || 1.0

        setEstimatedPrice(Math.round(service.price * budgetMultiplier * timelineMultiplier))
      }
    }
  }, [selectedService, budget, timeline])

  const handleAddToCart = () => {
    const service = services.find(s => s.id === selectedService)
    if (service && estimatedPrice > 0) {
      addItem({
        id: service.id,
        title: t(service.titleKey),
        price: estimatedPrice,
        category: service.category,
        description: t(service.descriptionKey),
        delivery: service.delivery,
        image: service.image
      })
      
      // Reset form
      setSelectedService('')
      setBudget('')
      setTimeline('')
      setEstimatedPrice(0)
      setIsOpen(false)
      
      // Show success message
      alert(t('simulator.successMessage'))
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Sticky Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={t('simulator.openLabel')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </motion.button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
          {t('simulator.tooltip')}
        </div>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('simulator.title')}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label={t('simulator.closeLabel')}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <div className="space-y-4">
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('simulator.service')}
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    title="Sélectionnez un service"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">{t('simulator.selectService')}</option>
                    {services.slice(0, 10).map((service) => (
                      <option key={service.id} value={service.id}>
                        {t(service.titleKey)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('simulator.budget')}
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    title="Sélectionnez votre budget"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">{t('simulator.selectService')}</option>
                    <option value="5000-10000">5 000 - 10 000 ₪</option>
                    <option value="10000-25000">10 000 - 25 000 ₪</option>
                    <option value="25000-50000">25 000 - 50 000 ₪</option>
                    <option value="50000+">50 000+ ₪</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('simulator.timeline')}
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    title="Sélectionnez un délai"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">{t('simulator.timeline')}</option>
                    <option value="urgent">{t('simulator.urgent')}</option>
                    <option value="normal">{t('simulator.normal')}</option>
                    <option value="flexible">{t('simulator.flexible')}</option>
                  </select>
                </div>

                {/* Estimated Price */}
                {estimatedPrice > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700"
                  >
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t('simulator.estimate')} :</div>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        ₪ {estimatedPrice.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        *Prix indicatif, devis final après consultation
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {t('buttons.cancel')}
                  </button>
                  <button
                    onClick={handleAddToCart}
                    disabled={!selectedService || !budget || !timeline}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {t('simulator.addToCart')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
