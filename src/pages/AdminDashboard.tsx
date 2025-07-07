
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { FloatingActionButton } from "@/shared/ui/floating-action-button";
import { KPICard } from "@/shared/components/kpi-card";
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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <header className="glass-effect sticky top-0 z-40 border-b border-border/50">
        <div className="container mx-auto responsive-padding py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              <Heart className="h-8 w-8 fill-current" />
              <span>WeddingPlan</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs"></span>
              </Button>
              <span className="text-sm text-muted-foreground hidden sm:block">Panel de Administrador</span>
              <Button variant="ghost" asChild>
                <Link to="/">Cerrar Sesión</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto responsive-padding py-8">
        <Breadcrumbs />
        
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4 lg:text-5xl">
            Panel de Administración
          </h1>
          <p className="text-lg text-muted-foreground responsive-text">
            Gestiona la plataforma, usuarios y proveedores de manera eficiente
          </p>
        </div>

        {/* KPI Cards - Updated to use KPICard component */}
        <div className="responsive-grid mb-8">
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
          <Card className="hover-lift">
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
                  <div key={index} className="flex justify-between items-center p-4 bg-secondary/50 rounded-xl hover:bg-secondary/70 transition-colors">
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

          <Card className="hover-lift">
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
                  <div key={index} className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-xl hover:bg-secondary/70 transition-colors">
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
        <Card className="hover-lift">
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
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton 
        onClick={() => console.log('Nueva acción')}
        icon={<Plus className="h-6 w-6" />}
      />
    </div>
  );
};

export default AdminDashboard;
