'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  UsersIcon, 
  EnvelopeIcon, 
  CurrencyDollarIcon,
  EyeIcon,
  PhoneIcon,
  DocumentTextIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  totalVisitors: number;
  totalQuotes: number;
  totalContacts: number;
  totalRevenue: number;
  conversionRate: number;
  avgQuoteValue: number;
}

const Dashboard = () => {
  const [stats] = useState<DashboardStats>({
    totalVisitors: 12543,
    totalQuotes: 89,
    totalContacts: 156,
    totalRevenue: 45600,
    conversionRate: 12.5,
    avgQuoteValue: 512
  });

  const [recentQuotes] = useState([
    { id: 1, client: 'David Cohen', service: 'Site E-commerce', amount: 2500, status: 'pending', date: '2024-11-07' },
    { id: 2, client: 'Sarah Levy', service: 'SEO Premium', amount: 800, status: 'accepted', date: '2024-11-06' },
    { id: 3, client: 'Michael Ben', service: 'Réseaux Sociaux', amount: 450, status: 'pending', date: '2024-11-05' },
    { id: 4, client: 'Rachel Katz', service: 'Site Vitrine', amount: 1200, status: 'accepted', date: '2024-11-04' },
  ]);

  const [recentContacts] = useState([
    { id: 1, name: 'Avi Goldstein', email: 'avi@example.com', subject: 'Projet e-commerce', date: '2024-11-07' },
    { id: 2, name: 'Noa Shapira', email: 'noa@example.com', subject: 'Refonte site web', date: '2024-11-06' },
    { id: 3, name: 'Yoni Rosen', email: 'yoni@example.com', subject: 'Marketing digital', date: '2024-11-05' },
  ]);

  const statCards = [
    {
      title: 'Visiteurs',
      value: stats.totalVisitors.toLocaleString(),
      icon: EyeIcon,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Devis',
      value: stats.totalQuotes.toString(),
      icon: DocumentTextIcon,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Contacts',
      value: stats.totalContacts.toString(),
      icon: EnvelopeIcon,
      color: 'bg-purple-500',
      change: '+15%'
    },
    {
      title: 'Revenus',
      value: `${stats.totalRevenue.toLocaleString()}₪`,
      icon: CurrencyDollarIcon,
      color: 'bg-orange-500',
      change: '+23%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Admin - Web Yarden
          </h1>
          <p className="text-gray-600">
            Vue d'ensemble de votre activité digitale
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {card.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {card.value}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    {card.change} ce mois
                  </p>
                </div>
                <div className={`${card.color} p-3 rounded-lg`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Quotes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Devis Récents
            </h2>
            <div className="space-y-4">
              {recentQuotes.map((quote) => (
                <div key={quote.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{quote.client}</h3>
                    <p className="text-sm text-gray-600">{quote.service}</p>
                    <p className="text-xs text-gray-500">{quote.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{quote.amount}₪</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      quote.status === 'accepted' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {quote.status === 'accepted' ? 'Accepté' : 'En attente'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Contacts Récents
            </h2>
            <div className="space-y-4">
              {recentContacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.email}</p>
                    <p className="text-sm text-gray-500">{contact.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{contact.date}</p>
                    <button className="mt-1 px-3 py-1 bg-primary-500 text-white text-xs rounded-full hover:bg-primary-600 transition-colors">
                      Répondre
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Performance Mensuelle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <ChartBarIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Taux de Conversion</h3>
              <p className="text-2xl font-bold text-blue-600">{stats.conversionRate}%</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CurrencyDollarIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Panier Moyen</h3>
              <p className="text-2xl font-bold text-green-600">{stats.avgQuoteValue}₪</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <UsersIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Nouveaux Clients</h3>
              <p className="text-2xl font-bold text-purple-600">+24</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
