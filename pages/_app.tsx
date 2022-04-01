import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import "github-markdown-css/github-markdown-light.css";
import "../styles/global.css";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
