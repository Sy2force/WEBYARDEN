'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import Image from 'next/image'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
  project: string
  result: string
  featured?: boolean
}

const TestimonialsShowcase: React.FC = () => {
  const { t } = useTranslations()
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Premium testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 'sarah-tech',
      name: 'Sarah Cohen',
      role: 'CEO',
      company: 'TechStart',
      avatar: '/images/testimonials/sarah.jpg',
      content: 'Web Yarden a transformé notre vision en une plateforme SaaS performante. Leur expertise technique et leur accompagnement ont été exceptionnels.',
      rating: 5,
      project: 'Plateforme SaaS',
      result: '+300% conversions',
      featured: true
    },
    {
      id: 'david-retail',
      name: 'David Levy',
      role: 'Directeur E-commerce',
      company: 'Fashion Plus',
      avatar: '/images/testimonials/david.jpg',
      content: 'Grâce à leur solution e-commerce sur-mesure, nos ventes ont explosé. ROI remarquable en seulement 3 mois.',
      rating: 5,
      project: 'E-commerce Premium',
      result: '+250% revenus',
      featured: true
    },
    {
      id: 'marie-health',
      name: 'Dr. Marie Dubois',
      role: 'Fondatrice',
      company: 'HealthTech',
      avatar: '/images/testimonials/marie.jpg',
      content: 'Application mobile innovante qui révolutionne notre pratique médicale. Équipe professionnelle et délais respectés.',
      rating: 5,
      project: 'App Mobile Santé',
      result: '50k+ utilisateurs',
      featured: true
    },
    {
      id: 'alex-fintech',
      name: 'Alex Rosenberg',
      role: 'CTO',
      company: 'FinanceNext',
      avatar: '/images/testimonials/alex.jpg',
      content: 'Sécurité, performance et UX exceptionnelle. Web Yarden comprend les enjeux de la fintech.',
      rating: 5,
      project: 'Plateforme Fintech',
      result: '€2M+ traités',
      featured: true
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-100 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {t('home.testimonials.badge')}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('home.testimonials.title')}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('home.testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Testimonial Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                {/* Rating Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">5.0</span>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mr-4">
                      <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-bold">
                        {testimonials[activeTestimonial].name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {testimonials[activeTestimonial].project}
                    </div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {testimonials[activeTestimonial].result}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation & Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Navigation Controls */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={prevTestimonial}
                aria-label={t('home.testimonials.navigation.previous')}
                className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                aria-label={t('home.testimonials.navigation.next')}
                className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="grid grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                    activeTestimonial === index
                      ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {testimonial.company}
                  </div>
                  <div className="text-xs font-medium text-green-600 dark:text-green-400 mt-1">
                    {testimonial.result}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('home.testimonials.trustedBy')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {['TechStart', 'Fashion Plus', 'HealthTech', 'FinanceNext'].map((company) => (
              <div key={company} className="text-center">
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-4 mb-2">
                  <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                    {company.charAt(0)}
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsShowcase
