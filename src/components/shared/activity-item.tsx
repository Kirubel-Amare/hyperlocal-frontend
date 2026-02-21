'use client'

import React from 'react'
import Image from 'next/image'

interface ActivityItemProps {
    id: string
    title: string
    subtitle: string
    amount?: string | number
    status?: string
    statusColor?: string
    image?: string
    avatar?: string
    time?: string
    onClick?: () => void
}

export default function ActivityItem({
    title,
    subtitle,
    amount,
    status,
    statusColor = 'bg-gray-100 text-gray-600',
    image,
    avatar,
    time,
    onClick
}: ActivityItemProps) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-gray-100/50 dark:border-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors group cursor-pointer`}
        >
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden relative shadow-sm border border-transparent dark:border-gray-700">
                    {(image || avatar) ? (
                        <Image
                            src={image || avatar || ''}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-[#1E7B7C]/10 dark:bg-[#1E7B7C]/20" />
                    )}
                </div>
                <div>
                    <h4 className="font-black text-gray-900 dark:text-gray-100 dark:text-gray-100 text-sm mb-0.5">{title}</h4>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 dark:text-gray-400">
                        {subtitle} {time && `• ${time}`}
                    </p>
                </div>
            </div>
            <div className="text-right">
                {amount && <div className="text-sm font-black text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-1">{amount}</div>}
                {status && (
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${statusColor}`}>
                        {status}
                    </span>
                )}
            </div>
        </div>
    )
}
