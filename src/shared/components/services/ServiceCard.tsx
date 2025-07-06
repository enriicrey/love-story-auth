import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Service {
  id: number | string;
  vendorName: string;
  service: string;
  status: string;
  price: number;
  date: string;
  image?: string;
  package?: string;
}

export interface ServiceCardProps {
  service: Service;
  onEdit?: (service: Service) => void;
  onDelete?: (service: Service) => void;
  className?: string;
}

const statusColors: Record<string, string> = {
  confirmado: "bg-green-100 text-green-800",
  pendiente: "bg-yellow-100 text-yellow-800",
  cotizacion: "bg-gray-100 text-gray-800",
  favorito: "bg-pink-100 text-pink-800",
};

export const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ service, onEdit, onDelete, className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn("shadow-lg hover:shadow-xl transition-shadow", className)}
        {...props}
      >
        <CardHeader className="flex items-center space-x-4 pb-3">
          <div className="text-4xl">{service.image || "🎉"}</div>
          <div className="flex-1">
            <CardTitle className="text-lg">{service.vendorName}</CardTitle>
            <p className="text-sm text-muted-foreground">{service.service}</p>
            {service.package && (
              <Badge className="mt-1">{service.package}</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Fecha:</span>
            <span className="font-semibold">{service.date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Precio:</span>
            <span className="font-semibold">€{service.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Estado:</span>
            <Badge className={statusColors[service.status] || "bg-gray-100 text-gray-800"}>
              {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
            </Badge>
          </div>
          {(onEdit || onDelete) && (
            <div className="flex space-x-2 mt-4">
              {onEdit && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(service)}
                  aria-label={`Editar servicio ${service.service}`}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(service)}
                  aria-label={`Eliminar servicio ${service.service}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);

ServiceCard.displayName = "ServiceCard";
