'use client'


import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from '@/components/LocalizedText'
import { projects } from '@/lib/data/projects'
import ProjectCard from '@/components/sections/ProjectCard'

const PortfolioShowcase: React.FC = () => {
  const { t } = useTranslations()

  // Get featured projects for homepage showcase
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20" />

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
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('home.portfolio.badge')}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('home.portfolio.title')}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                <ProjectCard 
                  project={project}
                  index={index}
                />
                
                {/* Hover overlay with project details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-end">
                  <div className="p-6 text-white w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="bg-primary-500/80 px-2 py-1 rounded text-xs font-medium">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <p className="text-white/80">{t('home.portfolio.metrics.projects')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <p className="text-white/80">{t('home.portfolio.metrics.satisfaction')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <p className="text-white/80">{t('home.portfolio.metrics.countries')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9★</div>
              <p className="text-white/80">{t('home.portfolio.metrics.rating')}</p>
            </div>
          </div>
        </motion.div>

        {/* Technologies Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('home.portfolio.technologies.title')}
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Stripe', 'MongoDB'].map((tech) => (
              <div key={tech} className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.portfolio.cta.title')}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('home.portfolio.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="mr-2">🎯</span>
                {t('home.portfolio.cta.primary')}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              >
                <span className="mr-2">💡</span>
                {t('home.portfolio.cta.secondary')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioShowcase
