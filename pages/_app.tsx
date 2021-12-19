import type { AppProps } from 'next/app';

import '../styles/globals.less';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
