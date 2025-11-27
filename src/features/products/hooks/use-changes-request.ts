import { useQuery } from '@tanstack/react-query';

import { apiCall } from '@/lib/api/api-call';
import { buildQuery } from '@/lib/utils';
import { FilterProps } from '@/types';

import {
  ProductChagesRequestResponse,
  ProductChagesRequestsResponse,
} from '../types/changes-requests.types';

export const useGetProductChangesRequests = (params: FilterProps) => {
  const query = buildQuery(params);
  return useQuery<ProductChagesRequestsResponse>({
    queryKey: ['product-changes-requests', query],
    queryFn: () => apiCall(`/products/requests?${query}`),
  });
};

export const useGetProductChangesRequestById = (id: string) => {
  return useQuery<ProductChagesRequestResponse>({
    queryKey: ['product-changes-request', id],
    queryFn: () => apiCall(`/products/requests/${id}`),
    enabled: !!id,
  });
};

export const useProductChangesAction = () => {};
