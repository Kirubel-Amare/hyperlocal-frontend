'use client'

import { Star, MessageSquare, Filter, ChevronRight, User } from 'lucide-react'

export default function ProviderReviewsPage() {
    return (
        <div className="max-w-6xl relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Client Reviews</h1>
                    <p className="text-lg text-gray-500 font-medium">Hear what your customers are saying about your services.</p>
                </div>
                <div className="flex items-center gap-4 px-6 py-3 bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm font-black text-[#1E7B7C]">
                    <Star size={20} className="fill-[#1E7B7C]" />
                    4.9 Average Rating
                </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
                <div className="flex flex-col md:flex-row gap-4 mb-10">
                    <div className="flex-1 p-1 bg-gray-100/50 rounded-2xl border border-gray-100 shadow-inner flex">
                        {['All Reviews', '5 Star', '4 Star', 'Critical'].map((tab, i) => (
                            <button key={tab} className={`flex-1 py-3 px-4 rounded-xl text-xs font-black transition-all ${i === 0 ? 'bg-white text-[#1E7B7C] shadow-sm' : 'text-gray-400 hover:text-gray-600'
                                }`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button className="px-6 py-4 bg-gray-50 rounded-2xl font-black text-gray-500 hover:bg-gray-100 transition-all flex items-center gap-2">
                        <Filter size={18} />
                        Recently Added
                    </button>
                </div>

                <div className="space-y-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="group p-8 bg-white/40 rounded-[32px] border border-transparent hover:border-gray-50 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden relative border-4 border-white shadow-md">
                                        <User className="absolute inset-0 m-auto text-gray-300" size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-900">Sarah Jenkins</h4>
                                        <p className="text-xs font-bold text-gray-400 mt-1">Deep Kitchen Cleaning • Oct 15, 2023</p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 font-medium leading-relaxed italic mb-8">
                                "Alex did an incredible job with our kitchen. Every surface was sparkling, and he was extremely professional throughout the process. Highly recommended for anyone looking for attention to detail!"
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <button className="text-xs font-black text-[#1E7B7C] flex items-center gap-1.5 hover:underline">
                                    <MessageSquare size={14} />
                                    Reply to Review
                                </button>
                                <button className="text-xs font-black text-gray-400 hover:text-gray-600 transition-colors">Flag as Inappropriate</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
