'use client'

import React from 'react'

export interface FormFieldProps {
  // Field configuration
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea' | 'select'
  name: string
  label: string
  placeholder?: string
  required?: boolean
  
  // Value and change handling
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  
  // Validation
  error?: string
  helperText?: string
  
  // Styling
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  
  // Textarea specific
  rows?: number
  
  // Select specific
  options?: Array<{ value: string; label: string }>
  
  // Additional props
  disabled?: boolean
  className?: string
  
  // Icons
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const FormField: React.FC<FormFieldProps> = ({
  type = 'text',
  name,
  label,
  placeholder,
  required = false,
  value,
  onChange,
  error,
  helperText,
  size = 'md',
  fullWidth = true,
  rows = 4,
  options = [],
  disabled = false,
  className = '',
  leftIcon,
  rightIcon
}) => {
  // Size configurations
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-base'
  }

  // Base input classes
  const baseInputClasses = `
    block border border-gray-300 dark:border-gray-600 
    rounded-lg shadow-sm transition-colors duration-200
    bg-white dark:bg-gray-800 
    text-gray-900 dark:text-white
    placeholder-gray-500 dark:placeholder-gray-400
    focus:ring-2 focus:ring-indigo-500 focus:border-transparent
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
    ${sizeClasses[size]}
    ${error ? 'border-red-500 focus:ring-red-500' : ''}
    ${leftIcon ? 'pl-10' : ''}
    ${rightIcon ? 'pr-10' : ''}
    ${className}
  `.trim()

  // Label classes
  const labelClasses = `
    block text-sm font-medium mb-2
    ${error ? 'text-red-700 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'}
  `.trim()

  // Error/helper text classes
  const helperClasses = `
    mt-2 text-sm
    ${error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'}
  `.trim()

  // Render input based on type
  const renderInput = () => {
    const commonProps = {
      id: name,
      name,
      value,
      onChange,
      placeholder,
      required,
      disabled,
      className: baseInputClasses
    }

    switch (type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={rows}
          />
        )
      
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">{placeholder || 'Sélectionner...'}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      
      default:
        return (
          <input
            {...commonProps}
            type={type}
          />
        )
    }
  }

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {/* Label */}
      <label htmlFor={name} className={labelClasses}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input container with icons */}
      <div className="relative">
        {/* Left icon */}
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-gray-400 dark:text-gray-500">
              {leftIcon}
            </div>
          </div>
        )}

        {/* Input field */}
        {renderInput()}

        {/* Right icon */}
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div className="text-gray-400 dark:text-gray-500">
              {rightIcon}
            </div>
          </div>
        )}
      </div>

      {/* Helper text or error */}
      {(error || helperText) && (
        <p className={helperClasses}>
          {error || helperText}
        </p>
      )}
    </div>
  )
}

export default FormField
