import "../styles/globals.css";
import FirebaseContext from "../context/FirebaseContext";
import type { AppProps } from "next/app";
import UserContext from "../context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContext>
      <UserContext>
        <Component {...pageProps} />
      </UserContext>
    </FirebaseContext>
  );
}

export default MyApp;
