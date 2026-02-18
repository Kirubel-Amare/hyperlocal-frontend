'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How do I know professionals are verified?',
      answer: 'All professionals on our platform undergo background checks, identity verification, and insurance validation. We only accept the top 10% of service providers.'
    },
    {
      question: 'What if I\'m not satisfied with the service?',
      answer: 'We offer a 100% happiness guarantee. If you\'re not satisfied, we\'ll either redo the work for free or give you a full refund within 48 hours.'
    },
    {
      question: 'How are prices determined?',
      answer: 'Prices are set by individual professionals based on their experience, qualifications, and market rates. You can compare prices and see exactly what you\'re paying for.'
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes, we use industry-standard encryption and PCI compliance. Your payment details are never shared with professionals and are processed securely.'
    },
    {
      question: 'Can I cancel or reschedule a booking?',
      answer: 'Yes, you can cancel free of charge up to 24 hours before the scheduled service. For emergencies, contact our support team.'
    },
    {
      question: 'How do I become a service professional?',
      answer: 'Visit our "Become a Partner" page and apply. We\'ll review your background, credentials, and insurance. Approved professionals can start accepting jobs within 48 hours.'
    }
  ]

  return (
    <section id="faq" className="relative w-full py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 border border-purple-300 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-700 font-semibold text-sm">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            We've Got Answers
          </h2>
          <p className="text-xl text-gray-600">
            Find solutions to common questions and concerns
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-300 transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-cyan-500 flex-shrink-0 ml-4 transition-transform ${openIndex === i ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-t-2 border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
          <p className="text-xl font-semibold mb-4">Still have questions?</p>
          <p className="mb-6 text-cyan-100">Our support team is available 24/7 to help</p>
          <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
