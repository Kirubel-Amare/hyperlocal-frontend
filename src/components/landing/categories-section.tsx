import Link from 'next/link'
import { Wrench, Sparkles, BookOpen, PawPrint, Zap, Leaf, Hammer, Home, Car, Scissors, Paintbrush, Code } from 'lucide-react'
import { useTranslation } from '@/i18n/LanguageContext'

export default function CategoriesSection() {
  const { t } = useTranslation()
  const categories = [
    { name: t('categories.list.plumbing'), icon: Wrench, color: 'blue', count: t('categories.prosCount').replace('{count}', '245') },
    { name: t('categories.list.cleaning'), icon: Sparkles, color: 'pink', count: t('categories.prosCount').replace('{count}', '512') },
    { name: t('categories.list.tutoring'), icon: BookOpen, color: 'purple', count: t('categories.prosCount').replace('{count}', '189') },
    { name: t('categories.list.petCare'), icon: PawPrint, color: 'orange', count: t('categories.prosCount').replace('{count}', '367') },
    { name: t('categories.list.electrical'), icon: Zap, color: 'yellow', count: t('categories.prosCount').replace('{count}', '298') },
    { name: t('categories.list.gardening'), icon: Leaf, color: 'emerald', count: t('categories.prosCount').replace('{count}', '203') },
    { name: t('categories.list.repairs'), icon: Hammer, color: 'indigo', count: t('categories.prosCount').replace('{count}', '421') },
    { name: t('categories.list.homeImprovement'), icon: Home, color: 'rose', count: t('categories.prosCount').replace('{count}', '334') },
    { name: t('categories.list.autoServices'), icon: Car, color: 'cyan', count: t('categories.prosCount').replace('{count}', '276') },
    { name: t('categories.list.hairBeauty'), icon: Scissors, color: 'fuchsia', count: t('categories.prosCount').replace('{count}', '456') },
    { name: t('categories.list.painting'), icon: Paintbrush, color: 'lime', count: t('categories.prosCount').replace('{count}', '198') },
    { name: t('categories.list.techSupport'), icon: Code, color: 'sky', count: t('categories.prosCount').replace('{count}', '289') }
  ]

  const colorClasses = {
    blue: 'bg-blue-100 text-[#166566] hover:bg-blue-200',
    pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
    emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200',
    indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
    rose: 'bg-rose-100 text-rose-600 hover:bg-rose-200',
    cyan: 'bg-[#E8F4F4] text-[#1E7B7C] hover:bg-[#E8F4F4]',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-600 hover:bg-fuchsia-200',
    lime: 'bg-lime-100 text-lime-600 hover:bg-lime-200',
    sky: 'bg-sky-100 text-sky-600 hover:bg-sky-200'
  }

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-[#E8F4F4] dark:from-background dark:to-[#1E7B7C]/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-3">{t('categories.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t('categories.description')}</p>
          </div>
          <Link href="/services" className="text-[#1E7B7C] hover:text-[#166566] font-semibold text-base flex items-center gap-2 hover:gap-3 transition-all group">
            {t('categories.viewAll')}
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
                href={`/services?category=${category.name}`}
                className="group bg-white dark:bg-gray-950 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800 hover:border-[#E8F4F4] dark:hover:border-gray-600 overflow-hidden relative"
              >

                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-lg`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 text-base mb-2">{category.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-400 font-medium">{category.count}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
