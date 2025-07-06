
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="businessName">Nombre del Negocio</Label>
          <Input
            id="businessName"
            value={formData.businessName}
            onChange={(e) => handleChange("businessName", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="contactName">Nombre de Contacto</Label>
          <Input
            id="contactName"
            value={formData.contactName}
            onChange={(e) => handleChange("contactName", e.target.value)}
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
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
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
        />
      </div>
      <Button type="submit" className="w-full">
        <Link to="/provider/dashboard">
          Registrarse como Proveedor
        </Link>
      </Button>
    </form>
  );
};
