'use client'

import { ChevronDown } from 'lucide-react'

interface SortSelectorProps {
    value: string
    onChange: (value: string) => void
}

export function SortSelector({ value, onChange }: SortSelectorProps) {
    const options = [
        { value: 'rating', label: 'Recommended' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'reviews', label: 'Most Reviewed' },
    ]

    return (
        <div className="relative inline-flex items-center group">
            <span className="text-sm text-gray-500 mr-2">Sort by:</span>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-10 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] cursor-pointer transition-all hover:bg-gray-50 group-hover:border-gray-300 shadow-sm"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors"
                />
            </div>
        </div>
    )
}