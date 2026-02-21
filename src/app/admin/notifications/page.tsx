'use client'

import React, { useState } from 'react';
import {
    Megaphone,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Bell,
    Users,
    Briefcase,
    User,
    Eye,
    Trash2,
    Edit2,
    Clock,
    Calendar,
    CheckCircle2,
    XCircle,
    Info
} from 'lucide-react';
import { useToast } from '@/providers/ToastProvider';

const initialNotifications = [
    {
        id: 'NOT-001',
        title: 'Platform Maintenance Scheduled',
        message: 'We will be performing scheduled maintenance on Sunday, Feb 25th, from 2 AM to 4 AM UTC.',
        target: 'All Users',
        type: 'Update',
        status: 'Scheduled',
        engagement: '0%',
        date: 'Feb 21, 2024'
    },
    {
        id: 'NOT-002',
        title: 'New Service Category: Pet Care',
        message: 'We are excited to announce the launch of our new Pet Care category! Check it out now.',
        target: 'Customers',
        type: 'Announcement',
        status: 'Sent',
        engagement: '42%',
        date: 'Feb 20, 2024'
    },
    {
        id: 'NOT-003',
        title: 'Provider Policy Update',
        message: 'Please review the updated provider terms of service regarding payment schedules.',
        target: 'Providers',
        type: 'Policy',
        status: 'Sent',
        engagement: '89%',
        date: 'Feb 18, 2024'
    },
    {
        id: 'NOT-004',
        title: 'Exclusive Weekend Offer',
        message: 'Get 20% off your next booking this weekend! Limited time only.',
        target: 'Limited Group',
        type: 'Promotion',
        status: 'Draft',
        engagement: 'N/A',
        date: 'Feb 21, 2024'
    },
];

export default function AdminNotificationsPage() {
    const [notifList, setNotifList] = useState(initialNotifications);
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const { showToast } = useToast();

    const filteredNotifications = notifList.filter(not => {
        const matchesTab = activeTab === 'All' || not.status === activeTab;
        const matchesSearch = not.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            not.message.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const handleAction = (id: string, action: 'send' | 'delete' | 'duplicate' | 'archive') => {
        if (action === 'delete') {
            setNotifList(prev => prev.filter(n => n.id !== id));
            showToast('Notification deleted', 'error');
            return;
        }

        setNotifList(prev => prev.map(not => {
            if (not.id === id) {
                switch (action) {
                    case 'send':
                        if (not.status === 'Sent') {
                            showToast('Broadcast already sent', 'info');
                            return not;
                        }
                        showToast(`Broadcast "${not.title}" is now live!`, 'success');
                        return { ...not, status: 'Sent', date: 'Just now', engagement: '0%' };
                    case 'duplicate':
                        showToast('Notification duplicated as draft', 'info');
                        return not;
                    case 'archive':
                        showToast('Moved to archive', 'info');
                        return not;
                    default:
                        return not;
                }
            }
            return not;
        }));
    };

    const handleCreate = () => {
        const newNotif = {
            id: `NOT-00${notifList.length + 1}`,
            title: 'New System Alert',
            message: 'Draft content for the new system alert message...',
            target: 'All Users',
            type: 'Announcement',
            status: 'Draft',
            engagement: 'N/A',
            date: 'Today'
        };
        setNotifList([newNotif, ...notifList]);
        showToast('New draft notification created', 'success');
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2 italic">System Notifications</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium italic">Broadcast alerts, announcements, and system updates to different user groups.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:bg-gray-900 transition-all flex items-center gap-2 italic">
                        <Calendar size={18} />
                        Schedule
                    </button>
                    <button
                        onClick={handleCreate}
                        className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2 italic"
                    >
                        <Plus size={18} />
                        Create Notification
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <Megaphone size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-0.5 italic">Total Broadcasts</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{notifList.length}</h3>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-0.5 italic">Avg. Engagement</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">64.5%</h3>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-0.5 italic">Active Drafts</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{notifList.filter(n => n.status === 'Draft').length}</h3>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex p-1 bg-gray-50 dark:bg-gray-900 rounded-2xl w-fit">
                        {['All', 'Sent', 'Scheduled', 'Draft'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all italic ${activeTab === tab
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
                            placeholder="Search notifications..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-transparent rounded-2xl outline-none focus:bg-white dark:bg-gray-950 focus:border-[#1E7B7C]/20 transition-all text-sm font-medium italic"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-gray-900/50">
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Notification Info</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Target Audience</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Status & Type</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Engagement</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Date</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredNotifications.length > 0 ? filteredNotifications.map((not) => (
                                <tr key={not.id} className="group hover:bg-gray-50/50 dark:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col max-w-[300px]">
                                            <span className="text-sm font-black text-gray-900 dark:text-gray-100 group-hover:text-[#1E7B7C] transition-colors italic">{not.title}</span>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium line-clamp-1 italic">{not.message}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className={`p-1.5 rounded-lg ${not.target === 'All Users' ? 'bg-indigo-50 text-indigo-600' :
                                                not.target === 'Providers' ? 'bg-[#E8F4F4] text-[#1E7B7C]' : 'bg-blue-50 text-blue-600'
                                                }`}>
                                                {not.target === 'All Users' ? <Users size={14} /> :
                                                    not.target === 'Providers' ? <Briefcase size={14} /> : <User size={14} />}
                                            </div>
                                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300 italic">{not.target}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-2">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter w-fit ${not.status === 'Sent' ? 'bg-emerald-50 text-emerald-600' :
                                                not.status === 'Scheduled' ? 'bg-amber-50 text-amber-600' : 'bg-gray-100 text-gray-400 dark:text-gray-500'
                                                }`}>
                                                {not.status === 'Sent' ? <CheckCircle2 size={12} /> :
                                                    not.status === 'Scheduled' ? <Clock size={12} /> : <Edit2 size={12} />}
                                                {not.status}
                                            </span>
                                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 ml-1 italic">{not.type}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${not.status === 'Sent' ? 'bg-[#1E7B7C]' : 'bg-gray-200'}`}
                                                    style={{ width: not.status === 'Sent' ? not.engagement : '0%' }}
                                                />
                                            </div>
                                            <span className="text-[10px] font-black text-gray-600 italic">{not.status === 'Sent' ? not.engagement : 'N/A'}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 italic">{not.date}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleAction(not.id, 'send')}
                                                title={not.status === 'Sent' ? 'Resend Broadcast' : 'Send Now'}
                                                className={`p-2 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800 ${not.status === 'Sent' ? 'text-gray-400 dark:text-gray-500 hover:text-[#1E7B7C]' : 'text-emerald-500 hover:bg-emerald-50'}`}
                                            >
                                                <Megaphone size={18} />
                                            </button>
                                            <button title="Edit Content" className="p-2 text-gray-400 dark:text-gray-500 hover:text-indigo-500 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800">
                                                <Edit2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(not.id, 'delete')}
                                                title="Delete Broadcast"
                                                className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-500 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                            <button title="Options" className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:text-gray-100 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500">
                                            <Megaphone size={48} strokeWidth={1} />
                                            <p className="text-lg font-black italic">No notifications found</p>
                                            <p className="text-sm font-medium italic">Start a new broadcast by clicking 'Create Notification'</p>
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
