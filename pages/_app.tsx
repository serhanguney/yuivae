import "../styles/globals.css";
import FirebaseContext from "../context/FirebaseContext";
import type { AppProps } from "next/app";
import UserContext from "../context/UserContext";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContext>
      <UserContext>
        <Navbar />
        <Component {...pageProps} />
      </UserContext>
    </FirebaseContext>
  );
}

export default MyApp;
