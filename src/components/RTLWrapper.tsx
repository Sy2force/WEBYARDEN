'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'

interface RTLWrapperProps {
  children: React.ReactNode
}

export default function RTLWrapper({ children }: RTLWrapperProps) {
  const params = useParams()
  const locale = (params?.locale as string) || 'fr'

  useEffect(() => {
    // Set document direction based on language
    const isRTL = locale === 'he'
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
  }, [locale])

  return <>{children}</>
}
