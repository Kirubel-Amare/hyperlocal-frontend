'use client'

import { useState } from 'react'
import { User, Mail, Phone, MapPin, Camera, Shield, Bell, Key } from 'lucide-react'
import { customerDashboardData } from '@/lib/mock-dashboards'

export default function CustomerProfilePage() {
  const { user } = customerDashboardData
  const [activeSection, setActiveSection] = useState<'personal' | 'security' | 'notifications'>('personal')

  return (
    <div className="max-w-6xl relative pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">
            Profile Settings
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
            Manage your personal information, security, and preferences.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 rounded-2xl font-bold hover:bg-gray-50 dark:bg-gray-900 transition-colors shadow-sm border border-gray-100 dark:border-gray-800">
            Cancel
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-2xl font-black shadow-lg shadow-[#1E7B7C]/20 hover:scale-105 active:scale-95 transition-all">
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Fixed Navigation Sidebar */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[32px] p-4 border border-white shadow-xl shadow-gray-200/10 sticky top-28 space-y-2">
            <button
              onClick={() => setActiveSection('personal')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeSection === 'personal' ? 'bg-[#E8F4F4] text-[#1E7B7C]' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-900 hover:text-gray-900 dark:text-gray-100'}`}
            >
              <User size={18} /> Personal Info
            </button>
            <button
              onClick={() => setActiveSection('security')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeSection === 'security' ? 'bg-[#E8F4F4] text-[#1E7B7C]' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-900 hover:text-gray-900 dark:text-gray-100'}`}
            >
              <Shield size={18} /> Password & Security
            </button>
            <button
              onClick={() => setActiveSection('notifications')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeSection === 'notifications' ? 'bg-[#E8F4F4] text-[#1E7B7C]' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-900 hover:text-gray-900 dark:text-gray-100'}`}
            >
              <Bell size={18} /> Notifications
            </button>
          </div>
        </div>

        {/* Form Content Area */}
        <div className="flex-1 space-y-8">
          {activeSection === 'personal' && (
            <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[40px] p-8 md:p-10 border border-white shadow-xl shadow-gray-200/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">Personal Information</h2>

              {/* Photo Upload */}
              <div className="flex items-center gap-6 mb-10">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <button className="absolute inset-0 bg-black/40 rounded-3xl flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer">
                    <Camera size={24} className="mb-1" />
                  </button>
                </div>
                <div>
                  <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 mb-1">Profile Photo</h3>
                  <p className="text-xs font-bold text-gray-400 dark:text-gray-500 mb-3">JPG, GIF or PNG. Max size 2MB</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border-2 border-gray-200 hover:border-[#1E7B7C] hover:text-[#1E7B7C] rounded-xl text-xs font-bold text-gray-500 dark:text-gray-400 transition-colors">Upload New</button>
                    <button className="px-4 py-2 bg-red-50 text-red-500 hover:bg-red-100 rounded-xl text-xs font-bold transition-colors">Remove</button>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-1">First Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                      <input type="text" defaultValue="Alex" className="w-full bg-white dark:bg-gray-950 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-1">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                      <input type="text" defaultValue="Johnson" className="w-full bg-white dark:bg-gray-950 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] transition-all" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                      <input type="email" defaultValue="alex.j@example.com" className="w-full bg-white dark:bg-gray-950 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                      <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full bg-white dark:bg-gray-950 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] transition-all" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-1 flex items-center justify-between">
                    <span>Primary Address</span>
                    <button type="button" className="text-[#1E7B7C] hover:underline normal-case tracking-normal">Add New Address</button>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 text-gray-400 dark:text-gray-500" size={18} />
                    <textarea rows={3} defaultValue="123 Main St, Apt 4B&#10;San Francisco, CA 94105" className="w-full bg-white dark:bg-gray-950 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] transition-all resize-none"></textarea>
                  </div>
                </div>
              </form>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[40px] p-8 md:p-10 border border-white shadow-xl shadow-gray-200/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">Security Settings</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 mb-4">Change Password</h3>
                  <div className="space-y-4 max-w-md">
                    <div className="relative">
                      <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                      <input type="password" placeholder="Current Password" className="w-full bg-white dark:bg-gray-950 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] transition-all" />
                    </div>
                    <div className="relative">
                      <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                      <input type="password" placeholder="New Password" className="w-full bg-white dark:bg-gray-950 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] transition-all" />
                    </div>
                    <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-colors">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-sm font-black text-gray-900 dark:text-gray-100">Two-Factor Authentication</h3>
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400">Add an extra layer of security to your account.</p>
                    </div>
                    <button className="relative w-12 h-6 bg-gray-200 rounded-full transition-colors cursor-pointer p-0.5">
                      <div className="w-5 h-5 bg-white dark:bg-gray-950 rounded-full shadow-sm transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="bg-white dark:bg-gray-950/60 backdrop-blur-md rounded-[40px] p-8 md:p-10 border border-white shadow-xl shadow-gray-200/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">Notification Preferences</h2>

              <div className="space-y-6">
                {['Email Notifications', 'Push Notifications', 'SMS Alerts', 'Marketing Emails'].map((pref, i) => (
                  <div key={pref} className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div>
                      <h3 className="text-sm font-black text-gray-900 dark:text-gray-100">{pref}</h3>
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400">Receive updates regarding {pref.toLowerCase()}.</p>
                    </div>
                    {/* Custom Toggle */}
                    <button className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer p-0.5 ${i < 3 ? 'bg-[#1E7B7C]' : 'bg-gray-200'}`}>
                      <div className={`w-5 h-5 bg-white dark:bg-gray-950 rounded-full shadow-sm transition-transform ${i < 3 ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
