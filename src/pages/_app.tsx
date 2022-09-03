import { domAnimation, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";

import { GlobalStyles } from "~/features/ui/theme/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <Component {...pageProps} />
      <GlobalStyles />
    </LazyMotion>
  );
}

export default MyApp;
