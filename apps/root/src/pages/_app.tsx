import inject from '@stylexjs/dev-runtime';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@wemeetdev/jds-web/src/styles/font.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-datepicker/dist/react-datepicker.css';
import 'spinkit/spinkit.css';

if (process.env.NODE_ENV === 'development') {
  inject({
    styleResolution: 'property-specificity',
    useRemForFontSize: false,
    classNamePrefix: 'x',
    dev: true,
    test: false,
  });
}

function CustomApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Head>
        <title>Welcome to root!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <div id="LayersContainer" />
      </main>
    </QueryClientProvider>
  );
}

export default CustomApp;
