'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import HeroSection from '@/components/home/HeroSection'
import FeaturedServices from '@/components/home/FeaturedServices'
import StatsSection from '@/components/home/StatsSection'
import PackCard from '@/components/PackCard'
import { useTranslations } from '@/components/LocalizedText'
import { services } from '@/data/services'
import { ecommercePacks, Pack } from '@/lib/packs'

export default function Page() {
  const { t } = useTranslations()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        {t('buttons.skipToContent')}
      </a>

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Services Section */}
        <FeaturedServices />

        {/* Packs Preview Section */}
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300" aria-labelledby="packs-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="text-center mb-12 md:mb-16"
            >
              <motion.h2 
                id="packs-heading"
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {t('packs.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                {t('packs.subtitle')}
              </motion.p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
            >
              {ecommercePacks.slice(0, 3).map((pack: Pack, index: number) => (
                <motion.div key={pack.id} variants={itemVariants}>
                  <PackCard
                    pack={pack}
                    index={index}
                    isHorizontal={false}
                    isCube={false}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Link
                href="/packs"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={t('buttons.viewAll') + ' ' + t('packs.title')}
              >
                {t('buttons.viewAll')} {t('packs.title')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Portfolio Preview */}
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" aria-labelledby="portfolio-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="text-center mb-12 md:mb-16"
            >
              <motion.h2 
                id="portfolio-heading"
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {t('home.portfolio.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                {t('home.portfolio.subtitle')}
              </motion.p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {[
                {
                  title: t('home.portfolio.ecommerce'),
                  gradient: 'from-blue-500 to-indigo-600',
                  category: t('home.portfolio.ecommerceCategory'),
                  icon: '🛍️',
                  description: t('home.portfolio.ecommerceDesc')
                },
                {
                  title: t('home.portfolio.mobile'),
                  gradient: 'from-emerald-500 to-teal-600',
                  category: t('home.portfolio.mobileCategory'),
                  icon: '📱',
                  description: t('home.portfolio.mobileDesc')
                },
                {
                  title: t('home.portfolio.corporate'),
                  gradient: 'from-violet-500 to-purple-600',
                  category: t('home.portfolio.corporateCategory'),
                  icon: '🏢',
                  description: t('home.portfolio.corporateDesc')
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center relative p-6`}>
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-white text-lg font-bold text-center mb-2 z-10">{project.title}</h3>
                    <span className="text-white/80 text-sm text-center z-10">{project.category}</span>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
                    <p className="text-white text-center text-sm mb-4 font-medium">{project.description}</p>
                    <Link 
                      href="/projects" 
                      className="bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:bg-white dark:hover:bg-gray-800"
                      aria-label={`${t('buttons.viewProject')} ${project.title}`}
                    >
                      {t('buttons.viewProject')}
                      <svg className="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={t('buttons.viewAll') + ' ' + t('common.projects')}
              >
                {t('buttons.viewAll')} {t('common.projects')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* Final CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 text-white transition-colors duration-300" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t('home.cta.title')}
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                {t('home.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
                <Link
                  href="/devis"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 text-sm sm:text-base"
                  aria-label={t('header.getQuote')}
                >
                  <svg className="mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('header.getQuote')}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 text-sm sm:text-base"
                  aria-label={t('common.contact')}
                >
                  <svg className="mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('common.contact')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
