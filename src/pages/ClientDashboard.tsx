
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KPICards } from "@/components/dashboard/KPICards";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { PendingTasks } from "@/components/dashboard/PendingTasks";
import { ContractedServices } from "@/components/dashboard/ContractedServices";
import { RecentNotifications } from "@/components/dashboard/RecentNotifications";

const ClientDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">
            <KPICards />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <UpcomingEvents />
              <PendingTasks />
              <ContractedServices />
            </div>

            <RecentNotifications />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ClientDashboard;
