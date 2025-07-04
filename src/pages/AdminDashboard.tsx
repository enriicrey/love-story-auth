
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminKPICards } from "@/components/admin/AdminKPICards";
import { AdminCharts } from "@/components/admin/AdminCharts";
import { AdminServiceDistribution } from "@/components/admin/AdminServiceDistribution";
import { AdminRecentActivity } from "@/components/admin/AdminRecentActivity";
import { AdminQuickActions } from "@/components/admin/AdminQuickActions";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <AdminHeader />

      <main className="p-6 space-y-8">
        <AdminKPICards />
        <AdminCharts />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AdminServiceDistribution />
          <AdminRecentActivity />
        </div>

        <AdminQuickActions />
      </main>
    </div>
  );
};

export default AdminDashboard;
