'use client'

import Link from 'next/link'
import Image from 'next/image'
import { servicesData } from '@/lib/services-data'
import { Star, MapPin, Clock, CheckCircle, Share2, Heart, ChevronRight } from 'lucide-react'
import { useState, use } from 'react'

interface DetailPageProps {
  params: Promise<{
    category: string
    id: string
  }>
}

const categoryNames: Record<string, string> = {
  plumbing: 'Plumbing',
  cleaning: 'Cleaning',
  tutoring: 'Tutoring',
  'pet-care': 'Pet Care',
  electrical: 'Electrical',
  gardening: 'Gardening',
  repairs: 'Repairs'
}

export default function ServiceDetailPage({ params }: DetailPageProps) {
  const { category, id } = use(params)
  const [liked, setLiked] = useState(false)

  const categoryData = servicesData[category] || []
  const service = categoryData.find((s) => s.id === id)
  const categoryName = categoryNames[category] || 'Services'

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Service Not Found</h1>
          <Link href={`/services/${category}`} className="text-cyan-600 hover:text-cyan-700">
            Back to {categoryName}
          </Link>
        </div>
      </div>
    )
  }

  // Get related services (other services in same category)
  const relatedServices = categoryData
    .filter((s) => s.id !== service.id)
    .slice(0, 3)

  const [activeTab, setActiveTab] = useState('about')
  const [selectedDate, setSelectedDate] = useState(3)
  const [selectedTime, setSelectedTime] = useState('09:00 AM')

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Link href="/landing" className="hover:text-cyan-600">Home</Link>
            <ChevronRight size={16} />
            <Link href={`/services/${category}`} className="hover:text-cyan-600">{categoryName}</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-semibold">{service.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <Share2 size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <Heart size={20} className={liked ? 'text-red-500 fill-red-500' : 'text-gray-600'} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Provider Header */}
            <div className="flex items-start gap-4 pb-6 border-b border-gray-200 mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{service.name.charAt(0)}</span>
                </div>
                <div className="absolute bottom-0 right-0 bg-cyan-500 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                  <CheckCircle size={16} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-bold text-gray-900">{service.name}</h1>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">AVAILABLE NOW</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{service.category} • {service.location}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-900">{service.rating}</span>
                    <span className="text-gray-600">({service.totalReviews} reviews)</span>
                  </div>
                  <span className="text-gray-600">8+ Years Exp.</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 mb-8 border-b border-gray-200">
              {['About', 'Portfolio', 'Reviews', 'Experience'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`py-3 font-medium transition-colors border-b-2 ${activeTab === tab.toLowerCase()
                      ? 'text-cyan-600 border-cyan-600'
                      : 'text-gray-600 border-transparent hover:text-gray-900'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* About Section */}
            {activeTab === 'about' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Provider</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['#MoodBoarding', '#SpacePlanning', '#3DRendering', '#TextileSourcing', '#VintageRestoration'].map((skill) => (
                    <span key={skill} className="text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Work</h3>
                <div className="flex gap-4 justify-between">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex-1 h-40 rounded-xl bg-gradient-to-br from-amber-200 to-orange-300 shadow-md"
                    />
                  ))}
                </div>
                <Link href="#" className="text-cyan-600 font-medium text-sm mt-4 inline-block hover:text-cyan-700">
                  View All (24)
                </Link>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-40 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300" />
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {[
                  { name: 'Michael J.', date: 'October 12, 2023', rating: 5, review: 'Sarah was absolutely incredible. She transformed our tiny studio into a place that feels massive and cohesive. Truly a professional with an eye for detail!' },
                  { name: 'Lauren R.', date: 'September 28, 2023', rating: 5, review: 'Punctual and very creative! Loved her color palette suggestions. The project took slightly longer than expected but the result was worth it.' }
                ].map((review, i) => (
                  <div key={i} className="pb-6 border-b border-gray-200">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white font-bold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{review.review}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
                <p className="text-gray-700">8+ years of professional experience in {service.category}.</p>
              </div>
            )}
          </div>

          {/* Right Column - Booking Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
              {/* Price */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-1">Price</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-cyan-600">${service.price}</span>
                  <span className="text-gray-600">/hour</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Typical response: 1 hour</p>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Select Date</h4>
                <p className="text-xs font-semibold text-cyan-600 mb-3">November 2023</p>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['29', '30', '1', '2', '3', '4', '5'].map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(parseInt(day))}
                      className={`py-2 rounded-lg text-sm font-medium transition-all ${selectedDate === parseInt(day)
                          ? 'bg-cyan-500 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Available Slots</h4>
                <div className="flex gap-2">
                  {['09:00 AM', '01:00 PM', '04:30 PM'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border-2 ${selectedTime === time
                          ? 'bg-cyan-500 text-white border-cyan-500'
                          : 'border-cyan-500 text-cyan-600 hover:bg-cyan-50'
                        }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Book Button */}
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition-colors mb-4">
                Book Now
              </button>

              {/* Message Button */}
              <button className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-3 rounded-lg transition-colors">
                Message {service.name.split(' ')[0]}
              </button>

              {/* Trust Info */}
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={16} />
                  <span>Secure Payment Protection</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={16} />
                  <span>Free Cancellation (48h notice)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Reviews Section */}
        <div className="mt-16 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Verified Reviews</h2>
          <div className="space-y-6">
            {[
              { name: 'Michael J.', date: 'October 12, 2023', rating: 5, review: 'Sarah was absolutely incredible. She transformed our tiny studio into a place that feels massive and cohesive. Truly a professional with an eye for detail!' },
              { name: 'Lauren R.', date: 'September 28, 2023', rating: 5, review: 'Punctual and very creative! Loved her color palette suggestions. The project took slightly longer than expected but the result was worth it.' }
            ].map((review, i) => (
              <div key={i} className="pb-6 border-b border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{review.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-12 border-t border-gray-200 text-gray-600">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">H</span>
            </div>
            <span className="font-bold">HyperLocal</span>
          </div>
          <p className="text-sm">© 2023 HyperLocal Services Inc. Crafted for neighborhood excellence.</p>
        </div>
      </div>
    </div>
  )
}
