'use client'

import { useParams } from 'next/navigation'
import translations from '@/lib/i18n'

interface LocalizedTextProps {
  keyName: string
  fallback?: string
}

export default function LocalizedText({ keyName, fallback }: LocalizedTextProps) {
  const params = useParams()
  const locale = (params?.locale as string) || 'fr'
  
  const getNestedValue = (obj: any, path: string): string => {
    const keys = path.split('.')
    let value = obj
    
    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key]
      } else {
        return fallback || path
      }
    }
    
    return value || fallback || path
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
    let value: any = translations[locale as keyof typeof translations]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return value || key
  }

  return { t, locale }
}
