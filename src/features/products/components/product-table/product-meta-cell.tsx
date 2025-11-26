import React from 'react';

import { Badge } from '@ui/badge';

import { truncateText } from '@/lib/text';

import { Product } from '../../types/product.types';

interface props {
  product: Product;
}
const ProductMetaCell = ({ product }: props) => {
  const discount = product.discount ?? 0;
  const tags = product.tags ?? [];
  const suppliers = product.suppliers?.length ?? 0;
  const description = product.description ?? '';
  return (
    <div className="flex min-w-[220px] items-start gap-3">
      <div className="min-w-0 flex-1">
        {/* Name + short description */}
        <div className="flex items-center justify-between gap-2">
          <div className="truncate">
            <div className="text-sm font-medium">{product.name}</div>
            <div title={description} className="text-muted-foreground truncate text-xs">
              {truncateText(description, 60)}
            </div>
          </div>

          {/* Discount pill */}
          <div className="ml-2">
            <Badge
              variant={discount > 0 ? 'destructive' : 'secondary'}
              className="rounded-sm px-2 py-0.5 text-xs"
            >
              {discount > 0 ? `${discount}% off` : 'No discount'}
            </Badge>
          </div>
        </div>

        {/* Tags & suppliers */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex min-w-0 flex-wrap gap-1 overflow-hidden">
            {tags.length > 0 ? (
              tags.slice(0, 4).map(tag => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="truncate rounded-sm px-2 py-0.5 text-xs"
                >
                  {tag}
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground text-xs">No tags</span>
            )}

            {tags.length > 4 && (
              <span className="text-muted-foreground text-xs">+{tags.length - 4}</span>
            )}
          </div>

          <div className="text-muted-foreground ml-auto text-xs">
            Suppliers: <span className="text-sm font-medium">{suppliers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMetaCell;
