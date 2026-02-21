'use client'

import React, { useState } from 'react';
import {
  DollarSign,
  Search,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  CheckCircle2,
  Clock,
  XCircle,
  FileText,
  Lock,
  Unlock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useToast } from '@/providers/ToastProvider';

const initialTransactions = [
  { id: 'TRX-8291', customer: 'Alex Johnson', provider: 'Sparkle Cleaners', amount: 250.00, fee: 37.50, status: 'Completed', date: 'Feb 20, 2024', type: 'Payment' },
  { id: 'TRX-8292', customer: 'Emma Davis', provider: 'FixIt Services', amount: 120.00, fee: 18.00, status: 'Escrow Held', date: 'Feb 20, 2024', type: 'Payment' },
  { id: 'TRX-8293', customer: 'Michael Chen', provider: 'Green Thumb', amount: 450.00, fee: 67.50, status: 'Escrow Held', date: 'Feb 19, 2024', type: 'Payment' },
  { id: 'TRX-8294', customer: 'Sarah Miller', provider: 'Alex Johnson', amount: 80.00, fee: 12.00, status: 'Refunded', date: 'Feb 19, 2024', type: 'Refund' },
  { id: 'TRX-8295', customer: 'John Doe', provider: 'Elite Tutors', amount: 300.00, fee: 45.00, status: 'Escrow Released', date: 'Feb 18, 2024', type: 'Payment' },
];

export default function TransactionsPage() {
  const [trxList, setTrxList] = useState(initialTransactions);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { showToast } = useToast();

  const filteredTransactions = trxList.filter(trx => {
    const matchesFilter = activeFilter === 'All' ||
      (activeFilter === 'Payments' && trx.type === 'Payment') ||
      (activeFilter === 'Refunds' && trx.type === 'Refund');

    const matchesSearch = trx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trx.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trx.provider.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const handleRelease = (id: string) => {
    setTrxList(prev => prev.map(trx => {
      if (trx.id === id) {
        showToast(`Escrow funds released for ${id}`, 'success');
        return { ...trx, status: 'Escrow Released' };
      }
      return trx;
    }));
  };

  const totalVolume = trxList.reduce((acc, trx) => acc + trx.amount, 0);
  const totalRevenue = trxList.reduce((acc, trx) => acc + trx.fee, 0);
  const totalPending = trxList.reduce((acc, trx) => trx.status === 'Escrow Held' ? acc + trx.amount : acc, 0);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2 italic">Financial Operations</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium italic">Monitor payments, platform fees, and refund activities.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:bg-gray-900 transition-all flex items-center gap-2 italic">
            <Download size={18} />
            Export CSV
          </button>
          <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2 italic">
            <DollarSign size={18} />
            Payout Summary
          </button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2.5rem] shadow-sm group hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <DollarSign size={20} />
            </div>
            <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-2 py-1 rounded-full">+14.2%</div>
          </div>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-1 italic">Total Volume</p>
          <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 italic">${totalVolume.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
        </div>
        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2.5rem] shadow-sm group hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F4F4] text-[#1E7B7C] flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight size={20} />
            </div>
            <div className="bg-[#E8F4F4] text-[#1E7B7C] text-[10px] font-black px-2 py-1 rounded-full">+8.4%</div>
          </div>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-1 italic">Platform Revenue</p>
          <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 italic">${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
        </div>
        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2.5rem] shadow-sm group hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock size={20} />
            </div>
            <div className="bg-amber-50 text-amber-600 text-[10px] font-black px-2 py-1 rounded-full italic">Active</div>
          </div>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-1 italic">Pending Payouts</p>
          <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 italic">${totalPending.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
        </div>
      </div>

      {/* Transactions Table Section */}
      <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex p-1 bg-gray-50 dark:bg-gray-900 rounded-2xl w-fit">
            {['All', 'Payments', 'Refunds', 'Payouts'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all italic ${activeFilter === filter
                  ? 'bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:text-gray-300'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-[#1E7B7C] transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search transaction..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-transparent rounded-2xl outline-none focus:bg-white dark:bg-gray-950 focus:border-[#1E7B7C]/20 focus:ring-4 focus:ring-[#1E7B7C]/5 transition-all text-sm font-medium w-64 shadow-sm italic"
              />
            </div>
            <button className="p-2.5 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl text-gray-400 dark:text-gray-500 hover:text-[#1E7B7C] shadow-sm italic">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-900/50">
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Transaction ID</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Parties</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Amount & Fees</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTransactions.length > 0 ? filteredTransactions.map((trx) => (
                <tr key={trx.id} className="group hover:bg-gray-50/50 dark:bg-gray-900/50 transition-all duration-300">
                  <td className="px-6 py-5">
                    <span className="text-sm font-black text-gray-900 dark:text-gray-100 group-hover:text-[#1E7B7C] transition-colors italic">{trx.id}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 italic">From:</span>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 italic">{trx.customer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 italic">To:</span>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 italic">{trx.provider}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div>
                      <p className="text-sm font-black text-gray-900 dark:text-gray-100 italic">${trx.amount.toFixed(2)}</p>
                      <p className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded w-fit mt-1 italic">Fee: ${trx.fee.toFixed(2)}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-tighter italic ${trx.status === 'Completed' || trx.status === 'Escrow Released' ? 'bg-emerald-50 text-emerald-600' :
                      trx.status === 'Escrow Held' ? 'bg-indigo-50 text-indigo-600' :
                        trx.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                      }`}>
                      {trx.status === 'Completed' || trx.status === 'Escrow Released' ? <CheckCircle2 size={12} /> :
                        trx.status === 'Escrow Held' ? <Lock size={12} /> :
                          trx.status === 'Pending' ? <Clock size={12} /> : <XCircle size={12} />}
                      {trx.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 italic">{trx.date}</p>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {trx.status === 'Escrow Held' && (
                        <button
                          onClick={() => handleRelease(trx.id)}
                          title="Release Funds to Provider"
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-xl shadow-sm transition-all border border-indigo-100 flex items-center gap-2 px-3 italic"
                        >
                          <Unlock size={16} />
                          <span className="text-[10px] font-black uppercase">Release</span>
                        </button>
                      )}
                      <button title="View Transaction Details" className="p-2 text-gray-400 dark:text-gray-500 hover:text-[#1E7B7C] hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800">
                        <FileText size={18} />
                      </button>
                      <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:text-gray-100 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500">
                      <DollarSign size={48} strokeWidth={1} />
                      <p className="text-lg font-black italic">No transactions found</p>
                      <p className="text-sm font-medium italic">Try a different filter or search</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="p-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 italic">
            Showing <span className="text-gray-900 dark:text-gray-100 font-black italic">1 - {filteredTransactions.length}</span> of <span className="text-gray-900 dark:text-gray-100 font-black italic">{trxList.length}</span> transactions
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl border border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:bg-gray-900 disabled:opacity-50" disabled>
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 rounded-xl bg-[#1E7B7C] text-white font-black text-sm italic">1</button>
            </div>
            <button className="p-2 rounded-xl border border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:bg-gray-900 disabled:opacity-50" disabled>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
