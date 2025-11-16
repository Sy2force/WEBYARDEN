'use client'

import { forwardRef, TextareaHTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    label, 
    error, 
    className = '',
    ...props 
  }, ref) => {
    
    const baseStyles = 'w-full px-4 py-3 text-base border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 resize-none'
    const errorStyles = error ? 'border-red-400 focus:ring-red-400/20' : 'border-gray-300 focus:border-primary-400 focus:ring-primary-400/20 dark:border-gray-600 dark:bg-gray-700'
    
    const textareaClasses = `${baseStyles} ${errorStyles} ${className}`
    
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
        
        <motion.textarea
          ref={ref}
          className={textareaClasses}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...(props as any)}
        />
        
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

Textarea.displayName = 'Textarea'

export default Textarea
