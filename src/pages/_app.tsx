import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/_global.scss";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Popular Movies</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
