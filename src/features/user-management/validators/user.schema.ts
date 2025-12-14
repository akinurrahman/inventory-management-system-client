import z from 'zod';

import { NON_ADMIN_ROLES } from '@/features/auth/login/types/auth.types';

export const userSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters long'),
  email: z.email('Invalid email address'),
  role: z.enum(Object.values(NON_ADMIN_ROLES), 'Invalid user role'),
});

export type UserFormData = z.infer<typeof userSchema>;
