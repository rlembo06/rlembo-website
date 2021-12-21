import type { Route } from '@/commons/types';

import i18n from 'i18next';

const routes: Route[] = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/skills',
    name: 'Skills',
  },
  {
    to: '/',
    name: i18n.t('other.Custom'),
  },
];

export { routes };
