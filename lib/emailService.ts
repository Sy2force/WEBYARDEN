// Service d'envoi d'emails pour les devis
// Utilise EmailJS pour l'envoi côté client

interface EmailItem {
  service: {
    name: string;
    price: number;
  };
  quantity: number;
  totalPrice: number;
}

interface QuoteEmailData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  company?: string;
  items: EmailItem[];
  totalPrice: number;
  message?: string;
}

export const sendQuoteEmail = async (quoteData: QuoteEmailData) => {
  try {
    // Configuration EmailJS
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error('EmailJS configuration manquante');
    }
    
    // Préparer les données pour l'email
    const emailParams = {
      to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@webyarden.co.il',
      from_name: quoteData.clientName,
      from_email: quoteData.clientEmail,
      phone: quoteData.clientPhone,
      company: quoteData.company || 'Non spécifié',
      items_list: quoteData.items.map(item => 
        `- ${item.service.name} (Quantité: ${item.quantity}, Prix: ${item.totalPrice}₪)`
      ).join('\n'),
      total_price: `${quoteData.totalPrice}₪`,
      message: quoteData.message || 'Aucun message',
      date: new Date().toLocaleDateString('fr-FR'),
    };

    // Envoi avec EmailJS
    if (typeof window !== 'undefined' && (window as any).emailjs) {
      await (window as any).emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        emailParams,
        PUBLIC_KEY
      );
    } else {
      // Fallback pour environnement serveur
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        emailParams,
        PUBLIC_KEY
      );
    }

    // Envoyer une copie au client
    const clientEmailParams = {
      to_name: 'Client',
      to_email: quoteData.clientEmail,
      from_name: 'Web Yarden',
      total_price: emailParams.total_price,
    };

    return { success: true, message: 'Devis envoyé avec succès!' };
  } catch (error) {
    return { success: false, message: 'Erreur lors de l\'envoi du devis' };
  }
};

// Fonction pour installer EmailJS
export const setupEmailJS = () => {
  return `
Pour activer l'envoi d'emails:

1. Créez un compte sur https://www.emailjs.com
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email avec ces variables:
   - {{to_email}}
   - {{from_name}}
   - {{from_email}}
   - {{phone}}
   - {{company}}
   - {{items_list}}
   - {{total_price}}
   - {{message}}
   - {{date}}
4. Récupérez vos identifiants:
   - Service ID
   - Template ID
   - Public Key
5. Installez le package: npm install @emailjs/browser
6. Remplacez les identifiants dans ce fichier
`;
};
