'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import { projects, projectCategories, projectSectors, getProjectsByCategory, getProjectsBySector } from '@/lib/data/projects'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import CTASection from '@/components/sections/CTASection'
import ProjectCard from '@/components/sections/ProjectCard'
import Button from '@/components/ui/Button'

export default function ProjectsPageClient() {
  const { t } = useTranslations()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSector, setSelectedSector] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'featured'>('grid')

  // Filter projects by category and sector
  const filteredProjects = React.useMemo(() => {
    let filtered = projects

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    if (selectedSector !== 'all') {
      filtered = filtered.filter(project => project.sector === selectedSector)
    }

    return filtered
  }, [selectedCategory, selectedSector])

  // Featured projects for special display
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={t('projects.hero.title')}
        subtitle={t('projects.hero.subtitle')}
        badge={t('projects.hero.badge')}
        backgroundGradient={true}
      />

      {/* Stats Section */}
      <StatsSection 
        stats={[
          { icon: '🚀', value: '150+', label: t('projects.stats.delivered'), description: t('projects.stats.deliveredDesc') },
          { icon: '⭐', value: '98%', label: t('projects.stats.satisfaction'), description: t('projects.stats.satisfactionDesc') },
          { icon: '🏆', value: '4.9/5', label: t('projects.stats.rating'), description: t('projects.stats.ratingDesc') },
          { icon: '🌍', value: '25+', label: t('projects.stats.countries'), description: t('projects.stats.countriesDesc') }
        ]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center gap-3">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="flex items-center gap-2"
            >
              <span>📊</span>
              {t('projects.viewMode.grid')}
            </Button>
            <Button
              variant={viewMode === 'featured' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setViewMode('featured')}
              className="flex items-center gap-2"
            >
              <span>⭐</span>
              {t('projects.viewMode.featured')}
            </Button>
          </div>
        </motion.div>

        {/* Filters - Mobile First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Category Filters */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('projects.filters.category')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {projectCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className="text-base">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Sector Filters */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('projects.filters.sector')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {projectSectors.map((sector) => (
                <Button
                  key={sector.id}
                  variant={selectedSector === sector.id ? 'secondary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSector(sector.id)}
                  className="text-sm"
                >
                  {sector.name}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Display */}
        {viewMode === 'featured' ? (
          // Featured Projects Layout
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('projects.featured.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('projects.featured.subtitle')}
              </p>
            </div>
            
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1
                  }}
                  className="w-full"
                >
                  <ProjectCard 
                    project={project} 
                    index={index} 
                    layout="featured" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          // Grid Projects Layout
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('projects.portfolio.title')}
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t('projects.showing')} <span className="font-semibold text-primary-600">{filteredProjects.length}</span> {t('projects.results')}
              </div>
            </div>
            
            {/* Projects Grid - Mobile-first responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1
                  }}
                  className="h-full"
                  data-testid={`project-card-${project.id}`}
                >
                  <ProjectCard project={project} index={index} layout="grid" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('projects.empty.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              {t('projects.empty.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedSector('all')
                }}
              >
                {t('projects.empty.resetFilters')}
              </Button>
              <Button
                variant="outline"
                onClick={() => setViewMode('featured')}
              >
                {t('projects.empty.viewFeatured')}
              </Button>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t('projects.quickStats.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('projects.quickStats.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {filteredProjects.filter(p => p.featured).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t('projects.quickStats.featured')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent-600 dark:text-accent-400 mb-1">
                  {new Set(filteredProjects.map(p => p.category)).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t('projects.quickStats.categories')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-1">
                  {new Set(filteredProjects.map(p => p.sector)).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t('projects.quickStats.sectors')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {new Set(filteredProjects.map(p => p.year)).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t('projects.quickStats.years')}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <CTASection
        title={t('projects.cta.title')}
        subtitle={t('projects.cta.subtitle')}
        primaryCta={{
          text: t('projects.cta.primary'),
          href: '/contact'
        }}
        secondaryCta={{
          text: t('projects.cta.secondary'),
          href: '/services'
        }}
      />
    </>
  )
}
