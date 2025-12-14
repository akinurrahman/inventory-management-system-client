import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { apiCall } from '@/lib/api/api-call';
import { getErrorMessage } from '@/lib/error';
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

export const useProductChangesAction = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, { requestId: string; data: unknown }>({
    mutationFn: ({ requestId, data }) =>
      apiCall(`/approval-requests/${requestId}/action`, data, 'POST'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-changes-requests'] });
      queryClient.invalidateQueries({ queryKey: ['product-changes-request'] });
    },
    onError: error => {
      toast.error(getErrorMessage(error));
    },
  });
};
