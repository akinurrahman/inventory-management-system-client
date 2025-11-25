import { UseFormReturn } from 'react-hook-form';

import { ProductInput } from '../validators/product.schema';

export function usePriceDetails(form: UseFormReturn<ProductInput>) {
  const price = form.watch('price') ?? 0;
  const discount = form.watch('discount') ?? 0;

  const discountAmount = (price * discount) / 100;
  const final = price - discountAmount;

  return {
    original: price,
    discount: discountAmount,
    final,
    discountPercent: discount,
  };
}
