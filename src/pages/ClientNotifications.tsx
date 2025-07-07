
import { useState } from "react";
import { DashboardLayout } from "@/shared/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Bell, CheckCircle, Eye, Trash2, Archive, Camera, CreditCard, Calendar, Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

const mockNotifications = [
  {
    id: 1,
    type: "provider",
    title: "Foto Elena",
    message: "Te ha enviado una nueva propuesta de paquetes de fotografía",
    time: "Hace 2 horas",
    read: false,
    icon: Camera,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: 2,
    type: "payment",
    title: "Recordatorio de Pago",
    message: "El pago a DJ Carlos (€800) vence en 2 días",
    time: "Hace 4 horas",
    read: false,
    icon: CreditCard,
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    id: 3,
    type: "provider",
    title: "Flores & Co",
    message: "Nueva propuesta de decoración disponible para revisión",
    time: "Hace 6 horas",
    read: false,
    icon: Camera,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: 4,
    type: "task",
    title: "Recordatorio",
    message: "Confirmar menú con Catering Deluxe mañana a las 18:00h",
    time: "Ayer",
    read: true,
    icon: Calendar,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    id: 5,
    type: "system",
    title: "Sistema",
    message: "Invitaciones enviadas correctamente a 120 personas",
    time: "Hace 2 días",
    read: true,
    icon: Settings,
    color: "text-gray-600",
    bgColor: "bg-gray-100"
  },
  {
    id: 6,
    type: "provider",
    title: "Catering Deluxe",
    message: "¿Confirmamos el menú para 120 personas? Esperamos tu respuesta",
    time: "Hace 3 días",
    read: true,
    icon: Camera,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  }
];

const ClientNotifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filterType, setFilterType] = useState("all");

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getTypeLabel = (type: string) => {
    const types = {
      provider: "Proveedores",
      payment: "Pagos",
      task: "Tareas",
      system: "Sistema"
    };
    return types[type as keyof typeof types] || type;
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filterType === "all") return true;
    if (filterType === "unread") return !notification.read;
    return notification.type === filterType;
  });

  return (
    <DashboardLayout userType="client" title="Notificaciones" subtitle="Gestiona tus alertas y actualizaciones">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Bell className="h-6 w-6" />
                <span>Notificaciones</span>
              </CardTitle>
              {unreadCount > 0 && (
                <Badge className="bg-red-500 text-white">
                  {unreadCount} sin leer
                </Badge>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filtrar por tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="unread">Sin leer</SelectItem>
                  <SelectItem value="provider">Proveedores</SelectItem>
                  <SelectItem value="payment">Pagos</SelectItem>
                  <SelectItem value="task">Tareas</SelectItem>
                  <SelectItem value="system">Sistema</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Marcar todas como leídas
              </Button>

              <Button variant="outline">
                <Archive className="h-4 w-4 mr-2" />
                Ver archivo
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Bell className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No hay notificaciones que mostrar</p>
              </div>
            ) : (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border transition-colors ${
                    !notification.read
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-white border-gray-200 opacity-75'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`p-2 rounded-full ${notification.bgColor}`}>
                        <notification.icon className={`h-5 w-5 ${notification.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {notification.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {getTypeLabel(notification.type)}
                          </Badge>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                        <p className={`text-sm mb-2 ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default ClientNotifications;
