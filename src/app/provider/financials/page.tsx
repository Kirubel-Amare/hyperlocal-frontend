'use client'

import React, { useState } from 'react'
import {
    Wallet2, TrendingUp, Download, ArrowUpRight, ArrowDownRight,
    DollarSign, FileText, Landmark, Clock, ChevronRight, CheckCircle2,
    X, Plus, ShieldCheck, Lock, Building2
} from 'lucide-react'
import { providerDashboardData } from '@/lib/mock-dashboards'

export default function ProviderFinancialsPage() {
    const { stats } = providerDashboardData
    const [activeTab, setActiveTab] = useState('overview')
    const [showAddMethod, setShowAddMethod] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleAddMethod = (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        // Simulate Linking Bank Account
        setTimeout(() => {
            setIsProcessing(false)
            setShowAddMethod(false)
            setShowSuccess(true)

            // Hide success message after 4 seconds
            setTimeout(() => setShowSuccess(false), 4000)
        }, 2000)
    }

    return (
        <div className="max-w-6xl relative pb-24">
            {/* Success Banner */}
            {showSuccess && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="bg-emerald-500 text-white p-4 rounded-3xl shadow-2xl flex items-center gap-4 border-2 border-white/20 backdrop-blur-xl">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <CheckCircle2 size={20} strokeWidth={3} />
                        </div>
                        <div>
                            <p className="font-black">Method Linked Successfully!</p>
                            <p className="text-xs font-bold opacity-80">Your bank account is now verified for withdrawals.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Withdrawal Method Modal */}
            {showAddMethod && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md" onClick={() => !isProcessing && setShowAddMethod(false)} />
                    <div className="bg-white/90 backdrop-blur-2xl w-full max-w-lg rounded-[48px] p-10 shadow-2xl relative z-10 border border-white animate-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setShowAddMethod(false)}
                            disabled={isProcessing}
                            className="absolute top-8 right-8 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-8 font-sans">
                            <span className="text-[10px] font-black text-[#1E7B7C] uppercase tracking-widest bg-[#E8F4F4] px-3 py-1 rounded-full mb-4 inline-block">Security First</span>
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Link Bank Account</h2>
                            <p className="text-gray-500 font-medium mt-1">Funds will be deposited directly to your bank.</p>
                        </div>

                        <form onSubmit={handleAddMethod} className="space-y-6">
                            <div>
                                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Bank Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Chase, Wells Fargo"
                                        className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm pl-12"
                                    />
                                    <Building2 size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Routing Number</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="9 digits"
                                        maxLength={9}
                                        className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Account Number</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Bank account #"
                                        className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 bg-gray-50/50 p-3 rounded-xl border border-gray-100/50 mb-2 justify-center">
                                <Lock size={12} />
                                Linked securely via encrypted handshake
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full py-5 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-[24px] font-black text-lg hover:shadow-2xl hover:shadow-[#1E7B7C]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                                        Verifying Account...
                                    </>
                                ) : (
                                    <>
                                        <ShieldCheck size={22} />
                                        Verify & Account
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Financial Management</h1>
                    <p className="text-lg text-gray-500 font-medium">Track earnings, manage invoices, and configure withdrawals.</p>
                </div>
                <button className="px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                    <Download size={18} />
                    Export Statement
                </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 pb-2 border-b border-gray-100">
                {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'invoices', label: 'Invoices & Billing' },
                    { id: 'withdrawals', label: 'Withdrawal Methods' },
                    { id: 'taxes', label: 'Tax Documents' },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${activeTab === tab.id
                            ? 'bg-[#1E7B7C] text-white shadow-md'
                            : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeTab === 'overview' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Hero Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-[40px] p-10 shadow-2xl shadow-[#1E7B7C]/20 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <span className="text-xs font-black text-white/60 uppercase tracking-widest block mb-2">Available for Withdrawal</span>
                                        <div className="text-5xl lg:text-6xl font-black">$1,840.50</div>
                                    </div>
                                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl">
                                        <Wallet2 size={32} className="text-white" />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => setActiveTab('withdrawals')}
                                        className="flex-1 py-4 bg-white text-[#1E7B7C] rounded-2xl font-black hover:scale-[1.02] transition-transform shadow-lg text-lg"
                                    >
                                        Withdraw Funds
                                    </button>
                                    <button className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-colors backdrop-blur-md">
                                        Manage Schedule
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/10 border border-white flex-1 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pending Clearance</span>
                                    <Clock size={20} className="text-amber-500" />
                                </div>
                                <div className="text-3xl font-black text-gray-900 mb-1">$450.00</div>
                                <p className="text-sm font-bold text-gray-400">Clears by Oct 24, 2023</p>
                            </div>
                            <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/10 border border-white flex-1 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Lifetime Earnings</span>
                                    <TrendingUp size={20} className="text-emerald-500" />
                                </div>
                                <div className="text-3xl font-black text-gray-900 mb-1">{stats.totalEarnings.amount}</div>
                                <div className="flex items-center gap-1.5 text-emerald-500 font-bold text-xs">
                                    <ArrowUpRight size={14} />
                                    +15.2% YTD
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black text-gray-900">Recent Activity</h2>
                            <button className="text-[#1E7B7C] font-black text-sm hover:underline flex items-center gap-1">
                                View All
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {[
                                { id: 1, title: 'Deep Kitchen Cleaning', type: 'Payment', date: 'Oct 15, 2023', amount: '+$180.00', status: 'Cleared', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                                { id: 2, title: 'Withdrawal to Chase ***4421', type: 'Withdrawal', date: 'Oct 12, 2023', amount: '-$500.00', status: 'Processing', icon: Landmark, color: 'text-gray-900', bg: 'bg-gray-100' },
                                { id: 3, title: 'Service Fee - Kitchen Cleaning', type: 'Fee', date: 'Oct 15, 2023', amount: '-$36.00', status: 'Cleared', icon: FileText, color: 'text-red-500', bg: 'bg-red-50' },
                                { id: 4, title: 'Standard Tidying', type: 'Payment', date: 'Oct 10, 2023', amount: '+$120.00', status: 'Cleared', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                            ].map((tx) => (
                                <div key={tx.id} className="flex items-center justify-between p-6 hover:bg-white/50 rounded-3xl transition-all border border-transparent hover:border-gray-100 group">
                                    <div className="flex items-center gap-5">
                                        <div className={`p-4 rounded-2xl ${tx.bg} ${tx.color}`}>
                                            <tx.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900 text-lg mb-1">{tx.title}</h4>
                                            <p className="text-xs font-bold text-gray-500">{tx.type} • {tx.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-xl font-black mb-1.5 ${tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-gray-900'}`}>{tx.amount}</div>
                                        <div className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg inline-block ${tx.status === 'Cleared' ? 'bg-[#E8F4F4] text-[#1E7B7C]' : 'bg-amber-50 text-amber-600'}`}>
                                            {tx.status}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'withdrawals' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
                        <h2 className="text-2xl font-black text-gray-900 mb-8">Withdrawal Methods</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Primary Method */}
                            <div className="border-2 border-[#1E7B7C] rounded-[32px] p-8 bg-white relative">
                                <div className="absolute top-4 right-4 px-3 py-1 bg-[#1E7B7C] text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                                    Primary
                                </div>
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Landmark size={32} />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-1">Chase Bank</h3>
                                <p className="text-sm font-bold text-gray-500 mb-6">Checking ending in 4421</p>
                                <p className="text-xs font-medium text-gray-400 flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-[#1E7B7C]" />
                                    Verified on Aug 12, 2023
                                </p>
                            </div>

                            {/* Add New Method */}
                            <div
                                onClick={() => setShowAddMethod(true)}
                                className="border-2 border-dashed border-gray-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-[#1E7B7C]/30 transition-all cursor-pointer group"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-md transition-all">
                                    <Plus size={24} className="text-gray-400 group-hover:text-[#1E7B7C]" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">Add Payment Method</h3>
                                <p className="text-sm font-medium text-gray-500 max-w-[200px]">Link a bank account or debit card for instant payouts.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50/50 rounded-3xl border border-gray-100">
                            <h4 className="font-black text-gray-900 mb-2">Withdrawal Schedule</h4>
                            <p className="text-sm text-gray-600 mb-4 font-medium">Your funds are currently set to automatically withdraw to your primary payment method every Wednesday.</p>
                            <button className="text-[#1E7B7C] font-black text-sm hover:underline">Edit Schedule</button>
                        </div>
                    </div>
                </div>
            )}

            {(activeTab === 'invoices' || activeTab === 'taxes') && (
                <div className="flex flex-col items-center justify-center py-20 bg-white/60 backdrop-blur-md rounded-[40px] border border-white shadow-xl shadow-gray-200/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                        <FileText size={40} className="text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">No Documents Yet</h2>
                    <p className="text-gray-500 font-medium max-w-sm text-center">
                        {activeTab === 'invoices'
                            ? "You haven't generated any manual invoices yet. Automatic receipts are visible in Activity."
                            : "Tax documents will appear here at the end of the fiscal year."}
                    </p>
                </div>
            )}

        </div>
    )
}
