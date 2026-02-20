'use client'

import { SearchX, RefreshCcw } from 'lucide-react'

export function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <SearchX size={40} className="text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No professionals found</h3>
            <p className="text-gray-500 max-w-xs mx-auto mb-8">
                We couldn't find any professionals matching your current filters. Try adjusting your search or filters.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 shadow-sm"
            >
                <RefreshCcw size={18} />
                Reset all filters
            </button>
        </div>
    )
}