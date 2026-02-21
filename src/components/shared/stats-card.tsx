import React from 'react'
import { LucideIcon, Zap } from 'lucide-react'
import { COLORS } from '@/constants/colors'

interface StatsCardProps {
    label: string
    value: string | number
    trend?: string
    trendUp?: boolean
    subtitle?: string
    icon: LucideIcon
    iconColorClass?: string
    iconBgClass?: string
    variant?: 'default' | 'primary'
}

export default function StatsCard({
    label,
    value,
    trend,
    trendUp,
    subtitle,
    icon: Icon,
    iconColorClass = 'text-[#1E7B7C]',
    iconBgClass = 'bg-[#E8F4F4]',
    variant = 'default'
}: StatsCardProps) {
    if (variant === 'primary') {
        return (
            <div className="bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-[40px] p-10 shadow-2xl shadow-[#1E7B7C]/20 text-white relative overflow-hidden flex flex-col justify-between min-h-[220px] border border-white/10 dark:border-gray-800/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 dark:bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                <div className="flex justify-between items-start relative z-10 mb-8">
                    <span className="text-sm font-black text-white/60 uppercase tracking-widest block">{label}</span>
                    <div className="p-4 bg-white/20 dark:bg-white/5 backdrop-blur-md rounded-2xl">
                        <Icon size={32} className="text-white" />
                    </div>
                </div>

                <div className="relative z-10 flex items-end justify-between">
                    <div>
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-6xl font-black">{value}</span>
                        </div>
                        {trend && (
                            <div className="flex items-center gap-2 text-sm font-bold bg-white/20 dark:bg-white/5 backdrop-blur-sm w-fit px-3 py-1.5 rounded-xl border border-white/20 dark:border-gray-800/20">
                                {trend}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/20 dark:shadow-none border border-white dark:border-gray-800 flex flex-col justify-between min-h-[192px] hover:translate-y-[-4px] transition-all group">
            <div className="flex justify-between items-start">
                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">{label}</span>
                <div className={`p-2 rounded-xl transition-colors ${iconBgClass} ${iconColorClass}`}>
                    <Icon size={20} />
                </div>
            </div>
            <div>
                <div className="text-4xl font-black text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-2">{value}</div>
                {trend && (
                    <div className={`text-sm font-black flex items-center gap-1.5 w-fit px-2 py-1 rounded-lg ${trendUp ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'text-gray-400 dark:text-gray-500 bg-gray-50 '
 }`}>
                        <Zap size={12} fill="currentColor" />
                        {trend}
                    </div>
                )}
                {subtitle && <p className="text-xs font-bold text-gray-400 dark:text-gray-500 mt-1">{subtitle}</p>}
            </div>
        </div>
    )
}
