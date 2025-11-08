import { create } from 'zustand';
// import { Service } from '@/data/services';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface QuoteItem {
  id?: string;
  serviceId: string;
  service: Service;
  name?: string;
  quantity: number;
  complexity: 'basic' | 'standard' | 'premium';
  delivery: 'standard' | 'express';
  extras: string[];
  totalPrice: number;
  price?: number;
  category?: string;
}

interface QuoteStore {
  items: QuoteItem[];
  isOpen: boolean;
  addItem: (item: QuoteItem | any) => void;
  removeItem: (serviceId: string) => void;
  updateItem: (serviceId: string, updates: Partial<QuoteItem>) => void;
  clearQuote: () => void;
  toggleQuote: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useQuoteStore = create<QuoteStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (item) => {
    const { items } = get();
    const serviceId = item.serviceId || item.service?.id || item.id;
    const existingIndex = items.findIndex(i => i.serviceId === serviceId || i.service?.id === serviceId);
    
    if (existingIndex >= 0) {
      // Update existing item
      const newItems = [...items];
      newItems[existingIndex] = { ...item, serviceId };
      set({ items: newItems });
    } else {
      // Add new item
      set({ items: [...items, { ...item, serviceId }] });
    }
  },
  
  removeItem: (serviceId) => {
    const { items } = get();
    set({ items: items.filter(item => (item.serviceId || item.service?.id) !== serviceId) });
  },
  
  updateItem: (serviceId, updates) => {
    const { items } = get();
    const newItems = items.map(item => 
      (item.serviceId || item.service?.id) === serviceId ? { ...item, ...updates } : item
    );
    set({ items: newItems });
  },
  
  clearQuote: () => set({ items: [] }),
  
  toggleQuote: () => set((state) => ({ isOpen: !state.isOpen })),
  
  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.totalPrice, 0);
  },
  
  getTotalItems: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },
}));
