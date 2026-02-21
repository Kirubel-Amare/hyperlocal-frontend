'use client'

import { SearchX, RefreshCcw } from 'lucide-react'

export function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gray-50 dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
            <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <SearchX size={40} className="text-gray-300 dark:text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">No professionals found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto mb-8">
                We couldn't find any professionals matching your current filters. Try adjusting your search or filters.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all active:scale-95 shadow-sm"
            >
                <RefreshCcw size={18} />
                Reset all filters
            </button>
        </div>
    )
}