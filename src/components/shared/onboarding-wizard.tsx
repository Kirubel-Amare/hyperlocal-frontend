'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, ChevronLeft, Check, Stars, Shield, Rocket, User, Briefcase } from 'lucide-react'
import Image from 'next/image'

interface OnboardingWizardProps {
    isOpen: boolean
    onClose: () => void
}

const steps = [
    {
        id: 'welcome',
        title: 'Welcome to Hyperlocal',
        description: 'Your neighborhood, served better. Let\'s get you started with a personalized experience.',
        icon: <Stars className="w-8 h-8 text-[#1E7B7C]" />,
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'role',
        title: 'Choose Your Role',
        description: 'How do you plan to use Hyperlocal?',
        options: [
            { id: 'customer', title: 'I need a service', icon: <User className="w-6 h-6" />, description: 'Find professionals for your home, car, or business.' },
            { id: 'provider', title: 'I provide a service', icon: <Briefcase className="w-6 h-6" />, description: 'Grow your business and find local clients.' }
        ]
    },
    {
        id: 'preferences',
        title: 'Your Preferences',
        description: 'Stay updated on what matters most to you.',
        checkboxes: [
            { id: 'notifs', label: 'Enable real-time job alerts' },
            { id: 'weekly', label: 'Receive weekly neighborhood insights' },
            { id: 'privacy', label: 'Keep my location private until booking' }
        ]
    },
    {
        id: 'ready',
        title: 'You\'re all set!',
        description: 'Welcome to the future of local commerce. Start exploring your neighborhood today.',
        icon: <Rocket className="w-12 h-12 text-[#1E7B7C]" />,
        isFinal: true
    }
]

export default function OnboardingWizard({ isOpen, onClose }: OnboardingWizardProps) {
    const [currentStep, setCurrentStep] = useState(0)
    const [selections, setSelections] = useState<any>({})
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted || !isOpen) return null

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            onClose()
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const progress = ((currentStep + 1) / steps.length) * 100
    const step = steps[currentStep]

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-gray-950/80 backdrop-blur-xl rounded-[40px] border border-white/20 dark:border-gray-800/50 shadow-2xl dark:shadow-black/50 overflow-hidden flex flex-col md:flex-row h-[500px]"
            >
                {/* Visual Side */}
                <div className="hidden md:block w-5/12 relative bg-[#1E7B7C]/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E7B7C]/20 to-transparent" />
                    {step.image ? (
                        <Image
                            src={step.image}
                            alt="Onboarding"
                            fill
                            className="object-cover opacity-60 mix-blend-overlay"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="relative">
                                <div className="w-32 h-32 bg-[#1E7B7C]/10 rounded-full animate-pulse flex items-center justify-center">
                                    <Shield className="w-12 h-12 text-[#1E7B7C]" />
                                </div>
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-950 rounded-2xl shadow-lg flex items-center justify-center">
                                    <Check className="w-6 h-6 text-emerald-500" />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1E7B7C]/60 mb-1">Step {currentStep + 1} of {steps.length}</p>
                        <h4 className="text-sm font-black text-[#1E7B7C]">A better way to neighborhood.</h4>
                    </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 p-8 md:p-12 flex flex-col border-l border-white/20 dark:border-gray-800/20">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    {step.icon && <div className="mb-4">{step.icon}</div>}
                                    <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 dark:text-gray-100 leading-tight">{step.title}</h2>
                                    <p className="text-gray-500 dark:text-gray-400 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                </div>

                                {step.options && (
                                    <div className="grid grid-cols-1 gap-3">
                                        {step.options.map(opt => (
                                            <button
                                                key={opt.id}
                                                onClick={() => setSelections({ ...selections, role: opt.id })}
                                                className={`p-4 rounded-2xl border-2 text-left transition-all ${selections.role === opt.id
 ? 'border-[#1E7B7C] bg-[#1E7B7C]/5 shadow-lg shadow-[#1E7B7C]/5'
 : 'border-gray-50 bg-gray-50/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 hover:border-gray-100 dark:border-gray-800 dark:hover:border-gray-700'
 }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selections.role === opt.id ? 'bg-[#1E7B7C] text-white' : 'bg-white dark:bg-gray-950 text-[#1E7B7C] dark:text-cyan-400'}`}>
                                                        {opt.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100 dark:text-gray-100">{opt.title}</h4>
                                                        <p className="text-[10px] text-gray-500 dark:text-gray-400 dark:text-gray-400 font-medium">{opt.description}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {step.checkboxes && (
                                    <div className="space-y-3">
                                        {step.checkboxes.map(cb => (
                                            <label key={cb.id} className="flex items-center gap-3 p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl cursor-pointer hover:bg-white dark:hover:bg-gray-800 transition-all group border-2 border-transparent hover:border-gray-100 dark:border-gray-800 dark:hover:border-gray-700">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-[#1E7B7C] dark:text-cyan-600 focus:ring-[#1E7B7C]/20 transition-all cursor-pointer dark:bg-gray-900"
                                                />
                                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 dark:text-gray-300 group-hover:text-gray-900 dark:text-gray-100 dark:group-hover:text-gray-100 transition-colors">{cb.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Footer / Controls */}
                    <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                        <div className="flex-1 mr-8">
                            <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-[#1E7B7C] dark:bg-cyan-600"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {currentStep > 0 && (
                                <button
                                    onClick={handleBack}
                                    className="p-3 text-gray-400 dark:text-gray-500 hover:text-gray-600 transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                className="px-6 py-3 bg-[#1E7B7C] text-white rounded-2xl font-black text-sm shadow-xl shadow-[#1E7B7C]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                            >
                                {step.isFinal ? 'Get Started' : 'Continue'}
                                {!step.isFinal && <ChevronRight size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
