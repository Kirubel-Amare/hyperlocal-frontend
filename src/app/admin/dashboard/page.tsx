import React from 'react';
import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Activity,
  CheckCircle2,
  Clock,
  AlertCircle,
  Lock
} from 'lucide-react';

const stats = [
  {
    label: 'Total Revenue',
    value: '$124,592.00',
    trend: '+12.5%',
    trendUp: true,
    icon: DollarSign,
    color: 'bg-emerald-500'
  },
  {
    label: 'Active Providers',
    value: '1,284',
    trend: '+5.2%',
    trendUp: true,
    icon: ShoppingBag,
    color: 'bg-[#1E7B7C]'
  },
  {
    label: 'Funds in Escrow',
    value: '$18,420.00',
    trend: '+2.4%',
    trendUp: true,
    icon: Lock,
    color: 'bg-indigo-500'
  },
  {
    label: 'Active Disputes',
    value: '12',
    trend: '-2.4%',
    trendUp: false,
    icon: AlertCircle,
    color: 'bg-amber-500'
  },
];

const recentActivities = [
  { id: 1, type: 'registration', user: 'Mark Wilson', action: 'registered as a Provider', time: '2 mins ago', status: 'success' },
  { id: 2, type: 'payment', user: 'Sarah Miller', action: 'received a $250.00 payment', time: '15 mins ago', status: 'success' },
  { id: 3, type: 'dispute', user: 'John Doe', action: 'opened a dispute for Job #8492', time: '1 hour ago', status: 'warning' },
  { id: 4, type: 'job', user: 'Emma Davis', action: 'completed "Deep House Cleaning"', time: '3 hours ago', status: 'success' },
  { id: 5, type: 'review', user: 'Michael Chen', action: 'left a 5-star review for Sparkle Cleaners', time: '5 hours ago', status: 'success' },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">System Overview</h1>
          <p className="text-gray-500 font-medium">Welcome back, Administrator. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white border border-gray-100 rounded-2xl px-4 py-2.5 shadow-sm hidden sm:flex items-center gap-3">
            <TrendingUp size={18} className="text-emerald-500" />
            <span className="text-sm font-bold text-gray-700">System Performance: <span className="text-emerald-500">Optimal</span></span>
          </div>
          <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-xl border border-gray-100 p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 group">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3.5 rounded-2xl text-white shadow-lg shadow-${stat.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon size={22} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-black px-2.5 py-1.5 rounded-full ${stat.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {stat.trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col min-h-[450px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-gray-900 tracking-tight">Revenue Growth</h3>
              <p className="text-sm text-gray-500 font-medium">Monthly revenue analysis vs previous year</p>
            </div>
            <select className="bg-gray-50 border-none rounded-xl px-4 py-2 text-sm font-bold text-gray-600 outline-none ring-1 ring-gray-100 focus:ring-[#1E7B7C]/20">
              <option>Last 12 Months</option>
              <option>Last 6 Months</option>
              <option>Last 30 Days</option>
            </select>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            {/* Visual representation of a chart */}
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
                <div
                  key={i}
                  className="w-[6%] bg-gradient-to-t from-[#1E7B7C] to-[#1E7B7C]/40 rounded-t-xl transition-all duration-1000 animate-in slide-in-from-bottom"
                  style={{ height: `${height}%`, animationDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-4 pointer-events-none">
              <div className="border-b border-gray-50" />
              <div className="border-b border-gray-50" />
              <div className="border-b border-gray-50" />
              <div className="border-b border-gray-50" />
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-gray-900 tracking-tight">Recent Activity</h3>
            <button className="text-[#1E7B7C] p-2 rounded-xl hover:bg-[#E8F4F4] transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>

          <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-4 group cursor-pointer">
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.status === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    } group-hover:scale-110 transition-transform`}>
                    {activity.type === 'registration' && <Users size={18} />}
                    {activity.type === 'payment' && <DollarSign size={18} />}
                    {activity.type === 'dispute' && <AlertCircle size={18} />}
                    {activity.type === 'job' && <CheckCircle2 size={18} />}
                    {activity.type === 'review' && <Activity size={18} />}
                  </div>
                  {activity.id !== recentActivities.length && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gray-100" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-black text-gray-900">{activity.user}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{activity.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    {activity.action}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3.5 rounded-2xl border-2 border-gray-100 text-gray-500 text-sm font-bold hover:bg-gray-50 hover:border-gray-200 transition-all">
            View All Activities
          </button>
        </div>
      </div>
    </div>
  );
}
