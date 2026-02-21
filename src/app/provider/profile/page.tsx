'use client'

import Image from 'next/image'
import Link from 'next/link'
import { User, MapPin, Star, Award, Settings, Edit3, Camera, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import { providerDashboardData } from '@/lib/mock-dashboards'

export default function ProviderProfilePage() {
  const { user } = providerDashboardData

  return (
    <div className="max-w-6xl relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">My Professional Profile</h1>
          <p className="text-lg text-gray-500 font-medium">Manage how you appear to potential clients.</p>
        </div>
        <Link href="/provider/profile/edit" className="px-6 py-3 bg-white border border-gray-100 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
          <Edit3 size={18} />
          Edit Profile
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Essential Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 border border-white shadow-xl shadow-gray-200/10 flex flex-col items-center text-center">
            <div className="relative group mb-6">
              <div className="w-40 h-40 rounded-[48px] overflow-hidden border-8 border-white shadow-2xl">
                <Image src={user.avatar} alt={user.name} fill className="object-cover" />
              </div>
              <button className="absolute bottom-2 right-2 p-3 bg-gray-900 text-white rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform">
                <Camera size={20} />
              </button>
            </div>

            <h2 className="text-2xl font-black text-gray-900 mb-1">{user.name}</h2>
            <p className="text-[#1E7B7C] font-black uppercase tracking-widest text-xs mb-6 px-4 py-1.5 bg-[#E8F4F4] rounded-xl">{user.role}</p>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center gap-1 text-gray-900 font-black text-xl justify-center">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  4.9
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Rating</p>
              </div>
              <div className="w-px h-8 bg-gray-100" />
              <div className="text-center">
                <div className="text-gray-900 font-black text-xl">124</div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Jobs Done</p>
              </div>
            </div>

            <div className="w-full space-y-4 pt-8 border-t border-gray-50">
              <div className="flex items-center gap-3 text-sm text-gray-500 font-bold justify-center">
                <MapPin size={16} className="text-[#1E7B7C]" />
                New York, NY (0.8 mi)
              </div>
              <div className="flex items-center gap-3 text-sm text-emerald-500 font-black justify-center">
                <ShieldCheck size={16} />
                Identity Verified
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-white shadow-xl shadow-gray-200/10">
            <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
              <Award size={20} className="text-[#1E7B7C]" />
              Badges & Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl">
                <div className="w-10 h-10 bg-[#E8F4F4] rounded-xl flex items-center justify-center text-[#1E7B7C]">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900">Fast Responder</p>
                  <p className="text-[10px] font-bold text-gray-400">Replies within 15 mins</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900">Top Overall Rated</p>
                  <p className="text-[10px] font-bold text-gray-400">Top 5% in New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Bio & Portfolio */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 border border-white shadow-xl shadow-gray-200/10">
            <h3 className="text-xl font-black text-gray-900 mb-6">About Me</h3>
            <p className="text-gray-600 leading-relaxed font-medium mb-8">
              Professional cleaning expert with over 8 years of experience in residential and commercial detailing.
              I specialize in high-end restoration and weekly maintenance. My goal is to provide a 5-star experience
              every time, ensuring your space is not just clean, but transformed.
            </p>

            <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Service Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {['Deep Kitchen Cleaning', 'Window Detailing', 'Post-Construction tidying', 'Move-in/Move-out'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-[#E8F4F4] text-[#1E7B7C] font-black text-xs rounded-xl border border-[#1E7B7C]/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 border border-white shadow-xl shadow-gray-200/10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-gray-900">Work Portfolio</h3>
              <button className="text-[#1E7B7C] font-black text-sm hover:underline">Manage Gallery</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-square relative rounded-[24px] overflow-hidden shadow-inner group cursor-pointer border border-gray-100">
                  <Image
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=400&h=400&fit=crop`}
                    alt="Work"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white font-black text-[10px] uppercase tracking-widest">
                      View Case Study
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
