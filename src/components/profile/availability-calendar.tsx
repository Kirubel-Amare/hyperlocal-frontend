'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react'

export default function AvailabilityCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date())

    // Mock availability
    const availableDays = [14, 15, 18, 19, 20, 24, 25, 26]

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

    const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))

    const monthName = currentDate.toLocaleString('default', { month: 'long' })

    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="h-12 w-full" />)
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const isAvailable = availableDays.includes(d)
        days.push(
            <div key={d} className="relative h-12 w-full flex items-center justify-center">
                <button
                    className={`w-10 h-10 rounded-xl font-bold text-sm transition-all flex flex-col items-center justify-center gap-0.5 ${isAvailable
                            ? 'bg-[#1E7B7C]/10 text-[#1E7B7C] hover:bg-[#1E7B7C] hover:text-white border border-[#1E7B7C]/20'
                            : 'text-gray-400 hover:bg-gray-50'
                        }`}
                >
                    {d}
                    {isAvailable && <div className="w-1 h-1 bg-current rounded-full" />}
                </button>
            </div>
        )
    }

    return (
        <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 border border-white shadow-xl shadow-gray-200/10">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E8F4F4] rounded-xl flex items-center justify-center text-[#1E7B7C]">
                        <CalendarIcon size={20} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-gray-900 leading-none">Availability</h3>
                        <p className="text-[10px] font-black text-[#1E7B7C] uppercase tracking-widest mt-1">Book a slot</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                        <ChevronLeft size={18} />
                    </button>
                    <span className="text-sm font-black text-gray-900 min-w-[100px] text-center">{monthName} {currentDate.getFullYear()}</span>
                    <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                    <div key={day} className="h-8 flex items-center justify-center text-[10px] font-black text-gray-300 uppercase tracking-widest">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {days}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#E8F4F4] border border-[#1E7B7C]/20 rounded-full" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-white border border-gray-100 rounded-full" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Booked</span>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">
                    <Clock size={14} />
                    Custom Request
                </button>
            </div>
        </div>
    )
}
