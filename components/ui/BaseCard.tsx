'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from '@/components/LocalizedText'

export interface BaseCardProps {
  // Layout variants
  variant?: 'service' | 'pack' | 'ecommerce' | 'dashboard' | 'simple'
  layout?: 'vertical' | 'horizontal' | 'cube'
  
  // Content
  title: string
  subtitle?: string
  description?: string
  image?: string
  icon?: string
  badge?: string
  
  // Pricing
  price?: number
  originalPrice?: number
  currency?: string
  
  // Features/Items
  features?: string[]
  items?: Array<{ label: string; included: boolean }>
  
  // Status and metadata
  status?: string
  category?: string
  delivery?: string
  progress?: number
  
  // Styling
  gradient?: string
  shadowLevel?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  borderRadius?: 'lg' | 'xl' | '2xl'
  
  // Interactions
  onClick?: () => void
  onAddToCart?: () => void
  onSecondaryAction?: () => void
  
  // Animation
  index?: number
  
  // Custom content
  children?: React.ReactNode
  
  // Accessibility
  ariaLabel?: string
}

const BaseCard: React.FC<BaseCardProps> = ({
  variant = 'simple',
  layout = 'vertical',
  title,
  subtitle,
  description,
  image,
  icon,
  badge,
  price,
  originalPrice,
  currency = '₪',
  features = [],
  items = [],
  status,
  category,
  delivery,
  progress,
  gradient = 'from-indigo-500 to-purple-600',
  shadowLevel = 'lg',
  borderRadius = 'xl',
  onClick,
  onAddToCart,
  onSecondaryAction,
  index = 0,
  children,
  ariaLabel
}) => {
  const { t } = useTranslations()
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  }

  // Dynamic classes based on props
  const cardClasses = `
    group bg-white dark:bg-gray-800 
    rounded-${borderRadius} 
    shadow-${shadowLevel} 
    hover:shadow-${shadowLevel === 'sm' ? 'md' : shadowLevel === 'md' ? 'lg' : shadowLevel === 'lg' ? 'xl' : '2xl'} 
    transition-all duration-300 
    overflow-hidden 
    border border-gray-100 dark:border-gray-700 
    hover:border-indigo-200 dark:hover:border-indigo-600
    ${layout === 'horizontal' ? 'flex' : ''}
    ${onClick ? 'cursor-pointer' : ''}
  `.trim()

  const imageClasses = `
    relative 
    ${layout === 'horizontal' ? 'w-1/3 flex-shrink-0' : 'h-48'} 
    bg-gradient-to-br ${gradient} 
    overflow-hidden
  `

  const contentClasses = `
    p-6 
    ${layout === 'horizontal' ? 'flex-1' : ''}
  `

  // Render image section
  const renderImageSection = () => (
    <div className={imageClasses}>
      {image && (
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      )}
      
      {badge && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {badge}
        </div>
      )}
      
      {icon && (
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/20 backdrop-blur-sm text-white text-2xl">
            {icon}
          </div>
        </div>
      )}
    </div>
  )

  // Render content section
  const renderContentSection = () => (
    <div className={contentClasses}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {subtitle}
            </p>
          )}
        </div>
        {status && (
          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
            status === 'Terminé' || status === 'Completed'
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : status === 'En cours' || status === 'Active'
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
          }`}>
            {status}
          </span>
        )}
      </div>
      
      {/* Description */}
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-2">
          {description}
        </p>
      )}

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.slice(0, variant === 'ecommerce' ? 4 : 3).map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <div className="flex-shrink-0 w-4 h-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                <svg className="h-2 w-2 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Items List (for packs) */}
      {items.length > 0 && (
        <ul className="space-y-2 mb-6">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-center">
              <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mr-3 ${
                item.included 
                  ? 'bg-green-100 dark:bg-green-900' 
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}>
                {item.included ? (
                  <svg className="h-2 w-2 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-2 w-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <span className={`text-sm ${
                item.included 
                  ? 'text-gray-700 dark:text-gray-300' 
                  : 'text-gray-400 line-through'
              }`}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Progress Bar (for dashboard) */}
      {typeof progress === 'number' && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-400">{t('common.progress') || 'Progression'}</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300 w-full"
              data-progress={progress}
            />
          </div>
        </div>
      )}

      {/* Price and Metadata */}
      {(price || delivery || category) && (
        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
          <div className="flex justify-between items-center mb-4">
            {price && (
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('services.price')}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    {currency} {price.toLocaleString()}
                  </p>
                  {originalPrice && originalPrice > price && (
                    <p className="text-sm text-gray-400 line-through">
                      {currency} {originalPrice.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            )}
            {delivery && (
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('services.delivery')}</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {delivery}
                </p>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          {(onAddToCart || onSecondaryAction) && (
            <div className="flex gap-2">
              {onAddToCart && (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onAddToCart()
                  }}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
                >
                  {t('simulator.addToCart')}
                </button>
              )}
              {onSecondaryAction && (
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onSecondaryAction()
                  }}
                  className="px-4 py-3 border border-indigo-200 dark:border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors font-semibold text-sm"
                >
                  {t('simulator.simulate') || 'Simuler'}
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Custom content */}
      {children}
    </div>
  )

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      aria-label={ariaLabel || title}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      } : undefined}
    >
      {(image || icon || badge) && renderImageSection()}
      {renderContentSection()}
    </motion.div>
  )
}

export default BaseCard
