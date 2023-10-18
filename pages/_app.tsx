import { AppProps } from "next/app";
import { Fragment } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/UI/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
