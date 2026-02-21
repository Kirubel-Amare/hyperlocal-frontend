'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    Users,
    Layers,
    CreditCard,
    AlertCircle,
    Settings,
    LogOut,
    ShieldCheck,
    BarChart3,
    Briefcase,
    MessageSquare,
    Star,
    Wallet
} from 'lucide-react'

export default function AdminSidebar() {
    const pathname = usePathname()

    const mainLinks = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'User Management', href: '/admin/users', icon: Users },
        { name: 'Jobs Management', href: '/admin/jobs', icon: Briefcase },
        { name: 'Categories', href: '/admin/categories', icon: Layers },
        { name: 'Chats & Messages', href: '/admin/chats', icon: MessageSquare },
        { name: 'Reviews & Ratings', href: '/admin/reviews', icon: Star },
        { name: 'Payment Methods', href: '/admin/payments', icon: Wallet },
        { name: 'Transactions', href: '/admin/transactions', icon: CreditCard },
        { name: 'Disputes', href: '/admin/disputes', icon: AlertCircle },
    ]

    const systemLinks = [
        { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
        { name: 'System Settings', href: '/admin/settings', icon: Settings },
    ]

    return (
        <aside className="w-[280px] fixed left-0 top-20 bottom-0 bg-white/40 backdrop-blur-xl border-r border-gray-100 flex flex-col pt-8 pb-6 overflow-y-auto z-40 shadow-[4px_0_24px_rgba(0,0,0,0.02)] hidden md:flex">
            {/* Top decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

            <div className="px-6 mb-8 relative z-10">
                <div className="flex items-center gap-3 px-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-[#1E7B7C] flex items-center justify-center text-white shadow-lg shadow-[#1E7B7C]/20">
                        <ShieldCheck size={18} />
                    </div>
                    <span className="font-black text-gray-900 tracking-tight">Admin Portal</span>
                </div>

                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gray-300"></span>
                    Management
                </h4>
                <div className="space-y-1.5">
                    {mainLinks.map((link) => {
                        const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`)
                        const Icon = link.icon
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 group relative overflow-hidden ${isActive
                                    ? 'text-[#1E7B7C] shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-white/60'
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E7B7C]/10 to-transparent opacity-100" />
                                )}
                                <div className={`relative z-10 p-2 rounded-xl transition-colors ${isActive ? 'bg-white shadow-sm text-[#1E7B7C]' : 'bg-transparent text-gray-400 group-hover:text-gray-600'}`}>
                                    <Icon size={18} />
                                </div>
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#1E7B7C] rounded-l-full" />
                                )}
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="px-6 mb-8 relative z-10">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gray-300"></span>
                    System
                </h4>
                <div className="space-y-1.5">
                    {systemLinks.map((link) => {
                        const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`)
                        const Icon = link.icon
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 group relative overflow-hidden ${isActive
                                    ? 'text-[#1E7B7C] shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-white/60'
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E7B7C]/10 to-transparent opacity-100" />
                                )}
                                <div className={`relative z-10 p-2 rounded-xl transition-colors ${isActive ? 'bg-white shadow-sm text-[#1E7B7C]' : 'bg-transparent text-gray-400 group-hover:text-gray-600'}`}>
                                    <Icon size={18} />
                                </div>
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#1E7B7C] rounded-l-full" />
                                )}
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="px-6 mt-auto relative z-10">
                {/* Admin Status Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white shadow-xl shadow-black/5 relative overflow-hidden mb-6 group cursor-pointer hover:scale-[1.02] transition-transform">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                    <div className="relative z-10">
                        <h4 className="text-sm font-black mb-1">System Status</h4>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider">All Systems Operational</p>
                        </div>
                        <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs font-black py-2.5 rounded-xl transition-colors border border-white/10">
                            View Server Logs
                        </button>
                    </div>
                </div>

                <button className="flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 w-full transition-colors transition-all duration-300 group">
                    <div className="p-2 rounded-xl bg-red-50 group-hover:bg-white inset-0 shadow-sm transition-colors">
                        <LogOut size={18} />
                    </div>
                    Exit Admin Portal
                </button>
            </div>

            {/* Bottom decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </aside>
    )
}
