import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'order',
    path: '/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'goods',
    path: '/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'invoice',
    path: '/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'wallet',
    path: '/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'menu',
    path: '/menu',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'login',
    path: '/sign/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'blog',
    path: '/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'summary',
    path: '/summary',
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
