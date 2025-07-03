
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Heart, Calendar, Euro, Users, CheckCircle, MapPin, Camera, Music, Utensils, Bell, LogOut } from "lucide-react";

const ClientDashboard = () => {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const toggleTask = (taskId: number) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const upcomingEvents = [
    { id: 1, title: "Cita con fotógrafo", provider: "Foto Elena", date: "Mañana 16:00", type: "reunion" },
    { id: 2, title: "Prueba de vestido", provider: "Atelier Rosa", date: "15 Dic 11:00", type: "prueba" },
    { id: 3, title: "Cata catering", provider: "Catering Deluxe", date: "18 Dic 12:30", type: "cata" },
    { id: 4, title: "Reunión DJ", provider: "DJ Carlos", date: "20 Dic 18:00", type: "reunion" }
  ];

  const pendingTasks = [
    { id: 1, title: "Confirmar menú con catering", urgent: true },
    { id: 2, title: "Enviar lista de canciones al DJ", urgent: false },
    { id: 3, title: "Reservar transporte novios", urgent: true },
    { id: 4, title: "Confirmar decoración floral", urgent: false },
    { id: 5, title: "Finalizar lista de invitados", urgent: false },
    { id: 6, title: "Probar el pastel de boda", urgent: false }
  ];

  const contractedServices = [
    { id: 1, name: "Foto Elena", service: "Fotografía", status: "confirmado", rating: 4.9, image: "👰" },
    { id: 2, name: "Catering Deluxe", service: "Catering", status: "en_proceso", rating: 4.7, image: "🍽️" },
    { id: 3, name: "DJ Carlos", service: "Música", status: "confirmado", rating: 4.8, image: "🎵" }
  ];

  const notifications = [
    { id: 1, message: "Foto Elena confirmó la cita de mañana", time: "Hace 2 horas", type: "confirmation" },
    { id: 2, message: "Recordatorio: Pago pendiente Catering Deluxe", time: "Hace 4 horas", type: "payment" },
    { id: 3, message: "Nueva propuesta de DJ Carlos recibida", time: "Ayer", type: "proposal" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Panel de Cliente</h1>
                  <p className="text-sm text-muted-foreground">Gestiona tu boda perfecta</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/">
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </Link>
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">Días para la boda</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">120</div>
                  <div className="text-xs text-muted-foreground">días restantes</div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Euro className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">Presupuesto</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">€15,000</div>
                  <div className="text-xs text-muted-foreground mb-2">de €20,000</div>
                  <Progress value={75} className="h-2" />
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">Servicios</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-xs text-muted-foreground">contratados, 2 pendientes</div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">Invitados</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">85</div>
                  <div className="text-xs text-muted-foreground mb-2">de 120 confirmados</div>
                  <Progress value={71} className="h-2" />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Próximos eventos */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Próximos eventos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex justify-between items-center p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                        <div>
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-muted-foreground">{event.provider}</div>
                        </div>
                        <Badge variant="outline">{event.date}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tareas pendientes */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Tareas pendientes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingTasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className={`text-sm ${completedTasks.includes(task.id) ? 'line-through text-muted-foreground' : ''}`}>
                            {task.title}
                          </span>
                          {task.urgent && !completedTasks.includes(task.id) && (
                            <Badge variant="destructive" className="text-xs">Urgente</Badge>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          variant={completedTasks.includes(task.id) ? "secondary" : "default"}
                          onClick={() => toggleTask(task.id)}
                        >
                          {completedTasks.includes(task.id) ? "Completada" : "Completar"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Servicios contratados */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Servicios contratados</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contractedServices.map((service) => (
                      <div key={service.id} className="p-4 bg-secondary rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{service.image}</span>
                            <div>
                              <div className="font-medium">{service.name}</div>
                              <div className="text-sm text-muted-foreground">{service.service}</div>
                            </div>
                          </div>
                          <Badge 
                            className={service.status === "confirmado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                          >
                            {service.status === "confirmado" ? "Confirmado" : "En proceso"}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            ⭐ {service.rating} valoración
                          </div>
                          <Button size="sm" variant="outline">Ver detalles</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Últimas notificaciones */}
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
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ClientDashboard;
