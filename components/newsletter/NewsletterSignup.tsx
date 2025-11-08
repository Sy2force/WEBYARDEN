'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <EnvelopeIcon className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h3 className="text-2xl font-bold mb-2">
            Restez informé
          </h3>
          <p className="text-white/90 mb-6">
            Recevez nos derniers conseils marketing et actualités digitales directement dans votre boîte mail.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center space-x-2 py-3"
          >
            <CheckIcon className="w-6 h-6 text-green-300" />
            <span className="text-green-100">Merci pour votre inscription !</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email..."
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                required
                aria-label="Adresse email pour la newsletter"
              />
              <button
                type="submit"
                disabled={isLoading || !email}
                className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Inscription...' : "S'inscrire"}
              </button>
            </div>
            <p className="text-xs text-white/70">
              Pas de spam, désabonnement en un clic. Vos données sont protégées.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
