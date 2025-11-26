import React from 'react';

import { Button } from '@ui/button';
import { Eye, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Product } from '../../types/product.types';

interface Props {
  onDelete?: (product: Product) => void;
  onView?: (product: Product) => void;
  product: Product;
  onEdit?: (product: Product) => void;
}

const ProductActionMenu = ({ onDelete, onView, onEdit, product }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        {onEdit && (
          <DropdownMenuItem onClick={() => onEdit?.(product)}>
            <span className="flex items-center gap-2">
              <Pencil className="h-4 w-4 text-blue-500" />
              Edit
            </span>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem onClick={() => onView?.(product)}>
          <span className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-gray-600" />
            View Details
          </span>
        </DropdownMenuItem>

        {onDelete && <DropdownMenuSeparator />}

        {onDelete && (
          <DropdownMenuItem
            onClick={() => onDelete?.(product)}
            className="text-red-600 focus:text-red-600"
          >
            <span className="flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-red-600" />
              Delete
            </span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductActionMenu;
