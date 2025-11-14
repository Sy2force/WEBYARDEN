'use client'

import React, { useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import { getServiceBySlug, getServicesByCategory, serviceCategories } from '@/data/services'
import { useCartStore } from '@/store/cartStore'
import SimulatorDrawer from '@/components/SimulatorDrawer'
import ServiceCard from '@/components/services/ServiceCard'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const { t } = useTranslations()

  if (!service) {
    notFound()
  }

  const category = serviceCategories.find(cat => cat.id === service.category)
  const relatedServices = getServicesByCategory(service.category)
    .filter(s => s.id !== service.id)
    .slice(0, 3)

  const handleAddToCart = () => {
    addItem({
      id: service.id,
      title: t(service.titleKey),
      price: service.price,
      category: service.category,
      description: t(service.descriptionKey),
      delivery: service.delivery,
      image: service.image
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Accueil
                </Link>
              </li>
              <li>
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/services" className="text-gray-500 hover:text-gray-700">
                  Services
                </Link>
              </li>
              <li>
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{t(service.titleKey)}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-indigo-200 text-sm font-medium">
                  {category?.name}
                </span>
                {service.badgeKey && (
                  <span className="ml-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {t(service.badgeKey)}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t(service.titleKey)}
              </h1>
              
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                {t(service.descriptionKey)}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                  Ajouter au panier • ₪ {service.price.toLocaleString()}
                </button>
                <button
                  onClick={() => setIsSimulatorOpen(true)}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Simuler un devis
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={t(service.titleKey)}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Ce qui est inclus
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {t(service.featuresKey).split(',').map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">{feature.trim()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Notre processus
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: 'Analyse des besoins',
                      description: 'Nous analysons vos besoins et objectifs pour créer une solution sur mesure.'
                    },
                    {
                      step: 2,
                      title: 'Conception & Design',
                      description: 'Création des maquettes et validation du design avec vous.'
                    },
                    {
                      step: 3,
                      title: 'Développement',
                      description: 'Développement de votre solution avec les meilleures technologies.'
                    },
                    {
                      step: 4,
                      title: 'Tests & Livraison',
                      description: 'Tests complets et mise en ligne de votre projet.'
                    }
                  ].map((process, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {process.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {process.title}
                        </h3>
                        <p className="text-gray-600">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8 sticky top-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Informations du service
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Prix</span>
                    <span className="text-2xl font-bold text-indigo-600">
                      ₪ {service.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Délai de livraison</span>
                    <span className="font-semibold text-gray-900">
                      {service.delivery}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Catégorie</span>
                    <span className="font-semibold text-gray-900">
                      {category?.name}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg"
                  >
                    Ajouter au panier
                  </button>
                  
                  <button
                    onClick={() => setIsSimulatorOpen(true)}
                    className="w-full border border-indigo-200 text-indigo-600 py-4 px-6 rounded-lg hover:bg-indigo-50 transition-colors font-semibold"
                  >
                    Simuler un devis personnalisé
                  </button>
                  
                  <Link
                    href="/contact"
                    className="w-full border border-gray-300 text-gray-700 py-4 px-6 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-center block"
                  >
                    Poser une question
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Services similaires
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez d'autres services qui pourraient vous intéresser
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => (
                <ServiceCard
                  key={relatedService.id}
                  service={relatedService}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Nous contacter
            </Link>
            <Link
              href="/devis"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Simulator Drawer */}
      <SimulatorDrawer
        service={service}
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />
    </div>
  )
}
