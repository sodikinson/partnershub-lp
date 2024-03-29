import Image from "next/image";
import Menu from "./Menu";

import ToggleMenu from "./ToggleMenu";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <Image
              src="/icon/logo-phi.png"
              alt="logo"
              width={100}
              height={60}
            />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" href="/" active />
              <Menu title="Layanan" href="/#service" />
              <Menu title="Check nama PT" href="https://wa.link/v2uevt" />
              <Menu title="FAQ" href="/#faq" />
              <Menu title="Kenapa harus pilih kami" href="/#whyus" />
              <Menu title="Tentang Kami" href="/#footer" />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
