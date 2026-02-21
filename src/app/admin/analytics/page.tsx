import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    Users,
    DollarSign,
    Calendar,
    ArrowUpRight,
    Target,
    ShoppingBag,
    Layers,
    Briefcase
} from 'lucide-react';

const categoryRevenue = [
    { name: 'Home Cleaning', value: 45200, color: 'bg-[#1E7B7C]' },
    { name: 'Plumbing', value: 32100, color: 'bg-indigo-500' },
    { name: 'Tutoring', value: 28400, color: 'bg-purple-500' },
    { name: 'Garden Decor', value: 15600, color: 'bg-emerald-500' },
    { name: 'Personal Care', value: 12800, color: 'bg-amber-500' },
];

const growthStats = [
    { label: 'Revenue Growth', value: '+18.4%', isPositive: true },
    { label: 'User Retention', value: '72.5%', isPositive: true },
    { label: 'Avg. Ticket Size', value: '$84.20', isPositive: false },
    { label: 'Completion Rate', value: '94.2%', isPositive: true },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2">Platform Insights</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Deep dive into platform performance, user trends, and revenue distribution.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl px-4 py-2.5 shadow-sm flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400 dark:text-gray-500" />
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Last 30 Days</span>
                    </div>
                    <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all">
                        Download Report
                    </button>
                </div>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {growthStats.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2.5rem] shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 underline decoration-indigo-500/30">{stat.label}</p>
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{stat.value}</h3>
                            <div className={`flex items-center text-[10px] font-black px-2 py-1 rounded-full ${stat.isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                {stat.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                                {stat.isPositive ? '+5.2%' : '-1.4%'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue by Category (Visual Chart) */}
                <div className="lg:col-span-1 bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Revenue Mix</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Distribution by category</p>
                        </div>
                        <Layers size={20} className="text-gray-400 dark:text-gray-500" />
                    </div>

                    <div className="space-y-6">
                        {categoryRevenue.map((cat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{cat.name}</span>
                                    <span className="text-sm font-black text-gray-900 dark:text-gray-100">${(cat.value / 1000).toFixed(1)}k</span>
                                </div>
                                <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${cat.color} rounded-full transition-all duration-1000`}
                                        style={{ width: `${(cat.value / categoryRevenue[0].value) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-8 py-3 rounded-2xl border-2 border-gray-50 text-gray-400 dark:text-gray-500 text-xs font-black uppercase hover:bg-gray-50 dark:bg-gray-900 transition-all">
                        View Detailed Breakdown
                    </button>
                </div>

                {/* Growth Trends */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Growth Trends</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Provider vs Customer registrations</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#1E7B7C]" />
                                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase">Providers</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase">Customers</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-[250px] flex items-end justify-between gap-4 px-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                            <div key={i} className="flex-1 flex gap-1 group relative">
                                <div
                                    className="flex-1 bg-[#1E7B7C]/80 rounded-t-lg transition-all duration-700 group-hover:bg-[#1E7B7C]"
                                    style={{ height: `${h}%` }}
                                />
                                <div
                                    className="flex-1 bg-indigo-500/80 rounded-t-lg transition-all duration-700 group-hover:bg-indigo-500"
                                    style={{ height: `${h + (i % 2 === 0 ? 10 : -10)}%` }}
                                />
                                {/* Tooltip */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                    Week {i + 1}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest px-2">
                        <span>Week 1</span>
                        <span>Week 2</span>
                        <span>Week 3</span>
                        <span>Week 4</span>
                        <span>Week 5</span>
                        <span>Week 6</span>
                        <span>Week 7</span>
                        <span>Week 8</span>
                    </div>
                </div>
            </div>

            {/* Performance KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Target size={28} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-gray-900 dark:text-gray-100">92%</h4>
                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500">Goals Met</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-[#E8F4F4] text-[#1E7B7C] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <ShoppingBag size={28} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-gray-900 dark:text-gray-100">2,481</h4>
                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500">Orders Today</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Briefcase size={28} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-gray-900 dark:text-gray-100">$126.5k</h4>
                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500">Net Volume</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
