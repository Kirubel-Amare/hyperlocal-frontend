import {
    Settings,
    Shield,
    Bell,
    Globe,
    Database,
    Save,
    DollarSign,
    Zap,
    Lock,
    RefreshCw,
    EyeOff,
    Percent
} from 'lucide-react';

export default function AdminSettingsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">Global System Control</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Configure platform-wide parameters, financial rules, and security protocols.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:bg-gray-900 transition-all flex items-center gap-2">
                        <RefreshCw size={18} />
                        Reset to Defaults
                    </button>
                    <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2">
                        <Save size={18} />
                        Save Configuration
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Financial Settings */}
                <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shadow-sm">
                            <DollarSign size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-gray-900 dark:text-gray-100">Financial Rules</h3>
                            <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Revenue & Payouts</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Platform Commission (%)</label>
                                <div className="relative">
                                    <input type="number" defaultValue="15" className="w-full pl-4 pr-10 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl outline-none focus:bg-white dark:bg-gray-950 focus:border-[#1E7B7C]/20 transition-all text-sm font-bold" />
                                    <Percent className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Min. Payout ($)</label>
                                <input type="number" defaultValue="50" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl outline-none focus:bg-white dark:bg-gray-950 focus:border-[#1E7B7C]/20 transition-all text-sm font-bold" />
                            </div>
                        </div>
                        <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Lock size={18} className="text-emerald-600" />
                                <span className="text-xs font-bold text-emerald-900">Automatic Escrow Release</span>
                            </div>
                            <div className="w-12 h-6 bg-emerald-500 rounded-full relative p-1 cursor-pointer">
                                <div className="absolute right-1 top-1 bottom-1 w-4 bg-white dark:bg-gray-950 rounded-full shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Control */}
                <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl shadow-sm">
                            <Zap size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-gray-900 dark:text-gray-100">System Toggles</h3>
                            <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Platform Behavior</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Platform Maintenance</p>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Temporarily disable user access</p>
                            </div>
                            <div className="w-12 h-6 bg-gray-200 rounded-full relative p-1 cursor-pointer">
                                <div className="absolute left-1 top-1 bottom-1 w-4 bg-white dark:bg-gray-950 rounded-full shadow-sm" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">New Provider Registration</p>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Allow or pause new signups</p>
                            </div>
                            <div className="w-12 h-6 bg-[#1E7B7C] rounded-full relative p-1 cursor-pointer">
                                <div className="absolute right-1 top-1 bottom-1 w-4 bg-white dark:bg-gray-950 rounded-full shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Localization */}
                <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shadow-sm">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-gray-900 dark:text-gray-100">Localization</h3>
                            <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Regional Settings</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Default Currency</label>
                            <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl outline-none focus:bg-white dark:bg-gray-950 focus:border-[#1E7B7C]/20 transition-all text-sm font-bold">
                                <option>USD ($)</option>
                                <option>EUR (€)</option>
                                <option>GBP (£)</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Timezone</label>
                            <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl outline-none focus:bg-white dark:bg-gray-950 focus:border-[#1E7B7C]/20 transition-all text-sm font-bold">
                                <option>UTC -5 (New York)</option>
                                <option>UTC +0 (London)</option>
                                <option>UTC +3 (Nairobi)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Privacy & Security */}
                <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl shadow-sm">
                            <Shield size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-gray-900 dark:text-gray-100">Privacy & Data</h3>
                            <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Security Protocols</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Anonymize Logs</p>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Remove PII from server logs</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <EyeOff size={16} className="text-gray-400 dark:text-gray-500" />
                                <div className="w-12 h-6 bg-[#1E7B7C] rounded-full relative p-1 cursor-pointer">
                                    <div className="absolute right-1 top-1 bottom-1 w-4 bg-white dark:bg-gray-950 rounded-full shadow-sm" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Audit Redaction</p>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Hide sensitive values in Audit Log</p>
                            </div>
                            <div className="w-12 h-6 bg-[#1E7B7C] rounded-full relative p-1 cursor-pointer">
                                <div className="absolute right-1 top-1 bottom-1 w-4 bg-white dark:bg-gray-950 rounded-full shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
