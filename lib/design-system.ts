/**
 * Web Yarden Design System
 * Unified color palette, typography, spacing, and component configurations
 */

// Color Palette
export const colors = {
  // Primary brand colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // Secondary colors
  secondary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  
  // Success colors
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  
  // Warning colors
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  // Error colors
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  
  // Neutral colors
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
}

// Gradients
export const gradients = {
  primary: 'from-blue-600 to-indigo-700',
  secondary: 'from-purple-600 to-pink-600',
  success: 'from-green-600 to-blue-700',
  warning: 'from-orange-500 to-red-600',
  info: 'from-cyan-500 to-blue-600',
  brand: 'from-indigo-600 to-purple-600',
  sunset: 'from-orange-400 to-pink-500',
  ocean: 'from-blue-500 to-teal-500',
  forest: 'from-green-500 to-emerald-600'
}

// Typography Scale
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['Fira Code', 'Monaco', 'Consolas', 'monospace']
  },
  
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
  },
  
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  }
}

// Spacing Scale
export const spacing = {
  0: '0px',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem'
}

// Border Radius
export const borderRadius = {
  none: '0px',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px'
}

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: '0 0 #0000'
}

// Component Variants
export const componentVariants = {
  // Card variants
  card: {
    default: {
      background: 'bg-white dark:bg-gray-800',
      border: 'border border-gray-200 dark:border-gray-700',
      shadow: 'shadow-lg',
      radius: 'rounded-xl'
    },
    elevated: {
      background: 'bg-white dark:bg-gray-800',
      border: 'border border-gray-100 dark:border-gray-700',
      shadow: 'shadow-2xl',
      radius: 'rounded-2xl'
    },
    flat: {
      background: 'bg-gray-50 dark:bg-gray-900',
      border: 'border-0',
      shadow: 'shadow-none',
      radius: 'rounded-lg'
    }
  },
  
  // Button variants
  button: {
    primary: {
      background: 'bg-indigo-600 hover:bg-indigo-700',
      text: 'text-white',
      border: 'border-transparent',
      shadow: 'shadow-md hover:shadow-lg'
    },
    secondary: {
      background: 'bg-gray-600 hover:bg-gray-700',
      text: 'text-white',
      border: 'border-transparent',
      shadow: 'shadow-md hover:shadow-lg'
    },
    outline: {
      background: 'bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-2 border-indigo-600 dark:border-indigo-400',
      shadow: 'shadow-none'
    }
  }
}

// Animation configurations
export const animations = {
  transition: {
    fast: 'transition-all duration-150 ease-in-out',
    normal: 'transition-all duration-200 ease-in-out',
    slow: 'transition-all duration-300 ease-in-out'
  },
  
  hover: {
    scale: 'hover:scale-105',
    lift: 'hover:-translate-y-1',
    shadow: 'hover:shadow-xl'
  },
  
  focus: {
    ring: 'focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    outline: 'focus:outline-none'
  }
}

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

// Layout configurations
export const layout = {
  container: {
    center: 'mx-auto',
    padding: 'px-4 sm:px-6 lg:px-8',
    maxWidth: 'max-w-7xl'
  },
  
  grid: {
    cols1: 'grid-cols-1',
    cols2: 'grid-cols-1 sm:grid-cols-2',
    cols3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    gap: 'gap-6'
  },
  
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    start: 'flex items-center justify-start',
    end: 'flex items-center justify-end'
  }
}

// Theme configurations
export const themes = {
  light: {
    background: 'bg-white',
    surface: 'bg-gray-50',
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500'
    },
    border: 'border-gray-200'
  },
  
  dark: {
    background: 'bg-gray-900',
    surface: 'bg-gray-800',
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      muted: 'text-gray-400'
    },
    border: 'border-gray-700'
  }
}

// Utility functions
export const utils = {
  // Get color with opacity
  withOpacity: (color: string, opacity: number) => `${color}/${Math.round(opacity * 100)}`,
  
  // Combine classes
  cn: (...classes: (string | undefined | null | false)[]) => {
    return classes.filter(Boolean).join(' ')
  },
  
  // Get responsive classes
  responsive: (base: string, sm?: string, md?: string, lg?: string, xl?: string) => {
    const classes = [base]
    if (sm) classes.push(`sm:${sm}`)
    if (md) classes.push(`md:${md}`)
    if (lg) classes.push(`lg:${lg}`)
    if (xl) classes.push(`xl:${xl}`)
    return classes.join(' ')
  }
}

// Export default design system
export const designSystem = {
  colors,
  gradients,
  typography,
  spacing,
  borderRadius,
  shadows,
  componentVariants,
  animations,
  breakpoints,
  layout,
  themes,
  utils
}

export default designSystem
