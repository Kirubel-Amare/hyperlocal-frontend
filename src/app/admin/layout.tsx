import AdminSidebar from "@/components/layout/AdminSidebar";
import AdminHeader from "@/components/layout/AdminHeader";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#F8FAFB]">
            <AdminHeader />
            <div className="flex">
                <AdminSidebar />
                <main className="flex-1 md:pl-[280px] pt-20">
                    <div className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
