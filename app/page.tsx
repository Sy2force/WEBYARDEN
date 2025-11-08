// import Layout from '@/components/layout/Layout';
// import HeroSection from '@/components/home/HeroSection';
// import FeaturedServices from '@/components/home/FeaturedServices';
// import StatsSection from '@/components/home/StatsSection';
// import TestimonialsSection from '@/components/home/TestimonialsSection';
// import NewsletterSignup from '@/components/newsletter/NewsletterSignup';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Agence Digitale <span className="text-gradient">Web Yarden</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Votre partenaire digital en Israël pour booster votre présence en ligne
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/devis" className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Demander un devis
              </a>
              <a href="/services" className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Nos services
              </a>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nos <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des solutions digitales complètes pour votre entreprise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Développement Web</h3>
                <p className="text-gray-600">Sites web modernes et responsives</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce</h3>
                <p className="text-gray-600">Boutiques en ligne performantes</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">SEO & Marketing</h3>
                <p className="text-gray-600">Optimisation et visibilité</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contactez-nous pour discuter de vos besoins
            </p>
            <a href="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Nous contacter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
