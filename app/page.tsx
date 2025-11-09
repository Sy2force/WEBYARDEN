import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🚀 Web Yarden - Agence Digitale
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Votre partenaire digital en Israël pour booster votre présence en ligne
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Nos Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services Digitaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes pour développer votre business en ligne
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                💻
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Développement Web</h3>
              <p className="text-gray-600 mb-6">Sites vitrine, e-commerce et applications web sur mesure avec les dernières technologies</p>
              <div className="text-sm text-blue-600 font-medium">À partir de ₪8,000</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                📱
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Apps Mobiles</h3>
              <p className="text-gray-600 mb-6">Applications iOS et Android natives et cross-platform avec React Native et Flutter</p>
              <div className="text-sm text-green-600 font-medium">À partir de ₪15,000</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                🎨
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Design & UX</h3>
              <p className="text-gray-600 mb-6">Interfaces modernes et expérience utilisateur optimisée pour maximiser les conversions</p>
              <div className="text-sm text-pink-600 font-medium">À partir de ₪5,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets récents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">E-commerce Store</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <Link href="/projects" className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Voir le projet
                </Link>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">App Mobile</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <Link href="/projects" className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Voir le projet
                </Link>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Site Corporate</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <Link href="/projects" className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Voir le projet
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Voir tous nos projets
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Témoignages de satisfaction de nos partenaires
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Excellent travail ! L'équipe Web Yarden a créé notre site e-commerce en respectant nos délais et notre budget."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  DS
                </div>
                <div>
                  <div className="font-semibold text-gray-900">David Shlomo</div>
                  <div className="text-sm text-gray-600">CEO, TechStart</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Application mobile parfaite ! Design moderne et fonctionnalités innovantes. Je recommande vivement."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  RL
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rachel Levy</div>
                  <div className="text-sm text-gray-600">Fondatrice, BeautyApp</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Service client exceptionnel et expertise technique remarquable. Notre chiffre d'affaires a doublé !"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Cohen</div>
                  <div className="text-sm text-gray-600">Directeur, RestauChain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à développer votre projet ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
