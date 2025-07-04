
import { NavLink } from "react-router-dom";
import { Heart, Home, Calendar, Users, Euro, MessageCircle, Bell, Settings, Briefcase, TrendingUp, Star } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  userType: "client" | "provider";
}

const clientMenuItems = [
  { title: "Dashboard", url: "/client/dashboard", icon: Home },
  { title: "Mis Servicios", url: "/client/services", icon: Briefcase },
  { title: "Calendario", url: "/client/calendar", icon: Calendar },
  { title: "Presupuesto", url: "/client/budget", icon: Euro },
  { title: "Mensajes", url: "/client/messages", icon: MessageCircle },
  { title: "Invitados", url: "/client/guests", icon: Users },
  { title: "Notificaciones", url: "/client/notifications", icon: Bell },
  { title: "Ajustes", url: "/client/settings", icon: Settings },
];

const providerMenuItems = [
  { title: "Dashboard", url: "/provider/dashboard", icon: Home },
  { title: "Mis Clientes", url: "/provider/clients", icon: Users },
  { title: "Calendario", url: "/provider/calendar", icon: Calendar },
  { title: "Finanzas", url: "/provider/finances", icon: Euro },
  { title: "Mensajes", url: "/provider/messages", icon: MessageCircle },
  { title: "Reseñas", url: "/provider/reviews", icon: Star },
  { title: "Configuración", url: "/provider/settings", icon: Settings },
];

export function AppSidebar({ userType }: AppSidebarProps) {
  const menuItems = userType === "client" ? clientMenuItems : providerMenuItems;

  return (
    <Sidebar className="border-r border-border bg-white">
      <SidebarHeader className="p-6">
        <NavLink to={`/${userType}/dashboard`} className="flex items-center space-x-2 text-2xl font-bold text-primary">
          <Heart className="h-8 w-8 fill-current" />
          <span>WeddingPlan</span>
        </NavLink>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-4 pb-2">
            Navegación
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary border-r-2 border-primary"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
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
