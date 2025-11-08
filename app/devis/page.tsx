'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
// import { useQuoteStore } from '@/store/quoteStore';
// import Layout from '@/components/layout/Layout';
// import PDFGenerator from '@/components/quote/PDFGenerator';
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

export default function DevisPage() {
  // Mock quote store functionality
  const [items, setItems] = useState<any[]>([]);
  const removeItem = (id: string) => setItems(items.filter(item => item.id !== id));
  const clearItems = () => setItems([]);
  const getTotal = () => items.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
  const [showPDFForm, setShowPDFForm] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const formData = watch();

  const totalPrice = getTotal();
  const totalItems = items.length;
  const tva = Math.round(totalPrice * 0.17);
  const totalTTC = totalPrice + tva;

  const onSubmit = (data: FormData) => {
    setShowPDFForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mon <span className="text-gradient">Devis</span>
            </h1>
            <p className="text-xl text-gray-600">
              Finalisez votre devis et téléchargez votre PDF personnalisé
            </p>
          </motion.div>

          {items.length === 0 ? (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center py-16 bg-white rounded-2xl shadow-lg"
            >
              <div className="text-6xl mb-6">📄</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Votre devis est vide
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Ajoutez des services à votre devis pour commencer à créer votre solution digitale personnalisée
              </p>
              <Link href="/services" className="btn-primary">
                Découvrir nos services
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quote Items */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      Services sélectionnés ({totalItems})
                    </h2>
                    <Link
                      href="/services"
                      className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                    >
                      + Ajouter des services
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.service.id} className="border border-gray-200 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {item.service.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {item.service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.complexity && (
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                  {item.complexity}
                                </span>
                              )}
                              {item.delivery && (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  {item.delivery}
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.serviceId || item.service.id)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Supprimer cet élément"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">
                            Quantité: {item.quantity} • Délai: {item.service.duration}
                          </span>
                          <span className="font-bold text-primary-500 text-lg">
                            {item.totalPrice}₪
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Summary & Form */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
                >
                  {/* Price Summary */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Récapitulatif</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sous-total HT:</span>
                        <span className="font-medium">{totalPrice}₪</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">TVA (17%):</span>
                        <span className="font-medium">{tva}₪</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between text-lg font-bold text-primary-500">
                        <span>Total TTC:</span>
                        <span>{totalTTC}₪</span>
                      </div>
                    </div>
                  </div>

                  {/* Client Form */}
                  {!showPDFForm ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Vos informations</h4>
                      
                      <div>
                        <input
                          {...register('name', { required: 'Le nom est requis' })}
                          type="text"
                          placeholder="Nom complet *"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <input
                          {...register('email', { 
                            required: 'L\'email est requis',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Email invalide'
                            }
                          })}
                          type="email"
                          placeholder="Email *"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <input
                          {...register('phone', { required: 'Le téléphone est requis' })}
                          type="tel"
                          placeholder="Téléphone *"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <input
                          {...register('company')}
                          type="text"
                          placeholder="Entreprise (optionnel)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <textarea
                          {...register('message')}
                          rows={3}
                          placeholder="Message ou demandes spéciales..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full">
                        Générer mon devis PDF
                      </button>
                    </form>
                  ) : (
                    /* PDF Generation */
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl mb-2">✅</div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Informations validées
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Votre devis PDF est prêt à être téléchargé
                        </p>
                      </div>

                      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Génération PDF</h3>
                      <p className="text-gray-600 mb-4">
                        Fonctionnalité de génération PDF en cours de développement
                      </p>
                      <button 
                        onClick={() => setShowPDFForm(false)}
                        className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Retour
                      </button>
                    </div>

                      <div className="text-center pt-4 border-t">
                        <p className="text-sm text-gray-600 mb-3">
                          Ou contactez-nous directement
                        </p>
                        <a
                          href={`https://wa.me/972501234567?text=Bonjour, je souhaite valider mon devis de ${totalTTC}₪ pour ${totalItems} service(s). Mon nom: ${formData.name}`}
                          className="btn-secondary w-full text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          💬 WhatsApp
                        </a>
                      </div>

                      <button
                        onClick={() => setShowPDFForm(false)}
                        className="text-primary-500 hover:text-primary-600 text-sm w-full text-center"
                      >
                        ← Modifier mes informations
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
