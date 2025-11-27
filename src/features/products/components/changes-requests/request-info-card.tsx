import React from 'react';

import { Badge } from '@ui/badge';

import { ProductChangesRequest } from '../../types/changes-requests.types';

interface RequestInfoCardProps {
  request: ProductChangesRequest;
}

const RequestInfoCard: React.FC<RequestInfoCardProps> = ({ request }) => {
  return (
    <>
      <div className="bg-muted/50 space-y-2 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm font-medium">Request Status</span>
          <Badge
            variant={
              request.status === 'approved'
                ? 'success'
                : request.status === 'rejected'
                  ? 'destructive'
                  : 'warning'
            }
            className="capitalize"
          >
            {request.status}
          </Badge>
        </div>
        <div className="flex items-center justify-between border-t pt-2">
          <span className="text-muted-foreground text-sm font-medium">Action Type</span>
          <Badge
            variant={
              request.action === 'create'
                ? 'success'
                : request.action === 'delete'
                  ? 'destructive'
                  : 'warning'
            }
            className="capitalize"
          >
            {request.action}
          </Badge>
        </div>
        {request.processedBy && (
          <div className="flex items-center justify-between border-t pt-2">
            <span className="text-muted-foreground text-sm font-medium">Processed By</span>
            <span className="font-medium">{request.processedBy.fullName}</span>
          </div>
        )}
      </div>

      {request.reason && (
        <div className="bg-muted/30 rounded-lg p-4">
          <h4 className="mb-2 text-sm font-semibold">Reason</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{request.reason}</p>
        </div>
      )}
    </>
  );
};

export default RequestInfoCard;
