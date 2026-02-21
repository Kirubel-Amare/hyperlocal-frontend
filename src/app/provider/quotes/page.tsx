'use client'

import { FileText, Send, Clock, CheckCircle, ChevronRight, Filter, Search } from 'lucide-react'

export default function ProviderQuotesPage() {
  return (
    <div className="max-w-6xl relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">My Proposals</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Track your sent quotes and their current approval status.</p>
        </div>
        <div className="flex p-1 bg-gray-100/50 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner w-fit">
          <button className="px-6 py-2.5 bg-white dark:bg-gray-950 text-[#1E7B7C] shadow-md rounded-xl text-sm font-black transition-all">Sent</button>
          <button className="px-6 py-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">Drafts</button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white dark:border-gray-800">
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
            <input type="text" placeholder="Search proposals..." className="w-full pl-12 pr-4 py-4 bg-gray-50/50 dark:bg-gray-900/50 border border-transparent focus:border-[#1E7B7C]/20 rounded-2xl outline-none transition-all font-medium" />
          </div>
          <button className="px-6 py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl font-black text-gray-500 dark:text-gray-400 hover:bg-gray-100 transition-all flex items-center gap-2">
            <Filter size={18} />
            Filter
          </button>
        </div>

        <div className="space-y-6">
          {[
            { id: 1, title: 'Bathroom Tile Restoration', client: 'Michael Ross', amount: '$450.00', date: 'Oct 18, 2023', status: 'Pending', color: 'bg-amber-50 text-amber-600' },
            { id: 2, title: 'Garden Fence Repair', client: 'Linda Chen', amount: '$600.00', date: 'Oct 16, 2023', status: 'Approved', color: 'bg-[#E8F4F4] text-[#1E7B7C]' },
            { id: 3, title: 'Smart Lock Installation', client: 'Katy Perry', amount: '$120.00', date: 'Oct 15, 2023', status: 'Declined', color: 'bg-red-50 text-red-500' },
            { id: 4, title: 'TV Wall Mounting', client: 'Robert D.', amount: '$85.00', date: 'Oct 14, 2023', status: 'Pending', color: 'bg-amber-50 text-amber-600' },
          ].map((quote) => (
            <div key={quote.id} className="group bg-white dark:bg-gray-950/40 p-6 rounded-[32px] border border-transparent hover:border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 rounded-2xl group-hover:bg-[#E8F4F4] group-hover:text-[#1E7B7C] transition-colors">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-1">{quote.title}</h4>
                  <p className="text-sm font-bold text-gray-400 dark:text-gray-500">Client: {quote.client} • Sent on {quote.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="text-right">
                  <div className="text-2xl font-black text-gray-900 dark:text-gray-100">{quote.amount}</div>
                  <div className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg mt-1 inline-block ${quote.color}`}>
                    {quote.status}
                  </div>
                </div>
                <button className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 rounded-2xl hover:bg-white hover:text-[#1E7B7C] hover:shadow-md transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-10 py-5 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl text-sm font-black text-gray-400 dark:text-gray-500 hover:bg-gray-100/80 transition-all">
          View Archived Proposals
        </button>
      </div>
    </div>
  )
}
