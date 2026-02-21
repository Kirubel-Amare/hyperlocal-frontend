'use client'

import React, { useState } from 'react'
import { Settings, Shield, Bell, CreditCard, Lock, Smartphone, Mail, Globe, Check, Trash2 } from 'lucide-react'

export default function ProviderSettingsPage() {
    const [activeTab, setActiveTab] = useState('account')

    return (
        <div className="max-w-6xl relative pb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">Account Settings</h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Manage your security, notifications, and platform preferences.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Sidebar Nav */}
                <div className="lg:col-span-1 border-r border-gray-100 dark:border-gray-800 pr-6 hidden lg:block">
                    <div className="sticky top-[100px] flex flex-col gap-2">
                        {[
                            { id: 'account', label: 'Account Details', icon: Settings },
                            { id: 'security', label: 'Password & Security', icon: Shield },
                            { id: 'notifications', label: 'Notifications', icon: Bell },
                            { id: 'billing', label: 'Membership & Billing', icon: CreditCard },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 text-left px-5 py-3.5 rounded-2xl font-bold text-sm transition-all ${activeTab === tab.id
                                        ? 'bg-[#E8F4F4] text-[#1E7B7C] shadow-inner'
                                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-900'
                                    }`}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">

                    {activeTab === 'account' && (
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10">
                                <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">First Name</label>
                                            <input type="text" defaultValue="Alex" className="w-full px-5 py-4 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 rounded-xl font-bold text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#1E7B7C]" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Last Name</label>
                                            <input type="text" defaultValue="Johnson" className="w-full px-5 py-4 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 rounded-xl font-bold text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#1E7B7C]" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                                        <div className="flex relative">
                                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                                            <input type="email" defaultValue="alex.j@example.com" className="w-full pl-10 pr-5 py-4 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 rounded-xl font-bold text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#1E7B7C]" />
                                        </div>
                                        <p className="text-xs font-bold text-emerald-500 mt-2 flex items-center gap-1"><Check size={14} /> Email Verified</p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                                    <button className="px-8 py-3.5 bg-[#1E7B7C] text-white rounded-xl font-black text-sm shadow-md hover:bg-[#166566] transition-colors">
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            <div className="bg-red-50/50 border border-red-100 rounded-[32px] p-8">
                                <h3 className="text-xl font-black text-red-900 mb-2">Deactivate Account</h3>
                                <p className="text-sm font-medium text-red-700/80 mb-6">This will hide your profile and active proposals from clients. You can reactivate anytime.</p>
                                <button className="px-6 py-3 bg-white dark:bg-gray-950 text-red-600 border border-red-200 rounded-xl font-black text-sm shadow-sm hover:bg-red-50 transition-colors flex items-center gap-2">
                                    <Trash2 size={16} /> Deactivate My Account
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-8">Password & Security</h2>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-800 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50">
                                    <div className="flex gap-4 items-center">
                                        <div className="p-3 bg-white dark:bg-gray-950 text-[#1E7B7C] rounded-xl shadow-sm"><Lock size={20} /></div>
                                        <div>
                                            <h4 className="font-black text-gray-900 dark:text-gray-100">Password</h4>
                                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400">Last changed 3 months ago</p>
                                        </div>
                                    </div>
                                    <button className="text-[#1E7B7C] font-black text-sm hover:underline">Change</button>
                                </div>
                                <div className="flex items-center justify-between p-4 border border-emerald-100 rounded-2xl bg-emerald-50/50">
                                    <div className="flex gap-4 items-center">
                                        <div className="p-3 bg-white dark:bg-gray-950 text-emerald-600 rounded-xl shadow-sm"><Smartphone size={20} /></div>
                                        <div>
                                            <h4 className="font-black text-emerald-900">Two-Factor Authentication</h4>
                                            <p className="text-xs font-bold text-emerald-700">Enabled via Authenticator App</p>
                                        </div>
                                    </div>
                                    <button className="text-emerald-700 font-black text-sm hover:underline">Manage</button>
                                </div>
                            </div>

                            <h3 className="text-lg font-black text-gray-900 dark:text-gray-100 mb-4">Active Sessions</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-4 border-b border-gray-100 dark:border-gray-800">
                                    <div className="flex gap-3 items-center">
                                        <Globe size={18} className="text-[#1E7B7C]" />
                                        <div>
                                            <p className="font-bold text-sm text-gray-900 dark:text-gray-100">Chrome on Mac OS</p>
                                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">New York, USA • Current Session</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-8">Notification Preferences</h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Messages & Activity</h3>
                                    <div className="space-y-4">
                                        <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 dark:bg-gray-900 rounded-xl transition-colors">
                                            <div>
                                                <span className="block font-black text-gray-900 dark:text-gray-100 text-sm">New messages from clients</span>
                                                <span className="block text-xs font-bold text-gray-500 dark:text-gray-400">Instantly notify me when I receive a message</span>
                                            </div>
                                            <div className="w-12 h-6 bg-[#1E7B7C] rounded-full relative shadow-inner">
                                                <div className="absolute right-1 top-1 bg-white dark:bg-gray-950 w-4 h-4 rounded-full shadow-sm" />
                                            </div>
                                        </label>
                                        <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 dark:bg-gray-900 rounded-xl transition-colors">
                                            <div>
                                                <span className="block font-black text-gray-900 dark:text-gray-100 text-sm">Service Request invitations</span>
                                                <span className="block text-xs font-bold text-gray-500 dark:text-gray-400">When a client directly invites me</span>
                                            </div>
                                            <div className="w-12 h-6 bg-[#1E7B7C] rounded-full relative shadow-inner">
                                                <div className="absolute right-1 top-1 bg-white dark:bg-gray-950 w-4 h-4 rounded-full shadow-sm" />
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Marketing & Tips</h3>
                                    <div className="space-y-4">
                                        <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 dark:bg-gray-900 rounded-xl transition-colors">
                                            <div>
                                                <span className="block font-black text-gray-900 dark:text-gray-100 text-sm">Product updates & news</span>
                                                <span className="block text-xs font-bold text-gray-500 dark:text-gray-400">Occasional announcements about new features</span>
                                            </div>
                                            <div className="w-12 h-6 bg-gray-200 rounded-full relative shadow-inner border border-gray-300">
                                                <div className="absolute left-1 top-1 bg-white dark:bg-gray-950 w-4 h-4 rounded-full shadow-sm" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'billing' && (
                        <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-8 border border-white dark:border-gray-800 shadow-xl shadow-gray-200/10 flex flex-col items-center justify-center py-20">
                            <div className="w-20 h-20 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mb-6">
                                <CreditCard size={32} className="text-gray-400 dark:text-gray-500" />
                            </div>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-2">Basic Membership</h2>
                            <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm text-center mb-8">
                                You are currently on the free Basic Provider plan. Upgrade to Premium for 80 free connects a month and profile boosting.
                            </p>
                            <button className="px-8 py-4 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-xl font-black shadow-lg shadow-[#1E7B7C]/20 hover:scale-105 transition-transform">
                                Upgrade to Premium
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
