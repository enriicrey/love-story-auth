
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Mail, Phone, Edit, Trash2, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const guestStats = [
  { title: "Total Invitados", count: 120, color: "bg-blue-500", textColor: "text-blue-600" },
  { title: "Confirmados", count: 85, color: "bg-green-500", textColor: "text-green-600" },
  { title: "Pendientes", count: 25, color: "bg-yellow-500", textColor: "text-yellow-600" },
  { title: "Rechazados", count: 10, color: "bg-red-500", textColor: "text-red-600" },
];

const mockGuests = [
  { id: 1, name: "María García", email: "maria@email.com", phone: "+34 600 123 456", group: "Familia", status: "confirmed", dietary: "Normal" },
  { id: 2, name: "José González", email: "jose@email.com", phone: "+34 600 234 567", group: "Familia", status: "confirmed", dietary: "Vegetariano" },
  { id: 3, name: "Ana Martínez", email: "ana@email.com", phone: "+34 600 345 678", group: "Familia", status: "pending", dietary: "Sin gluten" },
  { id: 4, name: "Carlos Ruiz", email: "carlos@email.com", phone: "+34 600 456 789", group: "Amigos", status: "confirmed", dietary: "Normal" },
  { id: 5, name: "Elena Vega", email: "elena@email.com", phone: "+34 600 567 890", group: "Amigos", status: "pending", dietary: "Normal" },
  { id: 6, name: "David Torres", email: "david@email.com", phone: "+34 600 678 901", group: "Amigos", status: "rejected", dietary: "Vegetariano" },
  { id: 7, name: "Roberto Jefe", email: "roberto@empresa.com", phone: "+34 600 789 012", group: "Trabajo", status: "confirmed", dietary: "Normal" },
  { id: 8, name: "Sara Compañera", email: "sara@empresa.com", phone: "+34 600 890 123", group: "Trabajo", status: "pending", dietary: "Sin gluten" },
];

const ClientGuests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isAddGuestOpen, setIsAddGuestOpen] = useState(false);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      confirmed: { label: "Confirmado", variant: "default" as const, className: "bg-green-100 text-green-800" },
      pending: { label: "Pendiente", variant: "secondary" as const, className: "bg-yellow-100 text-yellow-800" },
      rejected: { label: "Rechazado", variant: "destructive" as const, className: "bg-red-100 text-red-800" },
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const getGroupBadge = (group: string) => {
    const groupColors = {
      Familia: "bg-blue-100 text-blue-800",
      Amigos: "bg-purple-100 text-purple-800",
      Trabajo: "bg-orange-100 text-orange-800",
      Pareja: "bg-pink-100 text-pink-800",
    };
    return <Badge className={groupColors[group as keyof typeof groupColors] || "bg-gray-100 text-gray-800"}>{group}</Badge>;
  };

  const filteredGuests = mockGuests.filter(guest => {
    const matchesSearch = guest.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = filterGroup === "all" || guest.group === filterGroup;
    const matchesStatus = filterStatus === "all" || guest.status === filterStatus;
    return matchesSearch && matchesGroup && matchesStatus;
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {guestStats.map((stat, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${stat.color} bg-opacity-20`}>
                        <Users className={`h-6 w-6 ${stat.textColor}`} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.count}</div>
                        <div className="text-sm text-muted-foreground">{stat.title}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filters and Search */}
            <Card className="shadow-lg mb-6">
              <CardHeader>
                <CardTitle>Gestión de Invitados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Buscar por nombre..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={filterGroup} onValueChange={setFilterGroup}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filtrar por grupo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los grupos</SelectItem>
                      <SelectItem value="Familia">Familia</SelectItem>
                      <SelectItem value="Amigos">Amigos</SelectItem>
                      <SelectItem value="Trabajo">Trabajo</SelectItem>
                      <SelectItem value="Pareja">Pareja</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filtrar por estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los estados</SelectItem>
                      <SelectItem value="confirmed">Confirmados</SelectItem>
                      <SelectItem value="pending">Pendientes</SelectItem>
                      <SelectItem value="rejected">Rechazados</SelectItem>
                    </SelectContent>
                  </Select>

                  <Dialog open={isAddGuestOpen} onOpenChange={setIsAddGuestOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Añadir Invitado
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Añadir Nuevo Invitado</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" placeholder="Nombre completo" />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="email@ejemplo.com" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input id="phone" placeholder="+34 600 123 456" />
                          </div>
                          <div>
                            <Label htmlFor="group">Grupo</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccionar grupo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Familia">Familia</SelectItem>
                                <SelectItem value="Amigos">Amigos</SelectItem>
                                <SelectItem value="Trabajo">Trabajo</SelectItem>
                                <SelectItem value="Pareja">Pareja</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="dietary">Restricciones Alimentarias</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar restricción" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Normal">Normal</SelectItem>
                              <SelectItem value="Vegetariano">Vegetariano</SelectItem>
                              <SelectItem value="Sin gluten">Sin gluten</SelectItem>
                              <SelectItem value="Vegano">Vegano</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setIsAddGuestOpen(false)}>
                            Cancelar
                          </Button>
                          <Button onClick={() => setIsAddGuestOpen(false)}>
                            Añadir Invitado
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Guests Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Nombre</th>
                        <th className="text-left py-3 px-4 font-medium">Contacto</th>
                        <th className="text-left py-3 px-4 font-medium">Grupo</th>
                        <th className="text-left py-3 px-4 font-medium">Estado</th>
                        <th className="text-left py-3 px-4 font-medium">Menú</th>
                        <th className="text-left py-3 px-4 font-medium">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredGuests.map((guest) => (
                        <tr key={guest.id} className="border-b hover:bg-secondary/50">
                          <td className="py-3 px-4 font-medium">{guest.name}</td>
                          <td className="py-3 px-4">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <a href={`mailto:${guest.email}`} className="text-sm hover:underline">
                                  {guest.email}
                                </a>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <a href={`tel:${guest.phone}`} className="text-sm hover:underline">
                                  {guest.phone}
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">{getGroupBadge(guest.group)}</td>
                          <td className="py-3 px-4">{getStatusBadge(guest.status)}</td>
                          <td className="py-3 px-4">
                            <span className="text-sm">{guest.dietary}</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ClientGuests;
