'use client'

import React from 'react'
import Header from './header'
import { Search, Bell, Settings } from 'lucide-react'

export default function AdminHeader() {
    return (
        <Header
            userType="customer" // Using customer layout as base for profile menu
            showLoginLink={false}
            showSidebar={true}
            rightElement={
                <div className="flex items-center gap-4">
                    {/* Admin Search */}
                    <div className="hidden lg:flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-[#1E7B7C]/20 transition-all">
                        <Search size={18} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search everything..."
                            className="bg-transparent border-none outline-none text-sm w-full font-medium placeholder:text-gray-400"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="relative p-2.5 rounded-xl text-gray-600 hover:text-[#1E7B7C] hover:bg-[#E8F4F4] transition-all duration-300">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full" />
                        </button>
                        <button className="p-2.5 rounded-xl text-gray-600 hover:text-[#1E7B7C] hover:bg-[#E8F4F4] transition-all duration-300">
                            <Settings size={20} />
                        </button>
                    </div>
                </div>
            }
        />
    )
}
