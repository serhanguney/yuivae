import "../styles/globals.scss";
import type { AppProps } from "next/app";
import firebaseClient from "../lib/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  firebaseClient();
  return <Component {...pageProps} />;
}

export default MyApp;
