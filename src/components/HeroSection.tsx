
import { Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="h-16 w-16 text-primary fill-current animate-pulse" />
              <Sparkles className="h-6 w-6 text-primary absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            El día perfecto
            <span className="block text-primary">comienza aquí</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Planifica tu boda con los mejores proveedores y convierte tu sueño en realidad
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <span>Más de 1,000 parejas felices</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <span>500+ proveedores verificados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
