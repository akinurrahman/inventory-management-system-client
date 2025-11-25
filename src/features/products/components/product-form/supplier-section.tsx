import React from 'react';

import { FormInput } from '@form-input';
import { FieldGroup } from '@ui/field';

import { Supplier } from '@/features/supplier/types/supplier.types';

const SupplierSection = ({ suppliers }: { suppliers: Supplier[] }) => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Suppliers</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Link this product to one or more suppliers
        </p>
      </div>

      <FieldGroup>
        <FormInput
          name="supplierIds"
          fieldType="select"
          variant="multi-selector"
          label="Suppliers"
          placeholder="Select suppliers"
          options={suppliers.map(supplier => ({
            label: supplier.name,
            value: supplier._id,
          }))}
          required
          description="Add at least one supplier for this product"
        />
      </FieldGroup>
    </section>
  );
};

export default SupplierSection;
