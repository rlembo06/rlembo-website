import type { AppProps } from 'next/app';
import { Layout, Breadcrumb } from 'antd';
import { ReactNode } from 'react';

const { Content: AContent } = Layout;

type ContentProps = { children: ReactNode };

const Content = ({ children }: ContentProps) => (
  <AContent className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      {children}
    </div>
  </AContent>
);

export type { ContentProps };
export default Content;
