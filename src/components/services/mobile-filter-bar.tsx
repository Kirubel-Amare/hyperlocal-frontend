'use client'

import { SlidersHorizontal } from 'lucide-react'

interface MobileFilterBarProps {
    onFilterClick: () => void
}

export function MobileFilterBar({ onFilterClick }: MobileFilterBarProps) {
    return (
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl mb-6 shadow-sm">
            <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-cyan-600" />
                <span className="font-semibold text-gray-900">Filters</span>
            </div>
            <button
                onClick={onFilterClick}
                className="px-4 py-2 bg-cyan-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-200 hover:bg-cyan-700 active:scale-95 transition-all"
            >
                Adjust
            </button>
        </div>
    )
}