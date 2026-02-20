import CustomerHeader from '@/components/layout/CustomerHeader'
import CustomerSidebar from '@/components/layout/CustomerSidebar'

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#F5F7FA] font-sans text-gray-900">
            <CustomerHeader />
            <div className="flex w-full">
                <CustomerSidebar />
                <main className="flex-1 ml-64 pt-20 min-h-screen">
                    <div className="max-w-[1200px] mx-auto p-12">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
