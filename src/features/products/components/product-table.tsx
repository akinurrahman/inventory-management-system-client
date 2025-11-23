import React from 'react';

import { DataTable } from '@/components/table';
import { useAuthStore } from '@/stores/auth.store';
import { Pagination } from '@/types';

import { useProductActions } from '../hooks/use-product-actions';
import { Product } from '../types/product.types';
import { getProductColumns } from './product-columns';

interface Props {
  products: Product[];
  pagination?: Pagination;
  isPending: boolean;
}

const ProductTable = ({ products, pagination, isPending }: Props) => {
  const user = useAuthStore(state => state.user);
  const { onDelete, onView } = useProductActions();
  const canDelete = user?.role === 'admin';
  const columns = getProductColumns({ onDelete: canDelete ? onDelete : undefined, onView });

  return (
    <DataTable data={products} columns={columns} pagination={pagination} isLoading={isPending} />
  );
};

export default ProductTable;
