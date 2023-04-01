import Image from "next/image";

export default function Footer() {
  return (
    <section id="footer" className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image
                  src="/icon/logo-phi.png"
                  alt="logo"
                  width={100}
                  height={60}
                />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                <strong>Partners Hub Indonesia</strong>
                <br /> sudah menangani lebih dari 150++ Perusahaan di seluruh
                INDONESIA.
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2023. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="/"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="/#pricing"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Layanan
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="/#faq"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="https://wa.link/v2uevt"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Konsultasi
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="https://wa.link/v2uevt"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Sedang Promo
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="https://wa.link/v2uevt"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Check nama PT
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="mailto: hi@store.gg"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        PT Kolega Bisnis Indonesia
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="tel: 081213354221"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        08121 3354 221
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="mailto: cindy@partnershub.co"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        cindy@partnershub.co
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        World Trade Center 5 Lt 3A
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="tel: 02111229090"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Jl Jenderal Sudirman No.Kav 29-31, Kuningan, Karet,
                        Kecamatan Setiabudi, Kota Jakarta Selatan, DKI Jakarta
                        12920
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
