import React from 'react';

import { Card, CardContent, CardHeader } from '@ui/card';
import { Skeleton } from '@ui/skeleton';

const RequestDetailSkeleton: React.FC = () => {
  return (
    <div className="layout space-y-6">
      <Skeleton className="h-8 w-64" />
      <Card>
        <CardHeader>
          <Skeleton className="h-10 w-96" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-96 w-full" />
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestDetailSkeleton;
