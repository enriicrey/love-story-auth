
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Briefcase, Loader2 } from "lucide-react";

const ProviderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombreEmpresa: "",
    tipoServicio: "",
    email: "",
    telefono: "",
    ciudad: "",
    descripcion: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://hook.eu2.make.com/proveedor-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "¡Solicitud enviada!",
          description: "Te notificaremos pronto sobre el estado de tu solicitud para unirte como proveedor.",
          duration: 5000,
        });
        setFormData({
          nombreEmpresa: "",
          tipoServicio: "",
          email: "",
          telefono: "",
          ciudad: "",
          descripcion: ""
        });
      } else {
        throw new Error("Error al enviar");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No pudimos procesar tu solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <Briefcase className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">
          Unirse como Proveedor
        </CardTitle>
        <p className="text-muted-foreground">
          Forma parte de nuestra red de profesionales
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email-provider">Email</Label>
              <Input
                id="email-provider"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                placeholder="contacto@empresa.com"
                className="transition-all duration-200 focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telefono-provider">Teléfono</Label>
              <Input
                id="telefono-provider"
                value={formData.telefono}
                onChange={(e) => handleInputChange("telefono", e.target.value)}
                required
                placeholder="+34 600 000 000"
                className="transition-all duration-200 focus:ring-2 focus:ring-primary"
              />
            </div>
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
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Solicitar acceso"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProviderForm;
