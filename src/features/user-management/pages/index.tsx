'use client';

import React from 'react';

import { Card, CardContent, CardHeader } from '@ui/card';
import { UserCircle2 } from 'lucide-react';

import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import PageHeader from '@/components/shared/page-header';

import UsersTable from '../components/user-table';
import { useUserQuery } from '../hooks/use-user-query';

const UserManagementPage = () => {
  const { users, isPending, pagination } = useUserQuery();
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
      <CardContent>
        <UsersTable users={users} isPending={isPending} pagination={pagination} />
      </CardContent>
    </Card>
  );
};

export default UserManagementPage;
