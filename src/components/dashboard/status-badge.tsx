// components/dashboard/status-badge.tsx
'use client'

interface StatusBadgeProps {
  status: string
  showDot?: boolean
}

export function StatusBadge({ status, showDot = true }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch(status) {
      case 'In Progress':
        return 'bg-[#E8F4F4] text-[#1E7B7C]'
      case 'Pending':
        return 'bg-gray-100 text-gray-600'
      case 'Completed':
        return 'bg-emerald-50 text-emerald-600'
      case 'Scheduled':
        return 'bg-blue-50 text-[#166566]'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${getStatusStyles()}`}>
      {showDot && status === 'In Progress' && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#1E7B7C] inline-block mr-1.5 animate-pulse" />
      )}
      {status}
    </span>
  )
}