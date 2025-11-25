import React from 'react';

import { FormInput } from '@form-input';
import { Badge } from '@ui/badge';
import { Card } from '@ui/card';
import { FieldGroup } from '@ui/field';
import { Separator } from '@ui/separator';

interface Props {
  priceDetails: {
    original: number;
    discount: number;
    final: number;
    discountPercent: number;
  };
}

const PricingSection = ({ priceDetails }: Props) => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Pricing & Inventory</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Set the price, stock levels, and discounts for your product
        </p>
      </div>

      <FieldGroup>
        <div className="grid gap-8 lg:grid-cols-[1fr,420px]">
          <div className="space-y-6">
            <FormInput
              name="price"
              fieldType="input"
              type="number"
              label="Base Price"
              placeholder="0.00"
              required
              description="Original selling price in INR"
            />

            <FormInput
              name="discount"
              fieldType="slider"
              sliderLabel="Discount Percentage"
              suffix="%"
              max={100}
              description="Apply a percentage discount to the base price"
            />
          </div>

          {/* Price Summary Card */}
          <Card className="from-primary/5 to-primary/10 border-primary/20 h-fit bg-gradient-to-br p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm font-medium">Base Price</span>
                <span className="font-mono text-lg font-semibold">
                  ₹{priceDetails.original.toFixed(2)}
                </span>
              </div>

              {priceDetails.discount > 0 && (
                <>
                  <Separator className="bg-primary/10" />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm font-medium">
                      Discount ({priceDetails.discountPercent}%)
                    </span>
                    <span className="text-destructive font-mono text-lg font-semibold">
                      -₹{priceDetails.discount.toFixed(2)}
                    </span>
                  </div>
                </>
              )}

              <Separator className="bg-primary/10" />

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold">Final Price</span>
                  {priceDetails.discount > 0 && (
                    <Badge variant="secondary" className="text-xs font-medium">
                      Save ₹{priceDetails.discount.toFixed(2)}
                    </Badge>
                  )}
                </div>
                <span className="text-primary font-mono text-3xl font-bold">
                  ₹{priceDetails.final.toFixed(2)}
                </span>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput
            name="stock"
            fieldType="input"
            type="number"
            label="Current Stock"
            placeholder="0"
            required
            description="Available quantity in inventory"
          />

          <FormInput
            name="minStock"
            fieldType="input"
            type="number"
            label="Minimum Stock Level"
            placeholder="0"
            description="Alert threshold for low stock"
          />
        </div>
      </FieldGroup>
    </section>
  );
};

export default PricingSection;
