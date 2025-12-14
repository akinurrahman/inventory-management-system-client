export const APP_NAME = 'IMS';

export const DEFAULT_ROUTES_BY_ROLE = {
  admin: '/admin/dashboard',
} as const;

export const authenticationRoute = ['/login', '/forgot-password'];

export const PREFIX_BY_ROLE = {
  admin: '/admin',
};
