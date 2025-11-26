import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Product } from '../types/product.types';
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

export const useProductForm = (product: Product | undefined) => {
  const form = useForm<ProductInput>({
    defaultValues,
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (!product) return;
    form.reset({
      ...product,
      files: product.files.map(file => ({ url: file, thumbnail: file })),
      supplierIds: product.suppliers?.map(supplier => supplier._id) || [],
    });
  }, [product, form]);

  return { form };
};
