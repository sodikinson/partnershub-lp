import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Pembuatan badan usaha (PT/CV/PT Perseorangan)
Penanganan laporan keuangan bulanan/tahunan
Pembuatan Laporan SPT Pajak
Laporan pajak bulanan/tahunan.
Pengurusan PKP
Virtual Office dan masih banyak lagi
Kamu cukup fokus dengan bisnis kamu dan biarkan Partners Hub Indonesia  yang urus sampai selesai ☺️ ."
          key="desc"
        />

        <meta
          property="og:description"
          content="Hei Pebisnis,
Anda Fokus Bisnis Dan Naikin Omset Aja, Biar Kami Yang Urus Administrasi Bisnisnya..."
        />
        <meta property="og:image" content="/img/bannerhub.png" />

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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
