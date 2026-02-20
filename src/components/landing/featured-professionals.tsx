'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function FeaturedProfessionals() {
  const professionals = [
    {
      id: 1,
      name: 'Sarah J',
      title: 'Master Electrician',
      description: 'Licensed Electrical Repairs & Wiring',
      details: 'Expert in residential electrical troubleshooting. Future projects and power audits.',
      rating: 4.9,
      reviews: 128,
      price: '$85',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop'
    },
    {
      id: 2,
      name: 'Michael H',
      title: 'Academic Tutor',
      description: 'Math & Physics Prep (High School)',
      details: '5+ years experience helping students excel in STEM. Focused on concepts and problem-solving.',
      rating: 4.9,
      reviews: 95,
      price: '$65',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop'
    },
    {
      id: 3,
      name: 'Elena D',
      title: 'Deep Cleaning Pro',
      description: 'Eco-Friendly Deep House Cleaning',
      details: 'Full house cleaning using eco-products. Reliable, fast, and thorough service.',
      rating: 4.8,
      reviews: 156,
      price: '$120',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop'
    },
    {
      id: 4,
      name: 'Marcus W',
      title: 'Plumbing Expert',
      description: 'Emergency & General Plumbing',
      details: 'Licensed plumber with 10+ years of experience. Fix leaks, install fixtures, and more.',
      rating: 4.9,
      reviews: 203,
      price: '$90',
      image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae1?w=500&h=600&fit=crop'
    },
    {
      id: 5,
      name: 'Jessica L',
      title: 'Pet Care Specialist',
      description: 'Dog Walking & Pet Sitting',
      details: 'Certified pet lover offering walking, sitting, and overnight care. Trusted by many local pets.',
      rating: 5.0,
      reviews: 87,
      price: '$35',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop'
    },
    {
      id: 6,
      name: 'David C',
      title: 'Gardening Pro',
      description: 'Lawn Care & Landscaping',
      details: 'Transform your yard with professional mowing, trimming, and seasonal cleanups.',
      rating: 4.8,
      reviews: 112,
      price: '$70',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop'
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Professionals</h2>
            <p className="text-gray-600">Highest-rated experts available this week</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((pro) => (
            <div
              key={pro.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <Image
                  src={pro.image}
                  alt={pro.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-sm text-gray-900">{pro.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E7B7C] to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {pro.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{pro.name}</h3>
                    <p className="text-xs font-semibold text-[#1E7B7C] uppercase">{pro.title}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{pro.description}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{pro.details}</p>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600">STARTING AT</p>
                    <p className="text-2xl font-bold text-gray-900">{pro.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">{pro.reviews} reviews</p>
                  </div>
                </div>

                <button className="w-full text-[#1E7B7C] hover:text-[#166566] font-semibold text-sm transition-colors">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}