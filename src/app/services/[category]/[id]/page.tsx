// app/professional/[id]/page.tsx
'use client'

import { useState } from 'react'
import { mockProfileData } from '@/lib/services-data'
import Header from '@/components/layout/header'
import { Breadcrumb } from '@/components/profile/breadcrumb'
import { ProfileHeader } from '@/components/profile/profile-header'
import { TabNavigation } from '@/components/profile/tab-navigation'
import { SkillsSection } from '@/components/profile/skills-section'
import { PortfolioGallery } from '@/components/profile/portfolio-gallery'
import { ReviewsSection } from '@/components/profile/reviews-section'
import { BookingWidget } from '@/components/profile/booking-widget'
import Footer from '@/components/layout/Footer'

// Enhanced mock data with more content
const enhancedProfileData = {
  ...mockProfileData,
  verified: true,
  completedJobs: 245,
  responseTime: '< 2h',
  expertise: [
    'Residential Interior Design',
    'Commercial Space Planning',
    'Color Consultation',
    'Furniture Selection',
    'Lighting Design',
    'Project Management'
  ],
  reviews: mockProfileData.reviews.map(review => ({
    ...review,
    helpful: Math.floor(Math.random() * 20),
    verified: true
  })),
  portfolio: [
    ...mockProfileData.portfolio,
    '/images/work-4.jpg',
    '/images/work-5.jpg',
    '/images/work-6.jpg'
  ]
}

export default function ProfessionalProfilePage() {
  const profile = enhancedProfileData
  const [activeTab, setActiveTab] = useState('About')

  const tabs = ['About', 'Portfolio', 'Reviews', 'Experience']

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Interior Design', href: '/services/interior-design' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <>
            {/* About Section */}
            <section className="mb-14">
              <div className="bg-white dark:bg-gray-950/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                <p className="text-gray-600 leading-relaxed text-lg">{profile.about}</p>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-[#E8F4F4] to-blue-50 p-4 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">Languages</h4>
                    <p className="text-gray-600">English, Spanish, French</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">Education</h4>
                    <p className="text-gray-600">BFA in Interior Design, RISD</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">Certifications</h4>
                    <p className="text-gray-600">NCIDQ Certified, LEED AP</p>
                  </div>
                </div>
              </div>
            </section>

            <SkillsSection skills={profile.skills} expertise={profile.expertise} />
          </>
        )

      case 'Portfolio':
        return <PortfolioGallery images={profile.portfolio} />

      case 'Reviews':
        return (
          <ReviewsSection
            reviews={profile.reviews}
            averageRating={profile.rating}
            totalReviews={profile.reviewsCount}
          />
        )

      case 'Experience':
        return (
          <div className="bg-white dark:bg-gray-950/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Work Experience</h3>

            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-xl flex items-center justify-center text-white font-bold">
                    {item}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Senior Interior Designer</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Design Studio • 2020 - Present</p>
                    <p className="text-gray-600">Led multiple high-end residential projects, managed team of 5 designers, and maintained client relationships.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-[#1E7B7C]/5 via-[#166566]/5 to-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-tr from-amber-500/5 via-orange-500/5 to-pink-500/5 rounded-full blur-[120px]" />
      </div>

      <Header showSidebar={true} />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 mt-10">
        {/* <Breadcrumb items={breadcrumbItems} currentPage={profile.name} /> */}

        <ProfileHeader profile={profile} />

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {renderTabContent()}
          </div>

          {/* Booking Widget */}
          <div className="lg:col-span-1">
            <BookingWidget
              hourlyRate={profile.hourlyRate}
              responseTime={profile.typicalResponse}
              name={profile.name}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}