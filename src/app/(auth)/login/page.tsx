'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FormField from '@/components/ui/FormField'
import PasswordField from '@/components/ui/PasswordField'
import CheckboxField from '@/components/ui/CheckboxField'
import Button from '@/components/ui/Button'
import DividerWithText from '@/components/ui/DividerWithText'
import FooterLinks from '@/components/ui/FooterLinks'
import SocialLoginButton from '@/components/ui/SocialLoginButton'
import Header from '@/components/layout/header'
export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const fullText = "Connecting you to local experts."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign in with:', { email, password, rememberMe })
  }

  return (

    <div className="flex justify-center min-h-screen bg-gray-50 p-4">

      <div className="flex w-full max-w-6xl border-gray-800 rounded-lg overflow-hidden shadow-lg bg-white mt-10 mb-10">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-gray-800">
          <Image
            src="/image/image5.jpg"
            alt="Servicely - Connecting you to local experts"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
            <div className="flex items-center ">
              <div className="w-20 h-20 relative">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="Servicely Logo"
                  fill
                  className="object-contain"
                />

              </div>

              <span className="text-white text-lg font-bold">SERVICELY</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              {typedText}
              {typedText.length < fullText.length && (
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
              )}
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              The easiest way to find and book home services from verified professionals in your neighborhood.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-8 sm:px-8 lg:px-8">
          <div className="w-full max-w-sm">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-base text-blue-500 mb-8">
              Enter your details to access your account.
            </p>

            <form onSubmit={handleSignIn} className="space-y-6 border border-gray-200 p-6 rounded-lg shadow-lg">
              <FormField
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g alex@example.com"
                required
              />

              <PasswordField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />

              <div className="flex items-center justify-between">
                <CheckboxField
                  label="Remember me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <Link href="/forgot-password" className="text-sm text-cyan-600 hover:text-cyan-700">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" variant="primary" fullWidth>
                Sign in
              </Button>

              <DividerWithText text="OR CONTINUE WITH" />

              <div className="grid grid-cols-1 gap-3">
                <SocialLoginButton provider="google" onClick={() => console.log('Google sign in')} />
              </div>
            </form>

            <p className="text-center text-sm text-gray-600 mt-8">
              Don't have an account?{' '}
              <Link href="/register" className="text-cyan-600 hover:text-cyan-700 font-medium">
                Create an account
              </Link>
            </p>

            <FooterLinks />
          </div>
        </div>
      </div>
    </div>
  )
}