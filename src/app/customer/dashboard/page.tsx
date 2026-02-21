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
    switch (activeTab) {
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
    <div className="max-w-6xl relative pb-24">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
            Welcome back, {user.name}
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            You have <span className="text-[#1E7B7C] font-bold">{user.upcomingJobsCount} services</span> scheduled for this week.
          </p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-2xl font-black flex items-center gap-2 hover:shadow-xl hover:shadow-[#1E7B7C]/20 transition-all active:scale-95 group">
          <Plus size={18} className="group-hover:rotate-90 transition-transform" />
          Request a Service
        </button>
      </div>

      {/* Primary KPI Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Main Status Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-[40px] p-10 shadow-2xl shadow-[#1E7B7C]/20 text-white relative overflow-hidden flex flex-col justify-between min-h-[220px] border border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="flex justify-between items-start relative z-10 mb-8">
            <span className="text-sm font-black text-white/60 uppercase tracking-widest block">Active Service Requests</span>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl">
              <ClipboardList size={32} className="text-white" />
            </div>
          </div>
          <div className="relative z-10 flex items-end justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-6xl font-black">{stats.ongoingJobs.count}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold bg-white/10 backdrop-blur-sm w-fit px-3 py-1.5 rounded-xl border border-white/20">
                {stats.ongoingJobs.trend}
              </div>
            </div>
            <button className="px-5 py-2.5 bg-white text-[#1E7B7C] rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm">
              View All
            </button>
          </div>
        </div>

        {/* Vertical Stack Stats */}
        <div className="flex flex-col gap-6">
          <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-6 shadow-xl shadow-gray-200/10 border border-white flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-orange-50 text-orange-500 rounded-xl">
                <FileText size={20} />
              </div>
              <div>
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Pending Quotes</span>
                <div className="text-2xl font-black text-gray-900">{stats.pendingQuotes.count}</div>
              </div>
            </div>
            <p className="text-xs font-bold text-gray-500">{stats.pendingQuotes.subtitle}</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-6 shadow-xl shadow-gray-200/10 border border-white flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl">
                <Wallet size={20} />
              </div>
              <div>
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Total Spent</span>
                <div className="text-2xl font-black text-gray-900">{stats.totalSpent.amount}</div>
              </div>
            </div>
            <p className="text-xs font-bold text-gray-500">{stats.totalSpent.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

        {/* Left Side: Recent Activity */}
        <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900">Recent Services</h2>
            <button className="text-[#1E7B7C] font-black text-sm hover:underline">View All</button>
          </div>

          <div className="space-y-4">
            {ongoingServices.map((service: any) => (
              <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100/50 hover:bg-white transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden relative shadow-sm">
                    <img src={service.provider.avatar} alt={service.provider.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-sm mb-0.5">{service.title}</h4>
                    <p className="text-xs font-bold text-gray-500">{service.provider.name} • {service.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-gray-900 mb-1">{service.amount}</div>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${service.status === 'In Progress' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Suggested Services */}
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