'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface HeroSectionProps {
  // Theme variants
  theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'custom'
  
  // Content
  title: string
  subtitle?: string
  description?: string
  
  // Custom gradient (overrides theme)
  gradient?: string
  
  // Actions
  primaryAction?: {
    label: string
    onClick: () => void
    variant?: 'solid' | 'outline'
  }
  secondaryAction?: {
    label: string
    onClick: () => void
    variant?: 'solid' | 'outline'
  }
  
  // Layout
  size?: 'sm' | 'md' | 'lg' | 'xl'
  alignment?: 'left' | 'center' | 'right'
  
  // Background
  backgroundImage?: string
  overlay?: boolean
  overlayOpacity?: number
  
  // Animation
  animated?: boolean
  
  // Custom content
  children?: React.ReactNode
}

const HeroSection: React.FC<HeroSectionProps> = ({
  theme = 'primary',
  title,
  subtitle,
  description,
  gradient,
  primaryAction,
  secondaryAction,
  size = 'lg',
  alignment = 'center',
  backgroundImage,
  overlay = false,
  overlayOpacity = 0.5,
  animated = true,
  children
}) => {
  // Theme gradients
  const themeGradients = {
    primary: 'from-blue-600 to-indigo-700',
    secondary: 'from-purple-600 to-pink-600',
    success: 'from-green-600 to-blue-700',
    warning: 'from-orange-500 to-red-600',
    info: 'from-cyan-500 to-blue-600',
    custom: gradient || 'from-gray-600 to-gray-800'
  }

  // Size configurations
  const sizeConfig = {
    sm: {
      padding: 'py-12 sm:py-16',
      titleSize: 'text-3xl sm:text-4xl md:text-5xl',
      subtitleSize: 'text-lg',
      descriptionSize: 'text-base',
      maxWidth: 'max-w-4xl'
    },
    md: {
      padding: 'py-16 sm:py-20',
      titleSize: 'text-4xl sm:text-5xl md:text-6xl',
      subtitleSize: 'text-xl',
      descriptionSize: 'text-lg',
      maxWidth: 'max-w-5xl'
    },
    lg: {
      padding: 'py-20 sm:py-24',
      titleSize: 'text-4xl sm:text-5xl md:text-6xl',
      subtitleSize: 'text-xl',
      descriptionSize: 'text-xl',
      maxWidth: 'max-w-6xl'
    },
    xl: {
      padding: 'py-24 sm:py-32',
      titleSize: 'text-5xl sm:text-6xl md:text-7xl',
      subtitleSize: 'text-2xl',
      descriptionSize: 'text-xl',
      maxWidth: 'max-w-7xl'
    }
  }

  // Alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const currentSize = sizeConfig[size]
  const currentGradient = themeGradients[theme]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  // Button component
  const ActionButton: React.FC<{
    action: NonNullable<HeroSectionProps['primaryAction']>
    isPrimary?: boolean
  }> = ({ action, isPrimary = false }) => {
    const baseClasses = "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    
    let buttonClasses = baseClasses
    
    if (isPrimary) {
      if (action.variant === 'outline') {
        buttonClasses += " border-2 border-white text-white hover:bg-white hover:text-gray-900"
      } else {
        buttonClasses += " bg-white text-gray-900 hover:bg-gray-100"
      }
    } else {
      if (action.variant === 'outline') {
        buttonClasses += " border-2 border-white/70 text-white/90 hover:border-white hover:text-white hover:bg-white/10"
      } else {
        buttonClasses += " bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
      }
    }

    return (
      <motion.button
        variants={animated ? buttonVariants : undefined}
        onClick={action.onClick}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {action.label}
      </motion.button>
    )
  }

  return (
    <section 
      className={`relative bg-gradient-to-r ${currentGradient} text-white overflow-hidden ${
        backgroundImage ? 'bg-cover bg-center bg-no-repeat' : ''
      }`}
      {...(backgroundImage && { style: { backgroundImage: `url(${backgroundImage})` } })}
    >
      {/* Overlay */}
      {(overlay || backgroundImage) && (
        <div 
          className={`absolute inset-0 bg-black opacity-${Math.round(overlayOpacity * 100)}`}
        />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className={`relative ${currentSize.maxWidth} mx-auto ${currentSize.padding} px-4 sm:px-6 lg:px-8`}>
        <motion.div
          variants={animated ? containerVariants : undefined}
          initial={animated ? "hidden" : undefined}
          animate={animated ? "visible" : undefined}
          className={alignmentClasses[alignment]}
        >
          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={animated ? itemVariants : undefined}
              className={`${currentSize.subtitleSize} font-medium text-white/90 mb-4`}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            variants={animated ? itemVariants : undefined}
            className={`${currentSize.titleSize} font-extrabold mb-6 leading-tight`}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={animated ? itemVariants : undefined}
              className={`${currentSize.descriptionSize} text-white/80 mb-8 leading-relaxed ${
                alignment === 'center' ? 'mx-auto max-w-3xl' : ''
              }`}
            >
              {description}
            </motion.p>
          )}

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <motion.div
              variants={animated ? itemVariants : undefined}
              className={`flex flex-col sm:flex-row gap-4 ${
                alignment === 'center' ? 'justify-center' : 
                alignment === 'right' ? 'justify-end' : 'justify-start'
              }`}
            >
              {primaryAction && (
                <ActionButton action={primaryAction} isPrimary />
              )}
              {secondaryAction && (
                <ActionButton action={secondaryAction} />
              )}
            </motion.div>
          )}

          {/* Custom content */}
          {children && (
            <motion.div
              variants={animated ? itemVariants : undefined}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
