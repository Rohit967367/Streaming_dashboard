import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import Store from "../Component/Store/Store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={Store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
