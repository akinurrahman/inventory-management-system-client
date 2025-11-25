import React from 'react';

import { FormInput } from '@form-input';
import { FieldGroup } from '@ui/field';

interface Props {
  categoryOptions: { label: string; value: string }[];
  statusOptions: { label: string; value: string }[];
}

const BasicSection = ({ categoryOptions, statusOptions }: Props) => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Basic Information</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Enter the essential details about your product
        </p>
      </div>

      <FieldGroup>
        <FormInput
          name="name"
          fieldType="input"
          label="Product Name"
          placeholder="Enter product name"
          required
        />

        <FormInput
          name="description"
          fieldType="textarea"
          label="Description"
          placeholder="Describe your product in detail..."
          rows={4}
          required
        />

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput
            name="category"
            fieldType="select"
            label="Category"
            options={categoryOptions}
            required
          />

          <FormInput name="status" fieldType="select" label="Status" options={statusOptions} />
        </div>

        <FormInput
          name="tags"
          fieldType="input"
          type="multi-item"
          label="Tags"
          placeholder="Add tags (press Enter to add)"
          description="Add tags to help categorize and search for this product"
        />
      </FieldGroup>
    </section>
  );
};

export default BasicSection;
