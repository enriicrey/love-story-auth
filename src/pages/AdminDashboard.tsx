
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SkeletonCard, SkeletonText } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { 
  Users, 
  Heart, 
  Calendar, 
  Euro, 
  TrendingUp, 
  Settings,
  Bell,
  Search,
  Plus,
  BarChart3,
  Activity,
  UserCheck,
  Building2
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  const registrationData = [
    { month: 'Jul', clients: 45, providers: 12 },
    { month: 'Ago', clients: 52, providers: 15 },
    { month: 'Sep', clients: 67, providers: 18 },
    { month: 'Oct', clients: 71, providers: 22 },
    { month: 'Nov', clients: 85, providers: 28 },
    { month: 'Dic', clients: 92, providers: 32 }
  ];

  const revenueData = [
    { month: 'Jul', revenue: 8500 },
    { month: 'Ago', revenue: 9200 },
    { month: 'Sep', revenue: 10800 },
    { month: 'Oct', revenue: 11500 },
    { month: 'Nov', revenue: 12100 },
    { month: 'Dic', revenue: 12500 }
  ];

  const serviceDistribution = [
    { name: 'Fotografía', value: 35, color: '#E91E63' },
    { name: 'Catering', value: 25, color: '#3B82F6' },
    { name: 'Decoración', value: 20, color: '#10B981' },
    { name: 'Música', value: 15, color: '#F59E0B' },
    { name: 'Otros', value: 5, color: '#8B5CF6' }
  ];

  const recentActivities = [
    { id: 1, type: 'user', message: 'Nuevo cliente registrado: María González', time: '2 min', status: 'success' },
    { id: 2, type: 'provider', message: 'Proveedor verificado: Foto Elena Studio', time: '15 min', status: 'info' },
    { id: 3, type: 'booking', message: 'Nueva contratación: Catering Deluxe', time: '1 hora', status: 'success' },
    { id: 4, type: 'system', message: 'Backup automatico completado', time: '2 horas', status: 'default' },
    { id: 5, type: 'payment', message: 'Pago procesado: €1,200 comisión', time: '3 horas', status: 'success' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Enhanced Header */}
      <header className="glass-effect border-b sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="space-y-1">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink to="/admin" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-3xl font-bold text-foreground animate-fade-in-up">Panel de Administración</h1>
            <p className="text-muted-foreground">Gestiona la plataforma WeddingPlan</p>
          </div>
          
          <div className="flex items-center space-x-4 animate-slide-in-right">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center">
                3
              </Badge>
            </Button>
            <Button variant="outline" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Nueva Acción
            </Button>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-8">
        {/* Enhanced KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hoverable interactive className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Usuarios
                </CardTitle>
                <Users className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">2,450</div>
              <div className="flex items-center space-x-2 text-sm">
                <Badge variant="success" className="text-xs">
                  +12.5%
                </Badge>
                <span className="text-muted-foreground">vs mes anterior</span>
              </div>
            </CardContent>
          </Card>

          <Card hoverable interactive className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Proveedores Activos
                </CardTitle>
                <Building2 className="h-5 w-5 text-info" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-info">185</div>
              <div className="flex items-center space-x-2 text-sm">
                <Badge variant="info" className="text-xs">
                  +8.2%
                </Badge>
                <span className="text-muted-foreground">crecimiento mensual</span>
              </div>
            </CardContent>
          </Card>

          <Card hoverable interactive className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Bodas este Mes
                </CardTitle>
                <Heart className="h-5 w-5 text-primary fill-current" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">45</div>
              <div className="flex items-center space-x-2 text-sm">
                <Badge className="text-xs bg-warning/10 text-warning-foreground">
                  +3 esta semana
                </Badge>
                <span className="text-muted-foreground">eventos planificados</span>
              </div>
            </CardContent>
          </Card>

          <Card hoverable interactive className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Ingresos Comisiones
                </CardTitle>
                <Euro className="h-5 w-5 text-success" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">€12,500</div>
              <div className="flex items-center space-x-2 text-sm">
                <Badge variant="success" className="text-xs">
                  +15.3%
                </Badge>
                <span className="text-muted-foreground">objetivo: €15,000</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Chart */}
          <Card className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Registros Mensuales</span>
                </CardTitle>
                <Badge variant="outline">Últimos 6 meses</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={registrationData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="clients" fill="hsl(var(--primary))" name="Clientes" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="providers" fill="hsl(var(--info))" name="Proveedores" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Chart */}
          <Card className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Evolución Ingresos</span>
                </CardTitle>
                <Badge variant="success">+18% total</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--success))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: 'hsl(var(--success))', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Distribution */}
          <Card className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>Servicios Populares</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {serviceDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {serviceDistribution.map((service, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: service.color }}
                      />
                      <span>{service.name}</span>
                    </div>
                    <span className="font-medium">{service.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>Actividad Reciente</span>
                </CardTitle>
                <Button variant="outline" size="sm">
                  Ver Todo
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 custom-scrollbar max-h-80 overflow-y-auto">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className={cn(
                      "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                      activity.status === 'success' && "bg-success",
                      activity.status === 'info' && "bg-info", 
                      activity.status === 'default' && "bg-muted-foreground"
                    )} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Button variant="ghost" size="xs">
                      Ver
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <UserCheck className="h-6 w-6" />
                <span>Verificar Proveedores</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <BarChart3 className="h-6 w-6" />
                <span>Ver Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Settings className="h-6 w-6" />
                <span>Configuración</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Users className="h-6 w-6" />
                <span>Gestionar Usuarios</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
