'use client'


import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'

export default function AboutPageClient() {
  const { t } = useTranslations()

  const teamMembers = [
    { key: 'ceo', gradient: 'from-blue-500 to-cyan-500' },
    { key: 'cto', gradient: 'from-purple-500 to-pink-500' },
    { key: 'designer', gradient: 'from-green-500 to-emerald-500' },
    { key: 'developer1', gradient: 'from-orange-500 to-red-500' },
    { key: 'developer2', gradient: 'from-indigo-500 to-purple-500' },
    { key: 'marketing', gradient: 'from-pink-500 to-rose-500' }
  ]

  const timeline = [
    { year: '2019', key: 'foundation', side: 'left' },
    { year: '2020', key: 'growth', side: 'right' },
    { year: '2021', key: 'expansion', side: 'left' },
    { year: '2022', key: 'innovation', side: 'right' },
    { year: '2023', key: 'leadership', side: 'left' },
    { year: '2024', key: 'future', side: 'right' }
  ]

  const values = [
    { key: 'innovation', icon: 'lightbulb', gradient: 'from-blue-600 to-blue-700' },
    { key: 'quality', icon: 'check-circle', gradient: 'from-green-600 to-green-700' },
    { key: 'partnership', icon: 'users', gradient: 'from-purple-600 to-purple-700' },
    { key: 'transparency', icon: 'eye', gradient: 'from-orange-600 to-orange-700' }
  ]

  const stats = [
    { icon: '🚀', value: '150+', label: t('about.stats.projects'), description: 'Projets réalisés avec succès' },
    { icon: '👥', value: '50+', label: t('about.stats.clients'), description: 'Clients satisfaits' },
    { icon: '⭐', value: '5+', label: t('about.stats.experience'), description: 'Années d\'expérience' },
    { icon: '🎯', value: '98%', label: t('about.stats.satisfaction'), description: 'Taux de satisfaction' }
  ]

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'lightbulb':
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        )
      case 'check-circle':
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        )
      case 'users':
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        )
      case 'eye':
        return (
          <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('about.hero.title')}
        subtitle={t('about.hero.description')}
        backgroundGradient={true}
      >
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <span className="text-white font-bold text-lg">{t('about.hero.experience')}</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <span className="text-white font-bold text-lg">{t('about.hero.projects')}</span>
          </div>
        </motion.div>
      </HeroSection>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {t('about.story.content')}
              </p>
              <div className="space-y-4">
                {['expertise', 'market', 'solutions'].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      {t(`about.story.${item}`)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-professional.jpg"
                  alt={t('about.story.imageAlt')}
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('about.mission.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('about.mission.content')}
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('about.values.title')}
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {renderIcon(value.icon)}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t(`about.values.${value.key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(`about.values.${value.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        title={t('about.stats.title')}
        subtitle={t('about.stats.subtitle')}
        stats={stats} 
        backgroundGradient={true} 
      />

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('about.timeline.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('about.timeline.subtitle')}
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-16">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={milestone.key}
                  className={`relative flex items-center ${milestone.side === 'left' ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: milestone.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-5/12 ${milestone.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50 p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {t(`about.timeline.milestones.${milestone.key}.title`)}
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t(`about.timeline.milestones.${milestone.key}.description`)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('about.team.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('about.team.subtitle')}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.key}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500">
                  {/* Avatar Background */}
                  <div className={`h-32 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                      <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border-4 border-white dark:border-gray-800">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">
                            {t(`about.team.members.${member.key}.name`).charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-12 pb-6 px-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {t(`about.team.members.${member.key}.name`)}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {t(`about.team.members.${member.key}.role`)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {t(`about.team.members.${member.key}.bio`)}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {t(`about.team.members.${member.key}.skills`).split(',').map((skill: string, skillIndex: number) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t('about.cta.title')}
        subtitle={t('about.cta.subtitle')}
        primaryCta={{
          text: t('about.cta.button'),
          href: '/contact'
        }}
        variant="gradient"
      />
    </div>
  )
}
