
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export const CoupleForm = () => {
  const [formData, setFormData] = useState({
    partner1Name: "",
    partner2Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    weddingDate: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Couple registration:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="partner1Name">Nombre Pareja 1</Label>
          <Input
            id="partner1Name"
            value={formData.partner1Name}
            onChange={(e) => handleChange("partner1Name", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="partner2Name">Nombre Pareja 2</Label>
          <Input
            id="partner2Name"
            value={formData.partner2Name}
            onChange={(e) => handleChange("partner2Name", e.target.value)}
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
          <Label htmlFor="weddingDate">Fecha de Boda</Label>
          <Input
            id="weddingDate"
            type="date"
            value={formData.weddingDate}
            onChange={(e) => handleChange("weddingDate", e.target.value)}
            required
          />
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
      </div>
      <Button type="submit" className="w-full">
        <Link to="/client/dashboard">
          Registrarse como Pareja
        </Link>
      </Button>
    </form>
  );
};
