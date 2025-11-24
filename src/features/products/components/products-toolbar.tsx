import React from 'react';

import { Button } from '@ui/button';
import { PlusCircle } from 'lucide-react';

import { SearchInput } from '@/components/shared';

interface Props {
  onAdd: () => void;
}

const ProductToolbar = ({ onAdd }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <SearchInput placeholder="Search products..." className="mb-4" />
      <Button onClick={onAdd}>
        <PlusCircle />
        Add Product
      </Button>
    </div>
  );
};

export default ProductToolbar;
