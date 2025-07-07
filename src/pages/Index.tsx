
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { CoupleForm } from "@/features/auth/components/CoupleForm";
import { ProviderForm } from "@/features/auth/components/ProviderForm";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <HeroSection />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Cómo quieres empezar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige la opción que mejor se adapte a tus necesidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <CoupleForm />
            <ProviderForm />
          </div>
        </div>
      </section>
      
      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-primary">WeddingPlan</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 WeddingPlan. Haciendo realidad los sueños de boda.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
