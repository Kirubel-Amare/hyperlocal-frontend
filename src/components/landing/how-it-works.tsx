'use client'

import { Search, Users, CheckCircle, MessageSquare } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Search Services',
      description: 'Browse thousands of verified professionals in your area',
      icon: Search,
      color: 'cyan'
    },
    {
      number: 2,
      title: 'View Profiles',
      description: 'Check ratings, reviews, and pricing from real customers',
      icon: Users,
      color: 'blue'
    },
    {
      number: 3,
      title: 'Book & Pay',
      description: 'Secure booking and flexible payment options available',
      icon: CheckCircle,
      color: 'emerald'
    },
    {
      number: 4,
      title: 'Get It Done',
      description: 'Track progress and communicate directly with professionals',
      icon: MessageSquare,
      color: 'purple'
    }
  ]

  return (
    <section id="how-it-works" className="relative w-full py-24 bg-white">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 border border-blue-300 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-700 font-semibold text-sm">HOW IT WORKS</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Get Expert Help in 4 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From search to completion, it's simple and straightforward
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 -z-10"></div>

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="group relative">
                {/* Number Circle */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto`}>
                  <span className="text-white font-bold text-2xl">{step.number}</span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 group-hover:border-cyan-300 group-hover:shadow-lg transition-all text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 bg-${step.color}-100 rounded-lg`}>
                      <Icon size={28} className={`text-${step.color}-600`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
