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
      subtitle: 'Solutions digitales complètes pour votre entreprise en Israël',
      search: 'Rechercher un service...',
      all: 'Tous',
      noResults: 'Aucun service trouvé pour cette recherche.',
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
        hours: 'Lun-Ven: 9h-18h'
      }
    },
    about: {
      title: 'À Propos de Web Yarden',
      subtitle: 'Votre partenaire digital de confiance en Israël',
      story: {
        title: 'Notre Histoire',
        content: 'Web Yarden est née de la passion pour l\'innovation digitale et de la volonté d\'accompagner les entreprises dans leur transformation numérique en Israël.'
      },
      mission: {
        title: 'Notre Mission',
        content: 'Nous aidons les entreprises à développer leur présence en ligne avec des solutions digitales sur mesure, adaptées au marché israélien.'
      },
      values: {
        title: 'Nos Valeurs',
        innovation: 'Innovation',
        quality: 'Qualité',
        partnership: 'Partenariat'
      }
    },
    packs: {
      title: 'Nos Packs',
      subtitle: 'Choisissez la solution parfaite pour votre entreprise',
      categories: {
        all: 'Tous les packs',
        startup: 'Startup',
        business: 'Business',
        enterprise: 'Enterprise'
      },
      starter: {
        name: 'Pack Starter',
        slogan: 'Parfait pour débuter',
        price: '2,990',
        currency: '₪',
        features: ['Site web responsive', 'SEO de base', 'Support 3 mois']
      },
      pro: {
        name: 'Pack Pro',
        slogan: 'Pour les entreprises en croissance',
        price: '5,990',
        currency: '₪',
        features: ['Site web avancé', 'SEO optimisé', 'E-commerce', 'Support 6 mois']
      },
      premium: {
        name: 'Pack Premium',
        slogan: 'Solution complète',
        price: '9,990',
        currency: '₪',
        features: ['Site web premium', 'SEO avancé', 'E-commerce pro', 'App mobile', 'Support 12 mois']
      },
      ultimate: {
        name: 'Pack Ultimate',
        slogan: 'Excellence absolue',
        price: '19,990',
        currency: '₪',
        features: ['Solution sur mesure', 'SEO expert', 'E-commerce enterprise', 'App mobile native', 'Support illimité']
      },
      cta: 'Essayer ce pack',
      added: '✓ Ajouté !',
      comparison: {
        title: 'Comparaison détaillée des packs',
        button: 'Comparer les packs'
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
      subtitle: 'Complete digital solutions for your business in Israel',
      search: 'Search for a service...',
      all: 'All',
      noResults: 'No service found for this search.',
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
        hours: 'Mon-Fri: 9am-6pm'
      }
    },
    about: {
      title: 'About Web Yarden',
      subtitle: 'Your trusted digital partner in Israel',
      story: {
        title: 'Our Story',
        content: 'Web Yarden was born from a passion for digital innovation and the desire to support companies in their digital transformation in Israel.'
      },
      mission: {
        title: 'Our Mission',
        content: 'We help businesses develop their online presence with tailor-made digital solutions, adapted to the Israeli market.'
      },
      values: {
        title: 'Our Values',
        innovation: 'Innovation',
        quality: 'Quality',
        partnership: 'Partnership'
      }
    },
    packs: {
      title: 'Our Packs',
      subtitle: 'Choose the perfect solution for your business',
      categories: {
        all: 'All packs',
        startup: 'Startup',
        business: 'Business',
        enterprise: 'Enterprise'
      },
      starter: {
        name: 'Starter Pack',
        slogan: 'Perfect to get started',
        price: '2,990',
        currency: '₪',
        features: ['Responsive website', 'Basic SEO', '3 months support']
      },
      pro: {
        name: 'Pro Pack',
        slogan: 'For growing businesses',
        price: '5,990',
        currency: '₪',
        features: ['Advanced website', 'Optimized SEO', 'E-commerce', '6 months support']
      },
      premium: {
        name: 'Premium Pack',
        slogan: 'Complete solution',
        price: '9,990',
        currency: '₪',
        features: ['Premium website', 'Advanced SEO', 'Pro e-commerce', 'Mobile app', '12 months support']
      },
      ultimate: {
        name: 'Ultimate Pack',
        slogan: 'Absolute excellence',
        price: '19,990',
        currency: '₪',
        features: ['Custom solution', 'Expert SEO', 'Enterprise e-commerce', 'Native mobile app', 'Unlimited support']
      },
      cta: 'Try this pack',
      added: '✓ Added!',
      comparison: {
        title: 'Detailed pack comparison',
        button: 'Compare packs'
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
      subtitle: 'פתרונות דיגיטליים מלאים לעסק שלכם בישראל',
      search: 'חפש שירות...',
      all: 'הכל',
      noResults: 'לא נמצא שירות עבור החיפוש הזה.',
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
        subtitle: 'צרו קשר היום כדי לדון בפרויקט שלכם ולקבל הצעת מחיר מותאמת אישית בחינם.',
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
        hours: 'א׳-ה׳: 9:00-18:00'
      }
    },
    about: {
      title: 'אודות ווב יארדן',
      subtitle: 'השותף הדיגיטלי המהימן שלכם בישראל',
      story: {
        title: 'הסיפור שלנו',
        content: 'ווב יארדן נולדה מתוך תשוקה לחדשנות דיגיטלית והרצון לליווי חברות בטרנספורמציה הדיגיטלית שלהן בישראל.'
      },
      mission: {
        title: 'המשימה שלנו',
        content: 'אנחנו עוזרים לעסקים לפתח את הנוכחות המקוונת שלהם עם פתרונות דיגיטליים מותאמים אישית, המותאמים לשוק הישראלי.'
      },
      values: {
        title: 'הערכים שלנו',
        innovation: 'חדשנות',
        quality: 'איכות',
        partnership: 'שותפות'
      }
    },
    packs: {
      title: 'החבילות שלנו',
      subtitle: 'בחרו את הפתרון המושלם לעסק שלכם',
      categories: {
        all: 'כל החבילות',
        startup: 'סטארט-אפ',
        business: 'עסקי',
        enterprise: 'ארגוני'
      },
      starter: {
        name: 'חבילת התחלה',
        slogan: 'מושלם להתחלה',
        price: '2,990',
        currency: '₪',
        features: ['אתר רספונסיבי', 'SEO בסיסי', 'תמיכה 3 חודשים']
      },
      pro: {
        name: 'חבילת פרו',
        slogan: 'לעסקים בצמיחה',
        price: '5,990',
        currency: '₪',
        features: ['אתר מתקדם', 'SEO מותאם', 'מסחר אלקטרוני', 'תמיכה 6 חודשים']
      },
      premium: {
        name: 'חבילת פרמיום',
        slogan: 'פתרון מלא',
        price: '9,990',
        currency: '₪',
        features: ['אתר פרמיום', 'SEO מתקדם', 'מסחר אלקטרוני פרו', 'אפליקציה', 'תמיכה 12 חודשים']
      },
      ultimate: {
        name: 'חבילת אולטימט',
        slogan: 'מצוינות מוחלטת',
        price: '19,990',
        currency: '₪',
        features: ['פתרון מותאם אישית', 'SEO מומחה', 'מסחר אלקטרוני ארגוני', 'אפליקציה נייטיב', 'תמיכה בלתי מוגבלת']
      },
      cta: 'נסה את החבילה',
      added: '✓ נוסף!',
      comparison: {
        title: 'השוואת חבילות מפורטת',
        button: 'השווה חבילות'
      }
    },
    dashboard: {
      title: 'לוח בקרה',
      welcome: 'ברוכים הבאים للוח הבקרה שלכם',
      stats: {
        projects: 'פרויקטים פעילים',
        messages: 'הודעות',
        quotes: 'הצעות מחיר ממתינות'
      },
      recentProjects: 'פרויקטים אחרונים',
      notifications: 'התראות',
      cart: 'עגלה נוכחית'
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
