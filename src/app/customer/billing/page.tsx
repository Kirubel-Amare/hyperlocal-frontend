'use client'

import { useState } from 'react'
import { CreditCard, Wallet, FileText, Download, Plus, ArrowUpRight, ArrowDownRight, ShieldCheck, MoreVertical, Clock, X, Lock } from 'lucide-react'

// Mock Data for Payments
const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/26', isDefault: true, icon: '💳' },
    { id: 2, type: 'Mastercard', last4: '8811', expiry: '08/25', isDefault: false, icon: '💳' }
]

const recentTransactions = [
    { id: 'TRX-9932', date: 'Oct 28, 2026', provider: 'Mike Johnson', service: 'Plumbing Repair', amount: '$120.00', status: 'Completed', type: 'debit' },
    { id: 'TRX-9931', date: 'Oct 24, 2026', provider: 'Jane Smith', service: 'Deep Cleaning', amount: '$150.00', status: 'Completed', type: 'debit' },
    { id: 'TRX-9930', date: 'Oct 15, 2026', provider: 'HyperLocal Platform', service: 'Refund - Cancelled Booking', amount: '$45.00', status: 'Refunded', type: 'credit' },
    { id: 'TRX-9929', date: 'Sep 30, 2026', provider: 'Sarah Miller', service: 'Lawn Care', amount: '$85.00', status: 'Completed', type: 'debit' },
]

