'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCartIcon, XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const QuoteSimulator = () => {
  // Mock quote store functionality
  const items: any[] = [];
  const isOpen = false;
  const toggleQuote = () => {};
  const removeItem = (id: number) => {};
  const getTotalPrice = () => 0;
  const getTotalItems = () => 0;
  
  const [isMinimized, setIsMinimized] = useState(false);

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={toggleQuote}
          className="bg-primary-500 hover:bg-primary-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <ShoppingCartIcon className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="bg-accent-500 text-black text-xs font-bold px-2 py-1 rounded-full">
              {totalItems}
            </span>
          )}
          <span className="hidden sm:block font-medium">
            {totalPrice > 0 ? `${totalPrice}₪` : 'Devis'}
          </span>
        </button>
      </motion.div>

      {/* Quote Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            onClick={toggleQuote}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-primary-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShoppingCartIcon className="w-6 h-6" />
                  <h2 className="text-lg font-semibold">Mon Devis</h2>
                </div>
                <button
                  onClick={toggleQuote}
                  className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={isOpen ? "Fermer le devis" : "Ouvrir le devis"}
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCartIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Votre devis est vide</h3>
                    <p className="text-gray-500 mb-4">Ajoutez des services pour commencer</p>
                    <Link
                      href="/services"
                      className="btn-primary"
                      onClick={toggleQuote}
                    >
                      Découvrir nos services
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item: any) => (
                      <div key={item.service.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-gray-900 text-sm">
                            {item.service.name}
                          </h3>
                          <button
                            onClick={() => removeItem(item.serviceId || item.service.id)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Supprimer ce service"
                          >
                            <MinusIcon className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="text-xs text-gray-600 mb-2">
                          {item.complexity && (
                            <span className="mr-2">
                              Complexité: {item.complexity}
                            </span>
                          )}
                          {item.delivery && (
                            <span>
                              Livraison: {item.delivery}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">Qté:</span>
                            <span className="font-medium">{item.quantity}</span>
                          </div>
                          <span className="font-bold text-primary-500">
                            {item.totalPrice}₪
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t bg-white p-4 space-y-4">
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary-500">{totalPrice}₪</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Link
                      href="/devis"
                      className="btn-primary w-full text-center"
                      onClick={toggleQuote}
                    >
                      📄 Générer mon devis PDF
                    </Link>
                    <a
                      href={`https://wa.me/972501234567?text=Bonjour, je souhaite un devis pour ${totalItems} service(s) d'un montant de ${totalPrice}₪`}
                      className="btn-secondary w-full text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💬 Discuter sur WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuoteSimulator;
