'use client'

import React, { useState } from 'react';
import {
    Mail,
    Search,
    Filter,
    MoreVertical,
    CheckCircle2,
    Clock,
    AlertCircle,
    Eye,
    Trash2,
    Reply,
    Archive,
    Star,
    User,
    ShieldAlert
} from 'lucide-react';

const inquiries = [
    {
        id: 'INQ-101',
        name: 'Sarah Connor',
        email: 'sarah@example.com',
        subject: 'Question about verification',
        message: 'How long does it take for a provider to be verified? I submitted my docs yesterday.',
        status: 'New',
        date: '10 mins ago'
    },
    {
        id: 'INQ-102',
        name: 'James Bond',
        email: '007@secret.com',
        subject: 'Partnership Opportunity',
        message: 'I would like to discuss a potential partnership between our companies.',
        status: 'Responded',
        date: '2 hours ago'
    },
    {
        id: 'INQ-103',
        name: 'Unknown Guest',
        email: 'guest_921@tmp.com',
        subject: 'Broken Link',
        message: 'The link to the services page is not working on my mobile browser.',
        status: 'Resolved',
        date: '5 hours ago'
    },
    {
        id: 'INQ-104',
        name: 'Spam Bot',
        email: 'win_prize@scam.com',
        subject: 'Congratulations!',
        message: 'You have won a free iPhone. Click here to claim your prize!',
        status: 'Spam',
        date: '1 day ago'
    },
];

export default function AdminInquiriesPage() {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredInquiries = inquiries.filter(inq => {
        const matchesTab = activeTab === 'All' || inq.status === activeTab;
        const matchesSearch = inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            inq.subject.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Guest Inquiries</h1>
                    <p className="text-gray-500 font-medium">Manage messages and support requests from guests and non-registered visitors.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white border border-gray-100 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
                        <Filter size={18} />
                        Filters
                    </button>
                    <button className="bg-red-50 text-red-600 px-6 py-2.5 rounded-2xl font-bold text-sm border border-red-100 hover:bg-red-100 transition-all flex items-center gap-2">
                        <Trash2 size={18} />
                        Clear Spam
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-blue-500/30">New Messages</p>
                    <h3 className="text-2xl font-black text-gray-900">12</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-amber-500/30">Pending Response</p>
                    <h3 className="text-2xl font-black text-gray-900">8</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-emerald-500/30">Resolved Today</p>
                    <h3 className="text-2xl font-black text-gray-900">45</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-red-500/30">Spam Blocked</p>
                    <h3 className="text-2xl font-black text-gray-900">128</h3>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex p-1 bg-gray-50 rounded-2xl w-fit overflow-x-auto no-scrollbar">
                        {['All', 'New', 'Responded', 'Resolved', 'Spam'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab
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
                            placeholder="Search by Name, Email or Subject..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 transition-all text-sm font-medium"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Sender & Subject</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Message Snippet</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Sent Date</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredInquiries.map((inq) => (
                                <tr key={inq.id} className="group hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-black text-gray-900 group-hover:text-[#1E7B7C] transition-colors">{inq.name}</span>
                                            <span className="text-xs text-gray-500 font-bold">{inq.email}</span>
                                            <span className="text-[10px] font-black text-indigo-500 mt-1 uppercase tracking-widest">{inq.subject}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="text-xs text-gray-500 font-medium line-clamp-1 max-w-[300px]">
                                            {inq.message}
                                        </p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${inq.status === 'Resolved' ? 'bg-emerald-50 text-emerald-600' :
                                                inq.status === 'Responded' ? 'bg-blue-50 text-blue-600' :
                                                    inq.status === 'New' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                                            }`}>
                                            {inq.status === 'Resolved' ? <CheckCircle2 size={12} /> :
                                                inq.status === 'Responded' ? <Clock size={12} /> :
                                                    inq.status === 'New' ? <Star size={12} /> : <ShieldAlert size={12} />}
                                            {inq.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-bold text-gray-500">{inq.date}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button title="View Full Message" className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <Eye size={18} />
                                            </button>
                                            <button title="Reply" className="p-2 text-gray-400 hover:text-blue-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <Reply size={18} />
                                            </button>
                                            <button title="Archive" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <Archive size={18} />
                                            </button>
                                            <button title="Delete (Move to Spam)" className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
