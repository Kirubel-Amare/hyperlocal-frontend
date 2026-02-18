'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: Mail, title: 'Email', info: 'support@localexpert.com', link: 'mailto:support@localexpert.com' },
    { icon: Phone, title: 'Phone', info: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: MapPin, title: 'Address', info: '123 Main Street, Austin, TX 78701', link: '#' },
    { icon: Clock, title: 'Hours', info: 'Mon-Fri: 9AM-6PM CST', link: '#' }
  ]

  const faqs = [
    { q: 'How quickly do professionals respond?', a: 'Most professionals respond within 1-2 hours during business hours.' },
    { q: 'What is your refund policy?', a: 'We offer a 100% satisfaction guarantee with 30-day money-back refunds.' },
    { q: 'How do you verify professionals?', a: 'All professionals undergo background checks and license verification.' },
    { q: 'Can I book services on weekends?', a: 'Yes, many professionals offer weekend services. Check availability in the app.' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20 px-6 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-black text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-2xl text-gray-600">We're here to help and answer any questions you might have.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <Link
                  key={i}
                  href={item.link}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-cyan-600 transition-colors">{item.info}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="professional">Professional Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <Send size={20} />
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl text-center font-semibold">
                  Thanks for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-200 hover:border-cyan-200 hover:shadow-lg transition-all">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-cyan-600 transition-colors">
                    <span>{faq.q}</span>
                    <span className="transform group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 py-4 pt-0 text-gray-600 border-t border-gray-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare size={32} className="text-cyan-600" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Need Immediate Help?</h2>
          <p className="text-cyan-100 text-lg mb-8">Start a live chat with our support team available 24/7</p>
          <button className="bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
            Start Live Chat
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
