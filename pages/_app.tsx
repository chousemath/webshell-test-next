import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import RemoteRouter from "../components/organisms/RemoteRouter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <RemoteRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
