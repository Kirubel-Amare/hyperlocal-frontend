'use client'

import Image from 'next/image'
import { Star, Check, MessageSquare } from 'lucide-react'

interface ProviderProfileProps {
  name: string
  bio: string
  image: string
  rating: number
  totalReviews: number
  tags: string[]
}

export default function ProviderProfile({
  name,
  bio,
  image,
  rating,
  totalReviews,
  tags
}: ProviderProfileProps) {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 p-8">
      <h3 className="text-2xl font-bold mb-6">About the Professional</h3>

      <div className="flex gap-6 mb-6">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex-1">
          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{name}</h4>
          <div className="flex items-center gap-2 mb-3">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{rating}</span>
            <span className="text-gray-600">({totalReviews} reviews)</span>
          </div>
          <p className="text-gray-600">{bio}</p>
        </div>
      </div>

      {/* Tags/Credentials */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Credentials & Specialties</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-1 bg-[#E8F4F4] text-[#166566] px-3 py-2 rounded-full text-sm font-medium border border-[#E8F4F4]"
            >
              <Check size={16} />
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
          Book Now
        </button>
        <button className="flex-1 border-2 border-[#1E7B7C] text-[#1E7B7C] py-3 rounded-xl font-semibold hover:bg-[#E8F4F4] transition-all flex items-center justify-center gap-2">
          <MessageSquare size={18} />
          Message
        </button>
      </div>
    </div>
  )
}
