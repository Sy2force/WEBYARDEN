'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import { useCartStore } from '@/store/cartStore'
import { Calculator, X, Plus, Minus } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function StickySimulator() {
  const { t } = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [budget, setBudget] = useState(5000)
  const [timeline, setTimeline] = useState('3-6')
  const [services, setServices] = useState<string[]>([])
  const { addItem } = useCartStore()

  const budgetRanges = [
    { value: 2500, label: '€2,500 - €5,000', color: 'bg-blue-100 text-blue-800' },
    { value: 5000, label: '€5,000 - €10,000', color: 'bg-green-100 text-green-800' },
    { value: 10000, label: '€10,000 - €25,000', color: 'bg-yellow-100 text-yellow-800' },
    { value: 25000, label: '€25,000+', color: 'bg-purple-100 text-purple-800' }
  ]

  const timelineOptions = [
    { value: '1-2', label: t('simulator.timeline.urgent') },
    { value: '3-6', label: t('simulator.timeline.normal') },
    { value: '6-12', label: t('simulator.timeline.extended') }
  ]

  const serviceOptions = [
    { id: 'website', label: t('simulator.services.website'), price: 2500 },
    { id: 'ecommerce', label: t('simulator.services.ecommerce'), price: 5000 },
    { id: 'mobile', label: t('simulator.services.mobile'), price: 7500 },
    { id: 'seo', label: t('simulator.services.seo'), price: 1500 },
    { id: 'marketing', label: t('simulator.services.marketing'), price: 2000 }
  ]

  const toggleService = (serviceId: string) => {
    setServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    )
  }

  const calculateTotal = () => {
    return services.reduce((total, serviceId) => {
      const service = serviceOptions.find(s => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)
  }

  const handleGenerate = () => {
    const selectedServices = serviceOptions.filter(s => services.includes(s.id))
    selectedServices.forEach(service => {
      addItem({
        id: service.id,
        title: service.label,
        price: service.price,
        category: 'simulation',
        description: `Service simulé avec budget ${budget}€ et délai ${timeline} mois`,
        delivery: `${timeline} mois`,
        image: '/images/services/default.jpg'
      })
    })
    setIsOpen(false)
    setStep(1)
    setServices([])
  }

  return (
    <>
      {/* Sticky Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full shadow-booking hover:shadow-xl p-4"
          aria-label={t('simulator.open')}
        >
          <Calculator className="w-6 h-6 mr-2" />
          {t('simulator.title')}
        </Button>
      </motion.div>

      {/* Modal */}
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('simulator.title')}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  title={t('common.close')}
                  aria-label={t('common.close')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {/* Step 1: Budget */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        {t('simulator.step1.title')}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {budgetRanges.map((range) => (
                          <button
                            key={range.value}
                            onClick={() => setBudget(range.value)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              budget === range.value
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                            }`}
                          >
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${range.color}`}>
                              {range.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <Button onClick={() => setStep(2)} size="lg" className="w-full">
                      {t('common.next')}
                    </Button>
                  </div>
                )}

                {/* Step 2: Timeline */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        {t('simulator.step2.title')}
                      </h3>
                      <div className="space-y-3">
                        {timelineOptions.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-primary-300 transition-colors"
                          >
                            <input
                              type="radio"
                              name="timeline"
                              value={option.value}
                              checked={timeline === option.value}
                              onChange={(e) => setTimeline(e.target.value)}
                              className="mr-4 text-primary-600"
                            />
                            <span className="text-gray-900 dark:text-white font-medium">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                        {t('common.back')}
                      </Button>
                      <Button onClick={() => setStep(3)} className="flex-1">
                        {t('common.next')}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Services */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        {t('simulator.step3.title')}
                      </h3>
                      <div className="space-y-3">
                        {serviceOptions.map((service) => (
                          <label
                            key={service.id}
                            className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-primary-300 transition-colors"
                          >
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                checked={services.includes(service.id)}
                                onChange={() => toggleService(service.id)}
                                className="mr-4 text-primary-600"
                              />
                              <span className="text-gray-900 dark:text-white font-medium">
                                {service.label}
                              </span>
                            </div>
                            <span className="text-primary-600 font-bold">
                              €{service.price.toLocaleString()}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Total */}
                    {services.length > 0 && (
                      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-gray-900 dark:text-white">
                            {t('simulator.total')}:
                          </span>
                          <span className="text-2xl font-bold text-primary-600">
                            €{calculateTotal().toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-4">
                      <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                        {t('common.back')}
                      </Button>
                      <Button 
                        onClick={handleGenerate} 
                        className="flex-1"
                        disabled={services.length === 0}
                      >
                        {t('simulator.generate')}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
