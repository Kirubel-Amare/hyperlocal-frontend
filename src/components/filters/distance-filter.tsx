// components/filters/distance-filter.tsx
'use client'

import { MapPin, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface DistanceFilterProps {
  maxDistance: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}

export function DistanceFilter({
  maxDistance,
  onChange,
  min = 1,
  max = 50,
  step = 1
}: DistanceFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-10 text-gray-900">
      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
        DISTANCE
      </h4>

      {/* Dropdown Version */}
      <div className="relative group">
        <select
          value={maxDistance}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-gray-100/50 border border-gray-100 rounded-[20px] px-5 py-4 text-sm font-bold text-gray-700 appearance-none outline-none focus:ring-4 focus:ring-cyan-500/5 focus:border-cyan-400 transition-all cursor-pointer group-hover:bg-white group-hover:border-cyan-200 group-hover:shadow-md pr-10"
        >
          <option value={5}>Within 5 miles</option>
          <option value={10}>Within 10 miles</option>
          <option value={15}>Within 15 miles</option>
          <option value={25}>Within 25 miles</option>
          <option value={50}>Within 50 miles</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none group-hover:text-cyan-600 transition-all transform group-hover:translate-x-1">
          <ChevronRight size={18} />
        </div>
      </div>

      {/* OR Slider Version - Uncomment to use slider instead */}

      {/* <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">Maximum distance</span>
          <span className="text-sm font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
            {maxDistance} miles
          </span>
        </div>
        
        <div className="relative">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxDistance}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {min} mile
            </span>
            <span>{max} miles</span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          {[5, 10, 25].map((distance) => (
            <button
              key={distance}
              onClick={() => onChange(distance)}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                maxDistance === distance
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {distance}mi
            </button>
          ))}
        </div>
      </div> */}
    </div>
  )
}