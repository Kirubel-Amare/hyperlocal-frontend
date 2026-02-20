// components/dashboard/job-card.tsx
'use client'

import { MoreVertical } from 'lucide-react'
import { ServiceIcon } from './service-icon'
import { StatusBadge } from './status-badge'
import { UserAvatar } from './user-avatar'
import { ProgressBar } from './progress-bar'
import { ActionButtons } from './action-buttons'

interface JobCardProps {
  job: {
    id: string
    title: string
    status: string
    type: string
    provider: {
      name: string
      role: string
      avatar?: string
    }
    timing: {
      label: string
      value: string
    }
    isPending?: boolean
    progress?: number
    fee?: string
    feeStatus?: string
    actionText: string
    secondaryActionText: string
  }
}

export function JobCard({ job }: JobCardProps) {
  const getServiceType = (title: string) => {
    if (title.includes('Pipe')) return 'plumbing'
    if (title.includes('Clean')) return 'cleaning'
    if (title.includes('Garden')) return 'gardening'
    return 'default'
  }

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Top Row */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex gap-4">
          <ServiceIcon type={getServiceType(job.title)} color="#1E7B7C" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{job.title}</h3>
            <div className="flex items-center gap-2">
              <StatusBadge status={job.status} />
              <span className="text-gray-300">•</span>
              <span className="text-xs font-medium text-gray-400">{job.type}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Middle Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative">
        <UserAvatar 
          src={job.provider.avatar} 
          name={job.provider.name} 
          role={job.provider.role} 
        />

        {!job.isPending && job.progress && (
          <div className="absolute left-0 right-0 bottom-[-16px] hidden sm:block">
            <ProgressBar progress={job.progress} color="bg-[#1E7B7C]" />
          </div>
        )}

        <div className="sm:text-right">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            {job.timing.label}
          </div>
          <div className="text-sm font-bold text-gray-900">
            {job.timing.value}
          </div>
        </div>
      </div>

      {/* Fee Info */}
      {job.fee && (
        <div className="flex justify-between items-center mb-6 pt-2">
          <span className="text-xs font-semibold text-gray-500">{job.fee}</span>
          <span className="text-xs font-bold text-emerald-500">{job.feeStatus}</span>
        </div>
      )}

      {/* Actions */}
      <ActionButtons 
        primaryAction={{ label: job.actionText }}
        secondaryAction={{ label: job.secondaryActionText }}
        isPending={job.isPending}
      />
    </div>
  )
}