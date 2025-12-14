export const adminSidebar = () => {
  const prefix = '/admin';
  return [
    { title: 'Dashboard', url: `${prefix}/dashboard`, icon: 'LayoutDashboardIcon' },
    {
      title: 'Products',
      url: `${prefix}/products`,
      icon: 'BoxIcon',
      items: [
        { title: 'All Products', url: `${prefix}/products` },
        { title: 'Changes Request', url: `${prefix}/products/changes-requests` },
      ],
    },
    {
      title: 'User Management',
      url: `${prefix}/user-management`,
      icon: 'UserIcon',
    },
  ];
};
