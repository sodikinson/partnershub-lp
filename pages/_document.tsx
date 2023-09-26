import { Html, Head, Main, NextScript } from "next/document";

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
export default function Document() {
  return (
    <Html>
      <Head>
        <script async src={gtag} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
        <meta
          name="description"
          content="Pembuatan badan usaha (PT/CV/PT Perseorangan) Penanganan laporan keuangan bulanan/tahunan Pembuatan Laporan SPT Pajak Laporan pajak bulanan/tahunan. Pengurusan PKP Virtual Office dan masih banyak lagi Kamu cukup fokus dengan bisnis kamu dan biarkan Partners Hub Indonesia yang urus sampai selesai ☺️ ."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://partnershub.co/" />
        <meta
          property="og:title"
          content="Selamat Datang di Partners Hub Indonesia"
        />
        <meta
          property="og:description"
          content="Pembuatan badan usaha (PT/CV/PT Perseorangan) Penanganan laporan keuangan bulanan/tahunan Pembuatan Laporan SPT Pajak Laporan pajak bulanan/tahunan. Pengurusan PKP Virtual Office dan masih banyak lagi Kamu cukup fokus dengan bisnis kamu dan biarkan Partners Hub Indonesia yang urus sampai selesai ☺️ ."
        />
        <meta property="og:image" content="/img/bannerhub.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://partnershub.co/" />
        <meta
          property="twitter:title"
          content="Selamat Datang di Partners Hub Indonesia"
        />
        <meta
          property="twitter:description"
          content="Pembuatan badan usaha (PT/CV/PT Perseorangan) Penanganan laporan keuangan bulanan/tahunan Pembuatan Laporan SPT Pajak Laporan pajak bulanan/tahunan. Pengurusan PKP Virtual Office dan masih banyak lagi Kamu cukup fokus dengan bisnis kamu dan biarkan Partners Hub Indonesia yang urus sampai selesai ☺️ ."
        />
        <meta property="twitter:image" content="/img/bannerhub.png" />

        <meta
          name="facebook-domain-verification"
          content="5v3xvcoed9n86mm8s5dcbxzmzh04pq"
        />

        {/* BOOTSTRAP CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />

        {/* GOOGLE FONT */}

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* AOS ANIMATION */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        {/* Call BOOTSTRAP JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LEWFYGVCZL"
      ></script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
