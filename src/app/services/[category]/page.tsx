'use client'

import { useState, useMemo, use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, Service } from '@/lib/services-data'
import ServiceCard from '@/components/service/service-card'
import { ChevronRight, MapPin, Star, Check, Clock, Search, Bell, User } from 'lucide-react'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

const categoryNames: Record<string, string> = {
  plumbing: 'Plumbing',
  cleaning: 'Cleaning',
  tutoring: 'Tutoring',
  'pet-care': 'Pet Care',
  electrical: 'Electrical',
  gardening: 'Gardening',
  repairs: 'Repairs'
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params)
  const categoryData = servicesData[category] || []
  const categoryName = categoryNames[category] || 'Services'

  const [sortBy, setSortBy] = useState('rating')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(500)
  const [minRating, setMinRating] = useState(0)
  const [maxDistance, setMaxDistance] = useState(25)
  const [isVerified, setIsVerified] = useState(false)
  const [isOpenNow, setIsOpenNow] = useState(false)

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = categoryData.filter(
      (service) =>
        service.price >= minPrice &&
        service.price <= maxPrice &&
        service.rating >= minRating &&
        (service.distance || 0) <= maxDistance &&
        (!isVerified || (service.tags && (service.tags.includes('Licensed') || service.tags.includes('Certified')))) &&
        (!isOpenNow || (service.availability && service.availability.includes('Sat')))
    )

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'reviews':
        filtered.sort((a, b) => b.totalReviews - a.totalReviews)
        break
      case 'rating':
      default:
        filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [categoryData, sortBy, minPrice, maxPrice, minRating])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
        <div className="max-w-[1600px] mx-auto px-8 w-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-removebg-preview.png"
                width={32}
                height={32}
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-gray-900 font-bold text-xl tracking-tight">LocalService</span>
            </Link>

            <div className="hidden lg:flex items-center bg-gray-100 rounded-lg p-1 w-[450px]">
              <div className="flex items-center gap-2 px-3 flex-1 border-r border-gray-200">
                <Search size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-500"
                />
              </div>
              <div className="flex items-center gap-2 px-3 flex-1">
                <MapPin size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="San Francisco"
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/browse" className="text-gray-900 hover:text-cyan-600 font-semibold text-sm">
                Browse
              </Link>
              <Link href="/pro" className="text-gray-900 hover:text-cyan-600 font-semibold text-sm">
                Become a Pro
              </Link>
            </nav>
            <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
              <button className="relative text-gray-700 hover:text-gray-900">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" width={40} height={40} alt="User" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-8 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-[280px] flex-shrink-0">
            <div className="sticky top-28 h-[calc(100vh-120px)] overflow-y-auto pr-4 pb-12 sidebar-scroll">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Filters</h3>
              <p className="text-sm text-gray-500 mb-8">Refine your results</p>

              {/* Categories */}
              <div className="mb-10">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">CATEGORIES</h4>
                <div className="space-y-1">
                  {[
                    { name: 'All Categories', id: 'all', icon: <div className="grid grid-cols-2 gap-0.5 w-4 h-4"><div className="bg-white rounded-sm" /><div className="bg-white rounded-sm" /><div className="bg-white rounded-sm" /><div className="bg-white rounded-sm" /></div> },
                    { name: 'Home Repair', id: 'repairs', icon: <div className="w-4 h-4 rounded bg-gray-400 rotate-45 flex items-center justify-center overflow-hidden"><div className="w-3 h-3 bg-white" /></div> },
                    { name: 'Personal Care', id: 'personal-care', icon: <div className="w-4 h-4 rounded-full border-2 border-gray-400" /> },
                    { name: 'Cleaning', id: 'cleaning', icon: <div className="w-4 h-4 border-b-2 border-gray-400" /> },
                    { name: 'Technical Help', id: 'technical-help', icon: <div className="w-4 h-4 bg-gray-400 rounded-sm" /> },
                  ].map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/services/${cat.id}`}
                      className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${category === cat.id
                        ? 'bg-cyan-50 text-cyan-600'
                        : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      <span className={`flex items-center justify-center w-6 h-6 rounded-lg ${category === cat.id ? 'bg-cyan-500' : ''}`}>
                        {cat.icon}
                      </span>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-10">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">PRICE RANGE</h4>
                <div className="px-2">
                  <div className="h-1 bg-gray-200 rounded-full relative mb-6">
                    <div className="absolute left-0 right-[20%] top-0 h-full bg-cyan-400 rounded-full" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-cyan-400 rounded-full cursor-pointer shadow-sm" />
                    <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-cyan-400 rounded-full cursor-pointer shadow-sm" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className="w-16 bg-white border border-gray-200 rounded-lg px-2 py-2 text-center text-sm font-bold text-gray-700 outline-none focus:border-cyan-400"
                    />
                    <span className="text-gray-400 text-sm">to</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-16 bg-white border border-gray-200 rounded-lg px-2 py-2 text-center text-sm font-bold text-gray-700 outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* Distance */}
              <div className="mb-10">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">DISTANCE</h4>
                <div className="relative">
                  <select
                    value={maxDistance}
                    onChange={(e) => setMaxDistance(Number(e.target.value))}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 appearance-none outline-none focus:border-cyan-400"
                  >
                    <option value={25}>Within 25 miles</option>
                    <option value={10}>Within 10 miles</option>
                    <option value={5}>Within 5 miles</option>
                  </select>
                  <ChevronRight size={18} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-400" />
                </div>
              </div>

              {/* Minimum Rating */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">MINIMUM RATING</h4>
                <div className="space-y-3">
                  {[4, 3].map((rating) => (
                    <label key={rating} className="flex items-center gap-3 cursor-pointer group" onClick={() => setMinRating(minRating === rating ? 0 : rating)}>
                      <div className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-colors ${minRating === rating ? 'border-cyan-500 bg-cyan-500' : 'border-gray-200 group-hover:border-cyan-400'
                        }`}>
                        {minRating === rating && <Check size={12} className="text-white" />}
                      </div>
                      <div className="flex gap-1 text-cyan-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className={i < rating ? 'fill-cyan-400' : 'fill-gray-200 text-gray-200'} />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-gray-500">& Up</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="flex-1 min-w-0">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Showing {filteredServices.length === categoryData.length ? 124 : filteredServices.length} professionals near San Francisco
              </h2>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 min-w-max">
                SORT BY:
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-gray-900 pr-8 outline-none appearance-none cursor-pointer"
                  >
                    <option value="rating">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                  <ChevronRight size={16} className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-gray-900 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => setIsVerified(!isVerified)}
                className={`flex items-center gap-2 px-5 py-2.5 bg-white border rounded-full text-sm font-bold transition-colors shadow-sm ${isVerified ? 'border-cyan-400 text-cyan-600 bg-cyan-50' : 'border-gray-200 text-gray-700 hover:border-cyan-400'}`}
              >
                Verified Only
                <Check size={16} className={isVerified ? 'text-cyan-600' : 'text-cyan-500'} />
              </button>
              <button
                onClick={() => setIsOpenNow(!isOpenNow)}
                className={`flex items-center gap-2 px-5 py-2.5 bg-white border rounded-full text-sm font-bold transition-colors shadow-sm ${isOpenNow ? 'border-cyan-400 text-cyan-600 bg-cyan-50' : 'border-gray-200 text-gray-700 hover:border-cyan-400'}`}
              >
                Open Now
                <Clock size={16} className={isOpenNow ? 'text-cyan-600' : 'text-gray-900'} />
              </button>
            </div>

            {/* Services Grid */}
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    categorySlug={category}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-500 font-semibold">No services found matching your filters.</p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-20 pt-10 border-t border-gray-100">
              <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                <ChevronRight size={20} className="rotate-180" />
              </button>
              {[1, 2, 3, '...', 12].map((page, i) => (
                <button
                  key={i}
                  className={`min-w-[40px] h-10 px-2 rounded-lg font-bold text-sm transition-all ${page === 1
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : page === '...'
                      ? 'text-gray-400 cursor-default'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-100 py-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 opacity-50">
              <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm" />
              </div>
              <span className="text-gray-900 font-bold text-sm">LocalService</span>
            </div>

            <div className="flex items-center gap-8">
              {['PRIVACY POLICY', 'TERMS OF SERVICE', 'HELP CENTER', 'CONTACT'].map(item => (
                <Link key={item} href="#" className="text-[10px] font-bold text-gray-400 hover:text-cyan-600 tracking-widest transition-colors">
                  {item}
                </Link>
              ))}
            </div>

            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              © 2024 LocalService Marketplace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
