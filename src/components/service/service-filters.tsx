'use client'

import { Sliders } from 'lucide-react'

interface ServiceFiltersProps {
  sortBy: string
  setSortBy: (value: string) => void
  minPrice: number
  setMinPrice: (value: number) => void
  maxPrice: number
  setMaxPrice: (value: number) => void
  minRating: number
  setMinRating: (value: number) => void
}

export default function ServiceFilters({
  sortBy,
  setSortBy,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating
}: ServiceFiltersProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-6">
      <div className="flex items-center gap-2 mb-6">
        <Sliders size={20} className="text-cyan-600" />
        <h3 className="font-bold text-lg">Filters</h3>
      </div>

      {/* Sort */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-cyan-500 bg-white"
        >
          <option value="rating">Highest Rated</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest First</option>
          <option value="reviews">Most Reviewed</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Price Range</label>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">Min:</span>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
            />
            <span className="text-cyan-600 font-semibold">${minPrice}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">Max:</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
            />
            <span className="text-cyan-600 font-semibold">${maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">Minimum Rating</label>
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-cyan-500 bg-white"
        >
          <option value={0}>All Ratings</option>
          <option value={4}>4+ Stars</option>
          <option value={4.5}>4.5+ Stars</option>
          <option value={4.7}>4.7+ Stars</option>
          <option value={4.9}>4.9+ Stars</option>
        </select>
      </div>
    </div>
  )
}
