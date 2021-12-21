import { Layout as ALayout } from 'antd';

import type { ContentProps } from './components';

import { Content, Header, Footer } from './components';

export type LayoutProps = ContentProps;

const Layout = ({ children }: LayoutProps) => {
  return (
    <ALayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </ALayout>
  );
};

export default Layout;
