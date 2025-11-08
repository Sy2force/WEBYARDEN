'use client';

import { motion } from 'framer-motion';
// import { services } from '@/data/services';
// import ServiceCard from '@/components/services/ServiceCard';
// import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const categoryInfo = {
  design: {
    title: 'Services de Design',
    description: 'Création graphique, identité visuelle et design web pour marquer les esprits',
    gradient: 'from-purple-500 to-pink-500'
  },
  seo: {
    title: 'Services SEO',
    description: 'Optimisation pour les moteurs de recherche et visibilité en ligne',
    gradient: 'from-blue-500 to-green-500'
  },
  social: {
    title: 'Réseaux Sociaux',
    description: 'Gestion et stratégie sur Facebook, Instagram, LinkedIn et plus',
    gradient: 'from-pink-500 to-orange-500'
  },
  ads: {
    title: 'Publicité Digitale',
    description: 'Campagnes Google Ads, Facebook Ads et marketing payant',
    gradient: 'from-green-500 to-blue-500'
  },
  content: {
    title: 'Création de Contenu',
    description: 'Rédaction, vidéo, photo et contenus engageants pour votre audience',
    gradient: 'from-orange-500 to-red-500'
  },
  ecommerce: {
    title: 'E-commerce',
    description: 'Solutions de vente en ligne, boutiques Shopify et marketplaces',
    gradient: 'from-indigo-500 to-purple-500'
  }
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  const info = categoryInfo[category as keyof typeof categoryInfo];
  
  if (!info) {
    notFound();
  }
  
  // Mock services data
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
  
  const categoryServices = services.filter(service => service.category === category);
  const otherCategories = Object.keys(categoryInfo).filter(cat => cat !== category);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${info.gradient} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {info.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {info.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis" className="btn-white">
                Demander un devis
              </Link>
              <Link href="/services" className="btn-outline-white">
                Tous les services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Services <span className="text-gradient">{info.title}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryServices.map((service, index) => (
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
            ))}
          </div>

          {categoryServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun service disponible dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explorez nos autres <span className="text-gradient">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCategories.map((cat, index) => {
              const catInfo = categoryInfo[cat as keyof typeof categoryInfo];
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link
                    href={`/services/${cat}`}
                    className="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`h-32 bg-gradient-to-br ${catInfo.gradient} rounded-lg mb-4`}></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {catInfo.title}
                    </h3>
                    <p className="text-gray-600">
                      {catInfo.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Prêt à booster votre {info.title.toLowerCase()} ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Discutons de votre projet et créons quelque chose d'exceptionnel ensemble
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="btn-white">
                Obtenir un devis gratuit
              </Link>
              <Link href="/contact" className="btn-outline-white">
                Parler à un expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
