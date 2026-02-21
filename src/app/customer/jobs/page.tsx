'use client'

import { useState } from 'react'
import { Briefcase, Clock, CheckCircle2, Search, Filter, MoreHorizontal, Star } from 'lucide-react'
import { customerDashboardData } from '@/lib/mock-dashboards'
import { useTranslation } from '@/i18n/LanguageContext'

export default function CustomerJobsPage() {
    const { ongoingServices, serviceHistory } = customerDashboardData
    const { t } = useTranslation()
    const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'completed'>('active')

    const tabs = [
        { id: 'active', label: t('jobs.tabs.active'), count: ongoingServices.length, icon: Briefcase },
        { id: 'pending', label: t('jobs.tabs.pending'), count: 1, icon: Clock },
        { id: 'completed', label: t('jobs.tabs.completed'), count: serviceHistory?.length || 0, icon: CheckCircle2 }
    ] as const

    const currentTabLabel = tabs.find(tab => tab.id === activeTab)?.label || ''

    return (
        <div className="max-w-6xl relative pb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                        {t('jobs.title')}
                    </h1>
                    <p className="text-lg text-gray-500 font-medium">
                        {t('jobs.description')}
                    </p>
                </div>
            </div>

            {/* Custom Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id
                    const Icon = tab.icon
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${isActive
                                ? 'bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white shadow-lg shadow-[#1E7B7C]/20 scale-105'
                                : 'bg-white/60 backdrop-blur-md text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-md'
                                }`}
                        >
                            <Icon size={16} />
                            {tab.label}
                            <span className={`px-2 py-0.5 rounded-full text-[10px] ml-1 ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                {tab.count}
                            </span>
                        </button>
                    )
                })}
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder={t('jobs.searchPlaceholder', { tab: currentTabLabel })}
                        className="w-full bg-white/60 backdrop-blur-md border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-[#1E7B7C]/20 shadow-sm"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl text-gray-700 font-bold text-sm hover:bg-white transition-colors shadow-sm whitespace-nowrap">
                    <Filter size={18} />
                    {t('jobs.filters')}
                </button>
            </div>

            {/* Content Area */}
            <div className="space-y-6">
                {activeTab === 'active' && (
                    ongoingServices.map((service: any) => (
                        <div key={service.id} className="bg-white/60 backdrop-blur-md rounded-[32px] p-6 shadow-xl shadow-gray-200/10 border border-white flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-all duration-500 group">
                            {/* Provider Info */}
                            <div className="flex flex-col items-center md:w-48 shrink-0 text-center gap-3 pr-6 md:border-r border-gray-100">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden relative shadow-md group-hover:scale-105 transition-transform duration-500">
                                    <img src={service.provider.avatar} alt={service.provider.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-black text-gray-900">{service.provider.name}</h4>
                                    <div className="flex items-center justify-center gap-1 text-xs font-bold text-gray-500">
                                        <Star size={12} className="text-amber-400 fill-amber-400" />
                                        4.9
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-gray-50 hover:bg-[#E8F4F4] text-[#1E7B7C] rounded-xl text-xs font-bold w-full transition-colors">
                                    {t('jobs.message')}
                                </button>
                            </div>

                            {/* Job Details */}
                            <div className="flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg">
                                                {service.status}
                                            </span>
                                            <span className="text-xs font-bold text-gray-400">{t('jobs.jobId', { id: service.id })}</span>
                                        </div>
                                        <h3 className="text-xl font-black text-gray-900">{service.title}</h3>
                                    </div>
                                    <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg-gray-50/50 p-4 rounded-2xl">
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 block mb-1">{t('jobs.dateTime')}</span>
                                        <span className="text-sm font-black text-gray-900">{service.date}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 block mb-1">{t('jobs.agreedPrice')}</span>
                                        <span className="text-sm font-black text-gray-900">{service.amount}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 block mb-1">{t('jobs.location')}</span>
                                        <span className="text-sm font-black text-gray-900 line-clamp-1" title={service.location}>{service.location}</span>
                                    </div>
                                </div>

                                <div className="mt-auto flex justify-end gap-3 border-t border-gray-100 pt-4">
                                    <button className="px-6 py-2.5 border-2 border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                        {t('jobs.reschedule')}
                                    </button>
                                    <button className="px-6 py-2.5 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-[#1E7B7C]/20 transition-all active:scale-95">
                                        {t('jobs.viewDetails')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                {activeTab === 'pending' && (
                    <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-12 shadow-xl shadow-gray-200/10 border border-white flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                            <Clock size={32} className="text-orange-400" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">{t('jobs.pendingTitle', { count: 1 })}</h3>
                        <p className="text-gray-500 font-medium mb-8 max-w-sm">
                            {t('jobs.pendingDescription', { title: "Exterior House Painting" })}
                        </p>
                        <button className="px-6 py-3 border-2 border-[#1E7B7C] text-[#1E7B7C] rounded-xl font-bold text-sm hover:bg-[#1E7B7C] hover:text-white transition-colors">
                            {t('jobs.viewRequestDetails')}
                        </button>
                    </div>
                )}

                {activeTab === 'completed' && serviceHistory && (
                    serviceHistory.map((service: any) => (
                        <div key={service.id} className="bg-white/60 backdrop-blur-md rounded-[32px] p-6 shadow-xl shadow-gray-200/10 border border-white flex flex-col md:flex-row items-center gap-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden relative shadow-sm shrink-0">
                                <img src={service.provider.avatar} alt={service.provider.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-lg font-black text-gray-900 truncate">{service.title}</h3>
                                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md shrink-0">
                                        {t('jobs.tabs.completed')}
                                    </span>
                                </div>
                                <p className="text-sm font-bold text-gray-500 truncate">
                                    {t('jobs.finishedBy', { name: service.provider.name, date: service.date })}
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-2 shrink-0">
                                <span className="text-lg font-black text-gray-900">{service.amount}</span>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} size={14} className={i <= service.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"} />
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pl-4 border-l border-gray-100 shrink-0">
                                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-xs transition-colors">
                                    {t('jobs.receipt')}
                                </button>
                                <button className="px-4 py-2 border-2 border-[#1E7B7C] text-[#1E7B7C] rounded-xl font-bold text-xs hover:bg-[#1E7B7C] hover:text-white transition-colors">
                                    {t('jobs.bookAgain')}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
