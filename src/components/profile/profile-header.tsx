// components/profile/profile-header.tsx
'use client'

import Image from 'next/image'
import { Star, MapPin, Briefcase, CheckCircle, Share2, Heart, Shield, Award, Clock } from 'lucide-react'
import { useState } from 'react'

interface ProfileHeaderProps {
  profile: {
    name: string
    image: string
    role: string
    location: string
    rating: number
    reviewsCount: number
    experience: string
    isAvailableNow?: boolean
    verified?: boolean
    completedJobs?: number
    responseTime?: string
  }
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isShared, setIsShared] = useState(false)

  return (
    <div className="relative z-10 mb-12">
      {/* Background Gradient Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E7B7C]/5 via-[#1E7B7C]/5 to-[#166566]/5 rounded-[3rem] blur-3xl" />

      <div className="relative bg-white/80 backdrop-blur-xl rounded-[3rem] border border-white/80 shadow-2xl shadow-gray-200/50 p-8 md:p-10">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1E7B7C]/10 to-[#166566]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

        <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Avatar with Status */}
          <div className="relative flex-shrink-0">
            <div className="relative w-36 h-36 md:w-48 md:h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-[2rem] blur-lg opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden ring-4 ring-white shadow-2xl">
                <Image
                  src={profile.image}
                  fill
                  alt={profile.name}
                  className="object-cover object-top transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Status Badge */}
            {profile.isAvailableNow && (
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                AVAILABLE
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                {profile.name}
              </h1>
              {profile.verified && (
                <span className="bg-[#1E7B7C] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                  <CheckCircle size={14} />
                  VERIFIED PRO
                </span>
              )}
            </div>

            <p className="text-lg text-gray-600 mb-6 flex items-center justify-center md:justify-start gap-4 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Briefcase size={18} className="text-[#1E7B7C]" />
                {profile.role}
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="flex items-center gap-1.5">
                <MapPin size={18} className="text-[#1E7B7C]" />
                {profile.location}
              </span>
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/60 backdrop-blur rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 text-yellow-500 mb-1">
                  <Star className="fill-yellow-500" size={20} />
                  <span className="text-2xl font-bold text-gray-900">{profile.rating}</span>
                </div>
                <span className="text-xs text-gray-500">{profile.reviewsCount} reviews</span>
              </div>

              <div className="bg-white/60 backdrop-blur rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 text-[#1E7B7C] mb-1">
                  <Shield size={20} />
                  <span className="text-2xl font-bold text-gray-900">{profile.experience}</span>
                </div>
                <span className="text-xs text-gray-500">Experience</span>
              </div>

              <div className="bg-white/60 backdrop-blur rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 text-emerald-500 mb-1">
                  <Award size={20} />
                  <span className="text-2xl font-bold text-gray-900">{profile.completedJobs || 150}+</span>
                </div>
                <span className="text-xs text-gray-500">Jobs Done</span>
              </div>

              <div className="bg-white/60 backdrop-blur rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 text-purple-500 mb-1">
                  <Clock size={20} />
                  <span className="text-2xl font-bold text-gray-900">&lt; 2h</span>
                </div>
                <span className="text-xs text-gray-500">Response Time</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-xl border transition-all duration-300 ${isLiked
                    ? 'bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-200'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-rose-300 hover:text-rose-500'
                  }`}
              >
                <Heart size={20} fill={isLiked ? 'white' : 'none'} />
              </button>

              <button
                onClick={() => setIsShared(!isShared)}
                className="p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-[#1E7B7C]/30 hover:text-[#1E7B7C] transition-all duration-300"
              >
                <Share2 size={20} />
              </button>

              <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-xl font-bold hover:shadow-xl hover:shadow-[#1E7B7C]/20 transition-all duration-300 hover:scale-105 active:scale-95">
                Book Now
              </button>

              <button className="flex-1 md:flex-none px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}