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
        <meta
          name="description"
          content="This site provides you information about vrukshanatyalaya dance classes in bangalore. You can also reach out to the dance school as mentioned in contact page."
        />
        <meta
          name="keywords"
          content="dance classes in bangalore, dance classes near me, dance classes, vruksha natyalaya, bharatnatyam classes in bangalore, bollywood dance classes, kathak dance classes in bangalore, kuchipudi dance classes in bangalore, yoga classes in bangalore, zumba classes in bangalore, zumba, kuchipudi, kathak, bollywood, bharatnatyam, mamta dance classes"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
