'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Card, CardContent, CardHeader } from '@ui/card';
import { BoxIcon } from 'lucide-react';

import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import PageHeader from '@/components/shared/page-header';
import { getPrefixByRole } from '@/constants';

import ProductTable from '../components/product-table/product-table';
import ProductToolbar from '../components/product-table/products-toolbar';
import { useProductListQuery } from '../hooks/use-product-list-query';

const ProductsPage = () => {
  const router = useRouter();

  const prefix = getPrefixByRole();

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
        <ProductToolbar onAdd={() => router.push(`${prefix}/products/add`)} />
        <ProductTable products={products} pagination={pagination} isPending={isPending} />
      </CardContent>
    </Card>
  );
};

export default ProductsPage;
