import { AppProps } from "next/app";
import { Fragment } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Cursor from "../components/UI/cursor/cursor";

import LoadingSpinner from "../components/UI/loading/loading_spinner";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Cursor />
      <LoadingSpinner />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
