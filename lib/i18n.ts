import { useParams } from 'next/navigation'

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
    },
    header: {
      title: 'Web Yarden',
      subtitle: 'Agence Digitale Israël',
      getQuote: 'Obtenir un devis',
    },
    footer: {
      description: 'Votre partenaire digital en Israël pour booster votre présence en ligne et développer votre business.',
      quickLinks: 'Liens rapides',
      services: 'Services',
      contact: 'Contact',
      socialMedia: 'Réseaux sociaux',
      rights: 'Tous droits réservés',
    },
    home: {
      hero: {
        title: 'Votre Partenaire Digital en Israël',
        subtitle: 'Boostez votre présence en ligne avec nos solutions digitales sur mesure',
        cta: 'Commencer',
        ctaSecondary: 'Découvrir nos services',
      },
      features: {
        title: 'Pourquoi Choisir Web Yarden ?',
        subtitle: 'Nous combinons expertise technique et compréhension du marché israélien',
        item1: {
          title: 'Expertise Locale',
          description: 'Connaissance approfondie du marché israélien et des besoins spécifiques des entreprises locales.',
        },
        item2: {
          title: 'Technologies Modernes',
          description: 'Utilisation des dernières technologies et frameworks pour des solutions performantes.',
        },
        item3: {
          title: 'Support Multilingue',
          description: 'Solutions adaptées aux environnements multilingues avec support RTL pour l\'hébreu.',
        },
        item4: {
          title: 'Accompagnement Complet',
          description: 'De la conception au déploiement, nous vous accompagnons à chaque étape de votre projet.',
        },
      },
      portfolio: {
        title: 'Nos Dernières Réalisations',
        subtitle: 'Découvrez quelques projets qui illustrent notre savoir-faire',
        viewAll: 'Voir tous les projets',
      },
      testimonials: {
        title: 'Ce que disent nos clients',
        subtitle: 'Des retours authentiques de nos partenaires',
      },
      stats: {
        title: 'Nos Résultats en Chiffres',
        projects: 'Projets Réalisés',
        clients: 'Clients Satisfaits', 
        experience: 'Années d\'Expérience',
        satisfaction: 'Satisfaction Client',
      },
      cta: {
        title: 'Prêt à Transformer Votre Présence Digitale ?',
        subtitle: 'Parlons de votre projet et créons ensemble quelque chose d\'exceptionnel',
        button: 'Demander un devis gratuit',
        buttonSecondary: 'Nous contacter',
      },
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Solutions digitales complètes pour votre entreprise en Israël',
      webDev: {
        title: 'Développement Web',
        description: 'Sites web modernes et performants adaptés au marché israélien',
        features: ['Design responsive', 'SEO optimisé', 'Hébergement inclus', 'Support multilingue'],
        price: '₪ 8,000 - 25,000',
        duration: '4-8 semaines'
      },
      ecommerce: {
        title: 'E-commerce',
        description: 'Boutiques en ligne sécurisées avec paiements locaux',
        features: ['Intégration PayPal/Bit', 'Gestion des stocks', 'Analytics avancées', 'Mobile-first'],
        price: '₪ 15,000 - 40,000',
        duration: '6-10 semaines'
      },
      seo: {
        title: 'Référencement SEO',
        description: 'Optimisation pour les moteurs de recherche israéliens',
        features: ['Audit SEO complet', 'Optimisation technique', 'Contenu localisé', 'Suivi mensuel'],
        price: '₪ 3,500 - 8,000',
        duration: '3-6 mois'
      },
      webApp: {
        title: 'Applications Web',
        description: 'Applications sur mesure pour votre business',
        features: ['Interface intuitive', 'Base de données', 'API intégrées', 'Sécurité renforcée'],
        price: '₪ 20,000 - 60,000',
        duration: '8-16 semaines'
      },
      maintenance: {
        title: 'Maintenance & Support',
        description: 'Support technique et mises à jour régulières',
        features: ['Monitoring 24/7', 'Sauvegardes automatiques', 'Mises à jour sécurité', 'Support prioritaire'],
        price: '₪ 800 - 2,500/mois',
        duration: 'Continu'
      },
      consulting: {
        title: 'Conseil Digital',
        description: 'Stratégie digitale personnalisée pour votre croissance',
        features: ['Audit digital', 'Stratégie marketing', 'Roadmap technique', 'Formation équipe'],
        price: '₪ 5,000 - 15,000',
        duration: '2-4 semaines'
      }
    },
    projects: {
      title: 'Nos Projets',
      subtitle: 'Découvrez les réussites digitales que nous avons créées pour nos clients',
      viewProject: 'Voir le projet',
      allProjects: 'Tous nos projets',
      techStack: 'Technologies',
      category: 'Catégorie',
      completed: 'Réalisé en',
      portfolio: {
        ecommerceStore: {
          title: 'Boutique Mode Israélienne',
          description: 'E-commerce moderne avec intégration Bit et PayPal pour une marque de mode locale',
          category: 'E-commerce',
          year: '2024',
          tech: ['Next.js', 'Stripe', 'TailwindCSS'],
          results: '+150% ventes en ligne'
        },
        restaurantApp: {
          title: 'App Restaurant Tel Aviv',
          description: 'Application de commande en ligne avec menu multilingue et livraison',
          category: 'Application Web',
          year: '2024',
          tech: ['React', 'Node.js', 'MongoDB'],
          results: '500+ commandes/semaine'
        },
        corporateWebsite: {
          title: 'Site Corporate Tech',
          description: 'Site vitrine professionnel pour une startup tech israélienne',
          category: 'Site Web',
          year: '2023',
          tech: ['WordPress', 'Custom PHP'],
          results: '+200% leads qualifiés'
        },
        realEstatePortal: {
          title: 'Portail Immobilier',
          description: 'Plateforme de recherche immobilière avec géolocalisation et filtres avancés',
          category: 'Portail Web',
          year: '2023',
          tech: ['Vue.js', 'Laravel', 'MySQL'],
          results: '10,000+ visiteurs/mois'
        },
        healthcareApp: {
          title: 'App Santé Digitale',
          description: 'Application de prise de rendez-vous médical avec téléconsultation',
          category: 'Application',
          year: '2024',
          tech: ['React Native', 'Firebase'],
          results: '2,000+ utilisateurs'
        },
        educationPlatform: {
          title: 'Plateforme Éducative',
          description: 'LMS pour cours en ligne avec quiz interactifs et suivi de progression',
          category: 'E-learning',
          year: '2023',
          tech: ['Moodle', 'Custom CSS'],
          results: '5,000+ étudiants'
        }
      }
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Parlons de votre projet',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      company: 'Entreprise (optionnel)',
      phone: 'Téléphone (optionnel)',
      subject: 'Sujet',
      send: 'Envoyer le message',
      info: {
        title: 'Informations de Contact',
        address: 'Tel Aviv, Israël',
        email: 'contact@webyarden.co.il',
        phone: '+972 12 345 6789',
        hours: 'Lun-Ven: 9h00-18h00',
        socialTitle: 'Suivez-nous',
      },
    },
    about: {
      title: 'À Propos de Nous',
      subtitle: 'Votre partenaire digital en Israël pour faire croître votre entreprise',
      hero: {
        title: 'Nous Créons des Expériences Digitales Exceptionnelles',
        description: 'Web Yarden est une agence digitale spécialisée dans la création de solutions web innovantes en Israël. Nous transformons vos idées en réalité digitale.',
      },
      story: {
        title: 'Notre Histoire',
        content: 'Fondée par des passionnés du web, Web Yarden accompagne les entreprises israéliennes dans leur transformation digitale. Notre expertise technique combinée à notre compréhension du marché local nous permet de créer des solutions sur mesure qui génèrent des résultats concrets.',
      },
      mission: {
        title: 'Notre Mission',
        content: 'Démocratiser l\'excellence digitale en rendant les technologies web avancées accessibles à toutes les entreprises, des startups aux grandes corporations.',
      },
      values: {
        title: 'Nos Valeurs',
        innovation: {
          title: 'Innovation',
          description: 'Nous restons à la pointe des technologies pour offrir des solutions avant-gardistes.',
        },
        quality: {
          title: 'Qualité',
          description: 'Chaque ligne de code, chaque pixel est pensé pour l\'excellence.',
        },
        partnership: {
          title: 'Partenariat',
          description: 'Votre succès est notre priorité, nous travaillons main dans la main.',
        },
        transparency: {
          title: 'Transparence',
          description: 'Communication claire, processus transparent, résultats mesurables.',
        },
      },
      stats: {
        projects: 'Projets Réalisés',
        clients: 'Clients Satisfaits',
        experience: 'Années d\'Expérience',
        satisfaction: 'Satisfaction Client',
      },
      cta: {
        title: 'Prêt à Démarrer Votre Projet ?',
        subtitle: 'Discutons de vos besoins et créons quelque chose d\'exceptionnel ensemble.',
        button: 'Contactez-nous',
      },
    },
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
    },
    header: {
      title: 'Web Yarden',
      subtitle: 'Digital Agency Israel',
      getQuote: 'Get Quote',
    },
    footer: {
      description: 'Your digital partner in Israel to boost your online presence and grow your business.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      socialMedia: 'Social Media',
      rights: 'All rights reserved',
    },
    home: {
      hero: {
        title: 'Your Digital Partner in Israel',
        subtitle: 'Boost your online presence with our custom digital solutions',
        cta: 'Get Started',
        ctaSecondary: 'Discover our services',
      },
      features: {
        title: 'Why Choose Web Yarden?',
        subtitle: 'We combine technical expertise with deep understanding of the Israeli market',
        item1: {
          title: 'Local Expertise',
          description: 'Deep knowledge of the Israeli market and specific needs of local businesses.',
        },
        item2: {
          title: 'Modern Technologies',
          description: 'Using the latest technologies and frameworks for high-performance solutions.',
        },
        item3: {
          title: 'Multilingual Support',
          description: 'Solutions adapted to multilingual environments with RTL support for Hebrew.',
        },
        item4: {
          title: 'Complete Support',
          description: 'From design to deployment, we support you at every stage of your project.',
        },
      },
      portfolio: {
        title: 'Our Latest Work',
        subtitle: 'Discover some projects that showcase our expertise',
        viewAll: 'View all projects',
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Authentic feedback from our partners',
      },
      stats: {
        title: 'Our Results in Numbers',
        projects: 'Projects Completed',
        clients: 'Satisfied Clients',
        experience: 'Years of Experience',
        satisfaction: 'Client Satisfaction',
      },
      cta: {
        title: 'Ready to Transform Your Digital Presence?',
        subtitle: 'Let\'s talk about your project and create something exceptional together',
        button: 'Request free quote',
        buttonSecondary: 'Contact us',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete digital solutions for your success in Israel',
      webDev: {
        title: 'Web Development',
        description: 'Modern, responsive websites optimized for your business needs',
        features: ['Responsive design', 'Optimized performance', 'SEO integrated', 'Maintenance included'],
        price: 'From ₪8,000',
        duration: '2-4 weeks',
      },
      seo: {
        title: 'SEO Optimization',
        description: 'Position your website at the top of Google results',
        features: ['Complete SEO audit', 'Technical optimization', 'Content marketing', 'Monthly tracking'],
        price: 'From ₪2,500/month',
        duration: '3-6 months',
      },
      ecommerce: {
        title: 'E-commerce',
        description: 'High-performance online stores to maximize your sales',
        features: ['Custom design', 'Secure payment', 'Inventory management', 'Advanced analytics'],
        price: 'From ₪15,000',
        duration: '4-8 weeks',
      },
      branding: {
        title: 'Branding & Design',
        description: 'Strong visual identity to make a lasting impression',
        features: ['Professional logo', 'Brand guidelines', 'Marketing materials', 'Brand guide'],
        price: 'From ₪4,000',
        duration: '1-3 weeks',
      },
      marketing: {
        title: 'Digital Marketing',
        description: 'Marketing strategies to grow your audience',
        features: ['Google Ads', 'Social Media', 'Email marketing', 'ROI analysis'],
        price: 'From ₪3,500/month',
        duration: 'Ongoing',
      },
      consulting: {
        title: 'Digital Consulting',
        description: 'Strategic guidance for your digital transformation',
        features: ['Digital audit', 'Custom strategy', 'Team training', 'Monthly follow-up'],
        price: 'From ₪1,200/hour',
        duration: 'Custom',
      },
    },
    projects: {
      title: 'Our Work',
      subtitle: 'Discover some projects that showcase our expertise',
      categories: {
        all: 'All',
        web: 'Websites',
        ecommerce: 'E-commerce',
        mobile: 'Applications',
        branding: 'Branding',
      },
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
    },
    about: {
      title: 'About Us',
      subtitle: 'Your digital partner in Israel to grow your business',
      hero: {
        title: 'We Create Exceptional Digital Experiences',
        description: 'Web Yarden is a digital agency specialized in creating innovative web solutions in Israel. We transform your ideas into digital reality.',
      },
      story: {
        title: 'Our Story',
        content: 'Founded by web enthusiasts, Web Yarden supports Israeli businesses in their digital transformation. Our technical expertise combined with our understanding of the local market allows us to create tailored solutions that generate concrete results.',
      },
      mission: {
        title: 'Our Mission',
        content: 'Democratize digital excellence by making advanced web technologies accessible to all businesses, from startups to large corporations.',
      },
      values: {
        title: 'Our Values',
        innovation: {
          title: 'Innovation',
          description: 'We stay at the forefront of technology to offer cutting-edge solutions.',
        },
        quality: {
          title: 'Quality',
          description: 'Every line of code, every pixel is designed for excellence.',
        },
        partnership: {
          title: 'Partnership',
          description: 'Your success is our priority, we work hand in hand.',
        },
        transparency: {
          title: 'Transparency',
          description: 'Clear communication, transparent process, measurable results.',
        },
      },
      stats: {
        projects: 'Projects Completed',
        clients: 'Satisfied Clients',
        experience: 'Years of Experience',
        satisfaction: 'Client Satisfaction',
      },
      cta: {
        title: 'Ready to Start Your Project?',
        subtitle: 'Let\'s discuss your needs and create something exceptional together.',
        button: 'Contact Us',
      },
    },
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
    },
    header: {
      title: 'ווב יארדן',
      subtitle: 'סוכנות דיגיטלית בישראל',
      getQuote: 'קבל הצעת מחיר',
    },
    footer: {
      description: 'השותף הדיגיטלי שלך בישראל להגברת הנוכחות המקוונת ופיתוח העסק שלך.',
      quickLinks: 'קישורים מהירים',
      services: 'שירותים',
      contact: 'צור קשר',
      socialMedia: 'רשתות חברתיות',
      rights: 'כל הזכויות שמורות',
    },
    home: {
      hero: {
        title: 'השותף הדיגיטלי שלכם בישראל',
        subtitle: 'חזקו את הנוכחות הדיגיטלית שלכם עם פתרונות מותאמים אישית',
        cta: 'להתחיל',
        ctaSecondary: 'גלו את השירותים שלנו',
      },
      features: {
        title: 'למה לבחור בויב ירדן?',
        subtitle: 'אנו משלבים מומחיות טכנית עם הבנה עמוקה של השוק הישראלי',
        item1: {
          title: 'מומחיות מקומית',
          description: 'ידע עמוק של השוק הישראלי והצרכים המיוחדים של עסקים מקומיים.',
        },
        item2: {
          title: 'טכנולוגיות מתקדמות',
          description: 'שימוש בטכנולוגיות ופריימוורקים חדישים לפתרונות ביצועים גבוהים.',
        },
        item3: {
          title: 'תמיכה רב-לשונית',
          description: 'פתרונות מותאמים לסביבות רב-לשוניות עם תמיכה RTL לעברית.',
        },
        item4: {
          title: 'תמיכה מלאה',
          description: 'מעיצוב ועד פריסה, אנו תומכים בכם בכל שלב של הפרויקט.',
        },
      },
      portfolio: {
        title: 'העבודות האחרונות שלנו',
        subtitle: 'גלו כמה פרויקטים המדגימים את המומחיות שלנו',
        viewAll: 'ראו את כל הפרויקטים',
      },
      testimonials: {
        title: 'מה אומרים הלקוחות שלנו',
        subtitle: 'משוב אמיתי מהשותפים שלנו',
      },
      stats: {
        title: 'התוצאות שלנו במספרים',
        projects: 'פרויקטים שהושלמו',
        clients: 'לקוחות מרוצים',
        experience: 'שנות ניסיון',
        satisfaction: 'שביעות רצון לקוחות',
      },
      cta: {
        title: 'מוכנים לשנות את הנוכחות הדיגיטלית שלכם?',
        subtitle: 'בואו נדבר על הפרויקט שלכם וניצור משהו יוצא דופן יחד',
        button: 'בקשו הצעת מחיר חינם',
        buttonSecondary: 'צרו קשר',
      },
    },
    services: {
      title: 'השירותים שלנו',
      subtitle: 'פתרונות דיגיטליים מלאים להצלחתכם בישראל',
      webDev: {
        title: 'פיתוח אתרים',
        description: 'אתרים מודרניים, רספונסיביים ומותאמים לצרכי העסק שלכם',
        features: ['עיצוב רספונסיבי', 'ביצועים מותאמים', 'קידום משולב', 'תחזוקה כלולה'],
        price: 'החל מ- ₪8,000',
        duration: '2-4 שבועות',
      },
      seo: {
        title: 'קידום אתרים',
        description: 'מקמו את האתר שלכם בראש תוצאות גוגל',
        features: ['ביקורת קידום מלאה', 'אופטימיזציה טכנית', 'שיווק תוכן', 'מעקב חודשי'],
        price: 'החל מ- ₪2,500/חודש',
        duration: '3-6 חודשים',
      },
      ecommerce: {
        title: 'מסחר אלקטרוני',
        description: 'חנויות מקוונות יעילות למקסום המכירות שלכם',
        features: ['עיצוב מותאם אישית', 'תשלום מאובטח', 'ניהול מלאי', 'אנליטיקה מתקדמת'],
        price: 'החל מ- ₪15,000',
        duration: '4-8 שבועות',
      },
      branding: {
        title: 'מיתוג ועיצוב',
        description: 'זהות חזותית חזקה לרושם מתמשך',
        features: ['לוגו מקצועי', 'מדריך מותג', 'חומרי שיווק', 'ספר מותג'],
        price: 'החל מ- ₪4,000',
        duration: '1-3 שבועות',
      },
      marketing: {
        title: 'שיווק דיגיטלי',
        description: 'אסטרטגיות שיווק להגדלת הקהל שלכם',
        features: ['פרסומי גוגל', 'רשתות חברתיות', 'שיווק במייל', 'ניתוח תשואה'],
        price: 'החל מ- ₪3,500/חודש',
        duration: 'מתמשך',
      },
      consulting: {
        title: 'ייעוץ דיגיטלי',
        description: 'הדרכה אסטרטגית לטרנספורמציה הדיגיטלית שלכם',
        features: ['ביקורת דיגיטלית', 'אסטרטגיה מותאמת', 'הכשרת צוות', 'מעקב חודשי'],
        price: 'החל מ- ₪1,200/שעה',
        duration: 'מותאם אישית',
      },
    },
    projects: {
      title: 'הפרויקטים שלנו',
      subtitle: 'גלו כמה פרויקטים שמציגים את המומחיות שלנו',
      categories: {
        all: 'הכל',
        web: 'אתרים',
        ecommerce: 'מסחר אלקטרוני',
        mobile: 'אפליקציות',
        branding: 'מיתוג',
      },
    },
    contact: {
      title: 'צרו קשר',
      name: 'שם',
      email: 'אימייל',
      message: 'הודעה',
      send: 'שלח',
    },
    about: {
      title: 'אודותינו',
      subtitle: 'השותף הדיגיטלי שלכם בישראל להצמחת העסק',
      hero: {
        title: 'אנו יוצרים חוויות דיגיטליות יוצאות דופן',
        description: 'ויב ירדן הוא סוכנות דיגיטלית המתמחה ביצירת פתרונות ווב חדשניים בישראל. אנו הופכים את הרעיונות שלכם למציאות דיגיטלית.',
      },
      story: {
        title: 'הסיפור שלנו',
        content: 'נוסדה על ידי חובבי ווב, ויב ירדן תומכת בעסקים ישראליים בהתמרה הדיגיטלית שלהם. המומחיות הטכנית שלנו בשילוב עם ההבנה שלנו את השוק המקומי מאפשרת לנו ליצור פתרונות מותאמים המניבים תוצאות קונקרטיות.',
      },
      mission: {
        title: 'המשימה שלנו',
        content: 'דמוקרטיזציה של מצוינות דיגיטלית על ידי הפיכת טכנולוגיות ווב מתקדמות לנגישות לכל העסקים, מסטארטאפים ועד תאגידים גדולים.',
      },
      values: {
        title: 'הערכים שלנו',
        innovation: {
          title: 'חדשנות',
          description: 'אנו נשארים בחזית הטכנולוגיה כדי להציע פתרונות חדישים.',
        },
        quality: {
          title: 'איכות',
          description: 'כל שורת קוד, כל פיקסל מתוכנן למצוינות.',
        },
        partnership: {
          title: 'שותפות',
          description: 'ההצלחה שלכם היא העדיפות שלנו, אנו עובדים יד ביד.',
        },
        transparency: {
          title: 'שקיפות',
          description: 'תקשורת ברורה, תהליך שקוף, תוצאות מדידות.',
        },
      },
      stats: {
        projects: 'פרויקטים שהושלמו',
        clients: 'לקוחות מרוצים',
        experience: 'שנות ניסיון',
        satisfaction: 'שביעות רצון לקוחות',
      },
      cta: {
        title: 'מוכנים להתחיל את הפרויקט שלכם?',
        subtitle: 'בואו נדון בצרכים שלכם וניצור משהו יוצא דופן יחד.',
        button: 'צרו קשר',
      },
    },
  },
}

export function useTranslations() {
  const params = useParams()
  const locale = (params?.locale as string) || 'fr'

  const t = (key: string): string | string[] => {
    const keys = key.split('.')
    let value: any = translations[locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return value || key
  }

  return { t, locale }
}

export const getStaticTranslations = (locale: string) => {
  return translations[locale] || translations.fr
}
