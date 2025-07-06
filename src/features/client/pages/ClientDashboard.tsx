
import { DashboardLayout } from "@/shared/layout/DashboardLayout";
import { KPICards } from "@/features/client/components/KPICards";
import { UpcomingEvents } from "@/shared/components/dashboard/UpcomingEvents";
import { PendingTasks } from "@/shared/components/dashboard/PendingTasks";
import { ContractedServices } from "@/shared/components/dashboard/ContractedServices";
import { RecentNotifications } from "@/shared/components/dashboard/RecentNotifications";

const ClientDashboard = () => {
  return (
    <DashboardLayout userType="client" title="Dashboard">
      <KPICards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <UpcomingEvents />
        <PendingTasks />
        <ContractedServices />
      </div>

      <RecentNotifications />
    </DashboardLayout>
  );
};

export default ClientDashboard;
