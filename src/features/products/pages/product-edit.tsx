'use client';

import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { Card, CardContent, CardHeader } from '@ui/card';
import { BoxIcon } from 'lucide-react';

import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import PageHeader from '@/components/shared/page-header';
import { getPrefixByRole } from '@/constants';
import { useGetSuppliers } from '@/features/supplier/hooks/use-supplier';
import { getParam } from '@/lib/utils';

import ProductForm from '../components/product-form';
import { STATUS_OPTIONS, categoryOptions } from '../constants/product.constants';
import { usePriceDetails } from '../hooks/use-price-details';
import { useProductForm } from '../hooks/use-product-form';
import { useGetProductById, useUpdateProduct } from '../hooks/use-products';
import { ProductInput } from '../validators/product.schema';

const EditProductPage = () => {
  const router = useRouter();
  const params = useParams();
  const productId = getParam(params.productId);

  const prefix = getPrefixByRole();

  const { data: product } = useGetProductById(productId);
  const { form } = useProductForm(product?.data);

  const priceDetails = usePriceDetails(form);
  const { mutate, isPending } = useUpdateProduct();
  const { data } = useGetSuppliers({});

  const handleSubmit = (values: ProductInput) => {
    mutate(
      { productId, data: values },
      {
        onSuccess: () => {
          router.push(`${prefix}/products`);
        },
      }
    );
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
          title="Edit Product"
          description="Fill in the details below to edit the product."
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
          submitButtonText="Edit Product"
        />
      </CardContent>
    </Card>
  );
};

export default EditProductPage;
