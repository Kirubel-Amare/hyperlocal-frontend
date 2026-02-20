'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Share2, Heart, Star, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck, RefreshCcw } from 'lucide-react'
import { mockProfileData } from '@/lib/services-data'
import Header from '@/components/layout/header'

export default function ProfessionalProfilePage() {
  const profile = mockProfileData
  const [activeTab, setActiveTab] = useState('About')

  const tabs = ['About', 'Portfolio', 'Reviews', 'Experience']
  const dates = [
    { num: '29', disabled: true },
    { num: '30', disabled: true },
    { num: '1', disabled: false },
    { num: '2', disabled: false },
    { num: '3', disabled: false, active: true },
    { num: '4', disabled: false },
    { num: '5', disabled: false },
  ]
  const slots = [
    { time: '09:00 AM', active: true },
    { time: '01:00 PM', active: false },
    { time: '04:30 PM', active: false },
  ]

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20">
      {/* We reuse the global header just to give it the shell, if they want a specific one later we can swap it. The screenshot shows the standard header but with distinct links "Explore Categories Support" */}
      <Header />

      <main className="max-w-[1280px] mx-auto px-6 md:px-8 pt-8">

        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 font-medium tracking-wide mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/services/interior-design" className="hover:text-gray-900 transition-colors">Interior Design</Link>
          <span>›</span>
          <span className="text-gray-900">{profile.name}</span>
        </div>

        {/* Profile Header Block */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8 relative">

          {/* Avatar Area */}
          <div className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden bg-rose-50 shadow-md">
            <Image src={profile.image} fill alt={profile.name} className="object-cover object-top" />
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 border-2 border-white z-10 w-8 h-8 flex justify-center items-center">
              <div className="bg-[#12b3b6] text-white rounded-full w-full h-full flex items-center justify-center">
                <CheckCircle2 size={16} />
              </div>
            </div>
          </div>

          {/* Info Area */}
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{profile.name}</h1>
              {profile.isAvailableNow && (
                <span className="bg-[#EAF6F6] text-[#12b3b6] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full">
                  AVAILABLE NOW
                </span>
              )}
            </div>

            <p className="text-lg text-gray-600 mb-4">{profile.role} • {profile.location}</p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-[#FFFAF0] px-3 py-1.5 rounded-lg border border-yellow-100">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                <span className="font-bold text-gray-900">{profile.rating}</span>
                <span className="text-gray-500 text-sm">({profile.reviewsCount} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                {profile.experience}
              </div>
            </div>
          </div>

          {/* Actions - Desktop absolute, mobile inline */}
          <div className="md:absolute md:top-2 md:right-0 flex items-center gap-3">
            <button className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shadow-sm bg-white">
              <Share2 size={20} />
            </button>
            <button className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shadow-sm bg-white">
              <Heart size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-200 mt-12 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[15px] font-bold transition-all relative ${activeTab === tab ? 'text-[#12b3b6]' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#12b3b6] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column - Details */}
          <div className="flex-1 max-w-2xl">

            {/* About */}
            <section className="mb-14">
              <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">About the Provider</h2>
              <p className="text-gray-600 leading-relaxed min-h-[100px]">{profile.about}</p>
            </section>

            {/* Core Skills */}
            <section className="mb-14">
              <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Core Skills</h2>
              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill: string) => (
                  <span key={skill} className="bg-[#EAF6F6] text-[#12b3b6] px-4 py-2 rounded-xl text-sm font-bold tracking-wide">
                    #{skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Recent Work */}
            <section className="mb-14">
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Recent Work</h2>
                <button className="text-[#12b3b6] font-bold text-sm tracking-wide">View All (24)</button>
              </div>
              <div className="grid grid-cols-3 gap-4 h-64">
                {profile.portfolio.map((img: string, i: number) => (
                  <div key={i} className="relative rounded-3xl overflow-hidden group cursor-pointer bg-gray-100">
                    <Image src={img} fill alt={`Work ${i}`} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            </section>

            {/* Verified Reviews */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Verified Reviews</h2>
              <div className="space-y-6">
                {profile.reviews.map((review: any) => (
                  <div key={review.id} className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${review.authorInitials === 'MJ' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                          }`}>
                          {review.authorInitials}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{review.author}</div>
                          <div className="text-xs text-gray-400 font-medium">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {review.text || review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column - Booking Widget */}
          <div className="w-full lg:w-[380px] lg:flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">

              {/* Price & Response */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black text-[#12b3b6]">${profile.hourlyRate}</span>
                  <span className="text-gray-500 font-bold text-sm">/ hour</span>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  TYPICAL RESPONSE: {profile.typicalResponse}
                </div>
              </div>

              {/* Date Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-gray-900">Select Date</h3>
                  <span className="text-sm font-bold text-[#12b3b6]">November 2023</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-2 py-4 border border-gray-100">
                  {dates.map((d, i) => (
                    <button key={i} disabled={d.disabled} className={`w-8 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${d.active ? 'bg-[#12b3b6] text-white shadow-md' :
                      d.disabled ? 'text-gray-300 cursor-not-allowed' :
                        'text-gray-600 hover:bg-gray-200'
                      }`}>
                      {d.num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Available Slots</h3>
                <div className="flex gap-3">
                  {slots.map((s, i) => (
                    <button key={i} className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all border ${s.active
                      ? 'border-[#12b3b6] text-[#12b3b6] bg-white'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
                      }`}>
                      {s.time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 mb-8">
                <button className="w-full bg-[#12b3b6] hover:bg-[#0e9598] text-white py-4 rounded-2xl font-bold text-sm shadow-[0_8px_20px_-6px_rgba(18,179,182,0.4)] transition-all transform active:scale-[0.98]">
                  Book Now
                </button>
                <button className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-700 py-4 rounded-2xl font-bold text-sm transition-colors border border-gray-100">
                  Message Sarah
                </button>
              </div>

              {/* Guarantees */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span className="text-xs font-medium text-gray-500">Secure Payment Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCcw size={18} className="text-emerald-500" />
                  <span className="text-xs font-medium text-gray-500">Free Cancellation (48h notice)</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
