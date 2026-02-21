'use client'

import React, { useState } from 'react';
import {
    ShieldCheck,
    Search,
    Filter,
    Calendar,
    User,
    Tag,
    Info,
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    Clock
} from 'lucide-react';

const auditEntries = [
    { id: 'LOG-1025', admin: 'Super Admin', action: 'Modified System Commission', category: 'Finance', status: 'Success', time: '10 mins ago' },
    { id: 'LOG-1024', admin: 'John Manager', action: 'Deactivated User: Alex Doe', category: 'Users', status: 'Success', time: '1 hour ago' },
    { id: 'LOG-1023', admin: 'Super Admin', action: 'Failed Login Attempt', category: 'Security', status: 'Warning', time: '2 hours ago' },
    { id: 'LOG-1022', admin: 'Sarah Support', action: 'Resolved Dispute #8291', category: 'Support', status: 'Success', time: '4 hours ago' },
    { id: 'LOG-1021', admin: 'John Manager', action: 'Created System Notification', category: 'System', status: 'Success', time: 'Yesterday' },
    { id: 'LOG-1020', admin: 'Super Admin', action: 'Updated Privacy Policy', category: 'Legal', status: 'Pending', time: 'Yesterday' },
];

export default function AuditLogPage() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">Administrative Audit Log</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Immutable record of all administrative actions and system modifications.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:bg-gray-900 transition-all flex items-center gap-2">
                        <Calendar size={18} />
                        Filter Date
                    </button>
                    <button className="bg-gray-900 text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-xl shadow-black/10 hover:scale-[1.02] transition-all flex items-center gap-2">
                        <ShieldCheck size={18} />
                        Verify Integrity
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="relative group flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-[#1E7B7C] transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search by action, admin or ID..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-transparent rounded-2xl outline-none focus:bg-white dark:bg-gray-950 focus:border-[#1E7B7C]/20 transition-all text-sm font-medium"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex p-1 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            {['All', 'Success', 'Warning', 'Failure'].map((filter) => (
                                <button key={filter} className={`px-4 py-1.5 rounded-xl text-xs font-black uppercase transition-all ${filter === 'All' ? 'bg-white dark:bg-gray-950 shadow-sm text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600'}`}>
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-gray-900/50">
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Event ID</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Administrator</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Log Detail</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Category</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {auditEntries.map((log) => (
                                <tr key={log.id} className="group hover:bg-gray-50/30 dark:bg-gray-900/30 transition-colors">
                                    <td className="px-6 py-5">
                                        <span className="text-xs font-black text-gray-900 dark:text-gray-100 mono">{log.id}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                                <User size={14} />
                                            </div>
                                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{log.admin}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{log.action}</span>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Info size={14} className="text-[#1E7B7C] cursor-help" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-[10px] font-black uppercase px-2 py-1 bg-gray-100 text-gray-500 dark:text-gray-400 rounded-md tracking-tight">
                                            {log.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-1.5">
                                            {log.status === 'Success' ? (
                                                <CheckCircle2 size={14} className="text-emerald-500" />
                                            ) : log.status === 'Warning' ? (
                                                <AlertTriangle size={14} className="text-amber-500" />
                                            ) : (
                                                <Clock size={14} className="text-blue-500" />
                                            )}
                                            <span className={`text-[10px] font-black uppercase tracking-tighter ${log.status === 'Success' ? 'text-emerald-600' : log.status === 'Warning' ? 'text-amber-600' : 'text-blue-600'}`}>
                                                {log.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{log.time}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 flex items-center justify-between">
                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Total Records: <span className="text-gray-900 dark:text-gray-100">42,891</span>
                    </p>
                    <button className="flex items-center gap-2 text-xs font-black text-[#1E7B7C] uppercase tracking-widest hover:underline">
                        Load Older Entries
                        <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}
