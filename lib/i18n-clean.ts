export interface Translations {
  [key: string]: string | string[] | Translations
}

export const translations: Record<string, Translations> = {
  fr: {
    common: {
      home: 'Accueil',
      services: 'Services', 
      projects: 'Projets',
      contact: 'Contact',
      quote: 'Devis',
      about: 'À propos',
      language: 'Langue',
      packs: 'Packs',
      description: 'Description',
      progress: 'Progression',
      close: 'Fermer',
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      success: 'Succès',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      save: 'Enregistrer',
      edit: 'Modifier',
      delete: 'Supprimer',
      add: 'Ajouter',
      search: 'Rechercher',
      filter: 'Filtrer',
      sort: 'Trier',
      export: 'Exporter',
      import: 'Importer',
      print: 'Imprimer'
    },
    header: {
      title: 'Web Yarden',
      subtitle: 'Agence Digitale Premium | Israël',
      getQuote: 'Devis Gratuit'
    },
    footer: {
      description: 'L\'agence digitale de référence en Israël. Nous transformons vos ambitions en succès numériques mesurables et durables.',
      quickLinks: 'Navigation Rapide',
      rights: '© 2024 Web Yarden. Tous droits réservés'
    },
    home: {
      hero: {
        title: 'Transformez votre Vision en Succès Digital 🚀',
        subtitle: 'L\'agence digitale premium d\'Israël qui propulse votre entreprise vers l\'excellence numérique. ROI garanti, résultats mesurables.',
        cta: 'Démarrer Mon Projet',
        ctaSecondary: 'Consultation Gratuite'
      }
    },
    support: {
      title: 'Centre d\'Aide & Support',
      subtitle: 'Trouvez rapidement les réponses à vos questions',
      categories: {
        technical: {
          title: 'Support Technique',
          description: 'Assistance pour les problèmes techniques et de configuration'
        },
        billing: {
          title: 'Facturation & Paiements',
          description: 'Questions sur les factures, paiements et abonnements'
        },
        account: {
          title: 'Gestion de Compte',
          description: 'Paramètres de compte, profil et sécurité'
        },
        general: {
          title: 'Informations Générales',
          description: 'Questions générales sur nos services'
        }
      },
      contact: {
        title: 'Nous Contacter',
        description: 'Notre équipe est là pour vous aider',
        phone: '+972-50-123-4567',
        email: 'support@webyarden.com',
        hours: 'Dimanche - Jeudi : 9h00 - 18h00'
      }
    }
  }
}

export function getTranslation(
  locale: string,
  key: string,
  fallback?: string
): string {
  const keys = key.split('.')
  let value: any = translations[locale]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return fallback || key
    }
  }
  
  return typeof value === 'string' ? value : fallback || key
}

export const supportedLocales = ['fr'] as const
export type SupportedLocale = typeof supportedLocales[number]
