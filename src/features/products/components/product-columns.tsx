'use client';

import React from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@ui/badge';

import { formatCurrency } from '@/lib/format';
import { cn } from '@/lib/utils';

import { Product } from '../types/product.types';
import ProductActionMenu from './product-action-menu';
import ProductMetaCell from './product-meta-cell';

interface Props {
  onDelete?: (product: Product) => void;
  onView?: (product: Product) => void;
}

export const getProductColumns = ({ onDelete, onView }: Props): ColumnDef<Product>[] => {
  return [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => {
        const name = row.original.name;
        return <span className="font-medium">{name}</span>;
      },
    },

    {
      accessorKey: 'category',
      header: 'Category',
      cell: ({ row }) => {
        const category = row.original.category;

        return (
          <Badge variant="secondary" className="capitalize">
            {category}
          </Badge>
        );
      },
    },

    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row }) => {
        const price = row.original.price;
        return <span className="font-semibold">{formatCurrency(price)}</span>;
      },
    },

    {
      accessorKey: 'stock',
      header: 'Stock',
      cell: ({ row }) => {
        const stock = row.original.stock;
        const minStock = row.original.minStock ?? 0;

        const danger = stock <= minStock;

        return (
          <span className={cn('font-medium', danger ? 'text-red-600' : 'text-green-600')}>
            {stock}
          </span>
        );
      },
    },

    {
      accessorKey: 'meta',
      header: 'Info',
      cell: ({ row }) => {
        const product = row.original;

        return <ProductMetaCell product={product} />;
      },
    },

    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.original.status ?? 'active';

        const variant =
          status === 'active' ? 'default' : status === 'inactive' ? 'destructive' : 'secondary';

        return (
          <Badge variant={variant} className="capitalize">
            {status}
          </Badge>
        );
      },
    },

    {
      id: 'actions',
      header: '',
      cell: ({ row }) => {
        const item = row.original;
        return <ProductActionMenu onDelete={onDelete} onView={onView} product={item} />;
      },
    },
  ];
};
