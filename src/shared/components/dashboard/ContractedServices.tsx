import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { CheckCircle, AlertCircle } from "lucide-react";

const contractedServicesData = [
  {
    id: 1,
    name: "Foto Elena",
    category: "Fotografía",
    status: "confirmado",
    location: "Madrid"
  },
  {
    id: 2,
    name: "Catering Delicias",
    category: "Catering",
    status: "pendiente",
    location: "Barcelona"
  },
  {
    id: 3,
    name: "Flores & Jardines",
    category: "Decoración",
    status: "confirmado",
    location: "Valencia"
  }
];

const statusColors = {
  confirmado: "bg-green-100 text-green-800",
  pendiente: "bg-yellow-100 text-yellow-800"
};

const ContractedServices = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Servicios Contratados</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contractedServicesData.map((service) => (
            <div
              key={service.id}
              className="flex justify-between items-center p-4 bg-secondary/50 rounded-xl hover:bg-secondary/70 transition-colors"
            >
              <div>
                <div className="font-medium text-foreground">{service.name}</div>
                <div className="text-sm text-muted-foreground">
                  {service.category} • {service.location}
                </div>
              </div>
              <div className="flex space-x-2">
                {service.status === "confirmado" ? (
                  <Button size="sm" variant="success" className="touch-target">
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button size="sm" variant="destructive" className="touch-target">
                    <AlertCircle className="h-4 w-4" />
                  </Button>
                )}
                <Badge className={statusColors[service.status]}>
                  {service.status === "confirmado" ? "Confirmado" : "Pendiente"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { ContractedServices };
