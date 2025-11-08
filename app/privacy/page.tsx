'use client';

import { motion } from 'framer-motion';
// import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ShieldCheckIcon, EyeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';

export default function PrivacyPage() {
  const principles = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Protection maximale',
      description: 'Vos données sont protégées par des mesures de sécurité avancées'
    },
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: 'Transparence totale',
      description: 'Nous vous informons clairement de l\'utilisation de vos données'
    },
    {
      icon: <LockClosedIcon className="w-8 h-8" />,
      title: 'Accès contrôlé',
      description: 'Seules les personnes autorisées ont accès à vos informations'
    },
    {
      icon: <UserIcon className="w-8 h-8" />,
      title: 'Vos droits respectés',
      description: 'Vous gardez le contrôle total sur vos données personnelles'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Politique de <span className="text-gradient">Confidentialité</span>
            </h1>

            {/* Introduction */}
            <div className="bg-primary-50 rounded-2xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Chez Web Yarden, nous prenons la protection de vos données personnelles très au sérieux. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
                vos informations personnelles conformément à la législation israélienne et au RGPD européen.
              </p>
            </div>

            {/* Principes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="text-primary-500 mb-3">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              {/* Données collectées */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Données que nous collectons
                </h2>
                <div className="text-gray-600 space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Informations que vous nous fournissez :</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Nom de votre entreprise (optionnel)</li>
                      <li>Messages et demandes via nos formulaires</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Données collectées automatiquement :</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Adresse IP</li>
                      <li>Type de navigateur et version</li>
                      <li>Pages visitées et temps passé</li>
                      <li>Données de géolocalisation approximative</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Utilisation des données */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Comment nous utilisons vos données
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p><strong>Traitement de vos demandes :</strong> Répondre à vos questions et demandes de devis</p>
                  <p><strong>Communication :</strong> Vous envoyer des informations sur nos services</p>
                  <p><strong>Amélioration :</strong> Analyser l'utilisation du site pour l'améliorer</p>
                  <p><strong>Conformité légale :</strong> Respecter nos obligations légales</p>
                </div>
              </section>

              {/* Base légale */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Base légale du traitement
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Nous traitons vos données personnelles sur la base de :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Votre consentement</strong> pour l'envoi de communications marketing</li>
                    <li><strong>L'exécution d'un contrat</strong> pour la fourniture de nos services</li>
                    <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services</li>
                    <li><strong>Le respect d'obligations légales</strong> en matière de comptabilité et fiscalité</li>
                  </ul>
                </div>
              </section>

              {/* Partage des données */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Partage de vos données
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement avec :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Prestataires de services :</strong> Hébergement, email, analytics (sous contrat strict)</li>
                    <li><strong>Autorités légales :</strong> Si requis par la loi ou pour protéger nos droits</li>
                    <li><strong>Partenaires commerciaux :</strong> Uniquement avec votre consentement explicite</li>
                  </ul>
                </div>
              </section>

              {/* Conservation */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Conservation des données
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>Nous conservons vos données personnelles :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                    <li><strong>Données contractuelles :</strong> 10 ans pour les obligations comptables</li>
                    <li><strong>Données marketing :</strong> Jusqu'à votre désinscription</li>
                    <li><strong>Données techniques :</strong> 13 mois maximum</li>
                  </ul>
                </div>
              </section>

              {/* Vos droits */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Vos droits
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>Vous disposez des droits suivants :</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Droit d'accès</h4>
                      <p className="text-sm">Connaître les données que nous détenons sur vous</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Droit de rectification</h4>
                      <p className="text-sm">Corriger des données inexactes</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Droit d'effacement</h4>
                      <p className="text-sm">Demander la suppression de vos données</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Droit à la portabilité</h4>
                      <p className="text-sm">Récupérer vos données dans un format lisible</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sécurité */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Sécurité de vos données
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Nous mettons en place des mesures techniques et organisationnelles appropriées 
                    pour protéger vos données contre :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>L'accès non autorisé</li>
                    <li>La divulgation accidentelle</li>
                    <li>La modification non autorisée</li>
                    <li>La destruction malveillante</li>
                  </ul>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Cookies et technologies similaires
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience. 
                    Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Types de cookies utilisés :</strong> Cookies essentiels, 
                      cookies d'analyse (Google Analytics), cookies de préférences.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact DPO */}
              <section className="bg-primary-50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Exercer vos droits
                </h2>
                <p className="text-gray-600 mb-4">
                  Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité :
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:privacy@webyarden.co.il"
                    className="btn-primary"
                  >
                    📧 Contacter notre DPO
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    Formulaire de contact
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Nous nous engageons à répondre à votre demande dans un délai de 30 jours.
                </p>
              </section>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              <p className="mt-2">
                Cette politique peut être mise à jour. Nous vous informerons de tout changement significatif.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
