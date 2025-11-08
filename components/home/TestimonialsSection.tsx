'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, StoreIcon, PizzaIcon, LawIcon, WebIcon, ClinicIcon } from '../ui/PackIcons';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Cohen',
      company: 'Boutique Mode Tel Aviv',
      text: 'Web Yarden a transformé notre présence en ligne. Nos ventes ont augmenté de 300% en 3 mois !',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David Levy',
      company: 'Restaurant Kosher',
      text: 'Service exceptionnel ! Le menu QR code et la page Instagram ont révolutionné notre business.',
      rating: 5,
      avatar: '👨‍🍳'
    },
    {
      name: 'Rachel Mizrahi',
      company: 'Cabinet Avocat',
      text: 'Professionnels, réactifs et créatifs. Notre site web reflète parfaitement notre expertise.',
      rating: 5,
      avatar: '👩‍⚖️'
    },
    {
      name: 'Yossi Ben-David',
      company: 'Startup Tech',
      text: 'Leur expertise en marketing digital nous a aidés à lever 2M₪. Recommandé à 100% !',
      rating: 5,
      IconComponent: UserIcon
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            Ce que disent nos <span className="text-gradient">clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits à travers Israël
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 text-center"
          >
            {testimonials[currentIndex].IconComponent ? (
              <div className="mb-2">
                {React.createElement(testimonials[currentIndex].IconComponent, { className: "w-12 h-12 text-primary-500 mx-auto" })}
              </div>
            ) : (
              <div className="text-6xl mb-4">{testimonials[currentIndex].avatar}</div>
            )}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div className="font-semibold text-gray-900">
              {testimonials[currentIndex].name}
            </div>
            <div className="text-gray-600">
              {testimonials[currentIndex].company}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16"
        >
          <p className="text-center text-gray-500 mb-8">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400 flex items-center">
              <StoreIcon className="w-6 h-6 mr-2" />
              Fashion TLV
            </div>
            <div className="text-2xl font-bold text-gray-400 flex items-center">
              <PizzaIcon className="w-6 h-6 mr-2" />
              Pizza Express
            </div>
            <div className="text-2xl font-bold text-gray-400 flex items-center">
              <LawIcon className="w-6 h-6 mr-2" />
              Levy & Partners
            </div>
            <div className="text-2xl font-bold text-gray-400 flex items-center">
              <WebIcon className="w-6 h-6 mr-2" />
              TechStart
            </div>
            <div className="text-2xl font-bold text-gray-400 flex items-center">
              <ClinicIcon className="w-6 h-6 mr-2" />
              Clinic Plus
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
