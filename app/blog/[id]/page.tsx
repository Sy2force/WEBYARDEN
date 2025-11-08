'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ClockIcon, CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = {
    id: params.id,
    title: "Article de blog",
    content: "Contenu de l'article en cours de développement",
    author: "Web Yarden",
    date: "2024-01-01",
    readTime: "5 min",
    tags: ["développement", "web"],
    image: "/images/blog-placeholder.jpg"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-primary-600">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{post.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <UserIcon className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
              >
                <TagIcon className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">Image de l'article</span>
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed">
              <p className="text-xl mb-8 text-gray-600 font-medium">
                {post.content}
              </p>
              
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Section de l'article
              </h2>
              
              <p className="mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Partager cet article
              </h3>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  Twitter
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  WhatsApp
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Articles similaires
            </h2>
            <p className="text-gray-600">Articles en cours de développement</p>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Demander un devis
              </Link>
              <Link href="/contact" className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Nous contacter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
