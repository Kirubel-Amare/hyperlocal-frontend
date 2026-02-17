// app/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Button from '@/components/ui/Button'
import CategoryCard from '@/components/landing/CategoryCard'
import ProfessionalCard from '@/components/landing/ProfessionalCard'
import TrustBadge from '@/components/landing/TrustBadge'
import Footer from '@/components/layout/Footer'
import { Search, MapPin, Shield, Star, Clock, Headphones } from 'lucide-react'

export default function LandingPage() {
  const [service, setService] = useState('')
  const [location, setLocation] = useState('Austin, TX')

  const categories = [
    { name: 'Plumbing', price: '$45/TASK', href: '/category/plumbing' },
    { name: 'Cleaning', price: '$45/TASK', href: '/category/cleaning' },
    { name: 'Tutoring', price: '$45/TASK', href: '/category/tutoring' },
    { name: 'Pet Care', price: '$45/TASK', href: '/category/pet-care' },
    { name: 'Electrical', price: '$45/TASK', href: '/category/electrical' },
    { name: 'Gardening', price: '$45/TASK', href: '/category/gardening' },
  ]

  const professionals = [
    {
      name: 'Sana J.',
      location: 'Austin, TX',
      title: 'Licensed Electrical Repairs & Wiring',
      description: 'Expert in residential electrical troubleshooting, fixture installation, and panel upgrades.',
    },
    {
      name: 'Michael H.',
      location: 'Austin, TX',
      title: 'Math & Physics Prep (High School)',
      description: 'Patient tutor helping students excel in Calculus, SAT prep, and AP Physics.',
    },
    {
      name: 'Elena D.',
      location: 'Austin, TX',
      title: 'Eco-Friendly Deep House Cleaning',
      description: 'Full house cleaning using non-toxic products, reliable, fast, and thorough service.',
    },
  ]

  const trustItems = [
    { icon: <Shield size={20} />, text: 'Verified Professionals' },
    { icon: <Star size={20} />, text: 'Insured & Bonded' },
    { icon: <Clock size={20} />, text: 'Happiness Guarantee' },
    { icon: <Headphones size={20} />, text: '24/7 Support' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Header for landing - we reuse our flexible Header with rightElement */}
      <Header
        showLoginLink={false}
        rightElement={
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Button variant="primary" size="sm" href="/register">
              Sign up
            </Button>
          </div>
        }
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cyan-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Your local experts, just a click away.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From emergency plumbing to expert math tutoring, find verified professionals right in your neighborhood.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="What service do you need?"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
              />
            </div>
            <Button variant="primary" size="lg" className="px-8">Search</Button>
          </div>

          {/* Price Badge */}
          <div className="text-center mt-6">
            <span className="inline-block bg-cyan-100 text-cyan-800 font-semibold py-2 px-4 rounded-full">
              AVAILABLE FROM $45/TASK
            </span>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {trustItems.map((item) => (
              <TrustBadge key={item.text} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Browse by Category
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Popular services requested in Austin
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.name} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Featured Professionals
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Highest-rated experts available this week
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((pro) => (
              <ProfessionalCard key={pro.name} {...pro} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Professionals */}
      <section className="bg-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Are you a service professional?</h2>
          <p className="text-xl mb-8 opacity-90">
            Grow your business and connect with customers in your neighborhood. Start listing your services for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="bg-white text-cyan-600 hover:bg-gray-100" href="/become-partner">
              Become a Partner
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" href="/how-it-works">
              How it Works
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}