'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
// import { blogPosts } from '@/data/blog';
// import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ClockIcon, TagIcon } from '@heroicons/react/24/outline';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock blog data
  const blogPosts = [
    {
      id: '1',
      title: 'Guide complet du SEO en 2024',
      excerpt: 'Découvrez les meilleures pratiques SEO pour améliorer votre visibilité en ligne.',
      category: 'seo',
      author: 'Web Yarden',
      date: '2024-01-15',
      readTime: '8 min',
      featured: true,
      tags: ['SEO', 'Marketing']
    },
    {
      id: '2',
      title: 'Tendances design web 2024',
      excerpt: 'Les dernières tendances en matière de design web pour créer des sites modernes.',
      category: 'design',
      author: 'Web Yarden',
      date: '2024-01-10',
      readTime: '6 min',
      featured: true,
      tags: ['Design', 'UX']
    },
    {
      id: '3',
      title: 'Développement avec Next.js',
      excerpt: 'Comment créer des applications web performantes avec Next.js et React.',
      category: 'development',
      author: 'Web Yarden',
      date: '2024-01-05',
      readTime: '10 min',
      featured: false,
      tags: ['Next.js', 'React']
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les articles' },
    { id: 'seo', label: 'SEO' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Développement' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const filteredPosts = blogPosts.filter((post: any) => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter((post: any) => post.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Blog <span className="text-gradient">Web Yarden</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Conseils, stratégies et actualités du marketing digital en Israël
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Articles <span className="text-gradient">Vedettes</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4 text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span>{post.readTime} min</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary-500 hover:text-primary-600 font-medium"
                      >
                        Lire plus →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-primary-100 to-secondary-100"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    <span>{post.readTime} min</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center"
                  >
                    Lire l'article →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun article trouvé pour cette recherche.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Restez informé des dernières tendances
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Recevez nos meilleurs conseils marketing directement dans votre boîte mail
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Votre email..."
                className="flex-1 px-4 py-3 rounded-lg"
              />
              <button className="btn-white">
                S'abonner
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
