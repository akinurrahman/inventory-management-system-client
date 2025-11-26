'use client';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { ImageGallery } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

import { Product } from '../../types/product.types';
import { SupplierCard } from './supplier-card';

interface Props {
  product: Product;
  prefix: string;
}

const ProductDetails = ({ product, prefix }: Props) => {
  const discountedPrice = product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : product.price;

  return (
    <div className="bg-background text-foreground min-h-screen w-full">
      <div className="mx-auto max-w-7xl p-4 md:p-8">
        <Link
          href={`${prefix}/products`}
          className="text-muted-foreground hover:text-foreground mb-6 flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Back to Products</span>
        </Link>
        <main className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          <ImageGallery images={product.files} name={product.name} />

          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <div>
                <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-sm tracking-wide uppercase">
                  {product.category}
                </p>
              </div>

              {/* Price */}
              <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  {product.discount ? (
                    <>
                      <span className="text-destructive text-3xl font-bold">
                        ₹{discountedPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-lg line-through">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <Badge variant="destructive">{product.discount}% OFF</Badge>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">₹{product.price.toLocaleString()}</span>
                  )}
                </div>
              </div>

              {/* Stock */}
              <div className="bg-muted/50 space-y-2 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm font-medium">Stock Available</span>
                  <span
                    className={cn(
                      'text-lg font-semibold',
                      product.stock > product.minStock ? 'text-green-600' : 'text-orange-600'
                    )}
                  >
                    {product.stock} units
                  </span>
                </div>
                <div className="flex items-center justify-between border-t pt-2">
                  <span className="text-muted-foreground text-sm font-medium">Alert Threshold</span>
                  <span className="font-semibold">{product.minStock}</span>
                </div>
              </div>

              {/* SKU and Status  */}
              <div className="bg-muted/50 space-y-2 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm font-medium">SKU</span>
                  <span className="font-mono text-sm font-semibold">{product.sku}</span>
                </div>
                <div className="flex items-center justify-between border-t pt-2">
                  <span className="text-muted-foreground text-sm font-medium">Status</span>
                  <Badge variant={product.status === 'active' ? 'default' : 'outline'}>
                    {product.status}
                  </Badge>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="gap-2 px-3 py-1 text-sm font-normal">
                  {product.category}
                </Badge>

                {product.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="px-3 py-1 text-sm font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <div className="text-muted-foreground bg-muted/30 rounded-lg p-4 text-sm leading-relaxed">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </main>

        {product.suppliers?.length > 0 && (
          <section className="mt-12 border-t pt-8">
            <h2 className="mb-6 text-2xl font-bold">Suppliers</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {product.suppliers.map(s => (
                <SupplierCard key={s._id} supplier={s} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
