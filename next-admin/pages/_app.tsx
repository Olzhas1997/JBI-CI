import * as React from 'react';
import '@/styles/globals.scss';
import '@/styles/custom.scss';
import type { AppProps } from 'next/app';

// eslint-disable-next-line react/function-component-definition
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
