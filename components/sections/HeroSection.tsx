'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import Button from '@/components/ui/Button'
import { BaseProps } from '@/lib/types'

interface HeroSectionProps extends BaseProps {
  title?: string
  subtitle?: string
  badge?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  trustBadge?: string
  backgroundGradient?: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  badge,
  primaryCta,
  secondaryCta,
  trustBadge,
  backgroundGradient = true,
  className = ''
}) => {
  const { t } = useTranslations()

  return (
    <section className={`relative overflow-hidden py-20 lg:py-32 ${className}`}>
      {/* Background */}
      {backgroundGradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(58,134,255,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(136,142,240,0.08)_0%,transparent_50%)]" />
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-8"
            >
              <span className="mr-2">🚀</span>
              {badge}
            </motion.div>
          )}
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
          >
            {title || t('home.hero.title')}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {subtitle || t('home.hero.subtitle')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              href={primaryCta?.href || '/packs'}
              className="min-w-[200px]"
            >
              {primaryCta?.text || t('home.hero.cta.primary')}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              href={secondaryCta?.href || '/contact'}
              className="min-w-[200px]"
            >
              {secondaryCta?.text || t('home.hero.cta.secondary')}
            </Button>
          </motion.div>
          
          {/* Trust Badge */}
          {trustBadge && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>{trustBadge}</span>
              </div>
            </motion.div>
          )}
          
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-60 animate-bounce-subtle" />
      <div className="absolute top-40 right-10 w-16 h-16 bg-secondary-200 rounded-full opacity-60 animate-bounce-subtle delay-1000" />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent-200 rounded-full opacity-60 animate-bounce-subtle delay-2000" />
    </section>
  )
}

export default HeroSection
