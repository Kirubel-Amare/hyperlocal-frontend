'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Search, MapPin, Sparkles, ArrowRight } from 'lucide-react'
import { useTranslation } from '@/i18n/LanguageContext'

export default function HeroSection() {
  const { t } = useTranslation()
  const [service, setService] = useState('')
  const [location, setLocation] = useState(t('hero.defaultLocation'))
  const [animateElements, setAnimateElements] = useState(false)

  useEffect(() => {
    setAnimateElements(true)
  }, [])

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-[#E8F4F4] dark:from-background dark:via-[#1E7B7C]/10 dark:to-background pt-20 pb-24 mt-16 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8F4F4] dark:bg-[#1E7B7C] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className={`transform transition-all duration-1000 relative z-10 ${animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Badge with animation */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8F4F4] dark:from-[#1E7B7C]/20 to-blue-100 dark:to-indigo-900/20 border border-[#1E7B7C] rounded-full px-4 py-2 mb-8 hover:shadow-lg transition-all">
                <Sparkles size={16} className="text-[#1E7B7C] dark:text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-xs font-semibold text-[#166566] dark:text-cyan-300 uppercase tracking-wide">{t('hero.badge')}</span>
              </div>

              {/* Headline with gradient */}
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-6 leading-tight">
                {t('hero.titlePrefix')}{' '}
                <span className="bg-gradient-to-r from-[#1E7B7C] to-[#166566] dark:from-cyan-400 dark:to-teal-500 bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>.
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light">
                {t('hero.description')}
              </p>

              {/* Search Bar with Overlay Button */}
              <div className="relative mb-10">
                <div className="bg-white dark:bg-gray-950/80 backdrop-blur border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl dark:shadow-black/50 p-6 flex flex-col lg:flex-row gap-4 hover:shadow-3xl transition-all pr-28 lg:pr-6">
                  <div className="flex-1 flex items-center gap-3 lg:border-r border-gray-200 dark:border-gray-800 lg:pr-6">
                    <Search size={22} className="text-[#1E7B7C] dark:text-cyan-400" />
                    <input
                      type="text"
                      placeholder={t('hero.servicePlaceholder')}
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="flex-1 outline-none text-gray-700 dark:text-gray-300 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-lg bg-transparent"
                    />
                  </div>
                  <div className="hidden lg:flex flex-1 items-center gap-3 lg:border-r border-gray-200 dark:border-gray-800 lg:pr-6">
                    <MapPin size={22} className="text-[#1E7B7C] dark:text-cyan-400" />
                    <input
                      type="text"
                      placeholder={t('hero.locationPlaceholder')}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="flex-1 outline-none text-gray-700 dark:text-gray-300 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-lg bg-transparent"
                    />
                  </div>
                </div>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1E7B7C] to-[#166566] dark:from-cyan-600 dark:to-teal-700 hover:from-[#166566] hover:to-[#0f4a4b] text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[#1E7B7C]/20 dark:shadow-cyan-900/50">
                  <Search size={20} />
                  {t('hero.search')}
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="flex -space-x-3">
                  {['https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane', 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mary'].map((avatar, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-br from-[#1E7B7C] to-[#166566] hover:scale-110 transition-transform">
                      <img src={avatar} alt="User" className="w-full h-full rounded-full" />
                    </div>
                  ))}
                </div>
                <div className="group-hover:translate-x-2 transition-transform">
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100">{t('hero.availablePros')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-400">{t('hero.satisfiedCustomers')}</p>
                </div>
              </div>
            </div>

            {/* Right Image with Enhanced Design */}
            <div className={`relative transform transition-all duration-1000 ${animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Floating decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1E7B7C] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

              <div className="relative h-96 lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all border-4 border-white dark:border-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=700&fit=crop"
                  alt="Professional cleaning service"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Price Card with Enhanced Design */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white dark:bg-gray-950 rounded-2xl shadow-2xl p-6 max-w-xs border border-gray-100 dark:border-gray-800 hover:shadow-3xl transition-all transform hover:scale-105 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-100">{t('hero.verifiedSpecialist')}</span>
                </div>
                <p className="text-3xl font-black bg-gradient-to-r from-[#1E7B7C] to-[#166566] dark:from-cyan-400 dark:to-teal-500 bg-clip-text text-transparent">{t('hero.priceTask')}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-400 mt-2 font-medium">{t('hero.cleaningIncluded')}</p>
                <div className="flex items-center gap-2 mt-3 text-[#1E7B7C] dark:text-cyan-400 font-semibold text-xs">
                  <span>{t('hero.bookNow')}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Trust Stats - Enhanced */}
          <div className="mt-32 pt-16 border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { icon: '✓', label: 'Verified', value: t('stats.verified'), color: 'cyan' },
                { icon: '🛡️', label: 'Insured &', value: t('stats.insured'), color: 'blue' },
                { icon: '😊', label: 'Happiness', value: t('stats.guarantee'), color: 'emerald' },
                { icon: '🕐', label: '24/7', value: t('stats.support'), color: 'purple' }
              ].map((stat, i) => (
                <div key={i} className="group hover:bg-gradient-to-br hover:from-[#E8F4F4] hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-800 rounded-2xl p-6 transition-all hover:shadow-lg border border-transparent hover:border-[#E8F4F4] dark:hover:border-gray-700">
                  <div className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-lg">{stat.icon}</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
