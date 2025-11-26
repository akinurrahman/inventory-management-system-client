import { Mail, MapPin } from 'lucide-react';

export interface Supplier {
  _id: string;
  email?: string;
  phone?: string;
  address?: string;
}

interface SupplierCardProps {
  supplier: Supplier;
}

export function SupplierCard({ supplier }: SupplierCardProps) {
  return (
    <div className="bg-card space-y-3 rounded-lg border p-6 text-sm transition-shadow hover:shadow-md">
      {supplier.email && (
        <div className="text-muted-foreground flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${supplier.email}`} className="hover:text-primary">
            {supplier.email}
          </a>
        </div>
      )}

      {supplier.phone && (
        <div className="text-muted-foreground flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center">📱</span>
          <a href={`tel:${supplier.phone}`} className="hover:text-primary">
            {supplier.phone}
          </a>
        </div>
      )}

      {supplier.address && (
        <div className="text-muted-foreground flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{supplier.address}</span>
        </div>
      )}
    </div>
  );
}
