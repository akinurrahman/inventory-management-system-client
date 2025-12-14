import Link from 'next/link';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import { format } from 'date-fns';

import { getPrefixByRole } from '@/lib/role-utils';

import { ProductChangesRequest } from '../../types/changes-requests.types';

export const getProductChangesRequestColumns = (): ColumnDef<ProductChangesRequest>[] => {
  const prefix = getPrefixByRole();

  return [
    {
      accessorKey: 'requestedBy.fullName',
      header: 'Requested By',
      cell: ({ row }) => row.original.requestedBy.fullName,
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => {
        const action = row.original.action;
        const variant =
          action === 'create' ? 'success' : action === 'delete' ? 'destructive' : 'warning';
        return (
          <Badge variant={variant} className="capitalize">
            {action}
          </Badge>
        );
      },
    },
    {
      header: 'Status',
      cell: ({ row }) => {
        const status = row.original.status;
        const variant =
          status === 'approved' ? 'success' : status === 'rejected' ? 'destructive' : 'warning';
        return (
          <Badge className="capitalize" variant={variant}>
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Requested On',
      cell: ({ row }) => format(new Date(row.original.createdAt), 'dd MMM yyyy'),
    },
    {
      accessorKey: 'reason',
      header: 'Reason',
      cell: ({ row }) => (
        <div title={row.original?.reason || '—'}>{row.original.reason || '—'}</div>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const request = row.original;
        return (
          <Link href={`${prefix}/products/changes-requests/${request._id}`}>
            <Button variant="outline" size="sm">
              View Changes
            </Button>
          </Link>
        );
      },
    },
  ];
};
