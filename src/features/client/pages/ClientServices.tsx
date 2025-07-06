import { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/shared/layout/DashboardLayout";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { ServiceCard } from "@/shared/components/services/ServiceCard";
import { Plus, Search } from "lucide-react";

const ClientServices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contractedServices = [
    {
      id: 1,
      vendorName: "Elena Rodríguez",
      service: "Fotografía",
      status: "confirmado",
      price: 1200,
      date: "2024-06-15",
      image: "📸",
      package: "Premium"
    },
    {
      id: 2,
      vendorName: "Catering Deluxe",
      service: "Catering",
      status: "confirmado",
      price: 2500,
      date: "2024-06-15",
      image: "🍽️",
      package: "Deluxe"
    },
    {
      id: 3,
      vendorName: "DJ Carlos",
      service: "Música",
      status: "confirmado",
      price: 800,
      date: "2024-06-15",
      image: "🎵",
      package: "Básico"
    }
  ];

  const pendingServices = [
    {
      id: 4,
      vendorName: "Flores & Co",
      service: "Decoración",
      status: "pendiente",
      price: 1500,
      date: "2024-06-15",
      image: "🌸",
      package: "Premium"
    },
    {
      id: 5,
      vendorName: "Elegance Decor",
      service: "Decoración",
      status: "cotizacion",
      price: 1800,
      date: "2024-06-15",
      image: "✨",
      package: "Deluxe"
    }
  ];

  const favoriteServices = [
    {
      id: 6,
      vendorName: "Banda Sonora",
      service: "Música",
      status: "favorito",
      price: 1200,
      date: "2024-06-15",
      image: "🎤",
      package: "Premium"
    },
    {
      id: 7,
      vendorName: "Carlos Vega",
      service: "Fotografía",
      status: "favorito",
      price: 900,
      date: "2024-06-15",
      image: "📷",
      package: "Básico"
    }
  ];

  const filterServices = (services: any[]) => {
    return services.filter(service =>
      service.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.service.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <DashboardLayout userType="client" title="Mis Servicios" subtitle="Gestiona tus servicios contratados y solicitudes">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <Button asChild>
          <Link to="/vendors">
            <Plus className="h-4 w-4 mr-2" />
            Buscar Servicios
          </Link>
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por proveedor o servicio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="confirmados">Confirmados ({contractedServices.length})</TabsTrigger>
          <TabsTrigger value="pendientes">Pendientes ({pendingServices.length})</TabsTrigger>
          <TabsTrigger value="favoritos">Favoritos ({favoriteServices.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="todos" className="mt-6">
          <div className="space-y-6">
            {contractedServices.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Servicios Confirmados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filterServices(contractedServices).map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            )}

            {pendingServices.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Servicios Pendientes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filterServices(pendingServices).map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            )}

            {favoriteServices.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Favoritos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filterServices(favoriteServices).map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="confirmados" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterServices(contractedServices).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pendientes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterServices(pendingServices).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favoritos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterServices(favoriteServices).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default ClientServices;
