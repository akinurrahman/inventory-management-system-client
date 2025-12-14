import type { BaseEntity } from '@/types';

export enum USER_ROLE {
  ADMIN = 'admin',
  OPERATOR = 'operator',
}

export type User = BaseEntity & {
  fullName: string;
  email: string;
  role: USER_ROLE;
  isActive: boolean;
  lastLogin: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: User;
  };
};
