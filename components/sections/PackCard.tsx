'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import { useCartStore } from '@/store/cartStore'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { Pack } from '@/lib/types'

interface PackCardProps {
  pack: Pack
  index?: number
  layout?: 'vertical' | 'horizontal' | 'comparison' | 'cube'
  selected?: boolean
  onSelect?: (pack: Pack) => void
  enableCart?: boolean
}

const PackCard: React.FC<PackCardProps> = ({
  pack,
  index = 0,
  layout = 'vertical',
  selected = false,
  onSelect,
  enableCart = false
}) => {
  const { t } = useTranslations()
  const { addItem } = useCartStore()
  const [isAdded, setIsAdded] = useState(false)

  const handleClick = () => {
    onSelect?.(pack)
  }

  const handleAddToCart = () => {
    if (enableCart) {
      addItem({
        id: pack.id,
        image: pack.icon || '',
        title: pack.name,
        price: pack.price,
        category: 'Pack',
        description: pack.description,
        delivery: pack.delivery,
      })
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 3000)
    }
  }

  const discountPercentage = pack.originalPrice 
    ? Math.round(((pack.originalPrice - pack.price) / pack.originalPrice) * 100)
    : 0

  // Cube layout for compact display
  if (layout === 'cube') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className={`relative group w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 ${
          pack.popular 
            ? 'border-2 border-primary-500 ring-2 ring-primary-500/30' 
            : 'border border-gray-200 dark:border-gray-700 hover:border-primary-300'
        }`}
        data-testid={`pack-card-cube-${pack.id}`}
      >
        {/* Popular Badge */}
        {pack.popular && (
          <div className="absolute top-2 left-2 z-10">
            <Badge variant="primary" size="sm" className="text-xs font-bold">
              {t('packs.popular')}
            </Badge>
          </div>
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 z-10">
            <Badge variant="success" size="sm" className="text-xs font-bold">
              -{discountPercentage}%
            </Badge>
          </div>
        )}

        <div className="p-4 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {pack.name}
            </h3>
            <div className="text-2xl font-bold text-primary-600">
              {pack.price.toLocaleString()}€
            </div>
            {pack.originalPrice && (
              <div className="text-sm text-gray-400 line-through">
                {pack.originalPrice.toLocaleString()}€
              </div>
            )}
          </div>

          {/* Features (limited) */}
          <div className="flex-1 mb-4">
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              {pack.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-3 h-3 text-accent-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate">{feature}</span>
                </li>
              ))}
              {pack.features.length > 3 && (
                <li className="text-xs text-gray-500">
                  +{pack.features.length - 3} {t('packs.moreFeatures')}
                </li>
              )}
            </ul>
          </div>

          {/* CTA Button */}
          <Button
            variant={pack.popular ? 'primary' : 'outline'}
            size="sm"
            onClick={enableCart ? handleAddToCart : handleClick}
            className="w-full text-sm"
            data-testid={`pack-button-${pack.id}`}
          >
            {enableCart ? (isAdded ? t('packs.added') : t('packs.addToCart')) : t('packs.choose')}
          </Button>
        </div>
      </motion.div>
    )
  }

  const cardClasses = `
    h-full flex flex-col group cursor-pointer transition-all duration-300
    ${layout === 'horizontal' ? 'lg:flex-row lg:items-center' : ''}
    ${selected ? 'ring-2 ring-primary-400 shadow-booking' : 'hover:shadow-booking'}
    ${pack.popular ? 'relative border-primary-200' : 'border border-gray-100 hover:border-primary-200'}
  `

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={handleClick}
      className="h-full"
      data-testid={`pack-card-${layout}-${pack.id}`}
    >
      <Card
        variant={pack.popular ? 'elevated' : 'default'}
        padding="lg"
        className={cardClasses}
      >
        {/* Popular Badge */}
        {pack.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <Badge variant="primary" className="px-6 py-2 font-bold text-sm">
              {t('packs.mostPopular')}
            </Badge>
          </div>
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute -top-3 right-4 z-10">
            <Badge variant="success" className="px-4 py-2 font-bold text-sm">
              -{discountPercentage}%
            </Badge>
          </div>
        )}

        {/* Header */}
        <div className={`${layout === 'horizontal' ? 'lg:w-1/3' : ''} mb-6`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {pack.name}
            </h3>
            {pack.badge && (
              <Badge variant="secondary" size="sm">
                {pack.badge}
              </Badge>
            )}
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {pack.description}
          </p>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                {pack.price.toLocaleString()}€
              </span>
              {pack.originalPrice && pack.originalPrice > pack.price && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    {pack.originalPrice.toLocaleString()}€
                  </span>
                  <Badge variant="success" size="sm">
                    -{Math.round((1 - pack.price / pack.originalPrice) * 100)}%
                  </Badge>
                </>
              )}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {t('packs.priceUnit')}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className={`${layout === 'horizontal' ? 'lg:w-2/3 lg:pl-8' : ''} flex-1`}>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('packs.included')}
            </h4>
            <ul className="space-y-3">
              {pack.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          {pack.includes && pack.includes.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                {t('packs.includes')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {pack.includes.map((service: string, idx: number) => (
                  <Badge key={idx} variant="secondary" size="sm">
                    +{service}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto">
            {/* Delivery & Support */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L10 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {pack.delivery}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {pack.support}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              variant={pack.popular ? 'primary' : 'outline'}
              size="lg"
              onClick={enableCart ? handleAddToCart : handleClick}
              className={`w-full ${pack.popular ? 'bg-gradient-to-r from-primary-400 to-secondary-400' : 'group-hover:bg-primary-400 group-hover:text-white group-hover:border-primary-400'} transition-all duration-200`}
              data-testid={`pack-cta-${pack.id}`}
            >
              {enableCart ? (isAdded ? t('packs.added') : t('packs.addToCart')) : t('packs.choose')}
            </Button>

            {/* Trust Element */}
            {pack.popular && (
              <div className="flex items-center justify-center mt-4 text-xs text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {t('packs.mostChosen')}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default PackCard
