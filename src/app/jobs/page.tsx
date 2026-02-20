'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { mockJobsData, Job, mockUserAccount } from '@/lib/jobs-data'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
    Search,
    MapPin,
    Clock,
    DollarSign,
    Briefcase,
    Filter,
    Star,
    Zap,
    Award,
    CircleDollarSign,
    FileText,
    ChevronRight,
    Heart
} from 'lucide-react'

type TabType = 'Best Match' | 'Most Recent' | 'Saved'

export default function AllJobsPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [activeTab, setActiveTab] = useState<TabType>('Best Match')
    const [savedJobIds, setSavedJobIds] = useState<string[]>([])

    const jobs = useMemo(() => Object.values(mockJobsData) as Job[], [])

    const toggleSaveJob = (e: React.MouseEvent, id: string) => {
        e.preventDefault()
        e.stopPropagation()
        setSavedJobIds(prev =>
            prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]
        )
    }

    const processedJobs = useMemo(() => {
        let filtered = jobs.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.description.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory
            return matchesSearch && matchesCategory
        })

        if (activeTab === 'Saved') {
            return filtered.filter(job => savedJobIds.includes(job.id))
        }

        if (activeTab === 'Most Recent') {
            // Simple sort by ID or length of postedTime string as a proxy for this mock
            // In a real app we'd use ISO dates
            return [...filtered].sort((a, b) => {
                const timeA = a.postedTime.includes('minutes') ? 0 : parseInt(a.postedTime) || 999
                const timeB = b.postedTime.includes('minutes') ? 0 : parseInt(b.postedTime) || 999
                return timeA - timeB
            })
        }

        if (activeTab === 'Best Match') {
            // Prioritize jobs in the user's "Primary" category (e.g. Plumbing/Electrical)
            return [...filtered].sort((a, b) => {
                const aMatch = a.category === 'Plumbing' || a.category === 'Electrical' ? 0 : 1
                const bMatch = b.category === 'Plumbing' || b.category === 'Electrical' ? 0 : 1
                return aMatch - bMatch
            })
        }

        return filtered
    }, [jobs, searchQuery, selectedCategory, activeTab, savedJobIds])

    const categories = ['All', ...Array.from(new Set(jobs.map(j => j.category)))]

    // Counts for tabs
    const savedCount = savedJobIds.length

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-[#1E7B7C]/5 via-[#166566]/5 to-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-tr from-amber-500/5 via-orange-500/5 to-pink-500/5 rounded-full blur-[120px]" />
            </div>

            <Header showSidebar={false} />

            <main className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 mt-10">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Main Content Area: Left 3 Columns */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Page Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h1 className="text-4xl font-black text-gray-900 mb-2">Local Job Feed</h1>
                                <p className="text-lg text-gray-500 max-w-2xl">Find physical service opportunities and physical tasks in your local area.</p>
                            </div>
                        </div>

                        {/* TAB Navigation */}
                        <div className="flex items-center gap-8 border-b border-gray-100 pb-1">
                            {(['Best Match', 'Most Recent', 'Saved'] as TabType[]).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative py-4 text-sm font-black transition-all ${activeTab === tab ? 'text-[#1E7B7C]' : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        {tab}
                                        {tab === 'Saved' && savedCount > 0 && (
                                            <span className="px-1.5 py-0.5 bg-[#E8F4F4] text-[#1E7B7C] text-[10px] rounded-full">
                                                {savedCount}
                                            </span>
                                        )}
                                    </span>
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1E7B7C] rounded-full animate-in fade-in slide-in-from-bottom-1 duration-300" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Search & Filter Bar */}
                        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-gray-100 shadow-xl shadow-gray-200/20">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="md:col-span-2 relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search for services (e.g. Plumbing, Cleaning)"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-transparent focus:border-[#1E7B7C]/20 rounded-2xl focus:ring-4 focus:ring-[#1E7B7C]/5 transition-all outline-none text-gray-900"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                <div className="relative">
                                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <select
                                        className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-transparent focus:border-[#1E7B7C]/20 rounded-2xl focus:ring-4 focus:ring-[#1E7B7C]/5 transition-all outline-none text-gray-900 appearance-none font-medium text-sm md:text-base lg:text-sm xl:text-base 2xl:text-base"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Jobs List */}
                        <div className="space-y-6">
                            {processedJobs.length > 0 ? (
                                processedJobs.map(job => (
                                    <Link
                                        key={job.id}
                                        href={`/jobs/${job.id}`}
                                        className="block group bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-transparent hover:border-[#1E7B7C]/30 hover:shadow-2xl hover:shadow-[#1E7B7C]/5 transition-all duration-500 relative"
                                    >
                                        {/* Add Save Heart Button */}
                                        <button
                                            onClick={(e) => toggleSaveJob(e, job.id)}
                                            className={`absolute right-6 top-6 p-3 rounded-xl backdrop-blur-md border transition-all z-20 ${savedJobIds.includes(job.id)
                                                    ? 'bg-[#1E7B7C] border-[#1E7B7C] text-white'
                                                    : 'bg-white border-gray-100 text-gray-400 hover:text-red-500'
                                                }`}
                                        >
                                            <Heart size={20} className={savedJobIds.includes(job.id) ? 'fill-current' : ''} />
                                        </button>

                                        <div className="flex flex-col gap-6">
                                            {/* Job Image (Optional) */}
                                            {job.image && (
                                                <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-2">
                                                    <Image
                                                        src={job.image}
                                                        alt={job.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                    <div className="absolute top-4 left-4">
                                                        <span className="px-3 py-1.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/10">
                                                            Service Listing
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex flex-col md:flex-row justify-between gap-6">
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className="pr-12 md:pr-0">
                                                            <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#1E7B7C] transition-colors mb-2">
                                                                {job.title}
                                                            </h3>
                                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                                                <span className="flex items-center gap-1">
                                                                    <Clock size={14} />
                                                                    {job.postedTime}
                                                                </span>
                                                                <span className="flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                                                                    <MapPin size={14} />
                                                                    {job.specificLocation || 'On-site'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p className="text-gray-600 line-clamp-2 mb-6 leading-relaxed text-lg">
                                                        {job.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2">
                                                        {job.skills.slice(0, 4).map(skill => (
                                                            <span key={skill} className="px-3 py-1 bg-[#F0F7F7] rounded-lg text-xs font-bold text-[#1E7B7C]">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="md:w-64 flex flex-col justify-between border-l border-gray-100 pl-0 md:pl-8 pt-6 md:pt-0">
                                                    <div className="space-y-4">
                                                        <div className="flex items-start gap-4">
                                                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                                                <DollarSign size={20} />
                                                            </div>
                                                            <div>
                                                                <p className="text-lg font-black text-gray-900 leading-none">
                                                                    {job.budget.type === 'Fixed-price' ? job.budget.amount : `${job.budget.minRate}-${job.budget.maxRate}`}
                                                                </p>
                                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{job.budget.type}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-start gap-4">
                                                            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                                                                <Briefcase size={20} />
                                                            </div>
                                                            <div>
                                                                <p className="text-lg font-black text-gray-900 leading-none">{job.experienceLevel}</p>
                                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Level Required</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-6 pt-6 border-t border-gray-50">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="text-sm font-bold text-gray-900 leading-none">{job.client.name}</span>
                                                            <div className="flex">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star key={i} size={10} className={i < Math.round(job.client.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <p className="text-[10px] text-gray-400">Verified Partner · {job.client.history}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="bg-white/60 backdrop-blur-md rounded-3xl p-20 text-center border-2 border-dashed border-gray-100">
                                    <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        {activeTab === 'Saved' ? <Heart size={32} className="text-gray-300" /> : <Search size={32} className="text-gray-300" />}
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">
                                        {activeTab === 'Saved' ? 'No saved jobs yet' : 'No localized jobs matched'}
                                    </h3>
                                    <p className="text-gray-500">
                                        {activeTab === 'Saved' ? 'Save jobs to keep track of interesting opportunities.' : 'Try adjusting your filters or browsing other categories.'}
                                    </p>
                                    <button
                                        onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setActiveTab('Best Match') }}
                                        className="mt-6 px-8 py-3 bg-[#1E7B7C] text-white rounded-xl font-bold hover:shadow-lg transition-all"
                                    >
                                        Reset View
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Area: Right 1 Column */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* User Account Stats Card */}
                        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/20 sticky top-28">
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1E7B7C] to-[#166566] p-1 shadow-lg mb-4">
                                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center text-2xl font-black text-[#1E7B7C]">
                                        KA
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-gray-900">{mockUserAccount.name}</h3>
                                <p className="text-sm font-bold text-[#1E7B7C] mt-1">{mockUserAccount.membershipType}</p>

                                <div className="flex items-center gap-1 mt-2">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} size={12} className={star <= Math.round(mockUserAccount.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-gray-500">5.0</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                            <Zap size={18} />
                                        </div>
                                        <span className="text-sm font-bold text-gray-700">Quotes Left</span>
                                    </div>
                                    <span className="text-lg font-black text-gray-900">{mockUserAccount.quotesLeft}</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                            <CircleDollarSign size={18} />
                                        </div>
                                        <span className="text-sm font-bold text-gray-700">Earnings</span>
                                    </div>
                                    <span className="text-lg font-black text-emerald-600">{mockUserAccount.totalEarnings}</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                            <FileText size={18} />
                                        </div>
                                        <span className="text-sm font-bold text-gray-700">Active Proposals</span>
                                    </div>
                                    <span className="text-lg font-black text-gray-900">{mockUserAccount.activeProposals}</span>
                                </div>
                            </div>

                            <button className="w-full mt-8 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group">
                                Upgrade Profile
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Account Success</h4>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-2">
                                    <div className="h-full w-[85%] bg-gradient-to-r from-[#1E7B7C] to-emerald-500 rounded-full" />
                                </div>
                                <p className="text-[10px] text-gray-500 font-bold">85% Profile Completion</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}
