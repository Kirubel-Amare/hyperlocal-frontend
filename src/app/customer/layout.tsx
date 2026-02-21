import Header from '@/components/layout/header'
import CustomerSidebar from '@/components/layout/CustomerSidebar'

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 flex">
            <Header userType="customer" />

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-[#1E7B7C]/5 via-[#166566]/5 to-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-tr from-amber-500/5 via-orange-500/5 to-pink-500/5 rounded-full blur-[120px]" />
            </div>

            <CustomerSidebar />

            <main className="flex-1 ml-0 md:ml-[280px] min-h-screen relative pt-20">
                <div className="max-w-[1400px] mx-auto p-6 md:p-12 lg:p-16">
                    {children}
                </div>
            </main>
        </div>
    )
}
