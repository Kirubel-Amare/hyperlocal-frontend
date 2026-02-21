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
import { useToast } from '@/providers/ToastProvider';

const initialInquiries = [
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
    const [inquiryList, setInquiryList] = useState(initialInquiries);
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const { showToast } = useToast();

    const filteredInquiries = inquiryList.filter(inq => {
        const matchesTab = activeTab === 'All' || inq.status === activeTab;
        const matchesSearch = inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            inq.subject.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const handleAction = (id: string, action: 'resolve' | 'reply' | 'archive' | 'spam' | 'delete') => {
        if (action === 'delete') {
            setInquiryList(prev => prev.filter(i => i.id !== id));
            showToast('Inquiry permanently deleted', 'error');
            return;
        }

        setInquiryList(prev => prev.map(inq => {
            if (inq.id === id) {
                switch (action) {
                    case 'resolve':
                        showToast(`Inquiry ${id} marked as resolved`, 'success');
                        return { ...inq, status: 'Resolved' };
                    case 'reply':
                        showToast(`Draft reply created for ${id}`, 'info');
                        return { ...inq, status: 'Responded' };
                    case 'archive':
                        showToast(`Inquiry ${id} moved to archive`, 'info');
                        return { ...inq, status: 'Resolved' };
                    case 'spam':
                        showToast(`Inquiry ${id} marked as spam`, 'warning');
                        return { ...inq, status: 'Spam' };
                    default:
                        return inq;
                }
            }
            return inq;
        }));
    };

    const clearSpam = () => {
        const spamCount = inquiryList.filter(i => i.status === 'Spam').length;
        if (spamCount === 0) {
            showToast('No spam messages found', 'info');
            return;
        }
        setInquiryList(prev => prev.filter(i => i.status !== 'Spam'));
        showToast(`Cleared ${spamCount} spam messages`, 'success');
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2 italic">Guest Inquiries</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium italic">Manage messages and support requests from guests and non-registered visitors.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 italic">
                        <Filter size={18} />
                        Filters
                    </button>
                    <button
                        onClick={clearSpam}
                        className="bg-red-50 text-red-600 px-6 py-2.5 rounded-2xl font-bold text-sm border border-red-100 hover:bg-red-100 transition-all flex items-center gap-2 italic"
                    >
                        <Trash2 size={18} />
                        Clear Spam
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 underline decoration-blue-500/30">New Messages</p>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{inquiryList.filter(i => i.status === 'New').length}</h3>
                </div>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 underline decoration-amber-500/30">Pending Response</p>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{inquiryList.filter(i => i.status === 'New').length}</h3>
                </div>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 underline decoration-emerald-500/30">Resolved Today</p>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{inquiryList.filter(i => i.status === 'Resolved').length}</h3>
                </div>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 underline decoration-red-500/30">Spam Blocked</p>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{inquiryList.filter(i => i.status === 'Spam').length}</h3>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex p-1 bg-gray-50 dark:bg-gray-900 rounded-2xl w-fit overflow-x-auto no-scrollbar">
                        {['All', 'New', 'Responded', 'Resolved', 'Spam'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap italic ${activeTab === tab
                                    ? 'bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-sm'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="relative group flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-[#1E7B7C] transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search by Name, Email or Subject..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 transition-all text-sm font-medium italic"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-gray-900/50">
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Sender & Subject</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Message Snippet</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Sent Date</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredInquiries.length > 0 ? filteredInquiries.map((inq) => (
                                <tr key={inq.id} className="group hover:bg-gray-50/50 dark:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-black text-gray-900 dark:text-gray-100 group-hover:text-[#1E7B7C] transition-colors italic">{inq.name}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 font-bold italic">{inq.email}</span>
                                            <span className="text-[10px] font-black text-indigo-500 mt-1 uppercase tracking-widest italic">{inq.subject}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium line-clamp-1 max-w-[300px] italic">
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
                                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 italic">{inq.date}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleAction(inq.id, 'resolve')}
                                                title="Mark as Resolved"
                                                className="p-2 text-gray-400 dark:text-gray-500 hover:text-emerald-500 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                                            >
                                                <CheckCircle2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(inq.id, 'reply')}
                                                title="Reply"
                                                className="p-2 text-gray-400 dark:text-gray-500 hover:text-blue-500 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                                            >
                                                <Reply size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(inq.id, 'archive')}
                                                title="Archive"
                                                className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:text-gray-100 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                                            >
                                                <Archive size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(inq.id, 'spam')}
                                                title="Mark as Spam"
                                                className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-500 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                                            >
                                                <ShieldAlert size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(inq.id, 'delete')}
                                                title="Delete Permanently"
                                                className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-600 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500">
                                            <Mail size={48} strokeWidth={1} />
                                            <p className="text-lg font-black italic">No inquiries found</p>
                                            <p className="text-sm font-medium italic">Adjust your filters or search query</p>
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
