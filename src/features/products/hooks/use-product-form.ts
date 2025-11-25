import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ProductInput, productSchema } from '../validators/product.schema';

const defaultValues = {
  name: '',
  description: '',
  stock: 0,
  minStock: 0,
  category: '',
  price: 0,
  discount: 0,
  files: [],
  status: '',
  tags: [],
  supplierIds: [],
};

export const useProductForm = () => {
  const form = useForm<ProductInput>({
    defaultValues,
    resolver: zodResolver(productSchema),
  });

  return { form };
};
