'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from '@/components/LocalizedText'

export default function Projects() {
  const { t } = useTranslations()
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      key: 'ecommerceStore',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      categories: ['ecommerce', 'web'],
      featured: true,
      budget: '₪ 25,000',
      duration: '8 semaines',
      team: '4 développeurs',
      rating: 5.0,
      clientLogo: '/api/placeholder/60/60'
    },
    {
      key: 'restaurantApp',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      categories: ['mobile', 'web'],
      featured: true,
      budget: '₪ 18,000',
      duration: '6 semaines',
      team: '3 développeurs',
      rating: 4.9,
      clientLogo: '/api/placeholder/60/60'
    },
    {
      key: 'corporateWebsite',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      categories: ['web'],
      featured: false,
      budget: '₪ 12,000',
      duration: '4 semaines',
      team: '2 développeurs',
      rating: 4.8,
      clientLogo: '/api/placeholder/60/60'
    },
    {
      key: 'realEstatePortal',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      categories: ['web', 'portal'],
      featured: true,
      budget: '₪ 35,000',
      duration: '12 semaines',
      team: '5 développeurs',
      rating: 5.0,
      clientLogo: '/api/placeholder/60/60'
    },
    {
      key: 'healthcareApp',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      categories: ['mobile', 'app'],
      featured: false,
      budget: '₪ 28,000',
      duration: '10 semaines',
      team: '4 développeurs',
      rating: 4.9,
      clientLogo: '/api/placeholder/60/60'
    },
    {
      key: 'educationPlatform',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      categories: ['web', 'platform'],
      featured: false,
      budget: '₪ 22,000',
      duration: '8 semaines',
      team: '3 développeurs',
      rating: 4.7,
      clientLogo: '/api/placeholder/60/60'
    }
  ]

  const categories = [
    { key: 'all', label: 'Tous' },
    { key: 'web', label: 'Sites Web' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'mobile', label: 'Applications' },
    { key: 'platform', label: 'Plateformes' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              {t('projects.title')}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === category.key
                    ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.key} 
                className={`group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${
                  project.featured ? 'ring-2 ring-yellow-400/50' : ''
                }`}
              >
                {/* Project Header with Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    {project.featured && (
                      <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ⭐ Projet Phare
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3 h-3 ${i < Math.floor(project.rating) ? 'text-yellow-300' : 'text-white/40'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-white/90 text-xs font-semibold">{project.rating}</span>
                    </div>
                  </div>
                  
                  <div className="text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm-custom flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">
                          {String(t(`projects.portfolio.${project.key}.title`))}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {String(t(`projects.portfolio.${project.key}.category`))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Crystal Content Card */}
                <div className="p-6 bg-white/80 backdrop-blur-sm-custom">
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {String(t(`projects.portfolio.${project.key}.description`))}
                  </p>

                  {/* Project Details Table */}
                  <div className="bg-white/60 backdrop-blur-lg-custom rounded-xl p-4 mb-4 border border-white/30">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-semibold text-green-600">{project.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Durée:</span>
                        <span className="font-semibold">{project.duration}</span>
                      </div>
                      <div className="flex justify-between col-span-2">
                        <span className="text-gray-600">Équipe:</span>
                        <span className="font-semibold">{project.team}</span>
                      </div>
                      <div className="flex justify-between col-span-2">
                        <span className="text-gray-600">Année:</span>
                        <span className="font-semibold">{String(t(`projects.portfolio.${project.key}.year`))}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      {t('projects.techStack')}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {(() => {
                        const tech = t(`projects.portfolio.${project.key}.tech`);
                        if (Array.isArray(tech)) {
                          return tech.map((techItem: string, techIndex: number) => (
                            <span 
                              key={techIndex}
                              className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs px-2 py-1 rounded-full border border-indigo-200/50"
                            >
                              {techItem}
                            </span>
                          ));
                        }
                        return null;
                      })()}
                    </div>
                  </div>

                  {/* Results & Action */}
                  <div className="border-t border-gray-200/50 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Résultats</p>
                      <p className="text-sm font-semibold text-green-600">
                        {String(t(`projects.portfolio.${project.key}.results`))}
                      </p>
                    </div>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                      Voir le projet
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crystal Details Table */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Tableau de Performance des Projets
            </h2>
            <p className="text-xl text-gray-600">
              Analyse détaillée de nos réalisations
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-xl-custom rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Projet</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Budget</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Durée</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Équipe</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Satisfaction</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/50">
                  {projects.map((project, index) => (
                    <tr key={project.key} className="hover:bg-white/60 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                            <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {String(t(`projects.portfolio.${project.key}.title`))}
                            </div>
                            <div className="text-xs text-gray-500">
                              {String(t(`projects.portfolio.${project.key}.category`))}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-green-600">{project.budget}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{project.duration}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{project.team}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(project.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-sm text-gray-700 ml-2">{project.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          ✅ Livré
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">
              Notre impact en chiffres
            </h2>
            <p className="text-xl text-indigo-200">
              Des résultats concrets pour nos clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-indigo-200">Projets livrés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-indigo-200">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">5 ans</div>
              <div className="text-indigo-200">D'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-indigo-200">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Technologies & Outils
            </h2>
            <p className="text-xl text-gray-600">
              Nous utilisons les meilleures technologies pour vos projets
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Next.js', 'Vue.js', 'Node.js', 'Laravel', 'WordPress',
              'MongoDB', 'MySQL', 'TailwindCSS', 'Firebase', 'Stripe', 'PayPal'
            ].map((tech) => (
              <div 
                key={tech} 
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-lg font-semibold text-gray-700">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Votre prochain projet commence ici
          </h2>
          <p className="text-xl leading-6 text-indigo-200 mb-10">
            Rejoignez nos clients satisfaits et donnez vie à vos idées digitales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
            >
              Discuter de mon projet
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
