'use client'

import { useState } from 'react'
import { ClipboardList, FileText, Wallet, Plus } from 'lucide-react'
import DashboardHeader from '@/components/shared/dashboard-header'
import StatsCard from '@/components/shared/stats-card'
import GlassCard from '@/components/shared/glass-card'
import ActivityItem from '@/components/shared/activity-item'
import { ROLES } from '@/constants/roles'
import { ROUTES } from '@/constants/routes'
import { STATUSES, STATUS_COLORS } from '@/constants/statuses'
import { useDashboard } from '@/lib/hooks/use-dashboard'
import { CustomerDashboardData } from '@/types/dashboard'

export default function CustomerDashboardPage() {
  const { data, loading } = useDashboard<CustomerDashboardData>(ROLES.CUSTOMER)
  const [activeTab, setActiveTab] = useState(STATUSES.IN_PROGRESS)

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1E7B7C]"></div>
      </div>
    )
  }

  const { user, stats, ongoingServices, postedJobs, serviceHistory } = data

  return (
    <div className="max-w-6xl relative pb-24">
      <DashboardHeader
        title={`Welcome back, ${user.name}`}
        subtitle={<>You have <span className="text-[#1E7B7C] font-bold">{user.upcomingJobsCount} services</span> scheduled for this week.</>}
        action={{
          label: "Request a Service",
          href: ROUTES.CUSTOMER.REQUEST,
          icon: Plus
        }}
      />

      {/* Primary KPI Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2">
          <StatsCard
            variant="primary"
            label="Active Service Requests"
            value={stats.ongoingJobs.count}
            trend={stats.ongoingJobs.trend}
            icon={ClipboardList}
          />
        </div>

        <div className="flex flex-col gap-6">
          <StatsCard
            label="Pending Quotes"
            value={stats.pendingQuotes.count}
            subtitle={stats.pendingQuotes.subtitle}
            icon={FileText}
            iconColorClass="text-orange-500"
            iconBgClass="bg-orange-50"
          />
          <StatsCard
            label="Total Spent"
            value={stats.totalSpent.amount}
            subtitle={stats.totalSpent.subtitle}
            icon={Wallet}
            iconColorClass="text-emerald-500"
            iconBgClass="bg-emerald-50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <GlassCard
          title="Recent Services"
          action={<button className="text-[#1E7B7C] font-black text-sm hover:underline">View All</button>}
          innerClassName="p-0 space-y-4 px-10 pb-10 mt-8"
        >
          <div className="space-y-4">
            {ongoingServices.map((service: any) => (
              <ActivityItem
                key={service.id}
                id={service.id}
                title={service.title}
                subtitle={`${service.provider.name} • ${service.date}`}
                amount={service.amount}
                status={service.status}
                statusColor={STATUS_COLORS[service.status as keyof typeof STATUS_COLORS] || 'bg-gray-50 text-gray-600'}
                avatar={service.provider.avatar}
              />
            ))}
          </div>
        </GlassCard>

        {/* Suggested Services */}
        <div className="bg-gray-50/50 rounded-[40px] p-10 border border-gray-100 flex flex-col">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Need something else?</h2>
          <p className="text-sm font-medium text-gray-500 mb-8">Popular services requested in your area.</p>

          <div className="space-y-3 flex-1">
            {[
              { id: 1, name: 'Deep Home Cleaning', price: 'Est. $150-$250', icon: '✨' },
              { id: 2, name: 'Leaky Pipe Repair', price: 'Est. $80-$120', icon: '🔧' },
              { id: 3, name: 'Lawn Mowing & Care', price: 'Est. $50-$90', icon: '🌿' },
              { id: 4, name: 'TV Mounting', price: 'Est. $60-$100', icon: '📺' }
            ].map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-[#1E7B7C]/20 box-border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-sm text-gray-900">{item.name}</span>
                </div>
                <span className="text-xs font-bold text-gray-400">{item.price}</span>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full py-4 border-2 border-gray-200 text-gray-500 rounded-xl font-black text-sm hover:bg-white hover:border-[#1E7B7C] hover:text-[#1E7B7C] transition-all relative overflow-hidden">
            Browse All Categories
          </button>
        </div>
      </div>
    </div>
  )
}