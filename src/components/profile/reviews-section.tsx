// components/profile/reviews-section.tsx
'use client'

import { Star, CheckCircle, ThumbsUp, Flag, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Review } from '@/lib/services-data'

interface ReviewsSectionProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export function ReviewsSection({ reviews, averageRating, totalReviews }: ReviewsSectionProps) {
  const [filter, setFilter] = useState<'all' | '5' | '4' | '3'>('all')
  const [sort, setSort] = useState<'recent' | 'helpful'>('recent')

  const ratingDistribution = {
    5: 75,
    4: 15,
    3: 7,
    2: 2,
    1: 1
  }

  return (
    <section className="mb-14">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-200">
          <Star size={20} className="text-white fill-white" />
        </div>
        <h2 className="text-2xl font-black text-gray-900">Client Reviews</h2>
      </div>

      {/* Rating Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <div className="text-center">
            <div className="text-5xl font-black text-gray-900 mb-2">{averageRating}</div>
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className={star <= averageRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500">Based on {totalReviews} reviews</div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 w-8">{rating} ★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                    style={{ width: `${ratingDistribution[rating as keyof typeof ratingDistribution]}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500 w-12">{ratingDistribution[rating as keyof typeof ratingDistribution]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex gap-2">
          {(['all', '5', '4', '3'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === f
                ? 'bg-[#1E7B7C] text-white shadow-lg shadow-[#E8F4F4]'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {f === 'all' ? 'All Reviews' : `${f} Stars`}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as 'recent' | 'helpful')}
          className="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-600 border-none outline-none focus:ring-2 focus:ring-[#1E7B7C]/20"
        >
          <option value="recent">Most Recent</option>
          <option value="helpful">Most Helpful</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:border-[#E8F4F4] transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                {review.authorAvatar || review.avatar ? (
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                    <Image src={(review.authorAvatar || review.avatar) as string} alt={review.author} fill className="object-cover" />
                  </div>
                ) : (
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${review.authorInitials === 'MJ' ? 'bg-blue-100 text-[#166566]' : 'bg-purple-100 text-purple-600'
                    }`}>
                    {review.authorInitials || review.author.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-gray-900">{review.author}</h4>
                    {review.verified && (
                      <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle size={10} />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={12}
                          className={star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                </div>
              </div>

              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-lg">
                <MoreHorizontal size={16} className="text-gray-400" />
              </button>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">{review.text || review.comment}</p>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1E7B7C] transition-colors">
                <ThumbsUp size={14} />
                Helpful ({review.helpful || 0})
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1E7B7C] transition-colors">
                <Flag size={14} />
                Report
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="px-8 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-all">
          Load More Reviews
        </button>
      </div>
    </section>
  )
}