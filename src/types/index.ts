export type BaseApiResponse<T> = {
  message: string;
  data: T;
  pagination?: Pagination;
  status: string;
};

export type BaseEntity = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type ApprovalUser = {
  _id: string;
  fullName: string;
  email: string;
};

export type BaseApprovalEntity<TPayload> = BaseEntity & {
  entityType: 'Product';
  entityId: string | null;
  action: 'create' | 'update' | 'delete';
  payload: TPayload;
  status: 'pending' | 'approved' | 'rejected';
  reason: string | null;
  requestedBy: ApprovalUser;
  processedBy: ApprovalUser | null;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export type FilterProps = {
  page?: string;
  limit?: string;
  search?: string;
};
