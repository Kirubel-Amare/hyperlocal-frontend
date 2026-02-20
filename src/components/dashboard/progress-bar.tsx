// components/dashboard/progress-bar.tsx
'use client'

interface ProgressBarProps {
  progress: number
  color?: string
  height?: string
  showLabel?: boolean
}

export function ProgressBar({ 
  progress, 
  color = 'bg-[#1E7B7C]', 
  height = 'h-1.5',
  showLabel = false 
}: ProgressBarProps) {
  return (
    <div className="relative">
      <div className={`${height} bg-gray-100 rounded-full overflow-hidden`}>
        <div 
          className={`${color} rounded-full transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {showLabel && (
        <span className="absolute -right-8 -top-1 text-xs font-bold text-[#1E7B7C]">
          {progress}%
        </span>
      )}
    </div>
  )
}