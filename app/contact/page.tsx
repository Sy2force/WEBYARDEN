'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
// import Layout from '@/components/layout/Layout';
import { PaintBrushIcon, ShareIcon, MagnifyingGlassIcon, SpeakerWaveIcon, ShoppingBagIcon, GlobeAltIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // EmailJS integration
      const emailData = {
        to_name: 'Web Yarden',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        company: data.company || 'Non spécifié',
        service: data.service,
        message: data.message,
        reply_to: data.email,
      };

      // Send email using EmailJS
      if (typeof window !== 'undefined' && (window as any).emailjs) {
        await (window as any).emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_webyarden',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contact',
          emailData,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      }

      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      // Error handling without console.error
      setIsSubmitted(false);
    }
  };

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Téléphone',
      value: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+972 53 370 0551',
      link: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE?.replace(/\s/g, '') || '+972533700551'}`
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email',
      value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'webyarden@gmail.com',
      link: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'webyarden@gmail.com'}`
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Adresse',
      value: 'Tel Aviv, Israël',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Contactez <span className="text-gradient">Web Yarden</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prêt à propulser votre business ? Parlons de votre projet digital et créons ensemble votre succès en Israël.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Démarrons votre projet
              </h2>

              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  ✅ Message envoyé ! Nous vous répondrons sous 24h.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      {...register('name', { required: 'Le nom est requis' })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email invalide'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      {...register('phone', { required: 'Le téléphone est requis' })}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+972 50 123 4567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service d'intérêt *
                  </label>
                  <select
                    {...register('service', { required: 'Veuillez sélectionner un service' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="design">Design & Identité visuelle</option>
                    <option value="social">Réseaux sociaux</option>
                    <option value="seo">Référencement SEO</option>
                    <option value="ads">Publicité digitale</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="web">Développement web</option>
                    <option value="custom">Projet sur mesure</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Le message est requis' })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full">
                  📤 Envoyer ma demande
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
                    <div className="text-primary-500">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <a 
                        href={info.link}
                        className="text-gray-600 hover:text-primary-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-xl font-bold mb-2">Besoin d'une réponse rapide ?</h3>
                <p className="mb-4 opacity-90">
                  Contactez-nous directement sur WhatsApp pour une réponse immédiate
                </p>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '972533700551'}?text=Bonjour Web Yarden, je souhaite discuter de mon projet digital`}
                  className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-xl transition-colors inline-flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💬</span>
                  <span>Ouvrir WhatsApp</span>
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimanche - Jeudi:</span>
                    <span className="font-medium">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vendredi:</span>
                    <span className="font-medium">9h00 - 14h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi:</span>
                    <span className="font-medium text-red-500">Fermé</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    🚀 Réponse garantie sous 24h • Support WhatsApp 7j/7
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
