import "../styles/utilities.css";
import "../styles/homepage.css";
import "../styles/detail.css";
import "../styles/checkout.css";
import "../styles/404-not-found.css";
import "../styles/complete-checkout.css";

import "../styles/navbar-log-in.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { useRouter } from "next/router";

const GTM_ID = "GTM-KNVGF2XG";
const tagManagerArgs = {
  gtmId: GTM_ID,
};
if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      window.gtag("event", "page_view", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("738246817999447"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Selamat Datang di Partners Hub Indonesia</title>
        <meta name="title" content="Selamat Datang di Partners Hub Indonesia" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
