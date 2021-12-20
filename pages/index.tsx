import { Layout, Breadcrumb } from 'antd';
import {useTranslation} from 'react-i18next'
import { RLMenu } from '../components/Menu';

const { Header, Content, Footer } = Layout;

const Home = () => {
  const t = useTranslation();
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <RLMenu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <RLMenu.Item key="1">{t.t('other.Chat')}</RLMenu.Item>
          <RLMenu.Item key="2">{t.t('other.Custom')}</RLMenu.Item>
          <RLMenu.Item key="3">{t.t('other.History')}</RLMenu.Item>
        </RLMenu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );

}

export default Home;