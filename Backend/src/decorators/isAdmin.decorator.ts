import { SetMetadata } from '@nestjs/common';

export const ADMIN_KEY = 'admin';
export const isAdmin = (admin: boolean) => SetMetadata(ADMIN_KEY, admin);
