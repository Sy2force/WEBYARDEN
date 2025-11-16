'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import SearchBar from '@/components/ui/SearchBar'

export default function HeroSection() {
  const { t } = useTranslations()

  const handleSearch = (filters: { service?: string; budget?: string; timeline?: string; urgency?: string }) => {
    // Handle search filters - only log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Search filters:', filters)
    }
    // Redirect to services with filters
    const params = new URLSearchParams(filters)
    window.location.href = `/services?${params.toString()}`
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-booking-blue via-secondary-400 to-primary-600 text-white overflow-hidden">
      {/* Background Pattern - Style Booking.com */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-booking-blue/90 to-secondary-400/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-accent-400/40 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-white/50 rounded-full animate-bounce" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge de confiance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium">
                ⚡ {t('home.hero.badge')} • 500+ {t('home.hero.clients')}
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('home.hero.title')}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('home.hero.subtitle')}
            </motion.p>
          </motion.div>
        </div>

        {/* Search Bar - Style Booking.com */}
        <div className="max-w-5xl mx-auto mb-16">
          <SearchBar 
            onSearch={handleSearch}
            className="transform hover:scale-[1.02] transition-transform duration-200"
          />
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/packs"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-booking-blue font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            data-testid="hero-primary-cta"
          >
            <span className="mr-2 text-xl">🚀</span>
            {t('home.hero.cta')}
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            data-testid="hero-secondary-cta"
          >
            <span className="mr-2 text-xl">💬</span>
            {t('home.hero.ctaSecondary')}
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{t('home.hero.guarantee')}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{t('home.hero.support')}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{t('home.hero.delivery')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}