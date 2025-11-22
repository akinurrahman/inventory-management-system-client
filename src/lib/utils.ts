import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buildQuery = (
  params: Record<string, string | number | boolean | null | undefined>
) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.append(key, String(value));
    }
  });

  return searchParams.toString();
};

export function getParam(param: string | string[] | undefined) {
  return Array.isArray(param) ? param[0] : param;
}
