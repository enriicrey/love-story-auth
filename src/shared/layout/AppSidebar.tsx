
import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { 
  Home, 
  Calendar, 
  ListChecks, 
  Mail, 
  Users, 
  Settings,
  FileText,
  Bell,
  CreditCard,
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  userType: "client" | "provider" | "admin";
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ userType }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = React.useMemo(() => {
    switch (userType) {
      case "client":
        return [
          {
            href: "/client/dashboard",
            icon: Home,
            label: "Dashboard",
          },
          {
            href: "/client/services",
            icon: ListChecks,
            label: "Servicios",
          },
          {
            href: "/client/messages",
            icon: Mail,
            label: "Mensajes",
          },
          {
            href: "/client/calendar",
            icon: Calendar,
            label: "Calendario",
          },
          {
            href: "/client/budget",
            icon: CreditCard,
            label: "Presupuesto",
          },
          {
            href: "/client/guests",
            icon: Users,
            label: "Invitados",
          },
          {
            href: "/client/notifications",
            icon: Bell,
            label: "Notificaciones",
          },
          {
            href: "/client/settings",
            icon: Settings,
            label: "Configuración",
          },
        ];
      case "provider":
        return [
          {
            href: "/provider/dashboard",
            icon: Home,
            label: "Dashboard",
          },
          {
            href: "/provider/clients",
            icon: Users,
            label: "Clientes",
          },
          {
            href: "/provider/calendar",
            icon: Calendar,
            label: "Calendario",
          },
          {
            href: "/provider/finances",
            icon: CreditCard,
            label: "Finanzas",
          },
          {
            href: "/provider/messages",
            icon: Mail,
            label: "Mensajes",
          },
          {
            href: "/provider/reviews",
            icon: FileText,
            label: "Reseñas",
          },
          {
            href: "/provider/notifications",
            icon: Bell,
            label: "Notificaciones",
          },
          {
            href: "/provider/settings",
            icon: Settings,
            label: "Configuración",
          },
        ];
      case "admin":
        return [
          {
            href: "/admin/dashboard",
            icon: LayoutDashboard,
            label: "Dashboard",
          },
        ];
      default:
        return [];
    }
  }, [userType]);

  return (
    <div className={cn(isSidebarOpen ? "w-64" : "w-16", "group/sidebar transition-all duration-300 bg-background border-r")}>
      <div className="flex flex-col h-full">
        <div className="p-4">
          <Link to="/" className="flex items-center justify-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>WP</AvatarFallback>
            </Avatar>
            <span className={cn("font-bold", isSidebarOpen ? "block" : "hidden")}>
              Wedding Plan
            </span>
          </Link>
        </div>
        
        <div className="flex-1 px-4">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors",
                    isActive 
                      ? "bg-primary text-primary-foreground font-medium" 
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className={cn("text-sm", isSidebarOpen ? "block" : "hidden")}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-4">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            <span className={cn("text-sm", isSidebarOpen ? "block" : "hidden")}>
              Configuración
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
