'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  results?: Array<{
    value: string;
    metric: string;
  }>;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const categoryColors = {
    web: 'bg-blue-100 text-blue-800',
    ecommerce: 'bg-green-100 text-green-800',
    mobile: 'bg-purple-100 text-purple-800',
    design: 'bg-pink-100 text-pink-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Projet Vedette
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            categoryColors[project.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'
          }`}>
            {project.category === 'web' && 'Site Web'}
            {project.category === 'ecommerce' && 'E-commerce'}
            {project.category === 'mobile' && 'Mobile'}
            {project.category === 'design' && 'Design'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, i: number) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {project.results?.map((result, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-bold text-primary-500">
                {result.value}
              </div>
              <div className="text-xs text-gray-500">
                {result.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-center flex items-center justify-center"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
              Voir le projet
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center px-4"
              title="Voir le code source"
            >
              <CodeBracketIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
