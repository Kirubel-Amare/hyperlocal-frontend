'use client'

import React from 'react'
import { X, Download, Share2, Printer, CheckCircle2, Building2, CreditCard, Receipt } from 'lucide-react'
import { Transaction } from '@/types/payment'

interface ReceiptModalProps {
    transaction: Transaction
    onClose: () => void
}

export default function ReceiptModal({ transaction, onClose }: ReceiptModalProps) {
    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" onClick={onClose} />

            <div className="bg-white dark:bg-gray-950 w-full max-w-lg rounded-[48px] overflow-hidden shadow-2xl relative z-10 border border-white dark:border-gray-800 animate-in zoom-in-95 duration-300">
                {/* Header Decorator */}
                <div className="h-3 bg-gradient-to-r from-[#1E7B7C] via-[#166566] to-[#1E7B7C]" />

                <div className="p-10">
                    <div className="flex justify-between items-start mb-10">
                        <div className="w-16 h-16 bg-[#E8F4F4] dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center text-[#1E7B7C] dark:text-cyan-400">
                            <Receipt size={32} />
                        </div>
                        <button
                            onClick={onClose}
                            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-colors text-gray-400 dark:text-gray-500"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                            <CheckCircle2 size={12} />
                            Payment Successful
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight">{transaction.amount}</h2>
                        <p className="text-gray-500 dark:text-gray-400 font-bold mt-1">{transaction.title}</p>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-dashed border-gray-100 dark:border-gray-800 mb-10">
                        <div className="flex justify-between items-center text-sm font-bold">
                            <span className="text-gray-400 dark:text-gray-500 uppercase tracking-widest text-[10px]">Reference Number</span>
                            <span className="text-gray-900 dark:text-gray-100 font-mono underline decoration-dotted underline-offset-4">{transaction.receiptNumber}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold">
                            <span className="text-gray-400 dark:text-gray-500 uppercase tracking-widest text-[10px]">Transaction Date</span>
                            <span className="text-gray-900 dark:text-gray-100">{transaction.date}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold">
                            <span className="text-gray-400 dark:text-gray-500 uppercase tracking-widest text-[10px]">Payment Method</span>
                            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
                                <CreditCard size={14} className="text-gray-400 dark:text-gray-500" />
                                {transaction.paymentMethod || 'Visa ending in 4242'}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50/80 dark:bg-gray-900/80 rounded-3xl p-6 space-y-3 mb-10 border border-gray-100/50 dark:border-gray-800/50">
                        <div className="flex justify-between items-center text-xs font-bold text-gray-500 dark:text-gray-400">
                            <span>Subtotal</span>
                            <span className="text-gray-900 dark:text-gray-100">$10.00</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-bold text-gray-500 dark:text-gray-400">
                            <span>Platform Fee</span>
                            <span className="text-gray-900 dark:text-gray-100">+$1.20</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-bold text-gray-500 dark:text-gray-400">
                            <span>Estimated Tax</span>
                            <span className="text-gray-900 dark:text-gray-100">+$0.80</span>
                        </div>
                        <div className="h-px bg-gray-200/50 dark:bg-gray-700/50 my-2" />
                        <div className="flex justify-between items-center text-lg font-black text-gray-900 dark:text-gray-100">
                            <span>Total Paid</span>
                            <span>{transaction.amount}</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-gray-900/10 dark:shadow-none">
                            <Download size={18} />
                            PDF
                        </button>
                        <button className="p-4 border border-gray-100 dark:border-gray-800 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95 group">
                            <Printer size={20} className="text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
                        </button>
                        <button className="p-4 border border-gray-100 dark:border-gray-800 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95 group">
                            <Share2 size={20} className="text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
                        </button>
                    </div>
                </div>

                {/* Footer Decorator */}
                <div className="bg-[#1E7B7C]/5 dark:bg-[#1E7B7C]/10 p-6 text-center">
                    <p className="text-[10px] font-black text-[#1E7B7C] dark:text-cyan-500 uppercase tracking-widest flex items-center justify-center gap-2">
                        <Building2 size={12} />
                        Verified by HyperLocal Financial Services
                    </p>
                </div>
            </div>
        </div>
    )
}
