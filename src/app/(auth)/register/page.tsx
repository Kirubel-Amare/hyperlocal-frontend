'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, ShoppingCart, Briefcase } from 'lucide-react'
import Header from '@/components/layout/header'
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<'hire' | 'work' | null>('hire')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      accountType,
      fullName,
      email,
      phone,
      password,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-cyan-600">ACCOUNT TYPE</span>
            <span className="text-sm font-medium text-gray-600">Step 1 of 3</span>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-cyan-500 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Next: Personal Details & Verification</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Join our community
          </h1>
          <p className="text-center text-gray-600 mb-8">
            How do you want to use the platform?
          </p>

          {/* Account Type Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* I want to hire */}
            <button
              onClick={() => setAccountType('hire')}
              className={`p-6 border-2 rounded-lg text-left transition-all ${
                accountType === 'hire'
                  ? 'border-cyan-500 bg-cyan-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <ShoppingCart
                size={32}
                className={`mb-3 ${accountType === 'hire' ? 'text-cyan-600' : 'text-gray-600'}`}
              />
              <h3 className="font-bold text-gray-900 mb-2">I want to hire</h3>
              <p className="text-sm text-gray-600">
                Find top-rated local professionals for your home or business projects.
              </p>
            </button>

            {/* I want to work */}
            <button
              onClick={() => setAccountType('work')}
              className={`p-6 border-2 rounded-lg text-left transition-all ${
                accountType === 'work'
                  ? 'border-cyan-500 bg-cyan-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <Briefcase
                size={32}
                className={`mb-3 ${accountType === 'work' ? 'text-cyan-600' : 'text-gray-600'}`}
              />
              <h3 className="font-bold text-gray-900 mb-2">I want to work</h3>
              <p className="text-sm text-gray-600">
                Offer your skills, manage bookings, and grow your local client base.
              </p>
            </button>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleCreateAccount} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Alex Johnson"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                inputClass="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                containerClass="w-full"
                enableSearch={true}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Must be at least 8 characters with one number
              </p>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="px-3 text-sm text-gray-500 font-medium">OR</p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.69 3.56-1.702" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Apple</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-8">
          By creating an account, you agree to our{' '}
          <Link href="#" className="text-cyan-600 hover:text-cyan-700">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="text-cyan-600 hover:text-cyan-700">
            Privacy Policy
          </Link>
          . We value your privacy and local security.
        </p>
      </main>
    </div>
  )
}
