'use client'

import React from 'react'
import NavigationClient from '@/components/navbar/NavigationClient'
import Footer from './Footer'
import { useParams } from 'next/navigation'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  const params = useParams()
  const locale = params?.locale as string || 'fr'

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 ${className}`}>
      <NavigationClient locale={locale} />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout