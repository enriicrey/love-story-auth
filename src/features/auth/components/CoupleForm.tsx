
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export const CoupleForm = () => {
  const [formData, setFormData] = useState({
    bride: "",
    groom: "",
    email: "",
    weddingDate: "",
    budget: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Couple form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-xl">
        <div className="text-4xl mb-3">💕</div>
        <CardTitle className="text-2xl font-bold text-primary">Para Parejas</CardTitle>
        <p className="text-muted-foreground">Planifica la boda de tus sueños</p>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bride">Nombre de la novia</Label>
              <Input
                id="bride"
                value={formData.bride}
                onChange={(e) => handleChange("bride", e.target.value)}
                placeholder="María"
                required
              />
            </div>
            <div>
              <Label htmlFor="groom">Nombre del novio</Label>
              <Input
                id="groom"
                value={formData.groom}
                onChange={(e) => handleChange("groom", e.target.value)}
                placeholder="José"
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
              placeholder="tu@email.com"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="weddingDate">Fecha estimada de boda</Label>
            <Input
              id="weddingDate"
              type="date"
              value={formData.weddingDate}
              onChange={(e) => handleChange("weddingDate", e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="budget">Presupuesto estimado</Label>
            <Input
              id="budget"
              value={formData.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
              placeholder="€15,000"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="location">Ubicación preferida</Label>
            <Input
              id="location"  
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Madrid, España"
              required
            />
          </div>
          
          <Button type="submit" className="w-full" size="lg">
            <Link to="/client/dashboard">
              Comenzar a Planificar 💍
            </Link>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
