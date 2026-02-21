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
import { useTranslation } from '@/i18n/LanguageContext'

export default function CustomerDashboardPage() {
  const { t } = useTranslation()
  const { data, loading } = useDashboard<CustomerDashboardData>(ROLES.CUSTOMER)

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
        title={t('dashboard.header.welcome', { name: user.name })}
        subtitle={
          <>
            {t('dashboard.header.subtitle', { count: user.upcomingJobsCount }).split(/(\d+ services)/).map((part, i) =>
              part === `${user.upcomingJobsCount} services` ? (
                <span key={i} className="text-[#1E7B7C] font-bold">{part}</span>
              ) : (
                part
              )
            )}
          </>
        }
        action={{
          label: t('dashboard.header.requestAction'),
          href: ROUTES.CUSTOMER.REQUEST,
          icon: Plus
        }}
      />

      {/* Primary KPI Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2">
          <StatsCard
            variant="primary"
            label={t('dashboard.stats.activeRequests')}
            value={stats.ongoingJobs.count || 0}
            trend={stats.ongoingJobs.trend}
            icon={ClipboardList}
          />
        </div>

        <div className="flex flex-col gap-6">
          <StatsCard
            label={t('dashboard.stats.pendingQuotes')}
            value={stats.pendingQuotes.count || 0}
            subtitle={stats.pendingQuotes.subtitle}
            icon={FileText}
            iconColorClass="text-orange-500"
            iconBgClass="bg-orange-50"
          />
          <StatsCard
            label={t('dashboard.stats.totalSpent')}
            value={stats.totalSpent.amount || 0}
            subtitle={stats.totalSpent.subtitle}
            icon={Wallet}
            iconColorClass="text-emerald-500"
            iconBgClass="bg-emerald-50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <GlassCard
          title={t('dashboard.recentServices.title')}
          action={<button className="text-[#1E7B7C] font-black text-sm hover:underline">{t('dashboard.recentServices.viewAll')}</button>}
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
                statusColor={STATUS_COLORS[service.status as keyof typeof STATUS_COLORS] || 'bg-gray-50 dark:bg-gray-900 text-gray-600'}
                avatar={service.provider.avatar}
              />
            ))}
          </div>
        </GlassCard>

        {/* Suggested Services */}
        <div className="bg-gray-50/50 dark:bg-gray-900/50 rounded-[40px] p-10 border border-gray-100 dark:border-gray-800 flex flex-col">
          <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-2">{t('dashboard.suggestions.title')}</h2>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 dark:text-gray-400 mb-8">{t('dashboard.suggestions.subtitle')}</p>

          <div className="space-y-3 flex-1">
            {[
              { id: 1, name: 'Deep Home Cleaning', price: 'Est. $150-$250', icon: '✨' },
              { id: 2, name: 'Leaky Pipe Repair', price: 'Est. $80-$120', icon: '🔧' },
              { id: 3, name: 'Lawn Mowing & Care', price: 'Est. $50-$90', icon: '🌿' },
              { id: 4, name: 'TV Mounting', price: 'Est. $60-$100', icon: '📺' }
            ].map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-950 dark:bg-gray-800 p-4 rounded-2xl flex justify-between items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-[#1E7B7C]/20 dark:hover:border-cyan-500/20 box-border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-sm text-gray-900 dark:text-gray-100 dark:text-gray-100">{item.name}</span>
                </div>
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 dark:text-gray-500">{item.price}</span>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 dark:text-gray-400 rounded-xl font-black text-sm hover:bg-white dark:bg-gray-950 dark:hover:bg-gray-800 hover:border-[#1E7B7C] dark:hover:border-cyan-500 hover:text-[#1E7B7C] dark:hover:text-cyan-400 transition-all relative overflow-hidden">
            {t('dashboard.suggestions.browseAll')}
          </button>
        </div>
      </div>
    </div>
  )
}