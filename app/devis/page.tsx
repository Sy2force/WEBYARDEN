import React from 'react'

export default function Devis() {
  const services = [
    { id: 'website', name: 'Site vitrine', price: 1500 },
    { id: 'ecommerce', name: 'Site e-commerce', price: 3000 },
    { id: 'seo', name: 'Référencement SEO', price: 800 },
    { id: 'ads', name: 'Publicité Google Ads', price: 1200 },
    { id: 'social', name: 'Gestion réseaux sociaux', price: 600 },
    { id: 'maintenance', name: 'Maintenance mensuelle', price: 200 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Demande de <span className="text-indigo-600">Devis</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Obtenez un devis personnalisé pour votre projet digital en Israël.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-8">
              {/* Personal Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations personnelles</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Services souhaités</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {services.map((service) => (
                    <div key={service.id} className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id={service.id}
                          name="services"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor={service.id} className="font-medium text-gray-700">
                          {service.name}
                        </label>
                        <p className="text-gray-500">À partir de {service.price}€</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Détails du projet</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Sélectionnez votre budget</option>
                      <option value="1000-3000">1 000€ - 3 000€</option>
                      <option value="3000-5000">3 000€ - 5 000€</option>
                      <option value="5000-10000">5 000€ - 10 000€</option>
                      <option value="10000+">Plus de 10 000€</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                      Délai souhaité
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Sélectionnez un délai</option>
                      <option value="urgent">Urgent (moins d'1 mois)</option>
                      <option value="1-2months">1-2 mois</option>
                      <option value="2-3months">2-3 mois</option>
                      <option value="3months+">Plus de 3 mois</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description du projet *
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows={4}
                      required
                      placeholder="Décrivez votre projet, vos objectifs, votre cible"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Envoyer la demande de devis
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

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
