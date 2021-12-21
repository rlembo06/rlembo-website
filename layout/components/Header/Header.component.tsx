import Link from 'next/link';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import type { Route } from '../../../commons/types';

import { RLMenu } from '../../../components/Menu';

const { Header: AHeader } = Layout;

const routes: Route[] = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: 'skills',
    name: 'Skills',
  },
  {
    to: '/',
    name: i18n.t('other.Custom'),
  },
];

const Header = () => {
  const t = useTranslation();
  return (
    <AHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <RLMenu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {routes.map(({ to, name }: Route) => (
          <RLMenu.Item key={name}>
            <Link href={to}>{name}</Link>
          </RLMenu.Item>
        ))}
      </RLMenu>
    </AHeader>
  );
};

export default Header;
