'use client'

import { HeroSection, StatsSection, CTASection, TestimonialsSlider, ServiceCard } from '@/components/sections'
import { services } from '@/lib/data/services'
import { motion } from 'framer-motion'

// Temporary i18n until proper setup
const useTranslations = (key: string) => (subkey: string) => `${key}.${subkey}`

const HomePage: React.FC = () => {
  const t = useTranslations('home')
  
  // Featured services for homepage
  const featuredServices = services.slice(0, 6)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Services */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard 
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-400 to-secondary-400 text-white font-semibold rounded-xl hover:shadow-booking transform hover:scale-105 transition-all duration-300 shadow-card"
              data-testid="homepage-services-cta"
            >
              {t('services.viewAll')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        title={t('stats.title')}
        subtitle={t('stats.subtitle')}
      />

      {/* Testimonials */}
      <TestimonialsSlider 
        title={t('testimonials.title')}
        subtitle={t('testimonials.subtitle')}
      />

      {/* Final CTA */}
      <CTASection 
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        description={t('cta.description')}
        primaryCta={{
          text: t('cta.primary'),
          href: "/packs"
        }}
        secondaryCta={{
          text: t('cta.secondary'),
          href: "/contact"
        }}
        variant="gradient"
      />
    </main>
  )
}

export default HomePage
