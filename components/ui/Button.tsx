'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface ButtonProps {
  // Variants
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
  
  // Sizes
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  
  // Content
  children: React.ReactNode
  
  // States
  disabled?: boolean
  loading?: boolean
  
  // Interactions
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  
  // Styling
  fullWidth?: boolean
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  gradient?: boolean
  
  // HTML attributes
  type?: 'button' | 'submit' | 'reset'
  className?: string
  
  // Animation
  animated?: boolean
  
  // Icons
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  
  // Accessibility
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  loading = false,
  onClick,
  fullWidth = false,
  rounded = 'lg',
  gradient = false,
  type = 'button',
  className = '',
  animated = true,
  leftIcon,
  rightIcon,
  ariaLabel
}) => {
  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `.trim()

  // Size configurations
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  }

  // Rounded configurations
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  }

  // Variant configurations
  const variantClasses = {
    primary: gradient
      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-500 shadow-lg hover:shadow-xl'
      : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-md hover:shadow-lg',
    
    secondary: gradient
      ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500 shadow-lg hover:shadow-xl'
      : 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg',
    
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-gray-900',
    
    ghost: 'text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 dark:text-indigo-400 dark:hover:bg-indigo-900/20',
    
    danger: gradient
      ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 focus:ring-red-500 shadow-lg hover:shadow-xl'
      : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg',
    
    success: gradient
      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 focus:ring-green-500 shadow-lg hover:shadow-xl'
      : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-md hover:shadow-lg'
  }

  // Animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: animated ? 1.02 : 1,
      y: animated ? -1 : 0,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: animated ? 0.98 : 1,
      transition: { duration: 0.1 }
    }
  }

  // Loading spinner
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${roundedClasses[rounded]}
    ${variantClasses[variant]}
    ${className}
  `.trim()

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      variants={animated ? buttonVariants : undefined}
      initial={animated ? "initial" : undefined}
      whileHover={animated && !disabled && !loading ? "hover" : undefined}
      whileTap={animated && !disabled && !loading ? "tap" : undefined}
      aria-label={ariaLabel}
    >
      {loading && <LoadingSpinner />}
      {!loading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!loading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </motion.button>
  )
}

export default Button
