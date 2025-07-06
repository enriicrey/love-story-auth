import { Link } from "react-router-dom";
import { DashboardLayout } from "@/shared/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { KPICard } from "@/shared/components/kpi-card";
import { Users, Euro, Calendar, Star, CheckCircle, Clock, MessageSquare, TrendingUp } from "lucide-react";

const ProviderDashboard = () => {
  return (
    <DashboardLayout userType="provider" title="Panel de Proveedor">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Clientes"
          value="45"
          subtitle="Clientes activos"
          color="primary"
          icon={Users}
        />
        <KPICard
          title="Ingresos Mensuales"
          value="€3,500"
          subtitle="Este mes"
          color="green"
          icon={Euro}
        />
        <KPICard
          title="Próximos Eventos"
          value="7"
          subtitle="Eventos este mes"
          color="blue"
          icon={Calendar}
        />
        <KPICard
          title="Valoración Media"
          value="4.8"
          subtitle="de 5 estrellas"
          color="orange"
          icon={Star}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Tareas Pendientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { task: "Confirmar detalles del menú con cliente", time: "Hoy, 15:00" },
                { task: "Enviar propuesta de decoración floral", time: "Mañana, 10:00" },
                { task: "Preparar lista de canciones para el evento", time: "Viernes, 14:00" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-secondary/50 rounded-xl hover:bg-secondary/70 transition-colors">
                  <div>
                    <div className="font-medium">{item.task}</div>
                    <div className="text-sm text-muted-foreground">{item.time}</div>
                  </div>
                  <Badge variant="outline">Pendiente</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { activity: "Nuevo mensaje de cliente", detail: "Laura G.", time: "hace 1 hora", icon: MessageSquare },
                { activity: "Pago recibido", detail: "Evento del 15 de Junio", time: "hace 3 horas", icon: TrendingUp },
                { activity: "Evento confirmado", detail: "Boda de Ana y Juan", time: "Ayer", icon: Calendar }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-xl hover:bg-secondary/70 transition-colors">
                  <item.icon className="h-5 w-5 text-blue-500" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.activity}</div>
                    <div className="text-sm text-muted-foreground">{item.detail} - {item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <Button asChild>
          <Link to="/provider/settings">
            Gestionar Perfil
          </Link>
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default ProviderDashboard;
