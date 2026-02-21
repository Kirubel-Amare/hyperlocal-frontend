'use client'

import { SlidersHorizontal } from 'lucide-react'

interface MobileFilterBarProps {
    onFilterClick: () => void
}

export function MobileFilterBar({ onFilterClick }: MobileFilterBarProps) {
    return (
        <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-950 border border-gray-200 rounded-2xl mb-6 shadow-sm">
            <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-[#1E7B7C]" />
                <span className="font-semibold text-gray-900 dark:text-gray-100">Filters</span>
            </div>
            <button
                onClick={onFilterClick}
                className="px-4 py-2 bg-[#1E7B7C] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#E8F4F4] hover:bg-[#166566] active:scale-95 transition-all"
            >
                Adjust
            </button>
        </div>
    )
}