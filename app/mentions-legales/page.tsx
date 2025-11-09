import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales - Web Yarden',
  description: 'Mentions légales et informations juridiques de Web Yarden, agence digitale en Israël.',
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Mentions Légales
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Informations légales et conditions d'utilisation
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
                Informations sur l'entreprise
              </h2>
              <div className="prose prose-gray max-w-none">
                <p><strong>Dénomination sociale :</strong> Web Yarden</p>
                <p><strong>Forme juridique :</strong> Société à responsabilité limitée</p>
                <p><strong>Siège social :</strong> Tel Aviv, Israël</p>
                <p><strong>Email :</strong> contact@webyarden.co.il</p>
                <p><strong>Téléphone :</strong> +972 12 345 6789</p>
                <p><strong>Directeur de la publication :</strong> Web Yarden</p>
              </div>
            </div>

            {/* Hébergement */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hébergement du site
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>Ce site est hébergé par :</p>
                <p><strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis</p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Propriété intellectuelle
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  L'ensemble de ce site relève de la législation israélienne et internationale 
                  sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                  reproduction sont réservés, y compris pour les documents téléchargeables et 
                  les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique 
                  quel qu'il soit est formellement interdite sauf autorisation expresse du 
                  directeur de la publication.
                </p>
              </div>
            </div>

            {/* Protection des données personnelles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Protection des données personnelles (RGPD)
              </h2>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  Collecte des données
                </h3>
                <p>
                  Nous collectons les données personnelles suivantes :
                </p>
                <ul>
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Nom de l'entreprise (optionnel)</li>
                  <li>Données de navigation (cookies)</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  Finalité du traitement
                </h3>
                <p>
                  Les données collectées sont utilisées pour :
                </p>
                <ul>
                  <li>Répondre à vos demandes de contact</li>
                  <li>Établir des devis personnalisés</li>
                  <li>Améliorer nos services</li>
                  <li>Vous informer de nos actualités (avec votre consentement)</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  Vos droits
                </h3>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul>
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d'opposition</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à : contact@webyarden.co.il
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Politique des cookies
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et 
                  analyser le trafic. Les cookies utilisés sont :
                </p>
                <ul>
                  <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies analytiques :</strong> Pour mesurer l'audience (Google Analytics)</li>
                  <li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix</li>
                </ul>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais 
                  certaines fonctionnalités du site pourraient ne plus fonctionner correctement.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitation de responsabilité
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et 
                  le site est périodiquement remis à jour, mais peut toutefois contenir des 
                  inexactitudes, des omissions ou des lacunes.
                </p>
                <p>
                  Web Yarden ne pourra en aucun cas être tenu responsable de tout dommage de 
                  quelque nature qu'il soit résultant de l'interprétation ou de l'utilisation 
                  des informations et/ou documents disponibles sur ce site.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Droit applicable et juridiction
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Les présentes mentions légales sont régies par le droit israélien. 
                  Tout litige relatif à l'utilisation de ce site sera de la compétence 
                  exclusive des tribunaux de Tel Aviv, Israël.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact
              </h2>
              <p className="text-gray-700">
                Pour toute question concernant ces mentions légales ou l'utilisation de vos 
                données personnelles, vous pouvez nous contacter :
              </p>
              <div className="mt-4">
                <p><strong>Email :</strong> contact@webyarden.co.il</p>
                <p><strong>Téléphone :</strong> +972 12 345 6789</p>
                <p><strong>Adresse :</strong> Tel Aviv, Israël</p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
