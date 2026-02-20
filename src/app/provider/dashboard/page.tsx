'use client'

import Image from 'next/image'
import { Wallet2, UserPlus, Eye, Check } from 'lucide-react'
import { providerDashboardData } from '@/lib/mock-dashboards'

export default function ProviderDashboardPage() {
  const { user, stats, newRequests, upcomingToday } = providerDashboardData

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-500">
          You have <span className="text-[#1E7B7C] font-bold">{user.newRequestsCount} new requests</span> waiting for response.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Total Earnings */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">TOTAL EARNINGS</span>
            <Wallet2 size={20} className="text-[#1E7B7C]" />
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{stats.totalEarnings.amount}</div>
            <div className="text-sm font-bold text-emerald-500 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              {stats.totalEarnings.trend}
            </div>
          </div>
        </div>

        {/* Active Jobs */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">ACTIVE JOBS</span>
            <UserPlus size={20} className="text-[#1E7B7C]" />
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stats.activeJobs.count}</div>
            <div className="text-sm font-medium text-gray-400">{stats.activeJobs.subtitle}</div>
          </div>
        </div>

        {/* Profile Views */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">PROFILE VIEWS</span>
            <Eye size={20} className="text-[#1E7B7C]" />
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{stats.profileViews.count}</div>
            <div className="text-sm font-bold text-emerald-500 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              {stats.profileViews.trend}
            </div>
          </div>
        </div>
      </div>

      {/* New Requests */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-bold text-gray-900">New Requests</h2>
          <button className="text-[#1E7B7C] font-bold text-sm hover:underline">View All</button>
        </div>

        <div className="space-y-4">
          {newRequests.map((req) => (
            <div key={req.id} className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
                <Image src={req.image} alt={req.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-wider ${req.urgencyColor ? req.urgencyColor : 'bg-red-50 text-red-500'
                    }`}>
                    {req.urgency}
                  </span>
                  <span className="text-xs font-semibold text-[#1E7B7C]">{req.distance}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{req.title}</h3>
                <p className="text-sm text-gray-500">Client: {req.client} • {req.duration}</p>
              </div>
              <div className="flex items-center gap-3 sm:pl-4 sm:pr-2">
                <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                  Decline
                </button>
                <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-[#1E7B7C] hover:bg-[#166566] flex items-center gap-2 transition-colors">
                  <Check size={16} strokeWidth={3} />
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Upcoming Today */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-8">Upcoming Today</h2>
          <div className="relative border-l-2 border-gray-100 ml-[47px] space-y-8 pb-4">
            {upcomingToday.map((event) => (
              <div key={event.id} className="relative pl-8">
                {/* Time Badge positioned on the line */}
                <div className="absolute -left-[54px] bg-white text-xs font-bold text-gray-400 py-1 w-[50px] text-right">
                  {event.time}
                </div>
                {/* Timeline Dot */}
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#E8F4F4] border-[3px] border-white ring-1 ring-[#1E7B7C]" />

                <h4 className="font-bold text-gray-900 text-[15px]">{event.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{event.location} • {event.client}</p>
                <div className="absolute right-0 top-2 text-gray-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Performance */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Weekly Performance</h2>
          <p className="text-sm text-gray-400 mb-10">Your service reach and income over the last 7 days</p>

          <div className="flex-1 flex items-end justify-between px-2 gap-2 mt-auto">
            {/* Simple CSS Bar Chart representing performance */}
            {[
              { day: 'M', height: '35%', isActive: false },
              { day: 'T', height: '60%', isActive: false },
              { day: 'W', height: '45%', isActive: false },
              { day: 'T', height: '70%', isActive: false },
              { day: 'F', height: '85%', isActive: false },
              { day: 'S', height: '55%', isActive: true }, /* active day styled in teal */
              { day: 'S', height: '30%', isActive: false },
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center w-full group cursor-pointer">
                <div className="w-full h-[140px] flex items-end bg-gray-50/50 rounded-t-lg overflow-hidden">
                  <div
                    className={`w-full transition-all duration-500 rounded-t-sm ${bar.isActive ? 'bg-[#1E7B7C]' : 'bg-[#eaf4f4] group-hover:bg-[#d0e9e9]'
                      }`}
                    style={{ height: bar.height }}
                  />
                </div>
                <span className={`text-[10px] font-bold mt-4 transition-colors ${bar.isActive ? 'text-[#1E7B7C]' : 'text-gray-400'
                  }`}>
                  {bar.day}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
