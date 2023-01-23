import Illustration from "./Illustration";

export default function MainBanner() {
    return (
        <section className="header h-100 pt-lg-60 pb-50 pt-60">
            <div className="container-xxl container-fluid">
                <div className="row gap-lg-0 gap-5">
                    <div className="col-lg-6 col-12 my-auto">
                        <p className="text-support text-lg color-palette-2">
                            Hi Pebisnis,
                        </p>
                        <h1 className="header-title color-palette-1 fw-bold">
                            Selamat Datang{" "}
                            <span className="d-sm-inline d-none">di</span>
                            <span className="d-sm-none d-inline">di</span>
                            <span className="underline-blue"> </span>{" "}
                            <br className="d-sm-block d-none" />{" "}
                            <span className="underline-blue">
                                Partner's Hub Indonesia
                            </span>{" "}
                        </h1>
                        <p className="mt-30 mb-40 text-lg color-palette-1">
                            Anda Fokus Bisnis Dan Naikin Omset Aja,
                            <br className="d-md-block d-none" /> Kami Yang Urus
                            Administrasi Bisnisnya...
                        </p>
                        <div className="d-flex flex-lg-row flex-column gap-4">
                            <a
                                className="btn btn-get text-lg text-white rounded-pill"
                                href="#service"
                                role="button"
                            >
                                Pelajari
                            </a>
                        </div>
                    </div>
                    <Illustration />
                </div>
            </div>
        </section>
    );
}
