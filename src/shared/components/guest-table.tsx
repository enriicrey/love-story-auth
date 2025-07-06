
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Guest data structure
 */
export interface Guest {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  group: string;
  status: 'confirmed' | 'pending' | 'rejected';
  dietary?: string;
  [key: string]: any;
}

/**
 * Props for the GuestTable component
 */
export interface GuestTableProps {
  /** Array of guest data */
  guests: Guest[];
  /** Whether to show action buttons */
  showActions?: boolean;
  /** Edit handler function */
  onEdit?: (guest: Guest) => void;
  /** Delete handler function */
  onDelete?: (guest: Guest) => void;
  /** Additional CSS classes */
  className?: string;
}

const statusColors = {
  confirmed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  rejected: "bg-red-100 text-red-800"
};

const statusLabels = {
  confirmed: "Confirmado",
  pending: "Pendiente",
  rejected: "Rechazado"
};

const groupColors: Record<string, string> = {
  Familia: "bg-blue-100 text-blue-800",
  Amigos: "bg-purple-100 text-purple-800",
  Trabajo: "bg-orange-100 text-orange-800",
  Pareja: "bg-pink-100 text-pink-800",
};

/**
 * Reusable guest table component with status badges and optional actions
 * 
 * @example
 * ```tsx
 * <GuestTable
 *   guests={guestList}
 *   showActions={true}
 *   onEdit={(guest) => handleEdit(guest)}
 *   onDelete={(guest) => handleDelete(guest)}
 * />
 * ```
 */
export const GuestTable = React.forwardRef<HTMLDivElement, GuestTableProps>(
  ({ guests, showActions = true, onEdit, onDelete, className, ...props }, ref) => {
    const getStatusBadge = (status: Guest['status']) => {
      return (
        <Badge className={statusColors[status]}>
          {statusLabels[status]}
        </Badge>
      );
    };

    const getGroupBadge = (group: string) => {
      return (
        <Badge className={groupColors[group] || "bg-gray-100 text-gray-800"}>
          {group}
        </Badge>
      );
    };

    return (
      <div ref={ref} className={cn("overflow-x-auto", className)} {...props}>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium">Nombre</th>
              <th className="text-left py-3 px-4 font-medium">Contacto</th>
              <th className="text-left py-3 px-4 font-medium">Grupo</th>
              <th className="text-left py-3 px-4 font-medium">Estado</th>
              <th className="text-left py-3 px-4 font-medium">Menú</th>
              {showActions && (
                <th className="text-left py-3 px-4 font-medium">Acciones</th>
              )}
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id} className="border-b hover:bg-secondary/50">
                <td className="py-3 px-4 font-medium">{guest.name}</td>
                <td className="py-3 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a 
                        href={`mailto:${guest.email}`} 
                        className="text-sm hover:underline"
                      >
                        {guest.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a 
                        href={`tel:${guest.phone}`} 
                        className="text-sm hover:underline"
                      >
                        {guest.phone}
                      </a>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">{getGroupBadge(guest.group)}</td>
                <td className="py-3 px-4">{getStatusBadge(guest.status)}</td>
                <td className="py-3 px-4">
                  <span className="text-sm">{guest.dietary || 'Normal'}</span>
                </td>
                {showActions && (
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      {onEdit && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => onEdit(guest)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                      {onDelete && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => onDelete(guest)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);

GuestTable.displayName = "GuestTable";
