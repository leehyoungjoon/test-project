import type { AppProps } from 'next/app';
import Layout from '../src/components/common/Layout/Layout';

import { Noto_Sans_KR } from 'next/font/google';

import GlobalsStyles from '../styles/GlobalsStyles';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  preload: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalsStyles />
      <div className={notoSansKr.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
