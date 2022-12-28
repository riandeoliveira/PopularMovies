import { Toast } from "components/Toast";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store } from "redux/store";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <Toast />
      </Provider>
    </>
  );
};

export default App;
