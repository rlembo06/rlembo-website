import { Layout } from 'antd';
import { ReactNode } from 'react';

import { RLBreadcrumb } from '@/components/Breadcrumb';

const { Content: AContent } = Layout;

type ContentProps = { children: ReactNode };

const Content = ({ children }: ContentProps) => {
  return (
    <AContent className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <RLBreadcrumb>
        <RLBreadcrumb.Item>Home</RLBreadcrumb.Item>
        <RLBreadcrumb.Item>List</RLBreadcrumb.Item>
        <RLBreadcrumb.Item>App</RLBreadcrumb.Item>
      </RLBreadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {children}
      </div>
    </AContent>
  );
};

export type { ContentProps };
export default Content;
