import { NextRouter } from 'next/router';
import { Layout } from 'antd';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// import { RLBreadcrumb } from '@/components/Breadcrumb';

const { Content: AContent } = Layout;

type BreadcrumbItem = { label: string; url: string };

type ContentProps = { children: ReactNode; router?: NextRouter };

const Content = ({ children, router }: ContentProps) => {
  const t = useTranslation();

  const pathSnippets: string[] | undefined = router?.pathname
    ?.split('/')
    .filter((item: string) => !!item);
  const extraBreadcrumbItems: BreadcrumbItem[] | undefined = pathSnippets?.reduce(
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
      {/* <RLBreadcrumb>
        <RLBreadcrumb.Item href={`/`}>{t.t('other.Home')}</RLBreadcrumb.Item>
        {(extraBreadcrumbItems || []).map(({ label, url }: BreadcrumbItem) => (
          <RLBreadcrumb.Item key={label} href={url}>
            {label}
          </RLBreadcrumb.Item>
        ))}
      </RLBreadcrumb> */}
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {children}
      </div>
    </AContent>
  );
};

export type { ContentProps };
export default Content;
