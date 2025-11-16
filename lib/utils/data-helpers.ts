/**
 * Generic data utility functions to eliminate duplication across data files
 */

export interface BaseDataItem {
  id: string
  category?: string
  popular?: boolean
  featured?: boolean
  bestValue?: boolean
  recommended?: boolean
  slug?: string
}

/**
 * Generic function to find item by ID
 */
export function getItemById<T extends BaseDataItem>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id)
}

/**
 * Generic function to find item by slug
 */
export function getItemBySlug<T extends BaseDataItem>(items: T[], slug: string): T | undefined {
  return items.find(item => item.slug === slug)
}

/**
 * Generic function to filter items by category
 */
export function getItemsByCategory<T extends BaseDataItem>(items: T[], category: string): T[] {
  if (category === 'all') return items
  return items.filter(item => item.category === category)
}

/**
 * Generic function to get featured/popular items
 */
export function getFeaturedItems<T extends BaseDataItem>(items: T[]): T[] {
  return items.filter(item => item.popular || item.featured || item.bestValue || item.recommended)
}

/**
 * Generic function to filter items by any property
 */
export function getItemsByProperty<T extends Record<string, any>>(
  items: T[], 
  property: keyof T, 
  value: any
): T[] {
  if (value === 'all') return items
  return items.filter(item => item[property] === value)
}
