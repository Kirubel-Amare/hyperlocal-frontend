'use client'

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { PaginationProps } from './pagination'

export function PaginationGlass({
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems,
    onPageChange
}: PaginationProps) {
    if (totalPages <= 1) return null

    const start = (currentPage - 1) * itemsPerPage + 1
    const end = Math.min(currentPage * itemsPerPage, totalItems)

    const getPageNumbers = () => {
        const delta = 1 // Fewer pages on mobile, cleaner look
        const range = []
        const rangeWithDots: (string | number)[] = []
        let l: number | undefined

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
        <div className="w-full mt-4 pb-8">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
                {/* Main Pagination Container with Glass Effect */}
                <div className="relative group">
                    {/* Background Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-4 sm:p-6 bg-white/40 backdrop-blur-md border border-white/40 rounded-[2rem] shadow-xl shadow-blue-500/5">
                        {/* Status Info */}
                        <div className="flex flex-col gap-1.5 order-2 md:order-1 text-center md:text-left">
                            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest px-3 py-1 bg-cyan-50/50 rounded-full w-fit mx-auto md:mx-0">
                                Page Status
                            </span>
                            <div className="text-sm text-gray-500 font-medium">
                                Showing <span className="text-gray-900 font-bold italic">{start}-{end}</span>
                                <span className="mx-2 text-gray-300">|</span>
                                Total <span className="text-gray-900 font-bold italic">{totalItems}</span> results
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2 order-1 md:order-2">
                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-1 bg-white/50 p-1 rounded-2xl border border-white/60">
                                <button
                                    onClick={() => onPageChange(1)}
                                    disabled={currentPage === 1}
                                    className="p-2.5 rounded-xl transition-all hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed group/btn"
                                    aria-label="First page"
                                >
                                    <ChevronsLeft className="w-4 h-4 text-gray-600 group-hover/btn:text-cyan-600" />
                                </button>
                                <button
                                    onClick={() => onPageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-2.5 rounded-xl transition-all hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed group/btn"
                                    aria-label="Previous page"
                                >
                                    <ChevronLeft className="w-4 h-4 text-gray-600 group-hover/btn:text-cyan-600" />
                                </button>
                            </div>

                            {/* Page Numbers */}
                            <div className="flex items-center gap-1.5 px-2">
                                {getPageNumbers().map((page, index) => (
                                    page === '...' ? (
                                        <span key={`dots-${index}`} className="w-8 text-center text-gray-300 font-bold">···</span>
                                    ) : (
                                        <button
                                            key={page}
                                            onClick={() => onPageChange(page as number)}
                                            className={`relative w-10 h-10 rounded-xl text-sm font-bold transition-all duration-300 ${currentPage === page
                                                ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-200 scale-110'
                                                : 'text-gray-500 hover:bg-white/80 hover:text-cyan-600'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    )
                                ))}
                            </div>

                            <div className="flex items-center gap-1 bg-white/50 p-1 rounded-2xl border border-white/60">
                                <button
                                    onClick={() => onPageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-2.5 rounded-xl transition-all hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed group/btn"
                                    aria-label="Next page"
                                >
                                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover/btn:text-cyan-600" />
                                </button>
                                <button
                                    onClick={() => onPageChange(totalPages)}
                                    disabled={currentPage === totalPages}
                                    className="p-2.5 rounded-xl transition-all hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed group/btn"
                                    aria-label="Last page"
                                >
                                    <ChevronsRight className="w-4 h-4 text-gray-600 group-hover/btn:text-cyan-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Glass Progress Indicator */}
                <div className="mt-8 max-w-xs mx-auto">
                    <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-[10px] uppercase tracking-tighter font-bold text-gray-400">Progress</span>
                        <span className="text-[10px] font-black text-cyan-600">{Math.round((currentPage / totalPages) * 100)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100/50 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
                        <div
                            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 transition-all duration-700 ease-out rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                            style={{ width: `${(currentPage / totalPages) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}