
import { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { VendorFilters } from "@/components/vendors/VendorFilters";
import { VendorGrid } from "@/components/vendors/VendorGrid";
import { useAuth } from "@/components/AuthProvider";
import { useAnalytics } from "@/hooks/useAnalytics";

const Vendors = () => {
  const { user } = useAuth();
  const { trackPageView } = useAnalytics();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCity, setSelectedCity] = useState("todas");

  useEffect(() => {
    if (user) {
      trackPageView('vendors', user.id);
    }
  }, [user, trackPageView]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Proveedores</h1>
              <p className="text-muted-foreground">Encuentra los mejores proveedores para tu boda</p>
            </div>

            <VendorFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />

            <VendorGrid
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              priceRange={priceRange}
              selectedCity={selectedCity}
            />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Vendors;
