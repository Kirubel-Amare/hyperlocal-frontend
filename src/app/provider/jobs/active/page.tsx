'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, MapPin, Clock, Calendar, MessageSquare, MoreHorizontal, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react'

export default function ProviderJobsActivePage() {
  const activeJobs = [
    {
      id: 1,
      title: 'Post-Construction Deep Clean',
      client: 'Sarah Miller',
      location: '122 Oak Street, NY',
      date: 'Oct 25, 2023',
      time: '09:00 AM - 02:00 PM',
      status: 'In Progress',
      progress: 65,
      amount: '$450.00',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
      warning: null
    },
    {
      id: 2,
      title: 'Weekly Office Tidying',
      client: 'TechStarts Inc.',
      location: '45 Park Lane, Suite 300',
      date: 'Oct 26, 2023',
      time: '05:00 PM - 08:00 PM',
      status: 'Scheduled',
      progress: 0,
      amount: '$180.00',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      warning: 'Client requested to reschedule'
    },
    {
      id: 3,
      title: 'Move-out Detailing',
      client: 'David K.',
      location: '88 River Read, Apt 4B',
      date: 'Oct 28, 2023',
      time: '10:00 AM - 04:00 PM',
      status: 'Scheduled',
      progress: 0,
      amount: '$320.00',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=300&fit=crop',
      warning: null
    }
  ]

  return (
    <div className="max-w-6xl relative pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">Active Jobs</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Manage your ongoing projects and upcoming schedule.</p>
        </div>
        <div className="flex p-1 bg-gray-100/50 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner w-fit">
          <button className="px-6 py-2.5 bg-white dark:bg-gray-950 text-[#1E7B7C] shadow-md rounded-xl text-sm font-black transition-all flex items-center gap-2">
            Active (3)
          </button>
          <Link href="/provider/jobs/completed" className="px-6 py-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">
            Completed
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        {activeJobs.map((job) => (
          <div key={job.id} className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/10 border border-white hover:shadow-2xl transition-all duration-300 group flex flex-col xl:flex-row gap-8">

            {/* Image / Visual Status */}
            <div className="w-full xl:w-64 h-48 rounded-2xl overflow-hidden relative flex-shrink-0 border border-gray-100 dark:border-gray-800">
              <Image src={job.image} alt={job.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                <div className="flex justify-between items-start">
                  <div className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg backdrop-blur-md ${job.status === 'In Progress' ? 'bg-[#1E7B7C]/90 text-white' : 'bg-white dark:bg-gray-950/90 text-gray-900 dark:text-gray-100'
                    }`}>
                    {job.status}
                  </div>
                </div>
                <div>
                  <div className="text-white font-black text-xl mb-1">{job.amount}</div>
                  <div className="text-white/80 text-xs font-bold">Escrow Funded</div>
                </div>
              </div>
            </div>

            {/* Core Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 group-hover:text-[#1E7B7C] transition-colors">{job.title}</h3>
                  <button className="p-2 text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:bg-gray-900 rounded-xl transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                  Client: <span className="text-gray-900 dark:text-gray-100">{job.client}</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 rounded-lg">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">Location</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-gray-100">{job.location}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 rounded-lg">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">Schedule</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-gray-100">{job.date} • {job.time}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warnings / Alerts */}
              {job.warning && (
                <div className="flex items-center gap-2 px-4 py-3 bg-amber-50 text-amber-700 rounded-xl text-sm font-bold border border-amber-100 mb-6">
                  <AlertCircle size={16} />
                  {job.warning}
                </div>
              )}

              {/* Progress Bar (If in progress) */}
              {job.status === 'In Progress' && (
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-black mb-2">
                    <span className="text-[#1E7B7C] uppercase tracking-widest">Job Progress</span>
                    <span className="text-gray-900 dark:text-gray-100">{job.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#1E7B7C] to-[#166566] rounded-full"
                      style={{ width: `${job.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                <button className="flex-1 py-3.5 bg-[#1E7B7C] text-white rounded-xl font-black text-sm hover:bg-[#166566] shadow-lg shadow-[#1E7B7C]/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                  <Briefcase size={16} />
                  Manage Job
                </button>
                <button className="px-6 py-3.5 bg-gray-50 dark:bg-gray-900 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2 border border-gray-100 dark:border-gray-800">
                  <MessageSquare size={16} />
                  Message
                </button>
                {job.status === 'In Progress' && (
                  <button className="px-6 py-3.5 bg-emerald-50 text-emerald-600 rounded-xl font-bold text-sm hover:bg-emerald-100 transition-all flex items-center gap-2 border border-emerald-100">
                    <CheckCircle2 size={16} />
                    Submit Work
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
