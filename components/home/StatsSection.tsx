'use client';

import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      number: '220+',
      label: 'Projets réalisés',
      icon: '🚀',
      description: 'Sites web, campagnes et identités visuelles créés'
    },
    {
      number: '4.9/5',
      label: 'Note client',
      icon: '⭐',
      description: 'Satisfaction client basée sur +150 avis'
    },
    {
      number: '5 ans',
      label: "D'expertise",
      icon: '🧠',
      description: 'Spécialisés dans le marché israélien'
    },
    {
      number: '24h',
      label: 'Support réactif',
      icon: '💬',
      description: 'Réponse garantie sous 24h via WhatsApp'
    }
  ];

  return (
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
            Pourquoi choisir <span className="text-gradient">Web Yarden</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des chiffres qui parlent d'eux-mêmes et une expertise reconnue sur le marché israélien
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
