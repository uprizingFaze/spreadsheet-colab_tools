import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Colab Tools</title>
        <meta content="noindex" name="robots" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/icon.svg" rel="icon" sizes="32x32" type="image/png" />
        <link href="/icon.svg" rel="icon" sizes="16x16" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
