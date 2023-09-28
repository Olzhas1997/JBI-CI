import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type PropsType = {
  children: ReactNode
};
const Layout = ({ children }: PropsType) => (
  <div className="">
    <Head>
      <title />
      <meta name="description" />
      <meta property="og:title" />
      <meta
        property="og:description"
      />
    </Head>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
