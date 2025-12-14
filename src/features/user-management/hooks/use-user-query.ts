import { useSearchParams } from 'next/navigation';

import { useGetUsers } from './use-users';

export const useUserQuery = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';

  const { data, isPending } = useGetUsers({ search, page, limit: '10' });

  return {
    users: data?.data || [],
    isPending,
    pagination: data?.pagination,
  };
};
