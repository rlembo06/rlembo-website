import { NextRouter } from 'next/router';
import { Layout } from 'antd';
import { ReactNode } from 'react';

import { RLBreadcrumb } from '@/components/Breadcrumb';

const { Content: AContent } = Layout;

type BreadcrumbItem = { label: string; url: string };

type ContentProps = { children: ReactNode; router: NextRouter };

const Content = ({ children, router }: ContentProps) => {
  const pathSnippets: string[] = router?.pathname?.split('/').filter((item: string) => !!item);
  const breadcrumbItemsList: BreadcrumbItem[] = pathSnippets.reduce(
    (acc: BreadcrumbItem[], pathSnippet: string, index: number) => [
      ...acc,
      {
        label: `${pathSnippet[0].toUpperCase()}${pathSnippet.substr(1).toLowerCase()}`,
        url: `/${pathSnippets.slice(0, index + 1).join('/')}`,
      },
    ],
    [],
  );

  return (
    <AContent className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      {breadcrumbItemsList?.length > 0 && (
        <RLBreadcrumb>
          {breadcrumbItemsList.map(({ label, url }: BreadcrumbItem) => (
            <RLBreadcrumb.Item key={label} href={url}>
              {label}
            </RLBreadcrumb.Item>
          ))}
        </RLBreadcrumb>
      )}
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {children}
      </div>
    </AContent>
  );
};

export type { ContentProps };
export default Content;
