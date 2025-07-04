
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare, TrendingUp } from "lucide-react";

const reviewsData = {
  overall: 4.8,
  total: 47,
  distribution: [
    { stars: 5, count: 35, percentage: 74 },
    { stars: 4, count: 8, percentage: 17 },
    { stars: 3, count: 3, percentage: 6 },
    { stars: 2, count: 1, percentage: 2 },
    { stars: 1, count: 0, percentage: 0 },
  ]
};

const reviews = [
  {
    id: 1,
    client: "María García",
    avatar: "MG",
    rating: 5,
    date: "2024-03-10",
    comment: "Increíble trabajo, superó todas nuestras expectativas. Las fotos de nuestra boda quedaron espectaculares y el trato fue muy profesional durante todo el proceso.",
    response: null,
    helpful: 12
  },
  {
    id: 2,
    client: "Carlos Ruiz",
    avatar: "CR",
    rating: 5,
    date: "2024-03-05",
    comment: "Muy profesional y creativo. Captó momentos únicos que nunca olvidaremos. Totalmente recomendado para cualquier evento especial.",
    response: "¡Muchas gracias Carlos! Fue un placer trabajar con vosotros en vuestro día especial.",
    helpful: 8
  },
  {
    id: 3,
    client: "Ana Martínez",
    avatar: "AM",
    rating: 4,
    date: "2024-02-28",
    comment: "Buena calidad en las fotos y buen trato. Hubo un pequeño retraso en la entrega pero el resultado final compensó la espera.",
    response: "Gracias Ana, lamento el retraso. Hemos mejorado nuestros tiempos de entrega para futuros clientes.",
    helpful: 5
  },
  {
    id: 4,
    client: "David Torres",
    avatar: "DT",
    rating: 5,
    date: "2024-02-20",
    comment: "Excelente servicio desde el primer contacto. Las fotos de nuestra boda son una obra de arte. Sin duda volveremos a contar con sus servicios.",
    response: null,
    helpful: 15
  },
  {
    id: 5,
    client: "Elena Vega",
    avatar: "EV",
    rating: 5,
    date: "2024-02-15",
    comment: "Profesionalidad máxima. Supo captar la esencia de nuestro día especial de una manera única. Las fotos transmiten todas las emociones del momento.",
    response: "Elena, fue maravilloso ser parte de vuestro día. ¡Gracias por confiar en nosotros!",
    helpful: 9
  },
  {
    id: 6,
    client: "Roberto Jiménez",
    avatar: "RJ",
    rating: 4,
    date: "2024-02-10",
    comment: "Buen trabajo en general. Las fotos de ceremonia quedaron perfectas, aunque esperaba un poco más de creatividad en las fotos de pareja.",
    response: null,
    helpful: 3
  }
];

const ProviderReviews = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/20">
        <AppSidebar userType="provider" />
        <SidebarInset className="flex-1">
          <DashboardHeader />
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Reseñas</h1>
                <p className="text-muted-foreground">Gestiona las valoraciones de tus clientes</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Rating Summary */}
                <div className="space-y-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        Puntuación Global
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center space-y-4">
                        <div>
                          <div className="text-4xl font-bold text-primary">{reviewsData.overall}</div>
                          <div className="flex justify-center space-x-1 mt-2">
                            {renderStars(Math.round(reviewsData.overall))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Basado en {reviewsData.total} reseñas
                          </p>
                        </div>

                        <div className="space-y-2">
                          {reviewsData.distribution.map((item) => (
                            <div key={item.stars} className="flex items-center space-x-2 text-sm">
                              <span className="w-8">{item.stars}★</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-yellow-400 h-2 rounded-full"
                                  style={{ width: `${item.percentage}%` }}
                                />
                              </div>
                              <span className="w-8 text-muted-foreground">{item.count}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Estadísticas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Satisfacción general</span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">96%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Recomendaciones</span>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">94%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Respuesta promedio</span>
                          <span className="text-sm font-medium">2 días</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Reviews List */}
                <div className="lg:col-span-2">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Reseñas de Clientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6 max-h-[calc(100vh-300px)] overflow-y-auto">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b pb-6 last:border-b-0">
                            <div className="flex items-start space-x-4">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-primary/10 text-primary">
                                  {review.avatar}
                                </AvatarFallback>
                              </Avatar>
                              
                              <div className="flex-1 space-y-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="font-medium">{review.client}</h4>
                                    <div className="flex items-center space-x-2 mt-1">
                                      <div className="flex space-x-1">
                                        {renderStars(review.rating)}
                                      </div>
                                      <span className="text-sm text-muted-foreground">
                                        {new Date(review.date).toLocaleDateString('es-ES')}
                                      </span>
                                    </div>
                                  </div>
                                  <Badge className="bg-primary/10 text-primary">
                                    {review.rating}.0
                                  </Badge>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {review.comment}
                                </p>

                                {review.response && (
                                  <div className="bg-secondary/20 p-3 rounded-lg border-l-4 border-primary">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <MessageSquare className="h-4 w-4 text-primary" />
                                      <span className="text-sm font-medium text-primary">Tu respuesta</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      {review.response}
                                    </p>
                                  </div>
                                )}

                                <div className="flex items-center justify-between pt-2">
                                  <span className="text-xs text-muted-foreground">
                                    {review.helpful} personas encontraron esto útil
                                  </span>
                                  
                                  {!review.response && (
                                    <Button variant="outline" size="sm">
                                      <MessageSquare className="h-4 w-4 mr-2" />
                                      Responder
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProviderReviews;
