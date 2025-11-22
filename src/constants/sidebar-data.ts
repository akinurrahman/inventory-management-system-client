export const adminSidebar = () => {
  const prefix = '/admin';
  return [
    { title: 'Dashboard', url: `${prefix}/dashboard`, icon: 'LayoutDashboardIcon' },
    { title: 'Products', url: `${prefix}/products`, icon: 'BoxIcon' },
  ];
};
