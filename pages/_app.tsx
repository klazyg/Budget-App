import '../styles/globals.scss'
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

type Props = {
  Component: any;
  pageProps: any;
}

const _app = ({ Component, pageProps }: Props) => (
  <>
    <Head>
      <title>Budget App</title>
      <meta charSet="UTF-8"></meta>
      <meta
        name="viewport"
        content="minimum-scale=1, width=device-width, initial-scale=1 ,shrink-to-fit=no, viewport-fit=cover"
      ></meta>
      <meta name="description" content="Budget App created by Klaudia Zygmunt" />
      <meta name="keywords" content="BUDGET APP PROJECT" />
      <link rel="icon" href="/logo_icon.png" />
    </Head>
    <Layout Component={Component} pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default _app;