'use client'

import Link from 'next/link'
import { ReactNode, useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, LayoutGrid, Droplets, Sparkles, GraduationCap, Dog, Zap, Flower2, Hammer, ChevronRight } from 'lucide-react'

interface HeaderProps {
  showLoginLink?: boolean
  loginHref?: string
  rightElement?: ReactNode
  showSidebar?: boolean
  onSidebarToggle?: (isOpen: boolean) => void
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/all' },
  { name: 'How it Works', href: '/#how-it-works' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const categoryLinks = [
  { name: 'All Categories', id: 'all', icon: <LayoutGrid size={16} />, href: '/services/all' },
  { name: 'Home Repair', id: 'repairs', icon: <Hammer size={16} />, href: '/services/repairs' },
  { name: 'Plumbing', id: 'plumbing', icon: <Droplets size={16} />, href: '/services/plumbing' },
  { name: 'Cleaning', id: 'cleaning', icon: <Sparkles size={16} />, href: '/services/cleaning' },
  { name: 'Tutoring', id: 'tutoring', icon: <GraduationCap size={16} />, href: '/services/tutoring' },
  { name: 'Pet Care', id: 'pet-care', icon: <Dog size={16} />, href: '/services/pet-care' },
  { name: 'Electrical', id: 'electrical', icon: <Zap size={16} />, href: '/services/electrical' },
  { name: 'Gardening', id: 'gardening', icon: <Flower2 size={16} />, href: '/services/gardening' },
]

export default function Header({
  showLoginLink = true,
  loginHref = '/login',
  rightElement,
  showSidebar = false,
  onSidebarToggle
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  // Handle sidebar toggle
  const toggleSidebar = () => {
    const newState = !isSidebarOpen
    setIsSidebarOpen(newState)
    onSidebarToggle?.(newState)

    // Prevent body scroll when sidebar is open
    if (newState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Left section with menu and logo */}
            <div className="flex items-center gap-2">
              {/* Sidebar Toggle Button */}
              {showSidebar && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg text-gray-600 hover:text-cyan-600 hover:bg-gray-100 transition-colors lg:hidden"
                  aria-label="Toggle sidebar"
                >
                  <LayoutGrid size={20} />
                </button>
              )}

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  className="rounded-full"
                  src="/logo-removebg-preview.png"
                  width={48}
                  height={48}
                  alt="Logo"
                />
                <span className="text-xl font-bold text-gray-900 hidden sm:inline-block">
                  LocalService
                </span>
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
                  <span className="text-gray-600 hidden lg:inline text-sm">
                    Already have an account?
                  </span>
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
            <div className="md:hidden flex items-center gap-2">
              {showSidebar && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg text-gray-600 hover:text-cyan-600 hover:bg-gray-100 transition-colors"
                  aria-label="Toggle sidebar"
                >
                  <LayoutGrid size={20} />
                </button>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-cyan-600 hover:bg-gray-100 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Categories Dropdown */}
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
              >
                <span>Categories</span>
                <ChevronRight
                  size={16}
                  className={`transform transition-transform ${showCategories ? 'rotate-90' : ''}`}
                />
              </button>

              {/* Categories Submenu */}
              {showCategories && (
                <div className="pl-4 space-y-1 animate-in slide-in-from-left duration-200">
                  {categoryLinks.map((cat) => (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setShowCategories(false)
                      }}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-400">{cat.icon}</span>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Regular Navigation Links */}
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

              {/* Login Section */}
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

              {/* Custom Right Element */}
              {rightElement && (
                <div className="pt-4 pb-2 border-t border-gray-100 mt-2">
                  {rightElement}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Sidebar Overlay */}
      {showSidebar && isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-in fade-in duration-300"
            onClick={toggleSidebar}
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl animate-in slide-in-from-left duration-300 lg:hidden overflow-y-auto">
            <div className="p-6">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900">Categories</h3>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg text-gray-600 hover:text-cyan-600 hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Category Links */}
              <div className="space-y-1">
                {categoryLinks.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    onClick={toggleSidebar}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-all duration-200"
                  >
                    <span className="text-gray-400">{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>

              {/* Quick Filters Section */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  QUICK FILTERS
                </h4>
                <div className="space-y-2">
                  <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors">
                    <div className="w-5 h-5 border-2 border-gray-200 rounded-md" />
                    Verified Only
                  </button>
                  <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors">
                    <div className="w-5 h-5 border-2 border-gray-200 rounded-md" />
                    Open Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}