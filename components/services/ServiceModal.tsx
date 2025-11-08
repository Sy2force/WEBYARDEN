'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Service } from '../../data/services';
import { useQuoteStore } from '../../store/quoteStore';
import { ClockIcon } from '../ui/PackIcons';

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const { addItem } = useQuoteStore();
  const [quantity, setQuantity] = useState(1);
  const [complexity, setComplexity] = useState<'basic' | 'pro' | 'premium'>('basic');
  const [delivery, setDelivery] = useState<'standard' | 'express'>('standard');
  const [extras, setExtras] = useState<string[]>([]);
  const [comments, setComments] = useState('');

  const complexityPrices = {
    basic: 0,
    pro: Math.round(service.price * 0.5),
    premium: Math.round(service.price * 1.2)
  };

  const deliveryPrices = {
    standard: 0,
    express: Math.round(service.price * 0.3)
  };

  const calculateTotalPrice = () => {
    const basePrice = service.price;
    const complexityPrice = complexityPrices[complexity];
    const deliveryPrice = deliveryPrices[delivery];
    return (basePrice + complexityPrice + deliveryPrice) * quantity;
  };

  const handleAddToQuote = () => {
    addItem({
      serviceId: service.id,
      service,
      quantity,
      complexity,
      delivery,
      extras,
      totalPrice: calculateTotalPrice()
    });
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <Dialog.Title className="text-xl font-semibold text-gray-900">
                    {service.name}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    aria-label="Fermer la modal"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Service Info */}
                  <div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        {service.duration}
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{service.category}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Inclus dans ce service :</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Configuration */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Quantity */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantité
                      </label>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Complexity */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Niveau de complexité
                      </label>
                      <select
                        value={complexity}
                        onChange={(e) => setComplexity(e.target.value as 'basic' | 'pro' | 'premium')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        aria-label="Niveau de complexité"
                      >
                        <option value="basic">Basique (inclus)</option>
                        <option value="pro">Professionnel (+{complexityPrices.pro}₪)</option>
                        <option value="premium">Premium (+{complexityPrices.premium}₪)</option>
                      </select>
                    </div>

                    {/* Delivery */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Délai de livraison
                      </label>
                      <select
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value as any)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        aria-label="Délai de livraison"
                      >
                        <option value="standard">Standard (inclus)</option>
                        <option value="express">Express (+{deliveryPrices.express}₪)</option>
                      </select>
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Commentaires ou demandes spéciales
                    </label>
                    <textarea
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Décrivez vos besoins spécifiques..."
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Prix total</div>
                    <div className="text-2xl font-bold text-primary-500">
                      {calculateTotalPrice()}₪
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={onClose}
                      className="btn-secondary"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleAddToQuote}
                      className="btn-primary"
                    >
                      Ajouter au devis
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ServiceModal;
