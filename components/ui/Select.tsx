'use client'

import { forwardRef, SelectHTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
  options: { value: string; label: string }[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    label, 
    error, 
    icon, 
    options,
    className = '',
    ...props 
  }, ref) => {
    
    const baseStyles = 'w-full px-4 py-3 text-base border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 appearance-none bg-white'
    const errorStyles = error ? 'border-red-400 focus:ring-red-400/20' : 'border-gray-300 focus:border-primary-400 focus:ring-primary-400/20'
    const iconStyles = icon ? 'pl-12' : ''
    
    const selectClasses = `${baseStyles} ${errorStyles} ${iconStyles} ${className}`
    
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
          
          <motion.select
            ref={ref}
            className={selectClasses}
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...(props as any)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </motion.select>
          
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
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

Select.displayName = 'Select'

export default Select
