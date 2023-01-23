export default function Accordion() {
    return (
        <section id="faq" className="container-xxl container-fluid pt-50 pb-50">
            <h2 className="text-2xl fw-bold color-palette-1 text-center mb-30">
                <span className="text-primary">Frequently Asked Question</span>
            </h2>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                    >
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            <strong>
                                Berapa lama proses pendirian badan usaha?
                            </strong>
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div className="accordion-body">
                            Proses pendirian badan usaha 2 minggu paling lama.
                            Akta jadi 2 hari setelah tanda tangan minuta
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                    >
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            <strong>
                                Bagaimana jika saya ingin mendirikan badan usaha
                                diluar pulau jawa?
                            </strong>
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                    >
                        <div className="accordion-body">
                            Kamu mau bikin PT di tengah hutan kalimantan juga
                            kita jabanin. Pokoknya masih di negara +62 mah
                            cincai laah..
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                    >
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            <strong>
                                Berapa modal awal untuk mendirikan badan usaha?
                            </strong>
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                    >
                        <div className="accordion-body">
                            Minimal 100 juta. Kalo nggak punya duit segitu
                            gimana? Konsultasi aja dulu, soalnya kepanjangan
                            kalo dijelasin disini. Gratis kok, adminnya nggak
                            gigit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                    >
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            <strong>
                                Apakah bisa urus laporan keuangan bulanan /
                                tahunan aja kalo udah punya PT?
                            </strong>
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                    >
                        <div className="accordion-body">
                            Bisa banget, apa sih yang gak bisa buat kamuu
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
