'use client';

import React from 'react';

import { Button } from '@ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@ui/select';
import { PlusIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';

import { SearchInput } from '@/components/shared';
import { USER_ROLE } from '@/features/auth/login/types/auth.types';
import { User } from '@/features/auth/login/types/auth.types';

const UsersToolbar = ({ openModal }: { openModal: (user?: User) => void }) => {
  const [role, setRole] = useQueryState('role');

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <SearchInput className="max-w-xs" />

        <Select
          value={role ?? 'all'}
          onValueChange={value => {
            if (value === 'all') {
              setRole(null); // removes from query params
            } else {
              setRole(value);
            }
          }}
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Role</SelectLabel>

              <SelectItem value="all">All</SelectItem>

              {Object.values(USER_ROLE).map(role => (
                <SelectItem key={role} value={role}>
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={() => openModal()}>
        <PlusIcon /> Add User
      </Button>
    </div>
  );
};

export default UsersToolbar;
