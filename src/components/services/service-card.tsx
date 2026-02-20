'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, Navigation, Check } from 'lucide-react'
import { Service } from '@/lib/services-data'

interface ServiceCardProps {
  service: Service
  categorySlug: string
}

export default function ServiceCard({ service, categorySlug }: ServiceCardProps) {
  return (
    <Link href={`/services/${categorySlug}/${service.id}`} className="block group">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-cyan-200 relative">
        {/* Header with Avatar and Price */}
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={service.providerImage}
                alt={service.name}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-cyan-500 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              <Check size={12} className="text-white" />
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">STARTING AT</p>
            <p className="text-2xl font-bold text-cyan-600">
              ${service.price}<span className="text-sm text-cyan-500/60 font-medium lowercase">/hr</span>
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-0.5">
            {service.name}
          </h3>
          <p className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider mb-3">
            {service.role || service.category.toUpperCase()}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              <Star size={14} className="fill-cyan-500 text-cyan-500" />
              <span className="text-sm font-bold text-gray-900">{service.rating}</span>
            </div>
            <span className="text-xs font-semibold text-gray-400">({service.totalReviews} reviews)</span>
          </div>

          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-6 h-10">
            {service.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 pt-1 mt-auto">
          <div className="flex items-center gap-2 text-gray-400">
            <Navigation size={14} className="-rotate-45" />
            <span className="text-xs font-semibold">{service.distance} miles away</span>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}
