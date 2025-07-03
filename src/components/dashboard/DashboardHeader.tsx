
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, LogOut } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Panel de Cliente</h1>
            <p className="text-sm text-muted-foreground">Gestiona tu boda perfecta</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/">
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
