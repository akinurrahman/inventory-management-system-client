import React from 'react';

import { FormInput } from '@form-input';
import { FieldGroup } from '@ui/field';

const ImageSection = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Product Images</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Upload high-quality images of your product
        </p>
      </div>

      <FieldGroup>
        <FormInput
          name="files"
          fieldType="file"
          label="Product Images"
          variant="multiple"
          multiple
          accept="image/*"
          description="Upload product images (JPG, PNG, WebP)"
        />
      </FieldGroup>
    </section>
  );
};

export default ImageSection;
