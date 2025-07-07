
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { FloatingActionButton } from "@/shared/ui/floating-action-button";
import { KPICard } from "@/shared/components/kpi-card";
import { DashboardLayout } from "@/shared/layout/DashboardLayout";
import { 
  Heart, 
  Users, 
  Briefcase, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Euro,
  Bell,
  Settings,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const AdminDashboard = () => {
  return (
    <DashboardLayout userType="admin" title="Panel de Administración" subtitle="Gestiona la plataforma, usuarios y proveedores de manera eficiente">
      {/* KPI Cards - Updated to use KPICard component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Parejas registradas"
          value="1,247"
          subtitle="+23 esta semana"
          color="primary"
          icon={Users}
          className="hover-lift animate-bounce-in"
        />

        <KPICard
          title="Proveedores activos"
          value="542"
          subtitle="+8 esta semana"
          color="blue"
          icon={Briefcase}
          className="hover-lift animate-bounce-in"
          style={{animationDelay: '0.1s'}}
        />

        <KPICard
          title="Conexiones exitosas"
          value="89%"
          subtitle="+2% este mes"
          color="green"
          icon={TrendingUp}
          className="hover-lift animate-bounce-in"
          style={{animationDelay: '0.2s'}}
        />

        <KPICard
          title="Ingresos totales"
          value="€45,230"
          subtitle="+18% este mes"
          color="orange"
          icon={Euro}
          className="hover-lift animate-bounce-in"
          style={{animationDelay: '0.3s'}}
        />
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Solicitudes pendientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Fotografía Elegante SL", type: "Fotografía", location: "Madrid" },
                { name: "Catering Delicias", type: "Catering", location: "Barcelona" },
                { name: "Flores & Jardines", type: "Decoración", location: "Valencia" }
              ].map((provider, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors">
                  <div>
                    <div className="font-medium text-foreground">{provider.name}</div>
                    <div className="text-sm text-muted-foreground">{provider.type} • {provider.location}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="success" className="touch-target">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive" className="touch-target">
                      <AlertCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Actividad reciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { icon: CheckCircle, text: "Nuevo proveedor aprobado", detail: "Música & Eventos", time: "hace 2 horas", color: "text-green-500" },
                { icon: Users, text: "Nueva pareja registrada", detail: "Ana & Miguel", time: "hace 4 horas", color: "text-blue-500" },
                { icon: Clock, text: "Solicitud pendiente", detail: "Catering Premium", time: "hace 1 día", color: "text-yellow-500" },
                { icon: TrendingUp, text: "Conexión exitosa", detail: "Laura & Pedro con Foto Arte", time: "hace 1 día", color: "text-green-500" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors">
                  <activity.icon className={cn("h-5 w-5", activity.color)} />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground truncate">{activity.text}</div>
                    <div className="text-sm text-muted-foreground truncate">{activity.detail} - {activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin tools */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Herramientas de administración
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "Gestionar usuarios", variant: "outline" as const },
              { icon: Briefcase, label: "Gestionar proveedores", variant: "outline" as const },
              { icon: TrendingUp, label: "Ver estadísticas", variant: "outline" as const },
              { icon: AlertCircle, label: "Reportes y alertas", variant: "outline" as const }
            ].map((tool, index) => (
              <Button key={index} className="justify-start h-auto p-4 text-left" variant={tool.variant}>
                <tool.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                <span className="truncate">{tool.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Floating Action Button */}
      <FloatingActionButton 
        onClick={() => console.log('Nueva acción')}
        icon={<Plus className="h-6 w-6" />}
      />
    </DashboardLayout>
  );
};

export default AdminDashboard;
