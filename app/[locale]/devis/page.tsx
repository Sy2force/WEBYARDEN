'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import PdfDownloadButton from '@/components/PdfDownloadButton'

export default function Devis() {
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    description: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setClientInfo({
      ...clientInfo,
      [e.target.name]: e.target.value
    })
  }

  const totalPrice = getTotalPrice()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the quote to your backend
    alert('Devis envoyé avec succès! Nous vous contacterons sous 24h.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Finaliser votre <span className="text-green-200">Devis</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Complétez vos informations pour recevoir votre devis personnalisé
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Client Information Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos informations</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={clientInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={clientInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={clientInfo.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+972 XX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={clientInfo.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={clientInfo.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Votre adresse"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={clientInfo.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Décrivez votre projet et vos besoins spécifiques..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg"
                >
                  Envoyer le devis
                </button>
                <PdfDownloadButton 
                  clientInfo={clientInfo}
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors font-semibold shadow-lg"
                >
                  📄 Télécharger PDF
                </PdfDownloadButton>
              </div>
            </form>
          </motion.div>

          {/* Cart Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Récapitulatif</h2>
            
            {items.length === 0 ? (
              <div className="text-center py-8">
                <svg className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-gray-500 mb-4">Votre panier est vide</p>
                <a
                  href="/services"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Parcourir nos services
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-indigo-600">
                        ₪ {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-green-600">₪ {totalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    TVA incluse • Devis valable 30 jours
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={clearCart}
                    className="w-full text-red-600 hover:text-red-800 py-2 text-sm font-medium transition-colors"
                  >
                    Vider le panier
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Pourquoi choisir Web Yarden ?
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-600 mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">Rapidité</h3>
                <p className="mt-2 text-base text-indigo-200">
                  Réponse sous 24h et livraison dans les délais convenus.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-600 mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">Qualité</h3>
                <p className="mt-2 text-base text-indigo-200">
                  Solutions sur mesure et code de haute qualité.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-600 mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">Support</h3>
                <p className="mt-2 text-base text-indigo-200">
                  Accompagnement personnalisé et support technique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
