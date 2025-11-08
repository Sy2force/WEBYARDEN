// Global type declarations for Web Yarden

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    emailjs?: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, params: any, publicKey: string) => Promise<any>;
    };
  }
}

// EmailJS types
export interface EmailJSResponse {
  status: number;
  text: string;
}

// Quote item interface
export interface QuoteItem {
  service: {
    id: string;
    name: string;
    category: string;
    basePrice: number;
  };
  quantity: number;
  totalPrice: number;
  delivery?: string;
  comments?: string;
}

// Contact form interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

// Service interface
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  basePrice: number;
  features: string[];
  icon?: string;
  popular?: boolean;
}

export {};
