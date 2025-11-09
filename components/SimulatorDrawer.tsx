'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Service } from '@/data/services'
import { useCartStore } from '@/store/cartStore'

interface SimulatorDrawerProps {
  service: Service
  isOpen: boolean
  onClose: () => void
}

interface SimulatorData {
  name: string
  email: string
  company: string
  budget: string
  timeline: string
  description: string
  options: Record<string, boolean>
}

export default function SimulatorDrawer({ service, isOpen, onClose }: SimulatorDrawerProps) {
  const addItem = useCartStore((state) => state.addItem)
  
  const [simulatorData, setSimulatorData] = useState<SimulatorData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    description: '',
    options: {}
  })

  const serviceOptions = {
    'premium-design': { name: 'Design Premium', price: 2000 },
    'seo-boost': { name: 'Pack SEO Avancé', price: 1500 },
    'maintenance-1year': { name: 'Maintenance 1 an', price: 3600 },
    'analytics-pro': { name: 'Analytics Pro', price: 800 },
    'multilingual': { name: 'Site Multilingue', price: 2500 },
    'ecommerce-addon': { name: 'Module E-commerce', price: 5000 }
  }

  const budgetMultipliers = {
    '5000-10000': 0.8,
    '10000-25000': 1.0,
    '25000-50000': 1.3,
    '50000+': 1.6
  }

  const timelineMultipliers = {
    'urgent': 1.4,
    'normal': 1.0,
    'flexible': 0.9
  }

  const calculateEstimate = () => {
    let basePrice = service.price
    
    // Add selected options
    const optionsPrice = Object.entries(simulatorData.options)
      .filter(([_, selected]) => selected)
      .reduce((total, [optionKey]) => {
        const option = serviceOptions[optionKey as keyof typeof serviceOptions]
        return total + (option?.price || 0)
      }, 0)

    // Apply multipliers
    const budgetMultiplier = budgetMultipliers[simulatorData.budget as keyof typeof budgetMultipliers] || 1.0
    const timelineMultiplier = timelineMultipliers[simulatorData.timeline as keyof typeof timelineMultipliers] || 1.0

    return Math.round((basePrice + optionsPrice) * budgetMultiplier * timelineMultiplier)
  }

  const handleOptionChange = (optionKey: string) => {
    setSimulatorData(prev => ({
      ...prev,
      options: {
        ...prev.options,
        [optionKey]: !prev.options[optionKey]
      }
    }))
  }

  const handleAddToCart = () => {
    const estimatedPrice = calculateEstimate()
    addItem({
      id: `${service.id}-custom`,
      title: `${service.title} (Personnalisé)`,
      price: estimatedPrice,
      category: service.category,
      description: service.description,
      delivery: service.delivery,
      image: service.image
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Simulateur de Devis</h2>
                <p className="text-gray-600">{service.title}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Fermer le simulateur"
                aria-label="Fermer le simulateur de devis"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Form */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={simulatorData.name}
                        onChange={(e) => setSimulatorData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={simulatorData.email}
                        onChange={(e) => setSimulatorData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      value={simulatorData.company}
                      onChange={(e) => setSimulatorData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget estimé (₪)
                      </label>
                      <select
                        value={simulatorData.budget}
                        onChange={(e) => setSimulatorData(prev => ({ ...prev, budget: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        title="Sélectionner le budget"
                        aria-label="Sélectionner votre budget estimé"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="5000-10000">₪ 5,000 - 10,000</option>
                        <option value="10000-25000">₪ 10,000 - 25,000</option>
                        <option value="25000-50000">₪ 25,000 - 50,000</option>
                        <option value="50000+">₪ 50,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Délai souhaité
                      </label>
                      <select
                        value={simulatorData.timeline}
                        onChange={(e) => setSimulatorData(prev => ({ ...prev, timeline: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        title="Sélectionner le délai"
                        aria-label="Sélectionner votre délai souhaité"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="urgent">Urgent (2-4 semaines)</option>
                        <option value="normal">Normal (1-3 mois)</option>
                        <option value="flexible">Flexible (3+ mois)</option>
                      </select>
                    </div>
                  </div>

                  {/* Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Options supplémentaires
                    </label>
                    <div className="space-y-3">
                      {Object.entries(serviceOptions).map(([key, option]) => (
                        <label key={key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={simulatorData.options[key] || false}
                              onChange={() => handleOptionChange(key)}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <span className="ml-3 text-sm font-medium text-gray-900">
                              {option.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-indigo-600">
                            +₪ {option.price.toLocaleString()}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description du projet
                    </label>
                    <textarea
                      value={simulatorData.description}
                      onChange={(e) => setSimulatorData(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Décrivez votre projet en détail..."
                    />
                  </div>
                </div>

                {/* Right Column - Estimate */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 h-fit">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Estimation Instantanée</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                      <span className="text-gray-600">Service de base:</span>
                      <span className="font-semibold">₪ {service.price.toLocaleString()}</span>
                    </div>
                    
                    {Object.entries(simulatorData.options)
                      .filter(([_, selected]) => selected)
                      .map(([optionKey, _]) => {
                        const option = serviceOptions[optionKey as keyof typeof serviceOptions]
                        return option ? (
                          <div key={optionKey} className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                            <span className="text-gray-600">{option.name}:</span>
                            <span className="font-semibold text-blue-600">+₪ {option.price.toLocaleString()}</span>
                          </div>
                        ) : null
                      })}
                    
                    {simulatorData.budget && (
                      <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                        <span className="text-gray-600">Ajustement budget:</span>
                        <span className="font-semibold text-blue-600">
                          {((budgetMultipliers[simulatorData.budget as keyof typeof budgetMultipliers] || 1) - 1) > 0 ? '+' : ''}
                          {(((budgetMultipliers[simulatorData.budget as keyof typeof budgetMultipliers] || 1) - 1) * 100).toFixed(0)}%
                        </span>
                      </div>
                    )}
                    
                    {simulatorData.timeline && (
                      <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                        <span className="text-gray-600">Ajustement délai:</span>
                        <span className="font-semibold text-orange-600">
                          {((timelineMultipliers[simulatorData.timeline as keyof typeof timelineMultipliers] || 1) - 1) > 0 ? '+' : ''}
                          {(((timelineMultipliers[simulatorData.timeline as keyof typeof timelineMultipliers] || 1) - 1) * 100).toFixed(0)}%
                        </span>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-300 pt-4">
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span>Estimation totale:</span>
                        <span className="text-green-600">₪ {calculateEstimate().toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        *Estimation indicative. Devis final après consultation.
                      </p>
                    </div>
                  </div>

                  {/* Features Included */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">✅ Inclus dans ce service:</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-end space-x-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAddToCart}
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
