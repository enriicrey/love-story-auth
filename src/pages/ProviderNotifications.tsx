
import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, CheckCircle, Euro, MessageSquare, Star, Settings, Eye, Trash2 } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "client_request",
    title: "Nueva solicitud de cliente",
    description: "Elena & David - Fotografía boda 15 mayo",
    timestamp: "Hace 30 minutos",
    read: false,
    icon: Bell,
    color: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    id: 2,
    type: "payment",
    title: "Pago recibido",
    description: "María & José - €600 (50% anticipo)",
    timestamp: "Hace 2 horas",
    read: false,
    icon: Euro,
    color: "bg-green-100 text-green-800 border-green-200"
  },
  {
    id: 3,
    type: "review",
    title: "Nueva reseña",
    description: "Ana & Carlos te valoró con 5 estrellas",
    timestamp: "Hace 4 horas",
    read: false,
    icon: Star,
    color: "bg-yellow-100 text-yellow-800 border-yellow-200"
  },
  {
    id: 4,
    type: "message",
    title: "Nuevo mensaje",
    description: "Sofia & Miguel: ¿Podemos cambiar la fecha?",
    timestamp: "Ayer",
    read: true,
    icon: MessageSquare,
    color: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    id: 5,
    type: "system",
    title: "Recordatorio de cita",
    description: "Sesión con Laura & Roberto mañana a las 10:00h",
    timestamp: "Ayer",
    read: true,
    icon: Bell,
    color: "bg-gray-100 text-gray-800 border-gray-200"
  },
  {
    id: 6,
    type: "payment",
    title: "Pago pendiente",
    description: "Carmen & Antonio - €750 vence en 3 días",
    timestamp: "Hace 2 días",
    read: true,
    icon: Euro,
    color: "bg-red-100 text-red-800 border-red-200"
  },
  {
    id: 7,
    type: "client_request",
    title: "Solicitud de cambio",
    description: "Patricia & Alejandro - Cambio de fecha ceremonia",
    timestamp: "Hace 3 días",
    read: true,
    icon: Bell,
    color: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    id: 8,
    type: "system",
    title: "Backup completado",
    description: "Respaldo automático de datos realizado correctamente",
    timestamp: "Hace 1 semana",
    read: true,
    icon: Settings,
    color: "bg-gray-100 text-gray-800 border-gray-200"
  }
];

const ProviderNotifications = () => {
  const [filter, setFilter] = useState("all");
  const [notificationList, setNotificationList] = useState(notifications);

  const unreadCount = notificationList.filter(n => !n.read).length;

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "client_request": return "Solicitudes";
      case "payment": return "Pagos";
      case "message": return "Mensajes";
      case "review": return "Reseñas";
      case "system": return "Sistema";
      default: return "Otros";
    }
  };

  const filteredNotifications = notificationList.filter(notification => {
    if (filter === "unread") return !notification.read;
    if (filter === "all") return true;
    return notification.type === filter;
  });

  const markAsRead = (id: number) => {
    setNotificationList(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotificationList(prev => prev.filter(notification => notification.id !== id));
  };

  const clearReadNotifications = () => {
    setNotificationList(prev => prev.filter(notification => !notification.read));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/20">
        <AppSidebar userType="provider" />
        <SidebarInset className="flex-1">
          <DashboardHeader />
          
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Notificaciones</h1>
                  <p className="text-muted-foreground">Mantente al día con tu actividad</p>
                </div>
                
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <Badge className="bg-red-100 text-red-800 border-red-200">
                      {unreadCount} sin leer
                    </Badge>
                  )}
                </div>
              </div>

              {/* Controls */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <Select value={filter} onValueChange={setFilter}>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Filtrar por tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las notificaciones</SelectItem>
                          <SelectItem value="unread">Sin leer</SelectItem>
                          <SelectItem value="client_request">Solicitudes</SelectItem>
                          <SelectItem value="payment">Pagos</SelectItem>
                          <SelectItem value="message">Mensajes</SelectItem>
                          <SelectItem value="review">Reseñas</SelectItem>
                          <SelectItem value="system">Sistema</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={markAllAsRead}>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Marcar todas como leídas
                      </Button>
                      <Button variant="outline" size="sm" onClick={clearReadNotifications}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Limpiar leídas
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4 max-h-[calc(100vh-350px)] overflow-y-auto">
                    {filteredNotifications.map((notification) => {
                      const IconComponent = notification.icon;
                      return (
                        <div
                          key={notification.id}
                          className={`p-4 rounded-lg border transition-colors ${
                            !notification.read 
                              ? 'bg-secondary/20 border-primary/20' 
                              : 'bg-background border-border hover:bg-secondary/5'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`p-2 rounded-full ${notification.color}`}>
                              <IconComponent className="h-4 w-4" />
                            </div>
                            
                            <div className="flex-1 space-y-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    {notification.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {notification.description}
                                  </p>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                  <Badge variant="outline" className="text-xs">
                                    {getTypeLabel(notification.type)}
                                  </Badge>
                                  {!notification.read && (
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-muted-foreground">
                                  {notification.timestamp}
                                </span>
                                
                                <div className="flex space-x-2">
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => console.log('Ver detalles:', notification.id)}
                                  >
                                    <Eye className="h-4 w-4 mr-1" />
                                    Ver
                                  </Button>
                                  
                                  {!notification.read && (
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      onClick={() => markAsRead(notification.id)}
                                    >
                                      <CheckCircle className="h-4 w-4 mr-1" />
                                      Marcar leída
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
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {filteredNotifications.length === 0 && (
                    <div className="text-center py-12">
                      <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {filter === "unread" 
                          ? "No tienes notificaciones sin leer" 
                          : "No hay notificaciones que mostrar"}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProviderNotifications;
