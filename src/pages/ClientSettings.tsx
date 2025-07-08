
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  User, 
  Heart, 
  Bell, 
  CreditCard, 
  Shield, 
  Camera,
  Save,
  Trash2,
  Eye,
  EyeOff
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

const ClientSettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    emailProviders: true,
    emailPayments: true,
    emailSystem: false,
    pushProviders: true,
    pushPayments: true,
    pushSystem: false,
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6 max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl font-bold flex items-center space-x-3 gradient-text">
                <Settings className="h-8 w-8 animate-float" />
                <span>Configuración</span>
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">Gestiona tu cuenta y preferencias de manera sencilla</p>
            </div>

            <div className="space-y-6">
              {/* Personal Information */}
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-500 animate-fade-in border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-foreground">Información Personal</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-6 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                    <div className="relative">
                      <div className="w-24 h-24 primary-gradient rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-md">
                        <span className="text-xs text-white">✓</span>
                      </div>
                    </div>
                    <div>
                      <Button variant="premium" className="mb-2">
                        <Camera className="h-4 w-4 mr-2" />
                        Cambiar Foto
                      </Button>
                      <p className="text-sm text-muted-foreground">Recomendado: 400x400px, JPG o PNG</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Nombre Completo</Label>
                      <Input id="fullName" defaultValue="María González" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="maria@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" defaultValue="+34 600 123 456" />
                    </div>
                    <div>
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" defaultValue="Calle Principal 123, Madrid" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Biografía/Notas</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Cuéntanos un poco sobre ti..."
                      defaultValue="Organizando nuestra boda de ensueño para el 15 de junio. ¡Estamos muy emocionados!"
                    />
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="premium" size="lg" className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      Guardar Cambios
                    </Button>
                    <Button variant="outline" size="lg">
                      Cancelar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Wedding Details */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Detalles de la Boda</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weddingDate">Fecha de la Boda</Label>
                      <Input id="weddingDate" type="date" defaultValue="2024-06-15" />
                    </div>
                    <div>
                      <Label htmlFor="guestCount">Número de Invitados</Label>
                      <Input id="guestCount" type="number" defaultValue="120" />
                    </div>
                    <div>
                      <Label htmlFor="ceremonyVenue">Lugar de Ceremonia</Label>
                      <Input id="ceremonyVenue" defaultValue="Iglesia San Miguel" />
                    </div>
                    <div>
                      <Label htmlFor="receptionVenue">Lugar de Celebración</Label>
                      <Input id="receptionVenue" defaultValue="Hotel Villa Magna" />
                    </div>
                    <div>
                      <Label htmlFor="budget">Presupuesto Total</Label>
                      <Input id="budget" defaultValue="€20,000" />
                    </div>
                    <div>
                      <Label htmlFor="style">Estilo/Temática</Label>
                      <Select defaultValue="classic">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar estilo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="classic">Clásico</SelectItem>
                          <SelectItem value="modern">Moderno</SelectItem>
                          <SelectItem value="rustic">Rústico</SelectItem>
                          <SelectItem value="vintage">Vintage</SelectItem>
                          <SelectItem value="boho">Bohemio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Actualizar Detalles
                  </Button>
                </CardContent>
              </Card>

              {/* Notification Preferences */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Preferencias de Notificaciones</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Notificaciones por Email</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Mensajes de Proveedores</Label>
                          <p className="text-sm text-muted-foreground">Recibir emails cuando los proveedores te contacten</p>
                        </div>
                        <Switch
                          checked={notifications.emailProviders}
                          onCheckedChange={(checked) => handleNotificationChange('emailProviders', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Recordatorios de Pagos</Label>
                          <p className="text-sm text-muted-foreground">Notificaciones sobre pagos pendientes</p>
                        </div>
                        <Switch
                          checked={notifications.emailPayments}
                          onCheckedChange={(checked) => handleNotificationChange('emailPayments', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Actualizaciones del Sistema</Label>
                          <p className="text-sm text-muted-foreground">Novedades y actualizaciones de la plataforma</p>
                        </div>
                        <Switch
                          checked={notifications.emailSystem}
                          onCheckedChange={(checked) => handleNotificationChange('emailSystem', checked)}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-4">Notificaciones Push</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Mensajes de Proveedores</Label>
                          <p className="text-sm text-muted-foreground">Notificaciones instantáneas de mensajes</p>
                        </div>
                        <Switch
                          checked={notifications.pushProviders}
                          onCheckedChange={(checked) => handleNotificationChange('pushProviders', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Recordatorios de Pagos</Label>
                          <p className="text-sm text-muted-foreground">Alertas de pagos próximos a vencer</p>
                        </div>
                        <Switch
                          checked={notifications.pushPayments}
                          onCheckedChange={(checked) => handleNotificationChange('pushPayments', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Actualizaciones del Sistema</Label>
                          <p className="text-sm text-muted-foreground">Notificaciones de nuevas funciones</p>
                        </div>
                        <Switch
                          checked={notifications.pushSystem}
                          onCheckedChange={(checked) => handleNotificationChange('pushSystem', checked)}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>Frecuencia de Resumen</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger className="w-full md:w-48 mt-2">
                        <SelectValue placeholder="Seleccionar frecuencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Inmediato</SelectItem>
                        <SelectItem value="daily">Diario</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Billing Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Información de Facturación</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="billingName">Nombre de Facturación</Label>
                      <Input id="billingName" defaultValue="María González Rodríguez" />
                    </div>
                    <div>
                      <Label htmlFor="taxId">NIF/DNI</Label>
                      <Input id="taxId" defaultValue="12345678A" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="billingAddress">Dirección Fiscal</Label>
                      <Input id="billingAddress" defaultValue="Calle Principal 123, 28001 Madrid, España" />
                    </div>
                    <div>
                      <Label htmlFor="paymentMethod">Método de Pago Preferido</Label>
                      <Select defaultValue="card">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar método" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Tarjeta de Crédito</SelectItem>
                          <SelectItem value="transfer">Transferencia Bancaria</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Historial de Facturas</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div>
                          <p className="font-medium">Factura #001</p>
                          <p className="text-sm text-muted-foreground">Fecha: 15/12/2024 - Monto: €1,200</p>
                        </div>
                        <Button variant="outline" size="sm">Descargar</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div>
                          <p className="font-medium">Factura #002</p>
                          <p className="text-sm text-muted-foreground">Fecha: 01/01/2025 - Monto: €4,500</p>
                        </div>
                        <Button variant="outline" size="sm">Descargar</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Seguridad y Cuenta</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-4">Cambiar Contraseña</h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="currentPassword">Contraseña Actual</Label>
                        <div className="relative">
                          <Input 
                            id="currentPassword" 
                            type={showPassword ? "text" : "password"}
                            className="pr-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="newPassword">Nueva Contraseña</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>Actualizar Contraseña</Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-4">Sesiones Activas</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div>
                          <p className="font-medium">MacBook Pro - Chrome</p>
                          <p className="text-sm text-muted-foreground">Madrid, España - Activa ahora</p>
                        </div>
                        <Badge variant="outline">Actual</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div>
                          <p className="font-medium">iPhone - Safari</p>
                          <p className="text-sm text-muted-foreground">Madrid, España - Hace 2 horas</p>
                        </div>
                        <Button variant="outline" size="sm">Cerrar Sesión</Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h3 className="font-medium text-red-800 mb-2">Zona Peligrosa</h3>
                    <p className="text-sm text-red-600 mb-4">
                      Una vez que elimines tu cuenta, no hay vuelta atrás. Esta acción no se puede deshacer.
                    </p>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Eliminar Cuenta
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>¿Estás absolutamente seguro?</DialogTitle>
                          <DialogDescription>
                            Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                            y todos los datos asociados de nuestros servidores.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Cancelar</Button>
                          <Button variant="destructive">Sí, eliminar mi cuenta</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ClientSettings;
