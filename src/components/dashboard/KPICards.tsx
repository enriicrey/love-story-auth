
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Euro, CheckCircle, Users } from "lucide-react";

export const KPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle className="text-sm">Días para la boda</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">120</div>
          <div className="text-xs text-muted-foreground">días restantes</div>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <Euro className="h-5 w-5 text-primary" />
            <CardTitle className="text-sm">Presupuesto</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">€15,000</div>
          <div className="text-xs text-muted-foreground mb-2">de €20,000</div>
          <Progress value={75} className="h-2" />
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <CardTitle className="text-sm">Servicios</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">6</div>
          <div className="text-xs text-muted-foreground">contratados, 2 pendientes</div>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary" />
            <CardTitle className="text-sm">Invitados</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">85</div>
          <div className="text-xs text-muted-foreground mb-2">de 120 confirmados</div>
          <Progress value={71} className="h-2" />
        </CardContent>
      </Card>
    </div>
  );
};
