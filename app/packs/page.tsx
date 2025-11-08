'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckIcon, StarIcon, ArrowRightIcon } from '../../components/ui/Icons';
import { RocketIcon, GrowthIcon, CrownIcon, BuildingIcon } from '../../components/ui/PackIcons';
import { useQuoteStore } from '../../store/quoteStore';

interface Pack {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
  IconComponent: React.ComponentType<{ className?: string }>;
}

const packs: Pack[] = [
  {
    id: 'starter',
    name: 'Pack Starter',
    price: 1200,
    originalPrice: 1500,
    duration: 'Setup unique',
    description: 'Parfait pour lancer votre présence digitale avec les essentiels.',
    color: 'from-blue-500 to-blue-600',
    IconComponent: RocketIcon,
    features: [
      'Logo professionnel + 3 variations',
      'Cartes de visite design',
      'Page Facebook optimisée',
      'Compte Instagram Business',
      'Google My Business setup',
      'Formation réseaux sociaux (2h)',
      'Support 30 jours inclus'
    ]
  },
  {
    id: 'growth',
    name: 'Pack Growth',
    price: 2800,
    originalPrice: 3500,
    duration: 'Mensuel',
    description: 'Solution complète pour développer votre visibilité et attirer plus de clients.',
    color: 'from-purple-500 to-purple-600',
    IconComponent: GrowthIcon,
    popular: true,
    features: [
      'Gestion complète réseaux sociaux',
      '20 posts créatifs par mois',
      'Stories quotidiennes',
      'Campagne Google Ads (budget 500₪)',
      'Optimisation SEO mensuelle',
      '2 articles de blog SEO',
      'Reporting détaillé mensuel',
      'Support prioritaire'
    ]
  },
  {
    id: 'premium',
    name: 'Pack Premium',
    price: 4500,
    originalPrice: 6000,
    duration: 'Mensuel',
    description: 'La solution tout-en-un pour dominer votre marché avec une stratégie digitale complète.',
    color: 'from-gold-500 to-yellow-500',
    IconComponent: CrownIcon,
    features: [
      'Tout du Pack Growth inclus',
      'Site web professionnel complet',
      'E-commerce avec 50 produits',
      'Campagnes Facebook & Instagram Ads',
      'Photographie produits (10 items)',
      'Email marketing automation',
      'Chatbot intelligent',
      'Consultant dédié',
      'Réunions stratégiques mensuelles'
    ]
  },
  {
    id: 'enterprise',
    name: 'Pack Enterprise',
    price: 8000,
    duration: 'Mensuel',
    description: 'Solution sur-mesure pour les entreprises ambitieuses avec besoins spécifiques.',
    color: 'from-gray-700 to-gray-800',
    IconComponent: BuildingIcon,
    features: [
      'Stratégie digitale personnalisée',
      'Équipe dédiée (3+ experts)',
      'Développements sur-mesure',
      'Intégrations API avancées',
      'Formation équipe incluse',
      'Support 24/7',
      'Reporting en temps réel',
      'Consultation stratégique hebdomadaire',
      'Garantie résultats'
    ]
  }
];

const addons = [
  { id: 'extra-posts', name: '10 posts supplémentaires', price: 400, duration: 'Mensuel' },
  { id: 'video-content', name: 'Contenu vidéo (5 vidéos)', price: 800, duration: 'Mensuel' },
  { id: 'influencer-campaign', name: 'Campagne influenceurs', price: 1500, duration: 'Ponctuel' },
  { id: 'seo-audit', name: 'Audit SEO complet', price: 600, duration: 'Ponctuel' },
  { id: 'competitor-analysis', name: 'Analyse concurrentielle', price: 500, duration: 'Ponctuel' },
  { id: 'brand-monitoring', name: 'Monitoring e-réputation', price: 300, duration: 'Mensuel' }
];

export default function PacksPage() {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const { addItem } = useQuoteStore();

  const handlePackSelect = (pack: Pack) => {
    setSelectedPack(pack.id);
    addItem({
      id: pack.id,
      name: pack.name,
      price: pack.price,
      quantity: 1,
      category: 'pack'
    });
  };

  const handleAddonToggle = (addonId: string) => {
    const addon = addons.find(a => a.id === addonId);
    if (!addon) return;

    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
      addItem({
        id: addon.id,
        name: addon.name,
        price: addon.price,
        quantity: 1,
        category: 'addon'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Packs & Abonnements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez la solution qui correspond à vos besoins et à votre budget. 
            Tous nos packs incluent un suivi personnalisé et des résultats garantis.
          </p>
          <div className="mt-8 flex justify-center items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
              Sans engagement
            </div>
            <div className="flex items-center">
              <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
              Support inclus
            </div>
            <div className="flex items-center">
              <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
              Résultats garantis
            </div>
          </div>
        </motion.div>

        {/* Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                pack.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {pack.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                  <StarIcon className="w-4 h-4 inline mr-1" />
                  PLUS POPULAIRE
                </div>
              )}

              <div className={`bg-gradient-to-r ${pack.color} p-6 text-white ${pack.popular ? 'pt-12' : ''}`}>
                <div className="mb-4">
                  <pack.IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold">{pack.price.toLocaleString()}₪</span>
                  {pack.originalPrice && (
                    <span className="text-lg line-through opacity-75 ml-2">
                      {pack.originalPrice.toLocaleString()}₪
                    </span>
                  )}
                </div>
                <p className="text-sm opacity-90">{pack.duration}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{pack.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePackSelect(pack)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    selectedPack === pack.id
                      ? 'bg-green-500 text-white'
                      : pack.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {selectedPack === pack.id ? (
                    <>
                      <CheckIcon className="w-5 h-5 mr-2" />
                      Sélectionné
                    </>
                  ) : (
                    <>
                      Choisir ce pack
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Options Supplémentaires
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Personnalisez votre pack avec nos services additionnels
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  selectedAddons.includes(addon.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleAddonToggle(addon.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAddons.includes(addon.id)
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAddons.includes(addon.id) && (
                      <CheckIcon className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-blue-600">
                    {addon.price.toLocaleString()}₪
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    / {addon.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <h2 className="text-3xl font-bold text-center">
              Comparaison Détaillée des Packs
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Fonctionnalités
                  </th>
                  {packs.map((pack) => (
                    <th key={pack.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      {pack.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Prix mensuel</td>
                  {packs.map((pack) => (
                    <td key={pack.id} className="px-6 py-4 text-center">
                      <span className="text-lg font-bold text-blue-600">
                        {pack.price.toLocaleString()}₪
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Gestion réseaux sociaux</td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Site web inclus</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Publicité payante</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Support dédié</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Standard</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Prioritaire</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Premium</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Booster Votre Business ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour une consultation gratuite et personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Consultation Gratuite
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/devis"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Demander un Devis
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
