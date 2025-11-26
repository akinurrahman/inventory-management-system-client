import { BaseApiResponse, BaseApprovalEntity } from '@/types';

import { Product } from './product.types';

export type ProductChangesRequest = BaseApprovalEntity<Partial<Product>>;

export type ProductChagesRequestsResponse = BaseApiResponse<ProductChangesRequest[]>;
