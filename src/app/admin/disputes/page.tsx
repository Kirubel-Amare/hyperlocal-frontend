'use client'

import React, { useState } from 'react';
import {
  AlertCircle,
  Search,
  MessageSquare,
  ExternalLink,
  CheckCircle2,
  Clock,
  XCircle,
  ShieldAlert,
  Gavel,
  History
} from 'lucide-react';

const disputes = [
  { id: 'DSP-9421', customer: 'John Doe', provider: 'FixIt Services', subject: 'Incomplete Work', amount: 120.00, status: 'Open', priority: 'High', date: 'Feb 21, 2024' },
  { id: 'DSP-9422', customer: 'Emma Davis', provider: 'Sparkle Cleaners', subject: 'Damaged Property', amount: 350.00, status: 'Investigation', priority: 'Critical', date: 'Feb 20, 2024' },
  { id: 'DSP-9423', customer: 'Alex Johnson', provider: 'Elite Tutors', subject: 'Late Cancellation', amount: 50.00, status: 'Resolved', priority: 'Low', date: 'Feb 18, 2024' },
  { id: 'DSP-9424', customer: 'Sarah Miller', provider: 'Green Thumb', subject: 'Payment Issue', amount: 80.00, status: 'Closed', priority: 'Medium', date: 'Feb 15, 2024' },
];

export default function DisputesPage() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Dispute Resolution</h1>
          <p className="text-gray-500 font-medium">Handle conflicts between customers and providers efficiently.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-gray-100 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
            <History size={18} />
            Resolution History
          </button>
          <button className="bg-red-600 text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-red-600/20 hover:scale-[1.02] transition-all flex items-center gap-2">
            <ShieldAlert size={18} />
            Emergency Flags
          </button>
        </div>
      </div>

      {/* Disputes Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 mb-0.5">Active Disputes</p>
            <h3 className="text-2xl font-black text-gray-900">12</h3>
          </div>
        </div>
        <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 mb-0.5">Avg. Resolution Time</p>
            <h3 className="text-2xl font-black text-gray-900">1.4 Days</h3>
          </div>
        </div>
        <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Gavel size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 mb-0.5">Resolved (Last 30d)</p>
            <h3 className="text-2xl font-black text-gray-900">84</h3>
          </div>
        </div>
      </div>

      {/* Disputes Table Section */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex p-1 bg-gray-50 rounded-2xl w-fit">
            {['All', 'Open', 'Investigation', 'Resolved'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === tab
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative group max-w-xs w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1E7B7C] transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search ID or party..."
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 transition-all text-sm font-medium"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Dispute Case</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Parties</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Priority</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Created</th>
                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {disputes.map((dispute) => (
                <tr key={dispute.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-gray-900 group-hover:text-[#1E7B7C] transition-colors">{dispute.id}</span>
                      <span className="text-xs text-gray-500 font-medium">{dispute.subject}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-gray-700">{dispute.customer}</span>
                      <span className="text-xs font-bold text-gray-400 italic">vs. {dispute.provider}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${dispute.priority === 'Critical' ? 'bg-red-50 text-red-600' :
                        dispute.priority === 'High' ? 'bg-orange-50 text-orange-600' :
                          dispute.priority === 'Medium' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                      {dispute.priority}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-tighter ${dispute.status === 'Open' ? 'bg-red-50 text-red-600 underline' :
                        dispute.status === 'Investigation' ? 'bg-amber-50 text-amber-600' :
                          dispute.status === 'Resolved' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                      {dispute.status === 'Resolved' ? <CheckCircle2 size={12} /> :
                        dispute.status === 'Closed' ? <XCircle size={12} /> : <Clock size={12} />}
                      {dispute.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-gray-500">{dispute.date}</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                        <MessageSquare size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
