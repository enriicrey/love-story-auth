
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, MapPin, Users, Camera, Music, Utensils, Home } from "lucide-react";

const ClientDashboard = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
              <Heart className="h-8 w-8 fill-current" />
              <span>WeddingPlan</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Panel de Cliente</span>
              <Button variant="ghost" asChild>
                <Link to="/">Cerrar Sesión</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            ¡Bienvenidos a su panel de planificación!
          </h1>
          <p className="text-lg text-muted-foreground">
            Aquí pueden gestionar todos los aspectos de su boda perfecta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-primary" />
                <CardTitle>Próximos eventos</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span className="font-medium">Cita con fotógrafo</span>
                  <Badge variant="outline">Mañana</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span className="font-medium">Prueba de vestido</span>
                  <Badge variant="outline">3 días</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>Invitados</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-primary">
                  120 <span className="text-sm font-normal text-muted-foreground">confirmados</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  De 150 invitados totales
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-primary" />
                <CardTitle>Ubicación</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="font-medium">Finca Las Rosas</div>
                <div className="text-sm text-muted-foreground">
                  Sevilla, España
                </div>
                <Badge className="bg-green-100 text-green-800">Confirmado</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Progreso de planificación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-primary" />
                    <span>Fotografía</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Completado</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Utensils className="h-5 w-5 text-primary" />
                    <span>Catering</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">En progreso</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Music className="h-5 w-5 text-primary" />
                    <span>Música</span>
                  </div>
                  <Badge variant="outline">Pendiente</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Decoración</span>
                  </div>
                  <Badge variant="outline">Pendiente</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Acciones rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                <Button className="justify-start" variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar nueva cita
                </Button>
                
                <Button className="justify-start" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Gestionar invitados
                </Button>
                
                <Button className="justify-start" variant="outline">
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver ubicaciones
                </Button>
                
                <Button className="justify-start" variant="outline">
                  <Heart className="mr-2 h-4 w-4" />
                  Contactar coordinador
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
