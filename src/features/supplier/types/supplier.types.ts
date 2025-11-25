import { BaseApiResponse } from '@/types';

export type Supplier = {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
};

export type SupplierResponse = BaseApiResponse<Supplier[]>;
