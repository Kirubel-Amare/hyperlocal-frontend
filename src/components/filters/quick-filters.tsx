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
                        ? "bg-cyan-600 border-cyan-600 text-white shadow-cyan-200"
                        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                )}
            >
                <ShieldCheck size={18} className={isVerified ? "text-cyan-100" : "text-cyan-600"} />
                Verified Only
                {isVerified && <Check size={14} className="ml-1" />}
            </button>

            <button
                onClick={() => onOpenNowChange(!isOpenNow)}
                className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm",
                    isOpenNow
                        ? "bg-cyan-600 border-cyan-600 text-white shadow-cyan-200"
                        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                )}
            >
                <Clock size={18} className={isOpenNow ? "text-cyan-100" : "text-cyan-600"} />
                Open Now
                {isOpenNow && <Check size={14} className="ml-1" />}
            </button>

            <div className="h-9 w-px bg-gray-200 mx-1" />

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-500 border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                142 pros near you
            </div>
        </div>
    )
}