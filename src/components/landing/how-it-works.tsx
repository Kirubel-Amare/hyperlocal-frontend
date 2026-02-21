'use client'

import { Search, Users, CheckCircle, MessageSquare } from 'lucide-react'
import { useTranslation } from '@/i18n/LanguageContext'

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = [
    {
      number: 1,
      title: t('howItWorks.steps.step1.title'),
      description: t('howItWorks.steps.step1.description'),
      icon: Search,
      color: 'cyan'
    },
    {
      number: 2,
      title: t('howItWorks.steps.step2.title'),
      description: t('howItWorks.steps.step2.description'),
      icon: Users,
      color: 'blue'
    },
    {
      number: 3,
      title: t('howItWorks.steps.step3.title'),
      description: t('howItWorks.steps.step3.description'),
      icon: CheckCircle,
      color: 'emerald'
    },
    {
      number: 4,
      title: t('howItWorks.steps.step4.title'),
      description: t('howItWorks.steps.step4.description'),
      icon: MessageSquare,
      color: 'purple'
    }
  ]

  return (
    <section id="how-it-works" className="relative w-full py-24 bg-white dark:bg-gray-950 dark:bg-background">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8F4F4] dark:bg-[#1E7B7C]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-700 dark:text-blue-400 font-semibold text-sm">{t('howItWorks.badge')}</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('howItWorks.description')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#1E7B7C] via-blue-400 to-purple-400 -z-10"></div>

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="group relative">
                {/* Number Circle */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto`}>
                  <span className="text-white font-bold text-2xl">{step.number}</span>
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 border-2 border-gray-100 dark:border-gray-800 group-hover:border-[#1E7B7C] dark:group-hover:border-cyan-600 group-hover:shadow-lg transition-all text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 bg-${step.color}-100 dark:bg-${step.color}-900/30 rounded-lg`}>
                      <Icon size={28} className={`text-${step.color}-600 dark:text-${step.color}-400`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
