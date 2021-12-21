import { Layout as ALayout } from 'antd';

import type { ContentProps, HeaderProps } from './components';

import { Content, Header, Footer } from './components';

export type LayoutProps = ContentProps & HeaderProps;

const Layout = ({ children, router }: LayoutProps) => {
  return (
    <ALayout>
      <Header />
      <Content router={router}>{children}</Content>
      <Footer />
    </ALayout>
  );
};

export default Layout;
