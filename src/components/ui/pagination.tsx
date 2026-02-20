// components/ui/pagination.tsx
'use client'

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

export interface PaginationProps {
    currentPage: number
    totalPages: number
    itemsPerPage: number
    totalItems: number
    onPageChange: (page: number) => void
}

export function Pagination({
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems,
    onPageChange
}: PaginationProps) {
    if (totalPages <= 1) return null

    const start = (currentPage - 1) * itemsPerPage + 1
    const end = Math.min(currentPage * itemsPerPage, totalItems)

    // Generate page numbers to display
    const getPageNumbers = () => {
        const delta = 2
        const range = []
        const rangeWithDots: (string | number)[] = []
        let l: number

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
                range.push(i)
            }
        }

        range.forEach((i) => {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1)
                } else if (i - l !== 1) {
                    rangeWithDots.push('...')
                }
            }
            rangeWithDots.push(i)
            l = i
        })

        return rangeWithDots
    }

    return (
        <div className="w-full mt-4 mb-8">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Pagination Container */}
                <div className="relative">
                    {/* Decorative Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E8F4F4] via-blue-50 to-purple-50 rounded-3xl -z-10 opacity-50" />

                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 p-6 md:p-8">
                        {/* Results Info */}
                        <div className="text-center mb-6">
                        </div>

                        {/* Page Numbers */}
                        <div className="flex items-center justify-center gap-2">
                            {/* First Page */}
                            <button
                                onClick={() => onPageChange(1)}
                                disabled={currentPage === 1}
                                className={`hidden lg:flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${currentPage === 1
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-gray-600 hover:bg-gradient-to-br hover:from-[#1E7B7C] hover:to-[#166566] hover:text-white hover:shadow-lg hover:shadow-[#1E7B7C]/20 active:scale-90'
                                    }`}
                                aria-label="First page"
                            >
                                <ChevronsLeft size={20} />
                            </button>

                            {/* Previous Page */}
                            <button
                                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${currentPage === 1
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-gray-600 hover:bg-gradient-to-br hover:from-[#1E7B7C] hover:to-[#166566] hover:text-white hover:shadow-lg hover:shadow-[#1E7B7C]/20 active:scale-90'
                                    }`}
                                aria-label="Previous page"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {/* Page Numbers with Dots */}
                            <div className="flex items-center gap-2 px-4">
                                {getPageNumbers().map((page, index) => (
                                    page === '...' ? (
                                        <span
                                            key={`dots-${index}`}
                                            className="w-12 h-12 flex items-center justify-center text-gray-400 font-medium"
                                        >
                                            ⋯
                                        </span>
                                    ) : (
                                        <button
                                            key={page}
                                            onClick={() => onPageChange(page as number)}
                                            className={`relative w-12 h-12 rounded-2xl font-semibold text-sm transition-all duration-300 ${currentPage === page
                                                ? 'bg-gradient-to-br from-[#1E7B7C] to-[#166566] text-white shadow-xl shadow-[#1E7B7C]/20 scale-110 hover:shadow-2xl hover:shadow-[#1E7B7C]/30'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-[#1E7B7C] hover:scale-105'
                                                }`}
                                        >
                                            {currentPage === page && (
                                                <span className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
                                            )}
                                            {page}
                                        </button>
                                    )
                                ))}
                            </div>

                            {/* Next Page */}
                            <button
                                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${currentPage === totalPages
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-gray-600 hover:bg-gradient-to-br hover:from-[#1E7B7C] hover:to-[#166566] hover:text-white hover:shadow-lg hover:shadow-[#1E7B7C]/20 active:scale-90'
                                    }`}
                                aria-label="Next page"
                            >
                                <ChevronRight size={20} />
                            </button>

                            {/* Last Page */}
                            <button
                                onClick={() => onPageChange(totalPages)}
                                disabled={currentPage === totalPages}
                                className={`hidden lg:flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${currentPage === totalPages
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-gray-600 hover:bg-gradient-to-br hover:from-[#1E7B7C] hover:to-[#166566] hover:text-white hover:shadow-lg hover:shadow-[#1E7B7C]/20 active:scale-90'
                                    }`}
                                aria-label="Last page"
                            >
                                <ChevronsRight size={20} />
                            </button>
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-8 flex items-center justify-center gap-3">
                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => onPageChange(page)}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentPage === page
                                            ? 'w-8 bg-gradient-to-r from-[#1E7B7C] to-[#166566]'
                                            : 'w-2 bg-gray-200 hover:bg-gray-300'
                                            }`}
                                        aria-label={`Go to page ${page}`}
                                    />
                                ))}
                            </div>
                            <span className="text-xs font-medium text-gray-400 ml-2">
                                Page {currentPage} of {totalPages}
                            </span>
                        </div>

                        {/* Simple Mobile Navigation */}
                        <div className="mt-6 flex items-center justify-between gap-4 sm:hidden">
                            <button
                                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 rounded-xl text-sm font-medium text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed active:bg-gray-100"
                            >
                                <ChevronLeft size={18} />
                                Previous
                            </button>
                            <span className="text-sm font-medium text-gray-900">
                                {currentPage}/{totalPages}
                            </span>
                            <button
                                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 rounded-xl text-sm font-medium text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed active:bg-gray-100"
                            >
                                Next
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#1E7B7C] to-[#166566] rounded-full opacity-50 blur-sm" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#1E7B7C] to-[#166566] rounded-full opacity-30 blur-sm" />
                </div>
            </div>
        </div>
    )
}