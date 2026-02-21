'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import HeroSection from '@/components/landing/hero-section'
import CategoriesSection from '@/components/landing/categories-section'
import HowItWorks from '@/components/landing/how-it-works'
import FeaturedProfessionals from '@/components/landing/featured-professionals'
import TestimonialsSection from '@/components/landing/testimonials-section'
import FAQSection from '@/components/landing/faq-section'
import CTASection from '@/components/landing/cta-section'
import Footer from '@/components/layout/Footer'
import OnboardingWizard from '@/components/shared/onboarding-wizard'

export default function LandingPage() {
  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    // Check if user has seen onboarding
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding')
    if (!hasSeenOnboarding) {
      const timer = setTimeout(() => {
        setShowOnboarding(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleCloseOnboarding = () => {
    setShowOnboarding(false)
    localStorage.setItem('hasSeenOnboarding', 'true')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <OnboardingWizard
        isOpen={showOnboarding}
        onClose={handleCloseOnboarding}
      />
    </div>
  )
}
