'use client'

import { Zap, CreditCard, History, ChevronRight, TrendingUp, Info, ShoppingBag } from 'lucide-react'
import { mockUserAccount } from '@/lib/jobs-data'

export default function ProviderConnectsPage() {
  return (
    <div className="max-w-6xl relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">My Service Credits</h1>
          <p className="text-lg text-gray-500 font-medium">Manage your quotes and promotional capacity.</p>
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-2xl font-black flex items-center gap-2 hover:shadow-lg hover:shadow-[#1E7B7C]/20 transition-all active:scale-95">
          <ShoppingBag size={18} />
          Buy more Credits
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/5 border border-white flex flex-col justify-between h-48">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Available Quotes</span>
            <div className="p-2 bg-[#E8F4F4] text-[#1E7B7C] rounded-xl">
              <Zap size={20} fill="currentColor" />
            </div>
          </div>
          <div>
            <div className="text-5xl font-black text-gray-900 mb-2">{mockUserAccount.quotesLeft}</div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Current Balance</p>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/5 border border-white flex flex-col justify-between h-48">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Monthly Usage</span>
            <TrendingUp size={24} className="text-blue-500" />
          </div>
          <div>
            <div className="text-4xl font-black text-gray-900 mb-2">18 Used</div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Billed Oct 1 - Oct 31</p>
          </div>
        </div>

        <div className="bg-[#1E7B7C] rounded-[32px] p-8 shadow-2xl shadow-[#1E7B7C]/20 text-white flex flex-col justify-between h-48">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Membership Status</span>
            <CreditCard size={24} className="text-white/80" />
          </div>
          <div>
            <div className="text-2xl font-black mb-1">{mockUserAccount.membershipType}</div>
            <p className="text-sm font-bold opacity-80">Renews on Nov 12, 2023</p>
          </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 border border-white shadow-xl shadow-gray-200/10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
            <History size={24} className="text-[#1E7B7C]" />
            Refill History
          </h2>
          <div className="flex items-center gap-2 p-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-black">
            <Info size={14} />
            Credits never expire
          </div>
        </div>

        <div className="space-y-4">
          {[
            { id: 1, type: 'Recurring', amount: '+20 Credits', desc: 'Monthly Pro Membership Allotment', date: 'Oct 12, 2023', status: 'Applied' },
            { id: 2, type: 'One-time', amount: '+50 Credits', desc: 'Custom Credit Bundle Purchase', date: 'Oct 05, 2023', status: 'Billed' },
            { id: 3, type: 'Promotional', amount: '+5 Credits', desc: 'Client Referral Bonus', date: 'Sep 28, 2023', status: 'Applied' },
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between p-6 hover:bg-white/50 rounded-3xl transition-all border border-transparent hover:border-gray-50 group">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-[#E8F4F4] group-hover:text-[#1E7B7C] transition-colors">
                  <Zap size={24} fill={item.type === 'Promotional' ? 'currentColor' : 'none'} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900">{item.desc}</h4>
                  <p className="text-xs font-bold text-gray-400 mt-1">{item.type} • {item.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-[#1E7B7C] mb-1">{item.amount}</div>
                <div className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-2 py-1 rounded-lg inline-block">{item.status}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-10 py-5 bg-gray-50/50 text-gray-400 font-black rounded-2xl hover:bg-gray-100 hover:text-gray-600 transition-all flex items-center justify-center gap-2 group">
          View Full History
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
