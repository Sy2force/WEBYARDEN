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
      close: 'Fermer'
    },
    header: {
      title: 'Web Yarden',
      subtitle: 'Agence Digitale Premium | Israël',
      getQuote: 'Devis Gratuit',
    },
    footer: {
      description: 'L\'agence digitale de référence en Israël. Nous transformons vos ambitions en succès numériques mesurables et durables.',
      quickLinks: 'Navigation Rapide',
      rights: '© 2024 Web Yarden. Tous droits réservés',
    },
    home: {
      hero: {
        title: 'Transformez votre Vision en Succès Digital 🚀',
        subtitle: 'L\'agence digitale premium d\'Israël qui propulse votre entreprise vers l\'excellence numérique. ROI garanti, résultats mesurables.',
        cta: 'Démarrer Mon Projet',
        ctaSecondary: 'Consultation Gratuite'
      },
      features: {
        title: 'Excellence Digitale Garantie',
        subtitle: 'Des solutions sur-mesure qui génèrent des résultats concrets et mesurables',
        webDev: {
          title: 'Développement Web Premium',
          description: 'Plateformes haute performance qui convertissent et fidélisent'
        },
        seo: {
          title: 'Growth Marketing & SEO',
          description: 'Stratégies digitales qui multiplient votre visibilité et vos ventes'
        },
        design: {
          title: 'Design UX/UI d\'Excellence',
          description: 'Expériences utilisateur premium qui marquent les esprits'
        }
      },
      portfolio: {
        title: 'Success Stories Qui Inspirent',
        subtitle: 'Découvrez comment nous avons propulsé nos clients vers le succès digital',
        ecommerce: 'E-commerce Haute Performance',
        ecommerceCategory: 'Vente en Ligne',
        ecommerceDesc: 'Plateforme qui a généré +300% de CA en 6 mois',
        mobile: 'App Mobile Révolutionnaire',
        mobileCategory: 'Innovation Mobile',
        mobileDesc: 'Application primée avec 50K+ téléchargements',
        corporate: 'Site Corporate d\'Exception',
        corporateCategory: 'Présence Premium',
        corporateDesc: 'Identité digitale qui renforce la crédibilité'
      },
      cta: {
        title: 'Prêt à Dominer Votre Marché ?',
        subtitle: 'Obtenez une stratégie digitale sur-mesure et un devis détaillé en 24h. Consultation gratuite garantie.'
      }
    },
    services: {
      title: 'Solutions Digitales Premium',
      subtitle: 'Des expertises de pointe qui transforment votre business et maximisent votre ROI',
      viewAll: 'Explorer Tous nos Services',
      requestQuote: 'Obtenir Mon Devis Gratuit',
      moreInfo: 'Découvrir les Détails',
      features: 'Avantages Inclus',
      delivery: 'Délai de Réalisation',
      price: 'Investissement',
      popular: '⭐ BESTSELLER',
      getStarted: 'Démarrer Maintenant',
      categories: {
        webDevelopment: 'Développement Web Premium',
        design: 'Design UX/UI d\'Excellence',
        marketing: 'Growth Marketing & Acquisition',
        ecommerce: 'E-commerce Haute Performance',
        mobile: 'Applications Mobile Natives',
        consulting: 'Stratégie Digitale & Consulting',
        maintenance: 'Support Technique Premium',
        seo: 'SEO & Référencement Avancé'
      },
      search: 'Trouvez votre solution digitale...',
      all: 'Tous les Services',
      noResults: 'Aucune solution trouvée. Contactez-nous pour un service sur-mesure.',
      startingFrom: 'Dès',
      deliveryTime: 'Temps de réalisation',
      stats: {
        title: 'L\'Excellence Mesurée en Chiffres',
        subtitle: 'Des résultats concrets qui parlent de notre expertise',
        services: 'Solutions Expertises',
        projects: 'Projets Réussis',
        satisfaction: 'Taux de Satisfaction',
        support: 'Support 24/7 Garanti'
      },
      cta: {
        title: 'Prêt à Révolutionner Votre Business ?',
        subtitle: 'Découvrez comment nos solutions premium peuvent multiplier vos résultats. Audit gratuit et stratégie personnalisée en 24h.',
        contact: 'Consultation Stratégique',
        quote: 'Audit Gratuit + Devis'
      }
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Parlons de votre projet digital',
      form: {
        name: 'Nom complet',
        email: 'Email',
        phone: 'Téléphone',
        company: 'Entreprise',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès!'
      },
      info: {
        address: 'Tel Aviv, Israël',
        phone: '+972 12 345 6789',
        email: 'contact@webyarden.co.il',
        hours: 'Lun-Ven: 9h-18h',
        phoneLabel: 'Téléphone',
        locationLabel: 'Localisation',
        hoursLabel: 'Horaires'
      },
      social: {
        title: 'Suivez-nous'
      }
    },
    about: {
      hero: {
        title: 'À Propos de Web Yarden',
        description: 'Votre partenaire digital de confiance en Israël'
      },
      story: {
        title: 'Notre Histoire',
        content: 'Fondée avec la vision de démocratiser l\'accès aux technologies digitales en Israël, Web Yarden s\'est imposée comme un acteur incontournable du développement web et mobile.',
        expertise: 'Expertise technique approfondie',
        market: 'Compréhension du marché israélien',
        solutions: 'Solutions sur mesure',
        imageAlt: 'Notre équipe au travail'
      },
      mission: {
        title: 'Notre Mission',
        content: 'Accompagner les entreprises israéliennes dans leur transformation digitale en proposant des solutions innovantes, performantes et adaptées aux spécificités du marché local.'
      },
      values: {
        title: 'Nos Valeurs',
        innovation: {
          title: 'Innovation',
          description: 'Nous restons à la pointe des dernières technologies pour offrir des solutions modernes et efficaces.'
        },
        quality: {
          title: 'Qualité',
          description: 'Chaque projet est réalisé avec le plus grand soin et selon les meilleurs standards de l\'industrie.'
        },
        partnership: {
          title: 'Partenariat',
          description: 'Nous travaillons en étroite collaboration avec nos clients pour comprendre et répondre à leurs besoins.'
        },
        transparency: {
          title: 'Transparence',
          description: 'Communication claire et honnête à chaque étape du projet pour une confiance mutuelle.'
        }
      },
      stats: {
        projects: 'Projets Réalisés',
        clients: 'Clients Satisfaits',
        experience: 'Années d\'Expérience',
        satisfaction: 'Taux de Satisfaction'
      },
      cta: {
        title: 'Prêt à Démarrer Votre Projet ?',
        subtitle: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.',
        button: 'Contactez-nous'
      }
    },
    packs: {
      title: 'Solutions Business Premium 💎',
      subtitle: 'Des packages clés-en-main qui transforment votre vision en empire digital rentable',
      popular: '🔥 BESTSELLER',
      mostPopular: 'Solution n°1 des entrepreneurs',
      getStarted: 'Démarrer Mon Succès',
      contactUs: 'Consultation Stratégique',
      features: 'Avantages Premium Inclus',
      whatYouGet: 'Votre Arsenal Digital Complet',
      perfect: 'Idéal pour dominer',
      startingAt: 'Investissement dès',
      onQuote: 'Tarif sur-mesure',
      otherServices: 'expertises bonus',
      added: '✅ Intégré',
      choose: 'Choisir l\'Excellence',
      addedToCart: '🛒 Ajouté avec succès',
      choosePack: 'Adopter cette Solution',
      save: '💰 ÉCONOMIE EXCEPTIONNELLE',
      servicesIncluded: 'Arsenal d\'Expertises Inclus',
      consultation: '🎯 Audit Stratégique Offert',
      delivery: '⚡ Livraison Express Garantie',
      guarantee: '🛡️ Satisfaction 100% Garantie',
      pricing: {
        oneTime: 'Paiement unique'
      },
      comparison: {
        title: 'Matrice de Comparaison Premium',
        button: 'Comparer les Solutions',
        features: {
          title: 'Expertises & Avantages',
          logo: 'Identité Visuelle Premium',
          responsive: 'Design Responsive Haute Performance',
          seo: 'SEO & Référencement Avancé',
          social: 'Stratégie Réseaux Sociaux',
          ecommerce: 'E-commerce Conversion Optimisée',
          mobile: 'Application Mobile Native',
          support: 'Support Premium 24/7',
          training: 'Formation & Coaching Inclus'
        }
      },
      whyChoose: {
        title: 'Pourquoi les Leaders Choisissent Web Yarden ? 🏆',
        delivery: {
          title: '⚡ Exécution Fulgurante',
          description: 'Lancement sous 48h, livrée clés-en-main en 2-4 semaines. Votre succès ne peut pas attendre.'
        },
        expertise: {
          title: '🎯 Expertise Marché Israélien',
          description: 'Maîtrise totale des spécificités locales, réglementations et habitudes de consommation. Votre avantage concurrentiel.'
        },
        guarantee: {
          title: '🛡️ Garantie ROI & Performance',
          description: 'Résultats mesurables garantis ou remboursement intégral. Votre investissement est sécurisé.'
        }
      },
      cta: {
        title: 'Besoin d\'une Solution Sur-Mesure ? 🎯',
        description: 'Nos experts analysent vos défis et conçoivent la stratégie digitale parfaite pour dominer votre marché',
        consultation: 'Audit Stratégique Gratuit',
        chat: 'Expert En Ligne Maintenant'
      }
    },
    dashboard: {
      title: 'Tableau de Bord',
      welcome: 'Bienvenue sur votre tableau de bord',
      stats: {
        projects: 'Projets Actifs',
        messages: 'Messages',
        quotes: 'Devis en Cours'
      },
      tabs: {
        projects: 'Gestion des Projets',
        clients: 'Gestion des Clients',
        analytics: 'Analytics Avancées'
      },
      comingSoon: 'Cette section sera implémentée dans une prochaine version.',
      recentProjects: 'Projets Récents',
      notifications: 'Notifications',
      cart: 'Panier Actuel'
    },
    simulator: {
      title: 'Simulateur Express',
      tooltip: 'Simulateur de devis',
      openLabel: 'Ouvrir le simulateur de devis',
      closeLabel: 'Fermer le simulateur',
      service: 'Service souhaité',
      selectService: 'Sélectionnez un service',
      budget: 'Budget estimé',
      timeline: 'Délai souhaité',
      urgent: 'Urgent (1-2 semaines)',
      normal: 'Normal (3-4 semaines)',
      flexible: 'Flexible (5+ semaines)',
      estimate: 'Estimation',
      addToCart: 'Ajouter au panier',
      successMessage: 'Service ajouté au panier avec succès!'
    },
    cart: {
      title: 'Panier',
      empty: 'Votre panier est vide',
      total: 'Total',
      close: 'Fermer le panier',
      discoverServices: 'Découvrir nos services',
      decreaseQuantity: 'Diminuer la quantité',
      increaseQuantity: 'Augmenter la quantité',
      removeItem: 'Supprimer cet article',
      checkout: 'Passer commande',
      continue: 'Continuer les achats',
      summary: 'Panier',
      item: 'article',
      items: 'articles'
    },
    payment: {
      title: 'Finaliser la commande',
      personalDetails: 'Informations personnelles',
      fullName: 'Nom complet',
      fullNamePlaceholder: 'Votre nom complet',
      email: 'Email',
      phone: 'Téléphone',
      company: 'Entreprise',
      companyPlaceholder: 'Nom de votre entreprise',
      address: 'Adresse',
      addressPlaceholder: 'Votre adresse complète',
      city: 'Ville',
      cityPlaceholder: 'Votre ville',
      zipCode: 'Code postal',
      orderSummary: 'Récapitulatif de commande',
      total: 'Total',
      paymentMethod: 'Méthode de paiement',
      creditCard: 'Carte bancaire',
      bankTransfer: 'Virement bancaire',
      cardNumber: 'Numéro de carte',
      expiryDate: 'Date d\'expiration',
      bankDetails: 'Coordonnées bancaires',
      termsText: 'J\'accepte les conditions générales et la politique de confidentialité',
      termsLink: 'conditions générales',
      back: 'Retour',
      cancel: 'Annuler',
      continue: 'Continuer',
      pay: 'Payer maintenant',
      processing: 'Traitement...',
      success: 'Paiement réussi !',
      successMessage: 'Votre commande a été traitée avec succès. Vous recevrez une confirmation par email.',
      redirecting: 'Redirection en cours...'
    },
    testimonials: {
      title: 'Success Stories de nos Clients',
      subtitle: 'Découvrez comment nous avons révolutionné leur business digital',
      trustedBy: 'Leaders du Marché qui nous Font Confiance',
      goTo: 'Lire le témoignage complet',
      testimonial1: {
        name: 'Sarah Cohen',
        company: 'TechStart IL',
        role: 'CEO & Fondatrice',
        content: '🚀 Web Yarden a démultiplié notre croissance ! Grâce à leur stratégie digitale sur-mesure, nous avons décroché +250% de leads qualifiés en 4 mois. Une expertise technique redoutable et une compréhension parfaite du marché israélien.'
      },
      testimonial2: {
        name: 'David Levi',
        company: 'E-Commerce Plus',
        role: 'Directeur Général',
        content: '💰 ROI spectaculaire ! En 6 mois, Web Yarden a transformé notre boutique en ligne ordinaire en machine à vendre : +300% de CA, taux de conversion doublé, et une expérience client qui nous différencie totalement de la concurrence.'
      },
      testimonial3: {
        name: 'Rachel Goldberg',
        company: 'Startup Nation Hub',
        role: 'VP Marketing & Growth',
        content: '🌍 Expansion internationale réussie ! Leur approche multilingue nous a ouvert les marchés francophone, anglophone et hébraïque. Nous avons conquis 3 nouveaux pays et doublé notre base client en 8 mois.'
      },
      testimonial4: {
        name: 'Michael Rosenberg',
        company: 'FinTech Innovations',
        role: 'CTO & Co-fondateur',
        content: '⚙️ Code d\'exception et livraison éclair ! Architecture robuste, sécurité bancaire, performance optimale. Web Yarden maîtrise les technologies de pointe. Notre plateforme gère désormais 10M+ de transactions sans faille.'
      }
    },
    projects: {
      title: 'Portfolio d\'Excellence 🏆',
      subtitle: 'Découvrez nos chef-d\'\u0153uvres digitaux qui génèrent des millions et transforment les entreprises',
      filterTitle: 'Explorer par Expertise',
      filterSubtitle: 'Chaque projet : une success story, des résultats mesurables, un ROI exceptionnel',
      categories: {
        all: 'Tous nos Succès',
        web: 'Sites Web Premium',
        ecommerce: 'E-commerce Haute Performance',
        mobile: 'Apps Mobiles Natives',
        platform: 'Plateformes Innovantes'
      },
      techStack: 'Technologies utilisées',
      viewProject: 'Voir le projet',
      results: 'Résultats',
      budget: 'Budget',
      duration: 'Durée',
      team: 'Équipe',
      year: 'Année',
      satisfaction: 'Satisfaction',
      status: 'Statut',
      delivered: '✅ Livré',
      featuredProject: '⭐ Projet Phare',
      performanceTable: {
        title: 'Tableau de Performance des Projets',
        subtitle: 'Analyse détaillée de nos réalisations'
      },
      impact: {
        title: 'Impact Mesurable & Résultats Concrets 📈',
        subtitle: 'Chaque projet génère une croissance exponentielle pour nos clients',
        projectsDelivered: 'Projets À Succès',
        clientsSatisfied: 'Clients Enchantés',
        yearsExperience: 'Années d\'Excellence',
        supportAvailable: 'Support Premium 24/7'
      },
      technologies: {
        title: 'Technologies & Outils',
        subtitle: 'Nous utilisons les meilleures technologies pour vos projets'
      },
      cta: {
        title: 'Votre Success Story Commence Maintenant 🚀',
        subtitle: 'Rejoignez l\'elite de nos clients qui dominent leur marché. Consultation stratégique gratuite et feuille de route personnalisée.',
        discuss: 'Consultation Stratégique Gratuite',
        discover: 'Explorer Nos Solutions Premium'
      },
      portfolio: {
        ecommerceStore: {
          title: 'Boutique E-commerce Premium',
          category: 'E-commerce & Retail',
          description: 'Plateforme e-commerce complète avec gestion avancée des stocks, paiements sécurisés et interface utilisateur intuitive.',
          tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
          results: '+300% ventes en ligne',
          year: '2024'
        },
        restaurantApp: {
          title: 'App de Livraison Restaurant',
          category: 'Application Mobile',
          description: 'Application mobile native pour commandes en ligne avec géolocalisation, paiement intégré et suivi temps réel.',
          tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
          results: '50% commandes mobiles',
          year: '2024'
        },
        corporateWebsite: {
          title: 'Site Corporate Moderne',
          category: 'Site Web d\'Entreprise',
          description: 'Site web corporate responsive avec système de gestion de contenu, blog intégré et optimisation SEO avancée.',
          tech: ['WordPress', 'PHP', 'MySQL', 'SCSS'],
          results: '+200% trafic organique',
          year: '2023'
        },
        realEstatePortal: {
          title: 'Portail Immobilier',
          category: 'Plateforme Web',
          description: 'Portail immobilier avec recherche avancée, visite virtuelle 360°, système de matching et CRM intégré.',
          tech: ['Vue.js', 'Laravel', 'PostgreSQL', 'Elasticsearch'],
          results: '+150% leads qualifiés',
          year: '2024'
        },
        healthcareApp: {
          title: 'App Santé & Bien-être',
          category: 'Application Santé',
          description: 'Application de suivi santé avec téléconsultation, gestion des rendez-vous et intégration avec dispositifs IoT.',
          tech: ['Flutter', 'Firebase', 'WebRTC', 'TensorFlow'],
          results: '10k+ utilisateurs actifs',
          year: '2023'
        },
        educationPlatform: {
          title: 'Plateforme E-learning',
          category: 'Éducation & Formation',
          description: 'Plateforme d\'apprentissage en ligne avec vidéos interactives, quizz adaptatifs et suivi de progression.',
          tech: ['React', 'Django', 'PostgreSQL', 'AWS'],
          results: '95% taux de completion',
          year: '2023'
        }
      }
    },
    stats: {
      title: 'Nos Résultats Parlent d\'Eux-Mêmes',
      subtitle: 'Des chiffres qui témoignent de notre expertise et de notre engagement envers nos clients',
      goal: 'Objectif : Votre succès digital',
      projects: 'Projets Réalisés',
      clients: 'Clients Satisfaits',
      experience: 'Années d\'Expérience',
      satisfaction: 'Taux de Satisfaction'
    },
    buttons: {
      learnMore: 'En savoir plus',
      getStarted: 'Commencer',
      viewAll: 'Voir tout',
      skipToContent: 'Aller au contenu principal',
      viewProject: 'Voir le projet',
      readMore: 'Lire la suite',
      previous: 'Précédent',
      next: 'Suivant',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      save: 'Enregistrer',
      edit: 'Modifier',
      delete: 'Supprimer',
      close: 'Fermer',
      requestQuote: 'Demander un devis',
      moreInfo: 'Plus d\'informations'
    },
    forms: {
      required: 'Ce champ est obligatoire',
      invalidEmail: 'Adresse email invalide',
      invalidPhone: 'Numéro de téléphone invalide',
      minLength: 'Minimum {count} caractères',
      maxLength: 'Maximum {count} caractères'
    },
    chat: {
      title: 'Chat Support',
      welcome: 'Bonjour ! Comment puis-je vous aider ?',
      placeholder: 'Tapez votre message...',
      autoResponse: 'Merci pour votre message ! Un conseiller vous répondra bientôt.'
    },
    errors: {
      generic: 'Une erreur est survenue',
      network: 'Erreur de connexion',
      notFound: 'Page non trouvée',
      unauthorized: 'Accès non autorisé',
      serverError: 'Erreur serveur'
    },
    legal: {
      title: 'Mentions Légales',
      subtitle: 'Informations légales et conditions d\'utilisation',
      lastUpdate: 'Dernière mise à jour',
      company: {
        title: 'Informations sur l\'entreprise',
        name: 'Dénomination sociale',
        form: 'Forme juridique',
        address: 'Siège social',
        email: 'Email',
        phone: 'Téléphone',
        director: 'Directeur de la publication',
        companyName: 'Web Yarden',
        companyForm: 'Société à responsabilité limitée',
        companyAddress: 'Tel Aviv, Israël',
        companyEmail: 'contact@webyarden.co.il',
        companyPhone: '+972 12 345 6789'
      },
      hosting: {
        title: 'Hébergement du site',
        description: 'Ce site est hébergé par :',
        provider: 'Vercel Inc.',
        providerAddress: '340 S Lemon Ave #4133\nWalnut, CA 91789\nÉtats-Unis'
      },
      intellectual: {
        title: 'Propriété intellectuelle',
        content1: 'L\'ensemble de ce site relève de la législation israélienne et internationale sur le droit d\'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.',
        content2: 'La reproduction de tout ou partie de ce site sur un support électronique quel qu\'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.'
      },
      privacy: {
        title: 'Protection des données personnelles (RGPD)',
        collection: {
          title: 'Collecte des données',
          description: 'Nous collectons les données personnelles suivantes :',
          items: ['Nom et prénom', 'Adresse email', 'Numéro de téléphone (optionnel)', 'Nom de l\'entreprise (optionnel)', 'Données de navigation (cookies)']
        },
        purpose: {
          title: 'Finalité du traitement',
          description: 'Les données collectées sont utilisées pour :',
          items: ['Répondre à vos demandes de contact', 'Établir des devis personnalisés', 'Améliorer nos services', 'Vous informer de nos actualités (avec votre consentement)']
        },
        rights: {
          title: 'Vos droits',
          description: 'Conformément au RGPD, vous disposez des droits suivants :',
          items: ['Droit d\'accès à vos données', 'Droit de rectification', 'Droit à l\'effacement', 'Droit à la portabilité', 'Droit d\'opposition'],
          contact: 'Pour exercer ces droits, contactez-nous à : contact@webyarden.co.il'
        }
      },
      cookies: {
        title: 'Politique des cookies',
        description: 'Ce site utilise des cookies pour améliorer l\'expérience utilisateur et analyser le trafic. Les cookies utilisés sont :',
        types: {
          technical: 'Cookies techniques : Nécessaires au fonctionnement du site',
          analytics: 'Cookies analytiques : Pour mesurer l\'audience (Google Analytics)',
          preferences: 'Cookies de préférences : Pour mémoriser vos choix'
        },
        notice: 'Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus fonctionner correctement.'
      },
      liability: {
        title: 'Limitation de responsabilité',
        content1: 'Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.',
        content2: 'Web Yarden ne pourra en aucun cas être tenu responsable de tout dommage de quelque nature qu\'il soit résultant de l\'interprétation ou de l\'utilisation des informations et/ou documents disponibles sur ce site.'
      },
      jurisdiction: {
        title: 'Droit applicable et juridiction',
        content: 'Les présentes mentions légales sont régies par le droit israélien. Tout litige relatif à l\'utilisation de ce site sera de la compétence exclusive des tribunaux de Tel Aviv, Israël.'
      },
      contact: {
        title: 'Contact',
        description: 'Pour toute question concernant ces mentions légales ou l\'utilisation de vos données personnelles, vous pouvez nous contacter :'
      }
    },
    support: {
      title: 'Support Premium 24/7 🆘',
      subtitle: 'Une équipe d\'experts dédiée pour garantir votre succès digital en permanence',
      searchPlaceholder: 'Trouvez votre solution instantanément...',
      stats: {
        support247: 'Support Expert Disponible',
        responseTime: 'Réponse Garantie',
        satisfaction: 'Taux de Satisfaction',
        articles: 'Solutions & Guides'
      },
      quickActions: {
        title: 'Accès Direct à nos Experts 🚀',
        chat: {
          title: '💬 Chat Expert en Direct',
          description: 'Réponse immédiate de nos spécialistes'
        },
        call: {
          title: '📞 Consultation Téléphonique',
          description: 'Experts disponibles Lun-Ven 9h-18h (GMT+2)'
        },
        email: {
          title: '✉️ Support Email Premium',
          description: 'Réponse détaillée sous 2h maximum'
        },
        urgent: {
          title: '🆘 Intervention d\'Urgence',
          description: 'Hotline prioritaire pour situations critiques'
        },
        available: '✅ Expert En Ligne'
      },
      categories: {
        title: 'Expertise à Votre Service 🎯',
        technical: {
          title: '⚙️ Support Technique Avancé',
          description: 'Optimisation, déboggage, maintenance haute performance'
        },
        billing: {
          title: '💳 Gestion Financière & Abonnements',
          description: 'Facturation transparente, paiements sécurisés, upgrades'
        },
        features: {
          title: '🚀 Maîtrise des Fonctionnalités',
          description: 'Formation personnalisée pour maximiser votre ROI'
        },
        account: {
          title: '🔐 Administration Sécurisée',
          description: 'Gestion d\'accès, sécurité renforcée, configurations'
        },
        viewAll: 'Explorer Toutes les Solutions',
        popularArticles: 'Guides les Plus Demandés'
      },
      emergency: {
        title: 'Urgence Business Critique ? 🆘',
        description: 'Intervention immédiate pour protéger votre activité et vos revenus en ligne',
        emergencyCall: '🚨 Hotline d\'Urgence 24/7',
        priorityChat: '⚡ Chat Prioritaire Expert'
      },
      articles: {
        technical: [
          'Comment mettre à jour mon site web ?',
          'Résoudre les problèmes de connexion',
          'Optimiser les performances de mon site',
          'Configurer les emails professionnels'
        ],
        billing: [
          'Comprendre ma facture mensuelle',
          'Modifier mes informations de paiement',
          'Annuler ou suspendre mon abonnement',
          'Demander un remboursement'
        ],
        features: [
          'Ajouter du contenu à mon site',
          'Configurer Google Analytics',
          'Optimiser mon SEO',
          'Intégrer les réseaux sociaux'
        ],
        account: [
          'Changer mon mot de passe',
          'Ajouter des utilisateurs à mon compte',
          'Configurer l\'authentification à deux facteurs',
          'Exporter mes données'
        ]
      }
    }
  },
  en: {
    common: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      quote: 'Quote',
      about: 'About',
      language: 'Language',
      packs: 'Packs',
      description: 'Description',
      progress: 'Progress',
      close: 'Close'
    },
    header: {
      title: 'Web Yarden',
      subtitle: 'Premium Digital Agency | Israel',
      getQuote: 'Free Quote',
    },
    footer: {
      description: 'Israel\'s leading digital agency. We transform your ambitions into measurable and sustainable digital success.',
      quickLinks: 'Quick Navigation',
      rights: '© 2024 Web Yarden. All rights reserved'
    },
    home: {
      hero: {
        title: 'Transform Your Vision into Digital Success 🚀',
        subtitle: 'Israel\'s premium digital agency that propels your business to digital excellence. Guaranteed ROI, measurable results.',
        cta: 'Launch My Project',
        ctaSecondary: 'Free Consultation'
      },
      features: {
        title: 'Guaranteed Digital Excellence',
        subtitle: 'Custom solutions that generate concrete and measurable results',
        webDev: {
          title: 'Premium Web Development',
          description: 'High-performance platforms that convert and retain customers'
        },
        seo: {
          title: 'Growth Marketing & SEO',
          description: 'Digital strategies that multiply your visibility and sales'
        },
        design: {
          title: 'Excellence UX/UI Design',
          description: 'Premium user experiences that leave lasting impressions'
        }
      },
      portfolio: {
        title: 'Success Stories That Inspire',
        subtitle: 'Discover how we\'ve propelled our clients to digital success',
        ecommerce: 'High-Performance E-commerce',
        ecommerceCategory: 'Online Sales',
        ecommerceDesc: 'Platform that generated +300% revenue in 6 months',
        mobile: 'Revolutionary Mobile App',
        mobileCategory: 'Mobile Innovation',
        mobileDesc: 'Award-winning app with 50K+ downloads',
        corporate: 'Exceptional Corporate Site',
        corporateCategory: 'Premium Presence',
        corporateDesc: 'Digital identity that strengthens credibility'
      },
      cta: {
        title: 'Ready to Dominate Your Market?',
        subtitle: 'Get a custom digital strategy and detailed quote in 24h. Free consultation guaranteed.'
      }
    },
    services: {
      title: 'Premium Digital Solutions',
      subtitle: 'Cutting-edge expertise that transforms your business and maximizes your ROI',
      viewAll: 'Explore All Our Services',
      requestQuote: 'Get My Free Quote',
      moreInfo: 'Discover the Details',
      features: 'Premium Benefits Included',
      delivery: 'Delivery Timeline',
      price: 'Investment',
      popular: '⭐ BESTSELLER',
      getStarted: 'Start Now',
      categories: {
        webDevelopment: 'Premium Web Development',
        design: 'Excellence UX/UI Design',
        marketing: 'Growth Marketing & Acquisition',
        ecommerce: 'High-Performance E-commerce',
        mobile: 'Native Mobile Applications',
        consulting: 'Digital Strategy & Consulting',
        maintenance: 'Premium Technical Support',
        seo: 'Advanced SEO & Referencing'
      },
      search: 'Find your digital solution...',
      all: 'All Services',
      noResults: 'No solution found. Contact us for a custom service.',
      startingFrom: 'From',
      deliveryTime: 'Realization time',
      stats: {
        title: 'Excellence Measured in Numbers',
        subtitle: 'Concrete results that speak to our expertise',
        services: 'Expert Solutions',
        projects: 'Successful Projects',
        satisfaction: 'Satisfaction Rate',
        support: '24/7 Support Guaranteed'
      },
      cta: {
        title: 'Ready to Revolutionize Your Business?',
        subtitle: 'Discover how our premium solutions can multiply your results. Free audit and personalized strategy in 24h.',
        contact: 'Strategic Consultation',
        quote: 'Free Audit + Quote'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Let\'s talk about your digital project',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!'
      },
      info: {
        address: 'Tel Aviv, Israel',
        phone: '+972 12 345 6789',
        email: 'contact@webyarden.co.il',
        hours: 'Mon-Fri: 9am-6pm',
        phoneLabel: 'Phone',
        locationLabel: 'Location',
        hoursLabel: 'Hours'
      },
      social: {
        title: 'Follow us'
      }
    },
    about: {
      hero: {
        title: 'About Web Yarden',
        description: 'Your trusted digital partner in Israel'
      },
      story: {
        title: 'Our Story',
        content: 'Founded with the vision of democratizing access to digital technologies in Israel, Web Yarden has established itself as a key player in web and mobile development.',
        expertise: 'Deep technical expertise',
        market: 'Understanding of the Israeli market',
        solutions: 'Tailor-made solutions',
        imageAlt: 'Our team at work'
      },
      mission: {
        title: 'Our Mission',
        content: 'To support Israeli companies in their digital transformation by offering innovative, high-performance solutions adapted to the specificities of the local market.'
      },
      values: {
        title: 'Our Values',
        innovation: {
          title: 'Innovation',
          description: 'We stay at the forefront of the latest technologies to offer modern and efficient solutions.'
        },
        quality: {
          title: 'Quality',
          description: 'Every project is carried out with the utmost care and according to the best industry standards.'
        },
        partnership: {
          title: 'Partnership',
          description: 'We work closely with our clients to understand and meet their needs.'
        },
        transparency: {
          title: 'Transparency',
          description: 'Clear and honest communication at every stage of the project for mutual trust.'
        }
      },
      stats: {
        projects: 'Projects Completed',
        clients: 'Satisfied Clients',
        experience: 'Years of Experience',
        satisfaction: 'Satisfaction Rate'
      },
      cta: {
        title: 'Ready to Start Your Project?',
        subtitle: 'Contact us today to discuss your needs and discover how we can help you.',
        button: 'Contact Us'
      }
    },
    packs: {
      title: 'Our Packs',
      subtitle: 'Complete solutions for all your digital needs',
      popular: 'Most Popular',
      onQuote: 'On Quote',
      otherServices: 'other services',
      added: '✓ Added!',
      choose: 'Choose',
      addedToCart: 'Added to cart',
      choosePack: 'Choose this pack',
      save: 'SAVE',
      consultation: 'Free consultation',
      delivery: 'Delivery 2-4 weeks',
      guarantee: 'Satisfaction guarantee',
      servicesIncluded: 'Services included',
      pricing: {
        oneTime: 'One-time payment'
      },
      comparison: {
        title: 'Pack Comparison',
        button: 'Compare packs',
        features: {
          title: 'Features',
          logo: 'Professional Logo',
          responsive: 'Responsive Website',
          seo: 'SEO Optimization',
          social: 'Social Media',
          ecommerce: 'E-commerce',
          mobile: 'Mobile App',
          support: 'Technical Support',
          training: 'Training Included'
        }
      },
      whyChoose: {
        title: 'Why Choose Web Yarden?',
        delivery: {
          title: 'Express Delivery',
          description: 'Start within 48h, delivery in 2-4 weeks maximum'
        },
        expertise: {
          title: 'Local Expertise',
          description: 'Specialists in Israeli market and local culture'
        },
        guarantee: {
          title: 'Results Guarantee',
          description: 'Satisfaction guaranteed or full refund'
        }
      },
      cta: {
        title: 'Not sure about your choice?',
        description: 'Let\'s discuss your needs to find the perfect solution',
        consultation: 'Free Consultation',
        chat: 'Live Chat'
      }
    },
    dashboard: {
      title: 'Dashboard',
      welcome: 'Welcome to your dashboard',
      stats: {
        projects: 'Active Projects',
        messages: 'Messages',
        quotes: 'Pending Quotes'
      },
      tabs: {
        projects: 'Project Management',
        clients: 'Client Management',
        analytics: 'Advanced Analytics'
      },
      comingSoon: 'This section will be implemented in a future version.',
      recentProjects: 'Recent Projects',
      notifications: 'Notifications',
      cart: 'Current Cart'
    },
    simulator: {
      title: 'Express Simulator',
      tooltip: 'Quote simulator',
      openLabel: 'Open quote simulator',
      closeLabel: 'Close simulator',
      service: 'Desired service',
      selectService: 'Select a service',
      budget: 'Estimated budget',
      timeline: 'Desired timeline',
      urgent: 'Urgent (1-2 weeks)',
      normal: 'Normal (3-4 weeks)',
      flexible: 'Flexible (5+ weeks)',
      estimate: 'Estimate',
      addToCart: 'Add to cart',
      successMessage: 'Service added to cart successfully!'
    },
    cart: {
      title: 'Cart',
      empty: 'Your cart is empty',
      total: 'Total',
      close: 'Close cart',
      discoverServices: 'Discover our services',
      decreaseQuantity: 'Decrease quantity',
      increaseQuantity: 'Increase quantity',
      removeItem: 'Remove this item',
      checkout: 'Checkout',
      continue: 'Continue Shopping',
      summary: 'Cart',
      item: 'item',
      items: 'items'
    },
    payment: {
      title: 'Complete Order',
      personalDetails: 'Personal Information',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Your full name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      companyPlaceholder: 'Your company name',
      address: 'Address',
      addressPlaceholder: 'Your full address',
      city: 'City',
      cityPlaceholder: 'Your city',
      zipCode: 'Zip Code',
      orderSummary: 'Order Summary',
      total: 'Total',
      paymentMethod: 'Payment Method',
      creditCard: 'Credit Card',
      bankTransfer: 'Bank Transfer',
      cardNumber: 'Card Number',
      expiryDate: 'Expiry Date',
      bankDetails: 'Bank Details',
      termsText: 'I accept the terms and conditions and privacy policy',
      termsLink: 'terms and conditions',
      back: 'Back',
      cancel: 'Cancel',
      continue: 'Continue',
      pay: 'Pay Now',
      processing: 'Processing...',
      success: 'Payment Successful!',
      successMessage: 'Your order has been processed successfully. You will receive a confirmation email.',
      redirecting: 'Redirecting...'
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'Discover what our clients say about our work',
      trustedBy: 'They trust us',
      goTo: 'Go to testimonial',
      testimonial1: {
        name: 'Sarah Cohen',
        company: 'TechStart IL',
        role: 'CEO',
        content: 'Web Yarden transformed our digital presence. Their technical expertise and understanding of the Israeli market are exceptional. A trusted partner who exceeds our expectations.'
      },
      testimonial2: {
        name: 'David Levi',
        company: 'E-Commerce Plus',
        role: 'Founder',
        content: 'Thanks to Web Yarden, our online sales increased by 300% in 6 months. A professional and responsive team that truly understands e-commerce challenges in Israel.'
      },
      testimonial3: {
        name: 'Rachel Goldberg',
        company: 'Startup Nation',
        role: 'Marketing Director',
        content: 'Web Yarden\'s multilingual approach allowed us to effectively reach our French, English, and Hebrew-speaking customers. A perfect solution for the Israeli market.'
      },
      testimonial4: {
        name: 'Michael Rosenberg',
        company: 'Digital Solutions',
        role: 'CTO',
        content: 'Quality code, deadlines met, excellent support. Web Yarden exceeds our expectations on every project. Their technical expertise is remarkable.'
      }
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Discover our achievements that transform ideas into digital success',
      filterTitle: 'Filter by Category',
      filterSubtitle: 'Explore our achievements by area of expertise',
      categories: {
        all: 'All',
        web: 'Websites',
        ecommerce: 'E-commerce',
        mobile: 'Applications',
        platform: 'Platforms'
      },
      techStack: 'Technologies used',
      viewProject: 'View project',
      results: 'Results',
      budget: 'Budget',
      duration: 'Duration',
      team: 'Team',
      year: 'Year',
      satisfaction: 'Satisfaction',
      status: 'Status',
      delivered: '✅ Delivered',
      featuredProject: '⭐ Featured Project',
      performanceTable: {
        title: 'Project Performance Table',
        subtitle: 'Detailed analysis of our achievements'
      },
      impact: {
        title: 'Our impact in numbers',
        subtitle: 'Concrete results for our clients',
        projectsDelivered: 'Projects delivered',
        clientsSatisfied: 'Clients satisfied',
        yearsExperience: 'Years of experience',
        supportAvailable: 'Support available'
      },
      technologies: {
        title: 'Technologies & Tools',
        subtitle: 'We use the best technologies for your projects'
      },
      cta: {
        title: 'Your next project starts here',
        subtitle: 'Join our satisfied clients and bring your digital ideas to life.',
        discuss: 'Discuss my project',
        discover: 'Discover our services'
      },
      portfolio: {
        ecommerceStore: {
          title: 'Premium E-commerce Store',
          category: 'E-commerce & Retail',
          description: 'Complete e-commerce platform with advanced inventory management, secure payments and intuitive user interface.',
          tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
          results: '+300% online sales',
          year: '2024'
        },
        restaurantApp: {
          title: 'Restaurant Delivery App',
          category: 'Mobile Application',
          description: 'Native mobile app for online orders with geolocation, integrated payment and real-time tracking.',
          tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
          results: '50% mobile orders',
          year: '2024'
        },
        corporateWebsite: {
          title: 'Modern Corporate Website',
          category: 'Business Website',
          description: 'Responsive corporate website with content management system, integrated blog and advanced SEO optimization.',
          tech: ['WordPress', 'PHP', 'MySQL', 'SCSS'],
          results: '+200% organic traffic',
          year: '2023'
        },
        realEstatePortal: {
          title: 'Real Estate Portal',
          category: 'Web Platform',
          description: 'Real estate portal with advanced search, 360° virtual tours, matching system and integrated CRM.',
          tech: ['Vue.js', 'Laravel', 'PostgreSQL', 'Elasticsearch'],
          results: '+150% qualified leads',
          year: '2024'
        },
        healthcareApp: {
          title: 'Health & Wellness App',
          category: 'Healthcare Application',
          description: 'Health tracking application with telemedicine, appointment management and IoT device integration.',
          tech: ['Flutter', 'Firebase', 'WebRTC', 'TensorFlow'],
          results: '10k+ active users',
          year: '2023'
        },
        educationPlatform: {
          title: 'E-learning Platform',
          category: 'Education & Training',
          description: 'Online learning platform with interactive videos, adaptive quizzes and progress tracking.',
          tech: ['React', 'Django', 'PostgreSQL', 'AWS'],
          results: '95% completion rate',
          year: '2023'
        }
      }
    },
    stats: {
      title: 'Our Results Speak for Themselves',
      subtitle: 'Numbers that testify to our expertise and commitment to our clients',
      goal: 'Goal: Your digital success',
      projects: 'Completed projects',
      clients: 'Satisfied clients',
      experience: 'Years of experience',
      support: '24/7 Support'
    },
    buttons: {
      learnMore: 'Learn more',
      getStarted: 'Get started',
      viewAll: 'View all',
      skipToContent: 'Skip to main content',
      viewProject: 'View project',
      readMore: 'Read more',
      previous: 'Previous',
      next: 'Next',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      close: 'Close',
      requestQuote: 'Request quote',
      moreInfo: 'More information'
    },
    forms: {
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
      invalidPhone: 'Invalid phone number',
      minLength: 'Minimum {count} characters',
      maxLength: 'Maximum {count} characters'
    },
    chat: {
      title: 'Chat Support',
      welcome: 'Hello! How can I help you?',
      placeholder: 'Type your message...',
      autoResponse: 'Thank you for your message! A consultant will respond soon.'
    },
    errors: {
      generic: 'Something went wrong',
      network: 'Network error',
      notFound: 'Page not found',
      unauthorized: 'Unauthorized access',
      serverError: 'Server error'
    },
    legal: {
      title: 'Legal Notice',
      subtitle: 'Legal information and terms of use',
      lastUpdate: 'Last updated',
      company: {
        title: 'Company Information',
        name: 'Company name',
        form: 'Legal form',
        address: 'Registered office',
        email: 'Email',
        phone: 'Phone',
        director: 'Publication director',
        companyName: 'Web Yarden',
        companyForm: 'Limited Liability Company',
        companyAddress: 'Tel Aviv, Israel',
        companyEmail: 'contact@webyarden.co.il',
        companyPhone: '+972 12 345 6789'
      },
      hosting: {
        title: 'Website Hosting',
        description: 'This website is hosted by:',
        provider: 'Vercel Inc.',
        providerAddress: '340 S Lemon Ave #4133\nWalnut, CA 91789\nUnited States'
      },
      intellectual: {
        title: 'Intellectual Property',
        content1: 'This entire website is subject to Israeli and international copyright and intellectual property legislation. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.',
        content2: 'The reproduction of all or part of this site on any electronic medium whatsoever is formally prohibited except with the express authorization of the publication director.'
      },
      privacy: {
        title: 'Personal Data Protection (GDPR)',
        collection: {
          title: 'Data Collection',
          description: 'We collect the following personal data:',
          items: ['First and last name', 'Email address', 'Phone number (optional)', 'Company name (optional)', 'Navigation data (cookies)']
        },
        purpose: {
          title: 'Purpose of Processing',
          description: 'The collected data is used to:',
          items: ['Respond to your contact requests', 'Establish personalized quotes', 'Improve our services', 'Inform you of our news (with your consent)']
        },
        rights: {
          title: 'Your Rights',
          description: 'In accordance with GDPR, you have the following rights:',
          items: ['Right of access to your data', 'Right of rectification', 'Right to erasure', 'Right to portability', 'Right to object'],
          contact: 'To exercise these rights, contact us at: contact@webyarden.co.il'
        }
      },
      cookies: {
        title: 'Cookie Policy',
        description: 'This website uses cookies to improve user experience and analyze traffic. The cookies used are:',
        types: {
          technical: 'Technical cookies: Necessary for website operation',
          analytics: 'Analytics cookies: To measure audience (Google Analytics)',
          preferences: 'Preference cookies: To remember your choices'
        },
        notice: 'You can configure your browser to refuse cookies, but some website features may no longer work properly.'
      },
      liability: {
        title: 'Limitation of Liability',
        content1: 'The information contained on this website is as accurate as possible and the site is periodically updated, but may nevertheless contain inaccuracies, omissions or gaps.',
        content2: 'Web Yarden cannot under any circumstances be held responsible for any damage of any nature whatsoever resulting from the interpretation or use of information and/or documents available on this site.'
      },
      jurisdiction: {
        title: 'Applicable Law and Jurisdiction',
        content: 'These legal notices are governed by Israeli law. Any dispute relating to the use of this site will be under the exclusive jurisdiction of the courts of Tel Aviv, Israel.'
      },
      contact: {
        title: 'Contact',
        description: 'For any questions regarding these legal notices or the use of your personal data, you can contact us:'
      }
    },
    support: {
      title: 'Web Yarden Help Center',
      subtitle: 'Find answers to your questions quickly or contact our team of experts',
      searchPlaceholder: 'Search help...',
      stats: {
        support247: 'Support available',
        responseTime: 'Response time',
        satisfaction: 'Client satisfaction',
        articles: 'Help articles'
      },
      quickActions: {
        title: 'Contact us directly',
        chat: {
          title: 'Live Chat',
          description: 'Talk to our team now'
        },
        call: {
          title: 'Phone Call',
          description: 'Mon-Fri 9am-6pm (GMT+2)'
        },
        email: {
          title: 'Email Support',
          description: 'Response within 24h maximum'
        },
        urgent: {
          title: 'Urgent Support',
          description: 'For critical issues'
        },
        available: 'Available'
      },
      categories: {
        title: 'Help categories',
        technical: {
          title: 'Technical Support',
          description: 'Technical issues, bugs, maintenance'
        },
        billing: {
          title: 'Billing & Payments',
          description: 'Questions about invoices, payments, subscriptions'
        },
        features: {
          title: 'Features',
          description: 'How to use your website features'
        },
        account: {
          title: 'Account Management',
          description: 'Account settings, security, access'
        },
        viewAll: 'View all articles',
        popularArticles: 'Popular articles'
      },
      emergency: {
        title: 'Urgent issue?',
        description: 'For critical problems affecting your production website',
        emergencyCall: 'Emergency call',
        priorityChat: 'Priority chat'
      },
      articles: {
        technical: [
          'How to update my website?',
          'Resolve connection issues',
          'Optimize my website performance',
          'Configure professional emails'
        ],
        billing: [
          'Understanding my monthly invoice',
          'Update my payment information',
          'Cancel or suspend my subscription',
          'Request a refund'
        ],
        features: [
          'Add content to my website',
          'Configure Google Analytics',
          'Optimize my SEO',
          'Integrate social media'
        ],
        account: [
          'Change my password',
          'Add users to my account',
          'Configure two-factor authentication',
          'Export my data'
        ]
      }
    }
  },
  he: {
    common: {
      home: 'בית',
      services: 'שירותים',
      projects: 'פרויקטים',
      contact: 'צור קשר',
      quote: 'הצעת מחיר',
      about: 'אודות',
      language: 'שפה',
      packs: 'חבילות',
      description: 'תיאור',
      progress: 'התקדמות',
      close: 'סגור'
    },
    header: {
      title: 'ווב יארדן',
      subtitle: 'סוכנות דיגיטלית פרמיום | ישראל',
      getQuote: 'הצעת מחיר חינם',
    },
    footer: {
      description: 'הסוכנות הדיגיטלית המובילה בישראל. אנו הופכים את השאיפות שלכם להצלחות דיגיטליות מדידות ובר-קיימא.',
      quickLinks: 'ניווט מהיר',
      rights: '© 2024 ווב יארדן. כל הזכויות שמורות'
    },
    home: {
      hero: {
        title: 'הפכו את החזון שלכם להצלחה דיגיטלית 🚀',
        subtitle: 'הסוכנות הדיגיטלית הפרמיום של ישראל שמניעה את העסק שלכם למצוינות דיגיטלית. ROI מובטח, תוצאות מדידות.',
        cta: 'להתחיל את הפרויקט שלי',
        ctaSecondary: 'ייעוץ חינם'
      },
      features: {
        title: 'מצוינות דיגיטלית מובטחת',
        subtitle: 'פתרונות מותאמים אישית שמייצרים תוצאות קונקרטיות ומדידות',
        webDev: {
          title: 'פיתוח אתרים פרמיום',
          description: 'פלטפורמות בעלות ביצועים גבוהים שממירות ומחזקות נאמנות לקוחות'
        },
        seo: {
          title: 'גרות׳ מרקטינג ו-SEO',
          description: 'אסטרטגיות דיגיטליות שמכפילות את הנראות והמכירות שלכם'
        },
        design: {
          title: 'עיצוב UX/UI ברמה גבוהה',
          description: 'חוויות משתמש פרמיום שמותירות רושם בל יימחה'
        }
      },
      portfolio: {
        title: 'סיפורי הצלחה שמעוררים השראה',
        subtitle: 'גלו איך הניעו את הלקוחות שלנו להצלחה דיגיטלית',
        ecommerce: 'מסחר אלקטרוני בעל ביצועים גבוהים',
        ecommerceCategory: 'מכירות אונליין',
        ecommerceDesc: 'פלטפורמה שייצרה +300% הכנסות ב-6 חודשים',
        mobile: 'אפליקציה מובילה מהפכנית',
        mobileCategory: 'חדשנות מובילה',
        mobileDesc: 'אפליקציה עטורת פרסים עם +50 אלף הורדות',
        corporate: 'אתר קורפורטיבי יוצא דופן',
        corporateCategory: 'נוכחות פרמיום',
        corporateDesc: 'זהות דיגיטלית שמחזקת אמינות'
      },
      cta: {
        title: 'מוכנים לשלוט בשוק שלכם?',
        subtitle: 'קבלו אסטרטגיה דיגיטלית מותאמת אישית והצעת מחיר מפורטת תוך 24 שעות. ייעוץ חינם מובטח.'
      }
    },
    services: {
      title: 'השירותים שלנו',
      subtitle: 'פתרונות דיגיטליים מותאמים להצלחתכם',
      viewAll: 'צפו בכל השירותים',
      requestQuote: 'בקשו הצעת מחיר',
      moreInfo: 'מידע נוסף',
      features: 'תכונות כלולות',
      delivery: 'אספקה',
      price: 'מחיר',
      popular: 'פופולרי',
      getStarted: 'התחלו',
      categories: {
        webDevelopment: 'פיתוח אתרים',
        design: 'עיצוב וחווית משתמש',
        marketing: 'שיווק דיגיטלי',
        ecommerce: 'מסחר אלקטרוני',
        mobile: 'אפליקציות ניידות',
        consulting: 'ייעוץ ואסטרטגיה',
        maintenance: 'תחזוקה ותמיכה',
        seo: 'קידום אתרים'
      },
      search: 'חפש שירות...',
      all: 'הכל',
      noResults: 'לא נמצא שירות עבור החיפוש הזה.',
      startingFrom: 'החל מ-',
      deliveryTime: 'זמן אספקה',
      stats: {
        title: 'ווב יארדן במספרים',
        subtitle: 'המומחיות שלנו לשירותכם',
        services: 'שירותים זמינים',
        projects: 'פרויקטים שהושלמו',
        satisfaction: 'לקוחות מרוצים',
        support: 'תמיכה טכנית'
      },
      cta: {
        title: 'מוכנים לשנות את הנוכחות הדיגיטלית שלכם?',
        subtitle: 'צרו איתנו קשר היום כדי לדון בפרויקט שלכם ולקבל הצעת מחיר מותאמת אישית בחינם.',
        contact: 'צור קשר',
        quote: 'קבל הצעת מחיר'
      }
    },
    contact: {
      title: 'צור קשר',
      subtitle: 'בואו נדבר על הפרויקט הדיגיטלי שלכם',
      form: {
        name: 'שם מלא',
        email: 'אימייל',
        phone: 'טלפון',
        company: 'חברה',
        subject: 'נושא',
        message: 'הודעה',
        send: 'שלח הודעה',
        sending: 'שולח...',
        success: 'ההודעה נשלחה בהצלחה!'
      },
      info: {
        address: 'תל אביב, ישראל',
        phone: '+972 12 345 6789',
        email: 'contact@webyarden.co.il',
        hours: 'א׳-ה׳: 9:00-18:00',
        phoneLabel: 'טלפון',
        locationLabel: 'מיקום',
        hoursLabel: 'שעות פעילות'
      },
      social: {
        title: 'עקבו אחרינו'
      }
    },
    about: {
      hero: {
        title: 'אודות Web Yarden',
        description: 'השותף הדיגיטלי המהימן שלכם בישראל'
      },
      story: {
        title: 'הסיפור שלנו',
        content: 'נוסדה עם החזון להנגיש את הטכנולוגיות הדיגיטליות בישראל, Web Yarden התבססה כשחקן מרכזי בפיתוח אתרים ואפליקציות.',
        expertise: 'מומחיות טכנית מעמיקה',
        market: 'הבנת השוק הישראלי',
        solutions: 'פתרונות מותאמים אישית',
        imageAlt: 'הצוות שלנו בעבודה'
      },
      mission: {
        title: 'המשימה שלנו',
        content: 'ללוות חברות ישראליות בטרנספורמציה הדיגיטלית שלהן על ידי הצעת פתרונות חדשניים, ביצועיים ומותאמים לייחודיות השוק המקומי.'
      },
      values: {
        title: 'הערכים שלנו',
        innovation: {
          title: 'חדשנות',
          description: 'אנו נשארים בחזית הטכנולוגיות החדישות ביותר כדי להציע פתרונות מודרניים ויעילים.'
        },
        quality: {
          title: 'איכות',
          description: 'כל פרויקט מבוצע בקפידה הרבה ביותר ובהתאם לסטנדרטים הטובים ביותר בתעשייה.'
        },
        partnership: {
          title: 'שותפות',
          description: 'אנו עובדים בשיתוף הדוק עם הלקוחות שלנו כדי להבין ולענות על הצרכים שלהם.'
        },
        transparency: {
          title: 'שקיפות',
          description: 'תקשורת ברורה וכנה בכל שלב של הפרויקט למען אמון הדדי.'
        }
      },
      stats: {
        projects: 'פרויקטים שהושלמו',
        clients: 'לקוחות מרוצים',
        experience: 'שנות ניסיון',
        satisfaction: 'שיעור שביעות רצון'
      },
      cta: {
        title: 'מוכנים להתחיל את הפרויקט שלכם?',
        subtitle: 'צרו איתנו קשר היום כדי לדון בצרכים שלכם ולגלות איך אנחנו יכולים לעזור לכם.',
        button: 'צור קשר'
      }
    },
    packs: {
      title: 'החבילות שלנו',
      subtitle: 'פתרונות מלאים לכל הצרכים הדיגיטליים שלכם',
      popular: 'פופולרי',
      mostPopular: 'הכי פופולרי',
      getStarted: 'התחל',
      contactUs: 'צור קשר',
      features: 'תכונות כלולות',
      whatYouGet: 'מה אתם מקבלים',
      perfect: 'מושלם עבור',
      startingAt: 'החל מ-',
      onQuote: 'לפי הצעת מחיר',
      otherServices: 'שירותים נוספים',
      added: 'נוסף',
      choose: 'בחר',
      addedToCart: 'נוסף לעגלה',
      choosePack: 'בחר חבילה זו',
      save: 'חסכו',
      servicesIncluded: 'שירותים כלולים',
      consultation: 'ייעוץ חינם',
      delivery: 'אספקה מהירה',
      guarantee: 'אחריות שביעות רצון',
      pricing: {
        oneTime: 'תשלום חד פעמי'
      },
      comparison: {
        title: 'השוואת חבילות',
        button: 'השווה חבילות',
        features: {
          title: 'תכונות',
          logo: 'לוגו מקצועי',
          responsive: 'אתר רספונסיבי',
          seo: 'אופטימיזציה למנועי חיפוש',
          social: 'רשתות חברתיות',
          ecommerce: 'מסחר אלקטרוני',
          mobile: 'אפליקציה ניידת',
          support: 'תמיכה טכנית',
          training: 'הדרכה כלולה'
        }
      },
      whyChoose: {
        title: 'למה לבחור בווב יארדן?',
        delivery: {
          title: 'משלוח מהיר',
          description: 'התחלה תוך 48 שעות, משלוח תוך 2-4 שבועות מקסימום'
        },
        expertise: {
          title: 'מומחיות מקומית',
          description: 'מומחים בשוק הישראלי ובתרבות המקומית'
        },
        guarantee: {
          title: 'ערבות לתוצאות',
          description: 'שביעות רצון מובטחת או החזר מלא'
        }
      },
      cta: {
        title: 'לא בטוח בבחירה שלך?',
        description: 'בואו נדבר על הצרכים שלכם כדי למצוא את הפתרון המושלם',
        consultation: 'ייעוץ חינם',
        chat: 'צ\'אט חי'
      }
    },
    dashboard: {
      title: 'לוח בקרה',
      welcome: 'ברוכים הבאים ללוח הבקרה שלכם',
      stats: {
        projects: 'פרויקטים פעילים',
        messages: 'הודעות',
        quotes: 'הצעות מחיר ממתינות'
      },
      tabs: {
        projects: 'ניהול פרויקטים',
        clients: 'ניהול לקוחות',
        analytics: 'אנליטיקה מתקדמת'
      },
      comingSoon: 'חלק זה יוטמע בגרסה עתידית.',
      recentProjects: 'פרויקטים אחרונים',
      notifications: 'התראות',
      cart: 'עגלה נוכחית'
    },
    simulator: {
      title: 'סימולטור מהיר',
      tooltip: 'סימולטור הצעת מחיר',
      openLabel: 'פתח סימולטור הצעת מחיר',
      closeLabel: 'סגור סימולטור',
      service: 'שירות רצוי',
      selectService: 'בחר שירות',
      budget: 'תקציב משוער',
      timeline: 'לוח זמנים רצוי',
      urgent: 'דחוף (1-2 שבועות)',
      normal: 'רגיל (3-4 שבועות)',
      flexible: 'גמיש (5+ שבועות)',
      estimate: 'הערכה',
      addToCart: 'הוסף לעגלה',
      successMessage: 'השירות נוסף לעגלה בהצלחה!'
    },
    cart: {
      title: 'עגלת קניות',
      empty: 'העגלה שלכם ריקה',
      total: 'סה"כ',
      close: 'סגור עגלה',
      discoverServices: 'גלה את השירותים שלנו',
      decreaseQuantity: 'הקטן כמות',
      increaseQuantity: 'הגדל כמות',
      removeItem: 'הסר פריט זה',
      checkout: 'קנה',
      continue: 'המשך קנייה',
      summary: 'עגלה',
      item: 'פריט',
      items: 'פריטים'
    },
    payment: {
      title: 'השלמת הזמנה',
      personalDetails: 'פרטים אישיים',
      fullName: 'שם מלא',
      fullNamePlaceholder: 'השם המלא שלכם',
      email: 'אימייל',
      phone: 'טלפון',
      company: 'חברה',
      companyPlaceholder: 'שם החברה שלכם',
      address: 'כתובת',
      addressPlaceholder: 'הכתובת המלאה שלכם',
      city: 'עיר',
      cityPlaceholder: 'העיר שלכם',
      zipCode: 'מיקוד',
      orderSummary: 'סיכום הזמנה',
      total: 'סה"כ',
      paymentMethod: 'אמצעי תשלום',
      creditCard: 'כרטיס אשראי',
      bankTransfer: 'העברה בנקאית',
      cardNumber: 'מספר כרטיס',
      expiryDate: 'תאריך תפוגה',
      bankDetails: 'פרטי בנק',
      termsText: 'אני מסכים לתנאי השימוש ולמדיניות הפרטיות',
      termsLink: 'תנאי השימוש',
      back: 'חזור',
      cancel: 'ביטול',
      continue: 'המשך',
      pay: 'שלם עכשיו',
      processing: 'מעבד...',
      success: 'התשלום הצליח!',
      successMessage: 'ההזמנה שלכם עובדה בהצלחה. תקבלו אישור באימייל.',
      redirecting: 'מפנה...'
    },
    testimonials: {
      title: 'עדויות לקוחות',
      subtitle: 'גלו מה הלקוחות שלנו אומרים על העבודה שלנו',
      trustedBy: 'הם בוטחים בנו',
      goTo: 'עבור לעדות',
      testimonial1: {
        name: 'שרה כהן',
        company: 'TechStart IL',
        role: 'מנכ"לית',
        content: 'Web Yarden שינתה את הנוכחות הדיגיטלית שלנו. המומחיות הטכנית שלהם וההבנה של השוק הישראלי יוצאות דופן. שותף מהימן שעולה על הציפיות שלנו.'
      },
      testimonial2: {
        name: 'דוד לוי',
        company: 'E-Commerce Plus',
        role: 'מייסד',
        content: 'הודות ל-Web Yarden, המכירות המקוונות שלנו עלו ב-300% ב-6 חודשים. צוות מקצועי ומגיב שבאמת מבין את האתגרים של מסחר אלקטרוני בישראל.'
      },
      testimonial3: {
        name: 'רחל גולדברג',
        company: 'Startup Nation',
        role: 'מנהלת שיווק',
        content: 'הגישה הרב-לשונית של Web Yarden אפשרה לנו להגיע ביעילות ללקוחות דוברי צרפתית, אנגלית ועברית. פתרון מושלם לשוק הישראלי.'
      },
      testimonial4: {
        name: 'מיכאל רוזנברג',
        company: 'Digital Solutions',
        role: 'מנהל טכנולוגיות',
        content: 'איכות קוד, עמידה בזמנים, תמיכה מעולה. Web Yarden עולה על הציפיות שלנו בכל פרויקט. המומחיות הטכנית שלהם יוצאת דופן.'
      }
    },
    projects: {
      title: 'הפרויקטים שלנו',
      subtitle: 'גלו את ההישגים שלנו שהופכים רעיונות להצלחה דיגיטלית',
      filterTitle: 'סנן לפי קטגוריה',
      filterSubtitle: 'גלו את ההישגים שלנו לפי תחום מומחיות',
      categories: {
        all: 'הכל',
        web: 'אתרי אינטרנט',
        ecommerce: 'מסחר אלקטרוני',
        mobile: 'אפליקציות',
        platform: 'פלטפורמות'
      },
      techStack: 'טכנולוגיות בשימוש',
      viewProject: 'צפה בפרויקט',
      results: 'תוצאות',
      budget: 'תקציב',
      duration: 'משך זמן',
      team: 'צוות',
      year: 'שנה',
      satisfaction: 'שביעות רצון',
      status: 'סטטוס',
      delivered: '✅ נמסר',
      featuredProject: '⭐ פרויקט מובחר',
      performanceTable: {
        title: 'טבלת ביצועי פרויקטים',
        subtitle: 'ניתוח מפורט של ההישגים שלנו'
      },
      impact: {
        title: 'ההשפעה שלנו במספרים',
        subtitle: 'תוצאות קונקרטיות ללקוחותינו',
        projectsDelivered: 'פרויקטים שנמסרו',
        clientsSatisfied: 'לקוחות מרוצים',
        yearsExperience: 'שנות ניסיון',
        supportAvailable: 'תמיכה זמינה'
      },
      technologies: {
        title: 'טכנולוגיות וכלים',
        subtitle: 'אנו משתמשים בטכנולוגיות הטובות ביותר עבור הפרויקטים שלכם'
      },
      cta: {
        title: 'הפרויקט הבא שלכם מתחיל כאן',
        subtitle: 'הצטרפו ללקוחותינו המרוצים והפכו את הרעיונות הדיגיטליים שלכם למציאות.',
        discuss: 'דיון על הפרויקט שלי',
        discover: 'גלו את השירותים שלנו'
      },
      portfolio: {
        ecommerceStore: {
          title: 'חנות מסחר אלקטרוני פרימיום',
          category: 'מסחר אלקטרוני וקמעונאות',
          description: 'פלטפורמת מסחר אלקטרוני מלאה עם ניהול מלאי מתקדם, תשלומים מאובטחים וממשק משתמש אינטואיטיבי.',
          tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
          results: '+300% מכירות מקוונות',
          year: '2024'
        },
        restaurantApp: {
          title: 'אפליקציית משלוחי מסעדה',
          category: 'אפליקציה מובילה',
          description: 'אפליקציה מובילה נטיבית להזמנות מקוונות עם איכון גיאוגרפי, תשלום מובנה ומעקב בזמן אמת.',
          tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
          results: '50% הזמנות מובילות',
          year: '2024'
        },
        corporateWebsite: {
          title: 'אתר תאגידי מודרני',
          category: 'אתר עסקי',
          description: 'אתר תאגידי רספונסיבי עם מערכת ניהול תוכן, בלוג מובנה ואופטימיזציית SEO מתקדמת.',
          tech: ['WordPress', 'PHP', 'MySQL', 'SCSS'],
          results: '+200% תעבורה אורגנית',
          year: '2023'
        },
        realEstatePortal: {
          title: 'פורטל נדלן',
          category: 'פלטפורמת אינטרנט',
          description: 'פורטל נדלן עם חיפוש מתקדם, סיורים וירטואליים 360°, מערכת התאמה ו-CRM מובנה.',
          tech: ['Vue.js', 'Laravel', 'PostgreSQL', 'Elasticsearch'],
          results: '+150% לידים איכותיים',
          year: '2024'
        },
        healthcareApp: {
          title: 'אפליקציית בריאות ורווחה',
          category: 'אפליקציית בריאות',
          description: 'אפליקציית מעקב בריאות עם טלרפואה, ניהול פגישות ואינטגרציה עם מכשירי IoT.',
          tech: ['Flutter', 'Firebase', 'WebRTC', 'TensorFlow'],
          results: '10k+ משתמשים פעילים',
          year: '2023'
        },
        educationPlatform: {
          title: 'פלטפורמת למידה מקוונת',
          category: 'חינוך והכשרה',
          description: 'פלטפורמת למידה מקוונת עם סרטונים אינטראקטיביים, חידונים אדפטיביים ומעקב התקדמות.',
          tech: ['React', 'Django', 'PostgreSQL', 'AWS'],
          results: '95% שיעור השלמה',
          year: '2023'
        }
      }
    },
    stats: {
      title: 'התוצאות שלנו מדברות בעד עצמן',
      subtitle: 'מספרים המעידים על המומחיות והמחויבות שלנו ללקוחותינו',
      goal: 'מטרה: ההצלחה הדיגיטלית שלכם',
      projects: 'פרויקטים שהושלמו',
      clients: 'לקוחות מרוצים',
      experience: 'שנות ניסיון',
      support: 'תמיכה 24/7'
    },
    buttons: {
      learnMore: 'למד עוד',
      getStarted: 'התחל',
      viewAll: 'הצג הכל',
      skipToContent: 'דלג לתוכן הראשי',
      viewProject: 'צפה בפרויקט',
      readMore: 'קרא עוד',
      previous: 'קודם',
      next: 'הבא',
      cancel: 'בטל',
      confirm: 'אשר',
      save: 'שמור',
      edit: 'ערוך',
      delete: 'מחק',
      close: 'סגור',
      requestQuote: 'בקש הצעת מחיר',
      moreInfo: 'מידע נוסף'
    },
    forms: {
      required: 'שדה זה הוא חובה',
      invalidEmail: 'כתובת אימייל לא תקינה',
      invalidPhone: 'מספר טלפון לא תקין',
      minLength: 'מינימום {count} תווים',
      maxLength: 'מקסימום {count} תווים'
    },
    chat: {
      title: 'צ׳אט תמיכה',
      welcome: 'שלום! איך אני יכול לעזור לך?',
      placeholder: 'הקלד את ההודעה שלך...',
      autoResponse: 'תודה על ההודעה! יועץ יחזור אליך בקרוב.'
    },
    errors: {
      generic: 'אירעה שגיאה',
      network: 'שגיאת חיבור',
      notFound: 'הדף לא נמצא',
      unauthorized: 'גישה לא מורשית',
      serverError: 'שגיאת שרת'
    },
    legal: {
      title: 'הודעה משפטית',
      subtitle: 'מידע משפטי ותנאי שימוש',
      lastUpdate: 'עדכון אחרון',
      company: {
        title: 'מידע על החברה',
        name: 'שם החברה',
        form: 'צורה משפטית',
        address: 'משרד רשום',
        email: 'אימייל',
        phone: 'טלפון',
        director: 'מנהל הפרסום',
        companyName: 'Web Yarden',
        companyForm: 'חברה בעלת אחריות מוגבלת',
        companyAddress: 'תל אביב, ישראל',
        companyEmail: 'contact@webyarden.co.il',
        companyPhone: '+972 12 345 6789'
      },
      hosting: {
        title: 'אירוח האתר',
        description: 'אתר זה מתארח על ידי:',
        provider: 'Vercel Inc.',
        providerAddress: '340 S Lemon Ave #4133\nWalnut, CA 91789\nארצות הברית'
      },
      intellectual: {
        title: 'קניין רוחני',
        content1: 'כל האתר הזה כפוף לחקיקה הישראלית והבינלאומית בנושא זכויות יוצרים וקניין רוחני. כל זכויות הרביה שמורות, כולל למסמכים להורדה ולייצוגים איקונוגרפיים ופוטוגרפיים.',
        content2: 'השכפול של כל האתר או חלק ממנו על כל מדיום אלקטרוני שהוא אסור בהחלט ללא הרשאה מפורשת של מנהל הפרסום.'
      },
      privacy: {
        title: 'הגנה על נתונים אישיים (GDPR)',
        collection: {
          title: 'איסוף נתונים',
          description: 'אנו אוספים את הנתונים האישיים הבאים:',
          items: ['שם פרטי ומשפחה', 'כתובת אימייל', 'מספר טלפון (אופציונלי)', 'שם החברה (אופציונלי)', 'נתוני גלישה (עוגיות)']
        },
        purpose: {
          title: 'מטרת העיבוד',
          description: 'הנתונים שנאספים משמשים ל:',
          items: ['מענה לבקשות הקשר שלכם', 'הכנת הצעות מחיר מותאמות אישית', 'שיפור השירותים שלנו', 'עדכון בחדשות שלנו (בהסכמתכם)']
        },
        rights: {
          title: 'הזכויות שלכם',
          description: 'בהתאם ל-GDPR, יש לכם את הזכויות הבאות:',
          items: ['זכות גישה לנתונים שלכם', 'זכות לתיקון', 'זכות למחיקה', 'זכות לניידות', 'זכות להתנגדות'],
          contact: 'למימוש הזכויות הללו, צרו איתנו קשר ב: contact@webyarden.co.il'
        }
      },
      cookies: {
        title: 'מדיניות עוגיות',
        description: 'האתר הזה משתמש בעוגיות לשיפור חוויית המשתמש ולניתוח תנועה. העוגיות בשימוש הן:',
        types: {
          technical: 'עוגיות טכניות: נחוצות לתפקוד האתר',
          analytics: 'עוגיות אנליטיות: למדידת קהל (Google Analytics)',
          preferences: 'עוגיות העדפות: לזכירת הבחירות שלכם'
        },
        notice: 'אתם יכולים להגדיר את הדפדפן שלכם לסרב לעוגיות, אבל חלק מהפונקציות של האתר עלולות לא לעבוד כראוי.'
      },
      liability: {
        title: 'הגבלת אחריות',
        content1: 'המידע הכלול באתר זה מדויק ככל הניתן והאתר מתעדכן מעת לעת, אך עדיין עלול להכיל אי-דיוקים, השמטות או פערים.',
        content2: 'Web Yarden לא תוכל בשום מקרה להיות אחראית לכל נזק מכל סוג שהוא הנובע מפרשנות או שימוש במידע ו/או מסמכים הזמינים באתר זה.'
      },
      jurisdiction: {
        title: 'דין החל ושיפוט',
        content: 'ההודעה המשפטית הזו כפופה לחוק הישראלי. כל מחלוקת הקשורה לשימוש באתר זה תהיה תחת השיפוט הבלעדי של בתי המשפט בתל אביב, ישראל.'
      },
      contact: {
        title: 'צור קשר',
        description: 'לכל שאלה הנוגעת להודעה המשפטית הזו או לשימוש בנתונים האישיים שלכם, אתם יכולים ליצור איתנו קשר:'
      }
    },
    support: {
      title: 'מרכז העזרה Web Yarden',
      subtitle: 'מצאו במהירות תשובות לשאלות שלכם או צרו קשר עם צוות המומחים שלנו',
      searchPlaceholder: 'חפש בעזרה...',
      stats: {
        support247: 'תמיכה זמינה',
        responseTime: 'זמן תגובה',
        satisfaction: 'שביעות רצון לקוחות',
        articles: 'מאמרי עזרה'
      },
      quickActions: {
        title: 'צרו איתנו קשר ישירות',
        chat: {
          title: 'צ\'אט חי',
          description: 'דברו עם הצוות שלנו עכשיו'
        },
        call: {
          title: 'שיחת טלפון',
          description: 'א\'-ה\' 9:00-18:00 (GMT+2)'
        },
        email: {
          title: 'תמיכה באימייל',
          description: 'תגובה תוך 24 שעות מקסימום'
        },
        urgent: {
          title: 'תמיכה דחופה',
          description: 'לבעיות קריטיות'
        },
        available: 'זמין'
      },
      categories: {
        title: 'קטגוריות עזרה',
        technical: {
          title: 'תמיכה טכנית',
          description: 'בעיות טכניות, באגים, תחזוקה'
        },
        billing: {
          title: 'חיוב ותשלומים',
          description: 'שאלות על חשבוניות, תשלומים, מנויים'
        },
        features: {
          title: 'פונקציות',
          description: 'איך להשתמש בפונקציות של האתר שלכם'
        },
        account: {
          title: 'ניהול חשבון',
          description: 'הגדרות חשבון, אבטחה, גישה'
        },
        viewAll: 'צפו בכל המאמרים',
        popularArticles: 'מאמרים פופולריים'
      },
      emergency: {
        title: 'בעיה דחופה?',
        description: 'לבעיות קריטיות המשפיעות על האתר שלכם בפרודקשן',
        emergencyCall: 'שיחת חירום',
        priorityChat: 'צ\'אט עדיפות'
      },
      articles: {
        technical: [
          'איך לעדכן את האתר שלי?',
          'פתרון בעיות חיבור',
          'אופטימיזציה של ביצועי האתר שלי',
          'הגדרת אימיילים מקצועיים'
        ],
        billing: [
          'הבנת החשבונית החודשית שלי',
          'שינוי פרטי התשלום שלי',
          'ביטול או השעיית המנוי שלי',
          'בקשת החזר'
        ],
        features: [
          'הוספת תוכן לאתר שלי',
          'הגדרת Google Analytics',
          'אופטימיזציה של ה-SEO שלי',
          'שילוב רשתות חברתיות'
        ],
        account: [
          'שינוי הסיסמה שלי',
          'הוספת משתמשים לחשבון שלי',
          'הגדרת אימות דו-שלבי',
          'ייצוא הנתונים שלי'
        ]
      }
    }
  }
}

export const getStaticTranslations = (locale: string) => {
  return translations[locale] || translations.fr
}

export const getSupportedLocales = () => {
  return Object.keys(translations)
}

export default translations
