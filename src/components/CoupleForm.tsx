
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Heart, Loader2 } from "lucide-react";

const CoupleForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    fechaBoda: "",
    presupuesto: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://hook.eu2.make.com/pareja-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "¡Gracias!",
          description: "Te contactaremos en 24h para comenzar la planificación de tu boda perfecta.",
          duration: 5000,
        });
        setFormData({
          nombre: "",
          apellidos: "",
          email: "",
          telefono: "",
          fechaBoda: "",
          presupuesto: ""
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
          <Heart className="h-8 w-8 text-primary fill-current" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">
          Comenzar como Pareja
        </CardTitle>
        <p className="text-muted-foreground">
          Inicia la planificación de tu boda soñada
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              placeholder="tu@email.com"
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
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
              "Comenzar planificación"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CoupleForm;
