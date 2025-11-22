import { useSearchParams } from 'next/navigation';

import { useGetAllProducts } from './use-products';

export const useProductListQuery = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '10';
  const search = searchParams.get('search') || '';

  const query = useGetAllProducts({ page, limit, search });

  return { query };
};
