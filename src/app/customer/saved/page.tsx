'use client'

import { Heart, Star, MapPin, CheckCircle, Search } from 'lucide-react'
import Link from 'next/link'

// Mock data for saved providers
const savedProviders = [
    {
        id: 1,
        name: 'Sarah Miller',
        category: 'Cleaning Services',
        rating: 4.9,
        reviews: 128,
        hourlyRate: '$35',
        location: 'Downtown, San Francisco',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        skills: ['Deep Cleaning', 'Move in/out', 'Organizing'],
        verified: true,
        isAvailable: true
    },
    {
        id: 2,
        name: 'Mike Johnson',
        category: 'Plumbing & Repairs',
        rating: 4.8,
        reviews: 95,
        hourlyRate: '$85',
        location: 'East Bay Area',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop',
        skills: ['Pipe Repair', 'Installation', 'Emergency'],
        verified: true,
        isAvailable: false
    },
    {
        id: 3,
        name: 'Emma Davis',
        category: 'Lawn Care',
        rating: 5.0,
        reviews: 42,
        hourlyRate: '$45',
        location: 'South City',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
        skills: ['Mowing', 'Landscaping', 'Tree Trimming'],
        verified: false,
        isAvailable: true
    }
]

export default function CustomerSavedProvidersPage() {
    return (
        <div className="max-w-6xl relative pb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">
                        Saved Providers
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                        Your bookmarked service professionals for quick access.
                    </p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1 max-w-lg">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search saved providers..."
                        className="w-full bg-white dark:bg-gray-950/60 backdrop-blur-md border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-[#1E7B7C]/20 shadow-sm transition-all"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="px-6 py-4 bg-white /60 backdrop-blur-md text-gray-700 dark:text-gray-300 font-bold text-sm rounded-2xl hover:bg-white dark:bg-gray-950 transition-colors shadow-sm whitespace-nowrap">
                        Category
                    </button>
                    <button className="px-6 py-4 bg-white /60 backdrop-blur-md text-gray-700 dark:text-gray-300 font-bold text-sm rounded-2xl hover:bg-white dark:bg-gray-950 transition-colors shadow-sm whitespace-nowrap">
                        Availability
                    </button>
                </div>
            </div>

            {/* Providers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedProviders.map((provider) => (
                    <div key={provider.id} className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10 overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
                        <div className="p-6 pb-0 relative">
                            {/* Saved Heart Button */}
                            <button className="absolute top-6 right-6 p-2.5 bg-white dark:bg-gray-950/80 backdrop-blur-md rounded-xl text-red-500 hover:scale-110 active:scale-95 transition-all shadow-sm z-10 group/btn">
                                <Heart size={18} className="fill-red-500 group-hover/btn:scale-110 transition-transform" />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <Link href="#" className="relative mb-4 group/avatar block">
                                    <div className="w-24 h-24 rounded-[1.5rem] overflow-hidden shadow-md group-hover/avatar:shadow-lg transition-all duration-300">
                                        <img src={provider.avatar} alt={provider.name} className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-500" />
                                    </div>
                                    {provider.isAvailable ? (
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-100 rounded-xl border-4 border-white dark:border-gray-800 flex items-center justify-center" title="Available Now">
                                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                                        </div>
                                    ) : (
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-100 rounded-xl border-4 border-white dark:border-gray-800 flex items-center justify-center" title="Busy">
                                            <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                                        </div>
                                    )}
                                </Link>

                                <div className="flex flex-col items-center">
                                    <Link href="#" className="flex items-center gap-1.5 mb-1 group/name">
                                        <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 group-hover/name:text-[#1E7B7C] transition-colors">{provider.name}</h3>
                                        {provider.verified && <CheckCircle size={16} className="text-[#1E7B7C]" />}
                                    </Link>
                                    <p className="text-sm font-bold text-[#1E7B7C] bg-[#E8F4F4] px-3 py-1 rounded-lg mb-3">
                                        {provider.category}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-xs font-bold text-gray-500 dark:text-gray-400 w-full justify-center mb-6">
                                    <div className="flex items-center gap-1 text-gray-900 dark:text-gray-100">
                                        <Star size={14} className="text-amber-400 fill-amber-400" />
                                        {provider.rating} <span className="text-gray-400 dark:text-gray-500">({provider.reviews})</span>
                                    </div>
                                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        <span className="truncate max-w-[100px]">{provider.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 pb-6 mt-auto">
                            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                {provider.skills.map(skill => (
                                    <span key={skill} className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 bg-gray-100/80 px-2 py-1.5 rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-1 py-3 bg-gray-50 dark:bg-gray-900 hover:bg-[#E8F4F4] text-[#1E7B7C] rounded-2xl font-bold text-sm transition-colors border border-gray-100 dark:border-gray-800">
                                    Message
                                </button>
                                <button className="flex-1 py-3 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-2xl font-black text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-105 active:scale-95 transition-all">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Empty State Card Example */}
                {savedProviders.length < 4 && (
                    <div className="bg-gray-50/50 dark:bg-gray-900/50 rounded-[32px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center min-h-[400px] dark:border-gray-800">
                        <div className="w-16 h-16 bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-center mb-4">
                            <Search className="text-gray-400 dark:text-gray-500" size={24} />
                        </div>
                        <h3 className="text-lg font-black text-gray-900 dark:text-gray-100 mb-2">Find More Providers</h3>
                        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-6 max-w-[200px]">
                            Explore top-rated professionals in your area.
                        </p>
                        <Link href="/services/all" className="px-6 py-3 bg-white dark:bg-gray-950 text-[#1E7B7C] rounded-xl font-bold text-sm hover:shadow-md transition-all">
                            Browse Services
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
