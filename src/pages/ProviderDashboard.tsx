
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Briefcase, Calendar, TrendingUp, Users, Star, MessageCircle, Euro } from "lucide-react";

const ProviderDashboard = () => {
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
              <span className="text-sm text-muted-foreground">Panel de Proveedor</span>
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
            Panel de Proveedor
          </h1>
          <p className="text-lg text-muted-foreground">
            Gestiona tu negocio y conecta con parejas que buscan tus servicios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Solicitudes activas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-xs text-muted-foreground">+3 esta semana</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Próximas citas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-xs text-muted-foreground">Esta semana</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Valoración</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">4.9</div>
              <div className="text-xs text-muted-foreground">126 reseñas</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Euro className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Ingresos mes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">€3,450</div>
              <div className="text-xs text-green-600">+12% vs mes anterior</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Solicitudes recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <div>
                    <div className="font-medium">Ana & Carlos</div>
                    <div className="text-sm text-muted-foreground">Fotografía de boda • 15 Jun 2024</div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Nueva</Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <div>
                    <div className="font-medium">María & David</div>
                    <div className="text-sm text-muted-foreground">Fotografía de boda • 22 Jun 2024</div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <div>
                    <div className="font-medium">Laura & Miguel</div>
                    <div className="text-sm text-muted-foreground">Fotografía de boda • 5 Jul 2024</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Confirmada</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Estadísticas del perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Vistas del perfil</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">234</div>
                    <div className="text-xs text-green-600">+8%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>Consultas recibidas</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">18</div>
                    <div className="text-xs text-green-600">+15%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Tasa de conversión</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">67%</div>
                    <div className="text-xs text-green-600">+3%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Acciones rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <Button className="justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Ver calendario
              </Button>
              
              <Button className="justify-start" variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Mensajes
              </Button>
              
              <Button className="justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Actualizar perfil
              </Button>
              
              <Button className="justify-start" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                Ver estadísticas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProviderDashboard;
