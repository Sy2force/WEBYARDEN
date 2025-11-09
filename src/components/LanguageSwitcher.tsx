'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslations } from '@/components/LocalizedText'

interface Language {
  code: string
  name: string
  flag: string
  direction: 'ltr' | 'rtl'
}

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷', direction: 'ltr' },
  { code: 'en', name: 'English', flag: '🇺🇸', direction: 'ltr' },
  { code: 'he', name: 'עברית', flag: '🇮🇱', direction: 'rtl' },
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { t, locale } = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  const changeLanguage = (newLocale: string) => {
    // Close dropdown
    setIsOpen(false)
    
    // Update document direction for RTL support
    if (typeof window !== 'undefined') {
      const direction = languages.find(lang => lang.code === newLocale)?.direction || 'ltr'
      document.documentElement.dir = direction
      document.documentElement.lang = newLocale
    }
    
    // For now, just reload the page with the new locale in the URL
    // This is a simple approach that works with the current setup
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const newPath = newLocale === 'fr' ? currentPath : `/${newLocale}${currentPath}`
      window.location.href = newPath
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors bg-white shadow-sm"
        aria-label={Array.isArray(t('common.language')) ? t('common.language')[0] as string : t('common.language') as string}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage.name}
        </span>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  language.code === locale 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700'
                }`}
                dir={language.direction}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