export default function CustomerBillingPage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'methods' | 'invoices'>('overview')
    const [showAddCard, setShowAddCard] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Wallet },
        { id: 'methods', label: 'Payment Methods', icon: CreditCard },
        { id: 'invoices', label: 'Invoices & History', icon: FileText }
    ] as const

    const handleAddCard = (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        // Simulate Linking Card
        setTimeout(() => {
            setIsProcessing(false)
            setShowAddCard(false)
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
                            <ShieldCheck size={20} strokeWidth={3} />
                        </div>
                        <div>
                            <p className="font-black">Card Linked Successfully!</p>
                            <p className="text-xs font-bold opacity-80">You can now use this card for future services.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Payment Method Modal */}
            {showAddCard && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md" onClick={() => !isProcessing && setShowAddCard(false)} />
                    <div className="bg-white/90 backdrop-blur-2xl w-full max-w-lg rounded-[48px] p-10 shadow-2xl relative z-10 border border-white animate-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setShowAddCard(false)}
                            disabled={isProcessing}
                            className="absolute top-8 right-8 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-8 font-sans">
                            <span className="text-[10px] font-black text-[#1E7B7C] uppercase tracking-widest bg-[#E8F4F4] px-3 py-1 rounded-full mb-4 inline-block">Secure Checkout</span>
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Add Payment Method</h2>
                            <p className="text-gray-500 font-medium mt-1">Link a new card to your account securely.</p>
                        </div>

                        <form onSubmit={handleAddCard} className="space-y-6">
                            <div>
                                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Cardholder Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Full Name"
                                    className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Card Number</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        placeholder="0000 0000 0000 0000"
                                        className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                                    />
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 flex gap-1">
                                        <div className="w-8 h-5 bg-gray-100 rounded shadow-sm overflow-hidden flex items-center justify-center"><CreditCard size={12} className="text-gray-400" /></div>
                                        <div className="w-8 h-5 bg-gray-100 rounded shadow-sm" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Expiry Date</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="MM/YY"
                                        className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">CVV</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="123"
                                        className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 bg-gray-50/50 p-3 rounded-xl border border-gray-100/50 mb-2 justify-center">
                                <Lock size={12} />
                                Encrypted by Stripe. No card info stored.
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full py-5 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-[24px] font-black text-lg hover:shadow-2xl hover:shadow-[#1E7B7C]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                                        Linking Card...
                                    </>
                                ) : (
                                    <>
                                        <Plus size={22} strokeWidth={3} />
                                        Save Payment Method
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                        Billing & Payments
                    </h1>
                    <p className="text-lg text-gray-500 font-medium">
                        Manage your payment methods and view transaction history.
                    </p>
                </div>
            </div>

            {/* Custom Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id
                    const Icon = tab.icon
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${isActive
                                ? 'bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white shadow-lg shadow-[#1E7B7C]/20 scale-105'
                                : 'bg-white/60 backdrop-blur-md text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-md'
                                }`}
                        >
                            <Icon size={16} />
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            {/* Tab Views */}
            <div className="space-y-6">
                {/* Overview Tab Content */}
                {activeTab === 'overview' && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {/* Stats */}
                            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[32px] p-8 shadow-xl shadow-emerald-500/20 text-white relative overflow-hidden flex flex-col justify-between min-h-[180px]">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                <div className="relative z-10 flex items-center justify-between mb-4">
                                    <span className="text-xs font-black text-emerald-100 uppercase tracking-widest">Available Credit</span>
                                    <Wallet size={24} className="text-emerald-100" />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-5xl font-black mb-1">$45.00</div>
                                    <p className="text-xs font-bold text-emerald-100">From recent refunds</p>
                                </div>
                            </div>

                            <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-gray-100 shadow-xl shadow-gray-200/10 flex flex-col justify-between min-h-[180px]">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Total Spent (YTD)</span>
                                    <div className="p-2 bg-gray-50 rounded-xl"><ArrowUpRight size={20} className="text-gray-400" /></div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-gray-900 mb-1">$1,240.00</div>
                                    <p className="text-xs font-bold text-gray-500">+12% from last year</p>
                                </div>
                            </div>

                            <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-gray-100 shadow-xl shadow-gray-200/10 flex flex-col justify-between min-h-[180px]">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Next Payment</span>
                                    <div className="p-2 bg-gray-50 rounded-xl"><Clock size={20} className="text-gray-400" /></div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-gray-900 mb-1">$0.00</div>
                                    <p className="text-xs font-bold text-gray-500">No upcoming charges</p>
                                </div>
                            </div>
                        </div>

                        {/* Recent Transactions List */}
                        <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black text-gray-900">Recent Transactions</h2>
                                <button className="text-[#1E7B7C] font-black text-sm hover:underline">View All</button>
                            </div>

                            <div className="space-y-4">
                                {recentTransactions.slice(0, 4).map((tx) => (
                                    <div key={tx.id} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100/50 hover:shadow-md transition-shadow group">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-4 rounded-2xl ${tx.type === 'credit' ? 'bg-emerald-50 text-emerald-500' : 'bg-gray-50 text-gray-500'}`}>
                                                {tx.type === 'credit' ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900 mb-1">{tx.service}</h4>
                                                <p className="text-sm font-bold text-gray-500">{tx.provider} • {tx.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-lg font-black mb-1 ${tx.type === 'credit' ? 'text-emerald-600' : 'text-gray-900'}`}>
                                                {tx.type === 'credit' ? '+' : '-'}{tx.amount}
                                            </div>
                                            <button className="text-xs font-bold text-[#1E7B7C] hover:underline flex items-center justify-end gap-1 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Download size={12} /> Receipt
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Methods Tab Content */}
                {activeTab === 'methods' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paymentMethods.map(method => (
                            <div key={method.id} className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-gray-100 shadow-xl shadow-gray-200/10 relative group">
                                {method.isDefault && (
                                    <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-sm border border-emerald-200 z-10">
                                        Default
                                    </span>
                                )}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-gray-50 rounded-2xl text-3xl">
                                        {method.icon}
                                    </div>
                                    <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400 opacity-0 group-hover:opacity-100">
                                        <MoreVertical size={20} />
                                    </button>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-1">{method.type} ending in {method.last4}</h3>
                                    <p className="text-sm font-bold text-gray-400">Expires {method.expiry}</p>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={() => setShowAddCard(true)}
                            className="bg-gray-50/50 hover:bg-white rounded-[32px] p-8 border-2 border-dashed border-gray-200 hover:border-[#1E7B7C] hover:text-[#1E7B7C] text-gray-400 transition-all flex flex-col justify-center items-center min-h-[220px] group cursor-pointer shadow-none hover:shadow-xl"
                        >
                            <div className="p-4 bg-white group-hover:bg-[#E8F4F4] rounded-2xl mb-4 transition-colors">
                                <Plus size={24} className="group-hover:scale-125 transition-transform" />
                            </div>
                            <span className="font-bold text-sm">Add New Payment Method</span>
                        </button>

                        <div className="md:col-span-2 lg:col-span-3 mt-4 bg-blue-50/50 rounded-3xl p-6 flex gap-4 items-start border border-blue-100 relative overflow-hidden">
                            <ShieldCheck size={24} className="text-blue-500 shrink-0 relative z-10" />
                            <div className="relative z-10">
                                <h4 className="text-sm font-black text-blue-900 mb-1">Secure Payments</h4>
                                <p className="text-xs font-bold text-blue-700/80">
                                    All transactions are encrypted and processed securely by Stripe. We do not store your full card details on our servers.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Invoices Tab Content */}
                {activeTab === 'invoices' && (
                    <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="pb-4 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">Date</th>
                                    <th className="pb-4 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">Description</th>
                                    <th className="pb-4 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">Amount</th>
                                    <th className="pb-4 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTransactions.map((tx) => (
                                    <tr key={tx.id} className="group border-b border-gray-50/50 hover:bg-white transition-colors">
                                        <td className="py-5 font-bold text-sm text-gray-600">{tx.date}</td>
                                        <td className="py-5">
                                            <div className="font-black text-gray-900 text-sm">{tx.service}</div>
                                            <div className="font-bold text-xs text-gray-500">{tx.id}</div>
                                        </td>
                                        <td className="py-5 font-black text-gray-900">${tx.amount}</td>
                                        <td className="py-5 text-right">
                                            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-[#1E7B7C] inline-flex items-center justify-center">
                                                <Download size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
