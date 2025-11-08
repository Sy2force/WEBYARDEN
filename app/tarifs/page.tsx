'use client';

import { motion } from 'framer-motion';
// import { packs } from '@/data/packs';
// import PricePack from '@/components/pricing/PricePack';
// import Layout from '@/components/layout/Layout';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const PricingPage = () => {
  // Mock packs data
  const packs = [
    {
      id: 1,
      name: "Starter",
      price: 1500,
      currency: "₪",
      description: "Parfait pour débuter",
      features: ["Site responsive", "SEO de base", "Support email"],
      popular: false
    },
    {
      id: 2,
      name: "Pro",
      price: 3000,
      currency: "₪",
      description: "Pour les entreprises",
      features: ["Site responsive", "SEO avancé", "Support prioritaire", "Analytics"],
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: 5000,
      currency: "₪",
      description: "Solution complète",
      features: ["Site responsive", "SEO premium", "Support 24/7", "Analytics avancé", "Formation"],
      popular: false
    }
  ];
  
  const comparisonFeatures = [
    'Site responsive',
    'Optimisation SEO',
    'Hébergement inclus',
    'Support technique',
    'Formation incluse',
    'Blog intégré',
    'E-commerce',
    'Analytics avancés',
    'Support prioritaire',
    'Maintenance incluse'
  ];

  const getPackFeatures = (packId: number) => {
    return packs.find(pack => pack.id === packId)?.features || [];
  };

  const hasFeature = (packId: number, feature: string) => {
    const pack = packs.find(p => p.id === packId);
    return pack?.features.includes(feature) || false;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nos <span className="text-gradient">Tarifs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Des solutions adaptées à tous les budgets. Choisissez le pack qui correspond à vos besoins.
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <span className="font-medium">🎉 Promotion limitée : -20% sur tous les packs</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packs.map((pack, index) => (
              <div key={pack.id} className={`bg-white rounded-lg shadow-lg overflow-hidden ${pack.popular ? 'ring-2 ring-primary-500' : ''}`}>
                {pack.popular && (
                  <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                    Le plus populaire
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pack.name}</h3>
                  <p className="text-gray-600 mb-4">{pack.description}</p>
                  <div className="text-3xl font-bold text-primary-600 mb-4">
                    {pack.price}{pack.currency}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pack.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                    Choisir ce pack
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
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
              Tableau <span className="text-gradient">Comparatif</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparez les fonctionnalités incluses dans chaque pack
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                      Fonctionnalités
                    </th>
                    {packs.map((pack) => (
                      <th key={pack.id} className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                        {pack.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {feature}
                      </td>
                      {packs.map((pack) => (
                      <td key={pack.id} className="px-6 py-4 text-center">
                        {pack.features.includes(feature) ? (
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Questions <span className="text-gradient">Fréquentes</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "Que comprend l'hébergement inclus ?",
                answer: "L'hébergement inclus comprend un serveur performant, un certificat SSL, des sauvegardes automatiques et un support technique 24/7."
              },
              {
                question: "Puis-je changer de pack après la commande ?",
                answer: "Oui, vous pouvez upgrader votre pack à tout moment. La différence de prix sera calculée au prorata."
              },
              {
                question: "Combien de révisions sont incluses ?",
                answer: "Le nombre de révisions varie selon le pack choisi : 3 pour Starter, 5 pour Pro, et 10 pour Premium."
              },
              {
                question: "Proposez-vous un service de maintenance ?",
                answer: "Oui, la maintenance est incluse dans les packs Pro et Premium. Pour le pack Starter, elle est disponible en option."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
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
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Choisissez votre pack et lancez votre projet dès aujourd'hui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/devis"
                className="btn-white"
              >
                Demander un devis personnalisé
              </a>
              <a
                href="/contact"
                className="btn-outline-white"
              >
                Poser une question
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
