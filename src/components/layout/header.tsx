'use client'

import Link from 'next/link'
import { ReactNode, useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Menu, 
  X, 
  LayoutGrid, 
  Droplets, 
  Sparkles, 
  GraduationCap, 
  Dog, 
  Zap, 
  Flower2, 
  Hammer, 
  ChevronRight,
  Search,
  User,
  LogIn,
  Home,
  Info,
  Phone,
  HelpCircle,
  Briefcase
} from 'lucide-react'

interface HeaderProps {
  showLoginLink?: boolean
  loginHref?: string
  rightElement?: ReactNode
  showSidebar?: boolean
  onSidebarToggle?: (isOpen: boolean) => void
  variant?: 'default' | 'transparent' | 'colored'
}

const navLinks = [
  { name: 'Home', href: '/', icon: <Home size={16} /> },
  { name: 'Services', href: '/services/all', icon: <Briefcase size={16} /> },
  { name: 'How it Works', href: '/#how-it-works', icon: <Info size={16} /> },
  { name: 'FAQ', href: '/#faq', icon: <HelpCircle size={16} /> },
  { name: 'About', href: '/about', icon: <Info size={16} /> },
  { name: 'Contact', href: '/contact', icon: <Phone size={16} /> },
]

const categoryLinks = [
  { name: 'All Categories', id: 'all', icon: <LayoutGrid size={18} />, href: '/services/all', color: 'from-gray-500 to-gray-600' },
  { name: 'Home Repair', id: 'repairs', icon: <Hammer size={18} />, href: '/services/repairs', color: 'from-amber-500 to-orange-500' },
  { name: 'Plumbing', id: 'plumbing', icon: <Droplets size={18} />, href: '/services/plumbing', color: 'from-blue-500 to-cyan-500' },
  { name: 'Cleaning', id: 'cleaning', icon: <Sparkles size={18} />, href: '/services/cleaning', color: 'from-emerald-500 to-teal-500' },
  { name: 'Tutoring', id: 'tutoring', icon: <GraduationCap size={18} />, href: '/services/tutoring', color: 'from-purple-500 to-pink-500' },
  { name: 'Pet Care', id: 'pet-care', icon: <Dog size={18} />, href: '/services/pet-care', color: 'from-amber-500 to-yellow-500' },
  { name: 'Electrical', id: 'electrical', icon: <Zap size={18} />, href: '/services/electrical', color: 'from-yellow-500 to-orange-500' },
  { name: 'Gardening', id: 'gardening', icon: <Flower2 size={18} />, href: '/services/gardening', color: 'from-green-500 to-emerald-500' },
]

