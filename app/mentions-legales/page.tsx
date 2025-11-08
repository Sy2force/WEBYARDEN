'use client';

import { motion } from 'framer-motion';
// import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function MentionsLegalesPage() {
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
              Mentions <span className="text-gradient">Légales</span>
            </h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              {/* Éditeur du site */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Éditeur du site
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p><strong>Raison sociale :</strong> Web Yarden</p>
                  <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                  <p><strong>Adresse :</strong> Tel Aviv / Jérusalem, Israël</p>
                  <p><strong>Téléphone :</strong> +972 53 370 0551</p>
                  <p><strong>Email :</strong> webyarden@gmail.com</p>
                  <p><strong>Directeur de publication :</strong> Shay Acoca</p>
                </div>
              </section>

              {/* Hébergement */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Hébergement
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-primary-500 hover:underline">vercel.com</a></p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Propriété intellectuelle
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    L'ensemble de ce site relève de la législation israélienne et internationale 
                    sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                    reproduction sont réservés, y compris pour les documents téléchargeables et 
                    les représentations iconographiques et photographiques.
                  </p>
                  <p>
                    La reproduction de tout ou partie de ce site sur un support électronique quel 
                    qu'il soit est formellement interdite sauf autorisation expresse du directeur 
                    de la publication.
                  </p>
                </div>
              </section>

              {/* Données personnelles */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Protection des données personnelles
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Conformément à la loi israélienne sur la protection de la vie privée (1981) 
                    et au RGPD européen, vous disposez d'un droit d'accès, de rectification et 
                    de suppression des données vous concernant.
                  </p>
                  <p>
                    Les informations recueillies sur ce site sont nécessaires pour le traitement 
                    de vos demandes et l'amélioration de nos services. Elles ne sont jamais 
                    communiquées à des tiers sans votre accord préalable.
                  </p>
                  <p>
                    Pour exercer vos droits, contactez-nous à : 
                    <a href="mailto:privacy@webyarden.co.il" className="text-primary-500 hover:underline ml-1">
                      privacy@webyarden.co.il
                    </a>
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Cookies
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Ce site utilise des cookies pour améliorer l'expérience utilisateur et 
                    analyser le trafic. Les cookies sont de petits fichiers texte stockés 
                    sur votre ordinateur par votre navigateur web.
                  </p>
                  <p>
                    Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, 
                    mais certaines fonctionnalités du site pourraient ne plus fonctionner 
                    correctement.
                  </p>
                </div>
              </section>

              {/* Responsabilité */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Limitation de responsabilité
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible et 
                    le site est périodiquement remis à jour, mais peut toutefois contenir des 
                    inexactitudes, des omissions ou des lacunes.
                  </p>
                  <p>
                    Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                    merci de bien vouloir le signaler par email à 
                    <a href="mailto:contact@webyarden.co.il" className="text-primary-500 hover:underline ml-1">
                      contact@webyarden.co.il
                    </a>
                  </p>
                </div>
              </section>

              {/* Droit applicable */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Droit applicable et juridiction
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Tout litige en relation avec l'utilisation du site webyarden.co.il est 
                    soumis au droit israélien. Il est fait attribution exclusive de juridiction 
                    aux tribunaux compétents de Tel Aviv.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Questions ?
                </h2>
                <p className="text-gray-600 mb-4">
                  Pour toute question concernant ces mentions légales, n'hésitez pas à nous contacter :
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">
                    Nous contacter
                  </Link>
                  <a 
                    href="mailto:legal@webyarden.co.il"
                    className="btn-secondary"
                  >
                    Email juridique
                  </a>
                </div>
              </section>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
