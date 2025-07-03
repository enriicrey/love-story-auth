
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Heart } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: number;
    vendorName: string;
    service: string;
    status: string;
    price: number;
    date: string;
    image: string;
    package: string;
  };
}

const getStatusConfig = (status: string) => {
  switch (status) {
    case "confirmado":
      return { label: "Confirmado", className: "bg-green-100 text-green-800" };
    case "pendiente":
      return { label: "Pendiente", className: "bg-yellow-100 text-yellow-800" };
    case "cotizacion":
      return { label: "Cotización", className: "bg-blue-100 text-blue-800" };
    case "favorito":
      return { label: "Favorito", className: "bg-pink-100 text-pink-800" };
    default:
      return { label: status, className: "bg-gray-100 text-gray-800" };
  }
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const statusConfig = getStatusConfig(service.status);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{service.image}</div>
            <div>
              <h3 className="font-semibold">{service.vendorName}</h3>
              <p className="text-sm text-muted-foreground">{service.service}</p>
            </div>
          </div>
          <Badge className={statusConfig.className}>
            {statusConfig.label}
          </Badge>
        </div>
        
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Paquete:</span>
            <span className="font-medium">{service.package}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Precio:</span>
            <span className="font-semibold text-primary">€{service.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Fecha:</span>
            <span>{new Date(service.date).toLocaleDateString()}</span>
          </div>
        </div>
      </CardHeader>

      <CardFooter className="pt-0 gap-2">
        {service.status === "favorito" ? (
          <>
            <Button variant="outline" size="sm" className="flex-1">
              <Heart className="h-4 w-4 mr-2" />
              Quitar
            </Button>
            <Button asChild size="sm" className="flex-1">
              <Link to={`/vendors/${service.id}`}>Ver Detalles</Link>
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" size="sm" className="flex-1">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contactar
            </Button>
            <Button asChild size="sm" className="flex-1">
              <Link to={`/vendors/${service.id}`}>Ver Detalles</Link>
            </Button>
            {service.status === "pendiente" && (
              <Button variant="destructive" size="sm">
                <X className="h-4 w-4" />
              </Button>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  );
};
