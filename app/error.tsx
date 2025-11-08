'use client'

import { useEffect } from 'react'
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Error logged for development - could be sent to monitoring service
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <ExclamationTriangleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Une erreur s'est produite
          </h1>
          <p className="text-gray-600 mb-4">
            Quelque chose s'est mal passé. Veuillez réessayer.
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 mb-4">
              Code d'erreur: {error.digest}
            </p>
          )}
        </div>
        
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          <ArrowPathIcon className="w-5 h-5" />
          Réessayer
        </button>
      </div>
    </div>
  )
}
