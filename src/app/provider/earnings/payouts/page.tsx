'use client'

import React, { useState } from 'react';
import {
    CreditCard,
    Zap,
    ArrowUpRight,
    ArrowDownLeft,
    Calendar,
    ShieldCheck,
    ExternalLink,
    CheckCircle2,
    Clock,
    AlertCircle,
    Info,
    ChevronRight,
    Wallet,
    History as HistoryIcon
} from 'lucide-react';

export default function PayoutsPage() {
    const [status, setStatus] = useState<'not_connected' | 'connecting' | 'connected'>('not_connected');

    const transactions = [
        { id: 'TX-8291', type: 'Payout', amount: 450.00, status: 'Completed', date: 'Feb 20, 2024', method: 'Bank Transfer' },
        { id: 'TX-8290', type: 'Earnings', amount: 150.00, status: 'Completed', date: 'Feb 19, 2024', job: 'Pipe Burst Repair' },
        { id: 'TX-8289', type: 'Earnings', amount: 320.00, status: 'Completed', date: 'Feb 18, 2024', job: 'Garden Renovation' },
        { id: 'TX-8288', type: 'Payout', amount: 800.00, status: 'Pending', date: 'Feb 17, 2024', method: 'Instant Payout' },
    ];

    const handleConnect = () => {
        setStatus('connecting');
        setTimeout(() => setStatus('connected'), 3000);
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">Payouts & Wallet</h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium italic">Manage your earnings and instant withdrawals.</p>
                </div>
                <div className="flex bg-gray-100/50 p-1 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <button className="px-6 py-2 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 rounded-xl text-sm font-black shadow-sm">Earnings</button>
                    <button className="px-6 py-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">Tax Reports</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Balance & Stats */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Main Balance Card */}
                    <div className="bg-gray-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-gray-400/20 group">
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Wallet size={160} />
                        </div>
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white dark:bg-gray-950/10 rounded-2xl backdrop-blur-md border border-white/10">
                                    <CreditCard size={24} className="text-emerald-400" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Available for Payout</span>
                            </div>

                            <div>
                                <h2 className="text-6xl font-black tracking-tighter">$1,240.80</h2>
                                <p className="text-emerald-400 text-sm font-bold mt-2 flex items-center gap-1">
                                    <Zap size={14} fill="currentColor" /> Ready for instant withdrawal
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black shadow-xl shadow-emerald-500/20 hover:scale-[1.05] active:scale-95 transition-all flex items-center gap-2">
                                    Withdraw Now
                                    <ArrowUpRight size={20} />
                                </button>
                                <button className="px-8 py-4 bg-white dark:bg-gray-950/10 border border-white/10 text-white rounded-[2rem] font-black hover:bg-white dark:bg-gray-950/20 transition-all">
                                    Auto-Payout Settings
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats Tiles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-950/70 backdrop-blur-md border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6 group hover:border-[#1E7B7C]/30 transition-all">
                            <div className="w-16 h-16 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                <HistoryIcon size={28} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Total Earned (YTD)</p>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-gray-100">$24,850.00</h4>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-950/70 backdrop-blur-md border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6 group hover:border-emerald-500/30 transition-all">
                            <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                <CheckCircle2 size={28} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Paid Out</p>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-gray-100">$23,609.20</h4>
                            </div>
                        </div>
                    </div>

                    {/* Transaction History */}
                    <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-sm overflow-hidden">
                        <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                            <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 italic">Recent Transactions</h3>
                            <button className="text-sm font-black text-[#1E7B7C] hover:underline flex items-center gap-1">
                                View Full History <ChevronRight size={16} />
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody className="divide-y divide-gray-50">
                                    {transactions.map((tx) => (
                                        <tr key={tx.id} className="group hover:bg-gray-50/50 dark:bg-gray-900/50 transition-colors">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-2.5 rounded-xl ${tx.type === 'Payout' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                                        {tx.type === 'Payout' ? <ArrowUpRight size={18} /> : <ArrowDownLeft size={18} />}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-black text-gray-900 dark:text-gray-100">{tx.type} #{tx.id}</p>
                                                        <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-tighter">{tx.job || tx.method}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{tx.date}</span>
                                            </td>
                                            <td className="px-8 py-5">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${tx.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                                                    }`}>
                                                    {tx.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5 text-right font-black text-gray-900 dark:text-gray-100">
                                                {tx.type === 'Payout' ? '-' : '+'}${tx.amount.toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Account & Onboarding */}
                <div className="space-y-6">
                    {/* Stripe Connectivity Card */}
                    <div className="bg-white dark:bg-gray-950/70 backdrop-blur-md border border-gray-100 dark:border-gray-800 p-8 rounded-[3rem] shadow-sm space-y-6 relative overflow-hidden">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-lg font-black tracking-tight italic">Payout Security</h3>
                        </div>

                        {status === 'not_connected' && (
                            <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    Secure your earnings by connecting with <span className="text-[#1E7B7C] font-black">Stripe Connect</span>. It takes less than 2 minutes.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                                        <CheckCircle2 size={16} className="text-emerald-500" /> Instant Bank Transfers
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                                        <CheckCircle2 size={16} className="text-emerald-500" /> Automated Tax Documents
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                                        <CheckCircle2 size={16} className="text-emerald-500" /> PCI Level 1 Security
                                    </div>
                                </div>
                                <button
                                    onClick={handleConnect}
                                    className="w-full bg-[#1E7B7C] text-white py-4 rounded-[2rem] font-black shadow-xl shadow-[#1E7B7C]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                                >
                                    Connect Stripe
                                    <ExternalLink size={18} />
                                </button>
                            </div>
                        )}

                        {status === 'connecting' && (
                            <div className="flex flex-col items-center justify-center py-10 space-y-4 animate-in fade-in duration-500">
                                <Loader2 className="w-12 h-12 text-[#1E7B7C] animate-spin" />
                                <p className="text-sm font-black text-gray-900 dark:text-gray-100 italic">Redirecting to Stripe...</p>
                            </div>
                        )}

                        {status === 'connected' && (
                            <div className="space-y-6 animate-in zoom-in duration-500">
                                <div className="p-6 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex flex-col items-center text-center">
                                    <CheckCircle2 className="text-emerald-600 mb-4" size={48} />
                                    <h4 className="text-lg font-black text-emerald-900 uppercase tracking-tighter italic">Stripe Connected</h4>
                                    <p className="text-[10px] text-emerald-700 font-bold mt-1">Verified: Chase Bank (**** 8291)</p>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                                    <h5 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Settings</h5>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-gray-600">Instant Payouts</span>
                                        <div className="w-12 h-6 bg-emerald-500 rounded-full relative p-1">
                                            <div className="absolute right-1 w-4 h-4 bg-white dark:bg-gray-950 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full border-2 border-gray-100 dark:border-gray-800 py-4 rounded-3xl text-xs font-black text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:bg-gray-900 transition-all italic">
                                    Manage Stripe Account
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Instant Payout Info */}
                    <div className="bg-emerald-900/5 border border-emerald-200/20 p-8 rounded-[3rem] space-y-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Zap size={60} className="text-emerald-600" />
                        </div>
                        <h4 className="text-sm font-black text-emerald-900 italic">Instant Payout Insight</h4>
                        <p className="text-xs text-emerald-700 font-medium leading-relaxed italic border-l-2 border-emerald-200 pl-4">
                            Wihdrawals usually arrive in <span className="font-black">minutes</span>. A 1% fee applies for instant speed.
                        </p>
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-[3rem] space-y-4">
                        <div className="flex items-center gap-2 text-amber-600">
                            <Info size={18} />
                            <h4 className="text-xs font-black uppercase tracking-widest">Help & Support</h4>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic">
                            Missing a payout? Visit our help center or contact financial support.
                        </p>
                        <button className="text-xs font-black text-[#1E7B7C] hover:underline">Support Center →</button>
                    </div>
                </div>
            </div>
            {/* Background element */}
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </div>
    );
}

function Loader2({ className, ...props }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`animate-spin ${className}`}
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    )
}
