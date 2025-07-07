
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Badge } from "@/shared/ui/badge";
import { Search, Plus, MessageCircle, Eye, Edit, Heart, MapPin, Calendar } from "lucide-react";

const mockClients = [
  {
    id: 1,
    names: "María & José",
    weddingDate: "2024-03-15",
    location: "Barcelona",
    status: "confirmed",
    package: "Paquete Premium",
    price: 1200,
    phone: "+34 666 777 888"
  },
  {
    id: 2,
    names: "Ana & Carlos",
    weddingDate: "2024-04-20",
    location: "Madrid",
    status: "quotation",
    package: "Paquete Básico",
    price: 800,
    phone: "+34 666 777 889"
  },
  {
    id: 3,
    names: "Elena & David",
    weddingDate: "2024-05-10",
    location: "Valencia",
    status: "completed",
    package: "Paquete Deluxe",
    price: 1500,
    phone: "+34 666 777 890"
  },
  {
    id: 4,
    names: "Sofia & Miguel",
    weddingDate: "2024-06-08",
    location: "Sevilla",
    status: "confirmed",
    package: "Paquete Premium",
    price: 1200,
    phone: "+34 666 777 891"
  },
  {
    id: 5,
    names: "Laura & Roberto",
    weddingDate: "2024-07-22",
    location: "Bilbao",
    status: "quotation",
    package: "Paquete Básico",
    price: 900,
    phone: "+34 666 777 892"
  },
  {
    id: 6,
    names: "Carmen & Antonio",
    weddingDate: "2024-08-15",
    location: "Granada",
    status: "confirmed",
    package: "Paquete Deluxe",
    price: 1400,
    phone: "+34 666 777 893"
  }
];

const ProviderClients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Confirmado</Badge>;
      case "quotation":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Cotización</Badge>;
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Completado</Badge>;
      default:
        return <Badge>Desconocido</Badge>;
    }
  };

  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.names.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
                  <h1 className="text-3xl font-bold text-foreground mb-2">Mis Clientes</h1>
                  <p className="text-muted-foreground">Gestiona tus clientes y sus bodas</p>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Plus className="h-4 w-4 mr-2" />
                      Nuevo Cliente
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Añadir Nuevo Cliente</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label htmlFor="clientNames">Nombres de la pareja</label>
                        <Input id="clientNames" placeholder="Ej: María & José" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="weddingDate">Fecha de la boda</label>
                        <Input id="weddingDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="location">Ubicación</label>
                        <Input id="location" placeholder="Ciudad del evento" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone">Teléfono</label>
                        <Input id="phone" placeholder="+34 666 777 888" />
                      </div>
                      <Button className="w-full">Añadir Cliente</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Filters */}
              <Card className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Buscar por nombre..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los estados</SelectItem>
                      <SelectItem value="confirmed">Confirmados</SelectItem>
                      <SelectItem value="quotation">Cotizaciones</SelectItem>
                      <SelectItem value="completed">Completados</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Fecha boda" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las fechas</SelectItem>
                      <SelectItem value="3months">Próximos 3 meses</SelectItem>
                      <SelectItem value="6months">Próximos 6 meses</SelectItem>
                      <SelectItem value="more">Más de 6 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              {/* Clients Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClients.map((client) => (
                  <Card key={client.id} className="hover:shadow-xl transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Heart className="h-5 w-5 text-primary fill-current" />
                            {client.names}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(client.weddingDate).toLocaleDateString('es-ES')}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {client.location}
                          </div>
                        </div>
                        {getStatusBadge(client.status)}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        <div className="bg-secondary/20 p-3 rounded-lg">
                          <p className="font-medium">{client.package}</p>
                          <p className="text-2xl font-bold text-primary">€{client.price}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-1" />
                            Ver
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Chat
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredClients.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No se encontraron clientes que coincidan con los filtros.</p>
                </div>
              )}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProviderClients;
