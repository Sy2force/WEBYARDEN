export interface Translations {
  [key: string]: string | string[] | Translations
}

const translations: Record<string, Translations> = {
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
      subtitle: 'Agence Digitale Israël',
      getQuote: 'Obtenir un devis',
    },
    footer: {
      description: 'Votre partenaire digital en Israël pour développer votre présence en ligne et booster votre business.',
      quickLinks: 'Liens rapides',
      rights: 'Tous droits réservés',
    },
    home: {
      hero: {
        title: 'Web Yarden — Accélérez votre visibilité en Israël 🇮🇱',
        subtitle: 'Votre partenaire digital pour booster votre présence en ligne et développer votre business en Israël',
        cta: 'Commencer maintenant',
        ctaSecondary: 'Nous contacter'
      },
      features: {
        title: 'Nos Services Phares',
        subtitle: 'Des solutions digitales complètes pour votre succès',
        webDev: {
          title: 'Développement Web',
          description: 'Sites web modernes et performants'
        },
        seo: {
          title: 'SEO & Marketing',
          description: 'Optimisation pour les moteurs de recherche'
        },
        design: {
          title: 'Design & UX',
          description: 'Interfaces utilisateur exceptionnelles'
        }
      }
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Des solutions digitales sur mesure pour votre réussite',
      viewAll: 'Voir tous les services',
      requestQuote: 'Demander un devis',
      moreInfo: 'Plus d\'infos',
      features: 'Fonctionnalités incluses',
      delivery: 'Livraison',
      price: 'Prix',
      popular: 'Populaire',
      getStarted: 'Commencer',
      categories: {
        webDevelopment: 'Développement Web',
        design: 'Design & UX',
        marketing: 'Marketing Digital',
        ecommerce: 'E-commerce',
        mobile: 'Applications Mobile',
        consulting: 'Conseil & Stratégie',
        maintenance: 'Maintenance & Support',
        seo: 'SEO & Référencement'
      },
      search: 'Rechercher un service...',
      all: 'Tous',
      noResults: 'Aucun service trouvé pour cette recherche.',
      startingFrom: 'À partir de',
      deliveryTime: 'Délai de livraison',
      stats: {
        title: 'Web Yarden en chiffres',
        subtitle: 'Notre expertise au service de votre succès',
        services: 'Services disponibles',
        projects: 'Projets réalisés',
        satisfaction: 'Clients satisfaits',
        support: 'Support technique'
      },
      cta: {
        title: 'Prêt à transformer votre présence digitale ?',
        subtitle: 'Contactez-nous dès aujourd\'hui pour discuter de votre projet et obtenir un devis personnalisé gratuit.',
        contact: 'Nous contacter',
        quote: 'Obtenir un devis'
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
      title: 'Nos Packs',
      subtitle: 'Des solutions complètes pour tous vos besoins digitaux',
      popular: 'POPULAIRE',
      mostPopular: 'Le plus populaire',
      getStarted: 'Commencer',
      contactUs: 'Nous contacter',
      features: 'Fonctionnalités incluses',
      whatYouGet: 'Ce que vous obtenez',
      perfect: 'Parfait pour',
      startingAt: 'À partir de',
      onQuote: 'Sur devis',
      otherServices: 'autres services',
      added: 'Ajouté',
      choose: 'Choisir',
      addedToCart: 'Ajouté au panier',
      choosePack: 'Choisir ce pack',
      save: 'ÉCONOMISEZ',
      servicesIncluded: 'Services inclus',
      consultation: 'Consultation gratuite',
      delivery: 'Livraison rapide',
      guarantee: 'Garantie satisfait',
      pricing: {
        oneTime: 'Paiement unique'
      },
      comparison: {
        title: 'Comparaison détaillée des packs',
        button: 'Comparer les packs',
        features: {
          title: 'Fonctionnalités',
          logo: 'Logo professionnel',
          responsive: 'Site web responsive',
          seo: 'SEO optimisation',
          social: 'Réseaux sociaux',
          ecommerce: 'E-commerce',
          mobile: 'App mobile',
          support: 'Support technique',
          training: 'Formation incluse'
        }
      },
      whyChoose: {
        title: 'Pourquoi choisir Web Yarden ?',
        delivery: {
          title: 'Livraison Express',
          description: 'Démarrage sous 48h, livraison en 2-4 semaines maximum'
        },
        expertise: {
          title: 'Expertise Locale',
          description: 'Spécialistes du marché israélien et de la culture locale'
        },
        guarantee: {
          title: 'Garantie Résultats',
          description: 'Satisfaction garantie ou remboursement intégral'
        }
      },
      cta: {
        title: 'Pas sûr de votre choix ?',
        description: 'Discutons de vos besoins pour trouver la solution parfaite',
        consultation: 'Consultation gratuite',
        chat: 'Chat en direct'
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
      checkout: 'Finaliser le devis',
      continue: 'Continuer les achats',
      summary: 'Panier',
      item: 'article',
      items: 'articles'
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      subtitle: 'Plus de 150 entreprises nous font confiance en Israël',
      trustedBy: 'Ils nous font confiance',
      goTo: 'Aller au témoignage'
    },
    stats: {
      title: 'Nos Résultats Parlent d\'Eux-Mêmes',
      subtitle: 'Des chiffres qui témoignent de notre expertise et de notre engagement envers nos clients',
      goal: 'Objectif : Votre succès digital',
      projects: 'Projets réalisés',
      clients: 'Clients satisfaits',
      experience: 'Années d\'expérience',
      support: 'Support 24/7'
    },
    buttons: {
      learnMore: 'En savoir plus',
      getStarted: 'Commencer',
      viewAll: 'Voir tout',
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
      subtitle: 'Digital Agency Israel',
      getQuote: 'Get Quote',
    },
    footer: {
      description: 'Your digital partner in Israel to develop your online presence and boost your business.',
      quickLinks: 'Quick Links',
      rights: 'All rights reserved'
    },
    home: {
      hero: {
        title: 'Web Yarden — Accelerate your visibility in Israel 🇮🇱',
        subtitle: 'Your digital partner to boost your online presence and develop your business in Israel',
        cta: 'Start Now',
        ctaSecondary: 'Contact Us'
      },
      features: {
        title: 'Our Featured Services',
        subtitle: 'Complete digital solutions for your success',
        webDev: {
          title: 'Web Development',
          description: 'Modern and high-performance websites'
        },
        seo: {
          title: 'SEO & Marketing',
          description: 'Search engine optimization'
        },
        design: {
          title: 'Design & UX',
          description: 'Exceptional user interfaces'
        }
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Tailored digital solutions for your success',
      viewAll: 'View all services',
      requestQuote: 'Request quote',
      moreInfo: 'More info',
      features: 'Features included',
      delivery: 'Delivery',
      price: 'Price',
      popular: 'Popular',
      getStarted: 'Get started',
      categories: {
        webDevelopment: 'Web Development',
        design: 'Design & UX',
        marketing: 'Digital Marketing',
        ecommerce: 'E-commerce',
        mobile: 'Mobile Applications',
        consulting: 'Consulting & Strategy',
        maintenance: 'Maintenance & Support',
        seo: 'SEO & Referencing'
      },
      search: 'Search for a service...',
      all: 'All',
      noResults: 'No service found for this search.',
      startingFrom: 'Starting from',
      deliveryTime: 'Delivery time',
      stats: {
        title: 'Web Yarden in numbers',
        subtitle: 'Our expertise at your service',
        services: 'Available services',
        projects: 'Completed projects',
        satisfaction: 'Satisfied clients',
        support: 'Technical support'
      },
      cta: {
        title: 'Ready to transform your digital presence?',
        subtitle: 'Contact us today to discuss your project and get a free personalized quote.',
        contact: 'Contact Us',
        quote: 'Get Quote'
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
      added: '✓ Added!',
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
      continue: 'Continue shopping',
      summary: 'Cart',
      item: 'item',
      items: 'items'
    },
    testimonials: {
      title: 'What our clients say',
      subtitle: 'Over 150 companies trust us in Israel',
      trustedBy: 'They trust us',
      goTo: 'Go to testimonial'
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
      subtitle: 'סוכנות דיגיטלית ישראל',
      getQuote: 'קבל הצעת מחיר',
    },
    footer: {
      description: 'השותף הדיגיטלי שלכם בישראל לפיתוח הנוכחות המקוונת ולהגדלת העסק.',
      quickLinks: 'קישורים מהירים',
      rights: 'כל הזכויות שמורות'
    },
    home: {
      hero: {
        title: 'ווב יארדן — האיצו את הנראות שלכם בישראל 🇮🇱',
        subtitle: 'השותף הדיגיטלי שלכם להגברת הנוכחות המקוונת ופיתוח העסק בישראל',
        cta: 'התחל עכשיו',
        ctaSecondary: 'צור קשר'
      },
      features: {
        title: 'השירותים המובילים שלנו',
        subtitle: 'פתרונות דיגיטליים מלאים להצלחתכם',
        webDev: {
          title: 'פיתוח אתרים',
          description: 'אתרים מודרניים ועם ביצועים גבוהים'
        },
        seo: {
          title: 'SEO ושיווק',
          description: 'אופטימיזציה למנועי חיפוש'
        },
        design: {
          title: 'עיצוב ו-UX',
          description: 'ממשקי משתמש יוצאי דופן'
        }
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
      continue: 'המשך קנייה'
    },
    testimonials: {
      title: 'מה הלקוחות שלנו אומרים',
      subtitle: 'יותר מ-150 חברות סומכות עלינו בישראל',
      trustedBy: 'הם סומכים עלינו',
      goTo: 'עבור לעדות'
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
    }
  }
}

export default translations

export const getStaticTranslations = (locale: string) => {
  return translations[locale] || translations.fr
}

export const getSupportedLocales = () => {
  return Object.keys(translations)
}
