import type { AppProps } from 'next/app';

import { withTranslation } from 'react-i18next';

import localization from '@/localization';

import '@/styles/globals.less';

localization();

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default withTranslation()(App);
