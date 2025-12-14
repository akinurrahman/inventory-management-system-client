import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { apiCall } from '@/lib/api/api-call';
import { getErrorMessage } from '@/lib/error';
import { buildQuery } from '@/lib/utils';
import { FilterProps } from '@/types';

import { UserResponse } from '../types/user.types';

export const useGetUsers = (props: FilterProps & { role?: string }) => {
  const query = buildQuery(props);

  return useQuery<UserResponse>({
    queryKey: ['users', query],
    queryFn: () => apiCall(`/users?${query}`),
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, string>({
    mutationFn: (userId: string) => apiCall(`/users/${userId}`, undefined, 'DELETE'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('User deleted successfully');
    },
    onError: error => {
      toast.error(getErrorMessage(error));
    },
  });
};
