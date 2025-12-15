import { User } from '@/features/auth/login/types/auth.types';
import { useConfirmation } from '@/systems/confirmation/hooks/use-confirmation';

import { useDeleteUser } from './use-users';

export const useUserActions = () => {
  const deleteUser = useDeleteUser();

  const { confirm } = useConfirmation<User>();

  const handleDelete = async (user: User) => {
    confirm({
      title: 'Delete User',
      variant: 'delete',
      item: user,
      description: user =>
        `Are you sure you want to delete the user "${user.fullName}"? This action cannot be undone.`,
      onConfirm: async user => {
        return deleteUser.mutateAsync(user._id);
      },
    });
  };

  return { onDelete: handleDelete };
};
