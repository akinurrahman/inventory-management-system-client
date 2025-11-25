import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { apiCall } from '@/lib/api/api-call';
import { getErrorMessage } from '@/lib/error';
import { buildQuery } from '@/lib/utils';
import { FilterProps } from '@/types';

import { ProductResponse, ProductsResponse } from '../types/product.types';
import { ProductInput } from '../validators/product.schema';

export const useGetAllProducts = (props: FilterProps) => {
  const query = buildQuery(props);
  return useQuery<ProductsResponse>({
    queryKey: ['products', query],
    queryFn: () => apiCall(`/products?${query}`),
  });
};

export const useGetProductById = (productId: string | undefined) => {
  return useQuery<ProductResponse>({
    queryKey: ['products', productId],
    queryFn: () => apiCall(`/products/${productId}`),
    enabled: !!productId,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, ProductInput>({
    mutationFn: data => {
      const payload = {
        ...data,
        files: data.files.map(f => f.url),
      };
      return apiCall('/products', payload, 'POST');
    },
    onSuccess: () => {
      toast.success('Product created successfully');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: error => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useUpdateProduct = () => {};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<void, unknown, string>({
    mutationFn: productId => apiCall(`/products/${productId}`, undefined, 'DELETE'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
