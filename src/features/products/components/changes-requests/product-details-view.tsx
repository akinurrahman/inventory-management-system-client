import React from 'react';

import { Badge } from '@ui/badge';

import { ImageGallery } from '@/components/shared';
import { cn } from '@/lib/utils';

import { Product } from '../../types/product.types';

interface ProductDetailsViewProps {
  product: Partial<Product>;
  action: 'create' | 'update' | 'delete';
}

const ProductDetailsView: React.FC<ProductDetailsViewProps> = ({ product, action }) => {
  const discountedPrice =
    product.price && product.discount
      ? Math.round(product.price * (1 - product.discount / 100))
      : product.price;

  return (
    <div className="border-t pt-6">
      <h3 className="mb-4 text-lg font-semibold">
        {action === 'delete' ? 'Product to be Deleted' : 'Product Details'}
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Column - Images */}
        {product.files && product.files.length > 0 && (
          <div className="space-y-4">
            <ImageGallery images={product.files} name={product.name || 'Product'} />
          </div>
        )}

        {/* Right Column - Details */}
        <div className="space-y-4">
          {/* Product Name */}
          {product.name && (
            <div>
              <h4 className="mb-2 text-2xl font-bold">{product.name}</h4>
              {product.category && (
                <p className="text-muted-foreground text-sm tracking-wide uppercase">
                  {product.category}
                </p>
              )}
            </div>
          )}

          {/* Price Information */}
          {product.price !== undefined && (
            <div className="bg-muted/50 space-y-3 rounded-lg p-4">
              <div className="flex items-center gap-3">
                {product.discount ? (
                  <>
                    <span className="text-destructive text-2xl font-bold">
                      ₹{discountedPrice?.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-lg line-through">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <Badge variant="destructive">{product.discount}% OFF</Badge>
                  </>
                ) : (
                  <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
                )}
              </div>
            </div>
          )}

          {/* Stock Information */}
          {(product.stock !== undefined || product.minStock !== undefined) && (
            <div className="bg-muted/50 space-y-2 rounded-lg p-4">
              {product.stock !== undefined && (
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm font-medium">Stock Available</span>
                  <span
                    className={cn(
                      'text-lg font-semibold',
                      product.minStock && product.stock > product.minStock
                        ? 'text-green-600'
                        : 'text-orange-600'
                    )}
                  >
                    {product.stock} units
                  </span>
                </div>
              )}
              {product.minStock !== undefined && (
                <div className="flex items-center justify-between border-t pt-2">
                  <span className="text-muted-foreground text-sm font-medium">Alert Threshold</span>
                  <span className="font-semibold">{product.minStock}</span>
                </div>
              )}
            </div>
          )}

          {/* SKU and Status */}
          {(product.sku || product.status) && (
            <div className="bg-muted/50 space-y-2 rounded-lg p-4">
              {product.sku && (
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm font-medium">SKU</span>
                  <span className="font-mono text-sm font-semibold">{product.sku}</span>
                </div>
              )}
              {product.status && (
                <div
                  className={cn(
                    'flex items-center justify-between',
                    product.sku && 'border-t pt-2'
                  )}
                >
                  <span className="text-muted-foreground text-sm font-medium">Status</span>
                  <Badge
                    variant={product.status === 'active' ? 'default' : 'outline'}
                    className="capitalize"
                  >
                    {product.status}
                  </Badge>
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="px-3 py-1 text-sm font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {product.description && (
            <div className="text-muted-foreground bg-muted/30 mt-6 rounded-lg p-4 text-sm leading-relaxed">
              <h4 className="text-foreground mb-2 font-semibold">Description</h4>
              <p>{product.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsView;
