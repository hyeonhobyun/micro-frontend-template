import inject from '@stylexjs/dev-runtime';
import { AppProps } from 'next/app';
import Head from 'next/head';

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
  return (
    <>
      <Head>
        <title>Welcome to root!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
