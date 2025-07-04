
import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Building, CreditCard, Bell, Shield, MapPin, Clock, Euro } from "lucide-react";

const ProviderSettings = () => {
  const [profileData, setProfileData] = useState({
    businessName: "Foto Elena Profesional",
    email: "elena@fotoelena.com",
    phone: "+34 666 123 456",
    description: "Fotógrafa profesional especializada en bodas y eventos. Con más de 10 años de experiencia capturando momentos únicos e irrepetibles.",
    address: "Calle Mayor 123, 28001 Madrid",
    website: "www.fotoelena.com",
    taxId: "12345678A",
    bankAccount: "ES12 1234 5678 9012 3456 7890"
  });

  const [workingHours, setWorkingHours] = useState({
    monday: { active: true, start: "09:00", end: "18:00" },
    tuesday: { active: true, start: "09:00", end: "18:00" },
    wednesday: { active: true, start: "09:00", end: "18:00" },
    thursday: { active: true, start: "09:00", end: "18:00" },
    friday: { active: true, start: "09:00", end: "18:00" },
    saturday: { active: true, start: "10:00", end: "14:00" },
    sunday: { active: false, start: "", end: "" }
  });

  const [notifications, setNotifications] = useState({
    newRequests: true,
    messages: true,
    payments: true,
    reviews: true,
    reminders: true,
    marketing: false
  });

  const [services] = useState([
    { name: "Fotografía Boda Completa", price: 1200, active: true },
    { name: "Sesión Pre-boda", price: 300, active: true },
    { name: "Álbum Digital", price: 150, active: true },
    { name: "Álbum Físico Premium", price: 400, active: true },
    { name: "Retoque Avanzado", price: 50, active: false }
  ]);

  const handleSave = () => {
    console.log("Guardando configuración...");
    // Aquí iría la lógica para guardar
  };

  const dayNames = {
    monday: "Lunes",
    tuesday: "Martes", 
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo"
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/20">
        <AppSidebar userType="provider" />
        <SidebarInset className="flex-1">
          <DashboardHeader />
          
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Configuración</h1>
                <p className="text-muted-foreground">Gestiona tu perfil profesional y preferencias</p>
              </div>

              {/* Professional Profile */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Perfil Profesional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarFallback className="bg-primary/10 text-primary text-lg">
                        FE
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline">Cambiar Foto</Button>
                      <p className="text-sm text-muted-foreground">JPG o PNG, máximo 2MB</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-sm font-medium">Nombre del Negocio</label>
                      <Input
                        id="businessName"
                        value={profileData.businessName}
                        onChange={(e) => setProfileData({...profileData, businessName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Teléfono</label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="website" className="text-sm font-medium">Sitio Web</label>
                      <Input
                        id="website"
                        value={profileData.website}
                        onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">Descripción de Servicios</label>
                    <Textarea
                      id="description"
                      rows={4}
                      value={profileData.description}
                      onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium">Dirección</label>
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Commercial Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Información Comercial
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="taxId" className="text-sm font-medium">NIF/CIF</label>
                      <Input
                        id="taxId"
                        value={profileData.taxId}
                        onChange={(e) => setProfileData({...profileData, taxId: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="bankAccount" className="text-sm font-medium">Cuenta Bancaria</label>
                      <Input
                        id="bankAccount"
                        value={profileData.bankAccount}
                        onChange={(e) => setProfileData({...profileData, bankAccount: e.target.value})}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services and Pricing */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="h-5 w-5 text-primary" />
                    Servicios y Tarifas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Switch checked={service.active} />
                          <div>
                            <p className="font-medium">{service.name}</p>
                            <p className="text-sm text-muted-foreground">€{service.price}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Editar</Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">+ Añadir Servicio</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Horarios de Trabajo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(workingHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Switch 
                            checked={hours.active}
                            onCheckedChange={(checked) => 
                              setWorkingHours({
                                ...workingHours,
                                [day]: { ...hours, active: checked }
                              })
                            }
                          />
                          <span className="font-medium w-20">{dayNames[day as keyof typeof dayNames]}</span>
                        </div>
                        
                        {hours.active && (
                          <div className="flex items-center space-x-2">
                            <Input
                              type="time"
                              value={hours.start}
                              className="w-24"
                              onChange={(e) => 
                                setWorkingHours({
                                  ...workingHours,
                                  [day]: { ...hours, start: e.target.value }
                                })
                              }
                            />
                            <span>-</span>
                            <Input
                              type="time"
                              value={hours.end}
                              className="w-24"
                              onChange={(e) => 
                                setWorkingHours({
                                  ...workingHours,
                                  [day]: { ...hours, end: e.target.value }
                                })
                              }
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Notification Preferences */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Preferencias de Notificaciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { key: 'newRequests', label: 'Nuevas solicitudes de clientes' },
                      { key: 'messages', label: 'Mensajes de clientes' },
                      { key: 'payments', label: 'Notificaciones de pagos' },
                      { key: 'reviews', label: 'Nuevas reseñas' },
                      { key: 'reminders', label: 'Recordatorios de citas' },
                      { key: 'marketing', label: 'Comunicaciones de marketing' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="font-medium">{item.label}</span>
                        <Switch
                          checked={notifications[item.key as keyof typeof notifications]}
                          onCheckedChange={(checked) =>
                            setNotifications({ ...notifications, [item.key]: checked })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Seguridad
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Cambiar Contraseña
                  </Button>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Sesiones Activas</h4>
                      <p className="text-sm text-muted-foreground">2 dispositivos conectados</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Gestionar Sesiones
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                  Guardar Cambios
                </Button>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProviderSettings;
