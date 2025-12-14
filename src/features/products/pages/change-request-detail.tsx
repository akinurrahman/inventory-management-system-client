'use client';

import React from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Button } from '@ui/button';
import { ChevronLeft } from 'lucide-react';

import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatDate } from '@/lib/format';
import { getPrefixByRole } from '@/lib/role-utils';
import { getParam } from '@/lib/utils';

import ProductDetailsView from '../components/changes-requests/product-details-view';
import RequestDetailSkeleton from '../components/changes-requests/request-detail-skeleton';
import RequestInfoCard from '../components/changes-requests/request-info-card';
import RequestNotFound from '../components/changes-requests/request-not-found';
import { useGetProductChangesRequestById } from '../hooks/use-changes-request';
import { Product } from '../types/product.types';

const ProductChangeRequestDetailPage = () => {
  const prefix = getPrefixByRole();
  const params = useParams();
  const requestId = getParam(params.requestId) || '';

  const { data, isPending } = useGetProductChangesRequestById(requestId);
  const request = data?.data;

  if (isPending) {
    return <RequestDetailSkeleton />;
  }

  if (!request) {
    return <RequestNotFound prefix={prefix} />;
  }

  const product = request.payload as Partial<Product>;

  return (
    <>
      <BreadcrumpSetter
        items={[
          { title: 'Product Changes Requests', url: `${prefix}/products/changes-requests` },
          { title: 'Request Details', url: '#' },
        ]}
      />

      <Card className="layout">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon">
                  <Link href={`${prefix}/products/changes-requests`}>
                    <ChevronLeft />
                  </Link>
                </Button>
                <h1 className="text-2xl font-bold">
                  {request.action === 'create' && 'New Product Request'}
                  {request.action === 'update' && 'Update Product Request'}
                  {request.action === 'delete' && 'Delete Product Request'}
                </h1>
              </div>
              <p className="text-muted-foreground text-sm">
                Requested by {request.requestedBy.fullName} • {formatDate(request.createdAt)}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <RequestInfoCard request={request} />
          <ProductDetailsView product={product} action={request.action} />
        </CardContent>
      </Card>
    </>
  );
};

export default ProductChangeRequestDetailPage;
