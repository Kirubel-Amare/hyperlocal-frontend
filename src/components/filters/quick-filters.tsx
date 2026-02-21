'use client'

import { Check, ShieldCheck, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuickFiltersProps {
    isVerified: boolean
    isOpenNow: boolean
    onVerifiedChange: (value: boolean) => void
    onOpenNowChange: (value: boolean) => void
}

export function QuickFilters({
    isVerified,
    isOpenNow,
    onVerifiedChange,
    onOpenNowChange,
}: QuickFiltersProps) {
    return (
        <div className="flex flex-wrap gap-3 mb-8">
            <button
                onClick={() => onVerifiedChange(!isVerified)}
                className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm",
                    isVerified
                        ? "bg-[#1E7B7C] border-[#1E7B7C] text-white shadow-[#E8F4F4]"
                        : "bg-white dark:bg-gray-950 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700"
                )}
            >
                <ShieldCheck size={18} className={isVerified ? "text-[#E8F4F4]" : "text-[#1E7B7C]"} />
                Verified Only
                {isVerified && <Check size={14} className="ml-1" />}
            </button>

            <button
                onClick={() => onOpenNowChange(!isOpenNow)}
                className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm",
                    isOpenNow
                        ? "bg-[#1E7B7C] border-[#1E7B7C] text-white shadow-[#E8F4F4]"
                        : "bg-white dark:bg-gray-950 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700"
                )}
            >
                <Clock size={18} className={isOpenNow ? "text-[#E8F4F4]" : "text-[#1E7B7C]"} />
                Open Now
                {isOpenNow && <Check size={14} className="ml-1" />}
            </button>

            <div className="h-9 w-px bg-gray-200 dark:bg-gray-700 mx-1" />

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-500 dark:text-gray-400 dark:text-gray-400 border border-gray-100 dark:border-gray-800 dark:border-gray-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                142 pros near you
            </div>
        </div>
    )
}