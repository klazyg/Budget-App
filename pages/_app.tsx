import '../styles/globals.scss'
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Budget App</title>
        <meta name="description" content="Budget App created by Klaudia Zygmunt" />
        <meta name="keywords" content="BUDGET APP PROJECT" />
        <link rel="icon" href="/logo_icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};