'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export interface FormProps {
  // Form configuration
  title?: string
  subtitle?: string
  
  // Form handling
  onSubmit: (e: React.FormEvent) => void
  
  // Layout
  columns?: 1 | 2
  spacing?: 'sm' | 'md' | 'lg'
  
  // Styling
  variant?: 'default' | 'card' | 'inline'
  className?: string
  
  // Animation
  animated?: boolean
  
  // Submit button
  submitButton?: {
    label: string
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    loading?: boolean
    disabled?: boolean
  }
  
  // Secondary action
  secondaryButton?: {
    label: string
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  }
  
  // Content
  children: React.ReactNode
}

const Form: React.FC<FormProps> = ({
  title,
  subtitle,
  onSubmit,
  columns = 1,
  spacing = 'md',
  variant = 'default',
  className = '',
  animated = true,
  submitButton,
  secondaryButton,
  children
}) => {
  // Spacing configurations
  const spacingClasses = {
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8'
  }

  // Variant configurations
  const variantClasses = {
    default: '',
    card: 'bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700',
    inline: 'bg-gray-50 dark:bg-gray-900 rounded-lg p-6'
  }

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  // Form container classes
  const formClasses = `
    ${variantClasses[variant]}
    ${className}
  `.trim()

  // Content container classes
  const contentClasses = `
    ${spacingClasses[spacing]}
    ${columns === 2 ? 'grid grid-cols-1 gap-6 sm:grid-cols-2' : ''}
  `.trim()

  return (
    <motion.div
      variants={animated ? formVariants : undefined}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
      className={formClasses}
    >
      {/* Header */}
      {(title || subtitle) && (
        <motion.div
          variants={animated ? itemVariants : undefined}
          className="mb-8"
        >
          {title && (
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={onSubmit} className={spacingClasses[spacing]}>
        {/* Form fields */}
        <motion.div
          variants={animated ? itemVariants : undefined}
          className={contentClasses}
        >
          {children}
        </motion.div>

        {/* Action buttons */}
        {(submitButton || secondaryButton) && (
          <motion.div
            variants={animated ? itemVariants : undefined}
            className={`flex gap-4 ${columns === 2 ? 'sm:col-span-2' : ''} pt-4`}
          >
            {submitButton && (
              <Button
                type="submit"
                variant={submitButton.variant || 'primary'}
                size={submitButton.size || 'md'}
                loading={submitButton.loading}
                disabled={submitButton.disabled}
                gradient
                fullWidth={!secondaryButton}
                animated={animated}
              >
                {submitButton.label}
              </Button>
            )}
            
            {secondaryButton && (
              <Button
                type="button"
                variant={secondaryButton.variant || 'outline'}
                size={secondaryButton.size || 'md'}
                onClick={secondaryButton.onClick}
                animated={animated}
              >
                {secondaryButton.label}
              </Button>
            )}
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}

export default Form
