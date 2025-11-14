'use client'

import { useParams } from 'next/navigation'
import { translations } from '@/lib/i18n'

interface LocalizedTextProps {
  keyName: string
  fallback?: string
}

export default function LocalizedText({ keyName, fallback }: LocalizedTextProps) {
  const params = useParams()
  const locale = (params?.locale as string) || 'fr'
  
  const getNestedValue = (obj: Record<string, unknown>, path: string): string => {
    const keys = path.split('.')
    let value: unknown = obj
    
    for (const key of keys) {
      if (value && typeof value === 'object' && value !== null && key in value) {
        value = (value as Record<string, unknown>)[key]
      } else {
        return path // Return original path if not found
      }
    }
    
    return typeof value === 'string' ? value : path
  }
  
  const translationObj = translations[locale as keyof typeof translations]
  const text = getNestedValue(translationObj, keyName)
  
  return <>{text}</>
}

export function useTranslations() {
  const params = useParams()
  const locale = (params?.locale as string) || 'fr'

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: unknown = translations[locale as keyof typeof translations]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    // Handle arrays by joining with commas
    if (Array.isArray(value)) {
      return value.join(',')
    }
    
    return typeof value === 'string' ? value : key
  }

  const tArray = (key: string): string[] => {
    const keys = key.split('.')
    let value: unknown = translations[locale as keyof typeof translations]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return []
      }
    }
    
    return Array.isArray(value) ? value : []
  }

  return { t, tArray, locale }
}
