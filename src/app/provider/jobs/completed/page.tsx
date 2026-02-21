'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Star, DollarSign, Filter, Search, ChevronRight, CheckCircle2 } from 'lucide-react'

export default function ProviderJobsCompletedPage() {
  const completedJobs = [
    {
      id: 1,
      title: 'Full House Deep Clean',
      client: 'Jessica Alba',
      dateCompleted: 'Oct 20, 2023',
      rating: 5,
      review: "Absolutely phenomenal work. The house hasn't looked this good since we moved in. Highly recommended professional.",
      amount: '$350.00',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Emergency Pipe Repair',
      client: 'Marcus Thorne',
      dateCompleted: 'Oct 15, 2023',
      rating: 4.5,
      review: "Arrived quickly and fixed the issue under an hour. Very professional and tidy.",
      amount: '$180.00',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Window Detailing - 2 Story',
      client: 'Emma W.',
      dateCompleted: 'Oct 10, 2023',
      rating: 5,
      review: "Crystal clear windows, zero streaks. Even cleaned the tracks which I didn't expect.",
      amount: '$220.00',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=300&fit=crop'
    }
  ]

  return (
    <div className="max-w-6xl relative pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">Job History</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Review your past work, client feedback, and completed earnings.</p>
        </div>
        <div className="flex p-1 bg-gray-100/50 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner w-fit">
          <Link href="/provider/jobs/active" className="px-6 py-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">
            Active
          </Link>
          <button className="px-6 py-2.5 bg-white dark:bg-gray-950 text-[#1E7B7C] shadow-md rounded-xl text-sm font-black transition-all flex items-center gap-2">
            Completed (124)
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white dark:border-gray-800">

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search by job title or client name..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50/50 dark:bg-gray-900/50 border border-transparent focus:border-[#1E7B7C]/20 rounded-2xl outline-none transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400"
            />
          </div>
          <button className="px-6 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl font-black text-gray-500 dark:text-gray-400 hover:bg-gray-100 transition-all flex items-center gap-2 border border-gray-100 dark:border-gray-800 border-b-4 active:border-b active:translate-y-[3px]">
            <Filter size={18} />
            Filter By Date
          </button>
        </div>

        {/* Job List */}
        <div className="space-y-6">
          {completedJobs.map((job) => (
            <div key={job.id} className="group bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:border-[#1E7B7C]/20 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8 relative overflow-hidden">

              {/* Highlight bar on left */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1E7B7C] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Thumbnail */}
              <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 relative">
                <Image src={job.image} alt={job.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-black text-gray-900 dark:text-gray-100">{job.title}</h3>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black uppercase tracking-widest">
                      <CheckCircle2 size={14} />
                      Completed
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 dark:text-gray-500 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {job.dateCompleted}
                    </span>
                    <span>•</span>
                    <span className="text-gray-900 dark:text-gray-100">Client: {job.client}</span>
                  </div>
                </div>

                {/* Rating & Review */}
                <div className="bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl p-4 border border-gray-100/50 dark:border-gray-800/50">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={star <= job.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-xs font-black ml-2">{job.rating}.0</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 italic">"{job.review}"</p>
                </div>
              </div>

              {/* Earnings & Actions */}
              <div className="flex flex-col justify-between items-end min-w-[140px] pl-6 border-l border-gray-100 dark:border-gray-800 md:h-32">
                <div className="text-right">
                  <div className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Earned</div>
                  <div className="text-3xl font-black text-gray-900 dark:text-gray-100">{job.amount}</div>
                </div>

                <button className="text-[#1E7B7C] font-black text-sm hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-10 flex justify-center">
          <button className="px-8 py-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 font-black rounded-2xl hover:bg-gray-100 transition-colors flex items-center gap-2">
            Load Older Jobs
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </div>
  )
}
