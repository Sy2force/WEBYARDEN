'use client'

import React from 'react'
import { useTranslations } from '@/components/LocalizedText'

export default function MentionsLegales() {
  const { t } = useTranslations()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              {t('legal.title')}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              {t('legal.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Informations sur l'entreprise */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('legal.company.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p><strong>{t('legal.company.name')} :</strong> {t('legal.company.companyName')}</p>
                <p><strong>{t('legal.company.form')} :</strong> {t('legal.company.companyForm')}</p>
                <p><strong>{t('legal.company.address')} :</strong> {t('legal.company.companyAddress')}</p>
                <p><strong>{t('legal.company.email')} :</strong> {t('legal.company.companyEmail')}</p>
                <p><strong>{t('legal.company.phone')} :</strong> {t('legal.company.companyPhone')}</p>
                <p><strong>{t('legal.company.director')} :</strong> {t('legal.company.companyName')}</p>
              </div>
            </div>

            {/* Hébergement */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('legal.hosting.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>{t('legal.hosting.description')}</p>
                <p><strong>{t('legal.hosting.provider')}</strong><br />
                {t('legal.hosting.providerAddress').split('\n').map((line: string, index: number) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < t('legal.hosting.providerAddress').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}</p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('legal.intellectual.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('legal.intellectual.content1')}
                </p>
                <p>
                  {t('legal.intellectual.content2')}
                </p>
              </div>
            </div>

            {/* Protection des données personnelles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('legal.privacy.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  {t('legal.privacy.collection.title')}
                </h3>
                <p>
                  {t('legal.privacy.collection.description')}
                </p>
                <ul>
                  {(() => {
                    const items = t('legal.privacy.collection.items');
                    return Array.isArray(items) ? items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )) : null;
                  })()}
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  {t('legal.privacy.purpose.title')}
                </h3>
                <p>
                  {t('legal.privacy.purpose.description')}
                </p>
                <ul>
                  {(() => {
                    const items = t('legal.privacy.purpose.items');
                    return Array.isArray(items) ? items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )) : null;
                  })()}
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  {t('legal.privacy.rights.title')}
                </h3>
                <p>
                  {t('legal.privacy.rights.description')}
                </p>
                <ul>
                  {(() => {
                    const items = t('legal.privacy.rights.items');
                    return Array.isArray(items) ? items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )) : null;
                  })()}
                </ul>
                <p>
                  {t('legal.privacy.rights.contact')}
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('legal.cookies.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('legal.cookies.description')}
                </p>
                <ul>
                  <li><strong>{t('legal.cookies.types.technical')}</strong></li>
                  <li><strong>{t('legal.cookies.types.analytics')}</strong></li>
                  <li><strong>{t('legal.cookies.types.preferences')}</strong></li>
                </ul>
                <p>
                  {t('legal.cookies.notice')}
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('legal.liability.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('legal.liability.content1')}
                </p>
                <p>
                  {t('legal.liability.content2')}
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('legal.jurisdiction.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('legal.jurisdiction.content')}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('legal.contact.title')}
              </h2>
              <p className="text-gray-700">
                {t('legal.contact.description')}
              </p>
              <div className="mt-4">
                <p><strong>{t('legal.company.email')} :</strong> {t('legal.company.companyEmail')}</p>
                <p><strong>{t('legal.company.phone')} :</strong> {t('legal.company.companyPhone')}</p>
                <p><strong>{t('legal.company.address')} :</strong> {t('legal.company.companyAddress')}</p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
              <p>{t('legal.lastUpdate')} : {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
