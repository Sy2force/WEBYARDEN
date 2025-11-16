'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { ExternalLink, Calendar } from 'lucide-react'
import type { Project } from '@/lib/types'
import { useTranslations } from '@/components/LocalizedText'

interface ProjectCardProps {
  project: Project
  index?: number
  layout?: 'grid' | 'featured' | 'compact'
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
  layout = 'grid'
}) => {
  const { t } = useTranslations()

  const isGrid = layout === 'grid'
  const isFeatured = layout === 'featured'
  const isCompact = layout === 'compact'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`h-full ${isFeatured ? 'col-span-2' : ''}`}
    >
      <Card
        variant="elevated"
        padding={isCompact ? 'sm' : 'md'}
        className="h-full flex flex-col group cursor-pointer hover:shadow-booking border border-gray-100 hover:border-primary-200 transition-all duration-300 overflow-hidden"
        data-testid={`project-card-${project.id || index}`}
      >
        {/* Project Image */}
        <div className="relative mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={192}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center">
              <div className="text-6xl opacity-20">
                {project.category === 'ecommerce' ? '🛍️' : 
                 project.category === 'corporate' ? '🏢' : 
                 project.category === 'mobile' ? '📱' : 
                 project.category === 'webapp' ? '💻' : '🎨'}
              </div>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="primary" size="sm" className="backdrop-blur-sm bg-white/90">
              {project.category}
            </Badge>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="warning" size="sm" className="backdrop-blur-sm bg-yellow-500/90 text-white">
                ⭐ {t('featured')}
              </Badge>
            </div>
          )}

          {/* Project Stats Overlay */}
          {!isCompact && project.results.length > 0 && (
            <div className="absolute bottom-3 left-3 right-3 bg-black/50 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L9 11.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    {project.results[0]?.value || 'N/A'}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {project.client}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
              {project.title}
            </h3>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span>{project.client}</span>
              <span>{project.year}</span>
            </div>

            {!isCompact && (
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            )}
          </div>

          {/* Technologies */}
          {!isCompact && project.technologies.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" size="sm" className="mr-2">
                  {project.sector}
                </Badge>
                <Badge variant="secondary" size="sm">
                  {project.year}
                </Badge>
                {project.technologies?.slice(0, isFeatured ? 6 : 4).map((tech: string, idx: number) => (
                  <Badge key={idx} variant="secondary" size="sm" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies && project.technologies.length > (isFeatured ? 6 : 4) && (
                  <Badge key="more" variant="secondary" size="sm" className="text-xs">
                    +{project.technologies.length - (isFeatured ? 6 : 4)}
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Results Preview */}
          {!isCompact && project.results.length > 0 && (
            <div className="mb-4 flex-1">
              <div className="grid grid-cols-2 gap-2 text-sm">
                {project.results && project.results.map((result, idx: number) => (
                  <div key={idx} className={`text-center p-2 rounded-lg ${
                    idx === 0 ? 'bg-accent-50 dark:bg-accent-900/20' :
                    idx === 1 ? 'bg-primary-50 dark:bg-primary-900/20' :
                    idx === 2 ? 'bg-secondary-50 dark:bg-secondary-900/20' :
                    'bg-yellow-50 dark:bg-yellow-900/20'
                  }`}>
                    <div className={`text-lg font-bold ${
                      idx === 0 ? 'text-accent-600 dark:text-accent-400' :
                      idx === 1 ? 'text-primary-600 dark:text-primary-400' :
                      idx === 2 ? 'text-secondary-600 dark:text-secondary-400' :
                      'text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {result.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full group-hover:bg-primary-400 group-hover:text-white group-hover:border-primary-400 transition-all duration-200"
              data-testid={`project-view-button-${project.id || index}`}
            >
              {t('viewProject')}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
