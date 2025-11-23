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

  const debouncedUrlUpdate = useMemo(() => {
    return (value: string) => {
      debouncedSearch((finalValue: string) => {
        const params = new URLSearchParams(window.location.search);

        if (finalValue.trim()) {
          params.set(searchParam, finalValue);
        } else {
          params.delete(searchParam);
        }

        router.replace(`?${params.toString()}`, { scroll: false });
      }, value);
    };
  }, [searchParam, router]);

  // Sync local state from URL param
  useEffect(() => {
    const queryValue = searchParams.get(searchParam) || '';
    setSearch(queryValue);
  }, [searchParams, searchParam]);

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
