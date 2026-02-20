// components/ui/pagination-minimal.tsx
'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
    currentPage: number
    totalPages: number
    itemsPerPage: number
    totalItems: number
    onPageChange: (page: number) => void
}

export function PaginationMinimal({
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems,
    onPageChange
}: PaginationProps) {
    if (totalPages <= 1) return null

    const start = (currentPage - 1) * itemsPerPage + 1
    const end = Math.min(currentPage * itemsPerPage, totalItems)

    return (
        <div className="w-full mt-16 mb-8">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-6">
                    {/* Results Info */}
                    <p className="text-sm text-gray-400">
                        Showing {start} - {end} of {totalItems} services
                    </p>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="p-3 text-gray-400 hover:text-[#1E7B7C] disabled:text-gray-200 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum = i + 1
                            if (totalPages > 5) {
                                if (currentPage > 3) {
                                    pageNum = Math.min(totalPages - 4 + i, totalPages)
                                }
                            }
                            return (
                                <button
                                    key={i}
                                    onClick={() => onPageChange(pageNum)}
                                    className={`w-12 h-12 rounded-full font-medium transition-all ${currentPage === pageNum
                                            ? 'bg-gray-900 text-white shadow-lg shadow-gray-200 scale-110'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {pageNum}
                                </button>
                            )
                        })}

                        <button
                            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="p-3 text-gray-400 hover:text-[#1E7B7C] disabled:text-gray-200 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Page Indicator */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-400">Page</span>
                        <span className="text-sm font-bold text-[#1E7B7C]">{currentPage}</span>
                        <span className="text-xs text-gray-300">/</span>
                        <span className="text-sm text-gray-500">{totalPages}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}