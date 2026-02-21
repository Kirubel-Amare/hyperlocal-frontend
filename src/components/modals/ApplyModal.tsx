'use client'

import React, { useState } from 'react'
import { X, Send, Zap, Clock, DollarSign, Calendar, ShieldCheck } from 'lucide-react'
import { Job } from '@/types/job'
import { quotesApi } from '@/lib/api/quotes'
import { useToast } from '@/providers/ToastProvider'

interface ApplyModalProps {
    job: Job
    onClose: () => void
}

export default function ApplyModal({ job, onClose }: ApplyModalProps) {
    const { showToast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [pitch, setPitch] = useState('')
    const [price, setPrice] = useState('')
    const [timeline, setTimeline] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await quotesApi.submitQuote({
                jobId: job.id,
                pitch,
                price,
                timeline,
            })

            if (response.success) {
                showToast('Your quote has been sent to the customer!', 'success', 'Quote Submitted')
                onClose()
            }
        } catch (error) {
            showToast('Failed to submit quote. Please try again.', 'error', 'Submission Error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" onClick={() => !isSubmitting && onClose()} />

            <div className="bg-white/90 backdrop-blur-2xl w-full max-w-2xl rounded-[48px] overflow-hidden shadow-2xl relative z-10 border border-white animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white/50">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2 py-0.5 bg-gray-100 rounded-md">New Proposal</span>
                            <span className="text-[10px] font-black text-[#1E7B7C] uppercase tracking-widest px-2 py-0.5 bg-[#E8F4F4] rounded-md">High Match</span>
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight line-clamp-1">{job.title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        disabled={isSubmitting}
                        className="p-3 hover:bg-gray-100 rounded-2xl transition-colors text-gray-400 hover:text-gray-900"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                    {/* Job Summary Card */}
                    <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100">
                        <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-500 mb-4">
                            <div className="flex items-center gap-2">
                                <DollarSign size={16} className="text-[#1E7B7C]" />
                                <span className="text-gray-900">{job.budget.type === 'Fixed-price' ? job.budget.amount : `${job.budget.minRate}-${job.budget.maxRate}/hr`}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-[#1E7B7C]" />
                                <span className="text-gray-900">{job.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap size={16} className="text-amber-500 fill-amber-500" />
                                <span className="text-gray-900">4 Connects</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{job.description}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Your Pitch</label>
                            <textarea
                                required
                                value={pitch}
                                onChange={(e) => setPitch(e.target.value)}
                                placeholder="Explain why you are the best fit for this job..."
                                className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-3xl px-6 py-5 text-gray-900 outline-none transition-all font-medium placeholder:text-gray-300 min-h-[160px] resize-none shadow-sm"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Proposed Rate</label>
                                <div className="relative">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-black">$</div>
                                    <input
                                        type="text"
                                        required
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl pl-10 pr-6 py-4 text-gray-900 outline-none transition-all font-black placeholder:text-gray-300 shadow-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Timeline</label>
                                <div className="relative">
                                    <Calendar size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        required
                                        value={timeline}
                                        onChange={(e) => setTimeline(e.target.value)}
                                        placeholder="e.g., 3 days"
                                        className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl pl-14 pr-6 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1E7B7C]/5 rounded-3xl p-6 flex items-center justify-between border border-[#1E7B7C]/10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1E7B7C] shadow-sm">
                                    <Zap size={24} className="fill-[#1E7B7C]" />
                                </div>
                                <div>
                                    <h4 className="font-black text-gray-900 text-sm">Connects Required: 4</h4>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Balance after: 120 Connects</p>
                                </div>
                            </div>
                            <ShieldCheck size={24} className="text-[#1E7B7C] opacity-50" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-5 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-[24px] font-black text-lg hover:shadow-2xl hover:shadow-[#1E7B7C]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-[#1E7B7C]/20"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending Quote...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Submit Proposal
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
