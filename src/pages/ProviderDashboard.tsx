
import { useState } from "react";
import { DashboardLayout } from "@/shared/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { KPICard } from "@/shared/components/kpi-card";
import { Calendar, Euro, Star, Users, Plus, MessageSquare, FileText } from "lucide-react";

interface Booking {
  id: number;
  client: string;
  service: string;
  date: string;
  status: "confirmed" | "pending" | "completed";
  amount: string;
}

const recentBookings: Booking[] = [
  {
    id: 1,
    client: "María García",
    service: "Sesión de fotos de compromiso",
    date: "15 de Mayo, 2024",
    status: "confirmed",
    amount: "€1,200"
  },
  {
    id: 2,
    client: "José Fernández",
    service: "Catering para 100 personas",
    date: "22 de Junio, 2024",
    status: "pending",
    amount: "€4,500"
  },
  {
    id: 3,
    client: "Ana Ruiz",
    service: "Decoración floral completa",
    date: "10 de Julio, 2024",
    status: "completed",
    amount: "€2,800"
  }
];

const ProviderDashboard = () => {
  const [bookings, setBookings] = useState(recentBookings);

  return (
    <DashboardLayout userType="provider" title="Dashboard Proveedor" subtitle="Gestiona tu negocio y clientes">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Clientes Activos"
          value="24"
          subtitle="este mes"
          color="primary"
          icon={Users}
        />

        <KPICard
          title="Ingresos"
          value="€8,500"
          subtitle="este mes"
          color="green"
          icon={Euro}
        />

        <KPICard
          title="Citas Pendientes"
          value="12"
          subtitle="próximas"
          color="orange"
          icon={Calendar}
        />

        <KPICard
          title="Satisfacción"
          value="4.8"
          subtitle="de 5.0 estrellas"
          color="green"
          icon={Star}
          progress={96}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Reservas Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                  <div>
                    <div className="font-medium">{booking.client}</div>
                    <div className="text-sm text-muted-foreground">{booking.service}</div>
                    <div className="text-sm text-muted-foreground">{booking.date}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={booking.status === "confirmed" ? "default" : booking.status === "pending" ? "secondary" : "outline"}>
                      {booking.status === "confirmed" ? "Confirmado" : 
                       booking.status === "pending" ? "Pendiente" : "Completado"}
                    </Badge>
                    <div className="font-semibold text-primary">{booking.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" size="lg">
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Cliente
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <Calendar className="h-4 w-4 mr-2" />
              Programar Cita
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <MessageSquare className="h-4 w-4 mr-2" />
              Enviar Mensaje
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <FileText className="h-4 w-4 mr-2" />
              Crear Propuesta
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProviderDashboard;
