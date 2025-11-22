import React from 'react';

import { Card, CardContent, CardHeader } from '@ui/card';
import { BoxIcon } from 'lucide-react';

import BreadcrumpSetter from '@/components/utils/breadcrump-setter';
import PageHeader from '@/components/utils/page-header';

const ProductsPage = () => {
  return (
    <Card className="layout">
      <BreadcrumpSetter items={[{ title: 'Products', url: '#' }]} />
      <CardHeader>
        <PageHeader title="Products" description="Manage your products here" icon={<BoxIcon />} />
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default ProductsPage;
