import { Wallet2, UserPlus, Eye, Check, Zap, ChevronRight, Award, Trash2, Calendar } from 'lucide-react'
import { ROLES } from '@/constants/roles'
import { ROUTES } from '@/constants/routes'
import { STATUSES, STATUS_COLORS } from '@/constants/statuses'
import DashboardHeader from '@/components/shared/dashboard-header'
import StatsCard from '@/components/shared/stats-card'
import GlassCard from '@/components/shared/glass-card'
import ActivityItem from '@/components/shared/activity-item'
import AnalyticsChart from '@/components/dashboard/analytics-chart'
import { useDashboard } from '@/lib/hooks/use-dashboard'
import { ProviderDashboardData } from '@/types/dashboard'

export default function ProviderDashboardPage() {
  const { data, loading } = useDashboard<ProviderDashboardData>(ROLES.PROVIDER)

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1E7B7C]"></div>
      </div>
    )
  }

  const { user, stats, newRequests, upcomingToday } = data

  return (
    <div className="max-w-6xl relative">
      <DashboardHeader
        title="Dashboard Overview"
        subtitle={<>You have <span className="text-[#1E7B7C] font-black">{user.newRequestsCount} new requests</span> waiting for response.</>}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatsCard
          label="TOTAL EARNINGS"
          value={stats.totalEarnings.amount}
          trend={`${stats.totalEarnings.trend} this month`}
          trendUp={stats.totalEarnings.trendUp}
          icon={Wallet2}
        />
        <StatsCard
          label="ACTIVE JOBS"
          value={stats.activeJobs.count}
          subtitle={stats.activeJobs.subtitle}
          icon={UserPlus}
          iconColorClass="text-blue-600"
          iconBgClass="bg-blue-50"
        />
        <StatsCard
          label="PROFILE VIEWS"
          value={stats.profileViews.count}
          trend={stats.profileViews.trend}
          trendUp={stats.profileViews.trendUp}
          icon={Eye}
          iconColorClass="text-purple-600"
          iconBgClass="bg-purple-50"
        />
      </div>

      {/* New Requests */}
      <div className="mb-14">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-black text-gray-900">New Service Requests</h2>
          <button className="text-[#1E7B7C] font-black text-sm hover:underline flex items-center gap-1">
            View My Catalog
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {newRequests.map((req: any) => (
            <ActivityItem
              key={req.id}
              id={req.id}
              title={req.title}
              subtitle={`Sent by ${req.client} • ${req.duration}`}
              image={req.image}
              status={req.urgency}
              statusColor={req.urgencyColor || 'bg-red-50 text-red-500'}
              onClick={() => { }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard
          title="Active Schedule"
          innerClassName="p-10 pt-4"
        >
          <div className="relative border-l-2 border-gray-100/50 ml-[47px] space-y-10 pb-4">
            {upcomingToday.map((event: any) => (
              <div key={event.id} className="relative pl-10 group">
                <div className="absolute -left-[64px] bg-white/80 backdrop-blur-sm text-[10px] font-black text-[#1E7B7C] py-1.5 px-3 rounded-lg border border-gray-50 shadow-sm w-[60px] text-center">
                  {event.time}
                </div>
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-[4px] border-[#1E7B7C] shadow-md z-10 group-hover:scale-125 transition-transform" />
                <h4 className="font-black text-gray-900 text-[16px] group-hover:text-[#1E7B7C] transition-colors">{event.title}</h4>
                <p className="text-sm text-gray-500 font-medium mt-1">{event.location} • Client: {event.client}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <AnalyticsChart
          title="Weekly Impact"
          subtitle="Your localized service reach and earnings analysis."
          type="revenue"
          data={[
            { label: 'Mon', value: 350 },
            { label: 'Tue', value: 600 },
            { label: 'Wed', value: 450 },
            { label: 'Thu', value: 700 },
            { label: 'Fri', value: 850 },
            { label: 'Sat', value: 550 },
            { label: 'Sun', value: 300 }
          ]}
        />
      </div>
    </div>
  )
}
