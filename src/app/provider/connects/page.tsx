'use client'

import React, { useState } from 'react'
import { Zap, CreditCard, Clock, History, ArrowUpRight, ArrowDownRight, Package, Check, HelpCircle, X, ShieldCheck, Lock } from 'lucide-react'

import { useToast } from '@/providers/ToastProvider'
import ReceiptModal from '@/components/modals/ReceiptModal'
import { Transaction } from '@/types/payment'
import { paymentsApi } from '@/lib/api/payments'

export default function ProviderConnectsPage() {
  const { showToast } = useToast()
  const [selectedPkg, setSelectedPkg] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null)
  const [balance, setBalance] = useState(124)

  const handleSelectPackage = (pkg: any) => {
    setSelectedPkg(pkg)
    setShowModal(true)
  }

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      const response = await paymentsApi.processPayment(selectedPkg.price, selectedPkg.connects)
      if (response.success) {
        setBalance(prev => prev + selectedPkg.connects)
        showToast(`${selectedPkg.connects} Connects added to your balance!`, 'success', 'Purchase Successful')
        setShowModal(false)
      }
    } catch (error) {
      showToast('Payment processing failed.', 'error', 'Payment Error')
    } finally {
      setIsProcessing(false)
    }
  }

  const mockLogTransactions: Transaction[] = [
    { id: 'LOG-001', title: 'Connects Purchase - 80 Units', type: 'payment', date: 'Oct 28, 2023', amount: '+$12.00', status: 'completed', receiptNumber: 'RCP-88221' },
    { id: 'LOG-002', title: 'Quote Submission - Deep Cleaning', type: 'fee', date: 'Oct 26, 2023', amount: '-4 Connects', status: 'completed', receiptNumber: 'RCP-88222' },
    { id: 'LOG-003', title: 'Monthly Refresh Reward', type: 'deposit', date: 'Oct 10, 2023', amount: '+60 Connects', status: 'completed', receiptNumber: 'RCP-88223' },
    { id: 'LOG-004', title: 'Bonus - Interview Won', type: 'deposit', date: 'Oct 08, 2023', amount: '+10 Connects', status: 'completed', receiptNumber: 'RCP-88224' },
  ]

  return (
    <div className="max-w-6xl relative pb-24">
      {/* Receipt Modal */}
      {selectedTx && (
        <ReceiptModal
          transaction={selectedTx}
          onClose={() => setSelectedTx(null)}
        />
      )}

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md" onClick={() => !isProcessing && setShowModal(false)} />
          <div className="bg-white/90 backdrop-blur-2xl w-full max-w-lg rounded-[48px] p-10 shadow-2xl relative z-10 border border-white animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowModal(false)}
              disabled={isProcessing}
              className="absolute top-8 right-8 p-2 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-8 font-sans">
              <span className="text-[10px] font-black text-[#1E7B7C] uppercase tracking-widest bg-[#E8F4F4] px-3 py-1 rounded-full mb-4 inline-block">Checkout</span>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Complete Purchase</h2>
              <p className="text-gray-500 font-medium mt-1">Refill your balance with {selectedPkg?.connects} connects.</p>
            </div>

            <div className="bg-gray-50/50 rounded-3xl p-6 mb-8 border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1E7B7C] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#1E7B7C]/20">
                  <Package size={24} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900">{selectedPkg?.connects} Connects Package</h4>
                  <p className="text-xs font-bold text-gray-400">Instant delivery to your account</p>
                </div>
              </div>
              <div className="text-2xl font-black text-gray-900">{selectedPkg?.price}</div>
            </div>

            <form onSubmit={handlePurchase} className="space-y-6">
              <div>
                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Cardholder Name</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 flex gap-1">
                    <div className="w-8 h-5 bg-gray-100 rounded shadow-sm overflow-hidden flex items-center justify-center"><CreditCard size={12} className="text-gray-400" /></div>
                    <div className="w-8 h-5 bg-gray-100 rounded shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Expiry Date</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">CVV</label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    className="w-full bg-white border border-gray-100 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/5 rounded-2xl px-5 py-4 text-gray-900 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 bg-gray-50/50 p-3 rounded-xl border border-gray-100/50 mb-2 justify-center">
                <Lock size={12} />
                Secure 256-bit encrypted transaction
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-5 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-[24px] font-black text-lg hover:shadow-2xl hover:shadow-[#1E7B7C]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <ShieldCheck size={22} />
                    Complete Purchase
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Service Credits</h1>
          <p className="text-lg text-gray-500 font-medium">Manage your connects used for applying to service requests.</p>
        </div>
        <button
          onClick={() => handleSelectPackage({ id: 2, connects: 80, price: '$12.00', popular: true })}
          className="px-8 py-4 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-2xl font-black flex items-center gap-2 hover:shadow-2xl hover:shadow-[#1E7B7C]/30 hover:scale-[1.02] active:scale-95 transition-all group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CreditCard size={18} className="relative z-10" />
          <span className="relative z-10">Purchase Credits</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Core Balance Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-[40px] p-10 shadow-2xl shadow-[#1E7B7C]/20 text-white relative overflow-hidden flex flex-col justify-between h-72 border border-white/10 group">
          {/* Animated decorative element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="flex justify-between items-start relative z-10 mb-8">
            <span className="text-xs font-black text-white/60 uppercase tracking-widest block">Available Balance</span>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
              <Zap size={32} className="text-white fill-white animate-pulse" />
            </div>
          </div>
          <div className="relative z-10">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-7xl font-black tracking-tight drop-shadow-sm">{balance}</span>
              <span className="text-2xl font-bold text-white/70 uppercase tracking-wider">Connects</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-bold bg-white/10 backdrop-blur-md w-fit px-4 py-2 rounded-2xl border border-white/20 shadow-sm">
              <Clock size={16} className="text-[#E8F4F4]" />
              Monthly Refresh in <span className="text-[#E8F4F4]">14 days</span>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 shadow-xl shadow-gray-200/5 border border-white flex flex-col justify-between h-72">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Connects Guide</span>
            <div className="p-2 bg-[#E8F4F4] rounded-xl text-[#1E7B7C]">
              <HelpCircle size={20} />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center bg-white/50 p-4 rounded-2xl border border-gray-100/80 shadow-sm">
                <span className="text-sm font-bold text-gray-600">Standard Job</span>
                <span className="text-sm font-black text-[#1E7B7C] bg-[#E8F4F4] px-3 py-1 rounded-lg">2-4 Units</span>
              </div>
              <div className="flex justify-between items-center bg-white/50 p-4 rounded-2xl border border-gray-100/80 shadow-sm">
                <span className="text-sm font-bold text-gray-600">Premium Lead</span>
                <span className="text-sm font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">6-8 Units</span>
              </div>
            </div>
            <p className="text-[10px] font-black text-gray-400 text-center uppercase tracking-[0.2em]">Dynamic pricing based on demand</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Packages */}
        <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/5 border border-white">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E8F4F4] rounded-xl flex items-center justify-center text-[#1E7B7C]">
                <Package size={22} />
              </div>
              Quick Recharge
            </h2>
          </div>

          <div className="space-y-5">
            {[
              { id: 1, connects: 20, price: '$3.00', popular: false },
              { id: 2, connects: 80, price: '$12.00', popular: true },
              { id: 3, connects: 150, price: '$22.50', popular: false },
            ].map((pkg) => (
              <div key={pkg.id} className={`p-1 rounded-[30px] transition-all relative group ${pkg.popular ? 'bg-gradient-to-r from-[#1E7B7C] to-[#166566] shadow-xl shadow-[#1E7B7C]/20' : 'bg-transparent border border-gray-100'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-8 px-4 py-1.5 bg-[#1E7B7C] text-white text-[10px] font-black uppercase tracking-widest rounded-full border-2 border-white shadow-lg animate-bounce-slow">
                    Most Popular
                  </div>
                )}
                <div
                  onClick={() => handleSelectPackage(pkg)}
                  className="bg-white rounded-[26px] p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${pkg.popular ? 'bg-[#E8F4F4] text-[#1E7B7C]' : 'bg-gray-50 text-gray-400'}`}>
                      <Zap size={28} className={pkg.popular ? 'fill-[#1E7B7C]' : ''} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 leading-tight">{pkg.connects}</h4>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Connects</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-2xl font-black text-gray-900">{pkg.price}</div>
                    <button className={`px-5 py-2.5 rounded-xl font-black text-xs transition-all ${pkg.popular
                      ? 'bg-[#1E7B7C] text-white shadow-lg shadow-[#1E7B7C]/20'
                      : 'bg-[#E8F4F4] text-[#1E7B7C] hover:bg-[#1E7B7C] hover:text-white'
                      }`}>
                      Buy Now
                    </button>
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${pkg.popular ? 'border-[#1E7B7C] bg-[#1E7B7C] shadow-lg shadow-[#1E7B7C]/20' : 'border-gray-100 group-hover:border-[#1E7B7C] group-hover:bg-[#E8F4F4]'}`}>
                      <Check size={18} className={pkg.popular ? 'text-white' : 'text-transparent group-hover:text-[#1E7B7C]'} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/5 border border-white">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                <History size={22} />
              </div>
              Transaction Logs
            </h2>
            <button className="text-[#1E7B7C] font-black text-sm px-4 py-2 hover:bg-[#E8F4F4] rounded-xl transition-colors">View All</button>
          </div>

          <div className="space-y-4">
            {mockLogTransactions.map((log) => (
              <div
                key={log.id}
                onClick={() => setSelectedTx(log)}
                className="flex items-center justify-between p-5 bg-white/40 rounded-[24px] border border-gray-100/50 hover:border-[#1E7B7C]/20 hover:bg-white hover:shadow-lg hover:shadow-gray-200/20 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-2xl transition-transform group-hover:scale-110 ${log.amount.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}>
                    {log.amount.startsWith('+') ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-[15px] mb-0.5">{log.title}</h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{log.date}</p>
                  </div>
                </div>
                <div className={`text-xl font-black ${log.amount.startsWith('+') ? 'text-emerald-500' : 'text-gray-900'}`}>
                  {log.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
