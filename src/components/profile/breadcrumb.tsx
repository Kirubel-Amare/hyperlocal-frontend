// components/profile/breadcrumb.tsx
'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbProps {
  items: {
    label: string
    href: string
  }[]
  currentPage: string
}

export function Breadcrumb({ items, currentPage }: BreadcrumbProps) {
  return (
    <nav className="relative z-10 mb-10">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Link 
              href={item.href}
              className="text-gray-400 hover:text-[#1E7B7C] transition-colors uppercase tracking-wider"
            >
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <ChevronRight size={14} className="text-gray-300" />
            )}
          </li>
        ))}
        <li className="text-gray-900 font-semibold uppercase tracking-wider">
          {currentPage}
        </li>
      </ol>
    </nav>
  )
}