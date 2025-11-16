'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { BaseProps } from '@/lib/types'

interface CTASectionProps extends BaseProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  variant?: 'default' | 'gradient' | 'minimal'
  backgroundImage?: string
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  variant = 'default',
  backgroundImage,
  className = ''
}) => {
  const { t } = useTranslations()

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-primary-400 via-secondary-400 to-primary-600 text-white'
      case 'minimal':
        return 'bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white'
      default:
        return 'bg-gray-900 dark:bg-gray-800 text-white'
    }
  }

  return (
    <section className={`py-16 lg:py-24 relative overflow-hidden ${getVariantClasses()} ${className}`}>
      
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Background Pattern */}
      {variant === 'default' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(58,134,255,0.3)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(136,142,240,0.2)_0%,transparent_50%)]" />
        </div>
      )}

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-subtle" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce-subtle delay-1000" />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full animate-bounce-subtle delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">

          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6"
            >
              {subtitle}
            </motion.div>
          )}

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            {title || t('cta.title')}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl mb-10 leading-relaxed max-w-3xl mx-auto opacity-90"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant={variant === 'gradient' ? 'outline' : 'primary'}
              size="lg"
              href={primaryCta?.href || '/contact'}
              className={`min-w-[200px] ${variant === 'gradient' ? 'bg-white text-gray-900 hover:bg-gray-100' : ''}`}
            >
              {primaryCta?.text || t('cta.primaryButton')}
            </Button>

            {secondaryCta && (
              <Button
                variant="ghost"
                size="lg"
                href={secondaryCta?.href || '/services'}
                className={`min-w-[200px] ${variant === 'minimal' ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}
              >
                {secondaryCta?.text || t('cta.secondaryButton')}
              </Button>
            )}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex items-center justify-center space-x-8 text-sm opacity-75"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{t('trust.guarantee')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L10 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{t('trust.support')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{t('trust.rating')}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default CTASection
