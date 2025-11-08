'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import QuoteSimulator from '../quote/QuoteSimulator';
import CookieBanner from '../cookies/CookieBanner';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <QuoteSimulator />
      <CookieBanner />
    </div>
  );
};

export default Layout;
