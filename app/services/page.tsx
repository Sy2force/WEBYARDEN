'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock data
  const services = [
    {
      id: 1,
      title: "Développement Web",
      category: "web",
      description: "Création de sites web modernes et responsives",
      price: "À partir de 1500₪",
      features: ["Design responsive", "SEO optimisé", "Performance élevée"]
    },
    {
      id: 2,
      title: "E-commerce",
      category: "ecommerce",
      description: "Boutiques en ligne complètes avec paiement sécurisé",
      price: "À partir de 3000₪",
      features: ["Paiement sécurisé", "Gestion stock", "Analytics"]
    }
  ];
  
  const categories = [
    { id: 'all', name: 'Tous les services' },
    { id: 'web', name: 'Développement Web' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Nos <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez notre catalogue complet de services digitaux pour propulser votre business en Israël
            </p>
            <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full inline-flex items-center space-x-2">
              <span>🎯</span>
              <span className="font-medium">{filteredServices.length} services disponibles</span>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-primary-600 mb-4">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                      En savoir plus
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Aucun service trouvé
                </h3>
                <p className="text-gray-500">
                  Essayez de modifier vos critères de recherche
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-center text-white mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contactez-nous pour une solution sur mesure adaptée à vos besoins spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/972501234567?text=Bonjour, je souhaite discuter d'un projet personnalisé"
                className="bg-white text-primary-500 hover:bg-gray-100 font-medium py-3 px-6 rounded-xl transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Discuter sur WhatsApp
              </a>
              <a
                href="mailto:contact@webyarden.co.il"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium py-3 px-6 rounded-xl transition-colors"
              >
                ✉️ Envoyer un email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contactez-nous pour discuter de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/devis"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-xl transition-colors"
              >
                📋 Demander un devis
              </a>
              <a
                href="mailto:contact@webyarden.co.il"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium py-3 px-6 rounded-xl transition-colors"
              >
                ✉️ Envoyer un email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
