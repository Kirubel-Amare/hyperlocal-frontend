// components/dashboard/service-icon.tsx
'use client'

interface ServiceIconProps {
  type: 'plumbing' | 'cleaning' | 'gardening' | 'electrical' | 'default'
  color?: string
}

export function ServiceIcon({ type, color = '#1E7B7C' }: ServiceIconProps) {
  const getIcon = () => {
    switch(type) {
      case 'plumbing':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        )
      case 'cleaning':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        )
      case 'gardening':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 22v-7l-2-2M12 15l2-2M12 15a4 4 0 0 0-4-4h-.5a3.5 3.5 0 0 1 0-7h1a4 4 0 0 0 4-4v0a4 4 0 0 0 4 4h1a3.5 3.5 0 0 1 0 7h-.5a4 4 0 0 0-4 4v0" />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        )
    }
  }

  return (
    <div className="bg-[#F8FAFC] w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ color }}>
      {getIcon()}
    </div>
  )
}