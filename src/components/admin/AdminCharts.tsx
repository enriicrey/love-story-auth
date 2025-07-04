
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const registrationData = [
  { month: 'Jul', clients: 45, providers: 12 },
  { month: 'Ago', clients: 52, providers: 15 },
  { month: 'Sep', clients: 67, providers: 18 },
  { month: 'Oct', clients: 71, providers: 22 },
  { month: 'Nov', clients: 85, providers: 28 },
  { month: 'Dic', clients: 92, providers: 32 }
];

const revenueData = [
  { month: 'Jul', revenue: 8500 },
  { month: 'Ago', revenue: 9200 },
  { month: 'Sep', revenue: 10800 },
  { month: 'Oct', revenue: 11500 },
  { month: 'Nov', revenue: 12100 },
  { month: 'Dic', revenue: 12500 }
];

export const AdminCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Registration Chart */}
      <Card className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Registros Mensuales</span>
            </CardTitle>
            <Badge variant="outline">Últimos 6 meses</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={registrationData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Bar dataKey="clients" fill="hsl(var(--primary))" name="Clientes" radius={[4, 4, 0, 0]} />
                <Bar dataKey="providers" fill="hsl(var(--info))" name="Proveedores" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Chart */}
      <Card className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Evolución Ingresos</span>
            </CardTitle>
            <Badge variant="success">+18% total</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: 'hsl(var(--success))', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
