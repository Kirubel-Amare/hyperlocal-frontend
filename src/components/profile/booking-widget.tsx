// components/profile/booking-widget.tsx
'use client'

import { useState } from 'react'
import { Calendar, Clock, Shield, RefreshCcw, CreditCard, MessageCircle, ChevronRight, CheckCircle } from 'lucide-react'

interface BookingWidgetProps {
    hourlyRate: number
    responseTime: string
    name: string
}

export function BookingWidget({ hourlyRate, responseTime, name }: BookingWidgetProps) {
    const [selectedDate, setSelectedDate] = useState<number | null>(3)
    const [selectedTime, setSelectedTime] = useState<string | null>('09:00 AM')
    const [bookingStep, setBookingStep] = useState<'date' | 'time' | 'confirm'>('date')

    const dates = [
        { day: 'MON', date: '29', disabled: true },
        { day: 'TUE', date: '30', disabled: true },
        { day: 'WED', date: '1', disabled: false },
        { day: 'THU', date: '2', disabled: false },
        { day: 'FRI', date: '3', disabled: false, active: true },
        { day: 'SAT', date: '4', disabled: false },
        { day: 'SUN', date: '5', disabled: false },
    ]

    const timeSlots = [
        { time: '09:00 AM', available: true, price: hourlyRate },
        { time: '10:00 AM', available: true, price: hourlyRate },
        { time: '11:00 AM', available: false, price: hourlyRate },
        { time: '01:00 PM', available: true, price: hourlyRate },
        { time: '02:00 PM', available: true, price: hourlyRate },
        { time: '03:00 PM', available: false, price: hourlyRate },
        { time: '04:30 PM', available: true, price: hourlyRate },
        { time: '05:30 PM', available: true, price: hourlyRate },
    ]

    const calculateTotal = () => {
        const hours = 2 // Example: 2-hour booking
        return hourlyRate * hours
    }

    return (
        <div className="sticky top-28">
            <div className="bg-white/80 backdrop-blur-2xl rounded-[2rem] border border-white/80 shadow-2xl shadow-gray-200/50 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1E7B7C] to-[#166566] p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium opacity-90">Starting from</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">⚡ {responseTime}</span>
                    </div>
                    <div className="flex items-end gap-1">
                        <span className="text-4xl font-black">${hourlyRate}</span>
                        <span className="text-sm opacity-90 mb-1">/ hour</span>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-between px-6 pt-6">
                    {['date', 'time', 'confirm'].map((step, index) => (
                        <div key={step} className="flex items-center">
                            <div className={`flex items-center gap-2 ${bookingStep === step ? 'text-[#1E7B7C]' : 'text-gray-400'
                                }`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${bookingStep === step
                                    ? 'bg-[#1E7B7C] text-white shadow-lg shadow-[#1E7B7C]/20'
                                    : index < ['date', 'time', 'confirm'].indexOf(bookingStep)
                                        ? 'bg-emerald-500 text-white'
                                        : 'bg-gray-100 text-gray-400'
                                    }`}>
                                    {index < ['date', 'time', 'confirm'].indexOf(bookingStep) ? (
                                        <CheckCircle size={14} />
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <span className="text-xs font-medium hidden sm:block capitalize">{step}</span>
                            </div>
                            {index < 2 && (
                                <div className={`w-8 h-0.5 mx-2 ${index < ['date', 'time', 'confirm'].indexOf(bookingStep)
                                    ? 'bg-emerald-500'
                                    : 'bg-gray-200'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Date Selection */}
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                            <Calendar size={16} className="text-[#1E7B7C]" />
                            Select Date
                        </h3>
                        <span className="text-xs font-medium text-[#1E7B7C] bg-[#E8F4F4] px-3 py-1 rounded-full">
                            November 2023
                        </span>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                            <div key={i} className="text-center text-xs font-medium text-gray-400 py-2">
                                {day}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-6">
                        {dates.map((d, i) => (
                            <button
                                key={i}
                                disabled={d.disabled}
                                onClick={() => setSelectedDate(i)}
                                className={`relative p-2 rounded-xl text-sm transition-all ${selectedDate === i
                                    ? 'bg-gradient-to-br from-[#1E7B7C] to-[#166566] text-white shadow-lg shadow-[#1E7B7C]/20 scale-105'
                                    : d.disabled
                                        ? 'text-gray-300 cursor-not-allowed'
                                        : 'text-gray-700 hover:bg-gray-100 hover:scale-105'
                                    }`}
                            >
                                <span className="font-bold">{d.date}</span>
                                {d.day && (
                                    <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${d.disabled ? 'bg-gray-200' : 'bg-[#1E7B7C]'
                                        }`} />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Time Slots */}
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
                            <Clock size={16} className="text-[#1E7B7C]" />
                            Available Time Slots
                        </h3>

                        <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((slot) => (
                                <button
                                    key={slot.time}
                                    disabled={!slot.available}
                                    onClick={() => setSelectedTime(slot.time)}
                                    className={`p-3 rounded-xl text-xs font-medium transition-all ${selectedTime === slot.time
                                        ? 'bg-[#1E7B7C] text-white shadow-lg shadow-[#1E7B7C]/20 scale-105'
                                        : slot.available
                                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                                            : 'bg-gray-50 text-gray-300 cursor-not-allowed line-through'
                                        }`}
                                >
                                    {slot.time}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Service fee ({hourlyRate}/hr × 2hrs)</span>
                                <span className="font-medium">${calculateTotal()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Platform fee</span>
                                <span className="font-medium">$5.00</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-gray-200">
                                <span className="font-bold text-gray-900">Total</span>
                                <span className="font-black text-[#1E7B7C]">${calculateTotal() + 5}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button className="relative w-full group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1E7B7C] to-[#166566] rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                            <div className="relative w-full py-4 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-xl transition-all">
                                Confirm Booking
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>

                        <button className="w-full py-4 border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                            <MessageCircle size={16} />
                            Message {name.split(' ')[0]}
                        </button>
                    </div>

                    {/* Guarantees */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Shield size={16} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900">Secure Payment</p>
                                    <p className="text-[10px] text-gray-500">Protected</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#166566]">
                                    <RefreshCcw size={16} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900">Free Cancellation</p>
                                    <p className="text-[10px] text-gray-500">Within 24h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <div className="w-8 h-5 bg-gray-200 rounded" />
                        <div className="w-8 h-5 bg-gray-200 rounded" />
                        <div className="w-8 h-5 bg-gray-200 rounded" />
                        <span className="text-xs text-gray-400 ml-2">+ more</span>
                    </div>
                </div>
            </div>
        </div>
    )
}