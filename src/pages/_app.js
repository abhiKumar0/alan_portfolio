import Head from 'next/head';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alan - Portfolio</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 