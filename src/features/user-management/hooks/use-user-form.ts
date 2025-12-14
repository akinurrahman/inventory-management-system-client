import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { USER_ROLE, User } from '@/features/auth/login/types/auth.types';

import { UserFormData, userSchema } from '../validators/user.schema';
import { useCreateUser, useUpdateUser } from './use-users';

const defaultValues: UserFormData = {
  fullName: '',
  email: '',
  role: USER_ROLE.OPERATOR,
};

const mapUserToForm = (user: User): UserFormData => {
  return {
    fullName: user.fullName,
    email: user.email,
    role: user.role,
  };
};

export const useUserForm = (initialData?: User, onSuccess?: () => void) => {
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();

  const form = useForm<UserFormData>({
    defaultValues,
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    form.reset(initialData?._id ? mapUserToForm(initialData) : defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData?._id]);

  const onSubmit = (data: UserFormData) => {
    if (initialData?._id) {
      updateUser.mutate(
        { data, id: initialData._id },
        {
          onSuccess: () => {
            onSuccess?.();
          },
        }
      );
    } else {
      createUser.mutate(data, {
        onSuccess: () => {
          onSuccess?.();
        },
      });
    }
  };

  return { form, onSubmit, isPending: createUser.isPending || updateUser.isPending };
};
