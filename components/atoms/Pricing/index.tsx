export default function Pricing() {
    return (
        <section id="service" className="mt-5">
            <h2 className="text-4xl fw-bold color-palette-1 text-center ">
                <span className="text-primary">Our Service</span>
            </h2>

            {/* PEMBUATAN PT */}
            <div className="container text-center py-5 ">
                <h1 className="display-4">Pembuatan PT</h1>
            </div>

            <div className="container text-center rounded-xl">
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card shadow-sm bg-light rounded">
                            <div className="card-header bg-info text-white">
                                <h4>Basic</h4>
                            </div>
                            <div className="card-body bg-white">
                                <h1 className="my-0 fw-normal">
                                    <div
                                        className="spinner-grow text-danger"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                    <span className="text-danger ">
                                        Rp 5.550.000
                                    </span>{" "}
                                    <br />
                                    <small className="text-muted text-muted text-sm text-decoration-line-through">
                                        Rp 6.500.000
                                    </small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4 text-start">
                                    <li className="p-2">Akta</li>

                                    <li className="p-2">SK</li>
                                    <li className="p-2">NIB</li>
                                    <li className="p-2">NPWP</li>
                                    <li className="p-2">
                                        Pembukuan Rekening Tabungan
                                    </li>
                                    <li>
                                        Laporan Keuangan 6 bulan Pembukuan &
                                        Free konsultasi pelaporan keuangan
                                    </li>
                                </ul>
                                <a
                                    href="https://wa.link/urqzxj"
                                    className="btn btn-info btn-lg btn-block px-5 text-white"
                                >
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4">
                        <div className="card shadow-lg bg-white rounded">
                            <div className="card-header bg-primary text-white">
                                <h4>Executive</h4>
                            </div>
                            <div className="card-body bg-success-subtle">
                                <h1 className="my-0 fw-normal">
                                    <div
                                        className="spinner-grow text-danger"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                    <span className="text-danger ">
                                        {" "}
                                        Rp 7.950.000
                                    </span>{" "}
                                    <br />
                                    <small className="text-muted text-muted text-sm text-decoration-line-through">
                                        Rp 10.000.000
                                    </small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4 text-start">
                                    <li className="p-2">Akta</li>
                                    <li className="p-2">SK</li>
                                    <li className="p-2">NIB</li>
                                    <li className="p-2">NPWP</li>
                                    <li className="p-2">EFIN</li>
                                    <li className="p-2">SKT Pajak</li>
                                    <li className="p-2">Logo Perusahaan</li>
                                    <li className="p-2">
                                        9 Feed Design instagram
                                    </li>
                                    <li className="p-2">
                                        Pembukaan Rekening Tabungan
                                    </li>
                                    <li className="p-2">
                                        Virtual Office 1 Tahun
                                    </li>
                                    <li className="p-2">
                                        Laporan Keuangan 6 Bulan Pembukuan dan
                                        Free konsultasi pelaporan keuangan
                                    </li>
                                    <li className="p-2">
                                        Laporan Pajak 6 Bulan dan Free
                                        Konsultasi Perpajakan
                                    </li>
                                </ul>
                                <a
                                    href="https://wa.link/urqzxj"
                                    className="btn btn-primary btn-lg btn-block px-5"
                                >
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4">
                        <div className="card shadow-sm bg-white rounded">
                            <div className="card-header bg-info text-white">
                                <h4>Business</h4>
                            </div>
                            <div className="card-body bg-light">
                                <h1 className="my-0 fw-normal">
                                    <div
                                        className="spinner-grow text-danger"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                    <span className="text-danger">
                                        Rp 7.500.000
                                    </span>{" "}
                                    <br />
                                    <small className="text-muted text-sm text-decoration-line-through">
                                        Rp 9.000.000
                                    </small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4 text-start">
                                    <li className="p-2">Akta</li>
                                    <li className="p-2">SK</li>
                                    <li className="p-2">NIB</li>
                                    <li className="p-2">NPWP</li>
                                    <li className="p-2">EFIN</li>
                                    <li className="p-2">SKT Pajak</li>
                                    <li className="p-2">
                                        Pembukuan Rekening Tabungan
                                    </li>
                                    <li className="p-2">
                                        Virtual Office 1 Tahun
                                    </li>
                                    <li className="p-2">
                                        Laporan Keuangan 6 bulan Pembukuan &
                                        Free konsultasi pelaporan keuangan
                                    </li>
                                </ul>
                                <a
                                    href="https://wa.link/urqzxj"
                                    className="btn btn-info text-white btn-lg btn-block px-5"
                                >
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PEMBUATAN CV */}

            <div className="container text-center py-5 mt-5">
                <h1 className="display-4">Pembuatan CV</h1>
            </div>

            <div className="container text-center rounded-xl">
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card shadow-sm bg-light rounded">
                            <div className="card-header bg-info text-white">
                                <h4>Basic</h4>
                            </div>
                            <div className="card-body bg-primary-subtle">
                                <h1 className="my-0 fw-normal">
                                    <div
                                        className="spinner-grow text-danger"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                    <span className="text-danger ">
                                        Rp 4.050.000
                                    </span>{" "}
                                    <br />
                                    <small className="text-muted text-muted text-sm text-decoration-line-through">
                                        Rp 5.000.000
                                    </small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4 text-start">
                                    <li className="p-2">Akta</li>
                                    <li className="p-2">SK</li>
                                    <li className="p-2">NIB</li>
                                    <li className="p-2">NPWP</li>
                                    <li className="p-2">SKT Pajak</li>
                                    <li className="p-2">
                                        Pembukuan Rekening Tabungan
                                    </li>
                                    <li>
                                        Laporan Keuangan 6 bulan Pembukuan &
                                        Free konsultasi pelaporan keuangan
                                    </li>
                                </ul>
                                <a
                                    href="https://wa.link/urqzxj"
                                    className="btn btn-info btn-lg btn-block px-5 text-white"
                                >
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4">
                        <div className="card shadow-lg bg-white rounded">
                            <div className="card-header bg-success text-white">
                                <h4>Executive</h4>
                            </div>
                            <div className="card-body bg-success-subtle">
                                <h1 className="my-0 fw-normal">
                                    <div
                                        className="spinner-grow text-danger"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                    <span className="text-danger ">
                                        {" "}
                                        Rp 5.950.000
                                    </span>{" "}
                                    <br />
                                    <small className="text-muted text-muted text-sm text-decoration-line-through">
                                        Rp 8.000.000
                                    </small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4 text-start">
                                    <li className="p-2">Akta</li>
                                    <li className="p-2">SK</li>
                                    <li className="p-2">NIB</li>
                                    <li className="p-2">NPWP</li>

                                    <li className="p-2">SKT Pajak</li>
                                    <li className="p-2">Logo Perusahaan</li>
                                    <li className="p-2">
                                        9 Feed Design instagram
                                    </li>
                                    <li className="p-2">
                                        Pembukaan Rekening Tabungan
                                    </li>
                                    <li className="p-2">
                                        Virtual Office 1 Tahun
                                    </li>
                                    <li className="p-2">
                                        Laporan Keuangan 6 Bulan Pembukuan dan
                                        Free konsultasi pelaporan keuangan
                                    </li>
                                    <li className="p-2">
                                        Laporan Pajak 6 Bulan dan Free
                                        Konsultasi Perpajakan
                                    </li>
                                </ul>
                                <a
                                    href="https://wa.link/urqzxj"
                                    className="btn btn-success btn-lg btn-block px-5"
                                >
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4">
                        <div className="card shadow-sm bg-white rounded">
                            <div className="card-header bg-primary text-white">
                                <h4>Business</h4>
                            </div>
                            <div className="card-body bg-light">
                                <h1 className="my-0 fw-normal">
                                    <div
                                        className="spinner-grow text-danger"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                    <span className="text-danger">
                                        Rp 5.500.000
                                    </span>{" "}
                                    <br />
                                    <small className="text-muted text-sm text-decoration-line-through">
                                        Rp 7.000.000
                                    </small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4 text-start">
                                    <li className="p-2">Akta</li>
                                    <li className="p-2">SK</li>
                                    <li className="p-2">NIB</li>
                                    <li className="p-2">NPWP</li>

                                    <li className="p-2">SKT Pajak</li>
                                    <li className="p-2">
                                        Pembukuan Rekening Tabungan
                                    </li>
                                    <li className="p-2">
                                        Virtual Office 1 Tahun
                                    </li>
                                    <li className="p-2">
                                        Laporan Keuangan 6 bulan Pembukuan &
                                        Free konsultasi pelaporan keuangan
                                    </li>
                                </ul>
                                <a
                                    href="https://wa.link/urqzxj"
                                    className="btn btn-primary btn-lg btn-block px-5"
                                >
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
