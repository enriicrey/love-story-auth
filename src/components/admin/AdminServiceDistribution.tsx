
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const serviceDistribution = [
  { name: 'Fotografía', value: 35, color: '#E91E63' },
  { name: 'Catering', value: 25, color: '#3B82F6' },
  { name: 'Decoración', value: 20, color: '#10B981' },
  { name: 'Música', value: 15, color: '#F59E0B' },
  { name: 'Otros', value: 5, color: '#8B5CF6' }
];

export const AdminServiceDistribution = () => {
  return (
    <Card className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5" />
          <span>Servicios Populares</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={serviceDistribution}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {serviceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2 mt-4">
          {serviceDistribution.map((service, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: service.color }}
                />
                <span>{service.name}</span>
              </div>
              <span className="font-medium">{service.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
