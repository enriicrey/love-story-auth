
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, MessageCircle } from "lucide-react";

interface VendorGridProps {
  searchTerm: string;
  selectedCategory: string;
  priceRange: number[];
  selectedCity: string;
}

const mockVendors = [
  {
    id: 1,
    name: "Elena Rodríguez",
    category: "fotografia",
    service: "Fotografía",
    city: "madrid",
    cityName: "Madrid",
    price: "Desde €800",
    rating: 4.8,
    reviews: 23,
    image: "📸",
    description: "Fotografía artística de bodas"
  },
  {
    id: 2,
    name: "Catering Deluxe",
    category: "catering",
    service: "Catering",
    city: "barcelona",
    cityName: "Barcelona",
    price: "€1,200 - €2,500",
    rating: 4.7,
    reviews: 41,
    image: "🍽️",
    description: "Catering de alta gama"
  },
  {
    id: 3,
    name: "DJ Carlos",
    category: "musica",
    service: "Música",
    city: "valencia",
    cityName: "Valencia",
    price: "Desde €600",
    rating: 4.9,
    reviews: 18,
    image: "🎵",
    description: "Música para bodas"
  },
  {
    id: 4,
    name: "Flores & Co",
    category: "decoracion",
    service: "Decoración",
    city: "madrid",
    cityName: "Madrid",
    price: "€500 - €1,800",
    rating: 4.6,
    reviews: 32,
    image: "🌸",
    description: "Decoración floral"
  },
  {
    id: 5,
    name: "Carlos Vega",
    category: "fotografia",
    service: "Fotografía",
    city: "sevilla",
    cityName: "Sevilla",
    price: "Desde €900",
    rating: 4.8,
    reviews: 27,
    image: "📷",
    description: "Fotografía documental"
  },
  {
    id: 6,
    name: "Sabor Mediterráneo",
    category: "catering",
    service: "Catering",
    city: "valencia",
    cityName: "Valencia",
    price: "€800 - €2,000",
    rating: 4.5,
    reviews: 35,
    image: "🥘",
    description: "Cocina mediterránea"
  },
  {
    id: 7,
    name: "Banda Sonora",
    category: "musica",
    service: "Música",
    city: "madrid",
    cityName: "Madrid",
    price: "€1,000 - €2,200",
    rating: 4.7,
    reviews: 15,
    image: "🎤",
    description: "Banda en vivo"
  },
  {
    id: 8,
    name: "Elegance Decor",
    category: "decoracion",
    service: "Decoración",
    city: "barcelona",
    cityName: "Barcelona",
    price: "€600 - €2,500",
    rating: 4.8,
    reviews: 29,
    image: "✨",
    description: "Decoración elegante"
  }
];

export const VendorGrid = ({ searchTerm, selectedCategory, priceRange, selectedCity }: VendorGridProps) => {
  const filteredVendors = mockVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || vendor.category === selectedCategory;
    const matchesCity = selectedCity === "todas" || vendor.city === selectedCity;
    
    // Simple price filtering (extract first number from price string)
    const vendorPrice = parseInt(vendor.price.match(/\d+/)?.[0] || "0");
    const matchesPrice = vendorPrice >= priceRange[0] && vendorPrice <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesCity && matchesPrice;
  });

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <p className="text-muted-foreground">
          {filteredVendors.length} proveedores encontrados
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVendors.map((vendor) => (
          <Card key={vendor.id} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-4xl">{vendor.image}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{vendor.name}</h3>
                  <p className="text-sm text-muted-foreground">{vendor.service}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{vendor.cityName}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{vendor.rating}</span>
                  <span className="text-muted-foreground">({vendor.reviews})</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-3">{vendor.description}</p>
              <div className="font-semibold text-primary">{vendor.price}</div>
            </CardContent>

            <CardFooter className="pt-0 gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contactar
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link to={`/vendors/${vendor.id}`}>Ver Detalles</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredVendors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">No se encontraron proveedores</p>
          <p className="text-sm text-muted-foreground">Intenta ajustar los filtros de búsqueda</p>
        </div>
      )}
    </div>
  );
};
