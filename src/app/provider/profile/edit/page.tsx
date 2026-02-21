'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Camera, Save, X, Plus, Trash2, Edit2,
    Briefcase, GraduationCap, Award, Globe,
    MapPin, Clock, DollarSign, GripVertical
} from 'lucide-react'
import { providerDashboardData } from '@/lib/mock-dashboards'

export default function ProviderProfileEditPage() {
    const { user } = providerDashboardData
    const [activeTab, setActiveTab] = useState('general')

    return (
        <div className="max-w-6xl relative pb-24">
            {/* Sticky Header Actions */}
            <div className="sticky top-0 z-50 -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16 py-4 bg-white dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 mb-10 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/provider/profile" className="p-2 text-gray-400 dark:text-gray-500 hover:bg-gray-100 rounded-xl transition-colors">
                        <X size={24} />
                    </Link>
                    <div>
                        <h1 className="text-xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Edit Profile</h1>
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400">Unsaved changes</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="/provider/profile" className="px-6 py-2.5 text-gray-500 dark:text-gray-400 font-bold hover:bg-gray-50 dark:bg-gray-900 rounded-xl transition-colors text-sm">
                        Cancel
                    </Link>
                    <button className="px-8 py-2.5 bg-[#1E7B7C] text-white font-black rounded-xl hover:bg-[#166566] transition-colors shadow-lg shadow-[#1E7B7C]/20 flex items-center gap-2 text-sm">
                        <Save size={16} />
                        Save Changes
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Sidebar Navigation */}
                <div className="lg:col-span-1 border-r border-gray-100 dark:border-gray-800 pr-6 hidden lg:block">
                    <div className="sticky top-[100px] flex flex-col gap-2">
                        {[
                            { id: 'general', label: 'General Info' },
                            { id: 'portfolio', label: 'Portfolio' },
                            { id: 'skills', label: 'Skills & Expertise' },
                            { id: 'history', label: 'Employment History' },
                            { id: 'education', label: 'Education & Certs' },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`text-left px-5 py-3.5 rounded-2xl font-bold text-sm transition-all ${activeTab === tab.id
                                        ? 'bg-[#E8F4F4] text-[#1E7B7C] shadow-inner'
                                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-900'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Editor Content */}
                <div className="lg:col-span-3 space-y-8">

                    {/* 1. General Info & Photo */}
                    <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-8">Profile Photo & Title</h2>

                        <div className="flex flex-col sm:flex-row gap-8 items-start mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                            {/* Photo Upload */}
                            <div className="relative group flex-shrink-0">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner group-hover:border-[#1E7B7C]/20 transition-colors">
                                    <Image src={user.avatar} alt="Profile" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <Camera size={24} className="text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Basic Details */}
                            <div className="flex-1 space-y-6 w-full">
                                <div>
                                    <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        defaultValue={user.name}
                                        className="w-full px-5 py-3.5 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 rounded-xl font-bold text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/10 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Professional Headline</label>
                                    <input
                                        type="text"
                                        defaultValue={user.role}
                                        className="w-full px-5 py-3.5 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 rounded-xl font-bold text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/10 transition-all"
                                        placeholder="e.g. Expert Plumber & Pipe Fitter"
                                    />
                                    <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mt-2">A strong title helps you stand out in search results.</p>
                                </div>
                            </div>
                        </div>

                        {/* Overview / Bio */}
                        <div className="mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                            <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 flex justify-between">
                                Professional Overview
                                <span className="text-[#1E7B7C]">720/5000</span>
                            </label>
                            <textarea
                                rows={6}
                                defaultValue="Professional cleaning expert with over 8 years of experience in residential and commercial detailing. I specialize in high-end restoration and weekly maintenance. My goal is to provide a 5-star experience every time, ensuring your space is not just clean, but transformed."
                                className="w-full px-5 py-4 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 rounded-2xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed focus:outline-none focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/10 transition-all resize-y"
                                placeholder="Highlight your top skills, experience, and interests. This is one of the first things clients will see on your profile."
                            />
                        </div>

                        {/* Hourly Rate & Location */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Hourly Rate ($)</label>
                                <div className="relative">
                                    <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                                    <input
                                        type="number"
                                        defaultValue="45.00"
                                        className="w-full pl-10 pr-5 py-3.5 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 rounded-xl font-bold text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/10 transition-all"
                                    />
                                </div>
                                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-2 flex justify-between">
                                    <span>Client pays: $45.00/hr</span>
                                    <span className="text-[#1E7B7C]">You receive: $36.00/hr (-20% fee)</span>
                                </p>
                            </div>
                            <div>
                                <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Primary Location</label>
                                <div className="relative">
                                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                                    <input
                                        type="text"
                                        defaultValue="New York, NY"
                                        className="w-full pl-10 pr-5 py-3.5 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 rounded-xl font-bold text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/10 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Skills & Expertise */}
                    <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Skills & Expertise</h2>
                            <span className="text-sm font-bold text-gray-400 dark:text-gray-500">4/15 Skills Added</span>
                        </div>

                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Search and add skills (e.g. Deep Cleaning, Plumbing)"
                                className="w-full px-5 py-4 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 rounded-xl font-medium text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#1E7B7C] transition-all"
                            />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {['Deep Kitchen Cleaning', 'Window Detailing', 'Post-Construction tidying', 'Move-in/Move-out'].map(skill => (
                                <div key={skill} className="flex items-center gap-2 px-4 py-2 bg-[#E8F4F4] text-[#1E7B7C] rounded-xl border border-[#1E7B7C]/10 group">
                                    <span className="text-sm font-bold">{skill}</span>
                                    <button className="text-[#1E7B7C]/50 hover:text-red-500 transition-colors">
                                        <X size={14} strokeWidth={3} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Portfolio Projects */}
                    <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Portfolio</h2>
                            <button className="p-2 bg-gray-50 dark:bg-gray-900 text-[#1E7B7C] rounded-xl hover:bg-[#E8F4F4] transition-colors border border-gray-100 dark:border-gray-800">
                                <Plus size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="col-span-1 sm:col-span-2 lg:col-span-3 border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-[#1E7B7C]/30 hover:bg-[#E8F4F4]/50 transition-all cursor-pointer group">
                                <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:shadow-md transition-all">
                                    <Plus size={32} className="text-gray-400 dark:text-gray-500 group-hover:text-[#1E7B7C]" />
                                </div>
                                <h4 className="font-black text-gray-900 dark:text-gray-100 mb-1">Add Portfolio Project</h4>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Showcase your past work to win more jobs.</p>
                            </div>

                            {[1, 2, 3].map(i => (
                                <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden group border border-gray-200 shadow-sm">
                                    <Image src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=400&h=300&fit=crop`} alt="Portfolio" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <button className="p-2 bg-white dark:bg-gray-950/20 hover:bg-white rounded-xl text-white transition-colors backdrop-blur-sm">
                                            <Edit2 size={18} />
                                        </button>
                                        <button className="p-2 bg-red-500/80 hover:bg-red-500 rounded-xl text-white transition-colors backdrop-blur-sm">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-xs font-bold truncate">Modern Bathroom Remodel</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Employment History */}
                    <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Employment History</h2>
                            <button className="p-2 bg-gray-50 dark:bg-gray-900 text-[#1E7B7C] rounded-xl hover:bg-[#E8F4F4] transition-colors border border-gray-100 dark:border-gray-800">
                                <Plus size={20} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: 'Lead Cleaning Specialist', company: 'Sparkle Homes LLC', period: 'Jan 2018 - Present' },
                                { title: 'Residential Cleaner', company: 'Merry Maids', period: 'Mar 2015 - Dec 2017' }
                            ].map((job, idx) => (
                                <div key={idx} className="flex gap-4 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-950/40 hover:border-[#1E7B7C]/20 transition-colors group">
                                    <div className="cursor-grab active:cursor-grabbing text-gray-300 hover:text-gray-500 dark:text-gray-400 pt-1">
                                        <GripVertical size={20} />
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-gray-400 dark:text-gray-500 h-fit">
                                        <Briefcase size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-black text-gray-900 dark:text-gray-100">{job.title}</h4>
                                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="text-gray-400 dark:text-gray-500 hover:text-[#1E7B7C]"><Edit2 size={16} /></button>
                                                <button className="text-gray-400 dark:text-gray-500 hover:text-red-500"><Trash2 size={16} /></button>
                                            </div>
                                        </div>
                                        <p className="text-sm font-bold text-[#1E7B7C]">{job.company}</p>
                                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">{job.period}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 5. Education & Certifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">Education</h2>
                                <button className="p-2 bg-gray-50 dark:bg-gray-900 text-[#1E7B7C] rounded-xl"><Plus size={16} /></button>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-950/40">
                                    <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-xl text-gray-400 dark:text-gray-500 h-fit"><GraduationCap size={20} /></div>
                                    <div>
                                        <h4 className="font-black text-gray-900 dark:text-gray-100 text-sm">Bachelor's Degree in Business</h4>
                                        <p className="text-xs font-bold text-[#1E7B7C] mb-1">NYU Stern</p>
                                        <p className="text-[10px] text-gray-500 dark:text-gray-400">2011 - 2015</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">Certifications</h2>
                                <button className="p-2 bg-gray-50 dark:bg-gray-900 text-[#1E7B7C] rounded-xl"><Plus size={16} /></button>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-950/40">
                                    <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-xl text-gray-400 dark:text-gray-500 h-fit"><Award size={20} /></div>
                                    <div>
                                        <h4 className="font-black text-gray-900 dark:text-gray-100 text-sm">Certified Green Cleaning Pro</h4>
                                        <p className="text-xs font-bold text-[#1E7B7C] mb-1">ISSA</p>
                                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Issued Jan 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
