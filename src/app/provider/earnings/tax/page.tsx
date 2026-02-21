'use client'

import React from 'react';
import {
    Download,
    FileText,
    BarChart3,
    Calendar,
    ChevronRight,
    ShieldCheck,
    Info,
    ArrowRight,
    ExternalLink,
    PieChart
} from 'lucide-react';

export default function TaxReportingPage() {
    const historicalDocs = [
        { year: '2023', type: 'Form 1099-K', status: 'Available', date: 'Jan 15, 2024' },
        { year: '2023', type: 'Annual Summary', status: 'Available', date: 'Jan 10, 2024' },
        { year: '2022', type: 'Form 1099-K', status: 'Archive', date: 'Jan 12, 2023' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-24">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2 italic">Tax & Accounting</h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-medium italic">Monitor your business performance and download official tax documents.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Stats Area */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Annual Summary Card */}
                    <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[3rem] p-10 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                            <BarChart3 size={200} />
                        </div>
                        <div className="relative z-10 space-y-10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-[#1E7B7C]/10 text-[#1E7B7C] rounded-2xl">
                                        <Calendar size={20} />
                                    </div>
                                    <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 tracking-tight italic">2024 Fiscal Year-to-Date</h2>
                                </div>
                                <span className="px-5 py-2 bg-gray-50 dark:bg-gray-900 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 border border-gray-100 dark:border-gray-800">
                                    Last Update: Today, 08:30 AM
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Gross Earnings</p>
                                    <h3 className="text-5xl font-black text-gray-900 dark:text-gray-100 tracking-tighter">$32,450.00</h3>
                                    <div className="flex items-center gap-2 text-emerald-500 text-xs font-black italic">
                                        <ArrowRight size={14} className="-rotate-45" /> +12% from 2023
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Platform Deductions</p>
                                    <h3 className="text-5xl font-black text-gray-400 dark:text-gray-500 tracking-tighter">$4,867.50</h3>
                                    <p className="text-gray-400 dark:text-gray-500 text-xs font-bold italic">Standard 15% marketplace fee applied</p>
                                </div>
                            </div>

                            <div className="h-px bg-gray-50 dark:bg-gray-900" />

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="flex gap-12">
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Expenses</p>
                                        <p className="text-lg font-black text-gray-900 dark:text-gray-100">$840.20</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Net Income</p>
                                        <p className="text-lg font-black text-emerald-600">$26,742.30</p>
                                    </div>
                                </div>
                                <button className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-[2rem] font-black shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 italic">
                                    <Download size={20} />
                                    Export CSV Report
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Insights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-indigo-50/50 border border-indigo-100 p-8 rounded-[2.5rem] space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                <PieChart size={24} />
                            </div>
                            <h4 className="text-sm font-black text-indigo-900 tracking-tight italic">Category Distribution</h4>
                            <p className="text-xs text-indigo-700 font-medium leading-relaxed italic">
                                Your highest earning category this year is <span className="font-black">"Plumbing & HVAC"</span>, contributing 64% of total revenue.
                            </p>
                        </div>
                        <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-[2.5rem] space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <ShieldCheck size={24} />
                            </div>
                            <h4 className="text-sm font-black text-emerald-900 tracking-tight italic">Verification & Compliance</h4>
                            <p className="text-xs text-emerald-700 font-medium leading-relaxed italic">
                                Your tax profile is <span className="font-black">Fully Verified</span>. No action needed for the current fiscal period.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Documents */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-[3rem] p-8 shadow-sm space-y-8">
                        <div>
                            <h3 className="text-lg font-black text-gray-900 dark:text-gray-100 italic mb-2 tracking-tight">Available Documents</h3>
                            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium italic leading-relaxed">Official tax forms and financial statements ready for download.</p>
                        </div>

                        <div className="space-y-4">
                            {historicalDocs.map((doc, idx) => (
                                <div
                                    key={idx}
                                    className="group p-5 rounded-[2rem] border border-gray-50 hover:border-[#1E7B7C]/20 hover:bg-[#E8F4F4]/20 transition-all cursor-pointer flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-900 group-hover:bg-white text-gray-400 dark:text-gray-500 group-hover:text-[#1E7B7C] flex items-center justify-center transition-all shadow-sm">
                                            <FileText size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-gray-900 dark:text-gray-100">{doc.type} ({doc.year})</h4>
                                            <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase mt-0.5">{doc.date}</p>
                                        </div>
                                    </div>
                                    <button className="p-2 text-gray-300 group-hover:text-[#1E7B7C] transition-all">
                                        <Download size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 space-y-4">
                            <div className="flex items-center gap-2 text-[#1E7B7C]">
                                <Info size={18} />
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] italic">Pro-Tip for Taxes</h4>
                            </div>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold italic leading-relaxed">
                                Connect an accounting app like Quickbooks to automatically sync these reports every month.
                            </p>
                            <button className="text-[10px] font-black text-[#1E7B7C] hover:underline flex items-center gap-1 uppercase tracking-widest">
                                Connect Now <ExternalLink size={10} />
                            </button>
                        </div>
                    </div>

                    {/* External Settings Link */}
                    <div className="p-8 bg-gray-900 text-white rounded-[3rem] shadow-xl group cursor-pointer hover:bg-gray-800 transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white/20 dark:bg-white/5 rounded-2xl border border-white/10">
                                <BarChart3 size={20} />
                            </div>
                            <ChevronRight size={20} className="text-white/30 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                        </div>
                        <h4 className="text-lg font-black tracking-tight italic mb-2">Business Settings</h4>
                        <p className="text-xs text-white/50 font-medium italic">Update your business TIN, VAT, or legal entity information.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
