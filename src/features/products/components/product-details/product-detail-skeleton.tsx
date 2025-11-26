'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ProductDetailsSkeleton = () => {
  return (
    <div className="mx-auto max-w-7xl p-4 md:p-8">
      {/* Top Button Section */}
      <div className="mb-6 flex items-center justify-between">
        <div />
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>

      <main className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
        {/* Image Skeleton */}
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[450px] w-full rounded-xl" />

          <div className="flex gap-2">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-3 rounded-full" />
          </div>
        </div>

        {/* Details Skeleton */}
        <div className="flex flex-col space-y-6">
          {/* Title */}
          <Skeleton className="h-8 w-3/5" />

          {/* Price */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-16" />
          </div>

          {/* Stock */}
          <div className="flex items-center gap-6">
            <div className="space-y-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-16" />
            </div>
            <div className="space-y-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-5 w-16" />
            </div>
          </div>

          {/* SKU and Status */}
          <div className="space-y-4 border-t pt-4">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-28" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          </div>

          {/* Buttons */}
          <div className="my-6 flex gap-2">
            <Skeleton className="h-12 flex-1" />
            <Skeleton className="h-12 flex-1" />
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            <Skeleton className="h-6 w-28 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/5" />
          </div>
        </div>
      </main>

      {/* Suppliers Section */}
      <div className="mt-12 border-t pt-8">
        <Skeleton className="mb-6 h-8 w-32" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="p-6">
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-52" />
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-52" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
