import { Supplier } from '@/features/supplier/types/supplier.types';
import { BaseApiResponse, BaseEntity } from '@/types';

export type Product = BaseEntity & {
  name: string;
  description: string;
  stock: number;
  minStock: number;
  category: string;
  price: number;
  discount: number;
  files: string[];
  status: 'active' | 'inactive' | 'draft';
  tags: string[];

  createdBy: string;
  updatedBy: string;

  suppliers: Supplier[];

  sku: string;
};

export type ProductsResponse = BaseApiResponse<Product[]>;
export type ProductResponse = BaseApiResponse<Product>;
