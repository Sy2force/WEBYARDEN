'use client'


import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from '@/components/LocalizedText'

const ContactCTA: React.FC = () => {
  const { t } = useTranslations()

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {t('home.contact.badge')}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t('home.contact.title')}
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('home.contact.subtitle')}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '⚡', text: t('home.contact.features.response') },
                { icon: '🎯', text: t('home.contact.features.personalized') },
                { icon: '🔒', text: t('home.contact.features.confidential') }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-white/90">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right CTA Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t('home.contact.cta.title')}
              </h3>
              <p className="text-white/80">
                {t('home.contact.cta.subtitle')}
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/972543210987?text=Bonjour%20Web%20Yarden%2C%20je%20souhaiterais%20discuter%20d%27un%20projet%20digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.333"/>
                </svg>
                {t('home.contact.cta.whatsapp')}
              </motion.a>

              {/* Phone CTA */}
              <motion.a
                href="tel:+972543210987"
                className="flex items-center justify-center w-full px-6 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('home.contact.cta.call')}
              </motion.a>

              {/* Email/Form CTA */}
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-6 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('home.contact.cta.form')}
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-lg text-white/80 text-sm">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('home.contact.guarantee')}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '< 2h', label: t('home.contact.stats.response') },
            { value: '500+', label: t('home.contact.stats.clients') },
            { value: '98%', label: t('home.contact.stats.satisfaction') },
            { value: '24/7', label: t('home.contact.stats.support') }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
