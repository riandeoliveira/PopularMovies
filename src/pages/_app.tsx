import { FilterProvider } from "contexts/FIlterContext";
import { MovieProvider } from "contexts/MovieContext";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <MovieProvider>
        <FilterProvider>
          <Component {...pageProps} />
        </FilterProvider>
      </MovieProvider>
    </>
  );
};

export default App;
