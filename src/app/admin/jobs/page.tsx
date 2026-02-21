'use client'

import React, { useState } from 'react';
import {
    Briefcase,
    Search,
    Filter,
    MoreVertical,
    CheckCircle2,
    Clock,
    XCircle,
    AlertCircle,
    Eye,
    UserPlus,
    Ban,
    Calendar,
    MapPin,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const jobs = [
    {
        id: 'JOB-2041',
        customer: 'Alex Johnson',
        provider: 'Sparkle Cleaners',
        service: 'Deep House Cleaning',
        status: 'In Progress',
        priority: 'Normal',
        amount: 150.00,
        date: 'Feb 21, 2024',
        location: 'Downtown, NY'
    },
    {
        id: 'JOB-2042',
        customer: 'Emma Davis',
        provider: 'FixIt Services',
        service: 'Kitchen Faucet Repair',
        status: 'Pending',
        priority: 'High',
        amount: 85.00,
        date: 'Feb 21, 2024',
        location: 'Brooklyn, NY'
    },
    {
        id: 'JOB-2043',
        customer: 'Michael Chen',
        provider: 'Elite Tutors',
        service: 'Math Tutoring Session',
        status: 'Completed',
        priority: 'Normal',
        amount: 60.00,
        date: 'Feb 20, 2024',
        location: 'Queens, NY'
    },
    {
        id: 'JOB-2044',
        customer: 'Sarah Miller',
        provider: 'Green Thumb',
        service: 'Garden Maintenance',
        status: 'Cancelled',
        priority: 'Low',
        amount: 120.00,
        date: 'Feb 19, 2024',
        location: 'Staten Island, NY'
    },
    {
        id: 'JOB-2045',
        customer: 'John Doe',
        provider: 'Pro Painters',
        service: 'Living Room Painting',
        status: 'In Progress',
        priority: 'High',
        amount: 450.00,
        date: 'Feb 19, 2024',
        location: 'Manhattan, NY'
    },
];

export default function AdminJobsPage() {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredJobs = jobs.filter(job => {
        const matchesTab = activeTab === 'All' || job.status === activeTab;
        const matchesSearch = job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.provider.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Job Management</h1>
                    <p className="text-gray-500 font-medium">Review, track and manage all service requests across the platform.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white border border-gray-100 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
                        <Filter size={18} />
                        Filters
                    </button>
                    <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2">
                        <Briefcase size={18} />
                        Export Audit Log
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Jobs</p>
                    <h3 className="text-2xl font-black text-gray-900">4,821</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-emerald-500/30">Active</p>
                    <h3 className="text-2xl font-black text-gray-900">142</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-amber-500/30">Pending Approval</p>
                    <h3 className="text-2xl font-black text-gray-900">28</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-red-500/30">Flagged</p>
                    <h3 className="text-2xl font-black text-gray-900">5</h3>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex p-1 bg-gray-50 rounded-2xl w-fit overflow-x-auto no-scrollbar">
                        {['All', 'Pending', 'In Progress', 'Completed', 'Cancelled'].map((tab) => (
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
                            placeholder="Search by Job ID, Customer or Provider..."
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
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Job Details</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Participants</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Status & Priority</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Location & Date</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredJobs.map((job) => (
                                <tr key={job.id} className="group hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-black text-gray-900 group-hover:text-[#1E7B7C] transition-colors">{job.id}</span>
                                            <span className="text-xs text-gray-500 font-bold">{job.service}</span>
                                            <span className="text-[10px] font-black text-[#1E7B7C] mt-1">${job.amount.toFixed(2)}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                <span className="text-xs font-bold text-gray-700">{job.customer}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#1E7B7C]" />
                                                <span className="text-xs font-bold text-gray-400 italic">{job.provider}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-2">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter w-fit ${job.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                                                    job.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                                                        job.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                                                }`}>
                                                {job.status === 'Completed' ? <CheckCircle2 size={12} /> :
                                                    job.status === 'In Progress' ? <Clock size={12} /> :
                                                        job.status === 'Pending' ? <Calendar size={12} /> : <XCircle size={12} />}
                                                {job.status}
                                            </span>
                                            <span className={`text-[9px] font-black uppercase tracking-widest ml-1 ${job.priority === 'High' ? 'text-red-500' : 'text-gray-400'
                                                }`}>
                                                {job.priority} Priority
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-1 text-gray-500">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={12} />
                                                <span className="text-xs font-bold">{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={12} />
                                                <span className="text-xs font-bold">{job.date}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button title="View Details" className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <Eye size={18} />
                                            </button>
                                            <button title="Reassign Provider" className="p-2 text-gray-400 hover:text-indigo-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <UserPlus size={18} />
                                            </button>
                                            <button title="Cancel Job" className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <Ban size={18} />
                                            </button>
                                            <button title="Log Action" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="p-6 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-400">
                        Showing <span className="text-gray-900 font-black">1 - 5</span> of <span className="text-gray-900 font-black">4,821</span> jobs
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-xl border border-gray-100 text-gray-400 hover:bg-gray-50">
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex items-center gap-1 text-sm font-bold">
                            <button className="w-10 h-10 rounded-xl bg-[#1E7B7C] text-white">1</button>
                            <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-600">2</button>
                            <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-600">3</button>
                        </div>
                        <button className="p-2 rounded-xl border border-gray-100 text-gray-400 hover:bg-gray-50">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Admin Action Info */}
            <div className="bg-amber-50 border border-amber-100 p-6 rounded-[2rem] flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl text-amber-500 shadow-sm">
                    <AlertCircle size={24} />
                </div>
                <div>
                    <h4 className="text-sm font-black text-amber-900 mb-1">Administrative Override Enabled</h4>
                    <p className="text-xs text-amber-700/80 font-medium leading-relaxed">
                        As an administrator, you have the authority to cancel, reassign, or flag any job. All administrative actions are recorded in the system audit log for security and compliance purposes.
                    </p>
                </div>
            </div>
        </div>
    );
}
