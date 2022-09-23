import Head from 'next/head';
import { Header, Footer } from '../components';
import '../styles/globals.css';

// To check css output file of globals, use npm run build:css
// import '../styles/globals-output.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vruksha Natyalaya</title>
        <link
          rel="shortcut icon"
          href="/images/dark-logo.jpg"
          type="image/x-icon"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
