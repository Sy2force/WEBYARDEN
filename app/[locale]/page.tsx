'use client'

import { HeroSection, StatsSection, CTASection, TestimonialsSlider, ServiceCard } from '@/components/sections'
import ShowcaseStats from '@/components/home/ShowcaseStats'
import ServicesShowcase from '@/components/home/ServicesShowcase'
import PortfolioShowcase from '@/components/home/PortfolioShowcase'
import ContactCTA from '@/components/home/ContactCTA'
import TestimonialsShowcase from '@/components/home/TestimonialsShowcase'
import { services } from '@/data/services'
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
      <ServicesShowcase />

      {/* Stats Section */}
      <ShowcaseStats />

      {/* Portfolio Showcase */}
      <PortfolioShowcase />

      {/* Testimonials */}
      <TestimonialsShowcase />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  )
}

export default HomePage
