
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Euro, CheckCircle, Users } from "lucide-react";

interface KPICardsProps {
  data?: {
    totalContracts: number;
    totalBudget: number;
    pendingPayments: number;
    upcomingEvents: number;
  };
}

export const KPICards = ({ data }: KPICardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Link to="/client/calendar">
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
      </Link>

      <Link to="/client/budget">
        <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Euro className="h-5 w-5 text-primary" />
              <CardTitle className="text-sm">Presupuesto</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">€{data?.totalBudget?.toLocaleString() || '0'}</div>
            <div className="text-xs text-muted-foreground mb-2">gastado en servicios</div>
          </CardContent>
        </Card>
      </Link>

      <Link to="/client/services">
        <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <CardTitle className="text-sm">Servicios</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{data?.totalContracts || 0}</div>
            <div className="text-xs text-muted-foreground">servicios contratados</div>
          </CardContent>
        </Card>
      </Link>

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
