'use client'

import React, { useState } from 'react';
import {
    Wallet,
    CreditCard,
    Plus,
    Search,
    MoreVertical,
    ShieldCheck,
    ShieldAlert,
    Clock,
    CheckCircle2,
    XCircle,
    Eye,
    Trash2,
    Lock,
    History,
    Ban,
    RotateCcw
} from 'lucide-react';
import { useToast } from '@/providers/ToastProvider';

const initialPaymentMethods = [
    {
        id: 'PM-201',
        user: 'Alex Johnson',
        type: 'Visa',
        last4: '4242',
        expiry: '12/26',
        status: 'Active',
        isDefault: true,
        addedOn: 'Jan 05, 2024'
    },
    {
        id: 'PM-202',
        user: 'Emma Davis',
        type: 'Mastercard',
        last4: '8888',
        expiry: '08/25',
        status: 'Verified',
        isDefault: true,
        addedOn: 'Feb 12, 2024'
    },
    {
        id: 'PM-203',
        user: 'Michael Chen',
        type: 'Bank Transfer (ACH)',
        last4: '1234',
        expiry: 'N/A',
        status: 'Pending',
        isDefault: false,
        addedOn: 'Feb 20, 2024'
    },
    {
        id: 'PM-204',
        user: 'Sarah Miller',
        type: 'PayPal',
        last4: 'N/A',
        expiry: 'N/A',
        status: 'Disabled',
        isDefault: false,
        addedOn: 'Nov 15, 2023'
    },
];

export default function AdminPaymentsPage() {
    const [pmList, setPmList] = useState(initialPaymentMethods);
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const { showToast } = useToast();

    const filteredPayments = pmList.filter(pm => {
        const matchesTab = activeTab === 'All' || pm.status === activeTab;
        const matchesSearch = pm.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pm.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const handleStatusToggle = (id: string) => {
        setPmList(prev => prev.map(pm => {
            if (pm.id === id) {
                const newStatus = pm.status === 'Disabled' ? 'Active' : 'Disabled';
                showToast(`Payment method ${id} is now ${newStatus}`, newStatus === 'Disabled' ? 'warning' : 'success');
                return { ...pm, status: newStatus };
            }
            return pm;
        }));
    };

    const handleDelete = (id: string) => {
        setPmList(prev => prev.filter(pm => pm.id !== id));
        showToast(`Payment method ${id} permanently removed`, 'error');
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2 italic">Payment Management</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium italic">Oversee user payment methods, verification status, and financial security.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 italic">
                        <ShieldCheck size={18} />
                        Compliance Logs
                    </button>
                    <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2 italic">
                        <Lock size={18} />
                        System Security
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8F4F4] text-[#1E7B7C] flex items-center justify-center">
                        <CreditCard size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-0.5 italic">Stored Methods</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 italic">{pmList.length}</h3>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-0.5 italic">Verification Pending</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 italic">{pmList.filter(pm => pm.status === 'Pending').length}</h3>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                        <ShieldAlert size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-0.5 italic">Flagged/Risky</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 italic">0</h3>
                    </div>
                </div>
            </div>

            {/* Payment Methods Section */}
            <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex p-1 bg-gray-50 dark:bg-gray-900 rounded-2xl w-fit">
                        {['All', 'Active', 'Verified', 'Pending', 'Disabled'].map((tab) => (
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
                            placeholder="Search by User or Method ID..."
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
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">User & Method</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Type</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Last 4 / Expiry</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Added On</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredPayments.length > 0 ? filteredPayments.map((pm) => (
                                <tr key={pm.id} className="group hover:bg-gray-50/50 dark:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <h4 className="text-sm font-black text-gray-900 dark:text-gray-100 group-hover:text-[#1E7B7C] transition-colors italic">{pm.user}</h4>
                                            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 italic">ID: {pm.id}</span>
                                            {pm.isDefault && <span className="text-[9px] font-black text-[#1E7B7C] uppercase tracking-widest mt-1 italic">Default Method</span>}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 italic">{pm.type}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100 italic">•••• {pm.last4}</span>
                                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium italic">Exp: {pm.expiry}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter italic ${pm.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                                            pm.status === 'Verified' ? 'bg-blue-50 text-blue-600' :
                                                pm.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                                            }`}>
                                            {pm.status === 'Active' || pm.status === 'Verified' ? <CheckCircle2 size={12} /> :
                                                pm.status === 'Pending' ? <Clock size={12} /> : <XCircle size={12} />}
                                            {pm.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 italic">{pm.addedOn}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleStatusToggle(pm.id)}
                                                title={pm.status === 'Disabled' ? "Activate Method" : "Deactivate Method"}
                                                className={`p-2 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800 ${pm.status === 'Disabled' ? 'text-emerald-500 hover:bg-emerald-50' : 'text-amber-500 hover:bg-amber-50'}`}
                                            >
                                                {pm.status === 'Disabled' ? <RotateCcw size={18} /> : <Ban size={18} />}
                                            </button>
                                            <button
                                                onClick={() => handleDelete(pm.id)}
                                                title="Delete Method"
                                                className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-600 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
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
                                            <CreditCard size={48} strokeWidth={1} />
                                            <p className="text-lg font-black italic">No payment methods found</p>
                                            <p className="text-sm font-medium italic">Try a different filter or search</p>
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
