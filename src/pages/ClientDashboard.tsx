
import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KPICards } from "@/components/dashboard/KPICards";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { PendingTasks } from "@/components/dashboard/PendingTasks";
import { ContractedServices } from "@/components/dashboard/ContractedServices";
import { RecentNotifications } from "@/components/dashboard/RecentNotifications";
import { useAuth } from "@/components/AuthProvider";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useNotifications } from "@/hooks/useNotifications";
import { supabase } from "@/integrations/supabase/client";

const ClientDashboard = () => {
  const { user, profile } = useAuth();
  const { trackPageView } = useAnalytics();
  const [dashboardData, setDashboardData] = useState({
    totalContracts: 0,
    totalBudget: 0,
    pendingPayments: 0,
    upcomingEvents: 0
  });

  useEffect(() => {
    if (user) {
      trackPageView('client_dashboard', user.id);
      loadDashboardData();
    }
  }, [user, trackPageView]);

  const loadDashboardData = async () => {
    if (!user) return;

    try {
      // Get service contracts data
      const { data: contracts, error: contractsError } = await supabase
        .from('service_contracts')
        .select('*')
        .eq('client_id', user.id);

      if (contractsError) throw contractsError;

      // Calculate KPIs
      const totalContracts = contracts?.length || 0;
      const totalBudget = contracts?.reduce((sum, contract) => sum + (contract.total_amount || 0), 0) || 0;
      const pendingPayments = contracts?.filter(c => c.status === 'pending').length || 0;
      const upcomingEvents = contracts?.filter(c => c.event_date && new Date(c.event_date) > new Date()).length || 0;

      setDashboardData({
        totalContracts,
        totalBudget,
        pendingPayments,
        upcomingEvents
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">
            <KPICards data={dashboardData} />

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
