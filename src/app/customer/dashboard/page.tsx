// app/dashboard/customer/page.tsx
'use client'

import { useState } from 'react'
import { ClipboardList, FileText, Wallet, Plus } from 'lucide-react'
import { customerDashboardData } from '@/lib/mock-dashboards'
import { StatCard } from '@/components/dashboard/stat-card'
import { TabNavigation } from '@/components/dashboard/tab-navigation'
import { JobCard } from '@/components/dashboard/job-card'

export default function CustomerDashboardPage() {
  const { user, stats, ongoingServices, postedJobs, serviceHistory } = customerDashboardData
  const [activeTab, setActiveTab] = useState('Ongoing Services')

  const tabs = ['Posted Jobs', 'Ongoing Services', 'Service History']

  const getJobsForTab = () => {
    switch(activeTab) {
      case 'Posted Jobs':
        return postedJobs || []
      case 'Ongoing Services':
        return ongoingServices || []
      case 'Service History':
        return serviceHistory || []
      default:
        return []
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Welcome Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-2">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-500 text-sm">
            You have {user.upcomingJobsCount} services scheduled for this week.
          </p>
        </div>
        <button className="bg-[#1E7B7C] hover:bg-[#166566] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1E7B7C]/20 active:scale-95">
          <Plus size={18} />
          Post a New Job
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard
          title="Ongoing Jobs"
          value={stats.ongoingJobs.count}
          icon={<ClipboardList size={18} />}
          iconBgColor="bg-[#E8F4F4]"
          iconColor="text-[#1E7B7C]"
          trend={stats.ongoingJobs.trend}
          trendColor="text-[#1E7B7C]"
        />

        <StatCard
          title="Pending Quotes"
          value={stats.pendingQuotes.count}
          icon={<FileText size={18} />}
          iconBgColor="bg-orange-50"
          iconColor="text-orange-400"
          subtitle={stats.pendingQuotes.subtitle}
        />

        <StatCard
          title="Total Spent"
          value={stats.totalSpent.amount}
          icon={<Wallet size={18} />}
          iconBgColor="bg-emerald-50"
          iconColor="text-emerald-500"
          subtitle={stats.totalSpent.subtitle}
        />
      </div>

      {/* Tabs */}
      <TabNavigation 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        activeColor="text-[#1E7B7C]"
      />

      {/* Job Cards List */}
      <div className="space-y-6">
        {getJobsForTab().map((job) => (
          <JobCard key={job.id} job={job} />
        ))}

        {getJobsForTab().length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <p className="text-gray-500">No {activeTab.toLowerCase()} to display</p>
          </div>
        )}
      </div>
    </div>
  )
}