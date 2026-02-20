'use client'

import { Settings as SettingsIcon, Bell, Lock, Shield, CreditCard, HelpCircle, Eye, LogOut, ChevronRight } from 'lucide-react'

export default function ProviderSettingsPage() {
    const sections = [
        {
            title: 'Profile Visibility',
            desc: 'Control how your professional profile appears in search results.',
            icon: Eye,
            color: 'text-blue-500 bg-blue-50'
        },
        {
            title: 'Notification Preferences',
            desc: 'Choose how you want to be alerted about new job requests.',
            icon: Bell,
            color: 'text-[#1E7B7C] bg-[#E8F4F4]'
        },
        {
            title: 'Security & Password',
            desc: 'Update your login credentials and two-factor authentication.',
            icon: Lock,
            color: 'text-purple-500 bg-purple-50'
        },
        {
            title: 'Privacy & Data',
            desc: 'Manage your data permissions and third-party integrations.',
            icon: Shield,
            color: 'text-emerald-500 bg-emerald-50'
        },
        {
            title: 'Billing & Subscriptions',
            desc: 'Manage your Pro membership and payment methods.',
            icon: CreditCard,
            color: 'text-amber-500 bg-amber-50'
        },
        {
            title: 'Help & Support',
            desc: 'Get in touch with our team or browse the FAQ.',
            icon: HelpCircle,
            color: 'text-gray-500 bg-gray-50'
        }
    ]

    return (
        <div className="max-w-6xl relative">
            <div className="mb-10">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Account Settings</h1>
                <p className="text-lg text-gray-500 font-medium">Configure your professional workspace and preferences.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl shadow-gray-200/10 border border-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sections.map((item) => (
                        <div key={item.title} className="group p-8 bg-white/40 rounded-[32px] border border-transparent hover:border-gray-50 hover:shadow-lg transition-all flex items-start gap-6 cursor-pointer">
                            <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-black text-gray-900 group-hover:text-[#1E7B7C] transition-colors">{item.title}</h3>
                                    <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500 transition-all group-hover:translate-x-1" />
                                </div>
                                <p className="text-sm font-medium text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Session Management</p>
                        <p className="text-xs font-bold text-gray-400">You are currently logged in on this Linux device.</p>
                    </div>
                    <button className="px-8 py-4 bg-red-50 text-red-500 rounded-2xl font-black flex items-center gap-2 hover:bg-red-100 transition-all active:scale-95 shadow-sm">
                        <LogOut size={18} />
                        Log Out Everywhere
                    </button>
                </div>
            </div>
        </div>
    )
}
