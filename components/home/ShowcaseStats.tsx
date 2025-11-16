'use client'


import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'

const ShowcaseStats: React.FC = () => {
  const { t } = useTranslations()

  const stats = [
    {
      icon: '🏆',
      number: '500+',
      label: t('home.stats.clients'),
      description: t('home.stats.clientsDesc')
    },
    {
      icon: '🚀',
      number: '1200+',
      label: t('home.stats.projects'),
      description: t('home.stats.projectsDesc')
    },
    {
      icon: '⭐',
      number: '98%',
      label: t('home.stats.satisfaction'),
      description: t('home.stats.satisfactionDesc')
    },
    {
      icon: '🌍',
      number: '25+',
      label: t('home.stats.countries'),
      description: t('home.stats.countriesDesc')
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('home.stats.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('home.stats.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-primary-300 dark:group-hover:border-primary-600">
                <div className="text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            {t('home.stats.trustedBy')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Logos des clients - placeholders */}
            <div className="bg-gray-200 dark:bg-gray-700/50 rounded-lg px-6 py-3 font-semibold text-gray-600 dark:text-gray-300">
              StartupTech
            </div>
            <div className="bg-gray-200 dark:bg-gray-700/50 rounded-lg px-6 py-3 font-semibold text-gray-600 dark:text-gray-300">
              EcommercePro
            </div>
            <div className="bg-gray-200 dark:bg-gray-700/50 rounded-lg px-6 py-3 font-semibold text-gray-600 dark:text-gray-300">
              TechCorp
            </div>
            <div className="bg-gray-200 dark:bg-gray-700/50 rounded-lg px-6 py-3 font-semibold text-gray-600 dark:text-gray-300">
              InnovateNow
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShowcaseStats
