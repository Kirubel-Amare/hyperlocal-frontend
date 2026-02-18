import Link from 'next/link'
import { Globe } from 'lucide-react'

export default function LandingHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-gray-900">LocalExpert</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-700 hover:text-cyan-600 font-medium text-sm transition-colors">
            Find Services
          </Link>
          <Link href="#" className="text-gray-700 hover:text-cyan-600 font-medium text-sm transition-colors">
            List a Service
          </Link>
          <Link href="#" className="text-gray-700 hover:text-cyan-600 font-medium text-sm transition-colors">
            How it Works
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <Globe size={18} />
            <span className="text-sm font-medium">EN</span>
          </button>
          <Link href="/login" className="text-gray-700 hover:text-cyan-600 font-medium text-sm transition-colors">
            Login
          </Link>
          <Link href="/register" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}
