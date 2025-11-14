'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from '@/components/LocalizedText'

const getSupportCategories = (t: (key: string) => string, tArray: (key: string) => string[]) => [
  {
    id: 'technical',
    title: t('support.categories.technical.title'),
    description: t('support.categories.technical.description'),
    icon: '🔧',
    color: 'from-blue-500 to-cyan-500',
    articles: tArray('support.articles.technical').map((title: string, index: number) => ({
      title,
      views: [1250, 890, 756, 634][index] || 500
    }))
  },
  {
    id: 'billing',
    title: t('support.categories.billing.title'),
    description: t('support.categories.billing.description'),
    icon: '💳',
    color: 'from-green-500 to-emerald-500',
    articles: tArray('support.articles.billing').map((title: string, index: number) => ({
      title,
      views: [980, 743, 567, 432][index] || 400
    }))
  },
  {
    id: 'features',
    title: t('support.categories.features.title'),
    description: t('support.categories.features.description'),
    icon: '⚡',
    color: 'from-purple-500 to-pink-500',
    articles: tArray('support.articles.features').map((title: string, index: number) => ({
      title,
      views: [1456, 823, 712, 598][index] || 600
    }))
  },
  {
    id: 'account',
    title: t('support.categories.account.title'),
    description: t('support.categories.account.description'),
    icon: '👤',
    color: 'from-orange-500 to-red-500',
    articles: tArray('support.articles.account').map((title: string, index: number) => ({
      title,
      views: [1123, 687, 543, 321][index] || 450
    }))
  }
]

const getQuickActions = (t: (key: string) => string) => [
  {
    title: t('support.quickActions.chat.title'),
    description: t('support.quickActions.chat.description'),
    icon: '💬',
    action: 'chat',
    available: true,
    color: 'bg-gradient-to-r from-blue-600 to-purple-600'
  },
  {
    title: t('support.quickActions.call.title'),
    description: t('support.quickActions.call.description'),
    icon: '📞',
    action: 'call',
    available: true,
    color: 'bg-gradient-to-r from-green-600 to-teal-600'
  },
  {
    title: t('support.quickActions.email.title'),
    description: t('support.quickActions.email.description'),
    icon: '📧',
    action: 'email',
    available: true,
    color: 'bg-gradient-to-r from-indigo-600 to-blue-600'
  },
  {
    title: t('support.quickActions.urgent.title'),
    description: t('support.quickActions.urgent.description'),
    icon: '🚨',
    action: 'urgent',
    available: true,
    color: 'bg-gradient-to-r from-red-600 to-pink-600'
  }
]

export default function SupportPage() {
  const { t, tArray } = useTranslations()
  const [selectedCategory, setSelectedCategory] = useState('technical')
  const [searchQuery, setSearchQuery] = useState('')

  const supportCategories = getSupportCategories(t, tArray)
  const quickActions = getQuickActions(t)

  const filteredArticles = supportCategories
    .find(cat => cat.id === selectedCategory)?.articles
    .filter((article: {title: string, views: number}) => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('support.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('support.subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('support.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 text-lg border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow-lg"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('support.stats.support247')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-purple-600 dark:text-purple-400">&lt; 2h</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('support.stats.responseTime')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-pink-600 dark:text-pink-400">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('support.stats.satisfaction')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('support.stats.articles')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('support.quickActions.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${action.color} p-6 rounded-2xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}
              >
                <div className="text-3xl mb-3">{action.icon}</div>
                <h3 className="font-bold text-lg mb-2">{action.title}</h3>
                <p className="text-sm opacity-90">{action.description}</p>
                {action.available && (
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20">
                      🟢 {t('support.quickActions.available')}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Support Categories */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('support.categories.title')}
          </h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 lg:px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Selected Category Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Category Info */}
            <div className="lg:col-span-1">
              {supportCategories.map((category) => (
                selectedCategory === category.id && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`bg-gradient-to-br ${category.color} p-6 lg:p-8 rounded-2xl text-white shadow-xl h-fit`}
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 leading-tight">{category.title}</h3>
                    <p className="text-sm lg:text-lg opacity-90 mb-4 lg:mb-6 leading-relaxed">{category.description}</p>
                    <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-colors">
                      {t('support.categories.viewAll')}
                    </button>
                  </motion.div>
                )
              ))}
            </div>

            {/* Articles List */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('support.categories.popularArticles')}
                </h3>
                <div className="space-y-4">
                  {filteredArticles.map((article: {title: string, views: number}, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-3 lg:p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-900 dark:text-white font-medium text-sm lg:text-base line-clamp-2">
                          {article.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{article.views}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white text-center"
        >
          <div className="text-4xl mb-4">🚨</div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('support.emergency.title')}
          </h2>
          <p className="text-lg mb-6 opacity-90">
            {t('support.emergency.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              📞 {t('support.emergency.emergencyCall')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
              💬 {t('support.emergency.priorityChat')}
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
