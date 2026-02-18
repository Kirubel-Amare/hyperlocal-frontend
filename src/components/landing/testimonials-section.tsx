'use client'

import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      content: 'Found the perfect plumber in 10 minutes. Professional, punctual, and fair pricing. Couldn\'t ask for better!',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      role: 'Business Owner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      content: 'As a service provider, this platform has transformed my business. I get quality leads consistently.',
      rating: 5
    },
    {
      name: 'Emma Chen',
      role: 'Busy Professional',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      content: 'The convenience is unmatched. Real background checks and verified reviews give me peace of mind.',
      rating: 5
    }
  ]

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-100 border border-cyan-300 rounded-full px-4 py-2 mb-6">
            <span className="text-cyan-700 font-semibold text-sm">WHAT OUR USERS SAY</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Trusted by thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real customers who've transformed their service experiences
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-cyan-200">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-200 group-hover:border-cyan-500 transition-colors">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
