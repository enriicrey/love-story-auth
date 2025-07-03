
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

const notifications = [
  { id: 1, message: "Foto Elena confirmó la cita de mañana", time: "Hace 2 horas", type: "confirmation" },
  { id: 2, message: "Recordatorio: Pago pendiente Catering Deluxe", time: "Hace 4 horas", type: "payment" },
  { id: 3, message: "Nueva propuesta de DJ Carlos recibida", time: "Ayer", type: "proposal" }
];

export const RecentNotifications = () => {
  return (
    <Card className="shadow-lg mt-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Últimas notificaciones</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors cursor-pointer">
              <div>
                <div className="font-medium">{notification.message}</div>
                <div className="text-sm text-muted-foreground">{notification.time}</div>
              </div>
              <Badge variant="outline">{notification.type === "confirmation" ? "Confirmación" : notification.type === "payment" ? "Pago" : "Propuesta"}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
