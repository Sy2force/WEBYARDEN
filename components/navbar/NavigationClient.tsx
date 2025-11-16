'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from '@/components/LocalizedText'
import Button from '@/components/ui/Button'
import { supportedLocales, getLanguageDirection, Locale } from '@/lib/i18n'

interface NavItem {
  key: string
  href: string
  children?: NavItem[]
}

const navigationItems: NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'packs', href: '/packs' },
  { key: 'projects', href: '/projects' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' }
]

interface NavigationClientProps {
  locale: string
}

const NavigationClient: React.FC<NavigationClientProps> = ({ locale }) => {
  const { t } = useTranslations()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  const isRTL = getLanguageDirection(locale as Locale) === 'rtl'

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const getLocalizedPath = (href: string, targetLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    return href === '/' ? `/${targetLocale}` : `/${targetLocale}${href}`
  }

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === `/${locale}` || pathname === '/'
    }
    return pathname.includes(href)
  }

  return (
    <motion.nav
      data-testid="main-navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-booking border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/${locale}`}
              className="flex items-center space-x-3 group"
              data-testid="logo-link"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:shadow-lg transition-shadow duration-200">
                W
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors duration-200">
                  Web Yarden
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {t('navigation.tagline')}
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href === '/' ? '' : item.href}`}
                data-testid={`nav-${item.key}`}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  isActivePath(item.href)
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                {t(`navigation.${item.key}`)}
                {isActivePath(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'lang' ? null : 'lang')}
                data-testid="language-dropdown"
                aria-expanded={activeDropdown === 'lang' ? true : false}
                aria-controls="language-menu"
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <span className="text-base">{locale === 'fr' ? '🇫🇷' : locale === 'en' ? '🇺🇸' : '🇮🇱'}</span>
                <span className="hidden sm:inline uppercase">{locale}</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'lang' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <AnimatePresence>
                {activeDropdown === 'lang' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    id="language-menu"
                    data-testid="language-menu"
                    className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-xl shadow-booking border border-gray-100 dark:border-gray-700 py-1 overflow-hidden"
                  >
                    {supportedLocales.map((localeOption) => (
                      <Link
                        key={localeOption}
                        href={getLocalizedPath(pathname.replace(`/${locale}`, '') || '/', localeOption)}
                        onClick={() => setActiveDropdown(null)}
                        className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors duration-200 ${
                          locale === localeOption
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <span>{localeOption === 'fr' ? '🇫🇷' : localeOption === 'en' ? '🇺🇸' : '🇮🇱'}</span>
                        <span className="uppercase font-medium">{localeOption}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Button
                href={`/${locale}/contact`}
                size="sm"
                className="font-semibold"
                data-testid="cta-button"
              >
                {t('navigation.getQuote')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              data-testid="mobile-menu-button"
              aria-expanded={isMenuOpen ? true : false}
              aria-controls="mobile-menu"
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="absolute top-0 left-0 w-6 h-0.5 bg-current origin-center transition-all duration-200"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-200"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="absolute top-5 left-0 w-6 h-0.5 bg-current origin-center transition-all duration-200"
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              id="mobile-menu"
              data-testid="mobile-menu"
              className="lg:hidden border-t border-gray-100 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    href={`/${locale}${item.href === '/' ? '' : item.href}`}
                    onClick={closeMenu}
                    data-testid={`mobile-nav-${item.key}`}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                      isActivePath(item.href)
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button
                    href={`/${locale}/contact`}
                    size="lg"
                    className="w-full font-semibold"
                    onClick={closeMenu}
                    data-testid="mobile-cta-button"
                  >
                    {t('navigation.getQuote')}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close */}
      {(isMenuOpen || activeDropdown) && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => {
            closeMenu()
            setActiveDropdown(null)
          }}
        />
      )}
    </motion.nav>
  )
}

export default NavigationClient
