import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export const PendingTasks = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Tareas Pendientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <TaskItem
            title="Confirmar menú con Catering Deluxe"
            description="Revisar opciones y confirmar antes del viernes"
          />
          <TaskItem
            title="Enviar invitaciones digitales"
            description="Diseñar y programar el envío"
            isImportant
          />
          <TaskItem
            title="Seleccionar música para la ceremonia"
            description="Elegir canciones especiales"
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface TaskItemProps {
  title: string;
  description: string;
  isImportant?: boolean;
}

const TaskItem = ({ title, description, isImportant }: TaskItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {isImportant ? (
        <AlertTriangle className="h-5 w-5 text-red-500" />
      ) : (
        <CheckCircle2 className="h-5 w-5 text-green-500" />
      )}
    </div>
  );
};
