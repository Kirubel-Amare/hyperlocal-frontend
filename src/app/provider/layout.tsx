import ProviderSidebar from '@/components/layout/ProviderSidebar'

export default function ProviderLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-900 flex">
            <ProviderSidebar />
            <main className="flex-1 ml-0 md:ml-[280px] min-h-screen">
                <div className="max-w-[1400px] mx-auto p-8 md:p-12 lg:p-16">
                    {children}
                </div>
            </main>
        </div>
    )
}
