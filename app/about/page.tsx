'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  RocketLaunchIcon, 
  HeartIcon, 
  LightBulbIcon,
  UserGroupIcon,
  TrophyIcon,
  GlobeAltIcon,
  UserIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const values = [
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Nous restons à la pointe des dernières technologies et tendances digitales pour offrir des solutions avant-gardistes.'
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Passion',
      description: 'Chaque projet est une nouvelle aventure que nous abordons avec enthousiasme et dévouement.'
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Créativité',
      description: 'Nous transformons vos idées en réalités digitales uniques et mémorables.'
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Nous travaillons main dans la main avec nos clients pour co-créer leur succès.'
    }
  ];

  const team = [
    {
      name: 'Shay Acoca',
      role: 'Fondateur, Directeur & Développeur Principal',
      description: 'Je suis actuellement l\'unique force derrière Web Yarden. En tant que développeur full-stack et expert en marketing digital, je conçois, développe et gère l\'ensemble des projets de l\'agence. Chaque réalisation est pensée avec passion, précision et une volonté claire : offrir aux clients israéliens et internationaux des solutions digitales modernes, puissantes et sur mesure.',
      IconComponent: UserIcon
    }
  ];

  const achievements = [
    { number: '220+', label: 'Projets réalisés', icon: '🚀' },
    { number: '150+', label: 'Clients satisfaits', icon: '😊' },
    { number: '5', label: 'Années d\'expérience', icon: '📅' },
    { number: '4.9/5', label: 'Note moyenne', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                🇮🇱 Fiers d'être israéliens
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                À propos de <span className="text-accent-500">Web Yarden</span>
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Depuis 2019, nous accompagnons les entreprises israéliennes dans leur transformation digitale 
                avec passion, créativité et expertise technique.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Notre <span className="text-gradient">Histoire</span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Web Yarden est née d'une vision simple : démocratiser l'accès aux services digitaux 
                    de qualité pour toutes les entreprises en Israël, des startups de Tel Aviv aux 
                    commerces traditionnels de Jérusalem.
                  </p>
                  <p>
                    Fondée par Shay Acoca, notre agence s'est rapidement imposée comme un acteur 
                    incontournable du paysage digital israélien grâce à notre approche personnalisée 
                    et notre compréhension unique du marché local.
                  </p>
                  <p>
                    Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 150 entreprises dans 
                    leur croissance digitale, générant des millions de shekels de revenus supplémentaires 
                    pour nos clients.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <div className="text-2xl font-bold text-primary-500 mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-gray-600">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nos <span className="text-gradient">Valeurs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident chacune de nos actions et décisions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary-500 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Notre <span className="text-gradient">Équipe</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une vision, un fondateur, une mission claire.
              </p>
            </motion.div>

            <div className="flex justify-center">
              <div className="max-w-md">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="mb-4">
                      {React.createElement(member.IconComponent, { className: "w-16 h-16 text-primary-500 mx-auto" })}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-primary-500 font-medium mb-3">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-6xl mb-6">🎯</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Notre <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Rendre le marketing digital accessible, transparent et efficace pour 
                  toutes les entreprises israéliennes, quelle que soit leur taille.
                </p>
                <p className="text-gray-600 mb-8">
                  Nous croyons que chaque entreprise mérite d'avoir une présence digitale 
                  forte et professionnelle. C'est pourquoi nous avons développé une approche 
                  modulaire et transparente qui permet à nos clients de choisir exactement 
                  les services dont ils ont besoin.
                </p>
                <Link href="/contact" className="btn-primary">
                  Rejoignez l'aventure →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Pourquoi nous choisir ?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-500 text-xl">✓</span>
                    <span>Expertise locale du marché israélien</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-500 text-xl">✓</span>
                    <span>Tarifs transparents et compétitifs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-500 text-xl">✓</span>
                    <span>Support réactif en français et hébreu</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-500 text-xl">✓</span>
                    <span>Résultats mesurables et ROI prouvé</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-500 text-xl">✓</span>
                    <span>Approche personnalisée pour chaque client</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Prêt à transformer votre présence digitale ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Rejoignez les 150+ entreprises qui nous font confiance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-primary">
                  Découvrir nos services
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
