'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Calendar, DollarSign, Star, Settings, Zap, Search, MessageSquare, LogOut, FileText, Briefcase, User, ZapOff, Inbox, Landmark } from 'lucide-react'
import { providerDashboardData } from '@/lib/mock-dashboards'

export default function ProviderSidebar() {
    const pathname = usePathname()
    const { user } = providerDashboardData

    const menuGroups = [
        {
            title: 'MAIN',
            links: [
                { name: 'Dashboard', href: '/provider/dashboard', icon: LayoutDashboard },
                { name: 'Browse Jobs', href: '/jobs', icon: Search },
                { name: 'Messages', href: '/messages', icon: MessageSquare },
            ]
        },
        {
            title: 'MANAGE',
            links: [
                { name: 'Service Requests', href: '/provider/requests', icon: Inbox },
                { name: 'My Quotes', href: '/provider/quotes', icon: FileText },
                { name: 'Ongoing Jobs', href: '/provider/jobs/active', icon: Briefcase },
                { name: 'Service Credits', href: '/provider/connects', icon: Zap },
            ]
        },
        {
            title: 'PROFESSIONAL',
            links: [
                { name: 'Public Profile', href: '/provider/profile', icon: User },
                { name: 'Schedule', href: '/provider/schedule', icon: Calendar },
                { name: 'Financials', href: '/provider/financials', icon: Landmark },
                { name: 'Reviews', href: '/provider/reviews', icon: Star },
            ]
        },
        {
            title: 'ACCOUNT',
            links: [
                { name: 'Settings', href: '/provider/settings', icon: Settings },
            ]
        }
    ]

    return (
        <aside className="w-[280px] h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-50 overflow-y-auto hidden md:flex">

            {/* Profile Header section */}
            <div className="p-8 mb-4">
                <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src={user.avatar}
                            alt={user.name}
                            fill
                            className="object-cover"
                        />
                        {/* Online indicator dot */}
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full z-10" />
                    </div>
                    <div className="min-w-0">
                        <h3 className="font-bold text-gray-900 text-[15px] truncate">{user.name}</h3>
                        <p className="text-xs font-semibold text-[#1E7B7C] truncate">{user.role}</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-8 pb-8">
                {menuGroups.map((group) => (
                    <div key={group.title}>
                        <h4 className="px-5 mb-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                            {group.title}
                        </h4>
                        <div className="space-y-1">
                            {group.links.map((link) => {
                                const isActive = pathname === link.href || (link.href === '/provider/dashboard' && (pathname === '/provider' || pathname === '/provider/dashboard'))
                                const Icon = link.icon
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center gap-4 px-5 py-3 rounded-2xl text-[14px] font-semibold transition-all ${isActive
                                            ? 'bg-[#E8F4F4] text-[#1E7B7C]'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        <Icon size={18} className={isActive ? 'text-[#1E7B7C]' : 'text-gray-400'} strokeWidth={2.5} />
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Logout Section */}
            <div className="px-4 mb-4">
                <button className="w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[15px] font-semibold text-red-500 hover:bg-red-50 transition-all active:scale-95">
                    <LogOut size={20} strokeWidth={2.5} />
                    Logout
                </button>
            </div>

            {/* Bottom Action */}
            <div className="p-5 mt-auto">
                <button className="w-full bg-[#1E7B7C] hover:bg-[#166566] text-white py-3.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#1E7B7C]/20 active:scale-95">
                    <Zap size={18} fill="currentColor" />
                    Go Online
                </button>
            </div>
        </aside>
    )
}
