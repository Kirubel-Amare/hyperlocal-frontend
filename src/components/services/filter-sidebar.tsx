'use client'

import { useState, useEffect } from 'react'
import { Sliders, Star, DollarSign, MapPin } from 'lucide-react'
import { CategoryNav } from './category-nav'
import { cn } from '@/lib/utils'

interface FilterSidebarProps {
    currentCategory: string
    minPrice: number
    maxPrice: number
    minRating: number
    maxDistance: number
    onMinPriceChange: (value: number) => void
    onMaxPriceChange: (value: number) => void
    onMinRatingChange: (value: number) => void
    onMaxDistanceChange: (value: number) => void
}

export function FilterSidebar({
    currentCategory,
    minPrice,
    maxPrice,
    minRating,
    maxDistance,
    onMinPriceChange,
    onMaxPriceChange,
    onMinRatingChange,
    onMaxDistanceChange,
}: FilterSidebarProps) {
    // Local state for better slider performance if needed, 
    // but for now we'll use props directly for simplicity and consistency

    return (
        <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-28 space-y-8">
                {/* Categories Section */}
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                    <CategoryNav activeCategory={currentCategory} />
                </div>

                {/* Filters Section */}
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm space-y-8">
                    <div className="flex items-center gap-2 mb-2">
                        <Sliders size={20} className="text-cyan-600" />
                        <h3 className="font-bold text-lg text-gray-900">Refine Search</h3>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                <DollarSign size={16} className="text-gray-400" />
                                Price Range
                            </label>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 ml-1">Min</span>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                    <input
                                        type="number"
                                        value={minPrice}
                                        onChange={(e) => onMinPriceChange(Number(e.target.value))}
                                        className="w-full pl-7 pr-3 py-2 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold focus:bg-white focus:border-cyan-500 focus:outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 ml-1">Max</span>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                    <input
                                        type="number"
                                        value={maxPrice}
                                        onChange={(e) => onMaxPriceChange(Number(e.target.value))}
                                        className="w-full pl-7 pr-3 py-2 bg-gray-50 border border-transparent rounded-xl text-sm font-semibold focus:bg-white focus:border-cyan-500 focus:outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Distance Filter */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                <MapPin size={16} className="text-gray-400" />
                                Distance
                            </label>
                            <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full">
                                {maxDistance} miles
                            </span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={maxDistance}
                            onChange={(e) => onMaxDistanceChange(Number(e.target.value))}
                            className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                            <span>1 mi</span>
                            <span>100 mi</span>
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div className="space-y-4">
                        <label className="text-sm font-bold text-gray-900 flex items-center gap-2">
                            <Star size={16} className="text-gray-400" />
                            Minimum Rating
                        </label>
                        <div className="flex flex-col gap-2">
                            {[0, 4, 4.5, 4.8].map((rating) => (
                                <button
                                    key={rating}
                                    onClick={() => onMinRatingChange(rating)}
                                    className={cn(
                                        "flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all group",
                                        minRating === rating
                                            ? "bg-cyan-600 text-white shadow-lg shadow-cyan-100"
                                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                    )}
                                >
                                    <div className="flex items-center gap-2">
                                        <Star
                                            size={14}
                                            className={cn(
                                                "transition-colors",
                                                minRating === rating ? "fill-white text-white" : "text-yellow-400 fill-yellow-400"
                                            )}
                                        />
                                        <span>{rating === 0 ? 'Any Rating' : `${rating}+ Stars`}</span>
                                    </div>
                                    {minRating === rating && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}