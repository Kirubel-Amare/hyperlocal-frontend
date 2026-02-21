'use client'

import React from 'react';
import { Settings, Shield, Bell, Globe, Database, Save } from 'lucide-react';

export default function AdminSettingsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">System Settings</h1>
                    <p className="text-gray-500 font-medium">Configure platform-wide parameters and security protocols.</p>
                </div>
                <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/70 backdrop-blur-xl border border-gray-100 p-8 rounded-[2.5rem] shadow-sm space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                            <Globe size={20} />
                        </div>
                        <h3 className="text-lg font-black text-gray-900">General Configuration</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Platform Name</label>
                            <input type="text" defaultValue="LocalService Hyperlocal" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 transition-all text-sm font-bold" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Admin Email</label>
                            <input type="email" defaultValue="admin@localservice.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 transition-all text-sm font-bold" />
                        </div>
                    </div>
                </div>

                <div className="bg-white/70 backdrop-blur-xl border border-gray-100 p-8 rounded-[2.5rem] shadow-sm space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Shield size={20} />
                        </div>
                        <h3 className="text-lg font-black text-gray-900">Security & Access</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div>
                                <p className="text-sm font-bold text-gray-900">Two-Factor Authentication</p>
                                <p className="text-xs text-gray-500 font-medium">Require 2FA for all admin accounts</p>
                            </div>
                            <div className="w-12 h-6 bg-[#1E7B7C] rounded-full relative p-1 cursor-pointer">
                                <div className="absolute right-1 top-1 bottom-1 w-4 bg-white rounded-full shadow-sm" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div>
                                <p className="text-sm font-bold text-gray-900">Provider Verification</p>
                                <p className="text-xs text-gray-500 font-medium">Automatically flag unverified accounts</p>
                            </div>
                            <div className="w-12 h-6 bg-gray-200 rounded-full relative p-1 cursor-pointer">
                                <div className="absolute left-1 top-1 bottom-1 w-4 bg-white rounded-full shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
