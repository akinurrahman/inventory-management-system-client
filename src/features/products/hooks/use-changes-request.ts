import { useQuery } from '@tanstack/react-query';

import { apiCall } from '@/lib/api/api-call';
import { buildQuery } from '@/lib/utils';
import { FilterProps } from '@/types';

import { ProductChagesRequestsResponse } from '../types/changes-requests.types';

export const useGetProductChangesRequests = (params: FilterProps) => {
  const query = buildQuery(params);
  return useQuery<ProductChagesRequestsResponse>({
    queryKey: ['product-changes-requests', query],
    queryFn: () => apiCall(`/products/requests?${query}`),
  });
};

export const useProductChangesAction = () => {};
