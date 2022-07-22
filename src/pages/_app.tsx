import type { AppProps } from "next/app";
import { GlobalStyles } from "~/features/ui/theme/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
