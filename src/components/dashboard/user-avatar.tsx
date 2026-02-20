// components/dashboard/user-avatar.tsx
'use client'

import Image from 'next/image'

interface UserAvatarProps {
  src?: string
  name: string
  role: string
  size?: 'sm' | 'md' | 'lg'
}

export function UserAvatar({ src, name, role, size = 'md' }: UserAvatarProps) {
  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-xs' },
    md: { container: 'w-10 h-10', text: 'text-sm' },
    lg: { container: 'w-12 h-12', text: 'text-base' }
  }

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizes[size].container} rounded-full overflow-hidden bg-gray-100 flex items-center justify-center`}>
        {src ? (
          <Image src={src} alt={name} width={40} height={40} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        )}
      </div>
      <div>
        <div className={`font-bold text-gray-900 ${sizes[size].text}`}>{name}</div>
        <div className="text-[11px] font-semibold text-gray-400">{role}</div>
      </div>
    </div>
  )
}