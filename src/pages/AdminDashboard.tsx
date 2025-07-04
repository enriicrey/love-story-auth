
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Briefcase, TrendingUp, AlertCircle, CheckCircle, Clock, Euro } from "lucide-react";

const AdminDashboard = () => {
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
              <span className="text-sm text-muted-foreground">Panel de Administrador</span>
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
            Panel de Administración
          </h1>
          <p className="text-lg text-muted-foreground">
            Gestiona la plataforma, usuarios y proveedores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Parejas registradas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-xs text-green-600">+23 esta semana</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Proveedores activos</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">542</div>
              <div className="text-xs text-green-600">+8 esta semana</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Conexiones exitosas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">89%</div>
              <div className="text-xs text-green-600">+2% este mes</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Euro className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Ingresos totales</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">€45,230</div>
              <div className="text-xs text-green-600">+18% este mes</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Solicitudes de proveedores pendientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <div>
                    <div className="font-medium">Fotografía Elegante SL</div>
                    <div className="text-sm text-muted-foreground">Fotografía • Madrid</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <div>
                    <div className="font-medium">Catering Delicias</div>
                    <div className="text-sm text-muted-foreground">Catering • Barcelona</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <div>
                    <div className="font-medium">Flores & Jardines</div>
                    <div className="text-sm text-muted-foreground">Decoración • Valencia</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Actividad reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">Nuevo proveedor aprobado</div>
                    <div className="text-sm text-muted-foreground">Música & Eventos - hace 2 horas</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Nueva pareja registrada</div>
                    <div className="text-sm text-muted-foreground">Ana & Miguel - hace 4 horas</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <div>
                    <div className="font-medium">Solicitud pendiente de revisión</div>
                    <div className="text-sm text-muted-foreground">Catering Premium - hace 1 día</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">Conexión exitosa</div>
                    <div className="text-sm text-muted-foreground">Laura & Pedro con Foto Arte - hace 1 día</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Herramientas de administración</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <Button className="justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Gestionar usuarios
              </Button>
              
              <Button className="justify-start" variant="outline">
                <Briefcase className="mr-2 h-4 w-4" />
                Gestionar proveedores
              </Button>
              
              <Button className="justify-start" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                Ver estadísticas
              </Button>
              
              <Button className="justify-start" variant="outline">
                <AlertCircle className="mr-2 h-4 w-4" />
                Reportes y alertas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
