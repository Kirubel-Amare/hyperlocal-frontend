'use client'

import React from 'react'
import Header from './header'
import { Search, Bell, Settings } from 'lucide-react'
import { useTranslation } from '@/i18n/LanguageContext'

export default function AdminHeader() {
    const { t } = useTranslation()

    return (
        <Header
            userType="customer" // Using customer layout as base for profile menu
            showLoginLink={false}
            showSidebar={true}
            rightElement={
                <div className="flex items-center gap-4">
                    {/* Admin Search */}
                    <div className="hidden lg:flex items-center gap-2 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-[#1E7B7C]/20 transition-all">
                        <Search size={18} className="text-gray-400 dark:text-gray-500" />
                        <input
                            type="text"
                            placeholder={t('header.searchEverything')}
                            className="bg-transparent border-none outline-none text-sm w-full font-medium placeholder:text-gray-400 dark:text-gray-500 dark:text-gray-200"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="relative p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:text-[#1E7B7C] dark:hover:text-cyan-400 hover:bg-[#E8F4F4] dark:hover:bg-gray-800 transition-all duration-300">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full" />
                        </button>
                        <button className="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:text-[#1E7B7C] dark:hover:text-cyan-400 hover:bg-[#E8F4F4] dark:hover:bg-gray-800 transition-all duration-300">
                            <Settings size={20} />
                        </button>
                    </div>
                </div>
            }
        />
    )
}
