
import { ReactNode } from "react";
import { SidebarProvider } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/shared/layout/AppSidebar";
import { DashboardHeader } from "@/shared/layout/DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "client" | "provider" | "admin";
  title?: string;
  subtitle?: string;
}

export const DashboardLayout = ({ children, userType, title, subtitle }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType={userType} />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">
            {(title || subtitle) && (
              <div className="mb-6">
                {title && <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>}
                {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
              </div>
            )}
            
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
