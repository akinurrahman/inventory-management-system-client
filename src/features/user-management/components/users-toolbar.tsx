'use client';

import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@ui/select';
import { useQueryState } from 'nuqs';

import { SearchInput } from '@/components/shared';
import { USER_ROLE } from '@/features/auth/login/types/auth.types';

const UsersToolbar = () => {
  const [role, setRole] = useQueryState('role');

  return (
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
  );
};

export default UsersToolbar;
