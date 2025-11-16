// Import translations from JSON files
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'
import he from '@/locales/he.json'

// Supported locales
export const locales = ['fr', 'en', 'he'] as const
export const supportedLocales = locales // Export alias for backward compatibility
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'

// Translations object
export const translations = {
  fr,
  en,
  he
} as const

// Language metadata
export const languages = {
  fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  en: { name: 'English', flag: '🇺🇸', dir: 'ltr' },
  he: { name: 'עברית', flag: '🇮🇱', dir: 'rtl' },
} as const

// Helper to check if locale is supported
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// Helper to get language direction
export function getLanguageDir(locale: Locale): 'ltr' | 'rtl' {
  return languages[locale].dir
}

// Alias for backward compatibility
export const getLanguageDirection = getLanguageDir

// Get supported locales function for compatibility
export function getSupportedLocales() {
  return supportedLocales
}

// Helper function to get nested translation values
export function getTranslation(obj: Record<string, unknown>, key: string): string {
  const keys = key.split('.')
  let value: unknown = obj
  
  for (const k of keys) {
    if (value && typeof value === 'object' && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key
}
