// Global interfaces for Web Yarden project

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  duration?: string;
  features?: string[];
}

export interface Pack {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

export interface QuoteItem {
  id: string;
  service: Service;
  quantity: number;
  totalPrice: number;
  customizations?: Record<string, any>;
}

export interface EmailItem {
  service: {
    name: string;
    price: number;
  };
  quantity: number;
  totalPrice: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  services?: string[];
}

export interface QuoteFormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  company?: string;
  items: EmailItem[];
  totalPrice: number;
  message?: string;
}

export type Language = 'fr' | 'en' | 'he';

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
}
