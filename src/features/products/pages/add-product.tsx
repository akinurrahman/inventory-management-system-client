'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Card, CardContent, CardHeader } from '@ui/card';
import { BoxIcon } from 'lucide-react';

import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import PageHeader from '@/components/shared/page-header';
import { useGetSuppliers } from '@/features/supplier/hooks/use-supplier';
import { getPrefixByRole } from '@/lib/role-utils';

import ProductForm from '../components/product-form';
import { STATUS_OPTIONS, categoryOptions } from '../constants/product.constants';
import { usePriceDetails } from '../hooks/use-price-details';
import { useProductForm } from '../hooks/use-product-form';
import { useCreateProduct } from '../hooks/use-products';
import { ProductInput } from '../validators/product.schema';

const AddProductPage = () => {
  const router = useRouter();

  const prefix = getPrefixByRole();
  const { form } = useProductForm();
  const priceDetails = usePriceDetails(form);
  const { mutate, isPending } = useCreateProduct();
  const { data } = useGetSuppliers({});

  const handleSubmit = (values: ProductInput) => {
    mutate(values, {
      onSuccess: () => {
        router.push(`${prefix}/products`);
      },
    });
  };

  return (
    <Card className="layout">
      <BreadcrumpSetter
        items={[
          { title: 'Products', url: `${prefix}/products` },
          { title: 'Add Product', url: '#' },
        ]}
      />
      <CardHeader>
        <PageHeader
          title="Add New Product"
          description="Fill in the details below to add a new product to the inventory."
          icon={<BoxIcon />}
        />
      </CardHeader>
      <CardContent>
        <ProductForm
          form={form}
          onSubmit={handleSubmit}
          isSubmitting={isPending}
          categoryOptions={categoryOptions}
          statusOptions={STATUS_OPTIONS}
          priceDetails={priceDetails}
          suppliers={data?.data || []}
        />
      </CardContent>
    </Card>
  );
};

export default AddProductPage;
