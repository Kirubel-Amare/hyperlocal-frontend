'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Review } from '@/lib/services-data'

interface ReviewsListProps {
  reviews: Review[]
  rating: number
  totalReviews: number
}

export default function ReviewsList({ reviews, rating, totalReviews }: ReviewsListProps) {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 p-8">
      <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>

      {/* Rating Summary */}
      <div className="mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="text-5xl font-bold text-gray-900 dark:text-gray-100">{rating}</div>
          <div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <p className="text-gray-600">Based on {totalReviews} reviews</p>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="pb-6 border-b border-gray-200 last:border-b-0">
              <div className="flex items-start gap-4">
                <Image
                  src={review.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${review.author}`}
                  alt={review.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{review.author}</h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
                  </div>

                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600">{review.text || review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No reviews yet. Be the first to share your experience!</p>
        </div>
      )}
    </div>
  )
}
