import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import { Lock, MoreHorizontal, Pencil, Trash2, Unlock } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { User } from '@/features/auth/login/types/auth.types';
import { formatDate } from '@/lib/format';

interface TableProps {
  onDelete: (user: User) => void;
  onEdit: (user: User) => void;
  onBlock: (user: User) => void;
  onUnblock: (user: User) => void;
}

export const getUserColumns = ({
  onDelete,
  onEdit,
  onBlock,
  onUnblock,
}: TableProps): ColumnDef<User>[] => {
  return [
    {
      header: '#',
      cell: info => info.row.index + 1,
    },
    {
      accessorKey: 'fullName',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: ({ row }) => formatDate(row.original.createdAt),
    },
    {
      header: 'Status',
      accessorKey: 'isActive',
      cell: ({ row }) => (
        <Badge variant={row.original.isActive ? 'success' : 'destructive'}>
          {row.original.isActive ? 'Active' : 'Inactive'}
        </Badge>
      ),
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => (
        <Badge variant="outline" className="capitalize">
          {row.original.role}
        </Badge>
      ),
    },
    {
      header: 'Actions',
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-40">
              {onEdit && (
                <DropdownMenuItem onClick={() => onEdit?.(row.original)} className="cursor-pointer">
                  <Pencil className="h-4 w-4" /> Edit
                </DropdownMenuItem>
              )}

              {row.original.isActive && (
                <DropdownMenuItem
                  onClick={() => onBlock?.(row.original)}
                  className="cursor-pointer"
                >
                  <Lock className="h-4 w-4" /> Block
                </DropdownMenuItem>
              )}
              {!row.original.isActive && (
                <DropdownMenuItem
                  onClick={() => onUnblock?.(row.original)}
                  className="cursor-pointer"
                >
                  <Unlock className="h-4 w-4" /> Unblock
                </DropdownMenuItem>
              )}

              <DropdownMenuSeparator />

              {onDelete && (
                <DropdownMenuItem
                  onClick={() => onDelete?.(row.original)}
                  className="cursor-pointer text-red-600 focus:text-red-600"
                >
                  <Trash2 className="h-4 w-4 text-red-600 focus:text-red-600" /> Delete Delete
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
};
