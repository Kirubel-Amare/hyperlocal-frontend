'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Clock, CreditCard, User, Settings, LogOut } from 'lucide-react'
import { useTranslation } from '@/i18n/LanguageContext'

export default function CustomerSidebar() {
    const pathname = usePathname()
    const { t } = useTranslation()

    const mainLinks = [
        { name: t('sidebar.dashboard'), href: '/customer/dashboard', icon: LayoutDashboard },
        { name: t('sidebar.jobs'), href: '/customer/jobs', icon: Clock },
        { name: t('sidebar.saved'), href: '/customer/saved', icon: User },
        { name: t('sidebar.billing'), href: '/customer/billing', icon: CreditCard },
    ]

    const accountLinks = [
        { name: t('sidebar.settings'), href: '/customer/profile', icon: Settings },
    ]

    return (
        <aside className="w-[280px] fixed left-0 top-20 bottom-0 bg-white/40 dark:bg-gray-950/40 backdrop-blur-xl border-r border-gray-100 dark:border-gray-800 flex flex-col pt-8 pb-6 overflow-y-auto z-40 shadow-[4px_0_24px_rgba(0,0,0,0.02)] hidden md:flex">
            {/* Top decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 dark:from-gray-950/80 to-transparent pointer-events-none" />

            <div className="px-6 mb-8 relative z-10">
                <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 px-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gray-300"></span>
                    {t('sidebar.menu')}
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
                                    ? 'text-[#1E7B7C] dark:text-cyan-400 shadow-sm'
                                    : 'text-gray-500 dark:text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-100 hover:bg-white dark:bg-gray-950/60 dark:hover:bg-gray-800/60'
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E7B7C]/10 dark:from-cyan-400/10 to-transparent opacity-100" />
                                )}
                                <div className={`relative z-10 p-2 rounded-xl transition-colors ${isActive ? 'bg-white dark:bg-gray-950 dark:bg-gray-800 shadow-sm text-[#1E7B7C] dark:text-cyan-400' : 'bg-transparent text-gray-400 dark:text-gray-500 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'}`}>
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
                <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 px-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gray-300"></span>
                    {t('sidebar.account')}
                </h4>
                <div className="space-y-1.5">
                    {accountLinks.map((link) => {
                        const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`)
                        const Icon = link.icon
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 group relative overflow-hidden ${isActive
                                    ? 'text-[#1E7B7C] dark:text-cyan-400 shadow-sm'
                                    : 'text-gray-500 dark:text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-100 hover:bg-white dark:bg-gray-950/60 dark:hover:bg-gray-800/60'
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E7B7C]/10 dark:from-cyan-400/10 to-transparent opacity-100" />
                                )}
                                <div className={`relative z-10 p-2 rounded-xl transition-colors ${isActive ? 'bg-white dark:bg-gray-950 dark:bg-gray-800 shadow-sm text-[#1E7B7C] dark:text-cyan-400' : 'bg-transparent text-gray-400 dark:text-gray-500 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'}`}>
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
                {/* Support Card */}
                <div className="bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-3xl p-6 text-white shadow-xl shadow-[#1E7B7C]/20 relative overflow-hidden mb-6 group cursor-pointer hover:scale-[1.02] transition-transform">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white dark:bg-gray-950/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                    <div className="relative z-10">
                        <h4 className="text-sm font-black mb-1">{t('sidebar.help.title')}</h4>
                        <p className="text-xs text-white/80 font-medium mb-4">{t('sidebar.help.description')}</p>
                        <button className="w-full bg-white dark:bg-gray-950/10 hover:bg-white dark:bg-gray-950/20 backdrop-blur-sm text-white text-xs font-black py-2.5 rounded-xl transition-colors">
                            {t('sidebar.help.button')}
                        </button>
                    </div>
                </div>

                <button className="flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 w-full transition-colors transition-all duration-300 group">
                    <div className="p-2 rounded-xl bg-red-50 dark:bg-red-900/20 group-hover:bg-white dark:bg-gray-950 dark:group-hover:bg-gray-800 inset-0 shadow-sm transition-colors">
                        <LogOut size={18} />
                    </div>
                    {t('sidebar.logout')}
                </button>
            </div>

            {/* Bottom decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" />
        </aside>
    )
}