export default function Header({
  showLoginLink = true,
  loginHref = '/login',
  rightElement,
  showSidebar = false,
  onSidebarToggle,
  variant = 'default'
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle sidebar toggle
  const toggleSidebar = () => {
    const newState = !isSidebarOpen
    setIsSidebarOpen(newState)
    onSidebarToggle?.(newState)

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

  // Header variants
  const getHeaderStyles = () => {
    if (variant === 'transparent' && !isScrolled) {
      return 'bg-transparent border-transparent shadow-none'
    }
    return 'bg-white/90 backdrop-blur-xl border-gray-100/80 shadow-lg shadow-gray-200/20'
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${getHeaderStyles()}`}>
        {/* Top Bar with subtle gradient */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
        
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Left section with menu and logo */}
            <div className="flex items-center gap-3">
              {/* Sidebar Toggle Button with animation */}
              {showSidebar && (
                <button
                  onClick={toggleSidebar}
                  className="relative p-2.5 rounded-xl text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300 lg:hidden group"
                  aria-label="Toggle sidebar"
                >
                  <div className="absolute inset-0 rounded-xl bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <LayoutGrid size={22} className="relative z-10" />
                </button>
              )}

              {/* Logo with hover effect */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <Image
                    className="rounded-full relative z-10 transition-transform duration-300 group-hover:scale-110"
                    src="/logo-removebg-preview.png"
                    width={48}
                    height={48}
                    alt="Logo"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent hidden sm:inline-block group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                  LocalService
                </span>
              </Link>
            </div>

            {/* Desktop Navigation with icons */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setActiveLink(link.name)}
                  onMouseLeave={() => setActiveLink('')}
                  className="relative px-4 py-2 rounded-xl text-gray-600 hover:text-cyan-600 font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-gray-400 group-hover:text-cyan-500 transition-colors duration-300">
                      {link.icon}
                    </span>
                    {link.name}
                  </span>
                  {activeLink === link.name && (
                    <span className="absolute inset-0 bg-cyan-50 rounded-xl animate-in fade-in zoom-in-95 duration-300" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side elements */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search Button */}
              <button className="p-2.5 rounded-xl text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300 group">
                <Search size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </button>

              {rightElement ? (
                rightElement
              ) : showLoginLink ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 hidden lg:inline text-sm">
                    Ready to start?
                  </span>
                  <Link
                    href={loginHref}
                    className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-xl hover:shadow-cyan-200/50 hover:scale-105 active:scale-95 group overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <LogIn size={16} />
                      Log in
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              ) : null}
            </div>

            {/* Mobile menu buttons */}
            <div className="md:hidden flex items-center gap-2">
              {/* Search Button */}
              <button className="p-2.5 rounded-xl text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300">
                <Search size={20} />
              </button>

              {showSidebar && (
                <button
                  onClick={toggleSidebar}
                  className="p-2.5 rounded-xl text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300"
                  aria-label="Toggle sidebar"
                >
                  <LayoutGrid size={20} />
                </button>
              )}
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2.5 rounded-xl text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 animate-in spin-in duration-300" />
                ) : (
                  <Menu className="h-6 w-6 animate-in fade-in duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with animations */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-500">
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
              {/* User Profile Section */}
              <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <User size={24} className="text-cyan-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Guest User</h3>
                    <p className="text-sm text-gray-500">Sign in for better experience</p>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-2">
                {/* Categories Dropdown with animation */}
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl bg-gray-50 text-gray-900 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 group"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <LayoutGrid size={18} className="text-cyan-600" />
                    Browse Categories
                  </span>
                  <ChevronRight
                    size={18}
                    className={`transform transition-all duration-300 ${showCategories ? 'rotate-90 text-cyan-600' : 'text-gray-400 group-hover:text-cyan-600'}`}
                  />
                </button>

                {/* Categories Submenu with grid layout */}
                {showCategories && (
                  <div className="grid grid-cols-2 gap-2 p-2 bg-gray-50/50 rounded-xl animate-in slide-in-from-left fade-in duration-300">
                    {categoryLinks.map((cat) => (
                      <Link
                        key={cat.id}
                        href={cat.href}
                        onClick={() => {
                          setIsMenuOpen(false)
                          setShowCategories(false)
                        }}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg text-center hover:bg-white transition-all duration-300 group"
                      >
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {cat.icon}
                        </div>
                        <span className="text-xs font-medium text-gray-700 group-hover:text-cyan-600">
                          {cat.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Navigation Links with icons */}
                <div className="space-y-1 pt-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300 group"
                    >
                      <span className="text-gray-400 group-hover:text-cyan-600 transition-colors">
                        {link.icon}
                      </span>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Login Section */}
                {showLoginLink && !rightElement && (
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <Link
                      href={loginHref}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-4 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:shadow-xl hover:shadow-cyan-200/50 transition-all duration-300 group"
                    >
                      <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
                      Sign In to Your Account
                    </Link>
                    <p className="text-center text-xs text-gray-400 mt-4">
                      Don't have an account?{' '}
                      <Link href="/signup" className="text-cyan-600 font-medium hover:underline">
                        Sign up
                      </Link>
                    </p>
                  </div>
                )}

                {/* Custom Right Element */}
                {rightElement && (
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    {rightElement}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sidebar Overlay with animations */}
      {showSidebar && isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
            onClick={toggleSidebar}
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-xl z-50 shadow-2xl animate-in slide-in-from-left duration-500 lg:hidden overflow-y-auto">
            <div className="p-6">
              {/* Sidebar Header with gradient */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <LayoutGrid size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Categories
                  </h3>
                </div>
                <button
                  onClick={toggleSidebar}
                  className="p-2.5 rounded-xl text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Category Links with gradient backgrounds */}
              <div className="space-y-2">
                {categoryLinks.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    onClick={toggleSidebar}
                    className="group relative flex items-center gap-4 w-full px-4 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {cat.icon}
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-cyan-600">
                      {cat.name}
                    </span>
                    <ChevronRight size={16} className="ml-auto text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>

              {/* Quick Filters Section with modern design */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />
                  QUICK FILTERS
                </h4>
                <div className="space-y-2">
                  <button className="flex items-center gap-3 w-full px-4 py-4 rounded-xl border-2 border-transparent hover:border-cyan-200 bg-gray-50 hover:bg-white transition-all duration-300 group">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-md group-hover:border-cyan-500 group-hover:bg-cyan-50 transition-all" />
                    <span className="font-medium text-gray-700 group-hover:text-cyan-600">Verified Only</span>
                  </button>
                  <button className="flex items-center gap-3 w-full px-4 py-4 rounded-xl border-2 border-transparent hover:border-cyan-200 bg-gray-50 hover:bg-white transition-all duration-300 group">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-md group-hover:border-cyan-500 group-hover:bg-cyan-50 transition-all" />
                    <span className="font-medium text-gray-700 group-hover:text-cyan-600">Open Now</span>
                  </button>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-8 pt-8 text-center">
                <div className="inline-flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}