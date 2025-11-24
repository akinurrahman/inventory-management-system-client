import React from 'react';

import { Card } from '@ui/card';

import BreadcrumpSetter from '@/components/shared/breadcrump-setter';
import { getPrefixByRole } from '@/constants';

const AddProductPage = () => {
  const prefix = getPrefixByRole();
  return (
    <Card className="layout">
      <BreadcrumpSetter
        items={[
          { title: 'Products', url: `${prefix}/products` },
          { title: 'Add Product', url: '#' },
        ]}
      />
    </Card>
  );
};

export default AddProductPage;
