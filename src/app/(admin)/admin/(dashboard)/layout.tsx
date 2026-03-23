import AdminGuard from "@/components/admin/AdminGuard";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-950">
        <AdminSidebar />
        <div className="lg:pl-64 transition-all duration-300">
          <AdminHeader />
          <div className="p-6">{children}</div>
        </div>
      </div>
    </AdminGuard>
  );
}
