import { useSearchParams } from 'next/navigation';

import { useGetUsers } from './use-users';

export const useUserQuery = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';
  const isActive = searchParams.get('isActive') || undefined;

  const { data, isPending } = useGetUsers({ search, page, limit: '10', isActive });

  return {
    users: data?.data || [],
    isPending,
    pagination: data?.pagination,
  };
};
