import { useSearchParams } from 'next/navigation';

import { useGetProductChangesRequests } from './use-changes-request';

export const useChangesRequestQuery = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || undefined;
  const limit = searchParams.get('limit') || undefined;
  const search = searchParams.get('search') || undefined;

  const { data, isPending } = useGetProductChangesRequests({
    page,
    limit,
    search,
  });

  return { changesRequests: data?.data || [], pagination: data?.pagination, isLoading: isPending };
};
