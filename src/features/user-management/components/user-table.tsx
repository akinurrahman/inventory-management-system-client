import React from 'react';

import { DataTable } from '@/components/table';
import { User } from '@/features/auth/login/types/auth.types';
import { Pagination } from '@/types';

import { useProductActions } from '../hooks/use-product-action';
import { getUserColumns } from './user-columns';

interface UserProps {
  users: User[];
  isPending: boolean;
  pagination: Pagination | undefined;
}

const UsersTable = ({ users, isPending, pagination }: UserProps) => {
  const { onDelete, onEdit } = useProductActions();
  const columns = getUserColumns({ onDelete, onEdit });
  return <DataTable data={users} columns={columns} isLoading={isPending} pagination={pagination} />;
};

export default UsersTable;
