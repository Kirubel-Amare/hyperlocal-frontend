// components/dashboard/action-buttons.tsx
'use client'

import { MessageSquare } from 'lucide-react'

interface ActionButtonsProps {
  primaryAction: {
    label: string
    onClick?: () => void
    variant?: 'primary' | 'secondary'
  }
  secondaryAction: {
    label: string
    onClick?: () => void
  }
  isPending?: boolean
}

export function ActionButtons({ primaryAction, secondaryAction, isPending }: ActionButtonsProps) {
  const primaryButtonStyles = isPending
    ? 'flex-1 bg-[#F1F9F9] hover:bg-[#E2F5F5] text-[#1E7B7C]'
    : 'flex-1 bg-[#1E7B7C] hover:bg-[#166566] text-white'

  return (
    <div className="flex gap-3 mt-4 pt-4 border-t border-gray-50">
      <button 
        className={`${primaryButtonStyles} py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2`}
        onClick={primaryAction.onClick}
      >
        {!isPending && <MessageSquare size={16} />}
        {primaryAction.label}
      </button>
      
      <button 
        className="flex-1 bg-[#F8FAFC] hover:bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-bold transition-colors"
        onClick={secondaryAction.onClick}
      >
        {secondaryAction.label}
      </button>
    </div>
  )
}