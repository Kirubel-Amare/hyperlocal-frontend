'use client'

import React from 'react';
import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Activity,
  CheckCircle2,
  AlertCircle,
  Lock,
  Stars
} from 'lucide-react';
import { ROLES } from '@/constants/roles'
import { ROUTES } from '@/constants/routes'
import { STATUSES, STATUS_COLORS } from '@/constants/statuses'
import DashboardHeader from '@/components/shared/dashboard-header'
import StatsCard from '@/components/shared/stats-card'
import GlassCard from '@/components/shared/glass-card'
import ActivityItem from '@/components/shared/activity-item'
import AnalyticsChart from '@/components/dashboard/analytics-chart'
import { useDashboard } from '@/lib/hooks/use-dashboard'
import { AdminDashboardData } from '@/types/dashboard'

export default function AdminDashboardPage() {
  const { data, loading } = useDashboard<AdminDashboardData>(ROLES.ADMIN)

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1E7B7C]"></div>
      </div>
    )
  }

  const { stats, recentActivities } = data

  const getIcon = (type: string) => {
    switch (type) {
      case 'dollar': return DollarSign
      case 'shopping': return ShoppingBag
      case 'lock': return Lock
      case 'alert': return AlertCircle
      default: return Activity
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'registration': return 'users'
      case 'payment': return 'dollar'
      case 'dispute': return 'alert'
      case 'job': return 'check'
      default: return 'activity'
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <DashboardHeader
        title="System Overview"
        subtitle={<>Welcome back, Administrator. Here's what's happening today.</>}
        action={{
          label: "Generate Report",
          href: "#",
          className: "bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] active:scale-[0.98] transition-all italic"
        }}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat: any, index: number) => (
          <StatsCard
            key={index}
            label={stat.label}
            value={stat.value}
            trend={stat.trend}
            trendUp={stat.trendUp}
            icon={getIcon(stat.iconType)}
            iconColorClass={stat.iconType === 'shopping' ? 'text-[#1E7B7C]' : stat.iconType === 'dollar' ? 'text-emerald-500' : 'text-blue-500'}
            iconBgClass={stat.iconType === 'shopping' ? 'bg-[#E8F4F4]' : 'bg-gray-50 dark:bg-gray-900'}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AnalyticsChart
            title="Revenue Growth"
            subtitle="Monthly revenue analysis vs previous year"
            type="revenue"
            data={[
              { label: 'Jan', value: 4000 },
              { label: 'Feb', value: 6500 },
              { label: 'Mar', value: 4500 },
              { label: 'Apr', value: 8000 },
              { label: 'May', value: 5500 },
              { label: 'Jun', value: 9000 }
            ]}
          />
        </div>

        <GlassCard
          title="Recent Activity"
          subtitle="Latest events across the system"
          innerClassName="p-0 px-10 pb-10 mt-8 space-y-6"
        >
          <div className="space-y-6">
            {recentActivities.map((activity: any) => (
              <ActivityItem
                key={activity.id}
                id={activity.id}
                title={activity.user}
                subtitle={activity.action}
                time={activity.time}
                status={activity.type}
                statusColor={activity.status === 'success' ? STATUS_COLORS[STATUSES.COMPLETED] : STATUS_COLORS[STATUSES.URGENT]}
              />
            ))}
          </div>
          <button className="w-full mt-6 py-3.5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-sm font-bold hover:bg-gray-50 dark:bg-gray-900 hover:border-gray-200 transition-all italic">
            View All Activities
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
