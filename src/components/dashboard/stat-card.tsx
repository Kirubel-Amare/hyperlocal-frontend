// components/dashboard/stat-card.tsx
'use client'

import { ReactNode } from 'react'
import { TrendingUp } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: ReactNode
  iconBgColor: string
  iconColor: string
  trend?: string
  subtitle?: string
  trendColor?: string
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  iconBgColor, 
  iconColor,
  trend, 
  subtitle,
  trendColor = 'text-emerald-500'
}: StatCardProps) {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-36">
      <div className="flex justify-between items-start">
        <span className="text-sm text-gray-500 font-medium">{title}</span>
        <div className={`${iconBgColor} ${iconColor} p-2 rounded-lg`}>
          {icon}
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
        {trend && (
          <div className={`text-xs font-bold ${trendColor} flex items-center gap-1`}>
            <TrendingUp size={12} />
            {trend}
          </div>
        )}
        {subtitle && (
          <div className="text-xs font-medium text-gray-400">{subtitle}</div>
        )}
      </div>
    </div>
  )
}