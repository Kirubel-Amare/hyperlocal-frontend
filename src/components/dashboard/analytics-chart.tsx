'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react'

interface DataPoint {
    label: string
    value: number
}

interface AnalyticsChartProps {
    title: string
    subtitle: string
    data: DataPoint[]
    type: 'revenue' | 'users' | 'activity'
}

export default function AnalyticsChart({ title, subtitle, data, type }: AnalyticsChartProps) {
    const maxValue = Math.max(...data.map(d => d.value))

    const colors = {
        revenue: 'from-[#1E7B7C] to-[#166566]',
        users: 'from-blue-500 to-indigo-600',
        activity: 'from-purple-500 to-pink-600'
    }

    const icons = {
        revenue: <DollarSign size={20} />,
        users: <Users size={20} />,
        activity: <Activity size={20} />
    }

    return (
        <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-8 border border-white shadow-xl shadow-gray-200/10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">{title}</h3>
                    <p className="text-sm text-gray-500 font-medium">{subtitle}</p>
                </div>
                <div className={`p-3 rounded-2xl bg-[#E8F4F4] text-[#1E7B7C]`}>
                    {icons[type]}
                </div>
            </div>

            <div className="flex-1 flex items-end justify-between gap-4 min-h-[200px] px-2">
                {data.map((point, i) => {
                    const height = (point.value / maxValue) * 100
                    return (
                        <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer relative">
                            {/* Value Tooltip on Hover */}
                            <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-gray-900 text-white text-[10px] font-black px-2 py-1 rounded-lg z-20 pointer-events-none">
                                {type === 'revenue' ? '$' : ''}{point.value}{type === 'users' ? 'u' : ''}
                            </div>

                            <div className="w-full h-full flex items-end bg-gray-50/50 rounded-2xl overflow-hidden shadow-inner">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                                    className={`w-full bg-gradient-to-t ${colors[type]} rounded-t-xl group-hover:opacity-80 transition-opacity`}
                                />
                            </div>
                            <span className="text-[10px] font-black text-gray-400 mt-4 group-hover:text-gray-900 transition-colors uppercase">
                                {point.label}
                            </span>
                        </div>
                    )
                })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1E7B7C]">
                    <TrendingUp size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">+14.2% Growth</span>
                </div>
                <button className="text-[10px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors">
                    View Full Report
                </button>
            </div>
        </div>
    )
}
