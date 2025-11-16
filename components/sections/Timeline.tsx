'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { BaseProps } from '@/lib/types'

interface TimelineItem {
  year: string
  title: string
  description: string
  achievements?: string[]
  highlight?: boolean
}

interface TimelineProps extends BaseProps {
  title?: string
  subtitle?: string
  items?: TimelineItem[]
}

const defaultTimelineItems: TimelineItem[] = [
  {
    year: '2020',
    title: 'Création de Web Yarden',
    description: 'Lancement de notre agence digitale avec une vision claire : démocratiser l\'excellence numérique.',
    achievements: ['Premier client', 'Équipe fondatrice', 'Vision définie'],
    highlight: false
  },
  {
    year: '2021',
    title: 'Expansion des Services',
    description: 'Développement de notre gamme complète : développement, design, marketing digital.',
    achievements: ['25+ projets', '10 clients réguliers', 'Équipe élargie'],
    highlight: false
  },
  {
    year: '2022',
    title: 'Innovation & Croissance',
    description: 'Adoption des dernières technologies et expansion internationale.',
    achievements: ['100+ projets', 'Clients internationaux', 'Technologies AI'],
    highlight: true
  },
  {
    year: '2023',
    title: 'Excellence Confirmée',
    description: 'Reconnaissance comme leader du marché avec des résultats exceptionnels.',
    achievements: ['150+ projets', '25 pays', '98% satisfaction'],
    highlight: false
  },
  {
    year: '2024',
    title: 'Avenir Digital',
    description: 'Nouveaux horizons avec l\'IA, blockchain et solutions sur-mesure.',
    achievements: ['Innovation continue', 'Partenariats stratégiques', 'Vision 2030'],
    highlight: false
  }
]

const Timeline: React.FC<TimelineProps> = ({
  title,
  subtitle,
  items = defaultTimelineItems,
  className = ''
}) => {
  const { t } = useTranslations()

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {title || t('timeline.title')}
          </motion.h2>
          
          {(subtitle || t('timeline.subtitle')) && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {subtitle || t('timeline.subtitle')}
            </motion.p>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-200 via-secondary-300 to-primary-200" />

          <div className="space-y-16">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card
                    variant={item.highlight ? 'elevated' : 'default'}
                    padding="lg"
                    className={`group hover:shadow-booking transition-all duration-300 ${item.highlight ? 'border-primary-200 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-800' : 'border border-gray-100 hover:border-primary-200'}`}
                  >
                    {/* Year Badge */}
                    <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                      <Badge 
                        variant={item.highlight ? 'primary' : 'secondary'}
                        size="lg"
                        className="text-lg font-bold px-4 py-2"
                      >
                        {item.year}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4 text-accent-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                </div>

                {/* Center Dot */}
                <div className="relative w-2/12 flex justify-center">
                  <div className={`w-6 h-6 rounded-full border-4 ${item.highlight ? 'bg-primary-400 border-primary-200' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'} z-10 group-hover:scale-125 transition-transform duration-200`}>
                    {item.highlight && (
                      <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-75" />
                    )}
                  </div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>

          {/* End Dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: items.length * 0.1 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full"
          />
        </div>

      </div>
    </section>
  )
}

export default Timeline
