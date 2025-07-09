
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";

interface ContractedService {
  id: string;
  service_name: string;
  provider_name: string;
  category: string;
  status: string;
  total_amount: number;
  event_date: string;
}

export const ContractedServices = () => {
  const { user } = useAuth();
  const [services, setServices] = useState<ContractedService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadContractedServices();
    }
  }, [user]);

  const loadContractedServices = async () => {
    if (!user) return;

    try {
      // Get contracts with basic service info (no joins for now)
      const { data, error } = await supabase
        .from('service_contracts')
        .select('*')
        .eq('client_id', user.id)
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;

      const formattedServices = data?.map(contract => ({
        id: contract.id,
        service_name: `Servicio ${contract.service_id.slice(0, 8)}`,
        provider_name: `Proveedor ${contract.provider_id.slice(0, 8)}`,
        category: 'General',
        status: contract.status,
        total_amount: contract.total_amount || 0,
        event_date: contract.event_date || ''
      })) || [];

      setServices(formattedServices);
    } catch (error) {
      console.error('Error loading contracted services:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'accepted':
        return <Badge className="bg-green-100 text-green-800">Confirmado</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800">Completado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'fotografia': '📸',
      'catering': '🍽️',
      'musica': '🎵',
      'flores': '💐',
      'venue': '🏛️',
      'vestidos': '👗',
      'organizacion': '📋'
    };
    return icons[category.toLowerCase()] || '💍';
  };
  if (loading) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <Heart className="h-5 w-5" />
            <span>Servicios contratados</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-muted-foreground">Cargando servicios...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center space-x-2">
            <Heart className="h-5 w-5" />
            <span>Servicios contratados</span>
          </CardTitle>
          <Button variant="outline" size="sm" asChild>
            <Link to="/client/services">Ver todos</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {services.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-muted-foreground mb-4">No tienes servicios contratados aún</div>
            <Button asChild>
              <Link to="/vendors">Explorar proveedores</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="p-4 bg-secondary rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                    <div>
                      <div className="font-medium">{service.service_name}</div>
                      <div className="text-sm text-muted-foreground">{service.provider_name}</div>
                    </div>
                  </div>
                  {getStatusBadge(service.status)}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    €{service.total_amount.toLocaleString()}
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link to={`/vendors/${service.id}`}>Ver detalles</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
