'use client'

import Image from 'next/image'
import { Briefcase, MapPin, Clock, ChevronRight, CheckCircle2, MoreHorizontal } from 'lucide-react'

export default function ProviderJobsActivePage() {
  const activeJobs = [
    {
      id: "aj-1",
      title: "Emergency Pipe Burst",
      client: "Residential Property Mgmt",
      status: "In Progress",
      type: "Plumbing",
      address: "45 Main St, Apt 4B",
      startTime: "Today, 10:30 AM",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=500&h=300&fit=crop"
    },
    {
      id: "aj-2",
      title: "Tesla Wall Connector Installation",
      client: "Mark Stevens",
      status: "Scheduled",
      type: "Electrical",
      address: "122 Oak Avenue",
      startTime: "Tomorrow, 9:00 AM",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=300&fit=crop"
    }
  ]

  return (
    <div className="max-w-6xl relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Ongoing Jobs</h1>
          <p className="text-lg text-gray-500 font-medium">Keep track of your active services and upcoming appointments.</p>
        </div>
        <div className="flex p-1 bg-gray-100/50 backdrop-blur-md rounded-2xl border border-gray-100 shadow-inner w-fit">
          <button className="px-6 py-2.5 bg-white text-[#1E7B7C] shadow-md rounded-xl text-sm font-black transition-all">Active</button>
          <button className="px-6 py-2.5 text-gray-400 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">Completed</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {activeJobs.map((job) => (
          <div key={job.id} className="group bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/10 border border-white flex flex-col lg:flex-row lg:items-center gap-10 hover:shadow-2xl transition-all duration-500">
            {/* Image Section */}
            <div className="w-full lg:w-72 h-48 rounded-2xl overflow-hidden flex-shrink-0 relative shadow-inner">
              <Image src={job.image} alt={job.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <div className={`px-2.5 py-1 ${job.status === 'In Progress' ? 'bg-emerald-500' : 'bg-blue-500'} text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg`}>
                  {job.status}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xs font-black text-[#1E7B7C] bg-[#E8F4F4] px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <Briefcase size={14} />
                  {job.type}
                </span>
                <span className="text-xs font-black text-gray-400 bg-gray-50 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <MapPin size={14} />
                  {job.address}
                </span>
              </div>

              <h3 className="text-3xl font-black text-gray-900 mb-3">{job.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex items-center gap-2">
                <Clock size={16} className="text-[#1E7B7C]" />
                <span className="font-bold text-gray-900">{job.startTime}</span>
              </p>

              <div className="flex items-center gap-2 mb-2">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden flex-1">
                  <div className="w-[60%] h-full bg-[#1E7B7C] rounded-full shadow-[0_0_10px_rgba(30,123,124,0.3)]" />
                </div>
                <span className="text-xs font-black text-gray-400">60% Done</span>
              </div>
            </div>

            {/* Actions Section */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[220px]">
              <button className="flex-1 lg:w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white font-black flex items-center justify-center gap-2 shadow-lg shadow-[#1E7B7C]/20 hover:translate-y-[-2px] transition-all">
                <CheckCircle2 size={18} />
                Complete Job
              </button>
              <button className="flex-1 lg:w-full py-4 px-6 rounded-2xl bg-white border border-gray-100 text-gray-500 font-black flex items-center justify-center gap-2 hover:bg-gray-50 hover:text-gray-900 transition-all">
                Update Status
              </button>
              <button className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
