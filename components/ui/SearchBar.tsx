'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import { Button } from '@/components/ui'

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void
  className?: string
}

interface SearchFilters {
  service?: string
  budget?: string
  timeline?: string
  location?: string
}

export default function SearchBar({ onSearch, className = '' }: SearchBarProps) {
  const { t } = useTranslations()
  const [filters, setFilters] = useState<SearchFilters>({
    service: '',
    budget: '',
    timeline: '',
    location: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(filters)
  }

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`w-full max-w-4xl mx-auto ${className}`}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Service Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                {t('search.service')}
              </label>
              <select
                value={filters.service}
                onChange={(e) => handleFilterChange('service', e.target.value)}
                title={t('search.service')}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="">{t('search.selectService')}</option>
                <option value="website">{t('services.website.title')}</option>
                <option value="ecommerce">{t('services.ecommerce.title')}</option>
                <option value="mobile">{t('services.mobile.title')}</option>
                <option value="digital">{t('services.digital.title')}</option>
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                {t('search.budget')}
              </label>
              <select
                value={filters.budget}
                onChange={(e) => handleFilterChange('budget', e.target.value)}
                title={t('search.budget')}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="">{t('search.selectBudget')}</option>
                <option value="starter">500€ - 2,000€</option>
                <option value="professional">2,000€ - 5,000€</option>
                <option value="premium">5,000€ - 15,000€</option>
                <option value="enterprise">15,000€+</option>
              </select>
            </div>

            {/* Timeline */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                {t('search.timeline')}
              </label>
              <select
                value={filters.timeline}
                onChange={(e) => handleFilterChange('timeline', e.target.value)}
                title={t('search.timeline')}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="">{t('search.selectTimeline')}</option>
                <option value="urgent">{t('search.urgent')}</option>
                <option value="standard">{t('search.standard')}</option>
                <option value="flexible">{t('search.flexible')}</option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                {t('search.location')}
              </label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                title={t('search.location')}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="">{t('search.selectLocation')}</option>
                <option value="israel">{t('search.israel')}</option>
                <option value="remote">{t('search.remote')}</option>
                <option value="international">{t('search.international')}</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              size="lg"
              className="bg-white text-primary-600 hover:bg-white/90 font-semibold px-8 py-3 rounded-xl"
            >
              <span className="mr-2">🔍</span>
              {t('search.findSolution')}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
