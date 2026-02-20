'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { mockJobsData } from '@/lib/jobs-data'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
    MapPin,
    Clock,
    DollarSign,
    Calendar,
    Briefcase,
    Star,
    CheckCircle,
    ChevronRight,
    Share2,
    Heart,
    AlertCircle,
    ShieldCheck,
    Zap,
    Navigation as NavigationIcon
} from 'lucide-react'

export default function JobPostPage() {
    const params = useParams()
    const jobId = params.id as string
    const job = mockJobsData[jobId] || mockJobsData['job-1']

    if (!job) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
                    <p className="text-gray-600">The job you are looking for does not exist.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-[#1E7B7C]/5 via-[#166566]/5 to-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-tr from-amber-500/5 via-orange-500/5 to-pink-500/5 rounded-full blur-[120px]" />
            </div>

            <Header showSidebar={true} />

            <main className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">

                {/* Breadcrumb / Top Actions */}
                <div className="flex items-center justify-between mb-8">
                    <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#1E7B7C] transition-colors">
                        <ChevronRight size={16} className="rotate-180" />
                        Back to Job Feed
                    </button>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-gray-100 rounded-xl text-sm font-bold text-gray-600 hover:bg-white transition-all">
                            <Share2 size={16} />
                            Share
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-gray-100 rounded-xl text-sm font-bold text-gray-600 hover:bg-white transition-all">
                            <Heart size={16} />
                            Save
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Job Image Section (Optional) */}
                        {job.image && (
                            <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/20">
                                <Image
                                    src={job.image}
                                    alt={job.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-6 left-6 flex gap-2">
                                    <span className="px-4 py-2 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-xl border border-white/10 flex items-center gap-2">
                                        <ShieldCheck size={14} className="text-[#1E7B7C]" />
                                        Verified Service
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Job Title & Header */}
                        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{job.title}</h1>
                                    <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
                                        <span className="px-3 py-1 bg-[#E8F4F4] text-[#1E7B7C] rounded-lg">{job.category}</span>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                                            <span className="flex items-center gap-1.5 text-amber-600 font-bold bg-amber-50 px-2.5 py-1 rounded-xl">
                                                <NavigationIcon size={16} />
                                                {job.distance || '0.5 miles away'}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-xl">
                                                <MapPin size={16} />
                                                {job.specificLocation || 'On-site Service'}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-xl">
                                                <Clock size={16} />
                                                Posted {job.postedTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-50 pt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Job Description</h3>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg">
                                    {job.description}
                                </p>
                            </div>
                        </div>

                        {/* Job Meta Details (Budget, Duration, Level) */}
                        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                                    <DollarSign size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-gray-900 leading-tight">
                                        {job.budget.type === 'Fixed-price' ? (job.budget.amount) : (`${job.budget.minRate}-${job.budget.maxRate}`)}
                                    </h4>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-bold">{job.budget.type}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-gray-900 leading-tight">{job.duration}</h4>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-bold">Est. Timeframe</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-gray-900 leading-tight">{job.experienceLevel}</h4>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-bold">Expertise Level</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Zap size={20} className="text-[#1E7B7C]" />
                                Required Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {job.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-5 py-2.5 bg-gray-50 hover:bg-[#E8F4F4] hover:text-[#1E7B7C] transition-all rounded-xl text-sm font-bold text-gray-600 border border-transparent hover:border-[#1E7B7C]/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* Action Card */}
                        <div className="bg-[#1E7B7C] rounded-3xl p-8 shadow-2xl shadow-[#1E7B7C]/20 text-white sticky top-28">
                            <Link
                                href="/messages"
                                className="w-full py-5 bg-white text-[#1E7B7C] font-black rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mb-4 group shadow-lg transition-transform"
                            >
                                Submit a Proposal
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="w-full py-5 border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all mb-8">
                                Save Listing
                            </button>

                            <div className="space-y-6 text-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <p className="font-medium text-white/90">Work protected by LocalService Escrow and Safety protocols.</p>
                                </div>
                            </div>
                        </div>

                        {/* Client Info Card */}
                        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">About the Client</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center font-bold text-[#1E7B7C]">
                                        {job.client.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className="font-bold text-gray-900">{job.client.name}</span>
                                            {job.client.paymentVerified && (
                                                <CheckCircle size={16} className="text-[#1E7B7C]" />
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <Star
                                                        key={star}
                                                        size={12}
                                                        className={star <= Math.round(job.client.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}
                                                    />
                                                ))}
                                            </div>
                                            <span className="font-bold text-gray-900">{job.client.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 border-t border-gray-50 pt-6 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500 font-medium">Location</span>
                                        <span className="font-bold text-gray-900">{job.client.location}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500 font-medium">Invested</span>
                                        <span className="font-bold text-gray-900">{job.client.totalSpent}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500 font-medium">Platform Activity</span>
                                        <span className="font-bold text-gray-900">{job.client.history}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500 font-medium">Member Since</span>
                                        <span className="font-bold text-gray-900">{job.client.memberSince}</span>
                                    </div>
                                    <div className="pt-4">
                                        <Link
                                            href="/messages"
                                            className="block w-full py-3 bg-gray-900 text-white text-center font-bold rounded-xl hover:bg-gray-800 transition-all text-sm"
                                        >
                                            Contact Client
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}
