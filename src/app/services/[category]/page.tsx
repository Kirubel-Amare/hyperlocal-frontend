'use client'

import { useState, useMemo, useEffect } from 'react'
import { use } from 'react'
import { servicesData } from '@/lib/services-data'
import ServiceCard from '@/components/services/service-card'
import Header from '@/components/layout/header'
import { FilterSidebar } from '@/components/services/filter-sidebar'
import { MobileFilterBar } from '@/components/services/mobile-filter-bar'
import { SortSelector } from '@/components/filters/sort-selector'
import { QuickFilters } from '@/components/filters/quick-filters'
import { PaginationGlass } from '@/components/ui/pagination-glass'
import { EmptyState } from '@/components/ui/empty-state'
import Footer from '@/components/layout/Footer'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

const categoryNames: Record<string, string> = {
  all: 'All Categories',
  plumbing: 'Plumbing',
  cleaning: 'Cleaning',
  tutoring: 'Tutoring',
  'pet-care': 'Pet Care',
  electrical: 'Electrical',
  gardening: 'Gardening',
  repairs: 'Home Repair'
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params)

  const categoryData = useMemo(() => {
    if (category === 'all') {
      // Aggregate all services from all categories
      const allServices = Object.entries(servicesData)
        .filter(([key]) => key !== 'all')
        .flatMap(([_, services]) => services)

      // Deduplicate by ID
      const seenIds = new Set<string>()
      return allServices.filter(service => {
        if (seenIds.has(service.id)) return false
        seenIds.add(service.id)
        return true
      })
    }
    return servicesData[category] || []
  }, [category])

  const categoryName = categoryNames[category] || 'Services'

  // Filter state
  const [sortBy, setSortBy] = useState('rating')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(500)
  const [minRating, setMinRating] = useState(0)
  const [maxDistance, setMaxDistance] = useState(25)
  const [isVerified, setIsVerified] = useState(false)
  const [isOpenNow, setIsOpenNow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = categoryData.filter(
      (service) =>
        service.price >= minPrice &&
        service.price <= maxPrice &&
        service.rating >= minRating &&
        (service.distance || 0) <= maxDistance &&
        (!isVerified || (service.tags && (service.tags.includes('Licensed') || service.tags.includes('Certified') || service.tags.includes('Verified')))) &&
        (!isOpenNow || (service.availability && (service.availability.includes('Sat') || service.availability.includes('Sun'))))
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
  }, [categoryData, sortBy, minPrice, maxPrice, minRating, maxDistance, isVerified, isOpenNow])

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [category, sortBy, minPrice, maxPrice, minRating, maxDistance, isVerified, isOpenNow])

  // Pagination logic
  const paginatedServices = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredServices.slice(start, start + itemsPerPage)
  }, [filteredServices, currentPage])

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-8 pt-28 pb-12">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          <FilterSidebar
            currentCategory={category}
            minPrice={minPrice}
            maxPrice={maxPrice}
            minRating={minRating}
            maxDistance={maxDistance}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
            onMinRatingChange={setMinRating}
            onMaxDistanceChange={setMaxDistance}
          />

          {/* Services List */}
          <div className="flex-1 min-w-0 lg:ml-0">
            <MobileFilterBar onFilterClick={() => { }} />

            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Showing {filteredServices.length} professionals {category !== 'all' ? `in ${categoryNames[category]}` : ''}
                </h2>
              </div>
              <SortSelector value={sortBy} onChange={setSortBy} />
            </div>

            <QuickFilters
              isVerified={isVerified}
              isOpenNow={isOpenNow}
              onVerifiedChange={setIsVerified}
              onOpenNowChange={setIsOpenNow}
            />

            {/* Services Grid */}
            {paginatedServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
                {paginatedServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    categorySlug={category}
                  />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>

      <PaginationGlass
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={filteredServices.length}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  )
}