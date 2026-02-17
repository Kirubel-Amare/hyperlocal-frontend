'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Eye, EyeOff } from 'lucide-react'
import { FaGoogle, FaApple } from 'react-icons/fa';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
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
        <div className="flex p-10 justify-center min-h-screen bg-gray-50 p-4">
            <div className="flex w-full max-w-6xl h-screen lg:h-auto  border-gray-800 rounded-lg overflow-hidden shadow-lg bg-white">
                {/* Left Side - Image */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-gray-800">
                    <Image
                        src="/image/image5.jpg"
                        alt="Servicely - Connecting you to local experts"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-cyan-500 rounded flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 4h12v2H6z" />
                                </svg>
                            </div>
                            <span className="text-white text-lg font-bold">SERVICELY</span>
                        </div>

                        <h2 className="text-4xl font-bold text-white mb-4">
                            {typedText}
                            {typedText.length < fullText.length && <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>}
                        </h2>

                        <p className="text-gray-200 text-lg leading-relaxed">
                            The easiest way to find and book home services from verified professionals in your neighborhood.
                        </p>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="lg:w-1/2 flex flex-col items-center justify-center px-6 py-8 sm:px-8 lg:px-8">
                    <div className="w-full max-w-sm ">
                        {/* Heading */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-base text-blue-500 mb-8">
                            Enter your details to access your account.
                        </p>

                        {/* Login Form */}
                        <form onSubmit={handleSignIn} className="space-y-6  border-gray-200 p-6 rounded-lg shadow-lg">
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="e.g alex@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                                />
                            </div>

                            {/* Password Field */}
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
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
                                    />
                                    <span className="text-sm text-cyan-600">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-cyan-600 hover:text-cyan-700">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Sign In Button */}
                            <button
                                type="submit"
                                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors"
                            >
                                Sign in
                            </button>


                            {/* Divider */}
                            <div className="my-6 flex items-center">
                                <div className="flex-1 border-gray-300"></div>
                                <p className="px-3 text-sm text-gray-500 font-medium">OR CONTINUE WITH</p>
                                <div className="flex-1  border-gray-300"></div>
                            </div>

                            {/* Social Login */}
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
                        </form>

                        {/* Sign Up Link */}
                        <p className="text-center text-sm text-gray-600 mt-8">
                            Don't have an account?{' '}
                            <a href="register" className="text-cyan-600 hover:text-cyan-700 font-medium">
                                Create an account
                            </a>
                        </p>

                        {/* Footer Links */}
                        <div className="flex justify-center gap-6 mt-6 text-xs text-gray-400">
                            <a href="#" className="hover:text-gray-600">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-gray-600">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}