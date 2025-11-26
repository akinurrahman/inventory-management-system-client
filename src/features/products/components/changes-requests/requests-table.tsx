import React from 'react';

import { DataTable } from '@/components/table';
import { Pagination } from '@/types';

import { ProductChangesRequest } from '../../types/changes-requests.types';
import { getProductChangesRequestColumns } from './request-columns';

interface Props {
  changesRequests: ProductChangesRequest[];
  isLoading: boolean;
  pagination: Pagination | undefined;
}

const ProductChangesRequestTable = ({ changesRequests, isLoading, pagination }: Props) => {
  const columns = getProductChangesRequestColumns();
  return (
    <DataTable
      columns={columns}
      data={changesRequests}
      pagination={pagination}
      isLoading={isLoading}
    />
  );
};

export default ProductChangesRequestTable;
