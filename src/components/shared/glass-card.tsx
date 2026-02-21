'use client'

import React from 'react'

interface GlassCardProps {
    children: React.ReactNode
    title?: string
    subtitle?: string
    action?: React.ReactNode
    className?: string
    innerClassName?: string
}

export default function GlassCard({
    children,
    title,
    subtitle,
    action,
    className = "",
    innerClassName = "p-10"
}: GlassCardProps) {
    return (
        <div className={`bg-white/60 backdrop-blur-md rounded-[40px] shadow-xl shadow-gray-200/10 border border-white overflow-hidden ${className}`}>
            {(title || action) && (
                <div className="px-10 pt-10 flex items-center justify-between">
                    <div>
                        {title && <h2 className="text-2xl font-black text-gray-900">{title}</h2>}
                        {subtitle && <p className="text-sm font-medium text-gray-500 mt-1">{subtitle}</p>}
                    </div>
                    {action}
                </div>
            )}
            <div className={innerClassName}>
                {children}
            </div>
        </div>
    )
}
