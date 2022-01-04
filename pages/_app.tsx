import type { AppProps } from 'next/app';

import { withTranslation } from 'react-i18next';

import { Layout } from '@/layout';
import localization from '@/localization';

import '@/styles/globals.less';

localization();

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default withTranslation()(App);
