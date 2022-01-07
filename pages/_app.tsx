import type { AppProps } from 'next/app';

import { withTranslation } from 'react-i18next';

import { Layout } from '@/layout';
import localization from '@/localization';

import 'antd/dist/antd.less';
import '@/styles/globals.css';

localization();

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default withTranslation()(App);
