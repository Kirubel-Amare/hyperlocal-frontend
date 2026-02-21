'use client'

import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users, DollarSign } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">System Analytics</h1>
                <p className="text-gray-500 font-medium">Deep dive into platform performance and user growth metrics.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 p-12 rounded-[3rem] shadow-sm flex flex-col items-center justify-center text-center min-h-[500px]">
                <div className="w-20 h-20 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 shadow-sm">
                    <BarChart3 size={40} />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Detailed Analytics is being prepared</h2>
                <p className="text-gray-500 max-w-md font-medium leading-relaxed">
                    We are currently aggregating data for your comprehensive reports. Check back soon for deep-dive insights.
                </p>
            </div>
        </div>
    );
}
