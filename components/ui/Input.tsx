'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
  variant?: 'default' | 'search'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    icon, 
    variant = 'default',
    className = '',
    ...props 
  }, ref) => {
    
    const baseStyles = 'w-full px-4 py-3 text-base border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1'
    
    const variants = {
      default: 'border-gray-300 focus:border-primary-400 focus:ring-primary-400/20 dark:border-gray-600 dark:bg-gray-700',
      search: 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-400 focus:ring-primary-400/20'
    }
    
    const errorStyles = error ? 'border-red-400 focus:ring-red-400/20' : ''
    const iconStyles = icon ? 'pl-12' : ''
    
    const inputClasses = `${baseStyles} ${variants[variant]} ${errorStyles} ${iconStyles} ${className}`
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}
          
          <motion.input
            ref={ref}
            className={inputClasses}
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...(props as any)}
          />
        </div>
        
        {error && (
          <motion.p 
            id={`${props.id}-error`}
            className="mt-2 text-sm text-red-600 dark:text-red-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            role="alert"
            aria-live="polite"
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
