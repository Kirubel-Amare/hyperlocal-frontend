'use client'

import React, { useState } from 'react';
import Image from 'next/image';
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
  History,
  Image as ImageIcon,
  ChevronRight,
  User,
  AlertTriangle,
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  RotateCcw
} from 'lucide-react';
import { useToast } from '@/providers/ToastProvider';

const initialDisputes = [
  { id: 'DSP-9421', customer: 'John Doe', provider: 'FixIt Services', subject: 'Incomplete Work', amount: 120.00, status: 'Open', priority: 'High', date: 'Feb 21, 2024' },
  { id: 'DSP-9422', customer: 'Emma Davis', provider: 'Sparkle Cleaners', subject: 'Damaged Property', amount: 350.00, status: 'Investigation', priority: 'Critical', date: 'Feb 20, 2024' },
  { id: 'DSP-9423', customer: 'Alex Johnson', provider: 'Elite Tutors', subject: 'Late Cancellation', amount: 50.00, status: 'Resolved', priority: 'Low', date: 'Feb 18, 2024' },
  { id: 'DSP-9424', customer: 'Sarah Miller', provider: 'Green Thumb', subject: 'Payment Issue', amount: 80.00, status: 'Closed', priority: 'Medium', date: 'Feb 15, 2024' },
];

