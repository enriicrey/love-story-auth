import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Ceremonia de la boda",
    date: "2024-09-15",
    time: "16:00",
    location: "Iglesia San Pedro, Madrid",
  },
  {
    id: 2,
    title: "Recepción",
    date: "2024-09-15",
    time: "18:00",
    location: "Hotel Gran Palace, Madrid",
  },
  {
    id: 3,
    title: "Ensayo general",
    date: "2024-09-14",
    time: "15:00",
    location: "Iglesia San Pedro, Madrid",
  },
];

export const UpcomingEvents = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Próximos Eventos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-foreground">{event.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Ver Detalles
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
