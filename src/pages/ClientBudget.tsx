import { useState } from "react";
import { DashboardLayout } from "@/shared/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { KPICard } from "@/shared/components/kpi-card";
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

const ClientBudget = () => {
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);

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
    console.log("Downloading budget PDF...");
    alert("Descargando presupuesto en PDF...");
  };

  return (
    <DashboardLayout userType="client" title="Presupuesto" subtitle="Controla los gastos de tu boda">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={handleDownloadPDF}>
            <Download className="h-4 w-4 mr-2" />
            Descargar PDF
          </Button>
        </div>
      </div>

      {/* Summary Cards - Using KPICard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KPICard
          title="Presupuesto Total"
          value={`€${budgetData.total.toLocaleString()}`}
          subtitle="presupuesto inicial"
          color="primary"
          icon={Euro}
        />

        <KPICard
          title="Gastado"
          value={`€${budgetData.spent.toLocaleString()}`}
          subtitle={`${spentPercentage.toFixed(1)}% del total`}
          color="red"
          icon={TrendingUp}
          progress={spentPercentage}
        />

        <KPICard
          title="Disponible"
          value={`€${budgetData.remaining.toLocaleString()}`}
          subtitle="restante"
          color="green"
          icon={Euro}
        />
      </div>

      {/* Expenses List */}
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
                      <Button className="flex-1" onClick={() => setShowNewCategoryModal(false)}>
                        Añadir Categoría
                      </Button>
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
    </DashboardLayout>
  );
};

export default ClientBudget;
