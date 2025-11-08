'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CogIcon } from '@heroicons/react/24/outline';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: Date.now()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {!showPreferences ? (
            // Main Banner
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🍪 Nous utilisons des cookies
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. 
                  Vous pouvez choisir quels cookies accepter.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="btn-secondary flex items-center"
                >
                  <CogIcon className="w-4 h-4 mr-2" />
                  Préférences
                </button>
                <button
                  onClick={rejectAll}
                  className="btn-secondary"
                >
                  Refuser
                </button>
                <button
                  onClick={acceptAll}
                  className="btn-primary"
                >
                  Accepter tout
                </button>
              </div>
            </div>
          ) : (
            // Preferences Panel
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Préférences des cookies
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Fermer les préférences"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Cookies nécessaires</h4>
                    <p className="text-sm text-gray-600">
                      Indispensables au fonctionnement du site
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="rounded border-gray-300"
                      aria-label="Cookies nécessaires"
                    />
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Cookies analytiques</h4>
                    <p className="text-sm text-gray-600">
                      Nous aident à comprendre comment vous utilisez notre site
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                      className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                      aria-label="Cookies analytiques"
                    />
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Cookies marketing</h4>
                    <p className="text-sm text-gray-600">
                      Utilisés pour personnaliser la publicité
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                      className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                      aria-label="Cookies marketing"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={acceptSelected}
                  className="btn-primary"
                >
                  Sauvegarder les préférences
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
