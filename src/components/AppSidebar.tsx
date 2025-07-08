
import { NavLink } from "react-router-dom";
import { Heart, Home, Calendar, Users, Euro, MessageCircle, Bell, Settings, Briefcase, TrendingUp, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
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
  useSidebar,
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
  { title: "Notificaciones", url: "/provider/notifications", icon: Bell },
  { title: "Configuración", url: "/provider/settings", icon: Settings },
];

export function AppSidebar({ userType }: AppSidebarProps) {
  const menuItems = userType === "client" ? clientMenuItems : providerMenuItems;
  const isMobile = useIsMobile();
  const { state } = useSidebar();

  return (
    <Sidebar className={cn(
      "border-r border-border bg-white/80 backdrop-blur-md transition-all duration-300",
      isMobile && "absolute z-50 glass-effect",
      state === "expanded" && isMobile && "shadow-2xl"
    )}>
      <SidebarHeader className="p-6 border-b border-border/50">
        <NavLink 
          to={`/${userType}/dashboard`} 
          className="flex items-center space-x-2 text-2xl font-bold text-primary animate-float group"
        >
          <Heart className="h-8 w-8 fill-current group-hover:animate-pulse-glow transition-all duration-300" />
          <span className="gradient-text">WeddingPlan</span>
        </NavLink>
      </SidebarHeader>
      
      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-4 pb-2 text-xs uppercase tracking-wider font-semibold">
            Navegación
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="touch-target">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group relative overflow-hidden",
                          isActive
                            ? "bg-primary/10 text-primary shadow-md before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary before:rounded-r"
                            : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground hover:shadow-sm hover:scale-[1.02]"
                        )
                      }
                    >
                      <item.icon className={cn(
                        "h-5 w-5 transition-all duration-300",
                        "group-hover:scale-110"
                      )} />
                      <span className="font-medium">{item.title}</span>
                      {/* Hover indicator */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
