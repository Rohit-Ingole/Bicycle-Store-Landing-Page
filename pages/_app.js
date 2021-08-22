import Head from "next/head";

import "../styles/globals.css";
import "../styles/grid.css";

import "boxicons/css/boxicons.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Rohit Bikes</title>
        <meta
          name="description"
          content="Bikes E-commerce store landing page"
        />
        <link rel="icon" href="/bike.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
