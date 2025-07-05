
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const routeLabels: Record<string, string> = {
  "dashboard": "Dashboard",
  "services": "Mis Servicios", 
  "calendar": "Calendario",
  "budget": "Presupuesto",
  "messages": "Mensajes",
  "guests": "Invitados",
  "notifications": "Notificaciones",
  "settings": "Ajustes",
  "clients": "Mis Clientes",
  "finances": "Finanzas",
  "reviews": "Reseñas",
  "admin": "Administración",
  "vendors": "Proveedores",
  "client": "Cliente",
  "provider": "Proveedor"
};

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from route if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Inicio", href: "/" }
    ];
    
    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        label: routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
        href: isLast ? undefined : currentPath,
        current: isLast
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav 
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground mb-6", className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/60" />
            )}
            
            {index === 0 && (
              <Home className="h-4 w-4 mr-2 text-muted-foreground/60" />
            )}
            
            {item.href && !item.current ? (
              <Link
                to={item.href}
                className="hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className={cn(
                  "font-medium",
                  item.current ? "text-foreground" : "text-muted-foreground"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
