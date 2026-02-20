'use client'

import Link from 'next/link'
import {
    LayoutGrid,
    Droplets,
    Brush,
    BookOpen,
    Dog,
    Zap,
    Sprout,
    Hammer
} from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
    { id: 'all', name: 'All Categories', icon: LayoutGrid },
    { id: 'plumbing', name: 'Plumbing', icon: Droplets },
    { id: 'cleaning', name: 'Cleaning', icon: Brush },
    { id: 'tutoring', name: 'Tutoring', icon: BookOpen },
    { id: 'pet-care', name: 'Pet Care', icon: Dog },
    { id: 'electrical', name: 'Electrical', icon: Zap },
    { id: 'gardening', name: 'Gardening', icon: Sprout },
    { id: 'repairs', name: 'Home Repair', icon: Hammer },
]

interface CategoryNavProps {
    activeCategory: string
}

export function CategoryNav({ activeCategory }: CategoryNavProps) {
    return (
        <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 px-3">Categories</h3>
            <nav className="space-y-1">
                {categories.map((category) => {
                    const Icon = category.icon
                    const isActive = activeCategory === category.id

                    return (
                        <Link
                            key={category.id}
                            href={`/services/${category.id}`}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-cyan-50 text-cyan-700 shadow-sm"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <Icon
                                size={18}
                                className={cn(
                                    "transition-colors duration-200",
                                    isActive ? "text-cyan-600" : "text-gray-400 group-hover:text-gray-600"
                                )}
                            />
                            {category.name}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
