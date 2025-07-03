
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContractServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  vendor: {
    id: number;
    name: string;
    service: string;
    packages: Array<{
      name: string;
      price: number;
      description: string;
    }>;
  };
}

export const ContractServiceModal = ({ isOpen, onClose, vendor }: ContractServiceModalProps) => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPackage || !eventDate) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    toast({
      title: "¡Solicitud enviada!",
      description: `Tu solicitud ha sido enviada a ${vendor.name}. Te contactarán pronto.`
    });

    onClose();
    setSelectedPackage("");
    setEventDate("");
    setNotes("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contratar Servicio</DialogTitle>
          <DialogDescription>
            Solicita el servicio de {vendor.name} - {vendor.service}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="package">Paquete *</Label>
            <Select value={selectedPackage} onValueChange={setSelectedPackage} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un paquete" />
              </SelectTrigger>
              <SelectContent>
                {vendor.packages.map((pkg, index) => (
                  <SelectItem key={index} value={pkg.name}>
                    {pkg.name} - €{pkg.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Fecha del evento *</Label>
            <Input
              id="date"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notas especiales</Label>
            <Textarea
              id="notes"
              placeholder="Añade cualquier detalle especial o requerimiento..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              Enviar Solicitud
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
