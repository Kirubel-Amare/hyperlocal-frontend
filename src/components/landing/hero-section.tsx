'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Search, MapPin, Sparkles, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [service, setService] = useState('')
  const [location, setLocation] = useState('Austin, TX')
  const [animateElements, setAnimateElements] = useState(false)

  useEffect(() => {
    setAnimateElements(true)
  }, [])

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-cyan-50 to-white pt-20 pb-24 mt-16">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className={`transform transition-all duration-1000 relative z-10 ${animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Badge with animation */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-300 rounded-full px-4 py-2 mb-8 hover:shadow-lg transition-all">
                <Sparkles size={16} className="text-cyan-600 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-xs font-semibold text-cyan-700 uppercase tracking-wide">Trusted by 50k+ Neighbors</span>
              </div>

              {/* Headline with gradient */}
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Your local experts,{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">just a click away</span>.
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                From emergency plumbing to expert math tutoring, find verified professionals right in your neighborhood. Safe, reliable, and always ready.
              </p>

              {/* Search Bar with Overlay Button */}
              <div className="relative mb-10">
                <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl shadow-2xl p-6 flex flex-col lg:flex-row gap-4 hover:shadow-3xl transition-all pr-28 lg:pr-6">
                  <div className="flex-1 flex items-center gap-3 lg:border-r border-gray-200 lg:pr-6">
                    <Search size={22} className="text-cyan-500" />
                    <input
                      type="text"
                      placeholder="What service do you need?"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-lg bg-transparent"
                    />
                  </div>
                  <div className="hidden lg:flex flex-1 items-center gap-3 lg:border-r border-gray-200 lg:pr-6">
                    <MapPin size={22} className="text-cyan-500" />
                    <input
                      type="text"
                      placeholder="Your location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-lg bg-transparent"
                    />
                  </div>
                </div>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2 whitespace-nowrap shadow-lg">
                  <Search size={20} />
                  Search
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="flex -space-x-3">
                  {['https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane', 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mary'].map((avatar, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-cyan-400 to-blue-500 hover:scale-110 transition-transform">
                      <img src={avatar} alt="User" className="w-full h-full rounded-full" />
                    </div>
                  ))}
                </div>
                <div className="group-hover:translate-x-2 transition-transform">
                  <p className="text-sm font-bold text-gray-900">Available professionals near you</p>
                  <p className="text-xs text-gray-500">Join thousands of satisfied customers</p>
                </div>
              </div>
            </div>

            {/* Right Image with Enhanced Design */}
            <div className={`relative transform transition-all duration-1000 ${animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Floating decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

              <div className="relative h-96 lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=700&fit=crop"
                  alt="Professional cleaning service"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Price Card with Enhanced Design */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border border-gray-100 hover:shadow-3xl transition-all transform hover:scale-105 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800">Verified Specialist</span>
                </div>
                <p className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">$45/task</p>
                <p className="text-xs text-gray-500 mt-2 font-medium">Professional deep cleaning included</p>
                <div className="flex items-center gap-2 mt-3 text-cyan-600 font-semibold text-xs">
                  <span>Book now</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Trust Stats - Enhanced */}
          <div className="mt-32 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { icon: '✓', label: 'Verified', value: 'Professionals', color: 'cyan' },
                { icon: '🛡️', label: 'Insured &', value: 'Bonded', color: 'blue' },
                { icon: '😊', label: 'Happiness', value: 'Guarantee', color: 'emerald' },
                { icon: '🕐', label: '24/7', value: 'Support', color: 'purple' }
              ].map((stat, i) => (
                <div key={i} className="group hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 rounded-2xl p-6 transition-all hover:shadow-lg border border-transparent hover:border-cyan-200">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center flex-shrink-0 mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-lg">{stat.icon}</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
