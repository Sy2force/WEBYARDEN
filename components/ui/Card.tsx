'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { CardProps } from '@/lib/types'

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    children, 
    variant = 'default', 
    padding = 'md', 
    rounded = '2xl',
    className = '',
    ...props 
  }, ref) => {
    
    const baseStyles = 'bg-white dark:bg-gray-800 transition-all duration-200'
    
    const variants = {
      default: 'shadow-card hover:shadow-card-hover',
      elevated: 'shadow-card-lg hover:shadow-booking',
      outlined: 'border border-gray-200 dark:border-gray-700 hover:border-primary-300'
    }
    
    const paddings = {
      sm: 'p-4',
      md: 'p-6', 
      lg: 'p-8'
    }
    
    const roundings = {
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl'
    }
    
    const cardClasses = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${roundings[rounded]} ${className}`
    
    return (
      <motion.div
        ref={ref}
        className={cardClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -2 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card
