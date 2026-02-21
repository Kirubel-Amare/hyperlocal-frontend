'use client'

import React from 'react'
import Image from 'next/image'
import { Star, TrendingUp, MessageSquare, Filter, ChevronDown, CheckCircle2 } from 'lucide-react'

export default function ProviderReviewsPage() {
    const reviews = [
        {
            id: 1,
            client: 'Jessica Alba',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
            date: 'Oct 20, 2023',
            rating: 5,
            jobTitle: 'Full House Deep Clean',
            text: "Absolutely phenomenal work. The house hasn't looked this good since we moved in. Highly recommended professional.",
            verified: true
        },
        {
            id: 2,
            client: 'Marcus Thorne',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
            date: 'Oct 15, 2023',
            rating: 4.5,
            jobTitle: 'Emergency Pipe Repair',
            text: "Arrived quickly and fixed the issue under an hour. Very professional and tidy.",
            verified: true
        },
        {
            id: 3,
            client: 'Emma W.',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
            date: 'Oct 10, 2023',
            rating: 5,
            jobTitle: 'Window Detailing - 2 Story',
            text: "Crystal clear windows, zero streaks. Even cleaned the tracks which I didn't expect.",
            verified: true
        }
    ]

    return (
        <div className="max-w-6xl relative pb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">My Reviews</h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">See what clients are saying about your provided services.</p>
                </div>
                <button className="px-6 py-3 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 dark:bg-gray-900 transition-all shadow-sm text-gray-500 dark:text-gray-400">
                    <MessageSquare size={18} />
                    Request Testimonial
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

                {/* Overall Score */}
                <div className="bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-[40px] p-10 shadow-3xl shadow-[#1E7B7C]/20 text-white flex flex-col items-center justify-center text-center border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-gray-950/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                    <div className="relative z-10">
                        <h2 className="text-sm font-black text-white/60 uppercase tracking-widest mb-6 block">Overall Rating</h2>
                        <div className="text-7xl font-black mb-4 flex items-center justify-center gap-4">
                            4.9 <Star size={40} className="fill-yellow-400 text-yellow-400" />
                        </div>
                        <p className="font-bold text-white/80">Based on 124 completed reviews</p>
                    </div>
                </div>

                {/* Rating Breakdown */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white flex flex-col justify-center">
                    <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-[#1E7B7C]" />
                        Score Breakdown
                    </h2>

                    <div className="space-y-4">
                        {[
                            { stars: 5, pct: 90, count: 112 },
                            { stars: 4, pct: 8, count: 10 },
                            { stars: 3, pct: 2, count: 2 },
                            { stars: 2, pct: 0, count: 0 },
                            { stars: 1, pct: 0, count: 0 }
                        ].map((row) => (
                            <div key={row.stars} className="flex items-center gap-4">
                                <div className="flex items-center gap-1 w-12 text-sm font-black text-gray-500 dark:text-gray-400">
                                    {row.stars} <Star size={14} className="fill-gray-300 text-gray-300" />
                                </div>
                                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-yellow-400 rounded-full"
                                        style={{ width: `${row.pct}%` }}
                                    />
                                </div>
                                <div className="w-8 text-right text-xs font-bold text-gray-400 dark:text-gray-500">{row.count}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews List */}
            <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-100/50 dark:border-gray-800/50">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Recent Feedback</h2>
                    <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                            <Filter size={16} /> All Ratings
                        </button>
                        <button className="px-5 py-2.5 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                            Most Recent <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="group p-6 rounded-3xl border border-transparent hover:border-gray-100 dark:border-gray-800 hover:bg-white dark:bg-gray-950/50 transition-all duration-300 relative">

                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full overflow-hidden relative shadow-sm">
                                        <Image src={review.avatar} alt={review.client} fill className="object-cover" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                        <div>
                                            <h4 className="font-black text-lg text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                                {review.client}
                                                {review.verified && (
                                                    <div className="flex items-center gap-1 text-[10px] uppercase font-black tracking-widest text-[#1E7B7C] bg-[#E8F4F4] px-2 py-0.5 rounded-lg">
                                                        <CheckCircle2 size={12} /> Verified Hire
                                                    </div>
                                                )}
                                            </h4>
                                            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 mt-1">{review.date} • {review.jobTitle}</p>
                                        </div>

                                        <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-900 px-3 py-1.5 rounded-xl border border-gray-100 dark:border-gray-800">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={14}
                                                    className={star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
                                        "{review.text}"
                                    </p>

                                    <div className="flex gap-4">
                                        <button className="text-[#1E7B7C] text-sm font-black hover:underline flex items-center gap-1">
                                            <MessageSquare size={16} /> Reply to Review
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
