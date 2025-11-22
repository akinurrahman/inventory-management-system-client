import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { debouncedSearch } from '@/lib/debounce';

interface UseDebouncedSearchOptions {
  searchParam?: string;
  onSearchChange?: (value: string) => void;
}

export const useDebouncedSearch = ({
  searchParam = 'search',
  onSearchChange,
}: UseDebouncedSearchOptions = {}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');

  // Stable string snapshot of the URL params
  const paramsString = searchParams.toString();

  const debouncedUrlUpdate = useMemo(() => {
    return (value: string) => {
      debouncedSearch((searchValue: string) => {
        const params = new URLSearchParams(paramsString);

        if (searchValue.trim()) {
          params.set(searchParam, searchValue);
        } else {
          params.delete(searchParam);
        }

        router.replace(`?${params.toString()}`, { scroll: false });
      }, value);
    };
  }, [paramsString, searchParam, router]);

  // Sync local state with URL (correct, stable)
  useEffect(() => {
    const params = new URLSearchParams(paramsString);
    const queryVal = params.get(searchParam) || '';

    if (queryVal !== search) {
      setSearch(queryVal);
    }
  }, [paramsString, searchParam, search]);

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearch(value);
      debouncedUrlUpdate(value);
      onSearchChange?.(value);
    },
    [debouncedUrlUpdate, onSearchChange]
  );

  return { search, handleSearchChange };
};
