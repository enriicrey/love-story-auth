
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const upcomingEvents = [
  { id: 1, title: "Cita con fotógrafo", provider: "Foto Elena", date: "Mañana 16:00", type: "reunion" },
  { id: 2, title: "Prueba de vestido", provider: "Atelier Rosa", date: "15 Dic 11:00", type: "prueba" },
  { id: 3, title: "Cata catering", provider: "Catering Deluxe", date: "18 Dic 12:30", type: "cata" },
  { id: 4, title: "Reunión DJ", provider: "DJ Carlos", date: "20 Dic 18:00", type: "reunion" }
];

export const UpcomingEvents = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span>Próximos eventos</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex justify-between items-center p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <div>
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-muted-foreground">{event.provider}</div>
              </div>
              <Badge variant="outline">{event.date}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
