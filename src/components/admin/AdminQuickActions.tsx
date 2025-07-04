
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, BarChart3, Settings, Users } from "lucide-react";

export const AdminQuickActions = () => {
  return (
    <Card className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
      <CardHeader>
        <CardTitle>Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex-col gap-2">
            <UserCheck className="h-6 w-6" />
            <span>Verificar Proveedores</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2">
            <BarChart3 className="h-6 w-6" />
            <span>Ver Analytics</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2">
            <Settings className="h-6 w-6" />
            <span>Configuración</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2">
            <Users className="h-6 w-6" />
            <span>Gestionar Usuarios</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
