
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { CoupleForm } from "@/features/auth/components/CoupleForm";
import { ProviderForm } from "@/features/auth/components/ProviderForm";
import { Heart } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors mb-4">
            <Heart className="h-8 w-8 fill-current" />
            <span>WeddingPlan</span>
          </Link>
          <CardTitle className="text-2xl">Crear Cuenta</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="couple" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="couple">Pareja</TabsTrigger>
              <TabsTrigger value="provider">Proveedor</TabsTrigger>
            </TabsList>
            <TabsContent value="couple">
              <CoupleForm />
            </TabsContent>
            <TabsContent value="provider">
              <ProviderForm />
            </TabsContent>
          </Tabs>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-primary hover:underline">
              ¿Ya tienes cuenta? Inicia sesión
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
