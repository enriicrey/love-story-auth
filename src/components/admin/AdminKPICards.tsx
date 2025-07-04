
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Euro, Building2 } from "lucide-react";

export const AdminKPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card hoverable interactive className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Usuarios
            </CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary">2,450</div>
          <div className="flex items-center space-x-2 text-sm">
            <Badge variant="success" className="text-xs">
              +12.5%
            </Badge>
            <span className="text-muted-foreground">vs mes anterior</span>
          </div>
        </CardContent>
      </Card>

      <Card hoverable interactive className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Proveedores Activos
            </CardTitle>
            <Building2 className="h-5 w-5 text-info" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-info">185</div>
          <div className="flex items-center space-x-2 text-sm">
            <Badge variant="info" className="text-xs">
              +8.2%
            </Badge>
            <span className="text-muted-foreground">crecimiento mensual</span>
          </div>
        </CardContent>
      </Card>

      <Card hoverable interactive className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Bodas este Mes
            </CardTitle>
            <Heart className="h-5 w-5 text-primary fill-current" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary">45</div>
          <div className="flex items-center space-x-2 text-sm">
            <Badge className="text-xs bg-warning/10 text-warning-foreground">
              +3 esta semana
            </Badge>
            <span className="text-muted-foreground">eventos planificados</span>
          </div>
        </CardContent>
      </Card>

      <Card hoverable interactive className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Ingresos Comisiones
            </CardTitle>
            <Euro className="h-5 w-5 text-success" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-success">€12,500</div>
          <div className="flex items-center space-x-2 text-sm">
            <Badge variant="success" className="text-xs">
              +15.3%
            </Badge>
            <span className="text-muted-foreground">objetivo: €15,000</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
