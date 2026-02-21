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
        <aside className="w-[280px] fixed left-0 top-20 bottom-0 bg-white/40 backdrop-blur-xl border-r border-gray-100 flex flex-col pt-8 pb-6 overflow-y-auto z-40 shadow-[4px_0_24px_rgba(0,0,0,0.02)] hidden md:flex">
            {/* Top decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

            {/* Profile Header section */}


            {/* Navigation */}
            <nav className="flex-1 px-6 space-y-8 pb-8 relative z-10 w-full">
                {menuGroups.map((group) => (
                    <div key={group.title}>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-3 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-gray-300"></span>
                            {group.title}
                        </h4>
                        <div className="space-y-1.5 w-full">
                            {group.links.map((link) => {
                                const isActive = pathname === link.href || (link.href === '/provider/dashboard' && (pathname === '/provider' || pathname === '/provider/dashboard'))
                                const Icon = link.icon
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 group relative overflow-hidden w-full ${isActive
                                            ? 'text-[#1E7B7C] shadow-sm'
                                            : 'text-gray-500 hover:text-gray-900 hover:bg-white/60'
                                            }`}
                                    >
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#1E7B7C]/10 to-transparent opacity-100" />
                                        )}
                                        <div className={`relative z-10 p-2 rounded-xl transition-colors ${isActive ? 'bg-white shadow-sm text-[#1E7B7C]' : 'bg-transparent text-gray-400 group-hover:text-gray-600'}`}>
                                            <Icon size={18} strokeWidth={2.5} />
                                        </div>
                                        <span className="relative z-10 truncate">{link.name}</span>
                                        {isActive && (
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#1E7B7C] rounded-l-full" />
                                        )}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Bottom Actions */}
            <div className="px-6 mt-auto relative z-10 flex flex-col gap-4">
                <button className="w-full bg-gradient-to-br from-[#1E7B7C] to-[#166566] hover:scale-[1.02] text-white py-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#1E7B7C]/20 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                    <div className="relative z-10 flex items-center gap-2">
                        <Zap size={18} fill="currentColor" />
                        Go Online
                    </div>
                </button>

                <button className="flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 w-full transition-colors transition-all duration-300 group">
                    <div className="p-2 rounded-xl bg-red-50 group-hover:bg-white inset-0 shadow-sm transition-colors">
                        <LogOut size={18} strokeWidth={2.5} />
                    </div>
                    Logout Account
                </button>
            </div>

            {/* Bottom decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </aside>
    )
}
