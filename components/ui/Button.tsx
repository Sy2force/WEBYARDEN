'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ButtonProps } from '@/lib/types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    disabled = false, 
    loading = false, 
    onClick, 
    href, 
    type = 'button', 
    className = '',
    'data-testid': testId,
    ...props 
  }, ref) => {
    
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-primary-400 hover:bg-primary-500 text-white shadow-card hover:shadow-card-hover focus:ring-primary-400',
      secondary: 'bg-secondary-400 hover:bg-secondary-500 text-white shadow-card hover:shadow-card-hover focus:ring-secondary-400',
      outline: 'border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white focus:ring-primary-400',
      ghost: 'text-primary-400 hover:bg-primary-50 focus:ring-primary-400'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl'
    }
    
    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
    
    const content = (
      <>
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </>
    )
    
    if (href) {
      return (
        <Link 
          href={href} 
          className={buttonClasses}
          data-testid={testId || `button-link-${variant}`}
          role="button"
          aria-disabled={disabled ? 'true' : undefined}
        >
          <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center"
          >
            {content}
          </motion.span>
        </Link>
      )
    }
    
    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        data-testid={testId || `button-${variant}`}
        aria-disabled={disabled || loading ? 'true' : undefined}
        {...props}
      >
        {content}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
