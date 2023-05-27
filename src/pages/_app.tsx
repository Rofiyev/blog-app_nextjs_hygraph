import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../helpers/create-emation-cashe";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "../helpers/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
