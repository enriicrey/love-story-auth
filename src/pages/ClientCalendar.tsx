
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Reunión con fotógrafa",
    provider: "Foto Elena",
    date: "2024-01-15",
    time: "10:00",
    type: "reunion",
    location: "Estudio Elena",
    status: "confirmado"
  },
  {
    id: 2,
    title: "Prueba de vestido",
    provider: "Atelier Rosa",
    date: "2024-01-22",
    time: "16:00",
    type: "prueba",
    location: "Atelier Rosa - Centro",
    status: "confirmado"
  },
  {
    id: 3,
    title: "Cata catering",
    provider: "Catering Deluxe",
    date: "2024-01-28",
    time: "18:30",
    type: "cata",
    location: "Sede Catering Deluxe",
    status: "pendiente"
  },
  {
    id: 4,
    title: "Pago DJ",
    provider: "DJ Carlos",
    date: "2024-02-05",
    time: "12:00",
    type: "pago",
    location: "Online",
    status: "recordatorio"
  },
  {
    id: 5,
    title: "Ensayo ceremonia",
    provider: "Iglesia San Miguel",
    date: "2024-02-12",
    time: "11:00",
    type: "ensayo",
    location: "Iglesia San Miguel",
    status: "confirmado"
  },
  {
    id: 6,
    title: "Confirmar invitados",
    provider: "Personal",
    date: "2024-01-20",
    time: "19:00",
    type: "tarea",
    location: "Casa",
    status: "pendiente"
  }
];

const eventTypeColors = {
  reunion: "bg-blue-100 text-blue-800",
  prueba: "bg-purple-100 text-purple-800",
  cata: "bg-green-100 text-green-800",
  pago: "bg-yellow-100 text-yellow-800",
  ensayo: "bg-indigo-100 text-indigo-800",
  tarea: "bg-pink-100 text-pink-800"
};

const eventTypeLabels = {
  reunion: "Reunión",
  prueba: "Prueba",
  cata: "Cata",
  pago: "Pago",
  ensayo: "Ensayo",
  tarea: "Tarea"
};

const ClientCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [showNewEventModal, setShowNewEventModal] = useState(false);

  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    return events
      .filter(event => new Date(event.date) >= today)
      .filter(event => selectedFilter === "todos" || event.type === selectedFilter)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 7);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Calendario</h1>
              <p className="text-muted-foreground">Organiza tus eventos y tareas</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Calendar */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span>Calendario</span>
                      </CardTitle>
                      <Dialog open={showNewEventModal} onOpenChange={setShowNewEventModal}>
                        <DialogTrigger asChild>
                          <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Nuevo Evento
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Crear Nuevo Evento</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="title">Título</Label>
                              <Input id="title" placeholder="Título del evento" />
                            </div>
                            <div>
                              <Label htmlFor="date">Fecha</Label>
                              <Input id="date" type="date" />
                            </div>
                            <div>
                              <Label htmlFor="time">Hora</Label>
                              <Input id="time" type="time" />
                            </div>
                            <div>
                              <Label htmlFor="type">Tipo</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccionar tipo" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="reunion">Reunión</SelectItem>
                                  <SelectItem value="prueba">Prueba</SelectItem>
                                  <SelectItem value="cata">Cata</SelectItem>
                                  <SelectItem value="pago">Pago</SelectItem>
                                  <SelectItem value="ensayo">Ensayo</SelectItem>
                                  <SelectItem value="tarea">Tarea</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="location">Ubicación</Label>
                              <Input id="location" placeholder="Ubicación del evento" />
                            </div>
                            <div>
                              <Label htmlFor="notes">Notas</Label>
                              <Textarea id="notes" placeholder="Notas adicionales" />
                            </div>
                            <div className="flex space-x-2">
                              <Button className="flex-1">Crear Evento</Button>
                              <Button variant="outline" onClick={() => setShowNewEventModal(false)}>
                                Cancelar
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                    
                    {selectedDate && (
                      <div className="mt-6">
                        <h3 className="font-semibold mb-3">
                          Eventos para {formatDate(selectedDate.toISOString().split('T')[0])}
                        </h3>
                        <div className="space-y-2">
                          {getEventsForDate(selectedDate).length > 0 ? (
                            getEventsForDate(selectedDate).map((event) => (
                              <div key={event.id} className="p-3 bg-secondary rounded-lg">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">{event.title}</p>
                                    <p className="text-sm text-muted-foreground flex items-center">
                                      <Clock className="h-4 w-4 mr-1" />
                                      {event.time} - {event.provider}
                                    </p>
                                    <p className="text-sm text-muted-foreground flex items-center">
                                      <MapPin className="h-4 w-4 mr-1" />
                                      {event.location}
                                    </p>
                                  </div>
                                  <Badge className={eventTypeColors[event.type]}>
                                    {eventTypeLabels[event.type]}
                                  </Badge>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-muted-foreground">No hay eventos programados para este día</p>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Filter */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Filtros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="reunion">Reuniones</SelectItem>
                        <SelectItem value="prueba">Pruebas</SelectItem>
                        <SelectItem value="cata">Catas</SelectItem>
                        <SelectItem value="pago">Pagos</SelectItem>
                        <SelectItem value="ensayo">Ensayos</SelectItem>
                        <SelectItem value="tarea">Tareas</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Próximos Eventos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {getUpcomingEvents().map((event) => (
                        <div key={event.id} className="p-3 bg-secondary rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-sm">{event.title}</p>
                            <Badge className={`${eventTypeColors[event.type]} text-xs`}>
                              {eventTypeLabels[event.type]}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{event.provider}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(event.date)} - {event.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ClientCalendar;
