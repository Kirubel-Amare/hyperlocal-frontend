'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Step1 from '@/components/register/Step1'
import Step2 from '@/components/register/Step2'
import Step3 from '@/components/register/Step3'
import type { RegistrationData } from '@/types/registration'

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<RegistrationData>>({})

  const updateFormData = (data: Partial<RegistrationData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const handleStep1Submit = (data: Partial<RegistrationData>) => {
    updateFormData(data)
    nextStep()
  }

  const handleStep2Submit = (data: Partial<RegistrationData>) => {
    updateFormData(data)
    nextStep()
  }

  const handleFinalSubmit = async (data: Partial<RegistrationData>) => {
    const completeData = { ...formData, ...data }
    console.log('Final registration data:', completeData)
    // Send to your API
    // await fetch('/api/register', { method: 'POST', body: JSON.stringify(completeData) })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-[1600px] mx-auto px-8 pt-28 pb-12 flex justify-center">
        <div className="w-full max-w-2xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#1E7B7C]">
                STEP {step} OF 3
              </span>
              <span className="text-sm font-medium text-gray-600">
                {step === 1 && 'Account Type'}
                {step === 2 && 'Personal Details'}
                {step === 3 && 'Verification'}
              </span>
            </div>
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1E7B7C] rounded-full transition-all"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {step === 1 && 'Next: Personal Details & Verification'}
              {step === 2 && 'Next: Final Verification'}
              {step === 3 && 'Almost done!'}
            </p>
          </div>

          {/* Step Components */}
          {step === 1 && (
            <Step1
              initialData={formData}
              onSubmit={handleStep1Submit}
            />
          )}
          {step === 2 && (
            <Step2
              initialData={formData}
              onBack={prevStep}
              onSubmit={handleStep2Submit}
            />
          )}
          {step === 3 && (
            <Step3
              initialData={formData}
              onBack={prevStep}
              onSubmit={handleFinalSubmit}
            />
          )}
        </div>
      </main>
    </div>
  )
}