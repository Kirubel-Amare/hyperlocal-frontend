'use client'

import React, { useState } from 'react'
import {
    Search, Filter, MapPin, Clock, DollarSign, Zap,
    ChevronRight, Star, ShieldCheck, Briefcase,
    TrendingUp, Layers, SlidersHorizontal
} from 'lucide-react'
import { Job } from '@/types/job'
import { mockJobsData } from '@/lib/jobs-data'
import { quotesApi } from '@/lib/api/quotes'
import ApplyModal from '@/components/modals/ApplyModal'

export default function BrowseRequestsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedJob, setSelectedJob] = useState<Job | null>(null)
    const [filterCategory, setFilterCategory] = useState('All')

    const jobs = Object.values(mockJobsData)
    const categories = ['All', 'Plumbing', 'Cleaning', 'Electrical', 'Painting', 'Gardening', 'HVAC', 'Pet Care']

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = filterCategory === 'All' || job.category === filterCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="max-w-6xl mx-auto pb-24">
            {/* Apply Modal */}
            {selectedJob && (
                <ApplyModal
                    job={selectedJob}
                    onClose={() => setSelectedJob(null)}
                />
            )}

            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#1E7B7C]/20">
                            <Briefcase size={24} />
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Browse Jobs</h1>
                    </div>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium max-w-xl">Find the perfect service requests in your area and grow your business.</p>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-gray-950/60 backdrop-blur-md p-2 rounded-3xl border border-white shadow-xl shadow-gray-200/5">
                    <div className="px-6 py-3 border-r border-gray-100 dark:border-gray-800 hidden lg:block">
                        <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Available Connects</p>
                        <div className="flex items-center gap-2">
                            <Zap size={14} className="text-amber-500 fill-amber-500" />
                            <span className="text-lg font-black text-gray-900 dark:text-gray-100">124</span>
                        </div>
                    </div>
                    <div className="px-6 py-3 hidden lg:block">
                        <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Active Proposals</p>
                        <div className="flex items-center gap-2">
                            <TrendingUp size={14} className="text-[#1E7B7C]" />
                            <span className="text-lg font-black text-gray-900 dark:text-gray-100">3</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
                <div className="lg:col-span-3 relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-[#1E7B7C] transition-colors">
                        <Search size={22} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for jobs (e.g. plumbing, cleaning...)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white dark:bg-gray-950/80 backdrop-blur-md border border-white focus:border-[#1E7B7C] focus:ring-8 focus:ring-[#1E7B7C]/5 rounded-[32px] pl-16 pr-8 py-6 text-lg font-medium text-gray-900 dark:text-gray-100 outline-none transition-all shadow-xl shadow-gray-200/10 placeholder:text-gray-300"
                    />
                </div>
                <button className="bg-white dark:bg-gray-950/80 backdrop-blur-md border border-white hover:border-gray-200 rounded-[32px] px-8 py-6 flex items-center justify-center gap-4 text-gray-900 dark:text-gray-100 font-black transition-all shadow-xl shadow-gray-200/10 hover:shadow-2xl">
                    <SlidersHorizontal size={22} />
                    Filters
                </button>
            </div>

            {/* Categories Scroller */}
            <div className="flex gap-3 overflow-x-auto pb-6 mb-10 no-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`px-8 py-4 rounded-2xl font-black text-sm whitespace-nowrap transition-all border ${filterCategory === cat
                            ? 'bg-[#1E7B7C] text-white border-[#1E7B7C] shadow-xl shadow-[#1E7B7C]/20 scale-105'
                            : 'bg-white dark:bg-gray-950/60 backdrop-blur-md text-gray-500 dark:text-gray-400 border-white hover:border-gray-200'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-6">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            className="group bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-white hover:border-[#1E7B7C]/30 rounded-[40px] p-8 lg:p-10 shadow-xl shadow-gray-200/10 hover:shadow-2xl transition-all relative overflow-hidden flex flex-col lg:flex-row gap-8"
                        >
                            {/* Status Badge */}
                            <div className="absolute top-0 right-0 p-10 pointer-events-none">
                                <div className="bg-[#E8F4F4] text-[#1E7B7C] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 group-hover:scale-110 transition-transform origin-right">
                                    <div className="w-1.5 h-1.5 bg-[#1E7B7C] rounded-full animate-pulse" />
                                    Active Req
                                </div>
                            </div>

                            {/* Job Info */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-xs font-black text-[#1E7B7C] uppercase tracking-widest">
                                        <Layers size={14} />
                                        {job.category}
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight group-hover:text-[#1E7B7C] transition-colors">{job.title}</h3>
                                </div>

                                <p className="text-gray-600 font-medium leading-relaxed max-w-3xl line-clamp-2 italic">
                                    "{job.description}"
                                </p>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    {job.skills.slice(0, 3).map((skill: string) => (
                                        <span key={skill} className="px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 rounded-xl text-xs font-black uppercase tracking-widest group-hover:bg-[#E8F4F4] group-hover:text-[#1E7B7C] transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                    {job.skills.length > 3 && (
                                        <span className="px-4 py-2 text-gray-400 dark:text-gray-500 text-xs font-black">+{job.skills.length - 3} MORE</span>
                                    )}
                                </div>

                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 border-t border-gray-50">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                            <DollarSign size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Est. Budget</p>
                                            <p className="font-black text-gray-900 dark:text-gray-100">{job.budget.type === 'Fixed-price' ? job.budget.amount : `${job.budget.minRate}-${job.budget.maxRate}/hr`}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Location</p>
                                            <p className="font-black text-gray-900 dark:text-gray-100">{job.distance || 'Near you'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                            <Clock size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Posted</p>
                                            <p className="font-black text-gray-900 dark:text-gray-100">{job.postedTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Sidebar */}
                            <div className="lg:w-72 flex flex-col justify-between pt-4 lg:pt-0 lg:pl-8 lg:border-l border-gray-50">
                                <div className="bg-gray-50/50 dark:bg-gray-900/50 rounded-3xl p-6 mb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Client Verified</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-amber-500">
                                            <Star size={12} fill="currentColor" />
                                            <span className="text-xs font-black">{job.client.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white dark:bg-gray-950 rounded-xl flex items-center justify-center text-gray-400 dark:text-gray-500 font-black text-sm">
                                            {job.client.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-gray-900 dark:text-gray-100 line-clamp-1">{job.client.name}</p>
                                            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500">{job.client.totalSpent} spent</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                        <Zap size={12} className="text-amber-500 fill-amber-500" />
                                        Requires 4 Connects
                                    </div>
                                    <button
                                        onClick={() => setSelectedJob(job)}
                                        className="w-full py-5 bg-gray-900 text-white rounded-[24px] font-black flex items-center justify-center gap-2 hover:bg-[#1E7B7C] transition-all group/btn shadow-xl shadow-gray-900/10 hover:shadow-[#1E7B7C]/25 active:scale-95"
                                    >
                                        Apply Now
                                        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="w-full py-4 border border-gray-100 dark:border-gray-800 rounded-[24px] font-bold text-gray-500 dark:text-gray-400 text-sm hover:bg-gray-50 dark:bg-gray-900 transition-all active:scale-95">
                                        Save for later
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white dark:bg-gray-950/40 backdrop-blur-md rounded-[40px] border border-dashed border-gray-200">
                        <div className="w-20 h-20 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                            <Search size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-2">No jobs found</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">Try adjusting your search or category filters.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
