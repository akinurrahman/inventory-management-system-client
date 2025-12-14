import { PREFIX_BY_ROLE } from '@/constants';
import { useAuthStore } from '@/stores/auth.store';

export const getPrefixByRole = () => {
  const user = useAuthStore.getState().user;
  const role = user?.role;

  if (role && role in PREFIX_BY_ROLE) return PREFIX_BY_ROLE[role as keyof typeof PREFIX_BY_ROLE];
  return '';
};
