'use client'

import React, { useState } from 'react'
import {
    Calendar as CalendarIcon,
    Clock,
    ChevronLeft,
    ChevronRight,
    MapPin,
    MoreHorizontal,
    User,
    Zap,
    AlertTriangle,
    CheckCircle2,
    Plus,
    Lock,
    Unlock,
    Settings,
    RotateCcw
} from 'lucide-react'

export default function ProviderSchedulePage() {
    const [currentWeek, _setCurrentWeek] = useState('Feb 19 - Feb 25, 2024')
    const [autoBooking, setAutoBooking] = useState(true)
    const [selectedDate, setSelectedDate] = useState('21')

    const days = [
        { day: 'Mon', date: '19', active: false },
        { day: 'Tue', date: '20', active: false },
        { day: 'Wed', date: '21', active: true },
        { day: 'Thu', date: '22', active: false },
        { day: 'Fri', date: '23', active: false },
        { day: 'Sat', date: '24', active: false },
        { day: 'Sun', date: '25', active: false },
    ]

    const [scheduleEvents, setScheduleEvents] = useState([
        {
            id: 1,
            time: '09:00 AM',
            duration: '2h',
            title: 'Move-out Deep Clean',
            client: 'Sarah Miller',
            location: '122 Oak Street',
            type: 'Job',
            color: 'bg-[#1E7B7C]',
            bg: 'bg-[#E8F4F4]',
            status: 'Confirmed'
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
            bg: 'bg-gray-100',
            status: 'Blocked'
        },
        {
            id: 3,
            time: '02:00 PM',
            duration: '3h',
            title: 'Post-Construction Tidying',
            client: 'David K.',
            location: '45 Park Lane, Apt 2B',
            type: 'Job',
            color: 'bg-purple-600',
            bg: 'bg-purple-50',
            status: 'Pending'
        }
    ])

    const handleBlockTime = () => {
        const newEvent = {
            id: Date.now(),
            time: '04:00 PM',
            duration: '1h',
            title: 'Schedule Blocked',
            client: null,
            location: null,
            type: 'Personal',
            color: 'bg-amber-500',
            bg: 'bg-amber-50',
            status: 'Blocked'
        }
        setScheduleEvents([...scheduleEvents, newEvent])
    }

    return (
        <div className="max-w-6xl relative pb-24 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2 italic">Smart Scheduling</h1>
                    <p className="text-lg text-gray-500 font-medium italic">AI-driven availability management & auto-booking engine.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-6 py-3 bg-white border border-gray-100 text-gray-900 rounded-2xl font-black flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
                        <Settings size={18} />
                        Calendar Sync
                    </button>
                    <button
                        onClick={handleBlockTime}
                        className="px-6 py-3 bg-gray-900 text-white rounded-2xl font-black flex items-center gap-2 hover:bg-gray-800 transition-all shadow-xl active:scale-95"
                    >
                        <Lock size={18} />
                        Block Time
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Calendar View */}
                <div className="lg:col-span-3 space-y-8">
                    <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[40px] p-8 lg:p-10 shadow-2xl shadow-gray-200/20">
                        {/* Calendar Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="flex bg-gray-50 rounded-2xl p-1 border border-gray-100">
                                    <button className="p-2.5 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl transition-all shadow-sm">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button className="p-2.5 text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl transition-all shadow-sm">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                                <h2 className="text-xl font-black text-gray-900 italic tracking-tighter">{currentWeek}</h2>
                            </div>
                            <div className="flex p-1 bg-gray-100/50 rounded-2xl border border-gray-100 w-fit">
                                <button className="px-5 py-2 text-gray-400 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">Day</button>
                                <button className="px-5 py-2 bg-white text-[#1E7B7C] shadow-md rounded-xl text-sm font-black transition-all italic">Week</button>
                                <button className="px-5 py-2 text-gray-400 hover:text-gray-600 rounded-xl text-sm font-bold transition-all">Month</button>
                            </div>
                        </div>

                        {/* Week View Grid */}
                        <div className="grid grid-cols-7 gap-2 lg:gap-4 mb-10">
                            {days.map((d, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedDate(d.date)}
                                    className={`flex flex-col items-center justify-center p-5 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${d.date === selectedDate
                                        ? 'border-[#1E7B7C] bg-[#E8F4F4] scale-105 shadow-lg'
                                        : 'border-transparent bg-gray-50 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${d.date === selectedDate ? 'text-[#1E7B7C]' : 'text-gray-400'}`}>
                                        {d.day}
                                    </span>
                                    <span className={`text-2xl font-black ${d.date === selectedDate ? 'text-[#1E7B7C]' : 'text-gray-900'}`}>
                                        {d.date}
                                    </span>
                                    {d.date === selectedDate && <div className="w-1.5 h-1.5 rounded-full bg-[#1E7B7C] mt-2 animate-bounce" />}
                                </div>
                            ))}
                        </div>

                        {/* Daily Schedule Timeline */}
                        <div className="relative border-l border-gray-100/50 ml-16 space-y-10 pb-4">
                            {scheduleEvents.map((event) => (
                                <div key={event.id} className="relative pl-10 group animate-in slide-in-from-left-4 duration-500">
                                    <div className="absolute -left-[80px] top-6 text-xs font-black text-gray-400 w-16 text-right italic">
                                        {event.time}
                                    </div>
                                    {/* Timeline Dot */}
                                    <div className={`absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full border-2 border-white shadow-xl z-10 transition-transform group-hover:scale-150 ${event.color}`} />

                                    <div className={`p-8 rounded-[32px] border border-white shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 ${event.bg}`}>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${event.status === 'Confirmed' ? 'bg-emerald-500 text-white' :
                                                            event.status === 'Pending' ? 'bg-purple-500 text-white' :
                                                                'bg-gray-500 text-white'
                                                        }`}>
                                                        {event.status}
                                                    </span>
                                                    {event.status === 'Pending' && <AlertTriangle size={14} className="text-amber-500 animate-pulse" />}
                                                </div>
                                                <h4 className={`text-xl font-black tracking-tight ${event.type === 'Job' ? 'text-gray-900' : 'text-gray-600 italic'}`}>
                                                    {event.title}
                                                </h4>
                                            </div>
                                            <button className="p-2 text-gray-400 hover:text-gray-900 bg-white/50 rounded-xl transition-all">
                                                <MoreHorizontal size={20} />
                                            </button>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-6 text-xs font-black text-gray-500 italic">
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} className="text-[#1E7B7C]" /> {event.duration}
                                            </div>
                                            {event.client && (
                                                <div className="flex items-center gap-2 text-gray-900">
                                                    <User size={16} className="text-purple-600" /> {event.client}
                                                </div>
                                            )}
                                            {event.location && (
                                                <div className="flex items-center gap-2">
                                                    <MapPin size={16} className="text-gray-400" /> {event.location}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Empty Slot Action */}
                            <div className="relative pl-10 group opacity-40 hover:opacity-100 transition-opacity">
                                <div className="absolute -left-[80px] top-4 text-xs font-bold text-gray-300 w-16 text-right italic">06:00 PM</div>
                                <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-gray-200 border-2 border-white" />
                                <button className="w-full py-6 border-2 border-dashed border-gray-100 rounded-[32px] flex items-center justify-center gap-2 text-gray-400 font-black italic hover:border-[#1E7B7C] hover:text-[#1E7B7C] transition-all">
                                    <Plus size={20} /> Add Assignment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scheduling Sidebar */}
                <div className="space-y-6">
                    {/* Auto-Booking Engine */}
                    <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                            <Zap size={100} fill="white" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-amber-500 rounded-2xl">
                                        <Zap size={20} fill="white" className="text-white" />
                                    </div>
                                    <h3 className="font-black italic tracking-tight">Auto-Booking</h3>
                                </div>
                                <button
                                    onClick={() => setAutoBooking(!autoBooking)}
                                    className={`w-14 h-7 rounded-full relative transition-colors duration-500 ${autoBooking ? 'bg-emerald-500' : 'bg-gray-700'}`}
                                >
                                    <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-500 shadow-md ${autoBooking ? 'translate-x-8' : 'translate-x-1'}`} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 font-medium leading-relaxed italic">
                                Automatically accept jobs that match your availability and preferred category settings.
                            </p>
                            <div className="h-px bg-white/10" />
                            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-emerald-400 italic">
                                <span>Engine Active</span>
                                <CheckCircle2 size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Conflict & Smart Detection */}
                    <div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm space-y-6">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Availability Conflicts</h4>

                        <div className="space-y-4">
                            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-4">
                                <AlertTriangle className="text-amber-600 shrink-0" size={18} />
                                <div>
                                    <p className="text-xs font-black text-amber-900">Traffic Overlap</p>
                                    <p className="text-[10px] text-amber-700 font-medium italic">Transit between Job #1 and Job #2 may exceed buffer time by 15 mins.</p>
                                </div>
                            </div>
                            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-4">
                                <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                                <div>
                                    <p className="text-xs font-black text-emerald-900">Optimal Routine</p>
                                    <p className="text-[10px] text-emerald-700 font-medium italic">Schedule looks great! You have 60 total minutes of buffer today.</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-gray-50 border border-gray-100 text-gray-900 rounded-2xl font-black text-xs flex items-center justify-center gap-2 hover:bg-[#1E7B7C] hover:text-white hover:border-transparent transition-all">
                            <RotateCcw size={16} />
                            Optimize Schedule
                        </button>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-100 p-8 rounded-[2.5rem] space-y-4">
                        <h4 className="text-xs font-black text-indigo-900 italic">Business Hours</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-bold text-indigo-700">
                                <span>Mon - Fri</span>
                                <span>09:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between text-xs font-bold text-gray-400">
                                <span>Sat - Sun</span>
                                <span className="italic uppercase text-[10px]">Away</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background element */}
            <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </div>
    )
}
