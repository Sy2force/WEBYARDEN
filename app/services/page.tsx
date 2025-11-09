'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from '@/lib/i18n'

export default function Services() {
  const { t } = useTranslations()

  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  })

  const services = [
    {
      key: 'webDev',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      gradient: 'from-blue-500 to-purple-600',
      badge: '⭐ Populaire',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfOV8xKSIvPgo8cGF0aCBkPSJNMTUwIDEwMEgyNTBWMTUwSDE1MFYxMDBaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz4KPHA+PC9zdmc+',
      basePrice: 8000,
      priceRange: '8,000 - 25,000',
      rating: 4.9
    },
    {
      key: 'ecommerce',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-600',
      badge: '💰 Premium',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTBfMSkiLz4KPHA+PC9zdmc+',
      basePrice: 15000,
      priceRange: '15,000 - 40,000',
      rating: 4.8
    },
    {
      key: 'seo',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-600',
      badge: '🚀 Boost',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTFfMSkiLz4KPHA+PC9zdmc+',
      basePrice: 3500,
      priceRange: '3,500 - 8,000',
      rating: 4.7
    },
    {
      key: 'webApp',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-indigo-600',
      badge: '⚡ Pro',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTJfMSkiLz4KPHA+PC9zdmc+',
      basePrice: 20000,
      priceRange: '20,000 - 60,000',
      rating: 4.9
    },
    {
      key: 'maintenance',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-600',
      badge: '🛡️ Support',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTNfMSkiLz4KPHA+PC9zdmc+',
      basePrice: 800,
      priceRange: '800 - 2,500',
      rating: 5.0
    },
    {
      key: 'consulting',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-600',
      badge: '🧠 Expert',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTRfMSkiLz4KPHA+PC9zdmc+',
      basePrice: 5000,
      priceRange: '5,000 - 15,000',
      rating: 4.8
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              {t('services.title')}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Service Image */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-blue-600">
                  <Image 
                    src={service.image} 
                    alt={String(t(`services.${service.key}.title`))}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  {service.badge && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.badge}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {String(t(`services.${service.key}.title`))}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {String(t(`services.${service.key}.description`))}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {(() => {
                      const features = t(`services.${service.key}.features`);
                      if (Array.isArray(features)) {
                        return features.slice(0, 3).map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="flex-shrink-0 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="h-2 w-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ));
                      }
                      return null;
                    })()}
                  </ul>

                  {/* Price and Duration */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Prix</p>
                        <p className="text-xl font-bold text-indigo-600">
                          {String(t(`services.${service.key}.price`))}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Durée</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {String(t(`services.${service.key}.duration`))}
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedService(service.key)}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Obtenir un devis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Web Yarden en chiffres
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Notre expertise au service de votre succès
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5 ans</div>
              <div className="text-gray-600">D'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Support technique</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Prêt à transformer votre présence digitale ?
          </h2>
          <p className="text-xl leading-6 text-indigo-200 mb-10">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
            >
              {t('common.contact')}
            </a>
            <a
              href="/devis"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              {t('header.getQuote')}
            </a>
          </div>
        </div>
      </section>

      {/* Quote Simulator Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Simulateur de Devis</h2>
                  <p className="text-gray-600">
                    Service: {String(t(`services.${selectedService}.title`))}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Fermer le simulateur de devis"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Quote Form */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Form */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={quoteData.name}
                        onChange={(e) => setQuoteData({...quoteData, name: e.target.value})}
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
                        value={quoteData.email}
                        onChange={(e) => setQuoteData({...quoteData, email: e.target.value})}
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
                      value={quoteData.company}
                      onChange={(e) => setQuoteData({...quoteData, company: e.target.value})}
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
                        value={quoteData.budget}
                        onChange={(e) => setQuoteData({...quoteData, budget: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        aria-label="Sélectionner le budget estimé"
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
                        value={quoteData.timeline}
                        onChange={(e) => setQuoteData({...quoteData, timeline: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        aria-label="Sélectionner le délai souhaité"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="urgent">Urgent (2-4 semaines)</option>
                        <option value="normal">Normal (1-3 mois)</option>
                        <option value="flexible">Flexible (3+ mois)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description du projet
                    </label>
                    <textarea
                      value={quoteData.description}
                      onChange={(e) => setQuoteData({...quoteData, description: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Décrivez votre projet en détail..."
                    />
                  </div>
                </div>

                {/* Right Column - Estimate */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Estimation Instantanée</h3>
                  
                  {(() => {
                    const service = services.find(s => s.key === selectedService);
                    const budgetMultiplier = {
                      '5000-10000': 0.8,
                      '10000-25000': 1.0,
                      '25000-50000': 1.3,
                      '50000+': 1.6
                    }[quoteData.budget] || 1.0;
                    
                    const timelineMultiplier = {
                      'urgent': 1.4,
                      'normal': 1.0,
                      'flexible': 0.9
                    }[quoteData.timeline] || 1.0;
                    
                    const estimatedPrice = service ? Math.round(service.basePrice * budgetMultiplier * timelineMultiplier) : 0;
                    
                    return (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                          <span className="text-gray-600">Service de base:</span>
                          <span className="font-semibold">₪ {service?.basePrice.toLocaleString()}</span>
                        </div>
                        
                        {quoteData.budget && (
                          <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                            <span className="text-gray-600">Ajustement budget:</span>
                            <span className="font-semibold text-blue-600">
                              {budgetMultiplier > 1 ? '+' : ''}{((budgetMultiplier - 1) * 100).toFixed(0)}%
                            </span>
                          </div>
                        )}
                        
                        {quoteData.timeline && (
                          <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                            <span className="text-gray-600">Ajustement délai:</span>
                            <span className="font-semibold text-orange-600">
                              {timelineMultiplier > 1 ? '+' : ''}{((timelineMultiplier - 1) * 100).toFixed(0)}%
                            </span>
                          </div>
                        )}
                        
                        <div className="border-t border-gray-300 pt-4">
                          <div className="flex justify-between items-center text-xl font-bold">
                            <span>Estimation totale:</span>
                            <span className="text-green-600">₪ {estimatedPrice.toLocaleString()}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            *Estimation indicative. Devis final après consultation.
                          </p>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Features Included */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">✅ Inclus dans ce service:</h4>
                    <div className="space-y-2">
                      {(() => {
                        const features = t(`services.${selectedService}.features`);
                        if (Array.isArray(features)) {
                          return features.slice(0, 4).map((feature: string, index: number) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ));
                        }
                        return null;
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                >
                  Annuler
                </button>
                <button
                  onClick={() => {
                    // Handle quote submission
                    alert('Devis envoyé! Nous vous contacterons sous 24h.');
                    setSelectedService(null);
                    setQuoteData({
                      name: '',
                      email: '',
                      company: '',
                      service: '',
                      budget: '',
                      timeline: '',
                      description: ''
                    });
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg"
                >
                  Envoyer le Devis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
