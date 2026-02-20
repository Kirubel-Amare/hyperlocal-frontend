'use client'

import Header from '@/components/layout/header'
import HeroSection from '@/components/landing/hero-section'
import CategoriesSection from '@/components/landing/categories-section'
import HowItWorks from '@/components/landing/how-it-works'
import FeaturedProfessionals from '@/components/landing/featured-professionals'
import TestimonialsSection from '@/components/landing/testimonials-section'
import FAQSection from '@/components/landing/faq-section'
import CTASection from '@/components/landing/cta-section'
import Footer from '@/components/layout/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[1600px] mx-auto px-8 pt-28 pb-12">
        <HeroSection />
        <CategoriesSection />
        <HowItWorks />
        <FeaturedProfessionals />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  )
}
