'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, Bell, HelpCircle } from 'lucide-react'
import { customerDashboardData } from '@/lib/mock-dashboards'
import { useTranslation } from '@/i18n/LanguageContext'
import LanguageSelector from './LanguageSelector'

export default function CustomerHeader() {
    const { user } = customerDashboardData
    const { t } = useTranslation()

    return (
        <header className="h-20 bg-white/80 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between px-8 fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#1E7B7C] rounded-lg flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                            <div className="bg-white rounded-sm" />
                            <div className="bg-white rounded-sm" />
                            <div className="bg-white rounded-sm" />
                            <div className="bg-white rounded-sm" />
                        </div>
                    </div>
                    <span className="text-gray-900 font-bold text-xl tracking-tight">{t('brand.name')}</span>
                </Link>
            </div>

            {/* Global Search */}
            <div className="flex-1 max-w-2xl px-8 hidden md:block">
                <div className="relative flex items-center w-full">
                    <Search size={18} className="absolute left-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder={t('header.searchPlaceholder')}
                        className="w-full bg-gray-50 border-none outline-none rounded-xl py-2.5 pl-11 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#1E7B7C]/20 transition-all"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <LanguageSelector />

                <div className="flex items-center gap-4 border-r border-gray-200 pr-6">
                    <button className="relative p-2 text-gray-600 hover:text-[#1E7B7C] transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-[#1E7B7C] transition-colors bg-gray-100/50 rounded-full">
                        <HelpCircle size={20} className="text-gray-500" />
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
                    <span className="text-sm font-semibold text-gray-700 hidden sm:block">{user.fullName}</span>
                </button>
            </div>
        </header>
    )
}
