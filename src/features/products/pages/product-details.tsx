'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import { getPrefixByRole } from '@/constants';
import { getParam } from '@/lib/utils';

import ProductDetailsSkeleton from '../components/product-detail-skeleton';
import ProductDetails from '../components/product-details';
import ProductNotFound from '../components/product-not-found';
import { useGetProductById } from '../hooks/use-products';

const ProductDetailPage = () => {
  const prefix = getPrefixByRole();
  const params = useParams();
  const productId = getParam(params.productId);

  const { data, isPending } = useGetProductById(productId);
  const product = data?.data;

  if (isPending) return <ProductDetailsSkeleton />;
  if (!product) return <ProductNotFound prefix={prefix} />;
  return (
    <>
      <BreadcrumpSetter
        items={[
          { title: 'Products', url: `/${prefix}/products` },
          { title: product.name ?? 'Product  Details', url: `#` },
        ]}
      />
      <ProductDetails product={product} prefix={prefix} />
    </>
  );
};

export default ProductDetailPage;
