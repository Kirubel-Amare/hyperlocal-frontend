'use client'

import Image from 'next/image'
import { Wallet2, UserPlus, Eye, Check, Zap, ChevronRight } from 'lucide-react'
import { providerDashboardData } from '@/lib/mock-dashboards'

export default function ProviderDashboardPage() {
  const { user, stats, newRequests, upcomingToday } = providerDashboardData

  return (
    <div className="max-w-6xl relative">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
          Dashboard Overview
        </h1>
        <p className="text-lg text-gray-500 font-medium">
          You have <span className="text-[#1E7B7C] font-black">{user.newRequestsCount} new requests</span> waiting for response.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Total Earnings */}
        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/20 border border-white flex flex-col justify-between h-48 hover:translate-y-[-4px] transition-all">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">TOTAL EARNINGS</span>
            <div className="p-2 bg-[#E8F4F4] text-[#1E7B7C] rounded-xl">
              <Wallet2 size={20} />
            </div>
          </div>
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">{stats.totalEarnings.amount}</div>
            <div className="text-sm font-black text-emerald-500 flex items-center gap-1.5 bg-emerald-50 w-fit px-2 py-1 rounded-lg">
              <Zap size={12} fill="currentColor" />
              {stats.totalEarnings.trend} this month
            </div>
          </div>
        </div>

        {/* Active Jobs */}
        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/20 border border-white flex flex-col justify-between h-48 hover:translate-y-[-4px] transition-all">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ACTIVE JOBS</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <UserPlus size={20} />
            </div>
          </div>
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">{stats.activeJobs.count}</div>
            <div className="text-sm font-bold text-gray-400">{stats.activeJobs.subtitle}</div>
          </div>
        </div>

        {/* Profile Views */}
        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/20 border border-white flex flex-col justify-between h-48 hover:translate-y-[-4px] transition-all">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">PROFILE VIEWS</span>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <Eye size={20} />
            </div>
          </div>
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">{stats.profileViews.count}</div>
            <div className="text-sm font-black text-emerald-500 flex items-center gap-1.5 bg-emerald-50 w-fit px-2 py-1 rounded-lg">
              <Zap size={12} fill="currentColor" />
              {stats.profileViews.trend}
            </div>
          </div>
        </div>
      </div>

      {/* New Requests */}
      <div className="mb-14">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-black text-gray-900">New Service Requests</h2>
          <button className="text-[#1E7B7C] font-black text-sm hover:underline flex items-center gap-1">
            View My Catalog
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="space-y-6">
          {newRequests.map((req) => (
            <div key={req.id} className="group bg-white/60 backdrop-blur-md rounded-[32px] p-6 shadow-xl shadow-gray-200/10 border border-white flex flex-col md:flex-row md:items-center gap-8 hover:translate-x-2 transition-all">
              <div className="w-full md:w-56 h-36 rounded-2xl overflow-hidden flex-shrink-0 relative shadow-inner">
                <Image src={req.image} alt={req.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3">
                  <div className="px-2 py-1 bg-black/40 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-lg border border-white/10">
                    Service Req
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-1 rounded-xl text-[10px] font-black tracking-wider shadow-sm ${req.urgencyColor ? req.urgencyColor : 'bg-red-50 text-red-500'
                    }`}>
                    {req.urgency}
                  </span>
                  <span className="text-xs font-black text-[#1E7B7C] bg-[#E8F4F4] px-2.5 py-1 rounded-xl">{req.distance} away</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{req.title}</h3>
                <p className="text-sm text-gray-500 font-medium italic">Sent by <span className="font-bold text-gray-700 not-italic">{req.client}</span> • {req.duration}</p>
              </div>
              <div className="flex items-center gap-3 md:pl-6 md:pr-2">
                <button className="px-8 py-4 rounded-2xl text-sm font-black text-gray-500 bg-white/50 border border-gray-100 hover:bg-white hover:text-red-500 hover:border-red-50 transition-all">
                  Decline
                </button>
                <button className="px-8 py-4 rounded-2xl text-sm font-black text-white bg-gradient-to-r from-[#1E7B7C] to-[#166566] hover:shadow-lg hover:shadow-[#1E7B7C]/20 flex items-center gap-2 transition-all">
                  <Check size={18} strokeWidth={4} />
                  Accept Request
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Upcoming Today */}
        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-10 shadow-xl shadow-gray-200/10 border border-white">
          <h2 className="text-xl font-black text-gray-900 mb-10 flex items-center gap-3">
            <div className="w-2 h-2 bg-[#1E7B7C] rounded-full animate-pulse" />
            Active Schedule
          </h2>
          <div className="relative border-l-2 border-gray-100/50 ml-[47px] space-y-10 pb-4">
            {upcomingToday.map((event) => (
              <div key={event.id} className="relative pl-10 group">
                <div className="absolute -left-[64px] bg-white/80 backdrop-blur-sm text-[10px] font-black text-[#1E7B7C] py-1.5 px-3 rounded-lg border border-gray-50 shadow-sm w-[60px] text-center">
                  {event.time}
                </div>
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-[4px] border-[#1E7B7C] shadow-md z-10 group-hover:scale-125 transition-transform" />

                <h4 className="font-black text-gray-900 text-[16px] group-hover:text-[#1E7B7C] transition-colors">{event.title}</h4>
                <p className="text-sm text-gray-500 font-medium mt-1">{event.location} • Client: {event.client}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Performance */}
        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-10 shadow-xl shadow-gray-200/10 border border-white flex flex-col">
          <h2 className="text-xl font-black text-gray-900 mb-2">Weekly Impact</h2>
          <p className="text-sm text-gray-400 font-medium mb-12">Your localized service reach and earnings.</p>

          <div className="flex-1 flex items-end justify-between px-2 gap-4 mt-auto min-h-[160px]">
            {[
              { day: 'M', height: '35%', isActive: false },
              { day: 'T', height: '60%', isActive: false },
              { day: 'W', height: '45%', isActive: false },
              { day: 'T', height: '70%', isActive: false },
              { day: 'F', height: '85%', isActive: false },
              { day: 'S', height: '55%', isActive: true },
              { day: 'S', height: '30%', isActive: false },
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center w-full group cursor-pointer">
                <div className="w-full h-full flex items-end bg-gray-50/30 rounded-2xl overflow-hidden shadow-inner">
                  <div
                    className={`w-full transition-all duration-700 rounded-t-xl ${bar.isActive
                      ? 'bg-gradient-to-t from-[#1E7B7C] to-[#166566] shadow-lg shadow-[#1E7B7C]/20'
                      : 'bg-gray-200 group-hover:bg-[#1E7B7C]/20'
                      }`}
                    style={{ height: bar.height }}
                  />
                </div>
                <span className={`text-[10px] font-black mt-4 transition-colors ${bar.isActive ? 'text-[#1E7B7C]' : 'text-gray-400'}`}>
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
