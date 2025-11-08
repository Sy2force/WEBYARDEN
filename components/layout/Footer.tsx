'use client';

import Link from 'next/link';
import { PhoneIcon, InstagramIcon, LinkedInIcon, FacebookIcon } from '../ui/PackIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WY</span>
              </div>
              <span className="text-xl font-bold">Web Yarden</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre partenaire digital en Israël. Nous accélérons votre visibilité en ligne avec des solutions créatives et performantes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="https://wa.me/972501234567" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">WhatsApp</span>
                <PhoneIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services?category=design" className="text-gray-300 hover:text-white transition-colors">Design</Link></li>
              <li><Link href="/services?category=social" className="text-gray-300 hover:text-white transition-colors">Réseaux Sociaux</Link></li>
              <li><Link href="/services?category=seo" className="text-gray-300 hover:text-white transition-colors">SEO</Link></li>
              <li><Link href="/services?category=ads" className="text-gray-300 hover:text-white transition-colors">Publicité</Link></li>
              <li><Link href="/services?category=ecommerce" className="text-gray-300 hover:text-white transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">📞 Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Tel Aviv / Jérusalem, Israël
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                +972 53 370 0551
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                webyarden@gmail.com
              </li>
              <li>
                <Link href="/devis" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors">
                  <span className="mr-2">📄</span>
                  Demandez votre devis gratuit dès aujourd'hui
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {currentYear} Web Yarden. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgv" className="text-gray-400 hover:text-white transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
