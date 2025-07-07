
import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem 
} from "@/components/ui/sidebar";
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
          // Add more admin routes here
        ];
      default:
        return [];
    }
  }, [userType]);

  return (
    <Sidebar className={cn(isSidebarOpen ? "w-64" : "w-16", "group/sidebar transition-all duration-300")}>
      <SidebarHeader>
        <Link to="/" className="flex items-center justify-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback>WP</AvatarFallback>
          </Avatar>
          <span className={cn("font-bold", isSidebarOpen ? "block" : "hidden")}>
            Wedding Plan
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem
                key={item.href}
                isActive={location.pathname === item.href}
                href={item.href}
              >
                <Icon className="h-4 w-4" />
                <span className={cn("text-sm", isSidebarOpen ? "block" : "hidden")}>
                  {item.label}
                </span>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="h-4 w-4 mr-2" />
          <span className={cn("text-sm", isSidebarOpen ? "block" : "hidden")}>
            Configuración
          </span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
