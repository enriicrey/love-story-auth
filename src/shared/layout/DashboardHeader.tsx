import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Heart } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          <Heart className="h-8 w-8 fill-current" />
          <span>WeddingPlan</span>
        </Link>
        <Button variant="ghost" asChild>
          <Link to="/">Cerrar Sesión</Link>
        </Button>
      </div>
    </header>
  );
};
