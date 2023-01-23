export default function Story() {
    return (
        <section className="story pt-50 pb-50 mt-5 ">
            <div className="container-xxl container-fluid">
                <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
                    <div
                        className="col-lg-5 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
                        data-aos="zoom-in"
                    >
                        <img
                            src="/img/businessman.webp"
                            width="612"
                            height="452"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-7 col-12 ps-lg-60">
                        <div className="">
                            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                                Kamu fokus dengan bisnis kamu biarkan
                                <br />{" "}
                                <span className="text-primary">
                                    Partner's Hub Indonesia
                                </span>{" "}
                                yang urus sampai selesai. 🤝
                            </h2>
                            <div className="text-lg color-palette-1 mb-30">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        🏢 Pembuatan badan usahanya, PT/CV/PT
                                        Perseorangan
                                    </li>

                                    {/* <br className="d-sm-block d-none" /> */}
                                    <li className="list-group-item">
                                        📓 Penanganan laporan keuangan
                                        bulanan/tahunan
                                    </li>
                                    {/* <br className="d-sm-block d-none" />{" "} */}
                                    <li className="list-group-item">
                                        🧾 Pembuatan Laporan SPT Pajak
                                    </li>
                                    {/* <br className="d-sm-block d-none" /> */}
                                    <li className="list-group-item">
                                        📆 Laporan pajak bulanan/tahunan
                                    </li>
                                    {/* <br className="d-sm-block d-none" /> */}
                                    <li className="list-group-item">
                                        {" "}
                                        🏛 Pengurusan PKP
                                    </li>
                                    {/* <br className="d-sm-block d-none" /> */}
                                    <li className="list-group-item">
                                        🖥 Virtual Office dan masih banyak lagi
                                    </li>
                                </ul>
                                <br className="d-sm-block d-none" />
                            </div>
                            <div className="d-md-block d-flex flex-column w-100">
                                <a
                                    className="btn btn-primary text-lg btn-lg px-4 rounded-pill"
                                    href="https://wa.link/urqzxj"
                                    role="button"
                                >
                                    Konsultasi via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
