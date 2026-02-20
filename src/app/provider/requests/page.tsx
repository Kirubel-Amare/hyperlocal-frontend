'use client'

import Image from 'next/image'
import { Check, X, MapPin, Clock, Calendar, MessageSquare, ChevronRight, Zap } from 'lucide-react'
import { providerDashboardData } from '@/lib/mock-dashboards'

export default function ProviderRequestsPage() {
  const { newRequests } = providerDashboardData

  return (
    <div className="max-w-6xl relative">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Service Requests</h1>
        <p className="text-lg text-gray-500 font-medium">Manage and respond to new job opportunities in your area.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {newRequests.map((req) => (
          <div key={req.id} className="group bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/10 border border-white flex flex-col lg:flex-row lg:items-center gap-10 hover:shadow-2xl transition-all duration-500">
            {/* Image Section */}
            <div className="w-full lg:w-72 h-48 rounded-2xl overflow-hidden flex-shrink-0 relative shadow-inner">
              <Image src={req.image} alt={req.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/10">
                  {req.urgency}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xs font-black text-[#1E7B7C] bg-[#E8F4F4] px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <MapPin size={14} />
                  {req.distance} away
                </span>
                <span className="text-xs font-black text-amber-600 bg-amber-50 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <Clock size={14} />
                  {req.duration}
                </span>
              </div>

              <h3 className="text-3xl font-black text-gray-900 mb-3">{req.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                Requested by <span className="font-bold text-gray-900">{req.client}</span>.
                This is a high-priority service request for a residential property. Please review the details and respond promptly.
              </p>

              <div className="flex flex-wrap items-center gap-4 border-t border-gray-50 pt-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-bold">
                  <Calendar size={16} />
                  Posted 2h ago
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1E7B7C] font-bold">
                  <Zap size={16} fill="currentColor" />
                  Instant Booking Available
                </div>
              </div>
            </div>

            {/* Actions Section */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
              <button className="flex-1 lg:w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white font-black flex items-center justify-center gap-2 shadow-lg shadow-[#1E7B7C]/20 hover:translate-y-[-2px] transition-all">
                <Check size={18} strokeWidth={4} />
                Accept Job
              </button>
              <button className="flex-1 lg:w-full py-4 px-6 rounded-2xl bg-white border border-gray-100 text-gray-500 font-black flex items-center justify-center gap-2 hover:bg-gray-50 hover:text-gray-900 transition-all">
                <MessageSquare size={18} />
                Message Client
              </button>
              <button className="flex-1 lg:w-full py-4 px-6 rounded-2xl bg-gray-50/50 text-gray-400 font-black flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-500 transition-all text-sm">
                <X size={18} strokeWidth={3} />
                Decline
              </button>
            </div>
          </div>
        ))}

        {/* Empty State / Bottom Note */}
        <div className="mt-8 p-8 text-center bg-gray-50/50 rounded-[32px] border-2 border-dashed border-gray-200">
          <p className="text-gray-400 font-bold flex items-center justify-center gap-2">
            <ChevronRight size={16} />
            Showing all active service requests in your area
          </p>
        </div>
      </div>
    </div>
  )
}
