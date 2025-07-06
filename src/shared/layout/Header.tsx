import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export const Header = () => {
  return (
    <header className="glass-effect sticky top-0 z-40 border-b border-border/50">
      <div className="container mx-auto responsive-padding py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            <Heart className="h-8 w-8 fill-current" />
            <span>WeddingPlan</span>
          </Link>
          {/* Additional header content can be added here if needed */}
        </div>
      </div>
    </header>
  );
};
