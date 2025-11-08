'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useQuoteStore } from '../../store/quoteStore';
import { Service } from '../../data/services';
import { FireIcon, DesignIcon, SocialIcon, SearchIcon, ContentIcon, AdsIcon, EcommerceIcon, WebIcon, AnalyticsIcon, ClockIcon } from '../ui/PackIcons';
import ServiceModal from './ServiceModal';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItem } = useQuoteStore();

  const handleQuickAdd = () => {
    addItem({
      serviceId: service.id,
      service,
      quantity: 1,
      complexity: 'basic',
      delivery: 'standard',
      extras: [],
      totalPrice: service.price
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="card group cursor-pointer h-full flex flex-col"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
            {service.category === 'design' && <DesignIcon className="w-16 h-16 text-primary-600" />}
            {service.category === 'social' && <SocialIcon className="w-16 h-16 text-primary-600" />}
            {service.category === 'seo' && <SearchIcon className="w-16 h-16 text-primary-600" />}
            {service.category === 'content' && <ContentIcon className="w-16 h-16 text-primary-600" />}
            {service.category === 'ads' && <AdsIcon className="w-16 h-16 text-primary-600" />}
            {service.category === 'ecommerce' && <EcommerceIcon className="w-16 h-16 text-primary-600" />}
            {service.category === 'web' && <WebIcon className="w-16 h-16 text-primary-600" />}
            {!['design', 'social', 'seo', 'content', 'ads', 'ecommerce', 'web'].includes(service.category) && <AnalyticsIcon className="w-16 h-16 text-primary-600" />}
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-1">
            {service.popular && (
              <span className="bg-accent-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <FireIcon className="w-3 h-3 mr-1" />
                Populaire
              </span>
            )}
            {service.popular && (
              <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Populaire
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {service.description}
            </p>
            <div className="flex items-center text-xs text-gray-500 mb-3">
              <span className="mr-3 flex items-center">
                <ClockIcon className="w-3 h-3 mr-1" />
                {service.duration}
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded">
                {service.category}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-500">
                {service.price.toLocaleString()}₪
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickAdd();
                }}
                className="bg-primary-500 hover:bg-primary-600 text-white text-sm px-3 py-2 rounded-lg transition-colors"
              >
                + Ajouter
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-lg transition-colors"
              >
                Configurer
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <ServiceModal
        service={service}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ServiceCard;
