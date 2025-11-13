'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { useTranslations } from '@/components/LocalizedText'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
}

interface PaymentData {
  name: string
  email: string
  phone: string
  company: string
  address: string
  city: string
  zipCode: string
  paymentMethod: 'card' | 'bank' | 'paypal'
  cardNumber: string
  expiryDate: string
  cvv: string
  termsAccepted: boolean
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const { t } = useTranslations()
  const { items, getTotalPrice, clearCart } = useCartStore()
  
  const [paymentData, setPaymentData] = useState<PaymentData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    termsAccepted: false
  })
  
  const [isProcessing, setIsProcessing] = useState(false)
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details')

  const handleInputChange = (field: keyof PaymentData, value: string | boolean) => {
    setPaymentData(prev => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (step === 'details') {
      setStep('payment')
    } else if (step === 'payment') {
      handlePayment()
    }
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would integrate with actual payment provider
      console.log('Payment processed:', {
        items,
        totalPrice: getTotalPrice(),
        paymentData
      })
      
      setStep('confirmation')
      setTimeout(() => {
        clearCart()
        onClose()
        setStep('details')
      }, 3000)
      
    } catch (error) {
      console.error('Payment failed:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const isDetailsValid = paymentData.name && paymentData.email && paymentData.phone
  const isPaymentValid = paymentData.paymentMethod === 'card' ? 
    (paymentData.cardNumber && paymentData.expiryDate && paymentData.cvv) : true

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <div>
                  <h2 className="text-2xl font-bold">{t('payment.title')}</h2>
                  <p className="opacity-90">{items.length} {items.length > 1 ? t('cart.items') : t('cart.item')} - ₪ {getTotalPrice().toLocaleString()}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title={t('payment.cancel')}
                  aria-label={t('payment.cancel')}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Progress Steps */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-center space-x-4">
                  {['details', 'payment', 'confirmation'].map((stepName, index) => (
                    <div key={stepName} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step === stepName ? 'bg-indigo-600 text-white' :
                        ['details', 'payment'].indexOf(step) > index ? 'bg-green-500 text-white' :
                        'bg-gray-200 text-gray-500'
                      }`}>
                        {['details', 'payment'].indexOf(step) > index ? '✓' : index + 1}
                      </div>
                      {index < 2 && <div className={`w-16 h-1 mx-2 ${
                        ['details', 'payment'].indexOf(step) > index ? 'bg-green-500' : 'bg-gray-200'
                      }`} />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {step === 'details' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="grid lg:grid-cols-2 gap-8"
                  >
                    {/* Personal Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900">{t('payment.personalDetails')}</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('payment.fullName')} *
                          </label>
                          <input
                            type="text"
                            value={paymentData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder={t('payment.fullNamePlaceholder')}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('payment.email')} *
                          </label>
                          <input
                            type="email"
                            value={paymentData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('payment.phone')} *
                          </label>
                          <input
                            type="tel"
                            value={paymentData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="+972-XX-XXX-XXXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('payment.company')}
                          </label>
                          <input
                            type="text"
                            value={paymentData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder={t('payment.companyPlaceholder')}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('payment.address')}
                        </label>
                        <input
                          type="text"
                          value={paymentData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder={t('payment.addressPlaceholder')}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('payment.city')}
                          </label>
                          <input
                            type="text"
                            value={paymentData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder={t('payment.cityPlaceholder')}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('payment.zipCode')}
                          </label>
                          <input
                            type="text"
                            value={paymentData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="12345"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('payment.orderSummary')}</h3>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                            <div>
                              <h4 className="font-medium text-gray-900">{item.title}</h4>
                              <p className="text-sm text-gray-500">{item.category}</p>
                            </div>
                            <span className="font-semibold">₪ {item.price.toLocaleString()}</span>
                          </div>
                        ))}
                        <div className="border-t border-gray-300 pt-4">
                          <div className="flex justify-between items-center text-xl font-bold">
                            <span>{t('payment.total')}</span>
                            <span className="text-green-600">₪ {getTotalPrice().toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 'payment' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-2xl mx-auto space-y-6"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">{t('payment.paymentMethod')}</h3>
                    
                    {/* Payment Method Selection */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: 'card', name: t('payment.creditCard'), icon: '💳' },
                        { id: 'bank', name: t('payment.bankTransfer'), icon: '🏦' },
                        { id: 'paypal', name: 'PayPal', icon: '🟦' }
                      ].map((method) => (
                        <label key={method.id} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          paymentData.paymentMethod === method.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={paymentData.paymentMethod === method.id}
                            onChange={(e) => handleInputChange('paymentMethod', e.target.value as 'card' | 'bank' | 'paypal')}
                            className="sr-only"
                          />
                          <div className="text-center">
                            <div className="text-2xl mb-2">{method.icon}</div>
                            <div className="text-sm font-medium">{method.name}</div>
                          </div>
                        </label>
                      ))}
                    </div>

                    {/* Card Details */}
                    {paymentData.paymentMethod === 'card' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-4"
                      >
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('payment.cardNumber')} *
                          </label>
                          <input
                            type="text"
                            value={paymentData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              {t('payment.expiryDate')} *
                            </label>
                            <input
                              type="text"
                              value={paymentData.expiryDate}
                              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              value={paymentData.cvv}
                              onChange={(e) => handleInputChange('cvv', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              placeholder="123"
                              maxLength={4}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Bank Transfer Info */}
                    {paymentData.paymentMethod === 'bank' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-blue-50 p-4 rounded-xl"
                      >
                        <h4 className="font-medium text-blue-900 mb-2">{t('payment.bankDetails')}</h4>
                        <div className="text-sm text-blue-800 space-y-1">
                          <p><strong>Bank:</strong> Bank Leumi</p>
                          <p><strong>Account:</strong> 12-345-6789</p>
                          <p><strong>Branch:</strong> 123</p>
                          <p><strong>IBAN:</strong> IL62 0108 1200 0000 1234 567</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Terms */}
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={paymentData.termsAccepted}
                        onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                        className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-600">
                        {t('payment.termsText')} <a href="#" className="text-indigo-600 underline">{t('payment.termsLink')}</a>
                      </span>
                    </label>
                  </motion.div>
                )}

                {step === 'confirmation' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('payment.success')}</h3>
                    <p className="text-gray-600 mb-4">{t('payment.successMessage')}</p>
                    <p className="text-sm text-gray-500">{t('payment.redirecting')}</p>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              {step !== 'confirmation' && (
                <div className="border-t border-gray-200 p-6">
                  <div className="flex justify-between">
                    <button
                      onClick={step === 'payment' ? () => setStep('details') : onClose}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                    >
                      {step === 'payment' ? t('payment.back') : t('payment.cancel')}
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={
                        isProcessing ||
                        (step === 'details' && !isDetailsValid) ||
                        (step === 'payment' && (!isPaymentValid || !paymentData.termsAccepted))
                      }
                      className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          <span>{t('payment.processing')}</span>
                        </div>
                      ) : (
                        step === 'details' ? t('payment.continue') : t('payment.pay')
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
