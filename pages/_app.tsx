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

const GTM_ID = "GTM-56MHVKB";
const tagManagerArgs = {
    gtmId: GTM_ID,
};
if (process.browser) {
    TagManager.initialize(tagManagerArgs);
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Partners Hub Indonesia</title>
                <meta property="og:title" content="Partner's Hub Indonesia" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
