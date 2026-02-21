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
    ChevronRight,
    Lock,
    Unlock,
    ShieldCheck,
    RotateCcw,
    Trash2,
    Flag
} from 'lucide-react';
import { useToast } from '@/providers/ToastProvider';

const initialJobs = [
    {
        id: 'JOB-2041',
        customer: 'Alex Johnson',
        provider: 'Sparkle Cleaners',
        service: 'Deep House Cleaning',
        status: 'In Progress',
        priority: 'Normal',
        amount: 150.00,
        date: 'Feb 21, 2024',
        location: 'Downtown, NY',
        escrow: 'Held'
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
        location: 'Brooklyn, NY',
        escrow: 'Held'
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
        location: 'Queens, NY',
        escrow: 'Released'
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
        location: 'Staten Island, NY',
        escrow: 'N/A'
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
        location: 'Manhattan, NY',
        escrow: 'Held'
    },
];

export default function AdminJobsPage() {
    const [jobList, setJobList] = useState(initialJobs);
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const { showToast } = useToast();

    const filteredJobs = jobList.filter(job => {
        const matchesTab = activeTab === 'All' || job.status === activeTab;
        const matchesSearch = job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.service.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const handleAction = (id: string, action: 'cancel' | 'reassign' | 'release' | 'flag') => {
        setJobList(prev => prev.map(job => {
            if (job.id === id) {
                switch (action) {
                    case 'cancel':
                        showToast(`Job ${id} cancelled by Admin`, 'error');
                        return { ...job, status: 'Cancelled', escrow: 'N/A' };
                    case 'reassign':
                        showToast(`Reassignment request sent for ${id}`, 'info');
                        return job;
                    case 'release':
                        if (job.status !== 'Completed') {
                            showToast('Cannot release escrow for incomplete jobs', 'warning');
                            return job;
                        }
                        showToast(`Escrow released for ${id}`, 'success');
                        return { ...job, escrow: 'Released' };
                    case 'flag':
                        showToast(`Job ${id} flagged for audit`, 'warning');
                        return job;
                    default:
                        return job;
                }
            }
            return job;
        }));
    };

    const totalEscrow = jobList.reduce((acc, job) => job.escrow === 'Held' ? acc + job.amount : acc, 0);

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2 italic">Job Management</h1>
                    <p className="text-gray-500 font-medium italic">Review, track and manage all service requests across the platform.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white border border-gray-100 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 italic">
                        <Filter size={18} />
                        Filters
                    </button>
                    <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2 italic">
                        <Briefcase size={18} />
                        Export Audit Log
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 italic">Total Jobs</p>
                    <h3 className="text-2xl font-black text-gray-900">{jobList.length}</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-emerald-500/30 italic">Active</p>
                    <h3 className="text-2xl font-black text-gray-900">{jobList.filter(j => j.status === 'In Progress').length}</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-indigo-500/30 italic">Escrow Held</p>
                    <h3 className="text-2xl font-black text-indigo-600">${totalEscrow.toFixed(2)}</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-amber-500/30 italic">Pending</p>
                    <h3 className="text-2xl font-black text-gray-900">{jobList.filter(j => j.status === 'Pending').length}</h3>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 underline decoration-red-500/30 italic">Cancelled</p>
                    <h3 className="text-2xl font-black text-gray-900">{jobList.filter(j => j.status === 'Cancelled').length}</h3>
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
                            placeholder="Search by Job ID, Customer or Provider..."
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
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Job Details</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Participants</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Status & Priority</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Location & Date</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredJobs.length > 0 ? filteredJobs.map((job) => (
                                <tr key={job.id} className="group hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-black text-gray-900 group-hover:text-[#1E7B7C] transition-colors italic">{job.id}</span>
                                            <span className="text-xs text-gray-500 font-bold italic">{job.service}</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[10px] font-black text-[#1E7B7C] italic">${job.amount.toFixed(2)}</span>
                                                {job.escrow !== 'N/A' && (
                                                    <button
                                                        onClick={() => job.escrow === 'Held' && handleAction(job.id, 'release')}
                                                        className={`flex items-center gap-1 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md transition-all ${job.escrow === 'Held' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100 hover:bg-indigo-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100 opacity-60'
                                                            }`}
                                                    >
                                                        {job.escrow === 'Held' ? <Lock size={8} /> : <Unlock size={8} />}
                                                        Escrow {job.escrow}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                <span className="text-xs font-bold text-gray-700 italic">{job.customer}</span>
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
                                            <span className={`text-[9px] font-black uppercase tracking-widest ml-1 italic ${job.priority === 'High' ? 'text-red-500' : 'text-gray-400'
                                                }`}>
                                                {job.priority} Priority
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-1 text-gray-500">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={12} />
                                                <span className="text-xs font-bold italic">{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={12} />
                                                <span className="text-xs font-bold italic">{job.date}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2 group-hover:opacity-100 transition-opacity">
                                            <button title="View Details" className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                                                <Eye size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(job.id, 'reassign')}
                                                title="Reassign Provider"
                                                className="p-2 text-gray-400 hover:text-indigo-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100"
                                            >
                                                <UserPlus size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(job.id, 'cancel')}
                                                title="Cancel Job"
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100"
                                            >
                                                <Ban size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleAction(job.id, 'flag')}
                                                title="Flag for Audit"
                                                className="p-2 text-gray-400 hover:text-amber-500 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100"
                                            >
                                                <Flag size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center gap-3 text-gray-400">
                                            <Briefcase size={48} strokeWidth={1} />
                                            <p className="text-lg font-black italic">No jobs found</p>
                                            <p className="text-sm font-medium italic">Try adjusting your filters</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="p-6 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-400 italic">
                        Showing <span className="text-gray-900 font-black italic">1 - {filteredJobs.length}</span> of <span className="text-gray-900 font-black italic">{jobList.length}</span> jobs
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-xl border border-gray-100 text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex items-center gap-1 text-sm font-bold italic">
                            <button className="w-10 h-10 rounded-xl bg-[#1E7B7C] text-white">1</button>
                        </div>
                        <button className="p-2 rounded-xl border border-gray-100 text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
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
                    <h4 className="text-sm font-black text-amber-900 mb-1 italic">Administrative Override Enabled</h4>
                    <p className="text-xs text-amber-700/80 font-medium leading-relaxed italic">
                        As an administrator, you have the authority to cancel, reassign, or flag any job. All administrative actions are recorded in the system audit log for security and compliance purposes.
                    </p>
                </div>
            </div>
        </div>
    );
}
