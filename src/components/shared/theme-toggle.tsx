'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/providers/ThemeProvider'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2.5 rounded-full bg-white dark:bg-gray-950/50 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white dark:bg-gray-950/80 transition-all focus:outline-none dark:bg-[#1a1c23]/50 dark:border-white/10 dark:hover:bg-[#1a1c23]/80"
                aria-label="Toggle theme"
            >
                <div className="relative w-5 h-5 flex items-center justify-center">
                    <Sun className="h-[1.2rem] w-[1.2rem] transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0 absolute text-amber-500" />
                    <Moon className="h-[1.2rem] w-[1.2rem] transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100 absolute text-indigo-400" />
                </div>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-950 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                        onClick={() => { setTheme('light'); setIsOpen(false) }}
                        className={`w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors text-sm ${theme === 'light' ? 'text-[#1E7B7C] font-semibold' : 'text-gray-700 dark:text-gray-300 dark:text-gray-300'}`}
                    >
                        <div className="flex items-center gap-2 text-amber-500">
                            <Sun className="h-4 w-4" />
                            <span className="text-gray-700 dark:text-gray-300 dark:text-gray-300">Light</span>
                        </div>
                        {theme === 'light' && <span>✓</span>}
                    </button>
                    <button
                        onClick={() => { setTheme('dark'); setIsOpen(false) }}
                        className={`w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors text-sm ${theme === 'dark' ? 'text-[#1E7B7C] font-semibold' : 'text-gray-700 dark:text-gray-300 dark:text-gray-300'}`}
                    >
                        <div className="flex items-center gap-2 text-indigo-400">
                            <Moon className="h-4 w-4" />
                            <span className="text-gray-700 dark:text-gray-300 dark:text-gray-300">Dark</span>
                        </div>
                        {theme === 'dark' && <span>✓</span>}
                    </button>
                    <button
                        onClick={() => { setTheme('system'); setIsOpen(false) }}
                        className={`w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors text-sm ${theme === 'system' ? 'text-[#1E7B7C] font-semibold' : 'text-gray-700 dark:text-gray-300 dark:text-gray-300'}`}
                    >
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 dark:text-gray-400">
                            <Monitor className="h-4 w-4" />
                            <span className="text-gray-700 dark:text-gray-300 dark:text-gray-300">System</span>
                        </div>
                        {theme === 'system' && <span>✓</span>}
                    </button>
                </div>
            )}
        </div>
    )
}
