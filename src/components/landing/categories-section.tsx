import Link from 'next/link'
import { Wrench, Sparkles, BookOpen, PawPrint, Zap, Leaf, Hammer, Home, Car, Scissors, Paintbrush, Code } from 'lucide-react'

export default function CategoriesSection() {
  const categories = [
    { name: 'Plumbing', icon: Wrench, color: 'blue', count: '245 pros' },
    { name: 'Cleaning', icon: Sparkles, color: 'pink', count: '512 pros' },
    { name: 'Tutoring', icon: BookOpen, color: 'purple', count: '189 pros' },
    { name: 'Pet Care', icon: PawPrint, color: 'orange', count: '367 pros' },
    { name: 'Electrical', icon: Zap, color: 'yellow', count: '298 pros' },
    { name: 'Gardening', icon: Leaf, color: 'emerald', count: '203 pros' },
    { name: 'Repairs', icon: Hammer, color: 'indigo', count: '421 pros' },
    { name: 'Home Improvement', icon: Home, color: 'rose', count: '334 pros' },
    { name: 'Auto Services', icon: Car, color: 'cyan', count: '276 pros' },
    { name: 'Hair & Beauty', icon: Scissors, color: 'fuchsia', count: '456 pros' },
    { name: 'Painting', icon: Paintbrush, color: 'lime', count: '198 pros' },
    { name: 'Tech Support', icon: Code, color: 'sky', count: '289 pros' }
  ]

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
    emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200',
    indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
    rose: 'bg-rose-100 text-rose-600 hover:bg-rose-200',
    cyan: 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-600 hover:bg-fuchsia-200',
    lime: 'bg-lime-100 text-lime-600 hover:bg-lime-200',
    sky: 'bg-sky-100 text-sky-600 hover:bg-sky-200'
  }

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-3">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Explore services from verified professionals</p>
          </div>
          <Link href="#" className="text-cyan-600 hover:text-cyan-700 font-semibold text-base flex items-center gap-2 hover:gap-3 transition-all group">
            View All
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon
            const colorClass = colorClasses[category.color as keyof typeof colorClasses]
            return (
              <Link
                key={index}
                href="#"
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-cyan-200 overflow-hidden relative"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-lg`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{category.name}</h3>
                  <p className="text-xs text-gray-500 font-medium">{category.count}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
