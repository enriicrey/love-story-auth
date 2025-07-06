
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { KPICard } from "@/shared/components/kpi-card";
import { Calendar, Euro, CheckCircle, Users } from "lucide-react";

export const KPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Link to="/client/calendar">
        <KPICard
          title="Días para la boda"
          value="120"
          subtitle="días restantes"
          color="primary"
          icon={Calendar}
        />
      </Link>

      <Link to="/client/budget">
        <KPICard
          title="Presupuesto"
          value="€15,000"
          subtitle="de €20,000"
          color="primary"
          icon={Euro}
          progress={75}
        />
      </Link>

      <Link to="/client/services">
        <KPICard
          title="Servicios"
          value="6"
          subtitle="contratados, 2 pendientes"
          color="primary"
          icon={CheckCircle}
        />
      </Link>

      <KPICard
        title="Invitados"
        value="85"
        subtitle="de 120 confirmados"
        color="primary"
        icon={Users}
        progress={71}
      />
    </div>
  );
};
