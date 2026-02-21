'use client'

import Image from 'next/image'
import { MapPin, Star, Award, Edit3, Camera, CheckCircle2, ShieldCheck, Zap, Plus } from 'lucide-react'
import DashboardHeader from '@/components/shared/dashboard-header'
import GlassCard from '@/components/shared/glass-card'
import AvailabilityCalendar from '@/components/profile/availability-calendar'
import TrustBadge from '@/components/shared/trust-badge'
import { ROUTES } from '@/constants/routes'
import { useProfile } from '@/lib/hooks/use-profile'

export default function ProviderProfilePage() {
  const { profile: user, loading } = useProfile('current-user')

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1E7B7C]"></div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl relative">
      <DashboardHeader
        title="My Professional Profile"
        subtitle="Manage how you appear to potential clients."
        action={{
          label: "Edit Profile",
          href: ROUTES.PROVIDER.EDIT_PROFILE,
          icon: Edit3,
          className: "px-6 py-3 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 dark:bg-gray-900 transition-all shadow-sm"
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Essential Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[40px] p-10 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10 flex flex-col items-center text-center">
            <div className="relative group mb-6">
              <div className="w-40 h-40 rounded-[48px] overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl relative">
                <Image src={user.avatar} alt={user.name} fill className="object-cover" />
              </div>
              <button className="absolute bottom-2 right-2 p-3 bg-gray-900 text-white rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform">
                <Camera size={20} />
              </button>
            </div>

            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-1">{user.name}</h2>
            <p className="text-[#1E7B7C] font-black uppercase tracking-widest text-xs mb-6 px-4 py-1.5 bg-[#E8F4F4] rounded-xl">{user.role}</p>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center gap-1 text-gray-900 dark:text-gray-100 font-black text-xl justify-center">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  4.9
                </div>
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">Rating</p>
              </div>
              <div className="w-px h-8 bg-gray-100" />
              <div className="text-center">
                <div className="text-gray-900 dark:text-gray-100 font-black text-xl">124</div>
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">Jobs Done</p>
              </div>
            </div>

            <div className="w-full space-y-4 pt-8 border-t border-gray-50">
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-bold justify-center">
                <MapPin size={16} className="text-[#1E7B7C]" />
                New York, NY (0.8 mi)
              </div>
              <div className="flex items-center gap-3 text-sm text-emerald-500 font-black justify-center">
                <ShieldCheck size={16} />
                Identity Verified
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <TrustBadge type="top-rated" size="sm" />
              <TrustBadge type="fast-responder" size="sm" />
            </div>
          </div>

          <GlassCard
            title="Badges & Status"
            innerClassName="p-8 pt-6 space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl">
                <div className="w-10 h-10 bg-[#E8F4F4] rounded-xl flex items-center justify-center text-[#1E7B7C]">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900 dark:text-gray-100">Fast Responder</p>
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500">Replies within 15 mins</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900 dark:text-gray-100">Top Overall Rated</p>
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500">Top 5% in New York</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Detailed Bio & Portfolio */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard title="About Me">
            <p className="text-gray-600 leading-relaxed font-medium mb-8 italic">
              "Professional cleaning expert with over 8 years of experience in residential and commercial detailing.
              I specialize in high-end restoration and weekly maintenance. My goal is to provide a 5-star experience
              every time, ensuring your space is not just clean, but transformed."
            </p>

            <h4 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Service Specialties</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Deep Kitchen Cleaning', icon: '🍽️' },
                { label: 'Window Detailing', icon: '🪟' },
                { label: 'Post-Construction tidying', icon: '🏗️' },
                { label: 'Move-in/Move-out', icon: '🚚' }
              ].map(tag => (
                <div
                  key={tag.label}
                  className="px-5 py-3 bg-white dark:bg-gray-950 hover:bg-[#E8F4F4] text-gray-600 hover:text-[#1E7B7C] font-black text-xs rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#1E7B7C]/20 transition-all flex items-center gap-2 cursor-default group"
                >
                  <span className="group-hover:scale-125 transition-transform">{tag.icon}</span>
                  {tag.label}
                </div>
              ))}
            </div>
          </GlassCard>

          <AvailabilityCalendar />

          <GlassCard
            title="Work Portfolio"
            action={
              <button className="p-2 text-[#1E7B7C] hover:bg-[#E8F4F4] rounded-xl transition-colors">
                <Edit3 size={18} />
              </button>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              {[
                "https://images.unsplash.com/photo-1581578731548-c64695cc6954?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1527515545081-5db817172677?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1556911220-e15224bbaf39?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1603673073727-401fcc43878b?w=400&h=400&fit=crop"
              ].map((src, i) => (
                <div key={i} className="aspect-square relative rounded-[32px] overflow-hidden shadow-inner group cursor-pointer border border-gray-100/50 dark:border-gray-800/50">
                  <Image
                    src={src}
                    alt={`Portfolio task ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 blur-[0.5px] group-hover:blur-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-1">Project Case</p>
                    <p className="text-white font-black text-sm">After-Service Inspection</p>
                  </div>
                </div>
              ))}
              <div className="aspect-square rounded-[32px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-6 hover:bg-white dark:bg-gray-950 hover:border-[#1E7B7C]/30 transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center text-gray-400 dark:text-gray-500 mb-4 group-hover:bg-[#E8F4F4] group-hover:text-[#1E7B7C] transition-colors">
                  <Plus size={24} />
                </div>
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest group-hover:text-gray-900 dark:text-gray-100">Add Project</p>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </div>
  )
}
