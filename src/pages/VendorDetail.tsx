
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, MessageCircle, Heart } from "lucide-react";
import { ContractServiceModal } from "@/components/vendors/ContractServiceModal";

const VendorDetail = () => {
  const { id } = useParams();
  const [showContractModal, setShowContractModal] = useState(false);

  // Mock data - in real app would fetch based on id
  const vendor = {
    id: parseInt(id || "1"),
    name: "Elena Rodríguez",
    service: "Fotografía",
    city: "Madrid",
    rating: 4.8,
    reviewCount: 23,
    image: "📸",
    description: "Soy Elena, fotógrafa especializada en bodas con más de 8 años de experiencia. Mi estilo se caracteriza por capturar momentos únicos y emociones auténticas, creando recuerdos que durarán para siempre.",
    gallery: ["📸", "💍", "👰", "🤵", "💐", "🎉", "💒", "🥂"],
    packages: [
      {
        name: "Básico",
        price: 800,
        description: "Cobertura de 6 horas, 300 fotos editadas, galería online",
        features: ["6 horas de cobertura", "300 fotos editadas", "Galería online", "USB con todas las fotos"]
      },
      {
        name: "Premium",
        price: 1200,
        description: "Cobertura de 8 horas, 500 fotos editadas, álbum físico",
        features: ["8 horas de cobertura", "500 fotos editadas", "Galería online", "Álbum físico 30x20", "USB con todas las fotos", "Sesión preboda"]
      },
      {
        name: "Deluxe",
        price: 1800,
        description: "Cobertura completa, fotos ilimitadas, álbum premium",
        features: ["10 horas de cobertura", "Fotos ilimitadas", "Galería online", "Álbum premium 40x30", "USB con todas las fotos", "Sesión preboda", "Segunda cámara"]
      }
    ],
    customerReviews: [
      { name: "María García", rating: 5, comment: "Elena es increíble, captó cada momento especial de nuestra boda.", date: "Hace 2 semanas" },
      { name: "Carlos López", rating: 5, comment: "Profesional, creativa y muy atenta. Las fotos son espectaculares.", date: "Hace 1 mes" },
      { name: "Ana Martín", rating: 4, comment: "Muy contenta con el resultado. Recomiendo totalmente.", date: "Hace 2 meses" }
    ]
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">
            <div className="mb-6">
              <Button variant="ghost" asChild className="mb-4">
                <Link to="/vendors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a proveedores
                </Link>
              </Button>
            </div>

            {/* Header Section */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="text-8xl text-center md:text-left">{vendor.image}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{vendor.name}</h1>
                        <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                          <span className="font-medium">{vendor.service}</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{vendor.city}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{vendor.rating}</span>
                          </div>
                          <span className="text-muted-foreground">({vendor.reviewCount} reseñas)</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 md:mt-0">
                        <Button variant="outline">
                          <Heart className="h-4 w-4 mr-2" />
                          Favorito
                        </Button>
                        <Button variant="outline">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Mensaje
                        </Button>
                        <Button onClick={() => setShowContractModal(true)}>
                          Contratar Servicio
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{vendor.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Packages */}
              <div className="lg:col-span-2">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Paquetes de Servicio</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {vendor.packages.map((pkg, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{pkg.name}</h3>
                            <p className="text-muted-foreground text-sm">{pkg.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">€{pkg.price}</div>
                          </div>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Gallery */}
                <Card>
                  <CardHeader>
                    <CardTitle>Galería</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-4">
                      {vendor.gallery.map((img, index) => (
                        <div key={index} className="aspect-square bg-secondary rounded-lg flex items-center justify-center text-4xl">
                          {img}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Reviews */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Reseñas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {vendor.customerReviews.map((review, index) => (
                      <div key={index} className="pb-4 border-b last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{review.name}</span>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{review.comment}</p>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ContractServiceModal
        isOpen={showContractModal}
        onClose={() => setShowContractModal(false)}
        vendor={vendor}
      />
    </SidebarProvider>
  );
};

export default VendorDetail;
