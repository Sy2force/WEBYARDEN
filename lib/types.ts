// Core application types
export interface Service {
  id: string
  name: string
  description: string
  icon: string
  category: string
  price: {
    min: number
    max: number
    currency: string
  }
  features: string[]
  popular?: boolean
  delivery: string
  image?: string
}

export interface Pack {
  id: string
  name: string
  slogan: string
  description: string
  price: number
  originalPrice?: number
  currency: string
  category: string
  services: string[]
  features: string[]
  icon: string
  badge?: string
  badgeColor?: string
  popular?: boolean
  bestValue?: boolean
  recommended?: boolean
  color: string
  delivery: string
  support?: string
  guarantee: string
  includes?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  category: string
  sector: string
  technologies: string[]
  url?: string
  image: string
  featured?: boolean
  year: number
  client: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  skills: string[]
  linkedin?: string
  github?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
  project?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

// Component props types
export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export interface CardProps extends BaseProps {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'sm' | 'md' | 'lg'
  rounded?: 'md' | 'lg' | 'xl' | '2xl'
}

export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  'data-testid'?: string
}

// Form types
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  budget?: string
  timeline?: string
}

export interface QuoteFormData extends ContactFormData {
  serviceType: string
  projectDetails: string
  features: string[]
  urgency: 'low' | 'medium' | 'high'
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
  icon?: string
}

export interface Language {
  code: string
  name: string
  flag: string
}
