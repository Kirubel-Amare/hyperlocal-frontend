'use client'

import React from 'react'
import { Zap, CreditCard, Clock, History, ArrowUpRight, ArrowDownRight, Package, Check, HelpCircle } from 'lucide-react'

export default function ProviderConnectsPage() {
  return (
    <div className="max-w-6xl relative pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Service Credits</h1>
          <p className="text-lg text-gray-500 font-medium">Manage your connects used for applying to service requests.</p>
        </div>
        <button className="px-6 py-3 bg-[#1E7B7C] text-white rounded-2xl font-black flex items-center gap-2 hover:bg-[#166566] transition-all shadow-lg shadow-[#1E7B7C]/20 active:scale-95">
          <CreditCard size={18} />
          Buy Connects
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Core Balance Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-[40px] p-10 shadow-2xl shadow-[#1E7B7C]/20 text-white relative overflow-hidden flex flex-col justify-between h-64 border border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="flex justify-between items-start relative z-10 mb-8">
            <span className="text-sm font-black text-white/60 uppercase tracking-widest block">Available Balance</span>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl">
              <Zap size={32} className="text-white fill-white" />
            </div>
          </div>
          <div className="relative z-10">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl font-black">124</span>
              <span className="text-xl font-bold text-white/80">Connects</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold bg-white/10 backdrop-blur-sm w-fit px-3 py-1.5 rounded-xl border border-white/20">
              <Clock size={16} />
              Refreshes in 14 days (Nov 10, 2023)
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/10 border border-white flex flex-col justify-between h-64">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Connects Usage</span>
            <HelpCircle size={20} className="text-[#1E7B7C]" />
          </div>
          <div>
            <div className="space-y-4 mb-4">
              <div className="flex justify-between items-center bg-gray-50/50 p-3 rounded-2xl border border-gray-100/50">
                <span className="text-sm font-bold text-gray-500">Standard Job</span>
                <span className="text-sm font-black text-gray-900 border border-gray-200 bg-white px-2 py-0.5 rounded-lg">-2 to -4</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50/50 p-3 rounded-2xl border border-gray-100/50">
                <span className="text-sm font-bold text-gray-500">Premium Lead</span>
                <span className="text-sm font-black text-amber-600 border border-amber-200 bg-amber-50 px-2 py-0.5 rounded-lg">-6 to -8</span>
              </div>
            </div>
            <p className="text-[11px] font-bold text-gray-400 text-center uppercase tracking-widest">Pricing varies by demand</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Packages */}
        <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2">
            <Package size={24} className="text-[#1E7B7C]" />
            Quick Recharge
          </h2>

          <div className="space-y-4">
            {[
              { id: 1, connects: 20, price: '$3.00', popular: false },
              { id: 2, connects: 80, price: '$12.00', popular: true },
              { id: 3, connects: 150, price: '$22.50', popular: false },
            ].map((pkg) => (
              <div key={pkg.id} className={`p-1 rounded-[24px] transition-all relative ${pkg.popular ? 'bg-gradient-to-r from-[#1E7B7C] to-[#166566] shadow-lg shadow-[#1E7B7C]/10' : 'bg-transparent border border-gray-100'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1E7B7C] text-white text-[10px] font-black uppercase tracking-widest rounded-lg border-2 border-white shadow-sm">
                    Most Popular
                  </div>
                )}
                <div className="bg-white rounded-[20px] p-5 flex items-center justify-between group cursor-pointer hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pkg.popular ? 'bg-[#E8F4F4] text-[#1E7B7C]' : 'bg-gray-100 text-gray-500'}`}>
                      <Zap size={24} className={pkg.popular ? 'fill-[#1E7B7C]' : ''} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900">{pkg.connects} Connects</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-xl font-black text-gray-900">{pkg.price}</div>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${pkg.popular ? 'border-[#1E7B7C] bg-[#1E7B7C]' : 'border-gray-200 group-hover:border-[#1E7B7C]'}`}>
                      <Check size={16} className={pkg.popular ? 'text-white' : 'text-transparent group-hover:text-[#1E7B7C]'} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
              <History size={24} className="text-[#1E7B7C]" />
              Connects History
            </h2>
            <button className="text-[#1E7B7C] font-black text-sm hover:underline">View All</button>
          </div>

          <div className="space-y-4">
            {[
              { id: 1, action: 'Applied to "Plumbing fix"', type: 'Used', amount: '-4', date: 'Oct 26, 2023', icon: ArrowDownRight },
              { id: 2, action: 'Monthly Refresh', type: 'Added', amount: '+60', date: 'Oct 10, 2023', icon: ArrowUpRight },
              { id: 3, action: 'Interview Won Bonus', type: 'Added', amount: '+10', date: 'Oct 08, 2023', icon: ArrowUpRight },
              { id: 4, action: 'Applied to "Window clean"', type: 'Used', amount: '-2', date: 'Oct 05, 2023', icon: ArrowDownRight },
            ].map((log) => (
              <div key={log.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100/50 hover:bg-white transition-colors group">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${log.type === 'Added' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                    <log.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-sm mb-0.5">{log.action}</h4>
                    <p className="text-xs font-bold text-gray-500">{log.date}</p>
                  </div>
                </div>
                <div className={`text-lg font-black ${log.type === 'Added' ? 'text-emerald-600' : 'text-gray-900'}`}>
                  {log.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
