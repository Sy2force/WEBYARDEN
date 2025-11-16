'use client'


import Link from 'next/link'
import { useTranslations } from '@/components/LocalizedText'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const { t } = useTranslations()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Web Yarden</h3>
                <p className="text-sm text-indigo-300 font-medium">Digital Agency Israel</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-lg">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-600/20 transition-all duration-300 backdrop-blur-sm border border-white/10" title="Twitter">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="group p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-600/20 transition-all duration-300 backdrop-blur-sm border border-white/10" title="Facebook">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="group p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-600/20 transition-all duration-300 backdrop-blur-sm border border-white/10" title="LinkedIn">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                {t('navigation.home')}
              </Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                {t('navigation.services')}
              </Link></li>
              <li><Link href="/packs" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-indigo-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                {t('common.packs')}
              </Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-indigo-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                {t('common.about')}
              </Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-indigo-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                {t('common.contact')}
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t('common.contact')}</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center group hover:text-white transition-colors duration-300">
                <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">📧</span>
                <span className="font-medium">{t('contact.info.email')}</span>
              </li>
              <li className="flex items-center group hover:text-white transition-colors duration-300">
                <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">📱</span>
                <span className="font-medium">{t('contact.info.phone')}</span>
              </li>
              <li className="flex items-center group hover:text-white transition-colors duration-300">
                <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">📍</span>
                <span className="font-medium">{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center group hover:text-white transition-colors duration-300">
                <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">🕒</span>
                <span className="font-medium">{t('contact.info.hours')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block border border-white/10">
            <p className="text-gray-300 font-medium">
              &copy; 2024 <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent font-bold">Web Yarden</span>. {t('rights')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer