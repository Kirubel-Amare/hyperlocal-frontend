'use client'

import React, { useState } from 'react';
import {
    Star,
    Search,
    Filter,
    MoreVertical,
    CheckCircle2,
    XCircle,
    AlertCircle,
    Eye,
    Trash2,
    Edit2,
    ThumbsUp,
    MessageSquare,
    ShieldCheck,
    ShieldAlert,
    Clock
} from 'lucide-react';
import { useToast } from '@/providers/ToastProvider';

const initialReviews = [
    {
        id: 'REV-501',
        customer: 'Alex Johnson',
        provider: 'Sparkle Cleaners',
        rating: 5,
        comment: 'Excellent service! They were professional and the house is spotless.',
        status: 'Published',
        date: 'Feb 21, 2024',
        jobId: 'JOB-2041'
    },
    {
        id: 'REV-502',
        customer: 'Emma Davis',
        provider: 'FixIt Services',
        rating: 2,
        comment: 'The repair was okay but they were late by 2 hours.',
        status: 'Published',
        date: 'Feb 20, 2024',
        jobId: 'JOB-2042'
    },
    {
        id: 'REV-503',
        customer: 'Michael Chen',
        provider: 'Elite Tutors',
        rating: 5,
        comment: 'Great math session. Very patient.',
        status: 'Published',
        date: 'Feb 19, 2024',
        jobId: 'JOB-2043'
    },
    {
        id: 'REV-504',
        customer: 'Sarah Miller',
        provider: 'Sparkle Cleaners',
        rating: 1,
        comment: 'Avoid this provider! They used inappropriate language.',
        status: 'Flagged',
        date: 'Feb 18, 2024',
        jobId: 'JOB-2045'
    },
    {
        id: 'REV-505',
        customer: 'John Doe',
        provider: 'Pro Painters',
        rating: 4,
        comment: 'Quality work, but a bit pricey.',
        status: 'Published',
        date: 'Feb 15, 2024',
        jobId: 'JOB-2046'
    },
];

export default function AdminReviewsPage() {
    const [reviewList, setReviewList] = useState(initialReviews);
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const { showToast } = useToast();

    const filteredReviews = reviewList.filter(rev => {
        const matchesTab = activeTab === 'All' || rev.status === activeTab;
        const matchesSearch = rev.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            rev.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
            rev.comment.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const handleAction = (id: string, action: 'publish' | 'flag' | 'delete') => {
        if (action === 'delete') {
            setReviewList(prev => prev.filter(r => r.id !== id));
            showToast('Review permanently deleted', 'error');
            return;
        }

        setReviewList(prev => prev.map(rev => {
            if (rev.id === id) {
                switch (action) {
                    case 'publish':
                        showToast(`Review ${id} published`, 'success');
                        return { ...rev, status: 'Published' };
                    case 'flag':
                        showToast(`Review ${id} flagged for violations`, 'warning');
                        return { ...rev, status: 'Flagged' };
                    default:
                        return rev;
                }
            }
            return rev;
        }));
    };

    const avgRating = (reviewList.reduce((acc, r) => acc + r.rating, 0) / reviewList.length).toFixed(1);

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2 italic">Review Management</h1>
                    <p className="text-gray-500 font-medium italic">Moderate platform feedback, handle inappropriate content, and monitor service quality.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white border border-gray-100 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 italic">
                        <Filter size={18} />
                        Filters
                    </button>
                    <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2 italic">
                        <ShieldCheck size={18} />
                        Auto-Moderation Rules
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 italic">Total Reviews</p>
                    <h3 className="text-2xl font-black text-gray-900">{reviewList.length}</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 text-emerald-500 italic">Avg. Rating</p>
                    <h3 className="text-2xl font-black text-gray-900">{avgRating} ★</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 text-amber-500 italic">Flagged</p>
                    <h3 className="text-2xl font-black text-gray-900">{reviewList.filter(r => r.status === 'Flagged').length}</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 text-red-500 italic">Deleted (Session)</p>
                    <h3 className="text-2xl font-black text-gray-900">{initialReviews.length - reviewList.length}</h3>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex p-1 bg-gray-50 rounded-2xl w-fit">
                        {['All', 'Published', 'Flagged', 'Awaiting Review'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap italic ${activeTab === tab
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="relative group flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1E7B7C] transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search by User, Provider or Comment..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 transition-all text-sm font-medium italic"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Review & Comment</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Entities</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Job ID</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredReviews.length > 0 ? filteredReviews.map((rev) => (
                                <tr key={rev.id} className="group hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col max-w-[350px]">
                                            <div className="flex items-center gap-1 mb-1 text-amber-500">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={12} fill={i < rev.rating ? "currentColor" : "none"} className={i < rev.rating ? "text-amber-500" : "text-gray-200"} />
                                                ))}
                                            </div>
                                            <p className="text-xs text-gray-700 font-bold leading-relaxed line-clamp-2 italic">"{rev.comment}"</p>
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1 italic">ID: {rev.id}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-gray-700 italic">By: {rev.customer}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-gray-400 italic">For: {rev.provider}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${rev.status === 'Published' ? 'bg-emerald-50 text-emerald-600' :
                                            rev.status === 'Flagged' ? 'bg-red-50 text-red-600 underline' : 'bg-amber-50 text-amber-600'
                                            }`}>
                                            {rev.status === 'Published' ? <CheckCircle2 size={12} /> :
                                                rev.status === 'Flagged' ? <AlertCircle size={12} /> : <Clock size={12} />}
                                            {rev.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100 italic">{rev.jobId}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-bold text-gray-500 italic">{rev.date}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleAction(rev.id, 'publish')}
                                                title="Approve / Publish"
                                                className="p-2 text-gray-400 hover:text-emerald-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100"
                                            >
                                                <CheckCircle2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(rev.id, 'flag')}
                                                title="Flag Review"
                                                className="p-2 text-gray-400 hover:text-amber-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100"
                                            >
                                                <AlertCircle size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(rev.id, 'delete')}
                                                title="Delete Permanently"
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                            <button title="Options" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center gap-3 text-gray-400">
                                            <MessageSquare size={48} strokeWidth={1} />
                                            <p className="text-lg font-black italic">No reviews found</p>
                                            <p className="text-sm font-medium italic">Adjust your filters to see more results</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
