'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

interface Pack {
  id: number;
  name: string;
  price: number;
  currency?: string;
  description: string;
  features: string[];
  popular: boolean;
  originalPrice?: number;
  duration?: string;
  support?: string;
  revisions?: string;
}

interface PricePackProps {
  pack: Pack;
  index: number;
}

const PricePack = ({ pack, index }: PricePackProps) => {
  // const { addItem } = useQuoteStore();

  const handleAddPack = () => {
    // Redirect to contact page with pack information
    const packInfo = encodeURIComponent(`Je suis intéressé par le pack ${pack.name} (${pack.price})`);
    window.location.href = `/contact?message=${packInfo}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${
        pack.popular ? 'ring-2 ring-primary-500 scale-105' : ''
      }`}
    >
      {pack.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium">
            Le plus populaire
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {pack.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {pack.description}
        </p>
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold text-primary-500">
            {pack.price.toLocaleString()}₪
          </span>
          {pack.originalPrice && (
            <span className="text-lg text-gray-400 line-through ml-2">
              {pack.originalPrice.toLocaleString()}₪
            </span>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {pack.features.map((feature: string, i: number) => (
          <div key={i} className="flex items-start">
            <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="border-t pt-6 mb-8">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Durée:</span>
            <div className="font-medium">{pack.duration}</div>
          </div>
          <div>
            <span className="text-gray-500">Support:</span>
            <div className="font-medium">{pack.support}</div>
          </div>
          <div>
            <span className="text-gray-500">Révisions:</span>
            <div className="font-medium">{pack.revisions} incluses</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={handleAddPack}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
          pack.popular
            ? 'bg-primary-500 hover:bg-primary-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
        }`}
      >
        Choisir ce pack
      </button>
    </motion.div>
  );
};

export default PricePack;
