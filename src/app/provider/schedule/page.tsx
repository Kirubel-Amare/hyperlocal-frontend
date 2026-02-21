'use client'

import React, { useState } from 'react'
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, MapPin, MoreHorizontal, User } from 'lucide-react'

export default function ProviderSchedulePage() {
    const [currentWeek, setCurrentWeek] = useState('Oct 22 - Oct 28, 2023')

    const days = [
        { day: 'Mon', date: '23', active: false },
        { day: 'Tue', date: '24', active: false },
        { day: 'Wed', date: '25', active: true },
        { day: 'Thu', date: '26', active: false },
        { day: 'Fri', date: '27', active: false },
        { day: 'Sat', date: '28', active: false },
        { day: 'Sun', date: '29', active: false },
    ]

    const scheduleEvents = [
        {
            id: 1,
            time: '09:00 AM',
            duration: '2h',
            title: 'Move-out Deep Clean',
            client: 'Sarah Miller',
            location: '122 Oak Street',
            type: 'Job',
            color: 'bg-[#1E7B7C]',
            bg: 'bg-[#E8F4F4]'
        },
        {
            id: 2,
            time: '12:00 PM',
            duration: '1h',
            title: 'Lunch Break',
            client: null,
            location: null,
            type: 'Personal',
            color: 'bg-gray-400',
            bg: 'bg-gray-100'
        },
        {
            id: 3,
            time: '02:00 PM',
            duration: '3h',
            title: 'Post-Construction Tidying',
            client: 'David K.',
            location: '45 Park Lane, Apt 2B',
            type: 'Job',
            color: 'bg-blue-600',
            bg: 'bg-blue-50'
        }
    ]

    return (
        <div className="max-w-6xl relative pb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">My Schedule</h1>
                    <p className="text-lg text-gray-500 font-medium">Manage your availability and upcoming appointments.</p>
                </div>
                <button className="px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                    <CalendarIcon size={18} />
                    Sync Calendar
                </button>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-8 lg:p-10 shadow-xl shadow-gray-200/10 border border-white">

                {/* Calendar Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="flex bg-gray-50 rounded-2xl p-1 border border-gray-100">
                            <button className="p-2.5 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl transition-all shadow-sm">
                                <ChevronLeft size={20} />
                            </button>
                            <button className="p-2.5 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl transition-all shadow-sm">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <h2 className="text-xl font-black text-gray-900">{currentWeek}</h2>
                    </div>
                    <div className="flex p-1 bg-gray-100/50 rounded-2xl border border-gray-100 w-fit">
                        <button className="px-5 py-2 text-gray-400 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">Day</button>
                        <button className="px-5 py-2 bg-white text-[#1E7B7C] shadow-md rounded-xl text-sm font-black transition-all">Week</button>
                        <button className="px-5 py-2 text-gray-400 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">Month</button>
                    </div>
                </div>

                {/* Week View Grid */}
                <div className="mb-10">
                    <div className="grid grid-cols-7 gap-2 lg:gap-4 mb-8">
                        {days.map((d, i) => (
                            <div
                                key={i}
                                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${d.active
                                        ? 'border-[#1E7B7C] bg-[#E8F4F4]'
                                        : 'border-transparent bg-gray-50 hover:bg-gray-100'
                                    }`}
                            >
                                <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${d.active ? 'text-[#1E7B7C]' : 'text-gray-400'}`}>
                                    {d.day}
                                </span>
                                <span className={`text-2xl font-black ${d.active ? 'text-[#1E7B7C]' : 'text-gray-900'}`}>
                                    {d.date}
                                </span>
                                {d.active && <div className="w-1.5 h-1.5 rounded-full bg-[#1E7B7C] mt-2" />}
                            </div>
                        ))}
                    </div>

                    {/* Daily Schedule Timeline */}
                    <div className="relative border-l-2 border-gray-100/50 ml-16 space-y-8 pb-4">
                        {scheduleEvents.map((event) => (
                            <div key={event.id} className="relative pl-8 group">
                                <div className="absolute -left-[76px] top-4 text-xs font-black text-gray-400 w-16 text-right">
                                    {event.time}
                                </div>
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[9px] top-4 w-4 h-4 rounded-full border-[4px] border-white shadow-md z-10 ${event.color}`} />

                                <div className={`p-6 rounded-[24px] border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all ${event.bg}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className={`text-lg font-black ${event.type === 'Job' ? 'text-gray-900' : 'text-gray-600'}`}>
                                            {event.title}
                                        </h4>
                                        <button className="text-gray-400 hover:text-gray-900 transition-colors">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={14} /> {event.duration}
                                        </div>
                                        {event.client && (
                                            <div className="flex items-center gap-1.5 text-gray-900">
                                                <User size={14} className="text-[#1E7B7C]" /> {event.client}
                                            </div>
                                        )}
                                        {event.location && (
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={14} className="text-gray-400" /> {event.location}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Availability Settings block */}
                <div className="bg-gray-50/80 rounded-[32px] p-8 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-black text-gray-900 mb-1">Standard Availability</h3>
                        <p className="text-sm font-medium text-gray-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                    <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto justify-center">
                        Edit Hours
                    </button>
                </div>

            </div>
        </div>
    )
}
