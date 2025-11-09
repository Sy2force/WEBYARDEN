'use client'

import React, { useState } from 'react'
import { pdf } from '@react-pdf/renderer'
import { QuotePDF } from '@/lib/pdf'
import { useCartStore } from '@/store/cartStore'

interface PdfDownloadButtonProps {
  clientInfo: {
    name: string
    email: string
    company?: string
    phone?: string
  }
  className?: string
  children?: React.ReactNode
}

export default function PdfDownloadButton({ clientInfo, className = '', children }: PdfDownloadButtonProps) {
  const { items } = useCartStore()
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    if (items.length === 0) {
      alert('Votre panier est vide. Ajoutez des services avant de générer un devis.')
      return
    }

    if (!clientInfo.name || !clientInfo.email) {
      alert('Veuillez remplir au minimum votre nom et email.')
      return
    }

    setIsGenerating(true)

    try {
      const quoteNumber = `WY-${Date.now().toString().slice(-6)}`
      const date = new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      const doc = <QuotePDF 
        items={items} 
        clientInfo={clientInfo}
        quoteNumber={quoteNumber}
        date={date}
      />

      const asPdf = pdf(doc)
      const blob = await asPdf.toBlob()
      
      // Create download link
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `Devis_WebYarden_${quoteNumber}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      // Optional: Clear cart after successful PDF generation
      // clearCart()
      
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error)
      alert('Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating || items.length === 0}
      className={`
        inline-flex items-center justify-center px-6 py-3 
        bg-gradient-to-r from-green-600 to-emerald-600 
        text-white font-semibold rounded-lg
        hover:from-green-700 hover:to-emerald-700 
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200 shadow-lg hover:shadow-xl
        ${className}
      `}
    >
      {isGenerating ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Génération...
        </>
      ) : (
        <>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {children || 'Télécharger le PDF'}
        </>
      )}
    </button>
  )
}
