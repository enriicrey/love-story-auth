
import { Calendar, Users, CreditCard, MessageSquare, Settings, Home, Package, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  userType: "client" | "provider" | "admin";
}

const clientMenuItems = [
  { title: "Dashboard", url: "/client/dashboard", icon: Home },
  { title: "Mis Servicios", url: "/client/services", icon: Package },
  { title: "Mensajes", url: "/client/messages", icon: MessageSquare },
  { title: "Calendario", url: "/client/calendar", icon: Calendar },
  { title: "Presupuesto", url: "/client/budget", icon: CreditCard },
  { title: "Invitados", url: "/client/guests", icon: Users },
  { title: "Notificaciones", url: "/client/notifications", icon: Bell },
  { title: "Configuración", url: "/client/settings", icon: Settings },
];

const providerMenuItems = [
  { title: "Dashboard", url: "/provider/dashboard", icon: Home },
  { title: "Clientes", url: "/provider/clients", icon: Users },
  { title: "Calendario", url: "/provider/calendar", icon: Calendar },
  { title: "Finanzas", url: "/provider/finances", icon: CreditCard },
  { title: "Mensajes", url: "/provider/messages", icon: MessageSquare },
  { title: "Reseñas", url: "/provider/reviews", icon: Package },
  { title: "Notificaciones", url: "/provider/notifications", icon: Bell },
  { title: "Configuración", url: "/provider/settings", icon: Settings },
];

export function AppSidebar({ userType }: AppSidebarProps) {
  const location = useLocation();
  const menuItems = userType === "client" ? clientMenuItems : providerMenuItems;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {userType === "client" ? "Panel Cliente" : "Panel Proveedor"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
