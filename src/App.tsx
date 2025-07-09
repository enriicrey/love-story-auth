
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientDashboard from "./pages/ClientDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import ClientServices from "./pages/ClientServices";
import Vendors from "./pages/Vendors";
import VendorDetail from "./pages/VendorDetail";
import ClientMessages from "./pages/ClientMessages";
import ClientCalendar from "./pages/ClientCalendar";
import ClientBudget from "./pages/ClientBudget";
import ClientGuests from "./pages/ClientGuests";
import ClientNotifications from "./pages/ClientNotifications";
import ClientSettings from "./pages/ClientSettings";
import ProviderClients from "./pages/ProviderClients";
import ProviderCalendar from "./pages/ProviderCalendar";
import ProviderFinances from "./pages/ProviderFinances";
import ProviderMessages from "./pages/ProviderMessages";
import ProviderReviews from "./pages/ProviderReviews";
import ProviderNotifications from "./pages/ProviderNotifications";
import ProviderSettings from "./pages/ProviderSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Client Routes */}
            <Route path="/client/dashboard" element={
              <ProtectedRoute requiredUserType="client">
                <ClientDashboard />
              </ProtectedRoute>
            } />
            <Route path="/client/services" element={
              <ProtectedRoute requiredUserType="client">
                <ClientServices />
              </ProtectedRoute>
            } />
            <Route path="/client/messages" element={
              <ProtectedRoute requiredUserType="client">
                <ClientMessages />
              </ProtectedRoute>
            } />
            <Route path="/client/calendar" element={
              <ProtectedRoute requiredUserType="client">
                <ClientCalendar />
              </ProtectedRoute>
            } />
            <Route path="/client/budget" element={
              <ProtectedRoute requiredUserType="client">
                <ClientBudget />
              </ProtectedRoute>
            } />
            <Route path="/client/guests" element={
              <ProtectedRoute requiredUserType="client">
                <ClientGuests />
              </ProtectedRoute>
            } />
            <Route path="/client/notifications" element={
              <ProtectedRoute requiredUserType="client">
                <ClientNotifications />
              </ProtectedRoute>
            } />
            <Route path="/client/settings" element={
              <ProtectedRoute requiredUserType="client">
                <ClientSettings />
              </ProtectedRoute>
            } />
            
            {/* Vendor Routes */}
            <Route path="/vendors" element={
              <ProtectedRoute requiredUserType="client">
                <Vendors />
              </ProtectedRoute>
            } />
            <Route path="/vendors/:id" element={
              <ProtectedRoute requiredUserType="client">
                <VendorDetail />
              </ProtectedRoute>
            } />
            
            {/* Provider Routes */}
            <Route path="/provider/dashboard" element={
              <ProtectedRoute requiredUserType="provider">
                <ProviderDashboard />
              </ProtectedRoute>
            } />
            <Route path="/provider/clients" element={
              <ProtectedRoute requiredUserType="provider">
                <ProviderClients />
              </ProtectedRoute>
            } />
            <Route path="/provider/calendar" element={
              <ProtectedRoute requiredUserType="provider">
                <ProviderCalendar />
              </ProtectedRoute>
            } />
            <Route path="/provider/finances" element={
              <ProtectedRoute requiredUserType="provider">
                <ProviderFinances />
              </ProtectedRoute>
            } />
            <Route path="/provider/messages" element={
              <ProtectedRoute requiredUserType="provider">
                <ProviderMessages />
              </ProtectedRoute>
            } />
            <Route path="/provider/reviews" element={
              <ProtectedRoute requiredUserType="provider">
                <ProviderReviews />
              </ProtectedRoute>
            } />
            <Route path="/provider/notifications" element={
              <ProtectedRoute requiredUserType="provider">
                <ProviderNotifications />
              </ProtectedRoute>
            } />
            <Route path="/provider/settings" element={
              <ProtectedRoute requiredUserType="provider">
                <ProviderSettings />
              </ProtectedRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
