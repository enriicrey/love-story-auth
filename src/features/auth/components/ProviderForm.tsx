
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export const ProviderForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    serviceType: "",
    location: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Provider registration:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl">
        <div className="text-4xl mb-3">🏢</div>
        <CardTitle className="text-2xl font-bold text-primary">Para Proveedores</CardTitle>
        <p className="text-muted-foreground">Haz crecer tu negocio de bodas</p>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="businessName">Nombre del Negocio</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => handleChange("businessName", e.target.value)}
                placeholder="Foto Elena Studio"
                required
              />
            </div>
            <div>
              <Label htmlFor="contactName">Nombre de Contacto</Label>
              <Input
                id="contactName"
                value={formData.contactName}
                onChange={(e) => handleChange("contactName", e.target.value)}
                placeholder="Elena García"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="contacto@fotoelena.com"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+34 600 123 456"
                required
              />
            </div>
            <div>
              <Label htmlFor="serviceType">Tipo de Servicio</Label>
              <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="photography">Fotografía</SelectItem>
                  <SelectItem value="catering">Catering</SelectItem>
                  <SelectItem value="music">Música</SelectItem>
                  <SelectItem value="decoration">Decoración</SelectItem>
                  <SelectItem value="venue">Venue</SelectItem>
                  <SelectItem value="transport">Transporte</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="location">Ubicación</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Madrid, España"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Describe tus servicios..."
              className="min-h-[80px]"
            />
          </div>
          
          <Button type="submit" className="w-full" size="lg">
            <Link to="/provider/dashboard">
              Unirse como Proveedor 🚀
            </Link>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
