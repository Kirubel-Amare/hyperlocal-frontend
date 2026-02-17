// components/register/Step1.tsx
'use client'

import { useState } from 'react'
import { ShoppingCart, Briefcase } from 'lucide-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import FormField from '@/components/ui/FormField'
import PasswordField from '@/components/ui/PasswordField'
import Button from '@/components/ui/Button'
import DividerWithText from '@/components/ui/DividerWithText'
import SocialLoginButton from '@/components/ui/SocialLoginButton'
import type { RegistrationData } from '@/types/registration'

interface Step1Props {
  initialData: Partial<RegistrationData>
  onSubmit: (data: Partial<RegistrationData>) => void
}

export default function Step1({ initialData, onSubmit }: Step1Props) {
  const [accountType, setAccountType] = useState<'hire' | 'work'>(
    (initialData.accountType as 'hire' | 'work') || 'hire'
  )
  const [fullName, setFullName] = useState(initialData.fullName || '')
  const [email, setEmail] = useState(initialData.email || '')
  const [phone, setPhone] = useState(initialData.phone || '')
  const [password, setPassword] = useState(initialData.password || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ accountType, fullName, email, phone, password })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
        Join our community
      </h1>
      <p className="text-center text-gray-600 mb-8">
        How do you want to use the platform?
      </p>

      {/* Account Type Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <button
          type="button"
          onClick={() => setAccountType('hire')}
          className={`p-6 border-2 rounded-lg text-left transition-all ${accountType === 'hire'
            ? 'border-cyan-500 bg-cyan-50'
            : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
        >
          <ShoppingCart size={32} className={`mb-3 ${accountType === 'hire' ? 'text-cyan-600' : 'text-gray-600'}`} />
          <h3 className="font-bold text-gray-900 mb-2">I want to hire</h3>
          <p className="text-sm text-gray-600">
            Find top-rated local professionals for your home or business projects.
          </p>
        </button>

        <button
          type="button"
          onClick={() => setAccountType('work')}
          className={`p-6 border-2 rounded-lg text-left transition-all ${accountType === 'work'
            ? 'border-cyan-500 bg-cyan-50'
            : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
        >
          <Briefcase size={32} className={`mb-3 ${accountType === 'work' ? 'text-cyan-600' : 'text-gray-600'}`} />
          <h3 className="font-bold text-gray-900 mb-2">I want to work</h3>
          <p className="text-sm text-gray-600">
            Offer your skills, manage bookings, and grow your local client base.
          </p>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Full Name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Alex Johnson"
          required
        />

        <FormField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="alex@example.com"
          required
        />

        {/* Phone (custom, not using FormField because it's a third-party component) */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Phone Number
          </label>
          <PhoneInput
            country="us"
            value={phone}
            onChange={setPhone}
            inputClass="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            containerClass="w-full"
            enableSearch
          />
        </div>

        <PasswordField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          hint="Must be at least 8 characters with one number"
          required
        />

        <Button type="submit" variant="primary" fullWidth>
          Continue
        </Button>
      </form>

      <DividerWithText text="OR" />

      <div className="grid grid-cols-1 gap-3">
        <SocialLoginButton provider="google" onClick={() => console.log('Google sign up')} />
      </div>
    </div>
  )
}