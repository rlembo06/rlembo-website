import Link from 'next/link';
import { Layout } from 'antd';

import type { Route } from '@/commons';

import { routes } from '@/commons';
import { RLMenu } from '@/components';

const { Header: AHeader } = Layout;

type HeaderProps = {};

const Header = ({}: HeaderProps) => (
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

export type { HeaderProps };
export default Header;
