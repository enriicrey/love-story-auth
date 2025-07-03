
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const pendingTasks = [
  { id: 1, title: "Confirmar menú con catering", urgent: true },
  { id: 2, title: "Enviar lista de canciones al DJ", urgent: false },
  { id: 3, title: "Reservar transporte novios", urgent: true },
  { id: 4, title: "Confirmar decoración floral", urgent: false },
  { id: 5, title: "Finalizar lista de invitados", urgent: false },
  { id: 6, title: "Probar el pastel de boda", urgent: false }
];

export const PendingTasks = () => {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const toggleTask = (taskId: number) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl flex items-center space-x-2">
          <CheckCircle className="h-5 w-5" />
          <span>Tareas pendientes</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {pendingTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
              <div className="flex items-center space-x-3">
                <span className={`text-sm ${completedTasks.includes(task.id) ? 'line-through text-muted-foreground' : ''}`}>
                  {task.title}
                </span>
                {task.urgent && !completedTasks.includes(task.id) && (
                  <Badge variant="destructive" className="text-xs">Urgente</Badge>
                )}
              </div>
              <Button 
                size="sm" 
                variant={completedTasks.includes(task.id) ? "secondary" : "default"}
                onClick={() => toggleTask(task.id)}
              >
                {completedTasks.includes(task.id) ? "Completada" : "Completar"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
