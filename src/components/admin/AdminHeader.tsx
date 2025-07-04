
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Settings, Bell, Search, Plus } from "lucide-react";

export const AdminHeader = () => {
  return (
    <header className="glass-effect border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="space-y-1">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink to="/admin" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Admin
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold text-foreground animate-fade-in-up">Panel de Administración</h1>
          <p className="text-muted-foreground">Gestiona la plataforma WeddingPlan</p>
        </div>
        
        <div className="flex items-center space-x-4 animate-slide-in-right">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center">
              3
            </Badge>
          </Button>
          <Button variant="outline" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Acción
          </Button>
        </div>
      </div>
    </header>
  );
};
