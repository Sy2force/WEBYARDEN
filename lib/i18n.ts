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
      title: '🚀 Solutions Digitales d\'Excellence',
      subtitle: 'Transformez votre vision en succès digital avec nos expertises premium. +150 projets réussis, ROI garanti à 300%',
      hero: {
        title: 'Votre Partenaire Digital Stratégique',
        subtitle: 'Des solutions sur-mesure qui propulsent votre croissance et maximisent vos revenus. Expertise reconnue, résultats garantis.',
        cta: 'Démarrer Mon Projet'
      },
      viewAll: 'Explorer Toutes nos Expertises',
      requestQuote: 'Obtenir Mon Devis Expert Gratuit',
      moreInfo: 'Découvrir les Détails Complets',
      features: 'Avantages Premium Inclus',
      delivery: 'Délai de Livraison Garanti',
      price: 'Investissement Transparent',
      popular: '🏆 SOLUTION PREMIUM',
      getStarted: 'Lancer Mon Projet Maintenant',
      categories: {
        webDevelopment: '💻 Développement Web Premium',
        design: '🎨 Design UX/UI d\'Exception',
        marketing: '📈 Growth Marketing & Lead Gen',
        ecommerce: '🛒 E-commerce Haute Performance',
        mobile: '📱 Apps Mobile Cross-Platform',
        consulting: '🎯 Consulting Stratégique Digital',
        maintenance: '🔧 Support Technique 24/7',
        seo: '🔍 SEO & Référencement Avancé'
      },
      search: 'Recherchez votre solution digitale idéale...',
      all: 'Toutes nos Expertises',
      noResults: 'Aucune solution standard trouvée ? Nous créons votre solution sur-mesure !',
      startingFrom: 'À partir de',
      deliveryTime: 'Livraison garantie sous',
      stats: {
        title: ' L\'Excellence Digitale en Chiffres',
        subtitle: 'Des performances exceptionnelles qui démontrent notre leadership sur le marché israélien',
        services: 'Solutions Premium Disponibles',
        projects: 'Projets Livrés avec Succès',
        satisfaction: 'Clients Satisfaits & Fidèles',
        support: 'Support Expert 24/7/365'
      },
      cta: {
        title: ' Prêt à Révolutionner Votre Business Digital ?',
        description: 'Rejoignez +150 entreprises qui nous font confiance. Consultation stratégique gratuite, devis personnalisé sous 24h.',
        getQuote: 'Obtenir Ma Stratégie Gratuite',
        contact: 'Parler à un Expert',
        benefits: [
          ' Audit complet offert',
          ' Stratégie personnalisée',
          ' ROI garanti à 300%',
          ' Support premium inclus'
        ]
      },
      catalog: {
        webDevelopment: {
          websiteVitrine: {
            title: 'Site Vitrine Premium d\'Excellence',
            description: 'Plateforme digitale sophistiquée qui transforme vos visiteurs en clients fidèles. Architecture responsive ultra-moderne avec performances optimales garanties.',
            features: [
              'Design responsive haut de gamme',
              'SEO technique avancé intégré',
              'Hébergement premium 1 an inclus',
              'Support technique VIP 24/7',
              'Analytics avancées intégrées',
              'Optimisation conversion garantie'
            ],
            badge: '⭐ SOLUTION POPULAIRE'
          },
          websiteCorporate: {
            title: 'Écosystème Corporate d\'Elite',
            description: 'Architecture digitale corporate sophistiquée avec fonctionnalités enterprise. Solution qui reflète votre leadership et renforce votre crédibilité market.',
            features: [
              'Architecture multi-pages premium',
              'CMS enterprise sur-mesure',
              'Formulaires intelligents avancés',
              'Dashboard analytics professionnel',
              'Intégrations API natives',
              'Sécurité enterprise renforcée'
            ]
          },
          landingPage: {
            title: 'Landing Page Conversion Maximale',
            description: 'Page d\'atterrissage haute performance conçue pour maximiser votre taux de conversion. Psychologie comportementale appliquée pour des résultats exceptionnels.',
            features: [
              'Design psychologie conversion',
              'A/B Testing professionnel intégré',
              'Intégration CRM automatisée',
              'Analytics comportementales',
              'Optimisation mobile parfaite',
              'Formulaires intelligents'
            ]
          },
          webAppCustom: {
            title: 'Application Web Strategic Sur-Mesure',
            description: 'Solution applicative enterprise développée selon vos spécifications exactes. Scalabilité garantie et architecture future-proof.',
            features: [
              'Architecture scalable enterprise',
              'Base de données haute performance',
              'API REST/GraphQL natives',
              'Dashboard admin sophistiqué',
              'Sécurité niveau bancaire',
              'Monitoring temps réel'
            ],
            badge: '🚀 SOLUTION PREMIUM'
          },
          portfolioWebsite: {
            title: 'Portfolio Créatif d\'Exception',
            description: 'Showcase digital premium qui met en valeur votre talent créatif. Expérience utilisateur immersive qui captive et convertit.',
            features: [
              'Galerie interactive dynamique',
              'Animations CSS sophistiquées',
              'Blog créatif intégré',
              'Formulaire contact premium',
              'SEO créatif optimisé',
              'Chargement ultra-rapide'
            ]
          },
          blogWebsite: {
            title: 'Plateforme Blog Strategic Premium',
            description: 'Écosystème de content marketing professionnel optimisé pour l\'autorité et l\'engagement. Moteur de croissance organique garanti.',
            features: [
              'CMS WordPress enterprise',
              'SEO content marketing avancé',
              'Newsletter automation intégrée',
              'Social media integration native',
              'Analytics contenu avancées',
              'Monétisation optimisée'
            ]
          }
        },
        ecommerce: {
          ecommerceBasic: {
            title: 'Boutique E-commerce Performance',
            description: 'Plateforme marchande complète optimisée pour maximiser vos ventes en ligne. Expérience d\'achat fluide qui convertit.',
            features: [
              'Catalogue produits intelligent',
              'Panier d\'achat optimisé UX',
              'Paiements sécurisés multi-gateway',
              'Gestion commandes automatisée',
              'Analytics ventes avancées',
              'Marketing automation intégré'
            ],
            badge: '🏆 CHOIX POPULAIRE'
          },
          ecommercePremium: {
            title: 'Marketplace Premium Multi-Vendeurs',
            description: 'Écosystème e-commerce enterprise avec gestion multi-vendeurs sophistiquée. Solution qui génère des revenus récurrents.',
            features: [
              'Système multi-vendeurs avancé',
              'Commission engine intelligent',
              'Analytics marketplace premium',
              'Application mobile native',
              'API marketplace complète',
              'Support vendor 24/7'
            ],
            badge: '💎 SOLUTION ENTERPRISE'
          },
          ecommerceMobile: {
            title: 'Application E-commerce Mobile Native',
            description: 'App mobile native haute performance pour votre boutique. Expérience shopping mobile optimale qui fidélise.',
            features: [
              'Applications iOS & Android natives',
              'Push notifications intelligentes',
              'Paiement mobile sécurisé',
              'Géolocalisation avancée',
              'Offline mode intégré',
              'Analytics mobile complètes'
            ]
          },
          marketplaceIntegration: {
            title: 'Intégration Marketplace Strategic',
            description: 'Connexion native avec Amazon, eBay, Etsy pour multiplier vos canaux de vente. Gestion centralisée garantie.',
            features: [
              'Synchronisation produits automatique',
              'Gestion stock centralisée',
              'Prix dynamiques intelligents',
              'Reporting multi-canal',
              'Optimisation listings',
              'Support marketplace expert'
            ]
          },
          subscriptionEcommerce: {
            title: 'E-commerce Abonnement Récurrent',
            description: 'Modèle économique par abonnement qui génère des revenus prévisibles. Rétention client maximisée.',
            features: [
              'Abonnements récurrents flexibles',
              'Gestion facturation automatisée',
              'Customer portal self-service',
              'Analytics abonnements avancées',
              'Churn prediction intégrée',
              'Upgrade/downgrade intelligent'
            ]
          }
        },
        design: {
          logoDesign: {
            title: 'Création Logo d\'Impact Premium',
            description: 'Identité visuelle mémorable qui incarne l\'essence de votre marque. Design psychologiquement étudié pour maximiser la reconnaissance.',
            features: [
              '5 concepts créatifs premium',
              'Révisions illimitées garanties',
              'Fichiers vectoriels haute définition',
              'Guide d\'utilisation professionnel',
              'Déclinaisons multiples incluses',
              'Propriété intellectuelle complète'
            ]
          },
          brandIdentity: {
            title: 'Identité de Marque Elite Complète',
            description: 'Écosystème visuel cohérent qui positionne votre entreprise comme leader de son marché. Charte graphique premium ultra-complète.',
            features: [
              'Logo + variations complètes',
              'Palette couleurs psychologique',
              'Typographie brand exclusive',
              'Guidelines d\'utilisation détaillées',
              'Templates business premium',
              'Audit concurrentiel inclus'
            ],
            badge: '🎨 CHOIX POPULAIRE'
          },
          uiUxDesign: {
            title: 'Design UI/UX d\'Exception Strategic',
            description: 'Interface utilisateur révolutionnaire qui transforme l\'expérience client. Design thinking appliqué pour une usabilité parfaite.',
            features: [
              'Recherche utilisateur approfondie',
              'Wireframes haute fidélité',
              'Prototypes interactifs avancés',
              'Design system complet',
              'Tests utilisateurs inclus',
              'Optimisation conversion garantie'
            ]
          },
          printDesign: {
            title: 'Supports Communication Premium',
            description: 'Matériel de communication physique haut de gamme qui renforce votre présence offline. Impact visuel garanti.',
            features: [
              'Cartes de visite premium',
              'Flyers impact marketing',
              'Brochures corporate luxe',
              'Fichiers print-ready optimisés',
              'Conseils impression expert',
              'Choix papiers premium'
            ]
          },
          packagingDesign: {
            title: 'Design Packaging Révolutionnaire',
            description: 'Emballage qui fait vendre et fidélise au premier regard. Psychology packaging appliquée pour maximiser l\'impact.',
            features: [
              'Design créatif différenciant',
              'Maquette 3D photoréaliste',
              'Fichiers production optimisés',
              'Conseils impression spécialisés',
              'Tests focus group inclus',
              'Variantes saisonnières'
            ]
          }
        },
        marketing: {
          seoAudit: {
            title: 'Audit SEO Strategic Complet',
            description: 'Analyse exhaustive de votre écosystème SEO avec plan d\'action détaillé. Diagnostic précis pour dominer Google.',
            features: [
              'Audit technique approfondi',
              'Analyse concurrentielle premium',
              'Recherche mots-clés profitable',
              'Plan d\'action prioritisé',
              'Opportunités cachées révélées',
              'ROI prévisible calculé'
            ]
          },
          seoOptimization: {
            title: 'Optimisation SEO Performance Mensuelle',
            description: 'Service récurrent qui propulse votre visibilité Google month après month. Résultats mesurables garantis.',
            features: [
              'Optimisation technique continue',
              'Création contenu SEO premium',
              'Link building autorité',
              'Reporting détaillé mensuel',
              'Monitoring positions 24/7',
              'Adaptation algorithmes Google'
            ],
            badge: '📈 SERVICE RÉCURRENT'
          },
          googleAds: {
            title: 'Campagnes Google Ads ROI Maximisé',
            description: 'Publicités Google ultra-ciblées qui génèrent des leads qualifiés immédiatement. Expertise certifiée Google Partner.',
            features: [
              'Setup campagne expert',
              'Recherche mots-clés profitable',
              'Landing pages optimisées',
              'Optimisation ROI continue',
              'A/B testing systematic',
              'Reporting performance détaillé'
            ]
          },
          socialMedia: {
            title: 'Social Media Management Premium',
            description: 'Animation professionnelle de vos réseaux sociaux qui engage et convertit. Stratégie content marketing intégrée.',
            features: [
              'Stratégie contenu personnalisée',
              'Publications régulières premium',
              'Community management expert',
              'Analytics engagement détaillées',
              'Influence marketing inclus',
              'Crisis management 24/7'
            ]
          },
          emailMarketing: {
            title: 'Email Marketing Automation Premium',
            description: 'Campagnes email sophistiquées qui nurturent vos prospects vers la conversion. Marketing automation intelligent.',
            features: [
              'Templates design responsive',
              'Segmentation comportementale',
              'Automation workflows avancés',
              'A/B testing systematic',
              'Deliverability optimization',
              'Analytics ROI détaillées'
            ]
          },
          mobileAppIos: {
            title: 'Application iOS Native d\'Elite',
            description: 'App iOS native haut de gamme développée avec les dernières technologies Swift. Experience utilisateur exceptionnelle.',
            features: [
              'Développement Swift/SwiftUI',
              'App Store optimization inclus',
              'Push notifications intelligentes',
              'Analytics comportement utilisateur',
              'Design iOS guidelines respect',
              'Performance optimisation native'
            ],
            badge: '📱 iOS NATIVE'
          },
          mobileAppAndroid: {
            title: 'Application Android Native Premium',
            description: 'App Android native optimisée pour performance maximale. Material Design et UX exceptionnelle garantie.',
            features: [
              'Développement Kotlin moderne',
              'Google Play Store ready',
              'Material Design 3 premium',
              'Firebase integration complète',
              'Performance monitoring',
              'Multi-device optimization'
            ]
          },
          mobileAppHybrid: {
            title: 'Application Mobile Hybride Strategic',
            description: 'Solution cross-platform React Native qui maximise votre ROI. Performance native avec développement optimisé.',
            features: [
              'iOS + Android simultané',
              'React Native dernière version',
              'Code sharing intelligent',
              'Performance native garantie',
              'Maintenance simplifiée',
              'Time-to-market accéléré'
            ],
            badge: '🚀 SOLUTION POPULAIRE'
          },
          pwaApp: {
            title: 'Progressive Web App Révolutionnaire',
            description: 'App web progressive qui combine le meilleur du web et du mobile. Installation native, performance optimale.',
            features: [
              'Offline mode intelligent',
              'Push notifications web',
              'Installation home screen',
              'Performance app native',
              'SEO friendly intégré',
              'Maintenance économique'
            ]
          }
        },
        consulting: {
          digitalAudit: {
            title: 'Audit Digital Strategic 360°',
            description: 'Diagnostic exhaustif de votre écosystème digital avec roadmap détaillée. Vision claire de vos opportunités cachées.',
            features: [
              'Audit site web technique complet',
              'Analyse concurrentielle approfondie',
              'Recommandations prioritisées',
              'Roadmap digitale personnalisée',
              'ROI estimé pour chaque action',
              'Support implémentation inclus'
            ]
          },
          digitalStrategy: {
            title: 'Stratégie Digitale Transformation Premium',
            description: 'Plan stratégique sur-mesure pour propulser votre transformation digitale. Feuille de route vers l\'excellence digitale.',
            features: [
              'Analyse besoins business approfondie',
              'Stratégie digitale personnalisée',
              'Plan d\'action détaillé prioritisé',
              'KPIs mesurables définis',
              'Budget optimisé calculé',
              'Accompagnement implémentation'
            ],
            badge: '🎯 STRATÉGIQUE POPULAIRE'
          },
          techConsulting: {
            title: 'Conseil Technique Architecture Enterprise',
            description: 'Expertise technique de haut niveau pour vos projets complexes. Architecture scalable et future-proof garantie.',
            features: [
              'Architecture système optimale',
              'Choix technologies justifiés',
              'Scalabilité long terme garantie',
              'Sécurité niveau enterprise',
              'Performance maximale assurée',
              'Documentation technique complète'
            ]
          },
          formationDigital: {
            title: 'Formation Équipe Digital Excellence',
            description: 'Montée en compétences digitales de vos équipes avec méthodes pédagogiques éprouvées. ROI formation mesurable.',
            features: [
              'Programme formation personnalisé',
              'Supports pédagogiques premium',
              'Sessions pratiques intensives',
              'Suivi post-formation garanti',
              'Certification compétences',
              'Mesure progression objective'
            ]
          },
          automationWorkflow: {
            title: 'Automatisation Processus Business Strategic',
            description: 'Optimisation et automatisation de vos processus métier pour maximiser l\'efficacité. Gains productivité mesurables.',
            features: [
              'Analyse processus existants',
              'Identification opportunités automation',
              'Outils automation sur-mesure',
              'Intégrations systèmes natives',
              'Formation équipes incluse',
              'ROI automation calculé'
            ]
          },
          dataAnalytics: {
            title: 'Dashboard Analytics Intelligence Business',
            description: 'Tableau de bord intelligent avec métriques personnalisées pour piloter votre croissance data-driven.',
            features: [
              'KPIs business personnalisés',
              'Visualisations données intuitives',
              'Rapports automatiques programmés',
              'Intégrations multi-sources',
              'Prédictions trends incluses',
              'Formation utilisation complète'
            ]
          },
          accessibilityAudit: {
            title: 'Audit Accessibilité WCAG Premium',
            description: 'Conformité accessibilité complète pour une expérience inclusive. Audit WCAG 2.1 AA/AAA professionnel.',
            features: [
              'Audit WCAG 2.1 complet',
              'Tests utilisateurs handicapés',
              'Recommandations détaillées prioritisées',
              'Plan implémentation guidé',
              'Vérification conformité finale',
              'Certification accessibilité'
            ]
          },
          gdprCompliance: {
            title: 'Mise en Conformité RGPD Enterprise',
            description: 'Conformité RGPD complète avec documentation juridique. Protection données et conformité légale garanties.',
            features: [
              'Audit RGPD exhaustif',
              'Politique confidentialité sur-mesure',
              'Système cookies consent avancé',
              'Documentation juridique complète',
              'Formation équipes RGPD',
              'Suivi conformité continue'
            ]
          }
        },
        maintenance: {
          maintenanceBasic: {
            title: 'Maintenance Site Web Performance',
            description: 'Service maintenance essentiel pour assurer la sécurité et performance de votre site web. Tranquillité d\'esprit garantie.',
            features: [
              'Mises à jour sécurité automatiques',
              'Sauvegardes quotidiennes sécurisées',
              'Monitoring uptime 24/7',
              'Support email prioritaire',
              'Optimisations performance mensuelles',
              'Rapports maintenance détaillés'
            ]
          },
          maintenancePremium: {
            title: 'Maintenance Premium Support Elite 24/7',
            description: 'Support technique complet avec monitoring avancé et intervention immédiate. Service premium pour projets critiques.',
            features: [
              'Support technique 24/7/365',
              'Monitoring proactif avancé',
              'Optimisations performance continues',
              'Hotline prioritaire dédiée',
              'Intervention d\'urgence garantie',
              'SLA 99.9% uptime garanti'
            ],
            badge: '🛡️ SUPPORT PREMIUM'
          },
          hostingManaged: {
            title: 'Hébergement Web Managé Performance',
            description: 'Infrastructure hébergement haute performance avec support technique expert. Rapidité et fiabilité maximales.',
            features: [
              'Serveurs SSD ultra-rapides',
              'Certificat SSL premium inclus',
              'CDN global intégré',
              'Support technique expert',
              'Monitoring performance continu',
              'Backups automatiques quotidiens'
            ]
          },
          securityAudit: {
            title: 'Audit Sécurité Web Cybersecurity',
            description: 'Analyse sécurité exhaustive avec tests pénétration professionnels. Protection maximale contre cyberattaques.',
            features: [
              'Scan vulnérabilités approfondi',
              'Tests pénétration professionnels',
              'Rapport sécurité détaillé',
              'Recommandations correction prioritisées',
              'Vérification implémentation',
              'Suivi sécurité continu'
            ]
          },
          migrationWebsite: {
            title: 'Migration Site Web Sécurisée Expert',
            description: 'Migration professionnelle vers nouvelle plateforme avec garantie zéro perte de données. Transition fluide assurée.',
            features: [
              'Sauvegarde complète sécurisée',
              'Migration données intégrales',
              'Tests fonctionnels complets',
              'Support post-migration inclus',
              'Optimisation post-migration',
              'Garantie zéro downtime'
            ]
          },
          performanceOptimization: {
            title: 'Optimisation Performance Web Speed',
            description: 'Amélioration drastique de la vitesse et performance de votre site. Core Web Vitals optimisés garantis.',
            features: [
              'Audit performance Google PageSpeed',
              'Optimisation code front/back-end',
              'Configuration CDN optimale',
              'Monitoring performance continu',
              'Core Web Vitals parfaits',
              'Amélioration vitesse +70% garantie'
            ]
          }
        },
        specialized: {
          apiDevelopment: {
            title: 'Développement API REST Enterprise',
            description: 'API robuste et scalable pour connecter vos applications et systèmes. Architecture microservices moderne.',
            features: [
              'API REST/GraphQL professionnelle',
              'Documentation interactive complète',
              'Tests automatisés intégrés',
              'Authentification sécurisée',
              'Monitoring performance API',
              'Versioning et backward compatibility'
            ]
          },
          chatbotAi: {
            title: 'Chatbot IA Conversationnel Premium',
            description: 'Assistant virtuel intelligent qui transforme votre service client. IA conversationnelle avancée sur-mesure.',
            features: [
              'IA conversationnelle GPT intégrée',
              'Intégration site web native',
              'Formation données métier',
              'Analytics conversations détaillées',
              'Apprentissage continu automatique',
              'Support multilingue inclus'
            ],
            badge: '🤖 INTELLIGENCE ARTIFICIELLE'
          }
        }
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
        description: 'Votre partenaire digital de confiance en Israël',
        experience: ' 5+ Années d\'Excellence Digitale',
        projects: ' 150+ Projets à Succès Livrés'
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
      title: 'Solutions Business Premium ',
      subtitle: 'Des packages clés-en-main qui transforment votre vision en empire digital rentable',
      popular: ' BESTSELLER',
      mostPopular: 'Solution n°1 des entrepreneurs',
      getStarted: 'Démarrer Mon Succès',
      contactUs: 'Consultation Stratégique',
      features: 'Avantages Premium Inclus',
      whatYouGet: 'Votre Arsenal Digital Complet',
      perfect: 'Idéal pour dominer',
      startingAt: 'Investissement dès',
      onQuote: 'Tarif sur-mesure',
      otherServices: 'expertises bonus',
      added: ' Intégré',
      choose: 'Choisir l\'Excellence',
      addedToCart: ' Ajouté avec succès',
      choosePack: 'Adopter cette Solution',
      save: ' ÉCONOMIE EXCEPTIONNELLE',
      servicesIncluded: 'Arsenal d\'Expertises Inclus',
      consultation: ' Audit Stratégique Offert',
      delivery: ' Livraison Express Garantie',
      guarantee: ' Satisfaction 100% Garantie',
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
        title: 'Pourquoi les Leaders Choisissent Web Yarden ? ',
        delivery: {
          title: ' Exécution Fulgurante',
          description: 'Lancement sous 48h, livrée clés-en-main en 2-4 semaines. Votre succès ne peut pas attendre.'
        },
        expertise: {
          title: ' Expertise Marché Israélien',
          description: 'Maîtrise totale des spécificités locales, réglementations et habitudes de consommation. Votre avantage concurrentiel.'
        },
        guarantee: {
          title: ' Garantie ROI & Performance',
          description: 'Résultats mesurables garantis ou remboursement intégral. Votre investissement est sécurisé.'
        }
      },
      cta: {
        title: 'Besoin d\'une Solution Sur-Mesure ? ',
        description: 'Nos experts analysent vos défis et conçoivent la stratégie digitale parfaite pour dominer votre marché',
        consultation: 'Audit Stratégique Gratuit',
        chat: 'Expert En Ligne Maintenant'
      }
    },
    dashboard: {
      title: 'Centre de Commande Premium ',
      welcome: 'Bienvenue dans votre cockpit de réussite digitale - Pilotez votre empire numérique',
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
        content: ' Web Yarden a démultiplié notre croissance ! Grâce à leur stratégie digitale sur-mesure, nous avons décroché +250% de leads qualifiés en 4 mois. Une expertise technique redoutable et une compréhension parfaite du marché israélien.'
      },
      testimonial2: {
        name: 'David Levi',
        company: 'E-Commerce Plus',
        role: 'Directeur Général',
        content: ' ROI spectaculaire ! En 6 mois, Web Yarden a transformé notre boutique en ligne ordinaire en machine à vendre : +300% de CA, taux de conversion doublé, et une expérience client qui nous différencie totalement de la concurrence.'
      },
      testimonial3: {
        name: 'Rachel Goldberg',
        company: 'Startup Nation Hub',
        role: 'VP Marketing & Growth',
        content: ' Expansion internationale réussie ! Leur approche multilingue nous a ouvert les marchés francophone, anglophone et hébraïque. Nous avons conquis 3 nouveaux pays et doublé notre base client en 8 mois.'
      },
      testimonial4: {
        name: 'Michael Rosenberg',
        company: 'FinTech Innovations',
        role: 'CTO & Co-fondateur',
        content: ' Code d\'exception et livraison éclair ! Architecture robuste, sécurité bancaire, performance optimale. Web Yarden maîtrise les technologies de pointe. Notre plateforme gère désormais 10M+ de transactions sans faille.'
      }
    },
    projects: {
      title: 'Galerie de Chefs-d\'Œuvre Digitaux ',
      subtitle: 'Explorez nos créations d\'exception qui ont généré des millions d\'euros de revenus et révolutionné des industries entières',
      filterTitle: 'Navigation par Excellence Technique',
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
      budget: 'Investissement Stratégique',
      duration: 'Délai d\'Excellence',
      team: 'Squad d\'Experts',
      rating: 'Score de Perfection',
      challenge: 'Défi Technique Relevé',
      solution: 'Solution Révolutionnaire',
      results: 'Impact Mesurable & ROI',
      testimonial: 'Validation Client Premium',
      featuredProject: ' Projet Phare',
      performanceTable: {
        title: 'Tableau de Performance des Projets',
        subtitle: 'Analyse détaillée de nos réalisations'
      },
      impact: {
        title: 'Impact Mesurable & Résultats Concrets ',
        subtitle: 'Chaque projet génère une croissance exponentielle pour nos clients',
        projectsDelivered: 'Chefs-d\'Œuvre Livrés',
        clientsSatisfied: 'Clients Conquis & Fidélisés',
        technologiesMastered: 'Technologies de Pointe Maîtrisées',
        yearsExperience: 'Années d\'Excellence Reconnue'
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
      title: 'Mentions Légales Premium',
      subtitle: 'Transparence totale et engagement de qualité - Votre confiance est notre priorité absolue',
      lastUpdate: 'Dernière mise à jour',
      company: {
        title: 'Informations sur l\'entreprise',
        name: 'Dénomination sociale',
        form: 'Forme juridique',
        address: 'Siège social',
        email: 'Email',
        phone: 'Téléphone',
        director: 'Directeur de la publication',
        companyName: 'Web Yarden - Excellence Digitale',
        companyForm: 'Société à responsabilité limitée - Innovation Tech',
        companyAddress: 'Tel Aviv, Israël - Hub Technologique International',
        companyEmail: 'contact@webyarden.co.il',
        companyPhone: '+972 12 345 6789'
      },
      hosting: {
        title: 'Infrastructure d\'Hébergement Premium',
        description: 'Notre plateforme bénéficie d\'une infrastructure mondiale de classe entreprise hébergée par :',
        provider: 'Vercel Inc. - Leader Mondial Cloud',
        providerAddress: '340 S Lemon Ave #4133\nWalnut, CA 91789\nÉtats-Unis\nInfrastructure Edge Computing Mondiale'
      },
      intellectual: {
        title: 'Propriété Intellectuelle & Innovation Protégée',
        content1: 'Notre écosystème digital premium relève de la protection renforcée par la législation française et internationale sur le droit d\'auteur et la propriété intellectuelle de pointe.',
        content2: 'Tous nos actifs créatifs et technologiques sont protégés : codes sources, designs exclusifs, méthodologies brevetées, contenus multimédias et innovations graphiques.'
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
      subtitle: 'Une équipe d\'experts dédiée qui garantit votre réussite digitale absolue et votre tranquillité d\'esprit totale',
      searchPlaceholder: 'Trouvez votre solution instantanément...',
      stats: {
        support247: 'Support Expert Disponible',
        responseTime: 'Réponse Garantie',
        satisfaction: 'Taux de Satisfaction',
        articles: 'Solutions & Guides'
      },
      quickActions: {
        title: 'Accès VIP à notre Elite d\'Experts 🚀',
        chat: {
          title: '💬 Chat Expert Instantané',
          description: 'Connexion directe avec nos as du digital - réponse garantie en < 30 sec'
        },
        call: {
          title: '📞 Consultation Stratégique VIP',
          description: 'Nos maîtres disponibles Lun-Ven 9h-18h (GMT+2) pour votre succès'
        },
        email: {
          title: '✉️ Support Email Blindé',
          description: 'Analyse experte complète livrée sous 2h chrono maximum'
        },
        urgent: {
          title: '🆘 Intervention Commando Critique',
          description: 'Hotline rouge prioritaire - sauvegarde immédiate de votre business'
        },
        available: '✅ Expert En Ligne'
      },
      categories: {
        title: 'Arsenal d\'Expertise à Votre Service 🎯',
        technical: {
          title: '⚙️ Support Technique de Pointe',
          description: 'Optimisation maximale, résolution éclair, maintenance ultra-performante'
        },
        billing: {
          title: '💳 Gestion Financière Premium',
          description: 'Facturation cristalline, paiements blindés, évolutions stratégiques'
        },
        features: {
          title: '🚀 Maîtrise Fonctionnelle Absolue',
          description: 'Formation sur-mesure qui démultiplie votre ROI et votre efficacité'
        },
        account: {
          title: '🔐 Administration Sécurisée Pro',
          description: 'Contrôle total, sécurité militaire, configurations expertes'
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
      title: '🚀 Premium Digital Excellence',
      subtitle: 'Transform your vision into digital success with our cutting-edge expertise. +150 projects delivered, 300% ROI guaranteed',
      hero: {
        title: 'Your Strategic Digital Partner',
        subtitle: 'Custom solutions that drive growth and maximize revenue. Proven expertise, guaranteed results.',
        cta: 'Start My Project'
      },
      viewAll: 'Explore All Our Expertise',
      requestQuote: 'Get My Expert Quote Free',
      moreInfo: 'Discover Complete Details',
      features: 'Premium Benefits Included',
      services: {
        title: 'Premium Digital Solutions Empire ',
        subtitle: 'Transform your business into an unstoppable market leader with our revolutionary technologies and exclusive premium expertise',
        cta: 'Launch Your Digital Domination',
        categories: {
          webDevelopment: 'Premium Web Development',
          design: 'Elite Design & UX',
          marketing: 'Strategic Digital Marketing',
          ecommerce: 'E-commerce Empire Solutions',
          mobile: 'Premium Mobile Applications',
          consulting: 'Strategic Intelligence Consulting',
          maintenance: 'VIP Maintenance & Support',
          seo: 'SEO Domination & Growth'
        }
      },
      search: 'Find your ideal digital solution...',
      all: 'All Our Expertise',
      noResults: 'No standard solution? We create your custom solution!',
      startingFrom: 'Starting from',
      deliveryTime: 'Guaranteed delivery in',
      stats: {
        title: ' Digital Excellence in Numbers',
        subtitle: 'Outstanding performance that demonstrates our leadership in the Israeli market',
        services: 'Premium Solutions Available',
        projects: 'Projects Delivered Successfully',
        satisfaction: 'Satisfied & Loyal Clients',
        support: 'Expert Support 24/7/365'
      },
      cta: {
        title: ' Ready to Revolutionize Your Digital Business?',
        description: 'Join +150 companies who trust us. Free strategic consultation, personalized quote within 24h.',
        getQuote: 'Get My Free Strategy',
        contact: 'Talk to an Expert',
        benefits: [
          ' Complete audit offered',
          ' Personalized strategy',
          ' 300% ROI guaranteed',
          ' Premium support included'
        ]
      },
      catalog: {
        webDevelopment: {
          websiteVitrine: {
            title: 'Premium Excellence Showcase Website',
            description: 'Sophisticated digital platform that transforms visitors into loyal customers. Ultra-modern responsive architecture with guaranteed optimal performance.',
            badge: ' POPULAR SOLUTION',
            features: [
              'Premium high-end responsive design',
              'Advanced integrated technical SEO',
              'Premium hosting 1 year included',
              'VIP technical support 24/7',
              'Advanced integrated analytics',
              'Guaranteed conversion optimization'
            ]
          },
          websiteCorporate: {
            title: 'Elite Corporate Ecosystem',
            description: 'Sophisticated corporate digital architecture with enterprise features. Solution that reflects your leadership and strengthens market credibility.',
            features: [
              'Premium multi-page architecture',
              'Custom enterprise CMS',
              'Advanced intelligent forms',
              'Professional analytics dashboard',
              'Native API integrations',
              'Reinforced enterprise security'
            ]
          },
          landingPage: {
            title: 'Maximum Conversion Landing Page',
            description: 'High-performance landing page designed to maximize your conversion rate. Applied behavioral psychology for exceptional results.',
            features: [
              'Conversion psychology design',
              'Professional integrated A/B testing', 
              'Automated CRM integration',
              'Behavioral analytics',
              'Perfect mobile optimization',
              'Intelligent forms'
            ]
          },
          webAppCustom: {
            title: 'Strategic Custom Web Application',
            description: 'Enterprise application solution developed according to your exact specifications. Guaranteed scalability and future-proof architecture.',
            badge: '🚀 PREMIUM SOLUTION',
            features: [
              'Enterprise scalable architecture',
              'High-performance database',
              'Native REST/GraphQL APIs',
              'Sophisticated admin dashboard',
              'Banking-level security',
              'Real-time monitoring'
            ]
          },
          portfolioWebsite: {
            title: 'Exceptional Creative Portfolio',
            description: 'Premium digital showcase that highlights your creative talent. Immersive user experience that captivates and converts.',
            features: [
              'Dynamic interactive gallery',
              'Sophisticated CSS animations',
              'Integrated creative blog',
              'Premium contact form',
              'Optimized creative SEO',
              'Ultra-fast loading'
            ]
          },
          blogWebsite: {
            title: 'Strategic Premium Blog Platform',
            description: 'Professional content marketing ecosystem optimized for authority and engagement. Guaranteed organic growth engine.',
            features: [
              'Enterprise WordPress CMS',
              'Advanced content marketing SEO',
              'Integrated newsletter automation',
              'Native social media integration',
              'Advanced content analytics',
              'Optimized monetization'
            ]
          }
        },
        seo: {
          seoAudit: {
            title: 'Complete Strategic SEO Intelligence Audit Empire',
            description: 'Exhaustive 360° analysis that reveals all your SEO domination opportunities. Premium diagnostic that guarantees your ascension to Google first page.',
            badge: ' EXPERT SOLUTION',
            features: [
              'Complete enterprise technical audit',
              'Strategic marketing intelligence competition analysis',
              'Advanced strategic keyword research',
              'Guaranteed ROI action plan',
              'Quick wins opportunities identified',
              'Industry benchmark analysis included'
            ]
          },
          seoOptimization: {
            title: 'Monthly Premium SEO Domination Empire',
            description: 'Continuous acceleration of your Google positioning with guaranteed ROI strategy. Rise inexorably towards leadership in your sector.',
            badge: ' POPULAR SOLUTION',
            features: [
              'Enterprise technical optimization',
              'High-value expert content creation',
              'Premium authority link building',
              'Detailed performance reporting',
              'Continuous competitive monitoring',
              'VIP dedicated expert support'
            ]
          },
          localSeo: {
            title: 'Local SEO Market Domination',
            description: 'Complete local SEO strategy that positions your business as the #1 choice in your geographic area. Guaranteed local visibility and customer acquisition.',
            features: [
              'Google My Business optimization',
              'Local citations management',
              'Review management system',
              'Local keyword targeting',
              'Geographic content strategy',
              'Local competitor analysis'
            ]
          },
          technicalSeo: {
            title: 'Advanced Technical SEO Engineering',
            description: 'Deep technical optimization that transforms your site into a search engine magnet. Advanced engineering for maximum crawlability and indexation.',
            badge: ' PREMIUM SOLUTION',
            features: [
              'Complete technical site audit',
              'Core Web Vitals optimization',
              'Advanced schema markup',
              'Site architecture optimization',
              'Mobile-first indexing setup',
              'International SEO configuration'
            ]
          }
        },
        ecommerce: {
          ecommerceBasic: {
            title: 'E-commerce Empire Foundation',
            description: 'High-conversion e-commerce platform that transforms your visitors into recurring buyers. Sophisticated sales architecture with integrated banking security.',
            badge: ' POPULAR SOLUTION',
            features: [
              'Premium optimized product catalog',
              'Intelligent anti-abandonment cart',
              'Ultra-secure multi-method payment',
              'Automated order CRM',
              'Integrated e-commerce SEO',
              'Real-time sales analytics'
            ]
          },
          ecommercePremium: {
            title: 'Premium Multi-Vendor Marketplace Empire',
            description: 'Enterprise e-commerce ecosystem with sophisticated multi-vendor management. Solution that generates recurring revenue and scales infinitely.',
            badge: '🏢 ENTERPRISE SOLUTION',
            features: [
              'Advanced multi-vendor system',
              'Intelligent commission engine',
              'Premium marketplace analytics',
              'Native mobile application',
              'Complete marketplace API',
              '24/7 vendor support ecosystem'
            ]
          },
          ecommerceMobile: {
            title: 'Native Mobile E-commerce Revolution',
            description: 'High-performance native mobile app for your store. Optimal mobile shopping experience that builds customer loyalty and maximizes conversions.',
            badge: '📱 MOBILE SOLUTION',
            features: [
              'Native iOS & Android apps',
              'Intelligent push notifications',
              'Secure mobile payments',
              'Advanced geolocation features',
              'Integrated offline mode',
              'Complete mobile analytics'
            ]
          },
          marketplaceIntegration: {
            title: 'Strategic Marketplace Integration Empire',
            description: 'Native connection with Amazon, eBay, Etsy to multiply your sales channels. Guaranteed centralized management with automated synchronization.',
            badge: '🌐 INTEGRATION SOLUTION',
            features: [
              'Automatic product synchronization',
              'Centralized stock management',
              'Intelligent dynamic pricing',
              'Multi-channel reporting',
              'Listings optimization',
              'Expert marketplace support'
            ]
          },
          subscriptionEcommerce: {
            title: 'Recurring Subscription E-commerce Empire',
            description: 'Subscription business model that generates predictable revenue streams. Maximized customer retention with intelligent churn prediction.',
            badge: '💎 SUBSCRIPTION SOLUTION',
            features: [
              'Flexible recurring subscriptions',
              'Automated billing management',
              'Self-service customer portal',
              'Advanced subscription analytics',
              'Integrated churn prediction',
              'Intelligent upgrade/downgrade'
            ]
          }
        },
        marketing: {
          googleAds: {
            title: 'Google Ads Revenue Accelerator Campaign',
            description: 'Ultra-performing Google advertising campaigns that generate qualified leads 24/7. Sophisticated paid architecture with guaranteed ROI and continuous automated optimization.',
            badge: '🎯 ADS SOLUTION',
            features: [
              'Premium expert campaign setup',
              'Marketing intelligence keyword research',
              'Conversion optimized landing pages',
              'Guaranteed automated ROI optimization',
              'Advanced multi-attribution tracking',
              'Intelligent budget management'
            ]
          },
          emailMarketing: {
            title: 'Premium Email Marketing Automation Empire',
            description: 'Sophisticated email marketing campaigns that convert prospects into loyal customers. Advanced automation workflows with guaranteed engagement and ROI optimization.',
            badge: '📧 AUTOMATION SOLUTION',
            features: [
              'Premium responsive design templates',
              'Advanced behavioral segmentation',
              'Sophisticated automation workflows',
              'Systematic A/B testing',
              'Deliverability optimization',
              'Detailed ROI analytics'
            ]
          },
          socialMedia: {
            title: 'Social Media Domination Strategy',
            description: 'Complete social media presence that builds brand authority and drives conversions. Premium content strategy with influencer-level engagement guaranteed.',
            badge: '📱 SOCIAL SOLUTION',
            features: [
              'Premium content strategy creation',
              'Multi-platform management',
              'Influencer collaboration network',
              'Advanced engagement analytics',
              'Brand reputation monitoring',
              'Conversion-focused campaigns'
            ]
          },
          contentMarketing: {
            title: 'Premium Content Marketing Empire',
            description: 'Strategic content creation that positions your brand as industry leader. Expert content that drives organic traffic and converts readers into customers.',
            badge: '✍️ CONTENT SOLUTION',
            features: [
              'Expert SEO-optimized content',
              'Strategic editorial calendar',
              'Premium visual content creation',
              'Advanced content analytics',
              'Multi-channel distribution',
              'Thought leadership positioning'
            ]
          }
        },
        consulting: {
          strategicConsulting: {
            title: 'Strategic Digital Transformation Consulting Empire',
            description: 'Expert consulting that revolutionizes your business model and accelerates your digital growth. Premium strategic analysis with guaranteed ROI and competitive advantage.',
            badge: '🎯 STRATEGIC SOLUTION',
            features: [
              'Complete digital maturity audit',
              'Customized transformation roadmap',
              'Technology stack optimization',
              'Change management support',
              'Performance KPI tracking',
              'Executive coaching included'
            ]
          },
          projectManagement: {
            title: 'Premium Agile Project Management',
            description: 'Expert project management that ensures on-time, on-budget delivery with exceptional quality. Proven methodologies that eliminate risks and maximize success.',
            badge: '⚡ AGILE SOLUTION',
            features: [
              'Certified Agile/Scrum methodology',
              'Daily progress tracking',
              'Risk mitigation strategies',
              'Stakeholder communication',
              'Quality assurance protocols',
              'Post-launch optimization'
            ]
          },
          technicalAudit: {
            title: 'Complete Technical Infrastructure Audit',
            description: 'Comprehensive technical analysis that identifies optimization opportunities and security vulnerabilities. Expert assessment with actionable improvement recommendations.',
            badge: '🔍 AUDIT SOLUTION',
            features: [
              'Complete code quality analysis',
              'Security vulnerability assessment',
              'Performance optimization review',
              'Scalability evaluation',
              'Best practices recommendations',
              'Priority action plan delivery'
            ]
          },
          businessIntelligence: {
            title: 'Business Intelligence & Analytics Empire',
            description: 'Transform your data into strategic competitive advantage. Advanced analytics platform that reveals hidden opportunities and predicts market trends.',
            badge: '📊 INTELLIGENCE SOLUTION',
            features: [
              'Custom dashboard development',
              'Predictive analytics modeling',
              'Real-time KPI monitoring',
              'Automated reporting system',
              'Data visualization expertise',
              'Strategic insights delivery'
            ]
          }
        },
        maintenance: {
          websiteMaintenance: {
            title: 'Premium Website Maintenance Empire',
            description: 'Complete website maintenance that guarantees optimal performance, security, and availability. VIP support that keeps your digital presence flawless 24/7.',
            badge: '🛡️ MAINTENANCE SOLUTION',
            features: [
              '24/7 proactive monitoring',
              'Automatic security updates',
              'Performance optimization',
              'Regular backup management',
              'Priority technical support',
              'Monthly performance reports'
            ]
          },
          hostingPremium: {
            title: 'Enterprise Premium Hosting Empire',
            description: 'High-performance hosting infrastructure that guarantees maximum uptime and lightning-fast loading speeds. Enterprise-grade security and scalability.',
            badge: '🚀 HOSTING SOLUTION',
            features: [
              '99.9% uptime guarantee',
              'CDN global acceleration',
              'Advanced DDoS protection',
              'Automatic scaling capability',
              'Daily backup management',
              'Expert technical support 24/7'
            ]
          },
          securityMonitoring: {
            title: 'Advanced Security Monitoring Empire',
            description: 'Comprehensive security monitoring that protects your digital assets from cyber threats. Real-time threat detection with immediate response protocols.',
            badge: '🔒 SECURITY SOLUTION',
            features: [
              'Real-time threat detection',
              'Malware scanning & removal',
              'Firewall configuration',
              'SSL certificate management',
              'Security incident response',
              'Compliance reporting'
            ]
          },
          performanceOptimization: {
            title: 'Website Performance Optimization Empire',
            description: 'Complete performance optimization that dramatically improves loading speeds and user experience. Technical excellence that converts visitors into customers.',
            badge: '⚡ PERFORMANCE SOLUTION',
            features: [
              'Core Web Vitals optimization',
              'Image compression & optimization',
              'Code minification & bundling',
              'Database query optimization',
              'Caching strategy implementation',
              'Mobile performance enhancement'
            ]
          }
        },
        mobile: {
          mobileAppIos: {
            title: 'Premium Native iOS Application Empire',
            description: 'Sophisticated native iOS app that generates exceptional user engagement and recurring revenue. Premium mobile architecture with revolutionary UX to dominate the App Store.',
            badge: '📱 NATIVE PREMIUM SOLUTION',
            features: [
              'Premium Swift/SwiftUI architecture',
              'Complete guaranteed App Store optimization',
              'Marketing intelligence push notifications',
              'Sophisticated behavioral analytics',
              'Optimized integrated monetization',
              'Expert Apple guidelines support'
            ]
          },
          mobileAppAndroid: {
            title: 'Premium Native Android Empire Application',
            description: 'High-performance native Android app that conquers the Google Play Store. Sophisticated mobile architecture with maximum user engagement and guaranteed optimized monetization.',
            badge: '🚀 PREMIUM SOLUTION',
            features: [
              'Enterprise Kotlin/Java architecture',
              'Complete Google Play ASO optimization',
              'Premium custom Material Design',
              'Sophisticated Firebase integration',
              'Advanced performance analytics',
              'Expert Google guidelines support'
            ]
          },
          mobileAppHybrid: {
            title: 'Cross-Platform Hybrid Empire Application',
            description: 'Intelligent cross-platform solution that maximizes your mobile presence with single development. Premium React Native architecture combining economic efficiency and guaranteed native performance.',
            badge: '⭐ POPULAR SOLUTION',
            features: [
              'Simultaneous iOS + Android deployment',
              'Premium React Native architecture',
              'Optimized shared code base',
              'Guaranteed native performance',
              'Centralized simplified maintenance',
              'Maximized development ROI'
            ]
          },
          pwaApp: {
            title: 'Revolutionary Premium Progressive Web App',
            description: 'Revolutionary mobile experience that combines web power and native fluidity. Sophisticated PWA solution that maximizes user engagement without download, accessible everywhere instantly.',
            badge: '🚀 PREMIUM SOLUTION',
            features: [
              'Intelligent sophisticated offline mode',
              'Premium engagement push notifications',
              'Seamless one-click installation',
              'Guaranteed optimized native performance',
              'Integrated web app SEO',
              'Included behavioral analytics'
            ]
          }
        },
        specialized: {
          accessibilityOptimization: {
            title: 'Premium Digital Accessibility Compliance',
            description: 'Complete accessibility optimization that makes your site inclusive and legally compliant. Expert solution guaranteeing WCAG standards and optimal user experience for all.',
            badge: '♿ INCLUSIVE SOLUTION',
            features: [
              'Complete WCAG 2.1 AA compliance audit',
              'Accessibility code optimization',
              'Screen reader compatibility',
              'Advanced keyboard navigation',
              'Legal compliance certification',
              'Inclusive design consulting'
            ]
          },
          performanceOptimization: {
            title: 'Extreme Performance Acceleration',
            description: 'Technical optimization that transforms your site into a speed machine. Advanced engineering that guarantees exceptional loading times and optimal user experience.',
            features: [
              'Complete performance audit',
              'Advanced code optimization',
              'CDN and caching configuration',
              'Image and asset optimization',
              'Database performance tuning',
              'Core Web Vitals optimization'
            ]
          },
          securityAudit: {
            title: 'Complete Cybersecurity Audit',
            description: 'Exhaustive security audit that protects your digital assets. Expert analysis with penetration testing and guaranteed vulnerability resolution.',
            badge: '🔒 SECURITY SOLUTION',
            features: [
              'Complete penetration testing',
              'Vulnerability analysis',
              'Security recommendations',
              'Compliance audit',
              'Security patches implementation',
              'Continuous monitoring setup'
            ]
          },
          seoAdvanced: {
            title: 'Complete Advanced SEO Ecosystem',
            description: 'Comprehensive SEO strategy that establishes your digital authority. Multi-channel approach with guaranteed top rankings.',
            badge: '🔥 EXPERT SOLUTION',
            features: [
              'Complete technical + content SEO',
              'Enterprise link building strategy',
              'Local SEO domination',
              'Advanced schema markup',
              'Competitive intelligence monitoring',
              'Guaranteed rankings improvement'
            ]
          },
          socialMediaManagement: {
            title: 'Strategic Social Media Empire Management',
            description: 'Complete social media management that builds community and drives sales. Data-driven content strategy with guaranteed engagement.',
            badge: '⭐ POPULAR SOLUTION',
            features: [
              'Multi-platform content strategy',
              'Premium visual content creation',
              'Community management 24/7',
              'Influencer partnerships coordination',
              'Advanced social analytics',
              'Guaranteed follower growth'
            ]
          },
          emailMarketing: {
            title: 'Premium Email Marketing Automation',
            description: 'Sophisticated email marketing campaigns that nurture and convert. Behavioral automation with guaranteed ROI.',
            features: [
              'Advanced behavioral segmentation',
              'Automated drip campaigns',
              'A/B testing optimization',
              'Premium email templates',
              'Advanced analytics tracking',
              'CRM integration included'
            ]
          }
        },
        design: {
          logoDesign: {
            title: 'Premium Impact Logo Creation',
            description: 'Memorable visual identity that embodies your brand essence. Psychologically studied design to maximize recognition.',
            features: [
              '5 premium creative concepts',
              'Guaranteed unlimited revisions',
              'High-definition vector files',
              'Professional usage guide',
              'Multiple variations included',
              'Complete intellectual property'
            ]
          },
          brandIdentity: {
            title: 'Complete Elite Brand Identity',
            description: 'Cohesive visual ecosystem that positions your company as market leader. Ultra-complete premium brand guidelines.',
            features: [
              'Logo + complete variations',
              'Psychological color palette',
              'Exclusive brand typography',
              'Detailed usage guidelines',
              'Premium business templates',
              'Competitive audit included'
            ],
            badge: '⭐ POPULAR CHOICE'
          },
          uiUxDesign: {
            title: 'Strategic Exceptional UI/UX Design',
            description: 'Revolutionary user interface that transforms customer experience. Applied design thinking for perfect usability.',
            features: [
              'In-depth user research',
              'High-fidelity wireframes',
              'Advanced interactive prototypes',
              'Complete design system',
              'User testing included',
              'Guaranteed conversion optimization'
            ]
          },
          printDesign: {
            title: 'Premium Communication Materials',
            description: 'High-end physical communication materials that strengthen your offline presence. Guaranteed visual impact.',
            features: [
              'Premium business cards',
              'Marketing impact flyers',
              'Luxury corporate brochures',
              'Optimized print-ready files',
              'Expert printing advice',
              'Premium paper selection'
            ]
          },
          packagingDesign: {
            title: 'Revolutionary Packaging Design',
            description: 'Packaging that sells and builds loyalty at first sight. Applied packaging psychology to maximize impact.',
            features: [
              'Differentiating creative design',
              'Photorealistic 3D mockups',
              'Optimized production files',
              'Specialized printing advice',
              'Focus group testing included',
              'Seasonal variations'
            ]
          }
        }
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
        description: 'Your trusted digital partner in Israel',
        experience: '🚀 5+ Years of Digital Excellence',
        projects: '🏆 150+ Successful Projects Delivered'
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
      title: 'Premium Business Solutions 💎',
      subtitle: 'Turn-key packages that transform your vision into a profitable digital empire',
      popular: '🔥 BESTSELLER',
      mostPopular: 'Entrepreneurs\' #1 Choice',
      getStarted: 'Launch My Success',
      contactUs: 'Strategic Consultation',
      features: 'Premium Advantages Included',
      whatYouGet: 'Your Complete Digital Arsenal',
      perfect: 'Perfect to dominate your market',
      startingAt: 'Investment starting at',
      onQuote: 'Custom pricing',
      otherServices: 'bonus expertise services',
      added: '✅ Integrated',
      choose: 'Choose Excellence',
      addedToCart: '🛒 Successfully added',
      choosePack: 'Adopt this Solution',
      save: '💰 EXCEPTIONAL SAVINGS',
      servicesIncluded: 'Expertise Arsenal Included',
      consultation: '🎯 Strategic Audit Offered',
      delivery: '⚡ Express Delivery Guaranteed',
      guarantee: '🛡️ 100% Satisfaction Guaranteed',
      pricing: {
        oneTime: 'One-time investment'
      },
      comparison: {
        title: 'Premium Comparison Matrix',
        button: 'Compare Solutions',
        features: {
          title: 'Expertise & Advantages',
          logo: 'Premium Visual Identity',
          responsive: 'High-Performance Responsive Design',
          seo: 'Advanced SEO & Ranking',
          social: 'Social Media Strategy',
          ecommerce: 'Conversion-Optimized E-commerce',
          mobile: 'Native Mobile Application',
          support: 'Premium 24/7 Support',
          training: 'Training & Coaching Included'
        }
      },
      whyChoose: {
        title: 'Why Market Leaders Choose Web Yarden? 🏆',
        delivery: {
          title: '⚡ Lightning Execution',
          description: 'Launch within 48h, delivered turn-key in 2-4 weeks. Your success cannot wait.'
        },
        expertise: {
          title: '🎯 Israeli Market Expertise',
          description: 'Complete mastery of local specificities, regulations, and consumer habits. Your competitive advantage.'
        },
        guarantee: {
          title: '🛡️ ROI & Performance Guarantee',
          description: 'Guaranteed measurable results or full refund. Your investment is secured.'
        }
      },
      cta: {
        title: 'Need a Custom Solution? 🎯',
        description: 'Our experts analyze your challenges and design the perfect digital strategy to dominate your market',
        consultation: 'Free Strategic Audit',
        chat: 'Expert Online Now'
      }
    },
    dashboard: {
      title: 'Premium Command Center 🚀',
      welcome: 'Welcome to your digital success cockpit - Pilot your digital empire',
      stats: {
        projects: 'Gestion des Projets Stratégiques',
        messages: 'Messages',
        quotes: 'Devis en attente'
      },
      tabs: {
        projects: 'Gestion des Projets Stratégiques',
        clients: 'Portefeuille Clients Premium',
        analytics: 'Intelligence Analytics Pro'
      },
      comingSoon: 'Fonctionnalités de pointe en développement pour maximiser votre performance',
      recentProjects: 'Projets récents',
      notifications: 'Notifications',
      cart: 'Panier actuel'
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
      title: 'Digital Masterpieces Gallery 🏆',
      subtitle: 'Explore our exceptional creations that have generated millions in revenue and revolutionized entire industries',
      filterTitle: 'Navigation by Technical Excellence',
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
      title: 'Premium Legal Notice',
      subtitle: 'Complete transparency and quality commitment - Your trust is our absolute priority',
      lastUpdate: 'Last updated',
      company: {
        title: 'Company Information',
        name: 'Company name',
        form: 'Legal form',
        address: 'Registered office',
        email: 'Email',
        phone: 'Phone',
        director: 'Publication director',
        companyName: 'Web Yarden - Digital Excellence',
        companyForm: 'Limited Liability Company - Tech Innovation',
        companyAddress: 'Tel Aviv, Israel - International Tech Hub',
        companyEmail: 'contact@webyarden.co.il',
        companyPhone: '+972 12 345 6789'
      },
      hosting: {
        title: 'Premium Hosting Infrastructure',
        description: 'Our platform benefits from world-class enterprise infrastructure hosted by:',
        provider: 'Vercel Inc. - Global Cloud Leader',
        providerAddress: '340 S Lemon Ave #4133\nWalnut, CA 91789\nUnited States\nGlobal Edge Computing Infrastructure'
      },
      intellectual: {
        title: 'Intellectual Property & Protected Innovation',
        content1: 'Our premium digital ecosystem is subject to enhanced protection under French and international legislation on copyright and cutting-edge intellectual property.',
        content2: 'All our creative and technological assets are protected: source codes, exclusive designs, patented methodologies, multimedia content and graphic innovations.'
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
      },
      catalog: {
        webDevelopment: {
          websiteVitrine: {
            title: 'אתר ויטרינה פרמיום מהשורה הראשונה',
            description: 'פלטפורמה דיגיטלית מתוחכמת שהופכת מבקרים ללקוחות נאמנים. ארכיטקטורה רספונסיבית אולטרה-מודרנית עם ביצועים מיטביים מובטחים.',
            features: [
              'עיצוב רספונסיבי ברמה גבוהה',
              'SEO טכני מתקדם משולב',
              'אירוח פרמיום שנה כלולה',
              'תמיכה טכנית VIP 24/7',
              'אנליטיקס מתקדמת משולבת',
              'אופטימיזציה להמרות מובטחת'
            ],
            badge: '⭐ פתרון פופולרי'
          },
          websiteCorporate: {
            title: 'מערכת אקולוגיה קורפורטיבית אליטה',
            description: 'ארכיטקטורה דיגיטלית קורפורטיבית מתוחכמת עם פונקציונליות ארגונית. פתרון המשקף את המנהיגות שלכם ומחזק את האמינות בשוק.',
            features: [
              'ארכיטקטורה רב-עמודים פרמיום',
              'CMS ארגוני מותאם אישית',
              'טפסים חכמים מתקדמים',
              'דשבורד אנליטיקס מקצועי',
              'אינטגרציות API נטיביות',
              'אבטחה ארגונית מחוזקת'
            ]
          },
          landingPage: {
            title: 'דף נחיתה המרות מקסימליות',
            description: 'דף נחיתה בביצועים גבוהים מעוצב למקסם את שיעור ההמרה שלכם. פסיכולוגיה התנהגותית יישומית לתוצאות יוצאות דופן.',
            features: [
              'עיצוב פסיכולוגיית המרות',
              'A/B Testing מקצועי משולב',
              'אינטגרציית CRM אוטומטית',
              'אנליטיקס התנהגותית',
              'אופטימיזציה מובייל מושלמת',
              'טפסים חכמים'
            ]
          },
          webAppCustom: {
            title: 'אפליקציית ווב אסטרטגית מותאמת',
            description: 'פתרון אפליקטיבי ארגוני מפותח לפי המפרטים המדויקים שלכם. סקיילביליות מובטחת וארכיטקטורה עתידית.',
            features: [
              'ארכיטקטורה סקיילבל ארגונית',
              'בסיס נתונים בביצועים גבוהים',
              'APIs REST/GraphQL נטיביים',
              'דשבורד ניהול מתוחכם',
              'אבטחה ברמת בנקאית',
              'מוניטורינג זמן אמת'
            ],
            badge: '🚀 פתרון פרמיום'
          },
          portfolioWebsite: {
            title: 'פורטפוליו יצירתי יוצא דופן',
            description: 'מדיית דיגיטלית פרמיום המדגישה את הכישרון היצירתי שלכם. חוויית משתמש סוחפת הכובשת וממירה.',
            features: [
              'גלריה אינטראקטיבית דינמית',
              'אנימציות CSS מתוחכמות',
              'בלוג יצירתי משולב',
              'טופס יצירת קשר פרמיום',
              'SEO יצירתי מואץ',
              'טעינה אולטרה-מהירה'
            ]
          },
          blogWebsite: {
            title: 'פלטפורמת בלוג אסטרטגית פרמיום',
            description: 'מערכת אקולוגיה של קונטנט מרקטינג מקצועי מותאם לסמכות ומעורבות. מנוע צמיחה אורגנית מובטח.',
            features: [
              'CMS WordPress ארגוני',
              'SEO קונטנט מרקטינג מתקדם',
              'אוטומציית ניוזלטר משולבת',
              'אינטגרציית מדיה חברתית נטיבית',
              'אנליטיקס תוכן מתקדמת',
              'מונטיזציה מותאמת'
            ]
          }
        },
        ecommerce: {
          ecommerceBasic: {
            title: 'חנות אי-קומרס בביצועים',
            description: 'פלטפורמה מסחרית שלמה מותאמת למקסם את המכירות המקוונות שלכם. חוויית קנייה חלקה הממירה.',
            features: [
              'קטלוג מוצרים חכם',
              'עגלת קניות מותאמת UX',
              'תשלומים מאובטחים רב-שערים',
              'ניהול הזמנות אוטומטי',
              'אנליטיקס מכירות מתקדמת',
              'אוטומציית מרקטינג משולבת'
            ],
            badge: '🏆 בחירה פופולרית'
          },
          ecommercePremium: {
            title: 'מרקטפלייס פרמיום רב-ספקים',
            description: 'מערכת אקולוגיה אי-קומרס ארגונית עם ניהול רב-ספקים מתוחכם. פתרון היוצר הכנסות חוזרות.',
            features: [
              'מערכת רב-ספקים מתקדמת',
              'מנוע קמישן חכם',
              'אנליטיקס מרקטפלייס פרמיום',
              'אפליקציית מובייל נטיבית',
              'API מרקטפלייס מלא',
              'תמיכת ספקים 24/7'
            ],
            badge: '💎 פתרון ארגוני'
          },
          ecommerceMobile: {
            title: 'אפליקציית אי-קומרס מובייל נטיבית',
            description: 'אפליקציית מובייל נטיבית בביצועים גבוהים לחנות שלכם. חוויית קנייה מובייל מיטבית המחזקת נאמנות.',
            features: [
              'אפליקציות iOS & Android נטיביות',
              'התראות דחיפה חכמות',
              'תשלום מובייל מאובטח',
              'גיאולוקיישן מתקדמת',
              'מצב אופליין משולב',
              'אנליטיקס מובייל מלאה'
            ]
          },
          marketplaceIntegration: {
            title: 'אינטגרציית מרקטפלייס אסטרטגית',
            description: 'חיבור נטיבי עם Amazon, eBay, Etsy להכפלת ערוצי המכירה. ניהול מרוכז מובטח.',
            features: [
              'סינכרון מוצרים אוטומטי',
              'ניהול מלאי מרוכז',
              'תמחור דינמי חכם',
              'דיווח רב-ערוצי',
              'אופטימיזציית רישומים',
              'תמיכת מרקטפלייס מומחית'
            ]
          },
          subscriptionEcommerce: {
            title: 'אי-קומרס מנויים חוזרים',
            description: 'מודל עסקי מנויים היוצר הכנסות צפויות. שימור לקוחות מקסימלי.',
            features: [
              'מנויים חוזרים גמישים',
              'ניהול חיוב אוטומטי',
              'פורטל לקוחות בשירות עצמי',
              'אנליטיקס מנויים מתקדמת',
              'חיזוי נשירה משולב',
              'שדרוג/הורדה חכמה'
            ]
          }
        }
      }
    },
    services: {
      title: '🚀 מצוינות דיגיטלית פרמיום',
      subtitle: 'הפכו את החזון שלכם להצלחה דיגיטלית עם המומחיות המתקדמת שלנו. +150 פרויקטים מוצלחים, ROI מובטח של 300%',
      hero: {
        title: 'השותף הדיגיטלי האסטרטגי שלכם',
        subtitle: 'פתרונות מותאמים אישית שמניעים צמיחה וממקסמים הכנסות. מומחיות מוכחת, תוצאות מובטחות.',
        cta: 'התחילו את הפרויקט שלכם'
      },
      viewAll: 'חקרו את כל המומחיות שלנו',
      requestQuote: 'קבלו הצעת מחיר מומחה חינם',
      moreInfo: 'גלו את כל הפרטים',
      features: 'יתרונות פרמיום כלולים',
      delivery: 'זמן אספקה מובטח',
      price: 'השקעה שקופה',
      popular: '🏆 פתרון פרמיום',
      getStarted: 'השיקו את הפרויקט שלכם עכשיו',
      categories: {
        webDevelopment: '💻 פיתוח אתרים פרמיום',
        design: '🎨 עיצוב UX/UI יוצא דופן',
        marketing: '📈 גרות׳ מרקטינג ויצירת לידים',
        ecommerce: '🛒 מסחר אלקטרוני בביצועים גבוהים',
        mobile: '📱 אפליקציות מובייל חוצות פלטפורמות',
        consulting: '🎯 ייעוץ דיגיטלי אסטרטגי',
        maintenance: '🔧 תמיכה טכנית 24/7',
      },
      search: 'מצאו את הפתרון הדיגיטלי האידיאלי שלכם...',
      all: 'כל המומחיות שלנו',
      noResults: 'אין פתרון סטנדרטי? אנחנו יוצרים את הפתרון המותאם שלכם!',
      startingFrom: 'מתחיל מ',
      deliveryTime: 'אספקה מובטחת תוך',
      stats: {
        title: ' מצוינות דיגיטלית במספרים',
        subtitle: 'ביצועים יוצאי דופן שמדגימים את המנהיגות שלנו בשוק הישראלי',
        services: 'פתרונות פרמיום זמינים',
        projects: 'פרויקטים שנמסרו בהצלחה',
        satisfaction: 'לקוחות מרוצים ונאמנים',
        support: 'תמיכת מומחים 24/7/365'
      },
      cta: {
        title: ' מוכנים לחולל מהפכה בעסק הדיגיטלי שלכם?',
        description: 'הצטרפו ל+150 חברות שסומכות עלינו. ייעוץ אסטרטגי חינם, הצעת מחיר אישית תוך 24 שעות.',
        getQuote: 'קבלו את האסטרטגיה החינמית שלכם',
        contact: 'דברו עם מומחה',
        benefits: [
          ' ביקורת מלאה חינם',
          ' אסטרטגיה אישית',
          ' ROI מובטח של 300%',
          ' תמיכה פרמיום כלולה'
        ]
      },
      catalog: {
        webDevelopment: {
          websiteVitrine: {
            title: 'אתר ויטרינה פרמיום מעוצב למצוינות',
            description: 'פלטפורמה דיגיטלית מתוחכמת שהופכת מבקרים ללקוחות נאמנים. ארכיטקטורה מתגובה אולטרה-מודרנית עם ביצועים אופטימליים מובטחים.',
            badge: '⭐ פתרון פופולרי',
            features: [
              'עיצוב רספונסיבי פרמיום יוקרתי',
              'SEO טכני משולב מתקדם',
              'אחסון פרמיום שנה כלולה',
              'תמיכה טכנית VIP 24/7',
              'אנליטיקס משולב מתקדם',
              'אופטימיזציה להמרות מובטחת'
            ]
          },
          websiteVitrinePlus: {
            title: 'אתר ויטרינה עסקי פרמיום פלוס',
            description: 'פלטפורמה עסקית מתקדמת עם פונקציונליות חכמה שמייצרת לידים איכותיים. ארכיטקטורה פרמיום עם תכונות אוטומציה מתקדמות.',
            badge: '🚀 פתרון פרמיום',
            features: [
              'כל היתרונות של ויטרינה קלאסית',
              'מערכת CRM משולבת אוטומטית',
              'חיבור אוטומטי לכלי שיווק',
              'ניהול תוכן דינמי מתקדם',
              'אנליטיקס התנהגותי מתקדם',
              'תמיכה פרמיום עדיפות גבוהה'
            ]
          },
          landingPage: {
            title: 'דף נחיתה בביצועים גבוהים להמרות',
            description: 'דף נחיתה ממוקד המרות שהופך תנועה לרכישות. אסטרטגיה פסיכולוגית מבוססת נתונים עם אופטימיזציה מתמדת מובטחת.',
            badge: '🎯 פתרון ממוקד',
            features: [
              'עיצוב ממוקד המרות מקסימלי',
              'מבחנים A/B מתקדמים משולבים',
              'אופטימיזציה מתמדת מובטחת',
              'אנליטיקס התנהגותי מפורט',
              'אינטגרציות שיווק אוטומטיות',
              'תמיכה בהתאמה אישית מלאה'
            ]
          }
        },
        seo: {
          seoAudit: {
            title: 'אודיט SEO אסטרטגי מלא מדיגנה אימפריה',
            description: 'ניתוח 360° מעמיק שחושף את כל הזדמנויות ההשתלטות SEO שלכם. אבחון פרמיום שמבטיח את העלייה שלכם לעמוד הראשון בגוגל.',
            badge: '🔥 פתרון מומחה',
            features: [
              'אודיט טכני אנטרפרייז מלא',
              'ניתוח תחרות אינטליגנציה שיווקית',
              'מחקר מילות מפתח אסטרטגי מתקדם',
              'תוכנית פעולה ROI מובטחת',
              'הזדמנויות Quick Wins מזוהות',
              'ניתוח בנצ\'מרק ענפי כלול'
            ]
          },
          seoOptimization: {
            title: 'אימפריית השתלטות SEO פרמיום חודשית',
            description: 'האצה מתמדת של המיקום שלכם בגוגל עם אסטרטגיית ROI מובטחת. עלייה בלתי נמנעת לכיוון המנהיגות בתחום שלכם.',
            badge: '⭐ פתרון פופולרי',
            features: [
              'אופטימיזציה טכנית אנטרפרייז',
              'יצירת תוכן מומחה בעל ערך גבוה',
              'בניית קישורים בסמכות פרמיום',
              'דוחות ביצועים מפורטים',
              'מעקב תחרותי מתמיד',
              'תמיכת מומחה VIP מוקדשת'
            ]
          }
        },
        ecommerce: {
          ecommerceBasic: {
            title: 'יסודות אימפריית המסחר האלקטרוני',
            description: 'פלטפורמת מסחר אלקטרוני בהמרות גבוהות שהופכת את המבקרים שלכם לקונים חוזרים. ארכיטקטורת מכירות מתוחכמת עם אבטחה בנקאית משולבת.',
            badge: '⭐ פתרון פופולרי',
            features: [
              'קטלוג מוצרים מותאם פרמיום',
              'עגלת קניות חכמה נגד נטישה',
              'תשלום רב-שיטתי אולטרה מאובטח',
              'CRM הזמנות אוטומטי',
              'SEO מסחר אלקטרוני משולב',
              'אנליטיקס מכירות בזמן אמת'
            ]
          },
          ecommercePremium: {
            title: 'אימפריית מארקטפלייס רב-ספקים פרמיום',
            description: 'מערכת אקולוגית למסחר אלקטרוני אנטרפרייז עם ניהול רב-ספקים מתוחכם. פתרון שמייצר הכנסות חוזרות ונתמך באופן אינסופי.',
            badge: '🏢 פתרון אנטרפרייז',
            features: [
              'מערכת רב-ספקים מתקדמת',
              'מנוע עמלות חכם',
              'אנליטיקס מארקטפלייס פרמיום',
              'אפליקציה מובייל מקורית',
              'API מארקטפלייס מלא',
              'מערכת תמיכת ספקים 24/7'
            ]
          }
        },
        marketing: {
          googleAds: {
            title: 'קמפיין מאיץ הכנסות Google Ads',
            description: 'קמפיינים פרסומיים בגוגל בביצועים אולטרה גבוהים שמייצרים לידים איכותיים 24/7. ארכיטקטורה בתשלום מתוחכמת עם ROI מובטח ואופטימיזציה אוטומטית מתמדת.',
            badge: '🎯 פתרון פרסום',
            features: [
              'הקמת קמפיין מומחה פרמיום',
              'מחקר מילות מפתח אינטליגנציה שיווקית',
              'דפי נחיתה מותאמי המרות',
              'אופטימיזציית ROI אוטומטית מובטחת',
              'מעקב רב-ייחוס מתקדם',
              'ניהול תקציב חכם'
            ]
          }
        },
        mobile: {
          mobileAppIos: {
            title: 'אימפריית אפליקציית iOS מקורית פרמיום',
            description: 'אפליקציית iOS מקורית מתוחכמת שמייצרת מעורבות משתמשים יוצאת דופן והכנסות חוזרות. ארכיטקטורה מובייל פרמיום עם UX מהפכני לשליטה ב-App Store.',
            badge: '📱 פתרון מקורי פרמיום',
            features: [
              'ארכיטקטורת Swift/SwiftUI פרמיום',
              'אופטימיזציה מלאה מובטחת ל-App Store',
              'התראות Push אינטליגנציה שיווקית',
              'אנליטיקס התנהגותי מתוחכם',
              'מונטיזציה משולבת מותאמת',
              'תמיכת הנחיות Apple מומחה'
            ]
          }
        },
        consulting: {
          strategicConsulting: {
            title: 'אימפריית ייעוץ דיגיטלי אסטרטגי טרנספורמציה',
            description: 'ייעוץ מומחה שמחולל מהפכה במודל העסקי שלכם ומאיץ את הצמיחה הדיגיטלית שלכם. ניתוח אסטרטגי פרמיום עם ROI מובטח ויתרון תחרותי.',
            badge: '🎯 פתרון אסטרטגי',
            features: [
              'אודיט בגרות דיגיטלית מלא',
              'מפת דרכים טרנספורמציה מותאמת',
              'אופטימיזציית מערך טכנולוגיות',
              'תמיכה בניהול שינויים',
              'מעקב KPI ביצועים',
              'אימון הנהלה כלול'
            ]
          }
        },
        maintenance: {
          websiteMaintenance: {
            title: 'אימפריית תחזוקת אתרים פרמיום',
            description: 'תחזוקת אתרים מלאה שמבטיחה ביצועים אופטימליים, אבטחה וזמינות. תמיכת VIP ששומרת על הנוכחות הדיגיטלית שלכם ללא רבב 24/7.',
            badge: '🛡️ פתרון תחזוקה',
            features: [
              'מעקב פרואקטיבי 24/7',
              'עדכוני אבטחה אוטומטיים',
              'אופטימיזציית ביצועים',
              'ניהול גיבויים רגיל',
              'תמיכה טכנית עדיפות',
              'דוחות ביצועים חודשיים'
            ]
          }
        },
        specialized: {
          accessibilityOptimization: {
            title: 'תאימות נגישות דיגיטלית פרמיום',  
            description: 'אופטימיזציית נגישות מלאה שהופכת את האתר שלכם לכולל ותואם חוקית. פתרון מומחה המבטיח תקני WCAG וחוויית משתמש אופטימלית לכולם.',
            badge: '♿ פתרון כולל',
            features: [
              'אודיט תאימות WCAG 2.1 AA מלא',
              'אופטימיזציית קוד נגישות',
              'תאימות קוראי מסך',
              'ניווט מקלדת מתקדם',
              'הסמכת תאימות חוקית',
              'ייעוץ עיצוב כולל'
            ]
          }
        }
      }
    },
    contact: {
      title: 'צור קשר',
      subtitle: 'בואו נדבר על הפרויקט הדיגיטלי שלכם',
      cta: {
        call: 'התקשר עכשיו',
        chat: 'צ\'אט עם מומחה'
      },
      team: {
        badge: 'צוות מומחים מוסמכים'
      },
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
        description: 'השותף הדיגיטלי המהימן שלכם בישראל',
        experience: '🚀 5+ שנות מצוינות דיגיטלית',
        projects: '🏆 150+ פרויקטי הצלחה שנמסרו'
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
      title: 'פתרונות עסקיים פרמיום 💎',
      subtitle: 'חבילות מפתח-בידיים שהופכות את החזון שלכם לאימפריה דיגיטלית רווחית',
      popular: '🔥 רב מכר',
      mostPopular: 'הבחירה מספר 1 של יזמים',
      getStarted: 'שיגור ההצלחה שלי',
      contactUs: 'ייעוץ אסטרטגי',
      features: 'יתרונות פרמיום כלולים',
      whatYouGet: 'הארסנל הדיגיטלי המלא שלכם',
      perfect: 'מושלם לשליטה בשוק',
      startingAt: 'השקעה החל מ-',
      onQuote: 'תמחור מותאם אישית',
      otherServices: 'שירותי מומחיות בונוס',
      added: '✅ משולב',
      choose: 'בחירת מצוינות',
      addedToCart: '🛒 נוסף בהצלחה',
      choosePack: 'אימוץ הפתרון הזה',
      save: '💰 חיסכון יוצא דופן',
      servicesIncluded: 'ארסנל מומחיות כלול',
      consultation: '🎯 ביקורת אסטרטגית חינם',
      delivery: '⚡ משלוח מהיר מובטח',
      guarantee: '🛡️ שביעות רצון 100% מובטחת',
      pricing: {
        oneTime: 'השקעה חד פעמית'
      },
      comparison: {
        title: 'מטריצת השוואה פרמיום',
        button: 'השוואת פתרונות',
        features: {
          title: 'מומחיות ויתרונות',
          logo: 'זהות חזותית פרמיום',
          responsive: 'עיצוב רספונסיבי גבוה ביצועים',
          seo: 'SEO ודירוג מתקדם',
          social: 'אסטרטגיית רשתות חברתיות',
          ecommerce: 'מסחר אלקטרוני אופטימלי להמרות',
          mobile: 'אפליקציה ניידת נטיבית',
          support: 'תמיכה פרמיום 24/7',
          training: 'הדרכה וקואצ\'ינג כלולים'
        }
      },
      whyChoose: {
        title: 'למה מובילי השוק בוחרים בווב יארדן? 🏆',
        delivery: {
          title: '⚡ ביצוע בזק',
          description: 'השקה תוך 48 שעות, אספקה מפתח-בידיים תוך 2-4 שבועות. ההצלחה שלכם לא יכולה לחכות.'
        },
        expertise: {
          title: '🎯 מומחיות בשוק הישראלי',
          description: 'שליטה מלאה במאפיינים המקומיים, תקנות והרגלי צריכה. היתרון התחרותי שלכם.'
        },
        guarantee: {
          title: '🛡️ ערבות ROI וביצועים',
          description: 'תוצאות מדידות מובטחות או החזר מלא. ההשקעה שלכם מאובטחת.'
        }
      },
      cta: {
        title: 'זקוקים לפתרון מותאם אישית? 🎯',
        description: 'המומחים שלנו מנתחים את האתגרים שלכם ומעצבים את האסטרטגיה הדיגיטלית המושלמת לשליטה בשוק',
        consultation: 'ביקורת אסטרטגית חינם',
        chat: 'מומחה אונליין עכשיו'
      }
    },
    dashboard: {
      title: 'מרכז פיקוד פרימיום 🚀',
      welcome: 'ברוכים הבאים לתא הטייס של ההצלחה הדיגיטלית - נווטו את האימפריה הדיגיטלית שלכם',
      stats: {
        projects: 'פרויקטים פעילים',
        messages: 'הודעות',
        quotes: 'הצעות מחיר ממתינות'
      },
      tabs: {
        projects: 'ניהול פרויקטים אסטרטגי',
        clients: 'תיק לקוחות פרימיום',
        analytics: 'אינטליגנציה אנליטית מקצועית'
      },
      comingSoon: 'תכונות חדשניות בפיתוח למקסום הביצועים שלכם',
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
      title: 'הודעה משפטית פרימיום',
      subtitle: 'שקיפות מלאה והתחייבות לאיכות - האמון שלכם הוא העדיפות המוחלטת שלנו',
      lastUpdate: 'עדכון אחרון',
      company: {
        title: 'מידע על החברה',
        name: 'שם החברה',
        form: 'צורה משפטית',
        address: 'משרד רשום',
        email: 'אימייל',
        phone: 'טלפון',
        director: 'מנהל הפרסום',
        companyName: 'Web Yarden - מצוינות דיגיטלית',
        companyForm: 'חברה בעלת אחריות מוגבלת - חדשנות טכנולוגית',
        companyAddress: 'תל אביב, ישראל - מרכז טכנולוגי בינלאומי',
        companyEmail: 'contact@webyarden.co.il',
        companyPhone: '+972 12 345 6789'
      },
      hosting: {
        title: 'תשתית אירוח פרימיום',
        description: 'הפלטפורמה שלנו נהנית מתשתית עולמית ברמת ארגון המתארחת על ידי:',
        provider: 'Vercel Inc. - מובילה עולמית בענן',
        providerAddress: '340 S Lemon Ave #4133\nWalnut, CA 91789\nארצות הברית\nתשתית Edge Computing עולמית'
      },
      intellectual: {
        title: 'קניין רוחני וחדשנות מוגנת',
        content1: 'המערכת הדיגיטלית הפרימיום שלנו כפופה להגנה מחוזקת תחת החקיקה הצרפתית והבינלאומית על זכויות יוצרים וקניין רוחני מתקדם.',
        content2: 'כל הנכסים היצירתיים והטכנולוגיים שלנו מוגנים: קודי מקור, עיצובים בלעדיים, מתודולוגיות רשומות, תכנים מולטימדיה וחידושים גרפיים.'
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
