'use client';

import React from 'react';

import { Card, CardContent, CardHeader } from '@ui/card';
import { Signature } from 'lucide-react';

import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import PageHeader from '@/components/shared/page-header';

import ProductChangesRequestTable from '../components/changes-requests/requests-table';
import { useChangesRequestQuery } from '../hooks/use-changes-requests-query';

const ProductChangesRequestPage = () => {
  const { changesRequests, isLoading, pagination } = useChangesRequestQuery();
  return (
    <Card className="layout">
      <BreadcrumpSetter items={[{ title: 'Product Changes Requests', url: '#' }]} />
      <CardHeader>
        <PageHeader
          title="Product Changes Requests"
          description="Manage product changes requests here"
          icon={<Signature />}
        />
      </CardHeader>
      <CardContent>
        <ProductChangesRequestTable
          changesRequests={changesRequests}
          isLoading={isLoading}
          pagination={pagination}
        />
      </CardContent>
    </Card>
  );
};

export default ProductChangesRequestPage;
