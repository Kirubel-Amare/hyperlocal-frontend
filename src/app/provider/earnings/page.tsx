'use client'

import { Wallet2, TrendingUp, ArrowUpRight, ArrowDownRight, Download, Calendar, DollarSign, Wallet, ChevronRight } from 'lucide-react'
import { providerDashboardData } from '@/lib/mock-dashboards'

export default function ProviderEarningsPage() {
  const { stats } = providerDashboardData

  return (
    <div className="max-w-6xl relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Earnings & Payouts</h1>
          <p className="text-lg text-gray-500 font-medium">Clear overview of your service revenue and payment status.</p>
        </div>
        <button className="px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg active:scale-95">
          <Download size={18} />
          Export Statement
        </button>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#1E7B7C] rounded-[32px] p-8 shadow-2xl shadow-[#1E7B7C]/20 text-white">
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Available for Payout</span>
            <Wallet size={24} className="text-white/80" />
          </div>
          <div className="text-5xl font-black mb-4">$1,840.50</div>
          <button className="w-full py-4 bg-white text-[#1E7B7C] rounded-2xl font-black hover:scale-[1.02] transition-all shadow-md">
            Withdraw Funds
          </button>
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/10 border border-white flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Lifetime Earnings</span>
            <TrendingUp size={24} className="text-[#1E7B7C]" />
          </div>
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">{stats.totalEarnings.amount}</div>
            <div className="flex items-center gap-2 text-emerald-500 font-black text-sm">
              <ArrowUpRight size={16} />
              +15.2% from last year
            </div>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/10 border border-white flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Jobs Value</span>
            <DollarSign size={24} className="text-blue-500" />
          </div>
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">$850.00</div>
            <p className="text-sm font-bold text-gray-400">Locked in escrow for ongoing work</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-black text-gray-900">Recent Transactions</h2>
          <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-xl">
            <button className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-black text-[#1E7B7C]">All</button>
            <button className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors">Pending</button>
            <button className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors">Completed</button>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { id: 1, title: 'Deep Kitchen Cleaning', client: 'Sarah M.', date: 'Oct 15, 2023', amount: '$180.00', status: 'Completed', type: 'Income' },
            { id: 2, title: 'Withdrawal to Bank', client: 'ending in 4421', date: 'Oct 12, 2023', amount: '-$500.00', status: 'Pending', type: 'Payout' },
            { id: 3, title: 'Standard Tidying', client: 'James W.', date: 'Oct 10, 2023', amount: '$120.00', status: 'Completed', type: 'Income' },
            { id: 4, title: 'Window Cleaning Pro', client: 'David K.', date: 'Oct 08, 2023', amount: '$210.00', status: 'Completed', type: 'Income' },
          ].map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-6 hover:bg-white/50 rounded-3xl transition-all group">
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-2xl ${tx.type === 'Income' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                  {tx.type === 'Income' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                </div>
                <div>
                  <h4 className="font-black text-gray-900">{tx.title}</h4>
                  <p className="text-xs font-medium text-gray-500 mt-1">{tx.client} • {tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-xl font-black mb-1 ${tx.type === 'Income' ? 'text-gray-900' : 'text-blue-600'}`}>{tx.amount}</div>
                <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg inline-block ${tx.status === 'Completed' ? 'bg-[#E8F4F4] text-[#1E7B7C]' : 'bg-amber-50 text-amber-600'
                  }`}>
                  {tx.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-10 py-5 bg-gray-50 rounded-2xl text-sm font-black text-gray-400 hover:bg-gray-100/80 hover:text-gray-600 transition-all flex items-center justify-center gap-2 group">
          Load More Activity
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
