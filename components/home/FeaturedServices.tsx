'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const FeaturedServices = () => {
  // Mock services data
  const popularServices = [
    {
      id: 1,
      title: "Développement Web",
      description: "Sites web modernes et responsives",
      price: "À partir de 1500₪"
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Boutiques en ligne performantes",
      price: "À partir de 3000₪"
    },
    {
      id: 3,
      title: "SEO & Marketing",
      description: "Optimisation et visibilité",
      price: "À partir de 800₪"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos Services <span className="text-gradient">Populaires</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les services les plus demandés par nos clients pour booster leur présence digitale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularServices.map((service, index) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-primary-600 mb-4">{service.price}</div>
                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="btn-primary text-lg px-8 py-4"
          >
            Voir tous nos services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
