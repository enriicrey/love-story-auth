
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Heart, Calendar, Euro, Users, TrendingUp, Star, MessageCircle, Bell, LogOut, BarChart3 } from "lucide-react";

const ProviderDashboard = () => {
  const recentClients = [
    { id: 1, names: "Ana & Carlos", wedding_date: "15 Jun 2024", status: "confirmado", service: "Fotografía", avatar: "👰" },
    { id: 2, names: "María & David", wedding_date: "22 Jun 2024", status: "pendiente", service: "Fotografía", avatar: "💑" },
    { id: 3, names: "Laura & Miguel", wedding_date: "5 Jul 2024", status: "confirmado", service: "Fotografía", avatar: "👫" },
    { id: 4, names: "Carmen & Javier", wedding_date: "12 Jul 2024", status: "propuesta", service: "Fotografía", avatar: "💕" },
    { id: 5, names: "Sofia & Antonio", wedding_date: "20 Jul 2024", status: "confirmado", service: "Fotografía", avatar: "👩‍❤️‍👨" }
  ];

  const upcomingAppointments = [
    { id: 1, client: "Ana & Carlos", type: "Sesión pre-boda", date: "Mañana", time: "16:00" },
    { id: 2, client: "María & David", type: "Reunión inicial", date: "15 Dic", time: "11:00" },
    { id: 3, client: "Laura & Miguel", type: "Entrega fotos", date: "18 Dic", time: "17:30" }
  ];

  const monthlyRevenue = [
    { month: "Jul", amount: 6200 },
    { month: "Ago", amount: 7100 },
    { month: "Sep", amount: 8500 },
    { month: "Oct", amount: 9200 },
    { month: "Nov", amount: 8800 },
    { month: "Dic", amount: 8500 }
  ];

  const pendingTasks = [
    { id: 1, task: "Enviar propuesta a Carmen & Javier", priority: "alta" },
    { id: 2, task: "Confirmar ubicación sesión Ana & Carlos", priority: "media" },
    { id: 3, task: "Actualizar portfolio online", priority: "baja" },
    { id: 4, task: "Responder consulta María & David", priority: "alta" },
    { id: 5, task: "Preparar contrato Laura & Miguel", priority: "media" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="provider" />
        
        <main className="flex-1">
          <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Panel de Proveedor</h1>
                  <p className="text-sm text-muted-foreground">Gestiona tu negocio de fotografía</p>
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
                    <Euro className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">Ingresos mes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">€8,500</div>
                  <div className="text-xs text-green-600">+15% vs mes anterior</div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">Clientes activos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-xs text-muted-foreground">bodas programadas</div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">Valoración</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">4.8</div>
                  <div className="text-xs text-muted-foreground">⭐ (47 reseñas)</div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">Próximas citas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">reuniones esta semana</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Clientes recientes */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Clientes recientes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentClients.map((client) => (
                      <div key={client.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{client.avatar}</span>
                          <div>
                            <div className="font-medium">{client.names}</div>
                            <div className="text-sm text-muted-foreground">{client.service} • {client.wedding_date}</div>
                          </div>
                        </div>
                        <Badge 
                          className={
                            client.status === "confirmado" ? "bg-green-100 text-green-800" : 
                            client.status === "pendiente" ? "bg-yellow-100 text-yellow-800" : 
                            "bg-blue-100 text-blue-800"
                          }
                        >
                          {client.status === "confirmado" ? "Confirmado" : 
                           client.status === "pendiente" ? "Pendiente" : "Propuesta"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Citas próximas */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Citas próximas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="p-4 bg-secondary rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{appointment.client}</div>
                            <div className="text-sm text-muted-foreground">{appointment.type}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{appointment.date}</div>
                            <div className="text-sm text-muted-foreground">{appointment.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Ver calendario completo
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Gráfico de ingresos */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Ingresos últimos 6 meses</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyRevenue.map((data, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{data.month}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-secondary rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${(data.amount / 10000) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-16 text-right">€{data.amount.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tareas pendientes */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Tareas pendientes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingTasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <span className="text-sm">{task.task}</span>
                        <Badge 
                          variant={task.priority === "alta" ? "destructive" : task.priority === "media" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {task.priority === "alta" ? "Alta" : task.priority === "media" ? "Media" : "Baja"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Ver todas las tareas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ProviderDashboard;
