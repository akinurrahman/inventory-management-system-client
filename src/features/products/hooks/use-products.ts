import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { apiCall } from '@/lib/api/api-call';
import { buildQuery } from '@/lib/utils';
import { FilterProps } from '@/types';

import { ProductResponse, ProductsResponse } from '../types/product.types';

export const useGetAllProducts = (props: FilterProps) => {
  const query = buildQuery(props);
  return useQuery<ProductsResponse>({
    queryKey: ['products', query],
    queryFn: () => apiCall(`/products?${query}`),
  });
};

export const useGetProductById = (productId: string) => {
  return useQuery<ProductResponse>({
    queryKey: ['products', productId],
    queryFn: () => apiCall(`/products/${productId}`),
  });
};

export const useCreateProduct = () => {};

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
