'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useTranslations } from '@/components/LocalizedText'
import { Testimonial } from '@/lib/types'

interface TestimonialsSliderProps {
  testimonials?: Testimonial[]
  autoplay?: boolean
  interval?: number
  title?: string
  subtitle?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Cohen',
    role: 'CEO',
    company: 'TechStart IL',
    content: 'Une équipe exceptionnelle qui a transformé notre vision en réalité digitale. Résultats au-delà de nos attentes.',
    rating: 5,
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    id: 'testimonial-2',
    name: 'Marc Dupont',
    role: 'Directeur Marketing',
    company: 'E-Commerce Plus',
    content: 'Professionnalisme, créativité et expertise technique. Notre chiffre d\'affaires a augmenté de 150% grâce à leur travail.',
    rating: 5,
    avatar: '/images/testimonials/marc.jpg'
  },
  {
    id: 'testimonial-3',
    name: 'David Levi',
    role: 'Fondateur',
    company: 'Startup Nation',
    content: 'Support réactif, solutions innovantes. Ils ont compris nos besoins spécifiques et livré un produit parfait.',
    rating: 5,
    avatar: '/images/testimonials/david.jpg'
  }
]

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({
  testimonials = defaultTestimonials,
  autoplay = true,
  interval = 5000,
  title,
  subtitle
}) => {
  const { t } = useTranslations()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, interval, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  if (testimonials.length === 0) return null

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {title || t('testimonials.title')}
          </motion.h2>
          
          {(subtitle || t('subtitle')) && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {subtitle || t('testimonials.subtitle')}
            </motion.p>
          )}
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  variant="elevated"
                  padding="lg"
                  className="text-center border border-gray-100 hover:border-primary-200 transition-colors duration-300"
                >
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    {testimonials[currentIndex].avatar && (
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    )}
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 z-10"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 z-10"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-400'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider
