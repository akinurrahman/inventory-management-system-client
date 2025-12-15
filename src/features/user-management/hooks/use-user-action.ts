import { User } from '@/features/auth/login/types/auth.types';
import { useConfirmation } from '@/systems/confirmation/hooks/use-confirmation';

import { useBlockUser, useDeleteUser, useUnblockUser } from './use-users';

export const useUserActions = () => {
  const deleteUser = useDeleteUser();
  const blockUser = useBlockUser();
  const unblockUser = useUnblockUser();

  const { confirm } = useConfirmation<User>();
  const { confirm: confirmBlock } = useConfirmation<User>();
  const { confirm: confirmUnblock } = useConfirmation<User>();

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

  const handleBlock = async (user: User) => {
    confirmBlock({
      title: 'Block User',
      variant: 'warning',
      item: user,
      description: user => `Are you sure you want to block the user "${user.fullName}"?`,
      onConfirm: async user => {
        return blockUser.mutateAsync(user._id);
      },
    });
  };

  const handleUnblock = async (user: User) => {
    confirmUnblock({
      title: 'Unblock User',
      variant: 'confirm',
      item: user,
      description: user => `Are you sure you want to unblock the user "${user.fullName}"?`,
      onConfirm: async user => {
        return unblockUser.mutateAsync(user._id);
      },
    });
  };

  return { onDelete: handleDelete, onBlock: handleBlock, onUnblock: handleUnblock };
};
