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
import { User } from '@/features/auth/login/types/auth.types';

const UsersToolbar = ({ openModal }: { openModal: (user?: User) => void }) => {
  const [isActive, setIsActive] = useQueryState('isActive');

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <SearchInput className="max-w-xs" />

        <Select
          value={isActive ?? 'all'}
          onValueChange={value => {
            if (value === 'all') {
              setIsActive(null); // removes from query params
            } else {
              setIsActive(value);
            }
          }}
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel></SelectLabel>

              <SelectItem value="all">All</SelectItem>
              <SelectItem value={'true'}>Active</SelectItem>
              <SelectItem value={'false'}>Inactive</SelectItem>
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
