
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Props for the KPICard component
 */
export interface KPICardProps {
  /** The main title of the KPI card */
  title: string;
  /** The main value to display */
  value: string | number;
  /** Optional subtitle text */
  subtitle?: string;
  /** Color theme for the card */
  color?: 'red' | 'green' | 'blue' | 'orange' | 'primary';
  /** Icon component to display */
  icon: LucideIcon;
  /** Optional progress value (0-100) */
  progress?: number;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for the card */
  onClick?: () => void;
}

const colorVariants = {
  red: {
    icon: "text-red-500",
    value: "text-red-600",
    progress: "text-red-600"
  },
  green: {
    icon: "text-green-500",
    value: "text-green-600",
    progress: "text-green-600"
  },
  blue: {
    icon: "text-blue-500",
    value: "text-blue-600",
    progress: "text-blue-600"
  },
  orange: {
    icon: "text-orange-500",
    value: "text-orange-600",
    progress: "text-orange-600"
  },
  primary: {
    icon: "text-primary",
    value: "text-primary",
    progress: "text-primary"
  }
};

/**
 * KPICard component for displaying key performance indicators
 * 
 * @example
 * ```tsx
 * <KPICard
 *   title="Total Budget"
 *   value="€20,000"
 *   subtitle="initial budget"
 *   color="primary"
 *   icon={Euro}
 *   progress={75}
 * />
 * ```
 */
export const KPICard = React.forwardRef<HTMLDivElement, KPICardProps>(
  ({ title, value, subtitle, color = 'primary', icon: Icon, progress, className, onClick, ...props }, ref) => {
    const colorClasses = colorVariants[color];
    
    return (
      <Card 
        ref={ref}
        className={cn(
          "shadow-lg hover:shadow-xl transition-shadow",
          onClick && "cursor-pointer",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <Icon className={cn("h-5 w-5", colorClasses.icon)} />
            <CardTitle className="text-sm">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className={cn("text-2xl font-bold", colorClasses.value)}>
            {typeof value === 'number' ? value.toLocaleString() : value}
          </div>
          {subtitle && (
            <div className="text-xs text-muted-foreground mb-2">{subtitle}</div>
          )}
          {typeof progress === 'number' && (
            <Progress value={progress} className="h-2" />
          )}
        </CardContent>
      </Card>
    );
  }
);

KPICard.displayName = "KPICard";
