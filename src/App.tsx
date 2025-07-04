
import { Toaster } from "@/shared/ui/toaster";
import { Toaster as Sonner } from "@/shared/ui/sonner";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "@/pages/Index";
import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";
import ClientDashboard from "@/features/client/pages/ClientDashboard";
import ClientServices from "@/features/client/pages/ClientServices";
import ClientMessages from "@/pages/ClientMessages";
import ClientCalendar from "@/pages/ClientCalendar";
import ClientBudget from "@/pages/ClientBudget";
import ClientGuests from "@/pages/ClientGuests";
import ClientNotifications from "@/pages/ClientNotifications";
import ClientSettings from "@/pages/ClientSettings";
import ProviderDashboard from "@/pages/ProviderDashboard";
import ProviderClients from "@/pages/ProviderClients";
import ProviderCalendar from "@/pages/ProviderCalendar";
import ProviderFinances from "@/pages/ProviderFinances";
import ProviderMessages from "@/pages/ProviderMessages";
import ProviderReviews from "@/pages/ProviderReviews";
import ProviderNotifications from "@/pages/ProviderNotifications";
import ProviderSettings from "@/pages/ProviderSettings";
import AdminDashboard from "@/pages/AdminDashboard";
import Vendors from "@/pages/Vendors";
import VendorDetail from "@/pages/VendorDetail";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/services" element={<ClientServices />} />
          <Route path="/client/messages" element={<ClientMessages />} />
          <Route path="/client/calendar" element={<ClientCalendar />} />
          <Route path="/client/budget" element={<ClientBudget />} />
          <Route path="/client/guests" element={<ClientGuests />} />
          <Route path="/client/notifications" element={<ClientNotifications />} />
          <Route path="/client/settings" element={<ClientSettings />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendors/:id" element={<VendorDetail />} />
          <Route path="/provider/dashboard" element={<ProviderDashboard />} />
          <Route path="/provider/clients" element={<ProviderClients />} />
          <Route path="/provider/calendar" element={<ProviderCalendar />} />
          <Route path="/provider/finances" element={<ProviderFinances />} />
          <Route path="/provider/messages" element={<ProviderMessages />} />
          <Route path="/provider/reviews" element={<ProviderReviews />} />
          <Route path="/provider/notifications" element={<ProviderNotifications />} />
          <Route path="/provider/settings" element={<ProviderSettings />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
