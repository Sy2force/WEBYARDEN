'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import Card from '@/components/ui/Card'
import { BaseProps } from '@/lib/types'

interface StatItem {
  icon: string
  value: string
  label: string
  description?: string
}

interface StatsSectionProps extends BaseProps {
  title?: string
  subtitle?: string
  stats?: StatItem[]
  backgroundGradient?: boolean
}

const defaultStats: StatItem[] = [
  { icon: '🚀', value: '150+', label: 'Projets Réalisés', description: 'Sites web et applications' },
  { icon: '⭐', value: '98%', label: 'Satisfaction Client', description: 'Note moyenne des clients' },
  { icon: '🌍', value: '25+', label: 'Pays Couverts', description: 'Clients internationaux' },
  { icon: '⚡', value: '24/7', label: 'Support Disponible', description: 'Assistance technique' }
]

const StatsSection: React.FC<StatsSectionProps> = ({
  title,
  subtitle,
  stats = defaultStats,
  backgroundGradient = false,
  className = ''
}) => {
  const { t } = useTranslations()

  return (
    <section className={`py-16 lg:py-24 ${backgroundGradient ? 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800' : ''} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {(title || t('stats.title')) && (
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {title || t('stats.title')}
            </motion.h2>
            
            {(subtitle || t('stats.subtitle')) && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                {subtitle || t('stats.subtitle')}
              </motion.p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                variant="elevated"
                padding="lg"
                className="text-center group hover:shadow-booking transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                {stat.description && (
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </div>
                )}

                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            {t('cta.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
            >
              {t('cta.contact')}
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-3 border-2 border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-400 hover:text-white transition-all duration-200"
            >
              {t('cta.portfolio')}
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default StatsSection
