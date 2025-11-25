'use client';

import React from 'react';

import { FormProvider, UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Separator } from '@/components/ui/separator';
import { Supplier } from '@/features/supplier/types/supplier.types';

import { ProductInput } from '../../validators/product.schema';
import BasicSection from './basic-section';
import ImageSection from './image-section';
import PricingSection from './pricing-section';
import SupplierSection from './supplier-section';

interface ProductFormProps {
  form: UseFormReturn<ProductInput>;
  onSubmit: (data: ProductInput) => void;
  isSubmitting?: boolean;
  submitButtonText?: string;

  categoryOptions: { label: string; value: string }[];
  statusOptions: { label: string; value: string }[];

  priceDetails: {
    original: number;
    discount: number;
    final: number;
    discountPercent: number;
  };

  suppliers: Supplier[];
}

const ProductForm = ({
  form,
  onSubmit,
  isSubmitting = false,
  submitButtonText = 'Create Product',

  categoryOptions,
  statusOptions,

  priceDetails,

  suppliers,
}: ProductFormProps) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <BasicSection categoryOptions={categoryOptions} statusOptions={statusOptions} />
        <Separator className="bg-border/40" />
        <PricingSection priceDetails={priceDetails} />
        <Separator className="bg-border/40" />
        <SupplierSection suppliers={suppliers} />
        <Separator className="bg-border/40" />
        <ImageSection />
        <Separator className="bg-border/40" />

        {/* Form Actions */}
        <Field>
          <div className="flex items-center justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              disabled={isSubmitting}
              className="px-6"
            >
              Reset
            </Button>
            <Button type="submit" className="min-w-[160px] px-8" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  <span>Processing...</span>
                </div>
              ) : (
                submitButtonText
              )}
            </Button>
          </div>
        </Field>
      </form>
    </FormProvider>
  );
};

export default ProductForm;
