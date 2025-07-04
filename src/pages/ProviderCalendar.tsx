
import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar as CalendarIcon, Clock, MapPin, User, X } from "lucide-react";

const mockEvents = [
  {
    id: 1,
    title: "Reunión inicial - María & José",
    time: "10:00h",
    date: new Date(2024, 2, 15),
    type: "client",
    client: "María & José",
    location: "Estudio fotográfico"
  },
  {
    id: 2,
    title: "Entrega fotos - Ana & Carlos",
    time: "16:00h",
    date: new Date(2024, 2, 18),
    type: "client",
    client: "Ana & Carlos",
    location: "Online"
  },
  {
    id: 3,
    title: "Prueba servicio - Elena & David",
    time: "18:30h",
    date: new Date(2024, 2, 22),
    type: "client",
    client: "Elena & David",
    location: "Salón de eventos"
  },
  {
    id: 4,
    title: "Día libre",
    time: "Todo el día",
    date: new Date(2024, 2, 25),
    type: "personal",
    client: null,
    location: null
  },
  {
    id: 5,
    title: "Sesión pre-boda - Sofia & Miguel",
    time: "09:00h",
    date: new Date(2024, 2, 28),
    type: "client",
    client: "Sofia & Miguel",
    location: "Parque Retiro"
  }
];

const ProviderCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEvents, setSelectedEvents] = useState(mockEvents.slice(0, 3));

  const upcomingEvents = mockEvents
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  const getEventBadge = (type: string) => {
    switch (type) {
      case "client":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Cliente</Badge>;
      case "personal":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Personal</Badge>;
      default:
        return <Badge>Evento</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/20">
        <AppSidebar userType="provider" />
        <SidebarInset className="flex-1">
          <DashboardHeader />
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Mi Calendario</h1>
                  <p className="text-muted-foreground">Gestiona tus citas y disponibilidad</p>
                </div>
                
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <X className="h-4 w-4 mr-2" />
                        Bloquear Día
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Bloquear Disponibilidad</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <label htmlFor="blockDate">Fecha</label>
                          <Input id="blockDate" type="date" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="reason">Motivo</label>
                          <Input id="reason" placeholder="Vacaciones, día libre, etc." />
                        </div>
                        <Button className="w-full">Bloquear Día</Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary hover:bg-primary/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Nuevo Evento
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Crear Evento</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <label htmlFor="eventTitle">Título del evento</label>
                          <Input id="eventTitle" placeholder="Reunión con cliente..." />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="eventDate">Fecha</label>
                          <Input id="eventDate" type="date" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="eventTime">Hora</label>
                          <Input id="eventTime" type="time" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="eventLocation">Ubicación</label>
                          <Input id="eventLocation" placeholder="Dirección o lugar" />
                        </div>
                        <Button className="w-full">Crear Evento</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar */}
                <div className="lg:col-span-2">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                        Calendario
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border w-full"
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar Events */}
                <div className="space-y-6">
                  {/* Upcoming Events */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Próximas Citas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingEvents.map((event) => (
                          <div key={event.id} className="p-3 border rounded-lg hover:bg-secondary/10 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-sm">{event.title}</h4>
                              {getEventBadge(event.type)}
                            </div>
                            
                            <div className="space-y-1 text-xs text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <CalendarIcon className="h-3 w-3" />
                                {event.date.toLocaleDateString('es-ES')}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3" />
                                {event.time}
                              </div>
                              {event.location && (
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-3 w-3" />
                                  {event.location}
                                </div>
                              )}
                              {event.client && (
                                <div className="flex items-center gap-2">
                                  <User className="h-3 w-3" />
                                  {event.client}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Selected Day Events */}
                  {selectedDate && (
                    <Card className="shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Eventos del {selectedDate.toLocaleDateString('es-ES')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {selectedEvents.length > 0 ? (
                            selectedEvents.map((event) => (
                              <div key={event.id} className="p-3 border rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-medium text-sm">{event.title}</h4>
                                  {getEventBadge(event.type)}
                                </div>
                                <div className="text-xs text-muted-foreground space-y-1">
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-3 w-3" />
                                    {event.time}
                                  </div>
                                  {event.location && (
                                    <div className="flex items-center gap-2">
                                      <MapPin className="h-3 w-3" />
                                      {event.location}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-sm text-muted-foreground text-center py-4">
                              No hay eventos programados para este día
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProviderCalendar;
