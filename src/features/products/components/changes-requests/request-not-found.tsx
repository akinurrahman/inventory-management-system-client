import React from 'react';

import Link from 'next/link';

import { Card, CardContent } from '@ui/card';

interface RequestNotFoundProps {
  prefix: string;
}

const RequestNotFound: React.FC<RequestNotFoundProps> = ({ prefix }) => {
  return (
    <Card className="layout">
      <CardContent className="flex min-h-[400px] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Request Not Found</h2>
        <p className="text-muted-foreground mt-2">
          The change request you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href={`${prefix}/products/changes-requests`}
          className="text-primary mt-4 text-sm hover:underline"
        >
          Back to Requests
        </Link>
      </CardContent>
    </Card>
  );
};

export default RequestNotFound;
