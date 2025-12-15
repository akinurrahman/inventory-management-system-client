import { User } from '@/features/auth/login/types/auth.types';
import { useDeleteConfirmation } from '@/hooks/use-delete-confirmation';

import { useDeleteUser } from './use-users';

export const useUserActions = () => {
  const deleteUser = useDeleteUser();

  const { confirmDelete } = useDeleteConfirmation<User>({
    onDelete: async user => {
      return deleteUser.mutateAsync(user._id);
    },
    title: 'Delete User',
    description: user =>
      `Are you sure you want to delete the user "${user.fullName}"? This action cannot be undone.`,
  });

  return { onDelete: confirmDelete };
};
