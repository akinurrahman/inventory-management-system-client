import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import { getErrorMessage } from '@/lib/error';
import { getPrefixByRole } from '@/lib/role-utils';
import { useConfirmation } from '@/systems/confirmation/hooks/use-confirmation';

import { Product } from '../types/product.types';
import { useDeleteProduct } from './use-products';

export const useProductActions = () => {
  const router = useRouter();
  const prefix = getPrefixByRole();
  const deleteProduct = useDeleteProduct();
  const { confirm } = useConfirmation<Product>();

  const handleDelete = async (product: Product) => {
    confirm({
      title: 'Delete Product',
      description: product =>
        `Are you sure you want to delete the product "${product.name}"? This action cannot be undone.`,
      variant: 'delete',
      item: product,
      onConfirm: async product => {
        try {
          await deleteProduct.mutateAsync(product._id);
          toast.success('Product deleted successfully');
        } catch (error) {
          toast.error(getErrorMessage(error));
        }
      },
    });
  };

  const handleView = (product: Product) => {
    router.push(`${prefix}/products/${product._id}`);
  };

  const handleEdit = (product: Product) => {
    router.push(`${prefix}/products/${product._id}/edit`);
  };

  return { onDelete: handleDelete, onView: handleView, onEdit: handleEdit };
};
