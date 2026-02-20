'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Clock, CreditCard, User, Settings, LogOut } from 'lucide-react'

export default function CustomerSidebar() {
    const pathname = usePathname()

    const mainLinks = [
        { name: 'Dashboard', href: '/customer/dashboard', icon: LayoutDashboard },
        { name: 'Service History', href: '/customer/service-history', icon: Clock },
        { name: 'Payments', href: '/customer/payments', icon: CreditCard },
    ]

    const accountLinks = [
        { name: 'Profile Settings', href: '/customer/profile', icon: User },
        { name: 'Preferences', href: '/customer/preferences', icon: Settings },
    ]

    return (
        <aside className="w-64 fixed left-0 top-20 bottom-0 bg-[#FAFBFB] border-r border-gray-100 flex flex-col pt-8 pb-6 overflow-y-auto z-40">

            <div className="px-6 mb-8">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
                    MAIN MENU
                </h4>
                <div className="space-y-1">
                    {mainLinks.map((link) => {
                        const isActive = pathname === link.href
                        const Icon = link.icon
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                                    ? 'bg-[#E8F4F4] text-[#1E7B7C] font-bold'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                            >
                                <Icon size={18} className={isActive ? 'text-[#1E7B7C]' : 'text-gray-500'} />
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="px-6 mb-8">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
                    ACCOUNT
                </h4>
                <div className="space-y-1">
                    {accountLinks.map((link) => {
                        const isActive = pathname === link.href
                        const Icon = link.icon
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                                    ? 'bg-[#E8F4F4] text-[#1E7B7C] font-bold'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                            >
                                <Icon size={18} className={isActive ? 'text-[#1E7B7C]' : 'text-gray-500'} />
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="px-6 mb-auto">
                <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 w-full transition-colors text-left">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>

            {/* Upgrade Plan Card */}
            <div className="px-6 mt-12">
                <div className="bg-[#0b1426] rounded-2xl p-5 text-white shadow-xl relative overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-[#1E7B7C]/5 pointer-events-none" />

                    <p className="text-xs text-gray-400 mb-1">Upgrade your plan</p>
                    <h4 className="text-sm font-bold mb-4">Get 24/7 Priority Support</h4>
                    <button className="w-full bg-[#1E7B7C] hover:bg-[#166566] text-white text-sm font-bold py-2.5 rounded-lg transition-colors shadow-sm shadow-[#1E7B7C]/20">
                        Go Premium
                    </button>
                </div>
            </div>
        </aside>
    )
}
