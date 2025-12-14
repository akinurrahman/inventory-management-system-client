import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import { useDeleteConfirmation } from '@/hooks/use-delete-confirmation';
import { getErrorMessage } from '@/lib/error';
import { getPrefixByRole } from '@/lib/role-utils';

import { Product } from '../types/product.types';
import { useDeleteProduct } from './use-products';

export const useProductActions = () => {
  const router = useRouter();
  const prefix = getPrefixByRole();
  const deleteProduct = useDeleteProduct();
  const { confirmDelete } = useDeleteConfirmation<Product>({
    onDelete: async product => {
      try {
        await deleteProduct.mutateAsync(product._id);
        toast.success('Product deleted successfully');
      } catch (error) {
        toast.error(getErrorMessage(error));
      }
    },
    title: 'Delete Product',
    description: product =>
      `Are you sure you want to delete the product "${product.name}"? This action cannot be undone.`,
  });

  const handleView = (product: Product) => {
    router.push(`${prefix}/products/${product._id}`);
  };

  const handleEdit = (product: Product) => {
    router.push(`${prefix}/products/${product._id}/edit`);
  };

  return { onDelete: confirmDelete, onView: handleView, onEdit: handleEdit };
};
