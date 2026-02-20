'use client'

import Image from 'next/image'
import { CheckCircle, MapPin, Calendar, Star, DollarSign, ChevronRight, Search } from 'lucide-react'

export default function ProviderJobsCompletedPage() {
  const completedJobs = [
    {
      id: "cj-1",
      title: "Kitchen Sink Deep Restoration",
      client: "Sarah Miller",
      completedDate: "Oct 15, 2023",
      amount: "$180.00",
      rating: 5,
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&h=300&fit=crop"
    },
    {
      id: "cj-2",
      title: "Full House Window Cleaning",
      client: "David King",
      completedDate: "Oct 10, 2023",
      amount: "$210.00",
      rating: 5,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop"
    },
    {
      id: "cj-3",
      title: "Regular Maintenance Tidying",
      client: "James Wilson",
      completedDate: "Oct 05, 2023",
      amount: "$120.00",
      rating: 4,
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=300&fit=crop"
    }
  ]

  return (
    <div className="max-w-6xl relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Job History</h1>
          <p className="text-lg text-gray-500 font-medium">Review your past successes and client feedback.</p>
        </div>
        <div className="flex p-1 bg-gray-100/50 backdrop-blur-md rounded-2xl border border-gray-100 shadow-inner w-fit">
          <button className="px-6 py-2.5 text-gray-400 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">Active</button>
          <button className="px-6 py-2.5 bg-white text-[#1E7B7C] shadow-md rounded-xl text-sm font-black transition-all">Completed</button>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search past jobs..." className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-transparent focus:border-[#1E7B7C]/20 rounded-2xl outline-none transition-all font-medium" />
          </div>
        </div>

        <div className="space-y-8">
          {completedJobs.map((job) => (
            <div key={job.id} className="group flex flex-col md:flex-row gap-8 pb-8 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0 relative shadow-inner">
                <Image src={job.image} alt={job.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3">
                  <div className="p-1 px-2 bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest rounded-lg shadow-lg flex items-center gap-1">
                    <CheckCircle size={10} />
                    Done
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-[#1E7B7C] transition-colors">{job.title}</h3>
                    <p className="text-sm font-medium text-gray-500">{job.client} • {job.completedDate}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-gray-900">{job.amount}</div>
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} size={12} className={star <= job.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 italic mb-4">"The service was outstanding. Highly professional and efficient. I'm definitely going to book again for future tasks!"</p>

                <div className="flex items-center gap-4">
                  <button className="text-xs font-black text-[#1E7B7C] hover:underline">View Invoice</button>
                  <button className="text-xs font-black text-[#1E7B7C] hover:underline">Client Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
