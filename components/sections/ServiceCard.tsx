'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from '@/components/LocalizedText'
import { useCartStore } from '@/store/cartStore'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { Service } from '@/lib/types'
import { Service as ServiceData } from '@/data/services'

interface ServiceCardProps {
  service: Service | ServiceData
  index?: number
  compact?: boolean
  showImage?: boolean
  showCartActions?: boolean
  linkToDetail?: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  index = 0, 
  compact = false,
  showImage = false,
  showCartActions = false,
  linkToDetail = false
}) => {
  const { t } = useTranslations()
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: service.id,
      title: 'name' in service ? service.name : t((service as ServiceData).titleKey),
      price: typeof service.price === 'number' ? service.price : (service.price as any).min || service.price,
      category: service.category,
      description: 'description' in service ? service.description : t((service as ServiceData).descriptionKey),
      delivery: service.delivery,
      image: service.image || ''
    })
  }
  
  const CardContent = () => (
    <Card
      variant="elevated"
      padding={compact ? 'sm' : 'md'}
      className="h-full flex flex-col group cursor-pointer hover:shadow-booking border border-gray-100 hover:border-primary-200 transition-all duration-300"
      data-testid={`service-card-${service.id}`}
    >
      {/* Service Image */}
      {showImage && service.image && (
        <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-600 overflow-hidden rounded-t-xl mb-4">
          <Image
            src={service.image}
            alt={'name' in service ? service.name : t((service as ServiceData).titleKey)}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {service.popular && (
            <div className="absolute top-4 right-4">
              <Badge variant="primary" size="sm">
                {t('services.card.popular')}
              </Badge>
            </div>
          )}
        </div>
      )}
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {!showImage && (
            <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
              {'icon' in service ? service.icon : '🎨'}
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors duration-200">
              {'name' in service ? service.name : t((service as ServiceData).titleKey)}
            </h3>
            {showImage && service.popular && (
              <Badge variant="primary" size="sm" className="absolute top-4 right-4 z-10">
                {t('services.card.popular')}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
        {'description' in service ? service.description : t((service as ServiceData).descriptionKey)}
      </p>

      {/* Features */}
      {!compact && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            {t('services.card.features')}
          </h4>
          <ul className="space-y-2">
            {('features' in service ? service.features : t((service as ServiceData).featuresKey).split(',')).slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg className="w-4 h-4 text-accent-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {typeof feature === 'string' ? feature.trim() : feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto">
        {/* Price and Delivery */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t('services.card.from')}
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {typeof service.price === 'number' ? (
                `${service.price.toLocaleString()}€`
              ) : service.price && typeof service.price === 'object' && 'min' in service.price ? (
                `${(service.price.min || 0).toLocaleString()}€${service.price.max && service.price.max > (service.price.min || 0) ? ` - ${service.price.max.toLocaleString()}€` : ''}`
              ) : (
                'Prix sur devis'
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t('services.card.delivery')}
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              {service.delivery}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {showCartActions ? (
            <>
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={() => handleAddToCart({} as React.MouseEvent)}
                data-testid={`add-to-cart-${service.id}`}
              >
                {t('services.card.addToCart')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="px-4"
                data-testid={`simulate-${service.id}`}
              >
                {t('services.card.simulate')}
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="w-full group-hover:bg-primary-400 group-hover:text-white group-hover:border-primary-400 transition-all duration-200"
              data-testid={`get-quote-${service.id}`}
            >
              {t('services.card.getQuote')}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      {linkToDetail && (service as any).slug ? (
        <Link href={`/services/${(service as any).slug}`} className="block h-full">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </motion.div>
  )
}

export default ServiceCard
