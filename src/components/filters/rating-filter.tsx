// components/filters/rating-filter.tsx
'use client'

import { Star, Check } from 'lucide-react'

interface RatingFilterProps {
    minRating: number
    onChange: (rating: number) => void
}

export function RatingFilter({ minRating, onChange }: RatingFilterProps) {
    const ratings = [4, 3, 2]

    const handleClick = (rating: number) => {
        onChange(minRating === rating ? 0 : rating)
    }

    return (
        <div className="mb-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                MINIMUM RATING
            </h4>
            <div className="space-y-2">
                {ratings.map((rating) => (
                    <RatingOption
                        key={rating}
                        rating={rating}
                        isSelected={minRating === rating}
                        onClick={() => handleClick(rating)}
                    />
                ))}
            </div>
        </div>
    )
}

interface RatingOptionProps {
    rating: number
    isSelected: boolean
    onClick: () => void
}

function RatingOption({ rating, isSelected, onClick }: RatingOptionProps) {
    return (
        <label
            className={`flex items-center justify-between gap-3 cursor-pointer group p-3 rounded-xl border-2 transition-all ${isSelected
                    ? 'border-cyan-500 bg-cyan-50/50'
                    : 'border-transparent hover:bg-gray-50'
                }`}
            onClick={onClick}
        >
            <div className="flex items-center gap-3">
                <div className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-colors ${isSelected
                        ? 'border-cyan-500 bg-cyan-500'
                        : 'border-gray-200 group-hover:border-cyan-400'
                    }`}>
                    {isSelected && <Check size={12} className="text-white" />}
                </div>
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className={`${i < rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'fill-gray-100 text-gray-100'
                                } transition-transform group-hover:scale-110`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                        />
                    ))}
                </div>
            </div>
            <span className={`text-xs font-bold transition-colors ${isSelected ? 'text-cyan-600' : 'text-gray-400'
                }`}>
                & UP
            </span>
        </label>
    )
}