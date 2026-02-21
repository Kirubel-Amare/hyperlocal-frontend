'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, Bell, HelpCircle } from 'lucide-react'
import { customerDashboardData } from '@/lib/mock-dashboards'
import { useTranslation } from '@/i18n/LanguageContext'
import LanguageSelector from './LanguageSelector'
import { ThemeToggle } from '@/components/shared/theme-toggle'
export default function CustomerHeader() {
    const { user } = customerDashboardData
    const { t } = useTranslation()

    return (
        <header className="h-20 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-8 fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#1E7B7C] rounded-lg flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                            <div className="bg-white dark:bg-gray-950 rounded-sm" />
                            <div className="bg-white dark:bg-gray-950 rounded-sm" />
                            <div className="bg-white dark:bg-gray-950 rounded-sm" />
                            <div className="bg-white dark:bg-gray-950 rounded-sm" />
                        </div>
                    </div>
                    <span className="text-gray-900 dark:text-gray-100 dark:text-gray-100 font-bold text-xl tracking-tight">{t('brand.name')}</span>
                </Link>
            </div>



            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <ThemeToggle />
                <LanguageSelector />

                <div className="flex items-center gap-4 border-r border-gray-200 dark:border-gray-800 pr-6">
                    <button className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-[#1E7B7C] dark:hover:text-cyan-400 transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full" />
                    </button>
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-[#1E7B7C] dark:hover:text-cyan-400 transition-colors bg-gray-100/50 dark:bg-gray-800/50 rounded-full">
                        <HelpCircle size={20} className="text-gray-500 dark:text-gray-400 dark:text-gray-400" />
                    </button>
                </div>

                <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <Image
                        src={user.avatar}
                        alt={user.fullName}
                        width={36}
                        height={36}
                        className="rounded-full bg-orange-100"
                    />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 dark:text-gray-200 hidden sm:block">{user.fullName}</span>
                </button>
            </div>
        </header>
    )
}
