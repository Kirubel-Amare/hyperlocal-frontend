// components/landing/TrustBadge.tsx
import { ReactNode } from 'react'

interface TrustBadgeProps {
  icon: ReactNode
  text: string
}

export default function TrustBadge({ icon, text }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-cyan-600">{icon}</div>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  )
}