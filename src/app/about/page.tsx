'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Users, Target, Heart, Award } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function AboutPage() {
  const values = [
    { icon: Target, title: 'Our Mission', description: 'Connect communities with trusted local professionals to solve everyday challenges.' },
    { icon: Heart, title: 'Our Values', description: 'Integrity, reliability, and customer satisfaction guide everything we do.' },
    { icon: Users, title: 'Our Community', description: 'Over 50,000 verified professionals and 100,000+ satisfied customers.' },
    { icon: Award, title: 'Our Commitment', description: 'Ensuring quality service and trust in every interaction.' }
  ]

  const team = [
    { name: 'Sarah Chen', role: 'Founder & CEO', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { name: 'Michael Ross', role: 'CTO', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' },
    { name: 'Jessica Brown', role: 'Head of Community', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica' },
    { name: 'David Martinez', role: 'VP of Operations', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' }
  ]

  const milestones = [
    { year: '2020', event: 'LocalExpert founded' },
    { year: '2021', event: '10,000 professionals joined' },
    { year: '2022', event: 'Expanded to 50 cities' },
    { year: '2023', event: '100,000+ customer milestones' },
    { year: '2024', event: 'Series A funding round' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20 px-6 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-black text-gray-900 mb-6">About LocalExpert</h1>
          <p className="text-2xl text-gray-600 mb-8">Connecting communities with trusted professionals since 2020</p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We believe that finding reliable, local experts shouldn't be complicated. Our platform makes it easy for customers to connect with verified professionals and for service providers to grow their business.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why We Exist</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full text-white font-bold">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all">
                  <p className="text-sm font-bold text-cyan-600 uppercase">{milestone.year}</p>
                  <p className="text-lg font-semibold text-gray-900 mt-2">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="mb-6 overflow-hidden rounded-2xl border-4 border-cyan-100 group-hover:border-cyan-400 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-cyan-600 font-semibold text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-white mb-2">50K+</p>
              <p className="text-cyan-100">Verified Professionals</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">100K+</p>
              <p className="text-cyan-100">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">500K+</p>
              <p className="text-cyan-100">Tasks Completed</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">50+</p>
              <p className="text-cyan-100">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Join Our Growing Community</h2>
          <p className="text-xl text-gray-600 mb-8">Whether you're looking for services or want to offer your expertise, there's a place for you on LocalExpert.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
              Get Started
            </Link>
            <Link href="/contact" className="border-2 border-cyan-500 text-cyan-600 px-10 py-4 rounded-xl font-bold hover:bg-cyan-50 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
