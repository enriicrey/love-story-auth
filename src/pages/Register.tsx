
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Heart, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAnalytics } from "@/hooks/useAnalytics";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    // Cliente fields
    nombre: "",
    apellidos: "",
    telefono: "",
    fechaBoda: "",
    presupuesto: "",
    // Proveedor fields
    nombreEmpresa: "",
    tipoServicio: "",
    ciudad: "",
    descripcion: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const { trackPageView, trackUserAction, trackConversion } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Clean up any existing auth state
      await supabase.auth.signOut();

      // Sign up user
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) throw error;

      if (data.user) {
        // Create profile based on role
        const profileData = {
          user_id: data.user.id,
          email: formData.email,
          user_type: selectedRole === "cliente" ? "client" : "provider",
          first_name: selectedRole === "cliente" ? formData.nombre : formData.nombreEmpresa,
          last_name: selectedRole === "cliente" ? formData.apellidos : null,
          phone: formData.telefono,
          company_name: selectedRole === "proveedor" ? formData.nombreEmpresa : null,
          service_type: selectedRole === "proveedor" ? formData.tipoServicio : null,
          city: selectedRole === "proveedor" ? formData.ciudad : null,
          wedding_date: selectedRole === "cliente" ? formData.fechaBoda : null,
          budget_range: selectedRole === "cliente" ? formData.presupuesto : null,
        };

        const { error: profileError } = await supabase
          .from('profiles')
          .insert(profileData);

        if (profileError) {
          console.error('Profile creation error:', profileError);
          throw new Error('Error al crear perfil de usuario');
        }

        // Track registration and conversion
        trackUserAction('registration', { user_type: profileData.user_type }, data.user.id);
        trackConversion('registration', 1, data.user.id);

        // If provider, create initial service entry
        if (selectedRole === "proveedor" && formData.descripcion) {
          const { error: serviceError } = await supabase
            .from('services')
            .insert({
              provider_id: data.user.id,
              name: `Servicios de ${formData.nombreEmpresa}`,
              category: formData.tipoServicio,
              description: formData.descripcion,
              is_active: true
            });

          if (serviceError) {
            console.error('Service creation error:', serviceError);
          }
        }

        toast({
          title: "¡Registro exitoso!",
          description: "Tu cuenta ha sido creada correctamente.",
          duration: 3000,
        });

        // Redirect based on role
        const route = selectedRole === "cliente" ? "/client/dashboard" : "/provider/dashboard";
        navigate(route);
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      trackUserAction('registration_failed', { error: error.message });
      
      toast({
        title: "Error de registro",
        description: error.message === "User already registered" 
          ? "Ya existe una cuenta con este email" 
          : "Error al crear la cuenta. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderRoleSpecificFields = () => {
    if (selectedRole === "cliente") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => handleInputChange("nombre", e.target.value)}
                required
                placeholder="Tu nombre"
                className="transition-all duration-200 focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos</Label>
              <Input
                id="apellidos"
                value={formData.apellidos}
                onChange={(e) => handleInputChange("apellidos", e.target.value)}
                required
                placeholder="Tus apellidos"
                className="transition-all duration-200 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono</Label>
            <Input
              id="telefono"
              value={formData.telefono}
              onChange={(e) => handleInputChange("telefono", e.target.value)}
              required
              placeholder="+34 600 000 000"
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="fechaBoda">Fecha estimada de boda</Label>
            <Input
              id="fechaBoda"
              type="date"
              value={formData.fechaBoda}
              onChange={(e) => handleInputChange("fechaBoda", e.target.value)}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="presupuesto">Presupuesto estimado</Label>
            <Select onValueChange={(value) => handleInputChange("presupuesto", value)} required>
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Selecciona tu presupuesto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5000-10000">€5,000 - €10,000</SelectItem>
                <SelectItem value="10000-20000">€10,000 - €20,000</SelectItem>
                <SelectItem value="20000-30000">€20,000 - €30,000</SelectItem>
                <SelectItem value="30000-50000">€30,000 - €50,000</SelectItem>
                <SelectItem value="50000+">€50,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      );
    } else if (selectedRole === "proveedor") {
      return (
        <>
          <div className="space-y-2">
            <Label htmlFor="nombreEmpresa">Nombre de la empresa</Label>
            <Input
              id="nombreEmpresa"
              value={formData.nombreEmpresa}
              onChange={(e) => handleInputChange("nombreEmpresa", e.target.value)}
              required
              placeholder="Nombre de tu empresa"
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tipoServicio">Tipo de servicio</Label>
            <Select onValueChange={(value) => handleInputChange("tipoServicio", value)} required>
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Selecciona tu servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fotografia">Fotografía</SelectItem>
                <SelectItem value="catering">Catering</SelectItem>
                <SelectItem value="flores">Flores y decoración</SelectItem>
                <SelectItem value="musica">Música y DJ</SelectItem>
                <SelectItem value="venue">Locales y venues</SelectItem>
                <SelectItem value="vestidos">Vestidos y trajes</SelectItem>
                <SelectItem value="organizacion">Organización completa</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="telefono-prov">Teléfono</Label>
            <Input
              id="telefono-prov"
              value={formData.telefono}
              onChange={(e) => handleInputChange("telefono", e.target.value)}
              required
              placeholder="+34 600 000 000"
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ciudad">Ciudad</Label>
            <Input
              id="ciudad"
              value={formData.ciudad}
              onChange={(e) => handleInputChange("ciudad", e.target.value)}
              required
              placeholder="Tu ciudad"
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción de servicios</Label>
            <Textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={(e) => handleInputChange("descripcion", e.target.value)}
              required
              placeholder="Describe brevemente tus servicios..."
              className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-2xl font-bold text-primary mb-4">
            <Heart className="h-8 w-8 fill-current" />
            <span>WeddingPlan</span>
          </Link>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Crear Cuenta</CardTitle>
            <p className="text-muted-foreground">
              Únete a nuestra comunidad
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Tipo de usuario</Label>
                <Select onValueChange={(value) => setSelectedRole(value)} required>
                  <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Selecciona tu rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cliente">Cliente (Pareja)</SelectItem>
                    <SelectItem value="proveedor">Proveedor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedRole && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email-reg">Email</Label>
                    <Input
                      id="email-reg"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      placeholder="tu@email.com"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password-reg">Contraseña</Label>
                      <Input
                        id="password-reg"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        required
                        placeholder="Tu contraseña"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        required
                        placeholder="Confirma tu contraseña"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {renderRoleSpecificFields()}
                </>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                disabled={isLoading || !selectedRole}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creando cuenta...
                  </>
                ) : (
                  "Crear Cuenta"
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                ¿Ya tienes cuenta?{" "}
                <Link to="/login" className="text-primary hover:underline font-semibold">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
