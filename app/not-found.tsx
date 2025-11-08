import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page non trouvée
          </h2>
          <p className="text-gray-600">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <HomeIcon className="w-5 h-5" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
