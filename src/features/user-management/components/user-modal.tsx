import React from 'react';

import { FormInput } from '@form-input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@ui/dialog';
import { FormProvider } from 'react-hook-form';

import ActionButtons from '@/components/shared/action-buttons';
import { USER_ROLE, User } from '@/features/auth/login/types/auth.types';

import { useUserForm } from '../hooks/use-user-form';

interface ModalProps {
  open: boolean;
  closeModal: () => void;
  initialData?: User | null;
  mode: 'add' | 'edit';
}

const UserModal = ({ open, closeModal, initialData, mode }: ModalProps) => {
  const { form, onSubmit, isPending } = useUserForm(initialData ?? undefined, closeModal);
  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{mode === 'edit' ? 'Edit User' : 'Add User'}</DialogTitle>
          <DialogDescription>
            {mode === 'edit' ? 'Modify the user details below.' : 'Enter details for the new user.'}
          </DialogDescription>
        </DialogHeader>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormInput
              fieldType="input"
              name="fullName"
              label="Full Name"
              placeholder="Enter full name"
              required
            />
            <FormInput
              fieldType="input"
              name="email"
              label="Email"
              placeholder="Enter email address"
              required
            />
            <FormInput
              fieldType="select"
              name="role"
              label="Role"
              description="Select the role assigned to the user."
              options={Object.values(USER_ROLE).map(role => ({
                label: role.charAt(0).toUpperCase() + role.slice(1),
                value: role,
              }))}
              required
              disabled
            />
            <ActionButtons isPending={isPending} />
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
