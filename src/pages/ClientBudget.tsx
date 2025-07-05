
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Euro, TrendingUp, Download, Plus, Edit } from "lucide-react";

const budgetData = {
  total: 20000,
  spent: 12500,
  remaining: 7500
};

const contractedServices = [
  { id: 1, name: "Foto Elena", category: "Fotografía", amount: 1200, status: "confirmado" },
  { id: 2, name: "Catering Deluxe", category: "Catering", amount: 4500, status: "confirmado" },
  { id: 3, name: "DJ Carlos", category: "Música", amount: 800, status: "confirmado" },
  { id: 4, name: "Flores & Co", category: "Decoración", amount: 2000, status: "pendiente" }
];

const personalCategories = [
  { id: 1, name: "Vestido", amount: 1500, status: "estimado" },
  { id: 2, name: "Anillos", amount: 2000, status: "pendiente" },
  { id: 3, name: "Invitaciones", amount: 300, status: "completado" },
  { id: 4, name: "Transporte", amount: 500, status: "estimado" }
];

const statusColors = {
  confirmado: "bg-green-100 text-green-800",
  pendiente: "bg-yellow-100 text-yellow-800",
  estimado: "bg-gray-100 text-gray-800",
  completado: "bg-blue-100 text-blue-800"
};

const statusLabels = {
  confirmado: "Confirmado",
  pendiente: "Pendiente",
  estimado: "Estimado",
  completado: "Completado"
};

const chartData = [
  { name: "Gastado", value: budgetData.spent, fill: "#ef4444" },
  { name: "Restante", value: budgetData.remaining, fill: "#10b981" }
];

const ClientBudget = () => {
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const spentPercentage = (budgetData.spent / budgetData.total) * 100;

  const allExpenses = [
    ...contractedServices.map(service => ({ ...service, type: 'service' })),
    ...personalCategories.map(category => ({ ...category, type: 'personal' }))
  ];

  const filteredExpenses = allExpenses.filter(expense => {
    if (selectedFilter === "todos") return true;
    return expense.status === selectedFilter;
  });

  const handleDownloadPDF = () => {
    // Simulate PDF download
    console.log("Downloading budget PDF...");
    alert("Descargando presupuesto en PDF...");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Presupuesto</h1>
                  <p className="text-muted-foreground">Controla los gastos de tu boda</p>
                </div>
                <Button variant="outline" onClick={handleDownloadPDF}>
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Euro className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">Presupuesto Total</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">€{budgetData.total.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">presupuesto inicial</div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-sm">Gastado</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">€{budgetData.spent.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground mb-2">{spentPercentage.toFixed(1)}% del total</div>
                  <Progress value={spentPercentage} className="h-2" />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Euro className="h-5 w-5 text-green-500" />
                    <CardTitle className="text-sm">Disponible</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">€{budgetData.remaining.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">restante</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="lg:col-span-1">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Distribución</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{ spent: { label: "Gastado" }, remaining: { label: "Restante" } }}>
                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Expenses List */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Desglose de Gastos</CardTitle>
                      <div className="flex space-x-2">
                        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="todos">Todos</SelectItem>
                            <SelectItem value="confirmado">Confirmados</SelectItem>
                            <SelectItem value="pendiente">Pendientes</SelectItem>
                            <SelectItem value="estimado">Estimados</SelectItem>
                            <SelectItem value="completado">Completados</SelectItem>
                          </SelectContent>
                        </Select>
                        <Dialog open={showNewCategoryModal} onOpenChange={setShowNewCategoryModal}>
                          <DialogTrigger asChild>
                            <Button>
                              <Plus className="h-4 w-4 mr-2" />
                              Añadir
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Añadir Nueva Categoría</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="categoryName">Nombre</Label>
                                <Input id="categoryName" placeholder="Nombre de la categoría" />
                              </div>
                              <div>
                                <Label htmlFor="categoryAmount">Monto</Label>
                                <Input id="categoryAmount" type="number" placeholder="0" />
                              </div>
                              <div>
                                <Label htmlFor="categoryStatus">Estado</Label>
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Seleccionar estado" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="estimado">Estimado</SelectItem>
                                    <SelectItem value="pendiente">Pendiente</SelectItem>
                                    <SelectItem value="confirmado">Confirmado</SelectItem>
                                    <SelectItem value="completado">Completado</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex space-x-2">
                                <Button className="flex-1">Añadir Categoría</Button>
                                <Button variant="outline" onClick={() => setShowNewCategoryModal(false)}>
                                  Cancelar
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {/* Contracted Services */}
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3">SERVICIOS CONTRATADOS</h4>
                        {contractedServices
                          .filter(service => selectedFilter === "todos" || service.status === selectedFilter)
                          .map((service) => (
                            <div key={service.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg mb-2">
                              <div>
                                <p className="font-medium">{service.name}</p>
                                <p className="text-sm text-muted-foreground">{service.category}</p>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Badge className={statusColors[service.status]}>
                                  {statusLabels[service.status]}
                                </Badge>
                                <p className="font-semibold">€{service.amount.toLocaleString()}</p>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* Personal Categories */}
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3">CATEGORÍAS PERSONALES</h4>
                        {personalCategories
                          .filter(category => selectedFilter === "todos" || category.status === selectedFilter)
                          .map((category) => (
                            <div key={category.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg mb-2">
                              <div>
                                <p className="font-medium">{category.name}</p>
                                <p className="text-sm text-muted-foreground">Categoría personal</p>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Badge className={statusColors[category.status]}>
                                  {statusLabels[category.status]}
                                </Badge>
                                <p className="font-semibold">€{category.amount.toLocaleString()}</p>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ClientBudget;
