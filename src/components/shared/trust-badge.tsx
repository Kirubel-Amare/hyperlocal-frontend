'use client'

import { motion } from 'framer-motion'
import { Award, ShieldCheck, Zap, Heart, Star, CloudRain as Crown } from 'lucide-react'

export type BadgeType = 'verified' | 'top-rated' | 'fast-responder' | 'community-hero' | 'expert'

interface TrustBadgeProps {
    type: BadgeType
    size?: 'sm' | 'md' | 'lg'
    showLabel?: boolean
}

const badgeConfig = {
    verified: {
        icon: <ShieldCheck size={16} />,
        label: 'Verified',
        color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        iconBg: 'bg-emerald-500'
    },
    'top-rated': {
        icon: <Star size={16} />,
        label: 'Top Rated',
        color: 'bg-amber-50 text-amber-600 border-amber-100',
        iconBg: 'bg-amber-500'
    },
    'fast-responder': {
        icon: <Zap size={16} />,
        label: 'Fast Responder',
        color: 'bg-blue-50 text-blue-600 border-blue-100',
        iconBg: 'bg-blue-500'
    },
    'community-hero': {
        icon: <Heart size={16} />,
        label: 'Community Hero',
        color: 'bg-rose-50 text-rose-600 border-rose-100',
        iconBg: 'bg-rose-500'
    },
    expert: {
        icon: <Award size={16} />,
        label: 'Expert',
        color: 'bg-purple-50 text-purple-600 border-purple-100',
        iconBg: 'bg-purple-500'
    }
}

export default function TrustBadge({ type, size = 'md', showLabel = true }: TrustBadgeProps) {
    const config = badgeConfig[type]

    const sizeClasses = {
        sm: 'px-2 py-0.5 text-[8px]',
        md: 'px-3 py-1.5 text-[10px]',
        lg: 'px-4 py-2 text-xs'
    }

    const iconSizes = {
        sm: 12,
        md: 14,
        lg: 16
    }

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center gap-2 rounded-full border font-black uppercase tracking-widest ${config.color} ${sizeClasses[size]} shadow-sm`}
        >
            <div className={`p-1 rounded-full text-white ${config.iconBg}`}>
                {/* Clone icon with correct size */}
                {/* We can't easily clone with size, so we'll just render config.icon which is already JSX */}
                {config.icon}
            </div>
            {showLabel && <span>{config.label}</span>}
        </motion.div>
    )
}
