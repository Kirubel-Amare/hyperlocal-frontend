'use client'

import React from 'react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface DashboardHeaderProps {
    title: string
    subtitle: React.ReactNode
    action?: {
        label: string
        href: string
        icon?: LucideIcon
        className?: string
    }
}

export default function DashboardHeader({ title, subtitle, action }: DashboardHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
                <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 dark:text-gray-100 tracking-tight mb-2">
                    {title}
                </h1>
                <div className="text-lg text-gray-500 dark:text-gray-400 dark:text-gray-400 font-medium">
                    {subtitle}
                </div>
            </div>
            {action && (
                <Link
                    href={action.href}
                    className={action.className || "px-6 py-3 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-2xl font-black flex items-center gap-2 hover:shadow-xl hover:shadow-[#1E7B7C]/20 transition-all active:scale-95 group"}
                >
                    {action.icon && <action.icon size={18} className="group-hover:rotate-90 transition-transform" />}
                    {action.label}
                </Link>
            )}
        </div>
    )
}
