import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RTLWrapper from './RTLWrapper'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <RTLWrapper>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </RTLWrapper>
  )
}

export default Layout
