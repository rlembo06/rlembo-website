import type { AppProps } from 'next/app'

import { Button, DatePicker, version } from 'antd';

import '../styles/globals.less';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
}

export default MyApp
