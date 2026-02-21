'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from '@/i18n/LanguageContext'

export default function FAQSection() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer')
    },
    {
      question: t('faq.questions.q2.question'),
      answer: t('faq.questions.q2.answer')
    },
    {
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer')
    },
    {
      question: t('faq.questions.q4.question'),
      answer: t('faq.questions.q4.answer')
    },
    {
      question: t('faq.questions.q5.question'),
      answer: t('faq.questions.q5.answer')
    },
    {
      question: t('faq.questions.q6.question'),
      answer: t('faq.questions.q6.answer')
    }
  ]

  return (
    <section id="faq" className="relative w-full py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 border border-purple-300 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-700 font-semibold text-sm">{t('faq.badge')}</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.description')}
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#1E7B7C] transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-[#1E7B7C] flex-shrink-0 ml-4 transition-transform ${openIndex === i ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 bg-gradient-to-br from-[#E8F4F4] to-blue-50 border-t-2 border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#1E7B7C] to-[#166566] rounded-2xl p-8 text-white shadow-xl shadow-[#1E7B7C]/10">
          <p className="text-xl font-semibold mb-4">{t('faq.stillHaveQuestions')}</p>
          <p className="mb-6 text-[#E8F4F4]">{t('faq.supportAvailable')}</p>
          <button className="bg-white text-[#1E7B7C] hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors">
            {t('faq.contactSupport')}
          </button>
        </div>
      </div>
    </section>
  )
}
