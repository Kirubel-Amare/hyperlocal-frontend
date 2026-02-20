'use client'

import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Plus } from 'lucide-react'

export default function ProviderSchedulePage() {
    return (
        <div className="max-w-6xl relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">My Schedule</h1>
                    <p className="text-lg text-gray-500 font-medium">Coordinate your upcoming service appointments.</p>
                </div>
                <button className="px-6 py-3 bg-[#1E7B7C] text-white rounded-2xl font-black flex items-center gap-2 hover:bg-[#166566] transition-all shadow-lg active:scale-95">
                    <Plus size={18} strokeWidth={3} />
                    Block Time
                </button>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-black text-gray-900">October 2023</h2>
                    <div className="flex gap-2">
                        <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-4 mb-8">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">{day}</div>
                    ))}
                    {Array.from({ length: 31 }).map((_, i) => (
                        <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center font-black text-sm cursor-pointer transition-all border border-transparent ${i + 1 === 20 ? 'bg-[#1E7B7C] text-white shadow-lg shadow-[#1E7B7C]/20' : 'hover:bg-gray-50 text-gray-900'
                            }`}>
                            {i + 1}
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-gray-50">
                    <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                        <Clock size={20} className="text-[#1E7B7C]" />
                        Today's Agenda
                    </h3>
                    <div className="space-y-4">
                        <div className="p-6 bg-[#E8F4F4]/50 rounded-[24px] border border-[#1E7B7C]/5 flex items-center justify-between group cursor-pointer hover:bg-[#E8F4F4] transition-colors">
                            <div className="flex items-center gap-6">
                                <div className="text-sm font-black text-[#1E7B7C]">10:00 AM</div>
                                <div>
                                    <h4 className="font-black text-gray-900">Deep Kitchen Cleaning</h4>
                                    <p className="text-xs font-bold text-gray-400">Sarah Miller • 122 Oak St</p>
                                </div>
                            </div>
                            <ChevronRight size={18} className="text-gray-300 group-hover:text-[#1E7B7C] transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
