'use client'


import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/components/LocalizedText'
import { useCartStore, CartItem } from '@/store/cartStore'
import { X, Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function CartDrawer() {
  const { t } = useTranslations()
  const { 
    items, 
    isOpen, 
    toggleCart, 
    removeItem, 
    updateQuantity, 
    clearCart,
    getTotalPrice,
    getTotalItems 
  } = useCartStore()

  const handleCheckout = () => {
    // Redirect to devis page with cart items
    const currentLocale = window.location.pathname.split('/')[1] || 'fr'
    window.location.href = `/${currentLocale}/devis`
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('cart.title')} ({getTotalItems()})
                </h2>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label={t('common.close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {t('cart.empty.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {t('cart.empty.description')}
                  </p>
                  <Button onClick={toggleCart} variant="outline">
                    {t('cart.empty.continue')}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                    >
                      {/* Image */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = '/images/services/default.jpg'
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {item.category}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-bold text-primary-600">
                            {formatPrice(item.price)}
                          </span>
                          <div className="flex items-center space-x-2">
                            {/* Quantity Controls */}
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                              disabled={item.quantity <= 1}
                              title={t('cart.decreaseQuantity')}
                              aria-label={t('cart.decreaseQuantity')}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                              title={t('cart.increaseQuantity')}
                              aria-label={t('cart.increaseQuantity')}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            {/* Remove Button */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors ml-2"
                              title={t('cart.removeItem')}
                              aria-label={t('cart.removeItem')}
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart */}
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="w-full text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-center py-2 transition-colors"
                    >
                      {t('cart.clearAll')}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-6 space-y-4">
                {/* Total */}
                <div className="flex items-center justify-between text-lg font-bold">
                  <span className="text-gray-900 dark:text-white">
                    {t('cart.total')}:
                  </span>
                  <span className="text-primary-600">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>

                {/* Checkout Button */}
                <Button 
                  onClick={handleCheckout}
                  size="lg"
                  className="w-full"
                >
                  {t('cart.checkout')}
                </Button>

                {/* Continue Shopping */}
                <Button 
                  onClick={toggleCart}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  {t('cart.continueShopping')}
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
