'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { useTranslations } from '@/components/LocalizedText'

interface DashboardStats {
  totalProjects: number
  activeProjects: number
  completedProjects: number
  totalRevenue: number
  monthlyRevenue: number
  clientSatisfaction: number
}

const mockStats: DashboardStats = {
  totalProjects: 127,
  activeProjects: 23,
  completedProjects: 104,
  totalRevenue: 2450000,
  monthlyRevenue: 185000,
  clientSatisfaction: 4.8
}

const recentProjects = [
  { id: 1, client: "TechStart IL", project: "Site E-commerce", status: "En cours", progress: 75, value: 45000 },
  { id: 2, client: "Startup Nation", project: "App Mobile", status: "Terminé", progress: 100, value: 65000 },
  { id: 3, client: "Digital Solutions", project: "Refonte UX/UI", status: "En cours", progress: 40, value: 28000 },
  { id: 4, client: "E-Commerce Plus", project: "SEO Optimization", status: "En attente", progress: 0, value: 15000 }
]

const notifications = [
  { id: 1, type: "success", message: "Nouveau projet validé par TechStart IL", time: "Il y a 2h" },
  { id: 2, type: "warning", message: "Deadline approchant pour Digital Solutions", time: "Il y a 4h" },
  { id: 3, type: "info", message: "Nouveau devis demandé", time: "Il y a 6h" },
  { id: 4, type: "success", message: "Paiement reçu de Startup Nation", time: "Hier" }
]

export default function Dashboard() {
  const { t } = useTranslations()
  const [activeTab, setActiveTab] = useState('overview')
  const { items, getTotalPrice } = useCartStore()

  interface StatCardProps {
    title: string
    value: string | number
    change: number
    icon: React.ReactNode
    color: string
  }

  const StatCard = ({ title, value, change, icon, color }: StatCardProps) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change > 0 ? '+' : ''}{change}% ce mois
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {t('dashboard.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                {t('dashboard.welcome')}
              </p>
              <div className="flex items-center space-x-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <span className="text-white font-semibold">127 Projets</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <span className="text-white font-semibold">₪2.4M Revenue</span>
                </div>
              </div>
            </div>
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/20 font-semibold">
                📊 Analytics
              </button>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105">
                ➕ Nouveau Projet
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-2">
            <nav className="flex space-x-2">
              {[
                { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
                { id: 'projects', label: 'Projets', icon: '🚀' },
                { id: 'clients', label: 'Clients', icon: '👥' },
                { id: 'analytics', label: 'Analytics', icon: '📈' }
              ].map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Projets Totaux"
                value={mockStats.totalProjects}
                change={12}
                color="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                icon={<svg className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              />
              <StatCard
                title="Projets Actifs"
                value={mockStats.activeProjects}
                change={8}
                color="bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                icon={<svg className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" /></svg>}
              />
              <StatCard
                title="Chiffre d'Affaires"
                value={`₪ ${(mockStats.totalRevenue / 1000).toFixed(0)}K`}
                change={15}
                color="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
                icon={<svg className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" /></svg>}
              />
              <StatCard
                title="Satisfaction Client"
                value={`${mockStats.clientSatisfaction}/5`}
                change={5}
                color="bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
                icon={<svg className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>}
              />
            </div>

            {/* Recent Projects & Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Projects */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-gray-200/50">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="mr-3">🚀</span>
                    Projets Récents
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        className="group p-4 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                              {project.project}
                            </h4>
                            <p className="text-sm text-gray-600 mb-3">
                              👤 {project.client}
                            </p>
                            <div className="mt-3">
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-gray-600 font-medium">Progression</span>
                                <span className="font-bold text-indigo-600">{project.progress}%</span>
                              </div>
                              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                                <motion.div
                                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${project.progress}%` }}
                                  transition={{ duration: 1, delay: index * 0.2 }}
                                  viewport={{ once: true }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="ml-6 text-right">
                            <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full shadow-sm ${
                              project.status === 'Terminé' 
                                ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800'
                                : project.status === 'En cours'
                                ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800'
                                : 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800'
                            }`}>
                              {project.status}
                            </span>
                            <p className="text-lg font-bold text-gray-900 mt-2">
                              ₪ {project.value.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Notifications */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-gray-200/50">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="mr-3">🔔</span>
                    Notifications
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {notifications.map((notification, index) => (
                      <motion.div
                        key={notification.id}
                        className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/60 transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-1 shadow-sm ${
                          notification.type === 'success' ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                          notification.type === 'warning' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                          'bg-gradient-to-r from-blue-400 to-indigo-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 font-medium">
                            {notification.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Current Cart Summary */}
            {items.length > 0 && (
              <motion.div
                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-gray-200/50">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="mr-3">🛒</span>
                    Panier Actuel
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="flex justify-between items-center p-3 bg-white/60 rounded-xl border border-white/30"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div>
                          <p className="font-bold text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600 font-medium">Quantité: {item.quantity}</p>
                        </div>
                        <p className="font-bold text-indigo-600 text-lg">
                          ₪ {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </motion.div>
                    ))}
                    <div className="border-t border-gray-200/50 pt-4 mt-4">
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                        <p className="text-xl font-bold text-gray-900">Total</p>
                        <p className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          ₪ {getTotalPrice().toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Other Tabs Placeholder */}
        {activeTab !== 'overview' && (
          <motion.div
            className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-16 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">
              {activeTab === 'projects' && '🚀'}
              {activeTab === 'clients' && '👥'}
              {activeTab === 'analytics' && '📈'}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {activeTab === 'projects' && t('dashboard.tabs.projects')}
              {activeTab === 'clients' && t('dashboard.tabs.clients')}
              {activeTab === 'analytics' && t('dashboard.tabs.analytics')}
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              {t('dashboard.comingSoon')}
            </p>
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6 border border-indigo-200/50">
              <p className="text-indigo-700 font-semibold">
                🔧 Fonctionnalités en développement
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
