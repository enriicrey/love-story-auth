
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Euro, TrendingUp, Users, CreditCard, Search, Download } from "lucide-react";
import { useState } from "react";

const monthlyData = [
  { month: "Ene", income: 7200 },
  { month: "Feb", income: 8100 },
  { month: "Mar", income: 9300 },
  { month: "Abr", income: 8500 },
  { month: "May", income: 10200 },
  { month: "Jun", income: 8500 },
];

const transactions = [
  {
    id: 1,
    date: "2024-03-15",
    client: "María & José",
    concept: "Anticipo 50% - Paquete Premium",
    amount: 600,
    status: "paid"
  },
  {
    id: 2,
    date: "2024-03-10",
    client: "Ana & Carlos",
    concept: "Pago completo - Paquete Básico",
    amount: 800,
    status: "paid"
  },
  {
    id: 3,
    date: "2024-03-08",
    client: "Elena & David",
    concept: "Anticipo 30% - Paquete Deluxe",
    amount: 450,
    status: "pending"
  },
  {
    id: 4,
    date: "2024-03-05",
    client: "Sofia & Miguel",
    concept: "Pago final - Sesión pre-boda",
    amount: 400,
    status: "paid"
  },
  {
    id: 5,
    date: "2024-03-02",
    client: "Laura & Roberto",
    concept: "Anticipo 50% - Paquete Premium",
    amount: 600,
    status: "overdue"
  },
  {
    id: 6,
    date: "2024-02-28",
    client: "Carmen & Antonio",
    concept: "Pago completo - Álbum adicional",
    amount: 200,
    status: "paid"
  },
  {
    id: 7,
    date: "2024-02-25",
    client: "Isabel & Francisco",
    concept: "Anticipo 40% - Paquete Deluxe",
    amount: 560,
    status: "paid"
  },
  {
    id: 8,
    date: "2024-02-20",
    client: "Patricia & Alejandro",
    concept: "Pago final - Retoque fotos",
    amount: 150,
    status: "pending"
  }
];

const ProviderFinances = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Pagado</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pendiente</Badge>;
      case "overdue":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Vencido</Badge>;
      default:
        return <Badge>Desconocido</Badge>;
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.concept.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = transactions.reduce((sum, t) => t.status === "paid" ? sum + t.amount : sum, 0);
  const pendingRevenue = transactions.reduce((sum, t) => t.status === "pending" ? sum + t.amount : sum, 0);
  const activeClients = [...new Set(transactions.map(t => t.client))].length;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/20">
        <AppSidebar userType="provider" />
        <SidebarInset className="flex-1">
          <DashboardHeader />
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Finanzas</h1>
                  <p className="text-muted-foreground">Gestiona tus ingresos y pagos</p>
                </div>
                
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Datos
                </Button>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <Euro className="h-5 w-5 text-primary" />
                      <CardTitle className="text-sm">Ingresos Mes Actual</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">€8,500</div>
                    <div className="text-xs text-green-600">+12% vs mes anterior</div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <CardTitle className="text-sm">Ingresos Año</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">€85,000</div>
                    <div className="text-xs text-green-600">+8% vs año anterior</div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <CardTitle className="text-sm">Clientes Activos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{activeClients}</div>
                    <div className="text-xs text-muted-foreground">este mes</div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <CardTitle className="text-sm">Pago Promedio</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">€1,200</div>
                    <div className="text-xs text-muted-foreground">por cliente</div>
                  </CardContent>
                </Card>
              </div>

              {/* Revenue Chart */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Ingresos Últimos 6 Meses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`€${value}`, 'Ingresos']} />
                        <Bar dataKey="income" fill="hsl(var(--primary))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Transactions */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Transacciones</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      Total: €{totalRevenue} | Pendiente: €{pendingRevenue}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Filters */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Buscar por cliente o concepto..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos los estados</SelectItem>
                        <SelectItem value="paid">Pagados</SelectItem>
                        <SelectItem value="pending">Pendientes</SelectItem>
                        <SelectItem value="overdue">Vencidos</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={monthFilter} onValueChange={setMonthFilter}>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Mes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos los meses</SelectItem>
                        <SelectItem value="03">Marzo 2024</SelectItem>
                        <SelectItem value="02">Febrero 2024</SelectItem>
                        <SelectItem value="01">Enero 2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Transactions Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Fecha</th>
                          <th className="text-left py-3 px-2">Cliente</th>
                          <th className="text-left py-3 px-2">Concepto</th>
                          <th className="text-right py-3 px-2">Monto</th>
                          <th className="text-center py-3 px-2">Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTransactions.map((transaction) => (
                          <tr key={transaction.id} className="border-b hover:bg-secondary/5">
                            <td className="py-3 px-2 text-sm">
                              {new Date(transaction.date).toLocaleDateString('es-ES')}
                            </td>
                            <td className="py-3 px-2 font-medium">{transaction.client}</td>
                            <td className="py-3 px-2 text-sm text-muted-foreground">
                              {transaction.concept}
                            </td>
                            <td className="py-3 px-2 text-right font-bold">
                              €{transaction.amount}
                            </td>
                            <td className="py-3 px-2 text-center">
                              {getStatusBadge(transaction.status)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {filteredTransactions.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No se encontraron transacciones.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProviderFinances;
