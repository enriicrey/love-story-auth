
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const recentActivities = [
  { id: 1, type: 'user', message: 'Nuevo cliente registrado: María González', time: '2 min', status: 'success' },
  { id: 2, type: 'provider', message: 'Proveedor verificado: Foto Elena Studio', time: '15 min', status: 'info' },
  { id: 3, type: 'booking', message: 'Nueva contratación: Catering Deluxe', time: '1 hora', status: 'success' },
  { id: 4, type: 'system', message: 'Backup automatico completado', time: '2 horas', status: 'default' },
  { id: 5, type: 'payment', message: 'Pago procesado: €1,200 comisión', time: '3 horas', status: 'success' }
];

export const AdminRecentActivity = () => {
  return (
    <Card className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Actividad Reciente</span>
          </CardTitle>
          <Button variant="outline" size="sm">
            Ver Todo
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 custom-scrollbar max-h-80 overflow-y-auto">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className={cn(
                "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                activity.status === 'success' && "bg-success",
                activity.status === 'info' && "bg-info", 
                activity.status === 'default' && "bg-muted-foreground"
              )} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.message}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <Button variant="ghost" size="xs">
                Ver
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
