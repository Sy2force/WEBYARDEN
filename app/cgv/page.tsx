'use client';

import { motion } from 'framer-motion';

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Conditions Générales de Vente
            </h1>
            <p className="text-xl text-gray-600">
              Web Yarden - Agence Digitale
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Dernière mise à jour : 7 novembre 2024
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                1. Objet et Champ d'Application
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
                  entre Web Yarden, agence digitale spécialisée dans le marketing digital et la création 
                  de sites web, et ses clients.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Toute commande implique l'acceptation sans réserve des présentes CGV qui prévalent 
                  sur toutes autres conditions générales ou particulières du client.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                2. Services Proposés
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web Yarden propose les services suivants :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Création et développement de sites web</li>
                  <li>Référencement SEO et SEA</li>
                  <li>Gestion des réseaux sociaux</li>
                  <li>Création de contenu digital</li>
                  <li>Stratégie marketing digital</li>
                  <li>Formation et conseil</li>
                  <li>Maintenance et support technique</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                3. Commandes et Devis
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Toute prestation fait l'objet d'un devis détaillé précisant :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>La nature et l'étendue des services</li>
                  <li>Les délais de réalisation</li>
                  <li>Le prix total TTC</li>
                  <li>Les conditions de paiement</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Le devis est valable 30 jours. La commande est confirmée par la signature du devis 
                  et le versement de l'acompte prévu.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                4. Prix et Modalités de Paiement
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les prix sont exprimés en Nouveaux Shekels Israéliens (NIS) toutes taxes comprises.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modalités de paiement :</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Acompte de 50% à la commande</li>
                  <li>Solde à la livraison ou selon échéancier convenu</li>
                  <li>Paiement par virement bancaire, chèque ou espèces</li>
                  <li>Délai de paiement : 30 jours net</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Tout retard de paiement entraîne de plein droit l'exigibilité d'intérêts de retard 
                  au taux de 1,5% par mois de retard.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                5. Délais et Livraison
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les délais de réalisation sont indicatifs et courent à compter de la réception 
                  de l'acompte et de tous les éléments nécessaires à la réalisation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Un retard dans la fourniture des éléments par le client entraîne un report 
                  proportionnel des délais. Web Yarden ne saurait être tenue responsable des 
                  conséquences d'un retard de livraison.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                6. Propriété Intellectuelle
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web Yarden cède au client les droits d'utilisation des créations réalisées 
                  uniquement après complet paiement des factures.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le client garantit disposer de tous les droits sur les éléments fournis 
                  (textes, images, logos, etc.) et dégage Web Yarden de toute responsabilité 
                  à ce titre.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Web Yarden se réserve le droit d'utiliser les réalisations à des fins 
                  promotionnelles sauf opposition écrite du client.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                7. Garanties et Responsabilité
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web Yarden garantit la conformité des prestations aux spécifications convenues. 
                  Toute réclamation doit être formulée par écrit dans les 8 jours suivant la livraison.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La responsabilité de Web Yarden est limitée au montant des prestations facturées. 
                  Elle ne saurait être tenue responsable des dommages indirects.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Une garantie de 3 mois est accordée sur les développements techniques, 
                  hors modifications demandées par le client.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                8. Annulation et Résiliation
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le client peut annuler sa commande dans les 14 jours suivant la signature 
                  du devis, sous réserve que les travaux n'aient pas commencé.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En cas d'annulation après commencement des travaux, le client devra régler 
                  les prestations déjà réalisées au prorata.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Web Yarden se réserve le droit de résilier le contrat en cas de manquement 
                  grave du client à ses obligations.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                9. Protection des Données
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web Yarden s'engage à respecter la confidentialité des informations qui lui 
                  sont confiées et à se conformer à la réglementation sur la protection des données.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Les données personnelles collectées sont utilisées uniquement dans le cadre 
                  de l'exécution des prestations et ne sont pas transmises à des tiers sans 
                  autorisation expresse.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                10. Droit Applicable et Juridiction
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les présentes CGV sont soumises au droit israélien. Tout litige sera soumis 
                  à la juridiction compétente de Tel Aviv.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En cas de différend, les parties s'efforceront de trouver une solution amiable 
                  avant tout recours judiciaire.
                </p>
              </div>
            </motion.section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="bg-blue-50 rounded-lg p-6 mt-8"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Contact
              </h3>
              <div className="text-blue-800 space-y-1">
                <p><strong>Web Yarden</strong></p>
                <p>Email : webyarden@gmail.com</p>
                <p>Téléphone : +972 53 370 0551</p>
                <p>Adresse : Tel Aviv / Jérusalem, Israël</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
