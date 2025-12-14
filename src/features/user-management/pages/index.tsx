'use client';

import React from 'react';

import { Card, CardContent, CardHeader } from '@ui/card';
import { UserCircle2 } from 'lucide-react';

import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import PageHeader from '@/components/shared/page-header';
import { User } from '@/features/auth/login/types/auth.types';
import { useModalState } from '@/hooks/use-modal-state';

import UserModal from '../components/user-modal';
import UsersTable from '../components/user-table';
import UsersToolbar from '../components/users-toolbar';
import { useUserQuery } from '../hooks/use-user-query';

const UserManagementPage = () => {
  const { users, isPending, pagination } = useUserQuery();
  const userModal = useModalState<User>();
  return (
    <Card className="layout">
      <BreadcrumpSetter items={[{ title: 'User Management', url: '#' }]} />
      <CardHeader>
        <PageHeader
          title="User Management"
          description="Manage application users and their permissions."
          icon={<UserCircle2 />}
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <UsersToolbar openModal={userModal.openModal} />
        <UsersTable users={users} isPending={isPending} pagination={pagination} />
      </CardContent>

      <UserModal
        open={userModal.open}
        closeModal={userModal.closeModal}
        initialData={userModal.item}
        mode={userModal.hasItem ? 'edit' : 'add'}
      />
    </Card>
  );
};

export default UserManagementPage;
