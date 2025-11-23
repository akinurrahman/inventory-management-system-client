'use client';

import React from 'react';

import { Card, CardContent, CardHeader } from '@ui/card';
import { BoxIcon } from 'lucide-react';

import { SearchInput } from '@/components/shared';
import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import PageHeader from '@/components/shared/page-header';

import ProductTable from '../components/product-table';
import { useProductListQuery } from '../hooks/use-product-list-query';

const ProductsPage = () => {
  const { query } = useProductListQuery();
  const products = query.data?.data ?? [];
  const pagination = query.data?.pagination;
  const isPending = query.isPending;

  return (
    <Card className="layout">
      <BreadcrumpSetter items={[{ title: 'Products', url: '#' }]} />
      <CardHeader>
        <PageHeader title="Products" description="Manage your products here" icon={<BoxIcon />} />
      </CardHeader>
      <CardContent>
        <SearchInput placeholder="Search products..." className="mb-4" />
        <ProductTable products={products} pagination={pagination} isPending={isPending} />
      </CardContent>
    </Card>
  );
};

export default ProductsPage;
