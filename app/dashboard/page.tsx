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

  const StatCard = ({ title, value, change, icon, color }: any) => (
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('dashboard.title')}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {t('dashboard.welcome')}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Nouveau Projet
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Vue d\'ensemble' },
              { id: 'projects', label: 'Projets' },
              { id: 'clients', label: 'Clients' },
              { id: 'analytics', label: 'Analytics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
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
                icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              />
              <StatCard
                title="Projets Actifs"
                value={mockStats.activeProjects}
                change={8}
                color="bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" /></svg>}
              />
              <StatCard
                title="Chiffre d'Affaires"
                value={`₪ ${(mockStats.totalRevenue / 1000).toFixed(0)}K`}
                change={15}
                color="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
                icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg>}
              />
              <StatCard
                title="Satisfaction Client"
                value={`${mockStats.clientSatisfaction}/5`}
                change={5}
                color="bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
                icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>}
              />
            </div>

            {/* Recent Projects & Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Projects */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Projets Récents
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentProjects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {project.project}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {project.client}
                          </p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Progression</span>
                              <span className="font-medium">{project.progress}%</span>
                            </div>
                            <div className="mt-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="ml-4 text-right">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            project.status === 'Terminé' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : project.status === 'En cours'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                          }`}>
                            {project.status}
                          </span>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">
                            ₪ {project.value.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Notifications
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'success' ? 'bg-green-500' :
                          notification.type === 'warning' ? 'bg-yellow-500' :
                          'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 dark:text-white">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Current Cart Summary */}
            {items.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Panier Actuel
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Quantité: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ₪ {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">Total</p>
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          ₪ {getTotalPrice().toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Other Tabs Placeholder */}
        {activeTab !== 'overview' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {activeTab === 'projects' && 'Gestion des Projets'}
              {activeTab === 'clients' && 'Gestion des Clients'}
              {activeTab === 'analytics' && 'Analytics Avancées'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cette section sera implémentée dans une prochaine version.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
