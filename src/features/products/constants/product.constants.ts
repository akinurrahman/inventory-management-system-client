export enum PRODUCT_CATEGORY {
  ELECTRONICS = 'electronics',
  FASHION = 'fashion',
  HOME = 'home',
  BEAUTY = 'beauty',
  SPORTS = 'sports',
  TOYS = 'toys',
  AUTOMOTIVE = 'automotive',
}

export const STATUS_OPTIONS = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Draft', value: 'draft' },
];

export const categoryOptions = Object.entries(PRODUCT_CATEGORY).map(([key, value]) => ({
  label: key.charAt(0) + key.slice(1).toLowerCase().replace(/_/g, ' '),
  value,
}));
