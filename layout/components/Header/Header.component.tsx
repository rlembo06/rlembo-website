import { useEffect, useState } from 'react';

import Link from 'next/link';
import { Layout } from 'antd';

import type { Route } from '@/commons';

import { routes } from '@/commons';
import { RLMenu } from '@/components';

const { Header: AHeader } = Layout;

type HeaderProps = {};

import styles from './Header.module.scss';

const Header = ({}: HeaderProps) => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  const listenToScroll = (): void => {
    const winScroll: number = document.body.scrollTop || document.documentElement.scrollTop;
    setScrolling(winScroll > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);

  return (
    <AHeader className={`${styles.container} ${!scrolling ? styles.scrolling : ''}`}>
      <div className={styles.logo}>
        <Link href={routes.find((route: Route) => ['Home'].includes(route.name))?.name || '/'}>
          <>
            Romain <b>LEMBO</b>
          </>
        </Link>
      </div>
      <RLMenu className={styles.menu} mode="horizontal" defaultSelectedKeys={['2']}>
        {routes.map(({ to, name }: Route) => (
          <RLMenu.Item key={name}>
            <Link href={to}>{name}</Link>
          </RLMenu.Item>
        ))}
      </RLMenu>
    </AHeader>
  );
};

export type { HeaderProps };
export default Header;
