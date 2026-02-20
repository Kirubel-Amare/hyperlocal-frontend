'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MoreVertical, ClipboardList, FileText, Wallet } from 'lucide-react'
import { customerDashboardData } from '@/lib/mock-dashboards'

export default function CustomerDashboardPage() {
  const { user, stats, ongoingServices } = customerDashboardData
  const [activeTab, setActiveTab] = useState('Ongoing Services')

  const tabs = ['Posted Jobs', 'Ongoing Services', 'Service History']

  return (
    <div className="max-w-4xl">
      {/* Welcome Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-2">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-500 text-sm">
            You have {user.upcomingJobsCount} services scheduled for this week.
          </p>
        </div>
        <button className="bg-[#12b3b6] hover:bg-[#0e9598] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95">
          <span className="text-lg leading-none">+</span> Post a New Job
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Ongoing Jobs */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-36">
          <div className="flex justify-between items-start">
            <span className="text-sm text-gray-500 font-medium">Ongoing Jobs</span>
            <div className="bg-blue-50 text-blue-500 p-2 rounded-lg">
              <ClipboardList size={18} />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.ongoingJobs.count}</div>
            <div className="text-xs font-bold text-emerald-500 flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              {stats.ongoingJobs.trend}
            </div>
          </div>
        </div>

        {/* Pending Quotes */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-36">
          <div className="flex justify-between items-start">
            <span className="text-sm text-gray-500 font-medium">Pending Quotes</span>
            <div className="bg-orange-50 text-orange-400 p-2 rounded-lg">
              <FileText size={18} />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.pendingQuotes.count}</div>
            <div className="text-xs font-medium text-gray-400">{stats.pendingQuotes.subtitle}</div>
          </div>
        </div>

        {/* Total Spent */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-36">
          <div className="flex justify-between items-start">
            <span className="text-sm text-gray-500 font-medium">Total Spent</span>
            <div className="bg-teal-50 text-teal-500 p-2 rounded-lg">
              <Wallet size={18} />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalSpent.amount}</div>
            <div className="text-xs font-medium text-gray-400">{stats.totalSpent.subtitle}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-bold transition-all relative ${activeTab === tab ? 'text-[#12b3b6]' : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#12b3b6] rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Job Cards List */}
      <div className="space-y-6">
        {ongoingServices.map((job) => (
          <div key={job.id} className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
            {/* Top Row: Icon + Title + Status + Menu */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex gap-4">
                <div className="bg-[#F8FAFC] w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#12b3b6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Simplified generic icon representing the tool shown in the images */}
                    {job.title.includes('Pipe') && <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />}
                    {job.title.includes('Clean') && <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />}
                    {job.title.includes('Garden') && <path d="M12 22v-7l-2-2M12 15l2-2M12 15a4 4 0 0 0-4-4h-.5a3.5 3.5 0 0 1 0-7h1a4 4 0 0 0 4-4v0a4 4 0 0 0 4 4h1a3.5 3.5 0 0 1 0 7h-.5a4 4 0 0 0-4 4v0" />}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{job.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${job.statusColor ? job.statusColor :
                        job.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                          job.status === 'Pending' ? 'bg-gray-100 text-gray-600' :
                            'bg-gray-100 text-gray-600'
                      }`}>
                      {job.status === 'In Progress' && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block mr-1.5"></span>}
                      {job.status}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs font-medium text-gray-400">{job.type}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 p-1">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Middle Row: Provider Info + Timing */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  {job.provider.avatar ? (
                    <Image src={job.provider.avatar} alt={job.provider.name} width={40} height={40} className="w-full h-full object-cover" />
                  ) : (
                    <UserPlaceholderIcon />
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{job.provider.name}</div>
                  <div className="text-[11px] font-semibold text-gray-400">{job.provider.role}</div>
                </div>
              </div>

              {/* Progress Bar (Only for specific cards as seen in image) */}
              {!job.isPending && (
                <div className="absolute left-0 right-0 bottom-[-16px] h-1.5 bg-gray-100 rounded-full hidden sm:block mx-1">
                  <div className="h-full bg-[#12b3b6] rounded-full w-[60%]" />
                </div>
              )}

              <div className="sm:text-right">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {job.timing.label}
                </div>
                <div className="text-sm font-bold text-gray-900">
                  {job.timing.value}
                </div>
              </div>
            </div>

            {/* Bottom Row / Extra info (Optional) */}
            {job.fee && (
              <div className="flex justify-between items-center mb-6 pt-2">
                <span className="text-xs font-semibold text-gray-500">{job.fee}</span>
                <span className="text-xs font-bold text-emerald-500">{job.feeStatus}</span>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-gray-50">
              {job.isPending ? (
                <button className="flex-1 bg-[#F1F9F9] hover:bg-[#E2F5F5] text-[#12b3b6] py-2.5 rounded-xl text-sm font-bold transition-colors">
                  {job.actionText}
                </button>
              ) : (
                <button className="flex-1 bg-[#12b3b6] hover:bg-[#0e9598] text-white py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" /></svg>
                  {job.actionText}
                </button>
              )}

              <button className="flex-1 bg-[#F8FAFC] hover:bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-bold transition-colors">
                {job.secondaryActionText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function UserPlaceholderIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )
}
