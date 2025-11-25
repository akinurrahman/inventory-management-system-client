import { useQuery } from '@tanstack/react-query';

import { apiCall } from '@/lib/api/api-call';
import { buildQuery } from '@/lib/utils';
import { FilterProps } from '@/types';

import { SupplierResponse } from '../types/supplier.types';

export const useGetSuppliers = (props: FilterProps) => {
  const query = buildQuery(props);
  return useQuery<SupplierResponse>({
    queryKey: ['suppliers', query],
    queryFn: () => apiCall(`/suppliers?${query}`),
  });
};