export default function DisputesPage() {
  const [disputeList, setDisputeList] = useState(initialDisputes);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDisputeId, setSelectedDisputeId] = useState<string | null>(null);
  const { showToast } = useToast();

  const selectedDispute = disputeList.find(d => d.id === selectedDisputeId);

  const filteredDisputes = disputeList.filter(dispute => {
    const matchesTab = activeTab === 'All' || dispute.status === activeTab;
    const matchesSearch = dispute.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleResolve = (id: string, resolution: 'release' | 'refund' | 'split') => {
    setDisputeList(prev => prev.map(d => {
      if (d.id === id) {
        let msg = '';
        if (resolution === 'release') msg = `Funds released to provider for case ${id}`;
        if (resolution === 'refund') msg = `Full refund issued to customer for case ${id}`;
        if (resolution === 'split') msg = `50/50 split resolution applied to case ${id}`;

        showToast(msg, 'success');
        return { ...d, status: 'Resolved' };
      }
      return d;
    }));
    setSelectedDisputeId(null);
  };

  if (selectedDispute) {
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedDisputeId(null)}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-black text-sm transition-colors group italic"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Disputes
          </button>
          <div className="flex items-center gap-3">
            <span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100 italic">
              {selectedDispute.priority} Priority
            </span>
            <span className="bg-gray-50 text-gray-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-gray-100 italic">
              ID: {selectedDispute.id}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Arbitration Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Parties involved */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-md border border-gray-100 p-6 rounded-[2.5rem] shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Customer</p>
                  <h4 className="text-lg font-black text-gray-900 italic">{selectedDispute.customer}</h4>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-md border border-gray-100 p-6 rounded-[2.5rem] shadow-sm flex items-center gap-4 text-right justify-end">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Provider</p>
                  <h4 className="text-lg font-black text-gray-900 italic">{selectedDispute.provider}</h4>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldAlert size={24} />
                </div>
              </div>
            </div>

            {/* Evidence Gallery */}
            <div className="bg-white/70 backdrop-blur-md border border-gray-100 p-8 rounded-[2.5rem] shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-gray-900 italic">Evidence Locker</h3>
                <span className="text-xs font-bold text-gray-400 italic">4 Attachments Found</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="group relative aspect-square rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden cursor-pointer">
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=400&fit=crop`} alt="evidence" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="text-white" size={24} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/70 backdrop-blur-md border border-gray-100 p-8 rounded-[2.5rem] shadow-sm">
              <h3 className="text-xl font-black text-gray-900 italic mb-8">Event Timeline</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-[11px] before:w-0.5 before:bg-gray-100">
                {[
                  { title: 'Dispute Created', desc: 'Customer initiated dispute for "Incomplete Work"', time: '2 days ago', icon: AlertCircle, color: 'text-red-500' },
                  { title: 'Provider Responded', desc: 'Provider submitted counter-evidence and photos', time: '1 day ago', icon: MessageSquare, color: 'text-blue-500' },
                  { title: 'Admin Assigned', desc: 'Super Admin started investigation', time: '4 hours ago', icon: Gavel, color: 'text-amber-500' },
                ].map((event, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center z-10 ${event.color}`}>
                      <event.icon size={12} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-gray-900 italic">{event.title}</h4>
                      <p className="text-xs text-gray-500 font-medium italic">{event.desc}</p>
                      <span className="text-[10px] text-gray-400 font-bold uppercase mt-1 block italic">{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arbitration Controls Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <Gavel size={24} />
                </div>
                <h3 className="text-lg font-black tracking-tight italic">Final Decision</h3>
              </div>
              <p className="text-xs text-gray-400 font-medium italic">Please review all evidence before making a final ruling. Decisions are irreversible.</p>

              <div className="space-y-3">
                <button
                  onClick={() => handleResolve(selectedDispute.id, 'release')}
                  className="w-full bg-emerald-500 text-white py-4 rounded-3xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-lg shadow-emerald-500/20 italic"
                >
                  <ThumbsUp size={20} />
                  Release to Provider
                </button>
                <button
                  onClick={() => handleResolve(selectedDispute.id, 'refund')}
                  className="w-full bg-red-600 text-white py-4 rounded-3xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-lg shadow-red-600/20 italic"
                >
                  <ThumbsDown size={20} />
                  Refund Customer
                </button>
                <button
                  onClick={() => handleResolve(selectedDispute.id, 'split')}
                  className="w-full bg-white/10 text-white border border-white/20 py-4 rounded-3xl font-black flex items-center justify-center gap-3 hover:bg-white/20 transition-all italic"
                >
                  <RotateCcw size={20} />
                  Split Payment (50/50)
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm space-y-6">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest italic">Case Summary</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-xs font-bold text-gray-500 italic">Total Amount</span>
                  <span className="text-sm font-black text-gray-900 italic">${selectedDispute.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-bold text-gray-500 italic">Service Fee</span>
                  <span className="text-sm font-black text-gray-900 italic">$15.00</span>
                </div>
                <div className="h-px bg-gray-50" />
                <div className="flex justify-between">
                  <span className="text-xs font-bold text-emerald-600 italic">Net in Escrow</span>
                  <span className="text-lg font-black text-emerald-600 italic">${(selectedDispute.amount - 15).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2 italic">Dispute Resolution</h1>
          <p className="text-gray-500 font-medium italic">Handle conflicts between customers and providers efficiently.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-gray-100 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 italic">
            <History size={18} />
            Resolution History
          </button>
          <button className="bg-red-600 text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-red-600/20 hover:scale-[1.02] transition-all flex items-center gap-2 italic">
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
            <p className="text-sm font-bold text-gray-400 mb-0.5 italic">Active Disputes</p>
            <h3 className="text-2xl font-black text-gray-900 italic">{disputeList.filter(d => d.status !== 'Resolved' && d.status !== 'Closed').length}</h3>
          </div>
        </div>
        <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 mb-0.5 italic">Avg. Resolution Time</p>
            <h3 className="text-2xl font-black text-gray-900 italic">1.4 Days</h3>
          </div>
        </div>
        <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Gavel size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 mb-0.5 italic">Resolved (All Time)</p>
            <h3 className="text-2xl font-black text-gray-900 italic">{disputeList.filter(d => d.status === 'Resolved').length}</h3>
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
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all italic ${activeTab === tab
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 transition-all text-sm font-medium italic"
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
              {filteredDisputes.length > 0 ? filteredDisputes.map((dispute) => (
                <tr key={dispute.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-gray-900 group-hover:text-[#1E7B7C] transition-colors italic">{dispute.id}</span>
                      <span className="text-xs text-gray-500 font-medium italic">{dispute.subject}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-gray-700 italic">{dispute.customer}</span>
                      <span className="text-xs font-bold text-gray-400 italic">vs. {dispute.provider}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider italic ${dispute.priority === 'Critical' ? 'bg-red-50 text-red-600' :
                      dispute.priority === 'High' ? 'bg-orange-50 text-orange-600' :
                        dispute.priority === 'Medium' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                      {dispute.priority}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-tighter italic ${dispute.status === 'Open' ? 'bg-red-50 text-red-600 underline' :
                      dispute.status === 'Investigation' ? 'bg-amber-50 text-amber-600' :
                        dispute.status === 'Resolved' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                      {dispute.status === 'Resolved' ? <CheckCircle2 size={12} /> :
                        dispute.status === 'Closed' ? <XCircle size={12} /> : <Clock size={12} />}
                      {dispute.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-gray-500 italic">{dispute.date}</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setSelectedDisputeId(dispute.id)}
                        className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100"
                        title="Moderate Case"
                      >
                        <Gavel size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100">
                        <MessageSquare size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                      <Gavel size={48} strokeWidth={1} />
                      <p className="text-lg font-black italic">No disputes found</p>
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
