'use client'

import React, { useState } from 'react';
import {
    MessageSquare,
    Search,
    Search as SearchIcon,
    Filter,
    MoreVertical,
    ShieldAlert,
    ExternalLink,
    User,
    Clock,
    CheckCircle2,
    AlertCircle,
    Eye,
    Trash2
} from 'lucide-react';

const activeChats = [
    {
        id: 'CHT-101',
        customer: 'Alex Johnson',
        provider: 'Sparkle Cleaners',
        lastMessage: 'I will be there in 15 minutes.',
        time: '2 mins ago',
        status: 'Active',
        jobId: 'JOB-2041'
    },
    {
        id: 'CHT-102',
        customer: 'Emma Davis',
        provider: 'FixIt Services',
        lastMessage: 'Is the faucet still leaking?',
        time: '15 mins ago',
        status: 'Flagged',
        jobId: 'JOB-2042'
    },
    {
        id: 'CHT-103',
        customer: 'Michael Chen',
        provider: 'Elite Tutors',
        lastMessage: 'Thank you for the session!',
        time: '1 hour ago',
        status: 'Active',
        jobId: 'JOB-2043'
    },
    {
        id: 'CHT-104',
        customer: 'Sarah Miller',
        provider: 'Green Thumb',
        lastMessage: 'The garden looks great!',
        time: '3 hours ago',
        status: 'Archived',
        jobId: 'JOB-2044'
    },
];

export default function AdminChatsPage() {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredChats = activeChats.filter(chat => {
        const matchesTab = activeTab === 'All' || chat.status === activeTab;
        const matchesSearch = chat.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            chat.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            chat.provider.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Chat Monitoring</h1>
                    <p className="text-gray-500 font-medium">Monitor active conversations for platform safety and dispute resolution.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white border border-gray-100 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
                        <Filter size={18} />
                        Filters
                    </button>
                    <button className="bg-red-500 text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-red-500/20 hover:scale-[1.02] transition-all flex items-center gap-2">
                        <ShieldAlert size={18} />
                        View Safety Flags
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <MessageSquare size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 mb-0.5">Active Chats</p>
                        <h3 className="text-2xl font-black text-gray-900">842</h3>
                    </div>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <AlertCircle size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 mb-0.5">Flagged Messages</p>
                        <h3 className="text-2xl font-black text-gray-900">12</h3>
                    </div>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 mb-0.5">Moderated Today</p>
                        <h3 className="text-2xl font-black text-gray-900">45</h3>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex p-1 bg-gray-50 rounded-2xl w-fit">
                        {['All', 'Active', 'Flagged', 'Archived'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === tab
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="relative group flex-1 max-w-md">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1E7B7C] transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search by ID, User or Provider..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 transition-all text-sm font-medium"
                        />
                    </div>
                </div>

                {/* Chat Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Chat Conversation</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Participants</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Job Link</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Last Activity</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredChats.map((chat) => (
                                <tr key={chat.id} className="group hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col max-w-[300px]">
                                            <span className="text-sm font-black text-gray-900 group-hover:text-[#1E7B7C] transition-colors">{chat.id}</span>
                                            <p className="text-xs text-gray-500 font-medium truncate italic">"{chat.lastMessage}"</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <User size={12} className="text-blue-500" />
                                                <span className="text-xs font-bold text-gray-700">{chat.customer}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <User size={12} className="text-[#1E7B7C]" />
                                                <span className="text-xs font-bold text-gray-400">{chat.provider}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${chat.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                                                chat.status === 'Flagged' ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600'
                                            }`}>
                                            {chat.status === 'Active' ? <CheckCircle2 size={12} /> :
                                                chat.status === 'Flagged' ? <AlertCircle size={12} /> : <Clock size={12} />}
                                            {chat.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">{chat.jobId}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-bold text-gray-500">{chat.time}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button title="View Transcript" className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <Eye size={18} />
                                            </button>
                                            <button title="Manage Safety" className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <ShieldAlert size={18} />
                                            </button>
                                            <button title="Options" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <MoreVertical size={18} />
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
