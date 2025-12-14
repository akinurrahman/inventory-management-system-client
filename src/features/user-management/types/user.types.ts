import { User } from '@/features/auth/login/types/auth.types';
import { BaseApiResponse } from '@/types';

export type UserResponse = BaseApiResponse<User[]>;
