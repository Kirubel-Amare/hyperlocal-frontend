'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  showLoginLink?: boolean
  loginHref?: string
  rightElement?: ReactNode
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'How it Works', href: '/#how-it-works' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header({
  showLoginLink = true,
  loginHref = '/login',
  rightElement
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/">
              <Image
                className="rounded-full"
                src="/logo-removebg-preview.png"
                width={80}
                height={80}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-cyan-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side elements (Login / Custom) */}
          <div className="hidden md:flex items-center gap-4">
            {rightElement ? (
              rightElement
            ) : showLoginLink ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-600 hidden lg:inline text-sm">Already have an account?</span>
                <Link
                  href={loginHref}
                  className="px-5 py-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 font-medium transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  Log in
                </Link>
              </div>
            ) : null}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-cyan-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {showLoginLink && !rightElement && (
              <div className="pt-4 pb-2 border-t border-gray-100 mt-2">
                <Link
                  href={loginHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-md bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors"
                >
                  Log in
                </Link>
              </div>
            )}
            {rightElement && (
              <div className="pt-4 pb-2 border-t border-gray-100 mt-2">
                {rightElement}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}