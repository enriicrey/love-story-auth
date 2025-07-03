
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const contractedServices = [
  { id: 1, name: "Foto Elena", service: "Fotografía", status: "confirmado", rating: 4.9, image: "👰" },
  { id: 2, name: "Catering Deluxe", service: "Catering", status: "en_proceso", rating: 4.7, image: "🍽️" },
  { id: 3, name: "DJ Carlos", service: "Música", status: "confirmado", rating: 4.8, image: "🎵" }
];

export const ContractedServices = () => {
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
                <Button size="sm" variant="outline" asChild>
                  <Link to={`/vendors/${service.id}`}>Ver detalles</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
