import { BaseApiResponse, BaseEntity } from '@/types';

import { ProductInput } from '../validators/product.schema';

export type Product = BaseEntity & ProductInput;

export type ProductsResponse = BaseApiResponse<Product[]>;
export type ProductResponse = BaseApiResponse<Product>;
