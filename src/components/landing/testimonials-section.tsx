'use client'

import { Star } from 'lucide-react'
import { useTranslation } from '@/i18n/LanguageContext'

export default function TestimonialsSection() {
  const { t } = useTranslation()
  const testimonials = [
    {
      name: t('testimonials.list.t1.name'),
      role: t('testimonials.list.t1.role'),
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      content: t('testimonials.list.t1.content'),
      rating: 5
    },
    {
      name: t('testimonials.list.t2.name'),
      role: t('testimonials.list.t2.role'),
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      content: t('testimonials.list.t2.content'),
      rating: 5
    },
    {
      name: t('testimonials.list.t3.name'),
      role: t('testimonials.list.t3.role'),
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      content: t('testimonials.list.t3.content'),
      rating: 5
    }
  ]

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-gray-50 via-white to-[#E8F4F4] dark:from-background dark:via-gray-900/50 dark:to-cyan-900/10">
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F4F4] dark:bg-cyan-900/30 border border-[#1E7B7C] dark:border-cyan-800 rounded-full px-4 py-2 mb-6">
            <span className="text-[#166566] dark:text-cyan-400 font-semibold text-sm">{t('testimonials.badge')}</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="group bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800 hover:border-[#E8F4F4] dark:hover:border-cyan-800">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#E8F4F4] dark:border-gray-700 group-hover:border-[#1E7B7C] dark:group-hover:border-cyan-600 transition-colors">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
