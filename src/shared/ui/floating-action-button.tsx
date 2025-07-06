import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingActionButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const FloatingActionButton = ({ 
  onClick, 
  icon = <Plus className="h-5 w-5" />, 
  className,
  children 
}: FloatingActionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 bg-primary hover:bg-primary/90",
        "sm:bottom-8 sm:right-8",
        className
      )}
    >
      {children || icon}
    </Button>
  );
};
