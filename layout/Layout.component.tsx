import type { LayoutProps as ALayoutProps } from 'antd';

import { Layout as ALayout } from 'antd';

import type { ContentProps, HeaderProps } from './components';

import { Content, Header, Footer } from './components';

import styles from './Layout.module.scss';

export type LayoutProps = ALayoutProps & ContentProps & HeaderProps;

const Layout = ({ children, router }: LayoutProps) => {
  return (
    <ALayout className={styles.container}>
      <Header />
      <Content router={router}>{children}</Content>
      <Footer />
    </ALayout>
  );
};

export default Layout;
