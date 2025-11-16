'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from '@/lib/data/services'
import { ServiceCard, CTASection, StatsSection } from '@/components/sections'
import { Input, Button } from '@/components/ui'
import { useTranslations } from '@/components/LocalizedText'

export default function ServicesPage() {
  const { t } = useTranslations()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  // Categories for filtering
  const categories = [
    { value: 'all', label: t('services.categories.all') },
    { value: 'web-development', label: t('services.categories.web') },
    { value: 'design', label: t('services.categories.design') },
    { value: 'marketing', label: t('services.categories.marketing') },
    { value: 'ecommerce', label: t('services.categories.ecommerce') },
    { value: 'mobile', label: t('services.categories.mobile') },
    { value: 'consulting', label: t('services.categories.consulting') },
    { value: 'maintenance', label: t('services.categories.maintenance') },
    { value: 'seo', label: t('services.categories.seo') }
  ]
  
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8"
            >
              {t('services.hero.badge')}
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {t('services.hero.title')}
              <span className="block text-accent-400">{t('services.hero.titleAccent')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('services.hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100" data-testid="services-discover-cta">
                {t('services.hero.cta.discover')}
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10" data-testid="services-quote-cta">
                {t('services.hero.cta.quote')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white sticky top-16 z-40 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row gap-4 items-center justify-between"
          >
            <div className="flex-1 max-w-md">
              <Input
                placeholder={t('services.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
                data-testid="services-search-input"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className="text-xs"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
              
              <div className="text-sm text-gray-600 whitespace-nowrap">
                {filteredServices.length} {filteredServices.length > 1 ? t('services.search.results.plural') : t('services.search.results.singular')}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {t('services.search.noResults.title')}
              </h3>
              <p className="text-gray-500 mb-6">
                {t('services.search.noResults.description')}
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                data-testid="services-reset-filters"
              >
                {t('services.search.noResults.reset')}
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        title={t('services.stats.title')}
        subtitle={t('services.stats.subtitle')}
      />

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title={t('services.cta.title')}
        subtitle={t('services.cta.subtitle')}
        description={t('services.cta.description')}
        primaryCta={{ text: t('services.cta.primary'), href: "/contact" }}
        secondaryCta={{ text: t('services.cta.secondary'), href: "/projects" }}
      />
    </div>
  )
}
