import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Heart,
  MessageSquare,
  Calendar,
  ListChecks,
  Settings,
  Users,
  Briefcase,
  FileText,
  CreditCard,
  Bell,
  LogOut,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  userType: "client" | "provider" | "admin";
}

interface SidebarItem {
  label: string;
  icon: React.ComponentType<any>;
  href: string;
}

const clientItems: SidebarItem[] = [
  { label: "Dashboard", icon: Heart, href: "/client/dashboard" },
  { label: "Servicios", icon: ListChecks, href: "/client/services" },
  { label: "Mensajes", icon: MessageSquare, href: "/client/messages" },
  { label: "Calendario", icon: Calendar, href: "/client/calendar" },
  { label: "Presupuesto", icon: CreditCard, href: "/client/budget" },
  { label: "Invitados", icon: Users, href: "/client/guests" },
  { label: "Notificaciones", icon: Bell, href: "/client/notifications" },
  { label: "Configuración", icon: Settings, href: "/client/settings" },
];

const providerItems: SidebarItem[] = [
  { label: "Dashboard", icon: Briefcase, href: "/provider/dashboard" },
  { label: "Clientes", icon: Users, href: "/provider/clients" },
  { label: "Calendario", icon: Calendar, href: "/provider/calendar" },
  { label: "Finanzas", icon: CreditCard, href: "/provider/finances" },
  { label: "Mensajes", icon: MessageSquare, href: "/provider/messages" },
  { label: "Reseñas", icon: FileText, href: "/provider/reviews" },
  { label: "Notificaciones", icon: Bell, href: "/provider/notifications" },
  { label: "Configuración", icon: Settings, href: "/provider/settings" },
];

const adminItems: SidebarItem[] = [
  { label: "Dashboard", icon: Briefcase, href: "/admin/dashboard" },
  // Add more admin-specific items here
];

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export const AppSidebar = ({ userType }: SidebarProps) => {
  let sidebarItems: SidebarItem[] = [];

  if (userType === "client") {
    sidebarItems = clientItems;
  } else if (userType === "provider") {
    sidebarItems = providerItems;
  } else if (userType === "admin") {
    sidebarItems = adminItems;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 flex flex-col justify-between"
      >
        <div>
          <SheetHeader className="text-left">
            <SheetTitle className="flex items-center space-x-2 text-2xl font-bold">
              <Heart className="h-6 w-6 fill-current text-primary" />
              <span>WeddingPlan</span>
            </SheetTitle>
            <SheetDescription>
              Navega fácilmente por las opciones.
            </SheetDescription>
          </SheetHeader>
          <Separator className="my-4" />
          <div className="flex flex-col space-y-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="justify-start"
                asChild
              >
                <Link to={item.href} className="w-full">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="pb-4">
          <Separator className="my-4" />
          <Button variant="ghost" className="justify-start" asChild>
            <Link to="/" className="w-full flex items-center">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar Sesión</span>
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
